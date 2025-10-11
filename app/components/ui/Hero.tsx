import { PrimaryButton, SecondaryButton } from "../Buttons/Button";
import OpenToWork from "./OpenToWork";

export default function Hero() {
  return (
    <div className="flex flex-col items-start gap-4">
      <div>
        <OpenToWork />
      </div>
      <div>
        <h1 className="!font-space !text-5xl">Hello there, I&apos;m Craig</h1>
      </div>
      <div>
        <h2 className="!text-3xl">Full Stack Developer</h2>
      </div>
      <div>
        <p className="text-gray-500">I&apos;m a Full Stack Developer </p>
      </div>
    </div>
  );
}
