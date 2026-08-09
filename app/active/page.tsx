import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Active - CS",
  description:
    "Active.",
  openGraph: {
    title: "Active - CS",
    description:
      "Active.",
    url: "https://craigsampson.com/contact",
    siteName: "Craig Sampson",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Active - CS",
    description:
      "Active.",
  },
  alternates: {
    canonical: "https://craigsampson.com/contact",
  },
};

export default function Contact() {
  return (
    <div className="page-container">
      <div className="flex flex-col items-start gap-6">
        <h1>Active</h1>
      </div>
    </div>
  );
}
