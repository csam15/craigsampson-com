import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calligraphy - CS",
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
          Calligraphy
        </h1>
      </div>
    </div>
  );
}
