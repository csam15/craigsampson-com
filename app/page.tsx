import Hero from "./components/ui/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-start min-h-screen xl:px-6">
      <div>
        <Hero />
      </div>
    </div>
  );
}
