import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://craigsampson.com";

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/online_solutions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/automations_and_integrations`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/branding`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/electronics_repair`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Fetch web development projects from Sanity
  const webProjects = await client.fetch<{ slug: { current: string } }[]>(
    `*[_type == "webProject"]{ slug }`
  );

  const webDevRoutes: MetadataRoute.Sitemap = webProjects.map((project) => ({
    url: `${baseUrl}/projects/Web-development/${project.slug.current}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Fetch calligraphy projects from Sanity
  const calligraphyProjects = await client.fetch<{ slug: { current: string } }[]>(
    `*[_type == "calligraphyProject"]{ slug }`
  );

  const calligraphyRoutes: MetadataRoute.Sitemap = calligraphyProjects.map((project) => ({
    url: `${baseUrl}/projects/calligraphy/${project.slug.current}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Combine all routes
  return [...staticRoutes, ...webDevRoutes, ...calligraphyRoutes];
}
