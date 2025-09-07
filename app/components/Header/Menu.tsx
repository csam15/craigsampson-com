"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import Link from "next/link";
import hamburger from "../../../public/hamburger-menu.svg";
import x from "../../../public/cross-menu-w.png";

const sections = [
  { name: "home" },
  { name: "services" },
  { name: "about" },
  { name: "contact" },
  { name: "resume" },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const pathname = usePathname();

  // Check if user is on home page
  const isHomePage = pathname === "/";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const el = document.getElementById(section.name);
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = section.name;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="lg:hidden">
      <button onClick={toggleMenu} className="cursor-pointer">
        {isOpen ? (
          <Image src={x} height={100} width={100} alt="Close Menu" className="size-10 md:size-12" />
        ) : (
          <Image src={hamburger} height={100} width={100} alt="Open Menu" className="size-10 md:size-12" />
        )}
      </button>
      {isOpen && (
        <nav className="absolute top-16 md:top-20 right-3 bg-background-secondary shadow-lg font-outfit text-center text-lg md:text-xl rounded-lg p-5 md:p-8">
          <ul className="flex flex-col space-y-4">
            {location.pathname === "/" ? (
              // On home page - show all sections
              sections.map((section) => (
                <li key={section.name}>
                  <a
                    href={section.name}
                    className={`block text-primary hover:text-accent p-1 transition-colors duration-600 ease-in-out ${
                      section.name === active ? "font-bold" : ""
                    }`}
                  >
                    {section.name.charAt(0).toUpperCase() +
                      section.name.slice(1)}
                  </a>
                </li>
              ))
            ) : (
              // On other pages - only show Home link
              <li>
                <Link
                  href="/"
                  className="block text-primary hover:text-accent p-1 transition-colors duration-600 ease-in-out font-bold"
                >
                  Home
                </Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </div>
  );
}
