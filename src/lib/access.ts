import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { requireVenue } from "@/lib/venue";
import type { Role } from "@/generated/prisma";

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AuthError";
  }
}

/**
 * Ensures the user is logged in, belongs to the current venue,
 * and has one of the allowed roles (or is a MANAGER).
 * Used in Server Components.
 * Redirects on failure.
 */
export async function requireAuth(allowedRoles: Role[]) {
  const session = await auth();
  const venue = await requireVenue();

  if (!session?.user) {
    redirect(`/${venue.slug}/login`);
  }

  // Cross-tenant protection
  if (session.user.venueId !== venue.id) {
    redirect(`/${venue.slug}/login`);
  }

  // Role validation
  const userRole = session.user.role;
  const isManager = userRole === "MANAGER";

  if (!isManager && !allowedRoles.includes(userRole)) {
    redirect(`/${venue.slug}/unauthorized`);
  }

  return session.user;
}

/**
 * Ensures the user is logged in, belongs to the current venue,
 * and has one of the allowed roles (or is a MANAGER).
 * Used in Route Handlers (APIs) or Server Actions.
 * Throws AuthError instead of redirecting.
 */
export async function requireApiAuth(allowedRoles: Role[], venueId: string) {
  const session = await auth();

  if (!session?.user || session.user.venueId !== venueId) {
    throw new AuthError("Unauthorized");
  }

  const userRole = session.user.role;
  const isManager = userRole === "MANAGER";

  if (!isManager && !allowedRoles.includes(userRole)) {
    throw new AuthError("Forbidden");
  }

  return session.user;
}

/**
 * Helper to catch AuthErrors in route handlers and return proper NextResponses.
 */
export function handleApiAuthError(error: unknown) {
  if (error instanceof AuthError) {
    const status = error.message === "Forbidden" ? 403 : 401;
    return NextResponse.json({ error: error.message }, { status });
  }
  return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
}
