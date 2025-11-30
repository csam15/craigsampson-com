import { PrimaryButton } from "../../components/Buttons/Button";
import type { Metadata } from "next";
import { AboutContact } from "../../components/ui/homepage/CallToAction";
import ServiceAccordion from "../components/ServiceAccordion";

export const metadata: Metadata = {
  title: "Online Presence Solutions - Services | Craig Sampson",
  description: "Professional online presence solutions by Craig Sampson",
  openGraph: {
    title: "Services - Web Development, Electronics Repair & Calligraphy",
    description:
      "Full stack web development, electronics repair, and custom calligraphy services by Craig Sampson. Building fast, secure, and user-friendly digital experiences.",
    url: "https://craigsampson.com/services/online_solutions",
    siteName: "Craig Sampson",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Online Presence Solutions",
    description: "Online presence solution services by Craig Sampson.",
  },
  alternates: {
    canonical: "https://craigsampson.com/services/online_solutions",
  },
};

export default function Services() {
  return (
    <div className="page-container">
      <div className="flex flex-col items-start gap-6">
        <h1 className="">Complete Online Presence Solutions</h1>
        <p className="">
          Build a Strong, Consistent, and Visible Online Presence
        </p>
        <PrimaryButton link="/contact" label="Get in Touch" />
      </div>
      <div className="w-full">
        <ServiceAccordion />
      </div>

      <AboutContact />
    </div>
  );
}
