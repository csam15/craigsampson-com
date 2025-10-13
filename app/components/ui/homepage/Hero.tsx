import { PrimaryButton, SecondaryButton } from "../../Buttons/Button";
import OpenToWork from "./OpenToWork";
import Socials from "./Socials";

export default function Hero() {
  return (
    <div className="flex flex-col items-start gap-9 w-full">
      <div>
        <OpenToWork />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <h1 className=" !text-5xl lg:!text-6xl xl:!text-7xl font-bold">
          Hello there! I&apos;m Craig
        </h1>
        <h2 className="! !text-3xl font-semibold">Full Stack Developer</h2>
        <p className="text-gray-500 font-light">
          Full Stack Developer eager to learn, grow, and contribute to impactful
          projects.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-start lg:items-center gap-4 w-full">
        <PrimaryButton label="About Me" link="/about" />
        <SecondaryButton label="See My Work" link="/projects" />
        <div className="ml-auto hidden lg:flex">
          <Socials />
        </div>
      </div>
    </div>
  );
}
