import { requireAuth } from "@/lib/access";
import { requireVenue } from "@/lib/venue";
import { getWaiterOrders, getVenueTables } from "../admin-actions";
import WaiterClient from "./WaiterClient";

export default async function WaiterPage() {
  const venue = await requireVenue();
  await requireAuth(["WAITER"]);

  const orders = await getWaiterOrders(venue.id);
  const tables = await getVenueTables(venue.id);

  return (
    <WaiterClient
      venueId={venue.id}
      venueSlug={venue.slug}
      initialOrders={JSON.parse(JSON.stringify(orders))}
      initialTables={JSON.parse(JSON.stringify(tables))}
    />
  );
}
