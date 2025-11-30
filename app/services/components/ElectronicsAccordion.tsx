"use client";

import { useState } from "react";
import { Plus, Smartphone, Laptop, Tablet, Battery, Cpu, Shield } from "lucide-react";

export default function ElectronicsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      icon: <Smartphone className="text-black dark:text-white" />,
      title: "Smartphone Repair",
      points: [
        "Bullet point one",
        "Bullet point two",
        "Bullet point three",
      ],
    },
    {
      icon: <Tablet className="text-black dark:text-white" />,
      title: "Tablet Repair",
      points: [
        "Bullet point one",
        "Bullet point two",
        "Bullet point three",
      ],
    },
    {
      icon: <Laptop className="text-black dark:text-white" />,
      title: "Laptop Repair",
      points: [
        "Bullet point one",
        "Bullet point two",
        "Bullet point three",
      ],
    },
    {
      icon: <Battery className="text-black dark:text-white" />,
      title: "Battery Replacement",
      points: [
        "Bullet point one",
        "Bullet point two",
        "Bullet point three",
      ],
    },
    {
      icon: <Shield className="text-black dark:text-white" />,
      title: "Screen Protection",
      points: [
        "Bullet point one",
        "Bullet point two",
        "Bullet point three",
      ],
    },
    {
      icon: <Cpu className="text-black dark:text-white" />,
      title: "Hardware Upgrades",
      points: [
        "Bullet point one",
        "Bullet point two",
        "Bullet point three",
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
