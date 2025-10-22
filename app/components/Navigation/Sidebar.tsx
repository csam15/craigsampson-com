"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../ui/ThemeToggle";

import { House, FolderOpen, Wrench, UserRound, Mail } from "lucide-react";
import MyInfo from "./Info/MyInfo";

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/", icon: House },
    { name: "Projects", href: "/projects", icon: FolderOpen },
    { name: "Services", href: "/services", icon: Wrench },
    { name: "About Me", href: "/about", icon: UserRound },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <div
      className={`
        fixed top-0 left-0 h-full w-72 bg-background font-bricolage z-50 border-r border-border
        transition-transform duration-500 ease-in-out flex flex-col justify-between pb-15
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <div className="flex flex-col items-center justify-center gap-8 w-full p-6">
        <div className="self-start space-y-1 xl:hidden">
          <h2 className="">Craig Sampson</h2>
          <p>Full Stack Developer</p>
        </div>
        <div className="hidden xl:block">
          <MyInfo />
        </div>
        <div className="flex flex-col w-full gap-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-2 w-full p-2.5 border button-click border-border rounded-xl text-base text-gray-500 hover:bg-secondary/15 ${
                (
                  item.href === "/"
                    ? pathname === item.href
                    : pathname.startsWith(item.href)
                )
                  ? "bg-secondary/15 dark:bg-secondary/15 text-secondary font-bold"
                  : "text-gray-700 dark:text-gray-400"
              }`}
              onClick={onClose}
            >
              <item.icon className="size-6" />
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex self-start xl:hidden">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
