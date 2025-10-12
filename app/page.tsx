import Hero from "./components/ui/Hero";
import HomeServices from "./components/ui/HomeServices";
import Socials from "./components/ui/Socials";

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-6 justify-start 2xl:max-w-[60rem] min-h-screen">
        <Hero />
        <Socials />
        <HomeServices />
    </div>
  );
}
