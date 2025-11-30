import { PrimaryButton } from "../../components/Buttons/Button";
import type { Metadata } from "next";
import { AboutContact } from "../../components/ui/homepage/CallToAction";
import AutomationsAccordion from "../components/AutomationsAccordion";

export const metadata: Metadata = {
  title: "Automations & Integrations - Services | Craig Sampson",
  description: "Business automation and integration solutions by Craig Sampson",
  openGraph: {
    title: "Services - Automations & Integrations",
    description:
      "Streamline your business with custom automations and integrations. Connect your tools, automate workflows, and save time.",
    url: "https://craigsampson.com/services/automations_and_integrations",
    siteName: "Craig Sampson",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Automations & Integrations",
    description: "Business automation and integration solutions by Craig Sampson.",
  },
  alternates: {
    canonical: "https://craigsampson.com/services/automations_and_integrations",
  },
};

export default function AutomationsAndIntegrations() {
  return (
    <div className="page-container">
      <div className="flex flex-col items-start gap-6">
        <h1 className="">Automations & Integrations</h1>
        <p className="">
          Connect Your Tools, Automate Your Workflows, Focus on What Matters
        </p>
        <PrimaryButton link="/contact" label="Get in Touch" />
      </div>
      <div className="w-full">
        <AutomationsAccordion />
      </div>

      <AboutContact />
    </div>
  );
}
