import { notFound } from "next/navigation";
import { getVenueBySlug } from "@/lib/venue";
import { ThemeProvider } from "@/components/ThemeProvider";
import Background3D from "@/components/Background3D";

/**
 * Venue-scoped layout.
 *
 * The [venue] dynamic segment in the URL is the venue slug.
 * We validate it against the database here (middleware only
 * extracts the slug — it can't query Prisma at the edge).
 *
 * If the venue is not found or inactive → 404.
 * Otherwise, load its Google Fonts and wrap children in ThemeProvider.
 */
export default async function VenueLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ venue: string }>;
}) {
  const { venue: slug } = await params;
  const venue = await getVenueBySlug(slug);

  if (!venue) {
    notFound();
  }

  // Build Google Fonts URL from venue theme
  const fonts = [venue.theme.fontHeading, venue.theme.fontBody];
  const uniqueFonts = [...new Set(fonts)];
  const googleFontsUrl = `https://fonts.googleapis.com/css2?${uniqueFonts
    .map((f) => `family=${encodeURIComponent(f)}:wght@300;400;500;600;700`)
    .join("&")}&display=swap`;

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="stylesheet" href={googleFontsUrl} />
      <ThemeProvider
        theme={venue.theme}
        defaultLanguage={venue.defaultLanguage}
      >
        <Background3D />
        {children}
      </ThemeProvider>
    </>
  );
}
