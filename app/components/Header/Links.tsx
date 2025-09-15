import LinkedIn from "../../../public/linkedin.svg";
import Github from "../../../public/github.png";
import { Mail } from "lucide-react";

import Image from "next/image";

export default function Links() {
  return (
    <div className="flex flex-col items-center space-y-2 md:space-y-2 xl:space-y-4 ">
      {/* Vertical line */}
      <div className="w-[2px] h-60 md:h-90 lg:h-135 xl:h-180 bg-primary"></div>

      {/* Images stacked vertically */}
      <a href="https://www.linkedin.com/in/craig-sampson15/" target="_blank" rel="noopener noreferrer">
        <Image
          src={LinkedIn}
          alt="LinkedIn"
          width={100}
          height={100}
          className="size-14 lg:size-18 icon-style"
        />
      </a>
      <a href="https://github.com/csam15" target="_blank" rel="noopener noreferrer">
        <Image
          src={Github}
          alt="Github"
          width={100}
          height={100}
          className="size-14 lg:size-18 icon-style"
        />
      </a>
      <a href="mailto:craigsampson15@gmail.com" className="cursor-pointer" target="_blank" rel="noopener noreferrer">
        <Mail className="size-12 lg:size-16 icon-style" style={{ color: 'var(--color-primary)' }} />
      </a>
    </div>
  );
}
