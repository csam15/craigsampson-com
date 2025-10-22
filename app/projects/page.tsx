import { wProjects } from "@/app/data/WebDevProjects";
import { cProjects } from "../data/CalligraphyProjects";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Craig Sampson Portfolio | Web Development & Calligraphy",
  description: "Explore Craig Sampson's portfolio of web development projects and calligraphy work. Full stack applications built with React, Next.js, TypeScript, and more.",
  openGraph: {
    title: "Projects - Craig Sampson Portfolio",
    description: "Explore Craig Sampson's portfolio of web development projects and calligraphy work. Full stack applications built with React, Next.js, TypeScript, and more.",
    url: "https://craigsampson.com/projects",
    siteName: "Craig Sampson",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - Craig Sampson Portfolio",
    description: "Explore Craig Sampson's portfolio of web development projects and calligraphy work.",
  },
  alternates: {
    canonical: "https://craigsampson.com/projects",
  },
};

export default function Projects() {
  return (
    <div className="page-container">
      <div className="flex flex-col items-start gap-6">
        <h1 className="mb-8">Projects</h1>
        <div className="space-y-8 max-w-full w-full">
          <h2 className="text-secondary">
            Web Development & Software Projects
          </h2>
          {wProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/Web-development/${project.id}`}
              className="flex flex-col md:flex-row gap-6 border border-border rounded-2xl p-6 hover:shadow-lg"
            >
              <div className="relative md:w-1/3 min-h-[200px] md:min-h-0 bg-secondary/10 dark:bg-primary/20 rounded-xl overflow-hidden">
                <Image
                  src={
                    project.title === "Macstudio Nexus CRM"
                      ? "/projects/crm.svg"
                      : project.image[0]
                  }
                  priority
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover p-3 rounded-2xl"
                />
              </div>

              <div className="flex-1 flex flex-col gap-3">
                <h2 className="!whitespace-normal">{project.title}</h2>
                <p className="text-base">{project.tagline}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-primary/30 text-secondary px-3 py-1 rounded-xl text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span
                        key={index}
                        className="text-sm text-gray-600 dark:text-gray-400"
                      >
                        {index > 0 && " • "}
                        {tech}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}

          <h2 className="text-secondary">Calligraphy Projects</h2>
          {cProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/calligraphy/${project.id}`}
              className="flex flex-col md:flex-row gap-6 border border-border rounded-2xl p-6 hover:shadow-lg"
            >
              <div className="md:w-1/3 rounded-xl overflow-hidden">
                <Image
                  src={project.image[0]}
                  alt={project.title}
                  width={400}
                  height={300}
                  className=""
                />
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <h2 className="!whitespace-normal">{project.title}</h2>
                <p className="text-base">{project.tagline}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="bg-primary/30 text-secondary px-3 py-1 rounded-xl text-sm font-semibold"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
