import { startupData } from "@/contexts/startupContext"; // Adjust the path according to your project structure
import StartupCard from "@/components/Cards/StartupCard";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {startupData.map((startup, index) => (
        <StartupCard key={index} {...startup} />
      ))}
    </main>
  );
}
