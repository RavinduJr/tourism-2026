export type Vehicle = {
  id: string;
  name: string;
  category: "Car" | "Van" | "SUV";
  seats: number;
  dailyRate: number;
  available: boolean;
};

// Temporary data source. Replace this with your database client when one is added.
export const db = {
  vehicles: [
    {
      id: "toyota-prius",
      name: "Toyota Prius",
      category: "Car",
      seats: 4,
      dailyRate: 65,
      available: true,
    },
    {
      id: "toyota-kdh",
      name: "Toyota KDH",
      category: "Van",
      seats: 10,
      dailyRate: 110,
      available: true,
    },
    {
      id: "mitsubishi-montero",
      name: "Mitsubishi Montero",
      category: "SUV",
      seats: 7,
      dailyRate: 145,
      available: false,
    },
  ] satisfies Vehicle[],
};
