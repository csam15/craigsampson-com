import Button from "../Buttons/Button";

import LinkedIn from "../../../public/linkedin.svg";
import Github from "../../../public/github.png";
import mail from "../../../public/mail.png";

import Image from "next/image";
import { Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full h-20 lg:h-25 z-50 ml-auto">
      <div className="flex items-center justify-end pr-4 h-full border-b-2 border-primary">
        <div className="2xl:mr-6">
          <Button link="/contact" label="CONTACT" />
        </div>
      </div>
      <div className="flex justify-end items-center md:hidden gap-3 pt-2 pr-6">
        <a href="https://www.linkedin.com/in/craig-sampson15/">
          <Image
            src={LinkedIn}
            alt="LinkedIn"
            width={100}
            height={100}
            className="size-12 rounded-lg"
          />
        </a>
        <a href="https://github.com/csam15">
          <Image
            src={Github}
            alt="Github"
            width={100}
            height={100}
            className="size-13 rounded-lg"
          />
        </a>
        <a href="mailto:craigsampson15@gmail.com" className="cursor-pointer">
          <Mail size={48} style={{ color: "var(--color-primary)" }} />
        </a>{" "}
      </div>
    </header>
  );
}
