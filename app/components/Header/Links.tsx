import LinkedIn from "../../../public/linkedin.svg";
import Github from "../../../public/github.png";
import { Mail } from "lucide-react";

import Image from "next/image";

export default function Links() {
  return (
    <div className="flex flex-col items-center space-y-2 md:space-y-2 xl:space-y-4 ">
      {/* Vertical line */}
      <div className="w-[2px] h-40 md:h-44 xl:h-50 2xl:h-70 bg-primary"></div>

      {/* Images stacked vertically */}
      <a href="https://www.linkedin.com/in/craig-sampson15/">
        <Image
          src={LinkedIn}
          alt="LinkedIn"
          width={100}
          height={100}
          className="size-14 lg:size-18 rounded-lg"
        />
      </a>
      <a href="https://github.com/csam15">
        <Image
          src={Github}
          alt="Github"
          width={100}
          height={100}
          className="size-14 rounded-lg lg:size-18"
        />
      </a>
      <a href="mailto:craigsampson15@gmail.com" className="cursor-pointer">
        <Mail className="size-12 rounded-lg lg:size-16"style={{ color: 'var(--color-primary)' }}/>
      </a>
    </div>
  );
}
