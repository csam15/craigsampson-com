import Image from "next/image";

export default function Socials() {
  const Sociallinks = [
    {
      name: "GitHub",
      href: "https://www.github.com/csam15",
      image: "/socials/github.png",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/craig-sampson15/",
      image: "/socials/linkedin.png",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/csam015",
      image: "/socials/x.png",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/csampson15/",
      image: "/socials/insta.png",
    },
  ];

  return (
    <div className="w-full lg:w-fit h-fit border border-border rounded-2xl bg-gradient-to-r from-gray-100 via-violet-200 to-violet-300 dark:from-gray-800 dark:via-violet-900 dark:to-violet-950">
      <div className="flex items-center justify-center">
        {Sociallinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4"
          >
            <Image
              src={link.image}
              alt={link.name}
              className="size-12 rounded-full bg-white p-2 transition hover:scale-105"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
