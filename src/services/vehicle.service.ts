import { db, type Vehicle } from "@/lib/db";

export async function getVehicles(): Promise<Vehicle[]> {
  return db.vehicles;
}
