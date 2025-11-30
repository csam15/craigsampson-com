import { PrimaryButton } from "../components/Buttons/Button";
import {
  CodeXml,
  MonitorSmartphone,
  PenTool,
  TabletSmartphone,
} from "lucide-react";
import type { Metadata } from "next";
import { AboutContact } from "../components/ui/homepage/CallToAction";
import HomeServicesCard from "../components/ui/homepage/services/HomeServicesCard";

export const metadata: Metadata = {
  title:
    "Services - Web Development, Electronics Repair & Calligraphy | Craig Sampson",
  description:
    "Professional services offered by Craig Sampson: Full stack web development with React & Next.js, electronics repair for consumer devices, and custom calligraphy & design work.",
  openGraph: {
    title: "Services - Web Development, Electronics Repair & Calligraphy",
    description:
      "Full stack web development, electronics repair, and custom calligraphy services by Craig Sampson. Building fast, secure, and user-friendly digital experiences.",
    url: "https://craigsampson.com/services",
    siteName: "Craig Sampson",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Web Development, Electronics Repair & Calligraphy",
    description:
      "Full stack web development, electronics repair, and custom calligraphy services by Craig Sampson.",
  },
  alternates: {
    canonical: "https://craigsampson.com/services",
  },
};

export default function Projects() {
  return (
    <div className="page-container">
      <div className="flex flex-col items-start gap-6">
        <h1 className="">Everything you need to succeed online</h1>
        <p className="">
          From visual identity to full scale web development. I create digital
          experiences that help your business look polished &amp; professional
        </p>
        <PrimaryButton link="/contact" label="Get in Touch" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        <HomeServicesCard
          icon={<MonitorSmartphone className="size-10" />}
          title="Online Presence Solutions"
          description="Your entire online ecosystem built for you — modern website design, SEO optimization, and continuous support to keep your business performing."
          service="online_solutions"
        />
        <HomeServicesCard
          icon={<CodeXml className="size-10" />}
          title="Custom Automations & Integrations"
          description="Connect your tools, automate your workflows, and eliminate repetitive tasks with custom-built solutions designed for your business."
          service="automations_and_integrations"
        />
        <HomeServicesCard
          icon={<PenTool className="size-10" />}
          title="Branding & Creative Design"
          description="Build a cohesive brand with professional logo design, visual guidelines, and custom calligraphy elements that add a personal, handcrafted feel."
          service="branding"
        />
        <HomeServicesCard
          icon={<TabletSmartphone className="size-10" />}
          title="Electronics Repair"
          description="From hardware diagnostics to custom PC builds, I repair and create with precision to bring devices back to life. Available for local Staten Island customers only."
          service="electronics_repair"
        />
      </div>
      <AboutContact />
    </div>
  );
}
