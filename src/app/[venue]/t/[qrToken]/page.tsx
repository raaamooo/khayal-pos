import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { requireVenue } from "@/lib/venue";
import CustomerApp from "./CustomerApp";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const venue = await requireVenue();
  return {
    title: `Menu — ${venue.name}`,
    description: `Order from ${venue.name}`,
  };
}

export default async function TableRoutingPage({
  params,
}: {
  params: Promise<{ venue: string; qrToken: string }>;
}) {
  const { qrToken } = await params;
  const venue = await requireVenue();

  // Find the table that belongs to this venue and matches the QR token
  const table = await prisma.table.findUnique({
    where: { qrToken },
  });

  if (!table || table.venueId !== venue.id) {
    notFound();
  }

  // Validate active session
  if (!table.activeSessionId) {
    return (
      <main style={{ padding: "2rem", fontFamily: "var(--font-body)", textAlign: "center", color: "var(--text)", minHeight: "100vh", backgroundColor: "var(--background)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div>
          <h1 style={{ fontFamily: "var(--font-heading)", color: "var(--primary-color)", marginBottom: "1rem" }}>Table Closed</h1>
          <p>This table is not currently active. Please ask your waiter to open a session for you to view the menu and place an order.</p>
        </div>
      </main>
    );
  }

  // Fetch menu data to pass to the client application
  const categories = await prisma.category.findMany({
    where: { venueId: venue.id },
    orderBy: { orderIndex: "asc" },
  });

  const menuItems = await prisma.menuItem.findMany({
    where: { venueId: venue.id },
    include: {
      modifierGroups: {
        include: {
          options: true,
        },
      },
    },
  });

  const addOns = await prisma.addOn.findMany({
    where: { venueId: venue.id },
  });

  return (
    <CustomerApp
      venue={JSON.parse(JSON.stringify(venue))}
      table={JSON.parse(JSON.stringify(table))}
      sessionId={table.activeSessionId}
      categories={JSON.parse(JSON.stringify(categories))}
      menuItems={JSON.parse(JSON.stringify(menuItems))}
      addOns={JSON.parse(JSON.stringify(addOns))}
    />
  );
}
