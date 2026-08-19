import { requireVenue } from "@/lib/venue";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import styles from "./page.module.css";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const venue = await requireVenue();
  return {
    title: `${venue.name} — Smart POS`,
    description: `Welcome to ${venue.name}`,
  };
}

export default async function VenuePage() {
  const venue = await requireVenue();
  const session = await auth();

  // If a staff member is logged into this venue, redirect them to their dashboard
  if (session?.user && session.user.venueId === venue.id) {
    const role = session.user.role;
    switch (role) {
      case "MANAGER":
        redirect(`/${venue.slug}/manager`);
      case "BARISTA":
        redirect(`/${venue.slug}/barista`);
      case "WAITER":
        redirect(`/${venue.slug}/waiter`);
      case "CASHIER":
        redirect(`/${venue.slug}/cashier`);
      case "INVENTORY":
        redirect(`/${venue.slug}/inventory`);
    }
  }

  return (
    <main className={styles.container}>
      <Card padding="lg" className={styles.card}>
        <div className={styles.logoArea}>
          <div className={styles.logoCircle}>
            <span className={styles.logoLetter}>
              {venue.name.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>
        
        <h1 className={styles.title}>{venue.name}</h1>
        <p className={styles.subtitle}>Digital Dining Experience & Smart POS</p>

        <div className={styles.actionGroup}>
          <p className={styles.guestNote}>
            Please scan the QR code at your table to view the menu and place orders.
          </p>
          <a href={`/${venue.slug}/login`} style={{ width: "100%" }}>
            <Button variant="secondary" fullWidth size="lg">
              Staff Portal Login
            </Button>
          </a>
        </div>
      </Card>
    </main>
  );
}
