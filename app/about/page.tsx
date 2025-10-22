import Image from "next/image";
import { AboutContact } from "../components/ui/homepage/CallToAction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Craig Sampson - Full Stack Developer & Creative Professional",
  description: "Learn about Craig Sampson's journey from robotics to full stack web development. Specializing in React, Next.js, and modern web technologies. Also offering electronics repair and calligraphy services.",
  openGraph: {
    title: "About Craig Sampson - Full Stack Developer & Creative Professional",
    description: "Learn about Craig Sampson's journey from robotics to full stack web development. Specializing in React, Next.js, and modern web technologies.",
    url: "https://craigsampson.com/about",
    siteName: "Craig Sampson",
    images: [
      {
        url: "https://craigsampson.com/favicon.svg",
        width: 1200,
        height: 630,
        alt: "Craig Sampson - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Craig Sampson - Full Stack Developer & Creative Professional",
    description: "Learn about Craig Sampson's journey from robotics to full stack web development.",
    images: ["https://craigsampson.com/favicon.svg"],
  },
  alternates: {
    canonical: "https://craigsampson.com/about",
  },
};

export default function About() {
  return (
    <div className="page-container">
      <div className="space-y-6 lg:space-y-8">
        <h1>Hello There. I&apos;m Craig Sampson</h1>
        <p>
          Full stack developer passionate about building intuitive, efficient
          web applications.
        </p>
      </div>
      <div className="bg-secondary/70 rounded-2xl px-6 overflow-hidden self-center w-full">
        <Image
          src={"/headshot.svg"}
          alt="Headshot"
          height={100}
          width={100}
          className="size-70 md:size-80 lg:size-100 xl:size-115 -mb-3 lg:-mb-6 mx-auto"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h2>My Journey</h2>
        <p>
          My path to software engineering wasn&apos;t a straight line — it
          started in high school, when my architecture teacher, based off what
          work she had see me do for 3 years, told me she thought I should
          become an engineer. That small comment stuck with me and sparked my
          curiosity about how things are built and why they work. I began
          studying robotics, where I gained hands-on experience combining
          mechanics, electronics, and problem-solving. During college, I took a
          few introductory web development classes — and that&apos;s where
          everything clicked. I quickly realized how much I enjoyed coding — the
          creativity, the logic, and the instant feedback of bringing ideas to
          life on screen. After spending some time working in the robotics
          field, I realized it wasn&apos;t where I wanted to stay long-term. I
          was more drawn to the problem-solving and creative aspects of
          software, so I transitioned into software engineering — and I
          haven&apos;t looked back since. Over the past three years, I&apos;ve
          built full stack web applications that focus on efficiency,
          scalability, and user experience.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h2>What I Do</h2>
        <h3 className="text-secondary">Full Stack Web Development</h3>
        <p>
          Building responsive, scalable web applications using modern frameworks
          and clean architecture.
        </p>
        <h3 className="text-secondary">Electronics Repair</h3>
        <p>
          Diagnosing and repairing consumer and small-device electronics —
          keeping hardware running like new.
        </p>
        <h3 className="text-secondary">Calligraphy Art</h3>
        <p>
          Designing hand-lettered pieces and signage that bring craftsmanship
          and personality to each project.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-center gap-5">
        <div className="flex flex-col w-full lg:max-w-lg gap-3">
          <h2>Outside of Work</h2>
          <p>
            When I&apos;m not coding, repairing or creating, you will almost
            certainly catch me on the mats. Freshman year of high school I began
            wrestling and I haven&apos;t looked back since.
          </p>
          <p>
            I continued my wrestling career in college and after that began
            training other martial arts including Brazilian Jiu-Jitsu, Judo and
            MMA. Besides training I am the assistant wrestlling coach at my
            former high school as well as the head wrestling coach for my local
            <a
              href="https://pierromma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary"
            >
              {" "}
              MMA team{" "}
            </a>
          </p>
        </div>
        <div className="self-center">
          <Image
            src={"/bjj.JPEG"}
            alt="Craig Sampson BJJ"
            width={2071}
            height={4086}
            className="h-165 w-auto rounded-2xl"
          />
        </div>
      </div>
      <div className="self-center">
        <AboutContact />
      </div>
    </div>
  );
}
