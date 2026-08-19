import { requireAuth } from "@/lib/access";
import { requireVenue } from "@/lib/venue";
import { getCashierSessions } from "../admin-actions";
import CashierClient from "./CashierClient";

export default async function CashierPage() {
  const venue = await requireVenue();
  await requireAuth(["CASHIER"]);

  const sessions = await getCashierSessions(venue.id);

  return <CashierClient venueId={venue.id} initialSessions={JSON.parse(JSON.stringify(sessions))} />;
}
