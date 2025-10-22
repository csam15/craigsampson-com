import { MetadataRoute } from "next";
import { wProjects } from "./data/WebDevProjects";
import { cProjects } from "./data/CalligraphyProjects";

export default function sitemap(): MetadataRoute.Sitemap {
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

  // Dynamic web development project routes
  const webDevRoutes: MetadataRoute.Sitemap = wProjects.map((project) => ({
    url: `${baseUrl}/projects/Web-development/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic calligraphy project routes
  const calligraphyRoutes: MetadataRoute.Sitemap = cProjects.map((project) => ({
    url: `${baseUrl}/projects/calligraphy/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Combine all routes
  return [...staticRoutes, ...webDevRoutes, ...calligraphyRoutes];
}
