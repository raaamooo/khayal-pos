import { requireAuth } from "@/lib/access";
import { requireVenue } from "@/lib/venue";
import { getInventoryData } from "../admin-actions";
import InventoryClient from "./InventoryClient";

export default async function InventoryPage() {
  const venue = await requireVenue();
  await requireAuth(["INVENTORY"]);

  const data = await getInventoryData(venue.id);

  return (
    <InventoryClient
      venueId={venue.id}
      initialIngredients={JSON.parse(JSON.stringify(data.ingredients))}
      initialMenuItems={JSON.parse(JSON.stringify(data.menuItems))}
      initialCategories={JSON.parse(JSON.stringify(data.categories))}
    />
  );
}
