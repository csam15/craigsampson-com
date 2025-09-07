import dev from "../../public/webdev/dev.png";
import WebDevCard from "../components/WebDevCard";

import Image from "next/image";

const webdevProjects = {
  Kalshi: {
    title: "Kalshi Trading Bot",
    description:
      "Created a trading bot using python and the Kalshi API to trade on the ”S&P 500 price range” market based on user specifications.",
    tech: ["Python", "Kalshi API"],
    link: "",
  },
  RedditReplay: {
    title: "Reddit Replay",
    description:
      "Full-stack web app that converts Reddit posts into AI-narrated videos with automated video composition and subtitles.",
    tech: ["Next.js", "FFmpeg", "ElevenLabs"],
    link: "https://github.com/csam15/Reddit-Replay",
  },
  Macstudio: {
    title: "Macstudio Nexus Website",
    description:
      "Website for Macstudio Nexus, a platform for creative professionals.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://macstudionexus.com",
  },
};

export default function WebDev() {
  return (
    <div className="bg-gradient-to-r from-secondary to-indigo-300 h-auto text-primary flex flex-col font-space px-[3vh] lg:px-[15vh]">
      <div className="flex flex-col justify-center items-center section-effect">
        <h1 className="uppercase text-4xl md:text-5xl text-center pb-4 lg:pb-8">
          full stack web development
        </h1>
        <Image
          src={dev}
          alt="web development"
          className="size-25 md:size-35 lg:size-45"
        />
        <h2 className="bg-background-secondary border border-secondary rounded-xl text-lg md:text-xl lg:text-2xl text-center p-4 mt-6 lg:mt-10 max-w-4xl">
          Explore the apps and platforms I’ve built across different stacks and
          use cases
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 mb-10 lg:mb-0">
        {Object.values(webdevProjects).map((project, index) => (
          <WebDevCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
