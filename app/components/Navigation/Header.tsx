"use client";

import { Menu, X } from "lucide-react";
import MyInfo from "./Info/MyInfo";

import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={toggleMenu}
        ></div>
      )}
      <div
        className={`flex xl:hidden items-center justify-between w-full px-6 py-4 relative z-50`}
      >
        <div className="xl:hidden">
          <MyInfo />
        </div>
        <div className="xl:hidden">
          <button className="cursor-pointer relative" onClick={toggleMenu}>
            <Menu
              className={`size-10 text-purple-400 transition-all duration-300 ${
                isMenuOpen
                  ? "opacity-0 rotate-90 scale-0"
                  : "opacity-100 rotate-0 scale-100"
              }`}
            />
            <X
              className={`size-10 text-purple-400 absolute inset-0 transition-all duration-300 ${
                isMenuOpen
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-0"
              }`}
            />
          </button>
        </div>
      </div>
      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <div className="hidden xl:block">
        <Sidebar isOpen={true} onClose={() => {}} />
      </div>
    </>
  );
}
