import { PrimaryButton } from "../../components/Buttons/Button";
import type { Metadata } from "next";
import { AboutContact } from "../../components/ui/homepage/CallToAction";
import ElectronicsAccordion from "../components/ElectronicsAccordion";

export const metadata: Metadata = {
  title: "Electronics Repair - Services | Craig Sampson",
  description: "Professional electronics repair services by Craig Sampson",
  openGraph: {
    title: "Services - Electronics Repair",
    description:
      "Expert repair services for smartphones, tablets, laptops, and more. Fast, reliable, and quality repairs.",
    url: "https://craigsampson.com/services/electronics_repair",
    siteName: "Craig Sampson",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Electronics Repair",
    description: "Professional electronics repair services by Craig Sampson.",
  },
  alternates: {
    canonical: "https://craigsampson.com/services/electronics_repair",
  },
};

export default function ElectronicsRepair() {
  return (
    <div className="page-container">
      <div className="flex flex-col items-start gap-6">
        <h1 className="">Electronics Repair</h1>
        <p className="">
          Fast, Reliable Repairs for Your Devices
        </p>
        <PrimaryButton link="/contact" label="Get in Touch" />
      </div>
      <div className="w-full">
        <ElectronicsAccordion />
      </div>

      <AboutContact />
    </div>
  );
}
