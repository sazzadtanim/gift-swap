import Image from "next/image";
import Events from "./components/events";

export default function Home() {
  function textSuspense(): JSX.Element {
    const a = <h2>My name is Tanim</h2>;
    setTimeout(() => {
      return a;
    }, 3000);
    return <h2>b</h2>;
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-10">
      <h1 className="text-3xl">Gift Events</h1>
      <Events />
    </main>
  );
}
