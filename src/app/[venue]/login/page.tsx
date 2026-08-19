import { requireVenue } from "@/lib/venue";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { LoginForm } from "./LoginForm";
import { Card } from "@/components/ui/Card";
import styles from "./login.module.css";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const venue = await requireVenue();
  return {
    title: `Login — ${venue.name}`,
  };
}

export default async function LoginPage() {
  const venue = await requireVenue();
  const session = await auth();

  // If already logged in to this venue, redirect to the root page (which will route to their role dashboard)
  if (session?.user?.venueId === venue.id) {
    redirect(`/${venue.slug}`);
  }

  return (
    <main className={styles.container}>
      <Card padding="lg" className={styles.loginCard}>
        <div className={styles.header}>
          <div className={styles.logoCircle}>
            <span className={styles.logoLetter}>
              {venue.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <h1 className={styles.title}>Staff Login</h1>
          <p className={styles.subtitle}>Welcome back to {venue.name}</p>
        </div>
        <LoginForm venueId={venue.id} venueSlug={venue.slug} />
      </Card>
    </main>
  );
}
