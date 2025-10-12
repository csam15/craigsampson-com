import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const Internallinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const Sociallinks = [
    { name: "GitHub", href: "https://www.github.com/csam15" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/craig-sampson15/" },
    { name: "Twitter", href: "https://twitter.com/csam015" },
    { name: "Instagram", href: "https://www.instagram.com/csampson15/" },
  ];

  return (
    <div className="flex flex-col gap-5 text-background py-4 font-space bg-background-secondary px-6">
      <div className="flex flex-col justify-start gap-3 pt-4 border-b border-gray-600 pb-4">
        <h3>Let&apos;s talk</h3>
        <a
          href="mailto:craigsampson15@gmail.com"
          className="cursor-pointer flex items-center group"
        >
          <h1 className="!text-2xl">craigsampson15@gmail.com</h1>
          <ArrowUpRight className="arrow-up-right " />
        </a>
      </div>

      <div className="flex items-start justify-between xl:justify-around gap-24 w-full">
        <div className="flex flex-col gap-2">
          {Internallinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <p className="hover:text-secondary cursor-pointer">{link.name}</p>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {Sociallinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              <p className="hover:text-secondary cursor-pointer">{link.name}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="container xl:mx-auto xl:text-center border-t border-gray-600">
        <p className=" mt-2">
          &copy; {new Date().getFullYear()} Craig Sampson. All rights reserved.
        </p>
      </div>
    </div>
  );
}
