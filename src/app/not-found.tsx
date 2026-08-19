import styles from "./not-found.module.css";

/**
 * 404 page for unresolved venues.
 * Shown when:
 * - The URL slug doesn't match any venue
 * - The venue is inactive
 * - No slug could be extracted from the URL
 */
export default function NotFound() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <div className={styles.code}>404</div>
        <h1 className={styles.title}>Venue not found</h1>
        <p className={styles.message}>
          The venue you are looking for does not exist or is no longer active.
          Please check the URL and try again.
        </p>
      </div>
    </main>
  );
}
