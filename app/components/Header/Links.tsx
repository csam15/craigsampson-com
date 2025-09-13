import LinkedIn from "../../../public/linkedin.svg";
import Github from "../../../public/github.png";
import { Mail } from "lucide-react";

import Image from "next/image";

export default function Links() {
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Vertical line */}
      <div className="w-px h-32 bg-gray-400"></div>

      {/* Images stacked vertically */}
      <Image src={LinkedIn} alt="LinkedIn" className="w-16 h-16 rounded-lg" />
      <Image src={Github} alt="Github" className="w-16 h-16 rounded-lg" />
      <Mail />
    </div>
  );
}
