import { PrimaryButton } from "../../components/Buttons/Button";
import type { Metadata } from "next";
import { AboutContact } from "../../components/ui/homepage/CallToAction";
import BrandingAccordion from "../components/BrandingAccordion";

export const metadata: Metadata = {
  title: "Branding & Creative Design - Services | Craig Sampson",
  description: "Professional branding and creative design services by Craig Sampson",
  openGraph: {
    title: "Services - Branding & Creative Design",
    description:
      "Custom branding, logo design, and creative services. Build a memorable brand identity that stands out.",
    url: "https://craigsampson.com/services/branding",
    siteName: "Craig Sampson",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Branding & Creative Design",
    description: "Professional branding and creative design services by Craig Sampson.",
  },
  alternates: {
    canonical: "https://craigsampson.com/services/branding",
  },
};

export default function Branding() {
  return (
    <div className="page-container">
      <div className="flex flex-col items-start gap-6">
        <h1 className="">Branding & Creative Design</h1>
        <p className="">
          Build a Memorable Brand Identity That Stands Out
        </p>
        <PrimaryButton link="/contact" label="Get in Touch" />
      </div>
      <div className="w-full">
        <BrandingAccordion />
      </div>

      <AboutContact />
    </div>
  );
}
