export interface WebDevProject {
  id: number;
  title: string;
  image: string[];
  tags: string[];
  link?: string;
  github?: string;
  tagline: string;
  description: string;
  goals?: string[];
  technologies: string[];
  features?: string[];
}

export const wProjects: WebDevProject[] = [
  {
    id: 1,
    title: "Macstudio Nexus CRM",
    image: ["/projects/crm.svg"],
    tags: ["Full Stack Development", "Custom Software"],
    github: "https://github.com/Macstudio-Nexus/macstudio-nexus-crm",
    tagline:
      "Simple custom CRM for storing customer and lead data while also allowing for easy project management between designers and developers.",
    description: `I developed a fully custom CRM platform designed to centralize client, project, and document management for small businesses. 
      The system allows users to create, store, and send quotes, contracts, and invoices directly from the dashboard, with automated email delivery and organized document storage. The CRM integrates with external APIs like HubSpot to sync deal and client data, while using AWS and PostgreSQL for secure file and data storage. It features user authentication, role-based access control, and a streamlined UI built for fast project workflows.`,
    goals: [
      "Create a centralized platform to manage clients, projects, quotes, contracts, and invoices all in one place.",
      "Design a clean, intuitive interface that lets users easily access and manage project-related assets like logos, color palettes, and sitemaps.",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Node.js"],
    features: [
      "Quote, contract, and invoice generation with PDF creation and email automation",
      "User authentication and role-based access control",
      "Organized project data layout for documents, design assets, and development resources",
    ],
  },
  {
    id: 2,
    title: "Google Calendar Booking App",
    image: ["/projects/google2.svg"],
    tags: ["Web App", "Backend Development"],
    github: "https://github.com/csam15/Google-Calendar-Booking",
    tagline:
      "A simple booking app using Google Calendar API, meant to be integrated with the users personal styling. For backend purposes only.",
    description: "",
    goals: [
      "To create a reusable backend setup for clients or users who need to utilize the Google Calendar API to let their clients or users book appointments",
      "",
    ],
    technologies: ["Next.js", "TypeScript", "Google Calendar API", "Node.js"],
    features: ["", "", ""],
  },
  {
    id: 3,
    title: "Kalshi Trading Bot",
    image: ["/projects/kalshi2.svg"],
    tags: ["Backend Development", "Automation"],
    github: "https://github.com/csam15/Kalshi-Trading-Bot",
    tagline:
      "Trading bot that utilizes Kalshi's API to place trades automatically based on predefined strategies and market conditions.",
    description: "",
    goals: [
      "Automate trading on Kalshi's platform to capitalize on market opportunities without manual intervention",
      "Implement risk management strategies to minimize potential losses",
    ],
    technologies: ["Python", "Kalshi API", "yfinance library", "websockets"],
  },
];
