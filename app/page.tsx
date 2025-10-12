import Hero from "./components/ui/Hero";
import Socials from "./components/ui/Socials";

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-6 justify-start min-h-screen xl:px-6">
        <Hero />
        <Socials />
    </div>
  );
}
