"use client";

import { useState } from "react";
import {
  Plus,
  Zap,
  Workflow,
  Bot,
  Database,
  Cloud,
  Link as LinkIcon,
} from "lucide-react";

export default function AutomationsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      icon: <Workflow className="text-black dark:text-white" />,
      title: "Workflow Automation",
      points: [
        "Automate repetitive tasks to save time and reduce manual errors",
        "Build custom workflows for emails, reminders, approvals, and notifications",
        "Improve efficiency with ongoing monitoring and refinement",
      ],
    },
    {
      icon: <Bot className="text-black dark:text-white" />,
      title: "API Integrations",
      points: [
        "Connect your website or app to third-party platforms (Google, HubSpot, Stripe, etc.)",
        "Set up custom API calls to sync data in real time",
        "Create backend logic to automate complex business processes",
      ],
    },
    {
      icon: <LinkIcon className="text-black dark:text-white" />,
      title: "CRM & Business Tool Setup",
      points: [
        "Integrate CRMs like HubSpot for contact, deal, and communication tracking",
        "Set up automated pipelines, tasks, and email sequences",
        "Train your team on how to use and manage the system",
      ],
    },
    {
      icon: <Zap className="text-black dark:text-white" />,
      title: "Custom Integration Solutions",
      points: [
        "Tailored automations based on your specific workflow",
        "Data syncing between internal and external systems",
        "Custom scripts to handle tasks no prebuilt tool can",
      ],
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full">
      {services.map((service, index) => (
        <div key={index} className="border-b border-border overflow-hidden">
          {/* Header */}
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex items-center justify-between py-8 px-3 hover:bg-muted/50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-4">
              {service.icon && (
                <div className="text-primary">{service.icon}</div>
              )}
              <h3 className="text-lg font-semibold text-left">
                {service.title}
              </h3>
            </div>
            <Plus
              className={`size-6 shrink-0 transition-transform duration-300 ${
                openIndex === index ? "rotate-45" : ""
              }`}
            />
          </button>

          {/* Content */}
          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="px-6 pb-6">
              <div className="space-y-2">
                {service.points.map((point, pointIndex) => (
                  <div
                    key={pointIndex}
                    className="flex items-start font-fira gap-2"
                  >
                    <span className="text-primary">•</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
