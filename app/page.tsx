import Image from "next/image";
import Events from "./components/events";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-10">
      <h1 className="md:text-xl xl:text-3xl">Upcoming Events</h1>
      <Events />
    </main>
  );
}
