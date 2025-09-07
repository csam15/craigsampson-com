import Logo from "../../../public/Logo.png";
import {PrimaryButton} from "../Buttons/Button";
import Menu from "./Menu";
import NavBar from "./NavBar";

import Image from "next/image";
import Link from "next/link";

function LogoHeader() {
  return (
    <Link href="/" className="text-3xl font-bold text-gray-800">
      <Image src={Logo} alt="Craig Sampson Logo" width={100} height={100} className="w-14" />
    </Link>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background flex items-center justify-between px-12 md:px-14 py-3 md:py-5 border-b border-gray-900 shadow-md">
      <div className="flex items-center justify-between w-full md:hidden">
        <LogoHeader />
        <div className="flex items-center justify-center gap-4">
          <PrimaryButton link="#contact" label="CONTACT" />
          <Menu />
        </div>
      </div>
      <div className="hidden md:flex md:items-center md:justify-between md:w-full relative">
        <LogoHeader />
        <NavBar />
      </div>
    </header>
  );
}
