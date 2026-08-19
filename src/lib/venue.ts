import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { cache } from "react";
import { prisma } from "./db";

// ─────────────────────────────────────────────────────────
// Header keys set by middleware after venue resolution
// ─────────────────────────────────────────────────────────
export const VENUE_ID_HEADER = "x-venue-id";
export const VENUE_SLUG_HEADER = "x-venue-slug";

// ─────────────────────────────────────────────────────────
// Theme type — matches the JSON shape stored in venues.theme
// ─────────────────────────────────────────────────────────
export interface VenueTheme {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundDark: string;
  backgroundLight: string;
  textDark: string;
  textLight: string;
  fontHeading: string;
  fontBody: string;
  logoUrl: string;
}

export interface ResolvedVenue {
  id: string;
  slug: string;
  name: string;
  theme: VenueTheme;
  defaultLanguage: string;
  planTier: string;
  active: boolean;
}

// ─────────────────────────────────────────────────────────
// Read the resolved venue from request headers (set by middleware)
// ─────────────────────────────────────────────────────────

/**
 * Reads venue ID and slug from the headers injected by middleware.
 * Returns null if venue hasn't been resolved yet (shouldn't happen
 * in practice because middleware runs first).
 */
export async function getVenueFromHeaders(): Promise<{
  venueSlug: string;
} | null> {
  const headerStore = await headers();
  const venueSlug = headerStore.get(VENUE_SLUG_HEADER);

  if (!venueSlug) return null;
  return { venueSlug };
}

// ─────────────────────────────────────────────────────────
// Fetch and cache the full venue record
// ─────────────────────────────────────────────────────────

/**
 * Fetch a venue by slug. Uses React `cache()` so multiple calls
 * within the same request only hit the DB once.
 */
export const getVenueBySlug = cache(
  async (slug: string): Promise<ResolvedVenue | null> => {
    const venue = await prisma.venue.findUnique({
      where: { slug, active: true },
    });

    if (!venue) return null;

    return {
      id: venue.id,
      slug: venue.slug,
      name: venue.name,
      theme: venue.theme as unknown as VenueTheme,
      defaultLanguage: venue.defaultLanguage,
      planTier: venue.planTier,
      active: venue.active,
    };
  }
);

/**
 * Convenience: resolve the current venue from headers, then fetch full data.
 * Calls notFound() if no venue is resolved. Use this in layouts/pages.
 */
export async function requireVenue(): Promise<ResolvedVenue> {
  const headerData = await getVenueFromHeaders();
  if (!headerData) notFound();

  const venue = await getVenueBySlug(headerData.venueSlug);
  if (!venue) notFound();

  return venue;
}
