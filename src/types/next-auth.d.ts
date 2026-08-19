import type { Role } from "@/generated/prisma";
import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: Role;
      venueId: string;
    } & DefaultSession["user"];
  }

  interface User {
    role: Role;
    venueId: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: Role;
    venueId: string;
  }
}
