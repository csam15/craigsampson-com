"use client";

import { useState } from "react";
import {
  Plus,
  Smartphone,
  Laptop,
  Tablet,
  Battery,
  Cpu,
  Shield,
} from "lucide-react";

export default function ElectronicsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      icon: <Smartphone className="text-black dark:text-white" />,
      title: "Smartphone Repair",
      points: [
        "iPhone + android repairs",
        "Displays, cameras, speakers, and more",
      ],
    },
    {
      icon: <Tablet className="text-black dark:text-white" />,
      title: "Tablet Repair",
      points: [
        "iPad + other tablet repairs",
        "Displays, cameras, speakers, and more",
      ],
    },
    {
      icon: <Laptop className="text-black dark:text-white" />,
      title: "Laptop Repair + Upgrades",
      points: [
        "Windows + mac device repairs and upgrades",
        "Displays, batteries, keyboards and more",
        "Storage, RAM, + more hardware upgrades",
      ],
    },
    {
      icon: <Battery className="text-black dark:text-white" />,
      title: "Battery Replacement",
      points: [
        "Smartphone battery replacement",
        "Tablet battery replacement",
        "Laptop battery replacement",
      ],
    },
    {
      icon: <Shield className="text-black dark:text-white" />,
      title: "Screen Protection",
      points: ["Smartphone screen protectors available"],
    },
    {
      icon: <Cpu className="text-black dark:text-white" />,
      title: "Custom PC Builds",
      points: ["Fully custom PC builds based on your budget range"],
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
