import Image from "next/image";
import { AboutContact } from "../components/ui/homepage/CallToAction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Craig Sampson - Full Stack Developer & Creative Professional",
  description:
    "Learn about Craig Sampson's journey from robotics to full stack web development. Specializing in React, Next.js, and modern web technologies. Also offering electronics repair and calligraphy services.",
  openGraph: {
    title: "About Craig Sampson - Full Stack Developer & Creative Professional",
    description:
      "Learn about Craig Sampson's journey from robotics to full stack web development. Specializing in React, Next.js, and modern web technologies.",
    url: "https://craigsampson.com/about",
    siteName: "Craig Sampson",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Craig Sampson - Full Stack Developer & Creative Professional",
    description:
      "Learn about Craig Sampson's journey from robotics to full stack web development.",
  },
  alternates: {
    canonical: "https://craigsampson.com/about",
  },
};

export default function About() {
  return (
    <div className="page-container gap-10!">
      <div className="space-y-3 lg:space-y-8">
        <h1>
          <span title="General Kenobi">Hello There.</span> I&apos;m Craig
          Sampson
        </h1>
        <p>
          Full stack developer passionate about building intuitive, efficient
          web applications.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <Image
          src={"/headshot.jpg"}
          alt="Craig Sampson Image"
          height={4343}
          width={4672}
          className="h-70 md:h-80 lg:h-100 xl:h-115 w-auto mx-auto mb-3 rounded-xl"
        />
        <h2>My Journey</h2>
        <p>
          My path to software engineering wasn&apos;t a straight line. It began in
          high school, when my architecture teacher encouraged me to pursue
          engineering. That sparked my curiosity about how things are built and why
          they work. I explored that feeling through robotics, gaining
          hands-on experience with mechanics, electronics, and problem-solving.
          In college, an introductory web development course made everything
          click. I discovered a passion for coding—the blend of creativity,
          logic, and instant feedback. After working in robotics, I realized my
          interests aligned more with software, leading me to transition into
          web development, where I&apos;ve been focused ever since.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h2>What I Do</h2>
        <h3 className="text-secondary">Full Stack Web Development</h3>
        <p>
          Designing and building responsive, scalable web applications using
          modern frameworks and clean architecture.
        </p>
        <h3 className="text-secondary">Calligraphy Art</h3>
        <p>
          Designing hand-lettered pieces and signage that bring craftsmanship
          and personality to each project.
        </p>
        <h3 className="text-secondary">Electronics Repair</h3>
        <p>
          Diagnosing and repairing a wide range of electronic devices —
          keeping hardware running like new.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-5 lg:gap-0">
        <div className="flex flex-col w-full gap-3">
          <h2>Outside of Work</h2>
          <p>
            When I&apos;m not coding, repairing or creating, you will almost
            certainly catch me on the mats. Freshman year of high school I began
            wrestling and I haven&apos;t looked back since.
          </p>
          <p>
            I continued my wrestling career in college and after that began
            training other martial arts including Brazilian Jiu-Jitsu, Judo and
            MMA. Besides training, I am the assistant wrestling coach at my
            alma matter as well as the head wrestling coach for my local
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
      </div>
      <AboutContact />
    </div>
  );
}
