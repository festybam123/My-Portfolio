import { Authenticated, Unauthenticated, useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { Toaster, toast } from "sonner";
import Portfolio from "./components/Portfolio";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster />
      <Content />
    </div>
  );
}

function Content() {
  const loggedInUser = useQuery(api.auth.loggedInUser);
  const seedData = useMutation(api.seed.seedData);

  const handleSeedData = async () => {
    try {
      await seedData();
      toast.success("Portfolio data seeded successfully!");
    } catch (error) {
      toast.error("Failed to seed data");
    }
  };

  if (loggedInUser === undefined) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      <Portfolio />
    </>
  );
}
