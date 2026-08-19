import { requireAuth } from "@/lib/access";
import { requireVenue } from "@/lib/venue";
import { getBaristaOrders } from "../admin-actions";
import BaristaClient from "./BaristaClient";

export default async function BaristaPage() {
  const venue = await requireVenue();
  await requireAuth(["BARISTA"]);

  const orders = await getBaristaOrders(venue.id);

  return <BaristaClient venueId={venue.id} venueSlug={venue.slug} initialOrders={JSON.parse(JSON.stringify(orders))} />;
}
