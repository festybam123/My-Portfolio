import { ConvexHttpClient } from "convex/browser";

const address = process.env.CONVEX_URL || "https://relaxed-pug-859.convex.cloud";
const client = new ConvexHttpClient(address);

async function main() {
  try {
    console.log("Starting to seed data...");
    const result = await client.mutation("seed:seedData");
    console.log("Seed completed successfully:", result);
  } catch (error) {
    console.error("Error seeding data:", error);
  }
}

main();