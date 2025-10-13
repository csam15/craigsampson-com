import Hero from "./components/ui/homepage/Hero";
import HomeServices from "./components/ui/homepage/HomeServices";
import Socials from "./components/ui/homepage/Socials";
import HomeProjects from "./components/ui/homepage/HomeProjects";

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-12 justify-start 2xl:max-w-[60rem] min-h-screen">
      <Hero />
      <div className="lg:hidden">
        <Socials />
      </div>
      <HomeProjects />
      <HomeServices />
    </div>
  );
}
