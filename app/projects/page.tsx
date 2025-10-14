import { projects } from "@/app/data/WebDevProjects";
import { calligraphyProjects } from "../data/CalligraphyProjects";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="page-container">
      <div className="flex flex-col items-start gap-6">
        <h1 className="mb-8">Projects</h1>
        <div className="space-y-8">
          <h2>Web Development & Software Projects</h2>
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="flex flex-col md:flex-row gap-6 border border-border rounded-2xl p-6 hover:scale-[1.01] transition-transform"
            >
              <div className="relative md:w-1/3 bg-secondary/10 dark:bg-primary/20 rounded-xl overflow-hidden">
                <Image
                  src={project.image[0]}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
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

          <h2>Calligraphy Projects</h2>
          {calligraphyProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="flex flex-col md:flex-row gap-6 border border-border rounded-2xl p-6 hover:scale-[1.01] transition-transform"
            >
              <div className="md:w-1/3 bg-secondary/10 dark:bg-primary/20 rounded-xl overflow-hidden">
                <Image
                  src={project.image}
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
