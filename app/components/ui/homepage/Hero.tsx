import { PrimaryButton, SecondaryButton } from "../../Buttons/Button";
import OpenToWork from "./OpenToWork";
import Socials from "./Socials";

export default function Hero() {
  return (
    <div className="flex flex-col items-start gap-9 w-full">
      {/* <div>
        <OpenToWork />
      </div> */}
      <div className="flex flex-col gap-4 w-full">
        <h1 className=" !text-5xl lg:!text-6xl xl:!text-7xl font-bold">
          <span title="General Kenobi">Hello There!</span> I&apos;m Craig
        </h1>
        <h2 className="">Full Stack Developer & more...</h2>
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-end gap-4 w-full">
        <PrimaryButton label="About Me" link="/about" />
        <SecondaryButton label="See My Work" link="/projects" />
        <span className="lg:hidden">
          <Socials />
        </span>
        <div className="ml-auto hidden lg:flex">
          <Socials />
        </div>
      </div>
    </div>
  );
}
