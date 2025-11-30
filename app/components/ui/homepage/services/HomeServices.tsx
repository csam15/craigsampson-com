import {
  MonitorSmartphone,
  PenTool,
  CodeXml,
  TabletSmartphone,
} from "lucide-react";
import HomeServicesCard from "./HomeServicesCard";
import { SecondaryButton } from "@/app/components/Buttons/Button";

export default function HomeServices() {
  return (
    <div className="space-y-4 w-full">
      <div className="flex flex-col md:flex-row items-start gap-4 justify-between w-full">
        <div className="">
          <h1 className="font-semibold">How I can help</h1>
          <p>Turning problems into practical solutions.</p>
        </div>
        <SecondaryButton label="See All" link="/services" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        <HomeServicesCard
          icon={<MonitorSmartphone className="size-10" />}
          title="Complete Online Presence Solutions"
          description="Your entire online ecosystem built for you — modern website design, SEO optimization, essential integrations, and continuous support to keep your business performing."
          service="online-solutions"
        />
        <HomeServicesCard
          icon={<CodeXml className="size-10" />}
          title="Custom Automations & Integrations"
          description="Connect your tools, automate your workflows, and eliminate repetitive tasks with custom-built solutions designed for your business."
          service="custom-automations"
        />
        <HomeServicesCard
          icon={<TabletSmartphone className="size-10" />}
          title="Branding & Creative Design"
          description="Build a cohesive brand with professional logo design, visual guidelines, and custom calligraphy elements that add a personal, handcrafted feel."
          service="branding"
        />
        <HomeServicesCard
          icon={<PenTool className="size-10" />}
          title="Electronics Repair"
          description="From hardware diagnostics to custom PC builds, I repair and create with precision to bring devices back to life. Available for Staten Island customers only."
          service="electronics-repair"
        />
      </div>
    </div>
  );
}
