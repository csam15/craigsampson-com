"use client";

import { useState } from "react";
import { Plus, Palette, FileText, Package, Megaphone, Eye, Sparkles } from "lucide-react";

export default function BrandingAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      icon: <Palette className="text-black dark:text-white" />,
      title: "Logo Design",
      points: [
        "Clean + professional logo design and redesign",
        "Primary + alternate logo variations",
        "Vector-based designs for perfect scaling across all platforms",
      ],
    },
    {
      icon: <Eye className="text-black dark:text-white" />,
      title: "Brand Guidelines",
      points: [
        "Defined brand color palette with HEX values",
        "Typography hierarchy for headings, body text, and branding use",
        "Logo usage rules & spacing, placement, and do/don’t examples",
      ],
    },
    {
      icon: <FileText className="text-black dark:text-white" />,
      title: "Social Media Branding",
      points: [
        "Custom social media profile + cover graphics",
        "Post templates for Instagram, Facebook, LinkedIn, + more",
        "Consistent visual style guide for all social platforms",
      ],
    },
    {
      icon: <Package className="text-black dark:text-white" />,
      title: "Print & Marketing Materials",
      points: [
        "Business cards, flyers, stickers, brochures, menus, etc.",
        "Custom illustrations or icons for a unique visual feel",
      ],
    },
    {
      icon: <Megaphone className="text-black dark:text-white" />,
      title: "Custom Hand-Drawn Calligraphy",
      points: [
        "Unique hand-lettered designs for logos, headers, or special elements",
        "Multiple styles available (modern, elegant script, bold strokes, etc.)",
        "Custom calligraphy for branding, invitations, or decorative graphics",
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
