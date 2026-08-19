import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khayal POS",
  description: "Multi-tenant point-of-sale and venue management platform",
};

/**
 * Root layout — minimal shell.
 * The venue-scoped layout ([venue]/layout.tsx) handles
 * ThemeProvider, fonts, and venue-specific meta.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
