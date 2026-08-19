import { requireVenue } from "@/lib/venue";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import styles from "./unauthorized.module.css";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const venue = await requireVenue();
  return {
    title: `Unauthorized — ${venue.name}`,
  };
}

export default async function UnauthorizedPage() {
  const venue = await requireVenue();

  return (
    <main className={styles.container}>
      <Card padding="lg" className={styles.card}>
        <div className={styles.code}>403</div>
        <h1 className={styles.title}>Access Denied</h1>
        <p className={styles.message}>
          You do not have the required permissions to view this page.
        </p>
        {/* Next.js Link doesn't pass refs natively to custom components without passHref/legacyBehavior in some setups, but since our Button accepts standard button props, wrapping it or using it as a direct button child works for App router: */}
        <Link href={`/${venue.slug}`} tabIndex={-1} className={styles.linkWrapper}>
          <Button variant="primary" fullWidth>Return to Dashboard</Button>
        </Link>
      </Card>
    </main>
  );
}
