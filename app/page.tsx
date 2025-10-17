import Hero from "./components/ui/homepage/Hero";
import HomeServices from "./components/ui/homepage/services/HomeServices";
import Socials from "./components/ui/homepage/Socials";
import HomeProjects from "./components/ui/homepage/projects/HomeProjects";
import { HomeContact } from "./components/ui/homepage/CallToAction";

export default function Home() {
  return (
    <div className="page-container">
      <Hero />
      <div className="lg:hidden">
        <Socials />
      </div>
      <HomeProjects />
      <HomeServices />
      <HomeContact />
    </div>
  );
}
