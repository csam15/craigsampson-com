import Button from "../Buttons/Button";

import LinkedIn from "../../../public/linkedin.svg";
import Github from "../../../public/github.png";
import mail from "../../../public/mail.png";

import Image from "next/image";


export default function Header() {
  return (
    <header className="w-full h-20 z-50 ml-auto">
      <div className="flex items-center justify-end pr-4 h-full border-b-2 border-primary">
        <Button link="/contact" label="CONTACT" />
      </div>
        <div className="flex">
          <Image src={LinkedIn} alt="LinkedIn" className="w-10 h-10 rounded-lg ml-4" />
          <Image src={Github} alt="Github" className="w-10 h-10 rounded-lg ml-4" />
          <Image src={mail} alt="Mail" className="w-10 h-10 rounded-lg ml-4" />
        </div>
    </header>
  );
}

