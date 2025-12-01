"use client";

import { useState } from "react";
import {
  Blocks,
  Database,
  Palette,
  Plus,
  SearchCheck,
  Wallpaper,
  Wrench,
} from "lucide-react";
import Link from "next/link";

export default function ServiceAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      icon: <Wallpaper className="text-black dark:text-white" />, // Add your icon here
      title: "Web Design",
      points: [
        "Custom, modern designs tailored to your brand",
        "Mobile-first, responsive layouts",
        "Clean UI/UX for easy navigation",
        "On-brand color, typography, and visual styling",
      ],
    },
    {
      icon: <Database className="text-black dark:text-white" />, // Add your icon here
      title: "Web Development",
      points: [
        "Hosting + Deployment",
        "CMS integration for easy blog and portfolio updates",
        "Performance, accessibility, and security best practices",
      ],
    },
    {
      icon: <SearchCheck className="text-black dark:text-white" />, // Add your icon here
      title: "Search Engine Optimization (SEO)",
      points: [
        "On-page SEO for pages, titles, and meta data",
        "Local SEO setup with Google Business Profile",
        "Keyword targeting and content structure",
        "Technical SEO improvements for speed and crawlability",
      ],
    },
    {
      icon: <Blocks className="text-black dark:text-white" />, // Add your icon here
      title: "Integrations & Tool Setup",
      points: [
        "Setup of essential business tools (email, CRM, scheduling)",
        "Payment, booking, and form integrations",
        "Third-party service connections (Stripe, Google, HubSpot, etc.)",
      ],
    },
    {
      icon: <Wrench className="text-black dark:text-white" />, // Add your icon here
      title: "Ongoing Support & Maintenance",
      points: [
        "Website updates, fixes, and improvements",
        "Content and design updates on request",
        "Performance + SEO checkups",
      ],
    },
    {
      icon: <Palette className="text-black dark:text-white" />, // Add your icon here
      title: "Branding & Creative Design",
      points: [
        <Link
          key="branding-link"
          className="hover:text-secondary"
          href="branding"
        >
          Check out our branding services here!
        </Link>,
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
