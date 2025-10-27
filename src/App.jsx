import { Authenticated, Unauthenticated, useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";
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
      <Authenticated>
        <div className="fixed top-4 right-4 z-50 flex gap-2">
          <button
            onClick={handleSeedData}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
          >
            Seed Data
          </button>
          <SignOutButton />
        </div>
      </Authenticated>
      
      <Unauthenticated>
        <div className="min-h-screen flex items-center justify-center p-8">
          <div className="w-full max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Admin Access</h1>
              <p className="text-gray-600">Sign in to manage portfolio content</p>
            </div>
            <SignInForm />
          </div>
        </div>
      </Unauthenticated>

      <Portfolio />
    </>
  );
}
