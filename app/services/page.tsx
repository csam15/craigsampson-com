import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "../components/Buttons/Button";
import { skills } from "../data/Skills";
import { Minus } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Web Development, Electronics Repair & Calligraphy | Craig Sampson",
  description: "Professional services offered by Craig Sampson: Full stack web development with React & Next.js, electronics repair for consumer devices, and custom calligraphy & design work.",
  openGraph: {
    title: "Services - Web Development, Electronics Repair & Calligraphy",
    description: "Full stack web development, electronics repair, and custom calligraphy services by Craig Sampson. Building fast, secure, and user-friendly digital experiences.",
    url: "https://craigsampson.com/services",
    siteName: "Craig Sampson",
    images: [
      {
        url: "https://craigsampson.com/favicon.svg",
        width: 1200,
        height: 630,
        alt: "Craig Sampson Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Web Development, Electronics Repair & Calligraphy",
    description: "Full stack web development, electronics repair, and custom calligraphy services by Craig Sampson.",
    images: ["https://craigsampson.com/favicon.svg"],
  },
  alternates: {
    canonical: "https://craigsampson.com/services",
  },
};

export default function Projects() {
  return (
    <div className="page-container">
      <div className="flex flex-col items-start gap-6">
        <h1 className="">What I Offer</h1>
        <p className="">
          Building digital soultions &minus; and a few things off screen
        </p>
        <PrimaryButton link="/contact" label="Get in Touch" />
      </div>
      <div className="flex flex-col xl:flex-row items-center gap-6 xl:gap-12">
        <div className="flex flex-col items-start justify-center gap-4 lg:gap-6 xl:w-1/2">
          <h2>Web &amp; Software Development</h2>
          <p>
            Whether it&apos;s a personal portfolio, business website, or a
            custom application, I build fast, secure, and user-friendly digital
            experiences. My goal is to turn complex ideas into reliable,
            maintainable, and scalable software.
          </p>
          <h3>Key Skills</h3>
          <div className="grid grid-cols-5 md:grid-cols-10 xl:grid-cols-5 place-items-center gap-x-5 gap-y-2">
            {skills.map((skill, index) => (
              <div key={index}>
                <Image
                  src={skill.image}
                  alt={skill.alt}
                  title={skill.title}
                  width={100}
                  height={100}
                  className={`size-10 xl:size-12 ${
                    skill.imageDark ? "dark:hidden" : ""
                  }`}
                />
                {skill.imageDark && (
                  <Image
                    src={skill.imageDark}
                    alt={skill.alt}
                    title={skill.title}
                    width={100}
                    height={100}
                    className="size-10 xl:size-12 hidden dark:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="xl:w-1/2">
          <Image
            src="/services/dev.jpg"
            alt="Web development image"
            width={6000}
            height={4000}
            className="w-full rounded-3xl"
          />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row-reverse items-center gap-6 xl:gap-12">
        <div className="flex flex-col items-start justify-center gap-4 lg:gap-6 xl:w-1/2">
          <h2>Electronics Repair</h2>
          <p>
            From diagnosing hardware issues to creating custom electronic
            solutions, I apply my technical and problem-solving background to
            bring devices back to life. Whether it&apos;s a small repair or a
            unique electronics project, I combine precision and creativity to
            get the job done right.
          </p>
          <ul className="list-none space-y-2 font-bricolage">
            <li className="flex">
              <Minus /> Smartphone, laptop, desktop, and gaming console repairs
            </li>
            <li className="flex">
              <Minus /> Hardware &amp; software troubleshooting
            </li>
            <li className="flex">
              <Minus /> Custom PC builds
            </li>
          </ul>
        </div>
        <div className="xl:w-1/2">
          <Image
            src="/services/elec.jpg"
            alt="Electronics repair image"
            width={6000}
            height={4000}
            className="w-full rounded-3xl"
          />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row items-center gap-6 xl:gap-12">
        <div className="flex flex-col items-start justify-center gap-4 lg:gap-6 xl:w-1/2">
          <h2>Calligraphy &amp; Design</h2>
          <p>
            I offer custom hand-lettered designs, signage, and personalized
            pieces for events, gifts, or branding. My calligraphy work is a
            creative outlet that sharpens my attention to detail — the same care
            I bring to writing code.
          </p>
          <ul className="list-none space-y-2 font-bricolage">
            <li className="flex">
              <Minus /> Custom lettering commissions
            </li>
            <li className="flex">
              <Minus /> Event signage
            </li>
            <li className="flex">
              <Minus /> Personal Art Pieces
            </li>
          </ul>
        </div>
        <div className="xl:w-1/2">
          <Image
            src="/services/call.jpg"
            alt="Calligraphy and design image"
            width={6000}
            height={4000}
            className="w-full rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
