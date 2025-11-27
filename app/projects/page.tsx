import type { Metadata } from "next";

import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";

const WEB_QUERY = `*[
  _type == "webProject"
  && defined(slug.current)
]|order(title asc)[0...12]{_id, title, slug, previewImage, technologies, description, tagline}`;

const CALLIGRAPHY_QUERY = `*[_type == "calligraphyProject"] | order(_createdAt desc){
    _id,
    title,
    slug,
    mainImage,
    tagline,
    tools
  }`;

export const metadata: Metadata = {
  title: "Projects - Craig Sampson Portfolio | Web Development & Calligraphy",
  description:
    "Explore Craig Sampson's portfolio of web development projects and calligraphy work. Full stack applications built with React, Next.js, TypeScript, and more.",
  openGraph: {
    title: "Projects - Craig Sampson Portfolio",
    description:
      "Explore Craig Sampson's portfolio of web development projects and calligraphy work. Full stack applications built with React, Next.js, TypeScript, and more.",
    url: "https://craigsampson.com/projects",
    siteName: "Craig Sampson",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - Craig Sampson Portfolio",
    description:
      "Explore Craig Sampson's portfolio of web development projects and calligraphy work.",
  },
  alternates: {
    canonical: "https://craigsampson.com/projects",
  },
};

export default async function Projects() {
  const { data: posts } = await sanityFetch({
    query: WEB_QUERY,
  });

  const { data: calligraphy } = await sanityFetch({
    query: CALLIGRAPHY_QUERY,
  });

  return (
    <div className="page-container">
      <div className="flex flex-col items-start gap-6">
        <h1 className="mb-8">Projects</h1>
        <div className="space-y-8 max-w-full w-full">
          <h2 className="text-secondary">Web Design & Development Projects</h2>
          {posts.map((post: SanityDocument) => (
            <div className="" key={post._id}>
              <Link
                href={`/projects/Web-development/${post.slug.current}`}
                className="flex flex-col lg:flex-row gap-6 border border-border rounded-2xl p-6 hover-full-shadow"
              >
                <img
                  src={urlFor(post.previewImage).width(500).url()}
                  alt={post.title}
                  className="bg-primary/70 dark:bg-primary/50 p-3"
                />
                <div className="flex-1 flex flex-col gap-3">
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p>{post.tagline}</p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="text-base text-gray-600 dark:text-gray-400 font-bricolage"
                      >
                        <span
                          key={index}
                          className="text-base text-gray-600 dark:text-gray-400"
                        >
                          {index > 0 && " • "}
                          {tech}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="space-y-8 max-w-full w-full">
          <h2 className="text-secondary">Calligraphy Projects</h2>
          {calligraphy.map((post: SanityDocument) => (
            <div className="" key={post._id}>
              <Link
                href={`/projects/calligraphy/${post.slug.current}`}
                className="flex flex-col lg:flex-row gap-6 border border-border rounded-2xl p-6 hover-full-shadow"
              >
                {post.mainImage && (
                  <img
                    src={urlFor(post.mainImage).width(500).url()}
                    alt={post.title || "Calligraphy project"}
                    className="bg-primary/70 dark:bg-primary/50 p-3"
                  />
                )}
                <div className="flex-1 flex flex-col gap-3">
                  {post.title && (
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                  )}
                  {post.tagline && <p>{post.tagline}</p>}

                  {post.tools && post.tools.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {post.tools.map((tool: string, index: number) => (
                        <span
                          key={index}
                          className="text-base text-gray-600 dark:text-gray-400 font-bricolage"
                        >
                          {index > 0 && " • "}
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
