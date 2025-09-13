"use client";

import { TypeAnimation } from "react-type-animation";

import { PrimaryButton } from "./Buttons/Button";
import github from "../../public/icons8-github.svg";
import linkedin from "../../public/icons8-linkedin.svg";

export default function Hero() {
  return (
    <div
      id="home"
      className="scroll-mt-25 flex flex-col justify-between items-center font-space h-auto"
    >
      <div className="flex-1 flex flex-col justify-center items-center hero-container">
        <div className="font-outfit uppercase text-primary text-center text-lg sm:text-xl lg:text-2xl tracking-wider xl:pr-120">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              3000,
              "calligraphy artist",
              2000,
              "electronics technician",
              2000,
            ]}
            wrapper="span"
            speed={50}
            omitDeletionAnimation={true}
            repeat={Infinity}
          />
        </div>
        <div className="text-6xl md:text-7xl lg:text-8xl text-center font-bangers text-white my-4 lg:my-3 px-4 md:px-0">
          <h1>CRAIG SAMPSON</h1>
        </div>
        <h3 className="uppercase font-space text-primary text-lg md:text-2xl lg:text-3xl text-center px-10 md:px-5">
          Crafting solutions through code, creativity and repair
        </h3>
        <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 lg:gap-8">
          <PrimaryButton
            img={github}
            link="https://github.com/csam15"
            label="GITHUB"
          />
          <PrimaryButton
            link="mailto:craigsampson15@gmail.com"
            label="CONTACT"
          />
          <PrimaryButton
            img={linkedin}
            link="https://www.linkedin.com/in/craig-sampson15/"
            label="LINKEDIN"
          />
        </div>
      </div>
      {/* <PageBreak text="• nyc • Available for Freelance & Full-Time Roles" /> */}
    </div>
  );
}
