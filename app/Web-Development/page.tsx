import dev from "../../public/webdev/dev.png";
import WebDevCard from "../components/WebDevCard";

import Image from "next/image";

const webdevProjects = {
  Kalshi: {
    title: "Kalshi Trading Bot",
    description:
      "Created a trading bot using python & the Kalshi API to trade on a specific market based on client specifications.",
    image: ["/webdev/Kalshi.png", 1404, 883] as const,
    link: "",
  },
  RedditReplay: {
    title: "Macstudio Nexus CMS",
    description:
      "Content management system for Macstudio Nexus, built with Next.js, & PostgreSQL.",
    image: ["/webdev/", 1500, 1193] as const,
    link: "https://github.com/Macstudio-Nexus/macstudio-nexus-cms",
  },
  Macstudio: {
    title: "Macstudio Nexus Website",
    description:
      "Website for Macstudio Nexus, a platform for creative professionals. Specializing in web development & marketing",
    image: ["/webdev/ms-nexus.png", 1500, 1090] as const,
    link: "https://macstudionexus.com",
  },
};

export default function WebDev() {
  return (
    <div className="bg-gradient-to-r from-secondary to-indigo-300 h-auto text-primary flex flex-col font-space px-[3vh] lg:px-[15vh]">
      <div className="flex flex-col items-center justify-center pt-4">
        <h1 className="uppercase text-4xl md:text-5xl lg:text-6xl text-center py-4 lg:pb-8 w-fit text-black font-bold ">
          full stack web development
        </h1>
          <Image
            src={dev}
            alt="web development"
            className="size-25 md:size-35"
          />
      </div>
      <div className="flex flex-col xl:flex-row justify-center items-center py-3 xl:gap-5">
        {Object.values(webdevProjects).map((project, index) => (
          <WebDevCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
