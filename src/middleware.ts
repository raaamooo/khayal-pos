import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Venue resolution middleware.
 *
 * Runs before every request. Resolves the venue slug from either:
 * 1. Subdomain: khayal.example.com → slug = "khayal"
 * 2. Path prefix: /khayal/menu → slug = "khayal"
 *
 * Once resolved, the slug and ID are set in request headers for
 * downstream server components. The actual DB validation happens
 * in the venue layout (server component), not here in edge middleware,
 * to avoid the circular self-fetch problem.
 *
 * Edge middleware can't import Prisma, so we defer full validation
 * to the server component layer. Middleware only extracts + routes.
 */

// Paths that should never be treated as a venue slug
const SYSTEM_PATHS = new Set([
  "_next",
  "api",
  "favicon.ico",
  "logos",
  "images",
  "fonts",
  "not-found",
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip system/static paths
  const firstSegment = pathname.split("/")[1];
  if (SYSTEM_PATHS.has(firstSegment)) {
    return NextResponse.next();
  }

  // ── 1. Try subdomain resolution ──
  const hostname = request.headers.get("host") || "";
  const hostParts = hostname.split(".");

  let venueSlug: string | null = null;

  // Subdomain pattern: khayal.example.com or khayal.localhost:3000
  // Must have 2+ parts and the first part isn't "www" or "localhost"
  if (
    hostParts.length >= 2 &&
    hostParts[0] !== "www" &&
    hostParts[0] !== "localhost"
  ) {
    venueSlug = hostParts[0];

    // For subdomain routing, rewrite /path to /[venue]/path
    const url = request.nextUrl.clone();
    url.pathname = `/${venueSlug}${pathname}`;

    const headers = new Headers(request.headers);
    headers.set("x-venue-slug", venueSlug);

    return NextResponse.rewrite(url, { request: { headers } });
  }

  // ── 2. Path-prefix resolution ──
  if (firstSegment && !SYSTEM_PATHS.has(firstSegment)) {
    venueSlug = firstSegment;

    // The path already has the slug as [venue] segment — just pass through
    // with the venue slug in headers for server components
    const headers = new Headers(request.headers);
    headers.set("x-venue-slug", venueSlug);

    return NextResponse.next({ request: { headers } });
  }

  // ── 3. Root path or no venue in URL ──
  if (pathname === "/" || !firstSegment) {
    const url = request.nextUrl.clone();
    url.pathname = "/khayal";
    return NextResponse.redirect(url);
  }

  const url = request.nextUrl.clone();
  url.pathname = "/not-found";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
