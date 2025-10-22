import { cProjects } from "@/app/data/CalligraphyProjects";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const projectId = parseInt(id);
  const project = cProjects.find((project) => project.id === projectId);

  if (!project) {
    return {
      title: "Project Not Found - Craig Sampson",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} - Craig Sampson Calligraphy Portfolio`,
    description: project.tagline || project.description.substring(0, 160),
    openGraph: {
      title: `${project.title} - Craig Sampson`,
      description: project.tagline || project.description.substring(0, 160),
      url: `https://craigsampson.com/projects/calligraphy/${project.id}`,
      siteName: "Craig Sampson",
      images: [
        {
          url: `https://craigsampson.com${project.image[0]}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - Craig Sampson`,
      description: project.tagline || project.description.substring(0, 160),
      images: [`https://craigsampson.com${project.image[0]}`],
    },
    alternates: {
      canonical: `https://craigsampson.com/projects/calligraphy/${project.id}`,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const projectId = parseInt(id);
  const project = cProjects.find((project) => project.id === projectId);
  return (
    <div className="page=container">
      <div className="flex flex-col items-start gap-6">
        <p>
          <Link href={"/projects"} className="hover:text-secondary">
            Projects
          </Link>{" "}
          &gt; <span className="font-semibold">Project Details</span>
        </p>
        <h1>{project?.title}</h1>
        <p>{project?.tagline}</p>
        <div className="bg-gray-300 dark:bg-primary/20 flex justify-center rounded-2xl px-8 pt-6 overflow-hidden w-full">
          <Image
            src={project?.image[0] ?? "Image not found"}
            alt={project?.title ?? "Project Image"}
            width={600}
            height={400}
            className="max-h-[400px] w-auto -mb-1 self-center shadow-2xl"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          {project?.tools.map((tool, index) => (
            <span
              key={index}
              className="bg-primary/30 text-secondary px-3 py-1 rounded-xl text-sm font-semibold"
            >
              {tool}
            </span>
          ))}
        </div>

        <h2>Project Overview</h2>
        <p className="whitespace-pre-line">{project?.description}</p>

        {project?.image[1] && (
          <div className="bg-gray-300 dark:bg-primary/20 flex justify-center rounded-2xl px-8 pt-6 overflow-hidden w-full">
            <Image
              src={project?.image[1] ?? "Image not found"}
              alt={project?.title ?? "Project Image"}
              width={600}
              height={400}
              className="max-h-[400px] w-auto -mb-1 self-center shadow-2xl"
            />
          </div>
        )}

        <div className="flex flex-col gap-1">
          <h2 className="pb-4">Project Goals</h2>
          {project?.goals?.map((goal, index) => (
            <p key={index} className="whitespace-pre-line">
              &bull; {goal}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
