import Logo from "../../../public/Logo.svg";
import {PrimaryButton} from "../Buttons/Button";
import Menu from "./Menu";
import NavBar from "./NavBar";

import Image from "next/image";
import Link from "next/link";

function LogoHeader() {
  return (
    <Link href="/" className="bg-">
      <Image src={Logo} alt="Craig Sampson Logo" width={1920} height={1080} className="w-18" />
    </Link>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white flex items-center justify-between px-12 md:px-14 py-3 md:py-5 border-b border-gray-900 shadow-md">
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
