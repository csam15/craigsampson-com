import { SecondaryButton } from "../../../Buttons/Button";
import HomeProjectsCard from "./HomeProjectscard";

export default function HomeProjects() {
  return (
    <div className="space-y-4 w-full">
      <div className="flex flex-col md:flex-row items-start gap-4 justify-between w-full">
        <div className="flex flex-col">
          <h1 className="font-semibold">Latest Projects</h1>
          <p>Check out my latest works</p>
        </div>
        <SecondaryButton label="See All" link="/projects" />
      </div>
      <div className="w-full grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="lg:col-span-2">
          <HomeProjectsCard
            title="Google Calendar Booking App"
            image={"/projects/google-calendar.png"}
            types={["Web App", "Backend Development"]}
          />
        </div>
        <HomeProjectsCard
          title="Kalshi Trading Bot"
          image={"/projects/kalshi.png"}
          types={["Backend Development", "Automation"]}
        />
        <HomeProjectsCard
          title="Macstudio Custom CRM"
          image={"/projects/crm.png"}
          types={["Full Stack Development", "Custom Software"]}
        />
      </div>
    </div>
  );
}
