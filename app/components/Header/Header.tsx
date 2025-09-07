import Logo from "../../../public/Logo.png";
import Button from "../Buttons/Button.jsx";

import Image from "next/image";

function LogoHeader() {
  return (
    <a href="/" className="text-3xl font-bold text-gray-800">
      <Image src={Logo} alt="Craig Sampson Logo" width={100} height={100} className="w-14" />
    </a>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background flex items-center justify-between p-4 sm:p-6 md:p-8 lg:p-10 border-b border-gray-900 shadow-md">
      <LogoHeader />
      <div className="flex items-center space-x-1 md:space-x-3">
        <span className="inline-block w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
        <h1 className="text-lg md:text-2xl font-space font-semibold text-white uppercase tracking-wider">
          site under construction
        </h1>
      </div>
    </header>
  );
}