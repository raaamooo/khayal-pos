import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { prisma } from "./db";

import type { Role } from "@/generated/prisma";

/**
 * NextAuth v5 configuration.
 *
 * Key design decisions:
 * - Credentials provider authenticates against StaffAccount.
 * - JWT token carries role + venueId — no extra DB lookup per request.
 * - Session exposes role + venueId for server/client use.
 * - Every protected route must verify session.user.venueId matches
 *   the resolved venue from middleware.
 */
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Staff Login",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        venueId: { label: "Venue ID", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password || !credentials?.venueId) {
          return null;
        }

        const email = credentials.email as string;
        const password = credentials.password as string;
        const venueId = credentials.venueId as string;

        // Look up staff by venue + email (compound unique)
        const staff = await prisma.staffAccount.findUnique({
          where: {
            venueId_email: { venueId, email },
          },
        });

        if (!staff || !staff.active) return null;

        // Verify password
        const isValid = await compare(password, staff.passwordHash);
        if (!isValid) return null;

        return {
          id: staff.id,
          email: staff.email,
          name: staff.name,
          role: staff.role,
          venueId: staff.venueId,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as { role: Role }).role;
        token.venueId = (user as { venueId: string }).venueId;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub as string;
        session.user.role = token.role as Role;
        session.user.venueId = token.venueId as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
});
