import { getVehicles } from "@/services/vehicle.service";

export async function GET() {
  const vehicles = await getVehicles();

  return Response.json({ vehicles });
}
