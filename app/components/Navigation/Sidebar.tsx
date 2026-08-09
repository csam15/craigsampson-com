"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../ui/ThemeToggle";

import { House, UserRound, Mail } from "lucide-react";
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
    { name: "Active", href: "/active", icon: UserRound },
    { name: "Calligraphy", href: "/calligraphy", icon: Mail },
  ];

  return (
    <div
      className={`
        fixed top-0 left-0 h-full w-56 bg-background font-stack-sans-notch z-50 border-r shadow shadow-r border-border
        transition-transform duration-500 ease-in-out flex flex-col justify-between pb-15
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <div className="flex flex-col items-start justify-center gap-8 w-full p-6">
        <div className="self-start space-y-1 xl:hidden">
          <h2 className="!font-stack-sans-notch">Craig Sampson</h2>
        </div>
        <div className="hidden xl:block">
          <MyInfo />
        </div>
        <div className="flex flex-col w-full gap-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-2 w-full p-2.5 button-click rounded-xl text-base text-gray-500 hover:bg-secondary/15 ${
                (
                  item.href === "/"
                    ? pathname === item.href
                    : pathname.startsWith(item.href)
                )
                  ? "text-secondary font-bold"
                  : "text-gray-700 dark:text-gray-400"
              }`}
              onClick={onClose}
            >
              <span className="!font-stack-sans-notch !font-medium">
                {item.name}
              </span>
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
