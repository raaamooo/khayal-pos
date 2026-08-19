import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

/**
 * GET /api/venues/[slug]/validate
 *
 * Internal-only API route used by middleware to validate a venue slug.
 * Returns the venue's id and slug if found and active.
 * Returns 404 if not found or inactive.
 */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const venue = await prisma.venue.findUnique({
    where: { slug, active: true },
    select: { id: true, slug: true },
  });

  if (!venue) {
    return NextResponse.json({ error: "Venue not found" }, { status: 404 });
  }

  return NextResponse.json(venue, {
    headers: {
      // Cache for 5 minutes — venue slugs don't change often
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
    },
  });
}
