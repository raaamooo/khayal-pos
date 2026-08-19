import { requireAuth } from "@/lib/access";
import { requireVenue } from "@/lib/venue";
import { getManagerData } from "../admin-actions";
import ManagerClient from "./ManagerClient";

export default async function ManagerPage() {
  const venue = await requireVenue();
  await requireAuth(["MANAGER"]);

  const data = await getManagerData(venue.id);

  return (
    <ManagerClient
      venue={venue}
      initialOrders={JSON.parse(JSON.stringify(data.orders))}
      initialStaff={JSON.parse(JSON.stringify(data.staff))}
      initialTables={JSON.parse(JSON.stringify(data.tables))}
      revenue={data.revenue}
    />
  );
}
