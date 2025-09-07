'use client';

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const sections = ["home", "about", "projects", "services", "contact", "resume"];

export default function NavBar() {
  const [active, setActive] = useState("home");
  const pathname = usePathname();

  // Check if user is on home page
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      const scrollPosition = window.scrollY + 150;
      
      // Check sections in reverse order to handle overlapping sections
      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el && scrollPosition >= el.offsetTop) {
          current = id;
          break;
        }
      }
      
      setActive(current);
    };
    
    handleScroll(); // Set initial active section
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex space-x-8 font-space md:text-lg lg:text-xl text-primary">
          {isHomePage ? (
          sections.map((section) => (
            <li key={section}>
              <Link
                href={`#${section}`}
                className={`hover:text-accent pointer-events-none transition-colors duration-600 ease-in-out ${
                  section !== "resume" && active === section
                    ? "border-b border-primary"
                    : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))) : (
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
    </>
  );
}
