import { PrimaryButton, SecondaryButton } from "../Buttons/Button";
import OpenToWork from "./OpenToWork";

export default function Hero() {
  return (
    <div className="flex flex-col items-start gap-5">
      <div>
        <OpenToWork />
      </div>
      <div>
        <h1 className="font-space !text-5xl font-bold">
          Hello there! I&apos;m Craig
        </h1>
      </div>
      <div>
        <h2 className="!font-space !text-3xl font-semibold">
          Full Stack Developer
        </h2>
      </div>
      <div>
        <p className="text-gray-500 font-light">
          Full Stack Developer eager to learn, grow, and contribute to impactful
          projects.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <PrimaryButton label="See My Work" link="/projects" />
        <SecondaryButton label="About Me" link="/about" />
      </div>
    </div>
  );
}
