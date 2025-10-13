import {
  MonitorSmartphone,
  PenTool,
  CodeXml,
  TabletSmartphone,
} from "lucide-react";
import HomeServicesCard from "./HomeServicesCard";

export default function HomeServices() {
  return (
    <div className="space-y-4 w-full">
      <div className="">
        <h1 className="font-semibold">Services I Provide</h1>
        <p>Turning problems into practical solutions.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        <HomeServicesCard
          icon={<MonitorSmartphone className="size-10" />}
          title="Web Development"
          description="Building responsive and dynamic web apps using modern technologies like React, Next.js, and Node.js."
        />
        <HomeServicesCard
          icon={<CodeXml className="size-10" />}
          title="Custom Software Solutions"
          description="Developing tailored software applications to meet specific business needs, enhancing efficiency and productivity."
        />
        <HomeServicesCard
          icon={<TabletSmartphone className="size-10" />}
          title="Electronics Repair"
          description="Specializing in repairing smartphones, tablets, and laptops with a focus on quality and customer satisfaction."
        />
        <HomeServicesCard
          icon={<PenTool className="size-10" />}
          title="Calligraphy Art and Design"
          description="Creating elegant and artistic calligraphy pieces for various occasions, including custom designs and commissions."
        />
      </div>
    </div>
  );
}
