import { SecondaryButton } from "../../../Buttons/Button";
import HomeProjectsCard from "./HomeProjectscard";
import { wProjects } from "@/app/data/WebDevProjects";

export default function HomeProjects() {
  const google = wProjects.find((project) => project.id === 1);
  const crm = wProjects.find((project) => project.id === 2);
  const kalshi = wProjects.find((project) => project.id === 3);
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
            title={crm?.title ?? "Untitled Project"}
            image={crm?.image[0] ?? "Image Not Found"}
            types={[crm?.tags[0] ?? "", crm?.tags[1] ?? ""]}
            id={crm?.id ?? 1}
          />
        </div>
        <HomeProjectsCard
          title={google?.title ?? "Untitled Project"}
          image={"/projects/crm.svg"}
          types={[google?.tags[0] ?? "", google?.tags[1] ?? ""]}
          id={google?.id ?? 2}
        />
        <HomeProjectsCard
          title={kalshi?.title ?? "Untitled Project"}
          image={kalshi?.image[0] ?? "Image Not Found"}
          types={[kalshi?.tags[0] ?? "", kalshi?.tags[1] ?? ""]}
          id={kalshi?.id ?? 3}
        />
      </div>
    </div>
  );
}
