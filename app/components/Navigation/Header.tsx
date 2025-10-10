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
        className={`flex xl:block items-center justify-between w-full px-6 py-2 fixed top-4 right-0 z-50`}
      >
        <div className="xl:hidden">
          <MyInfo />
        </div>
        <div className="xl:hidden">
          <button className="cursor-pointer" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="size-10 text-purple-300" />
            ) : (
              <Menu className="size-10 text-primary" />
            )}
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
