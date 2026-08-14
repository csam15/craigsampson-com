import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Active - CS",
  description: "Active.",
  openGraph: {
    title: "Active - CS",
    description: "Active.",
    url: "https://craigsampson.com/contact",
    siteName: "Craig Sampson",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Active - CS",
    description: "Active.",
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
      <div className="flex flex-col items-start gap-6">
        <h2>
          Low Voltage Systems Lead @{" "}
          <a
            href="https://www.briggsservice.com/low-voltage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:text-blue-600 hover:underline"
          >
            Briggs Services
          </a>
        </h2>
        <p>New York, NY</p>
      </div>
      <div className="flex flex-col items-start gap-6">
        <h2>
          Co-Founder & Technical Director @{" "}
          <a
            href="https://macdesignstudio.framer.website/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-macstudio-hover text-macstudio hover:underline"
          >
            Macstudio
          </a>
        </h2>
        <p>Remote</p>
      </div>
    </div>
  );
}
