// makeshift database

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
    image: [
      "/projects/crm.svg",
      "/projects/crmLogin.png",
      "/projects/crm.svg",
      "/projects/crm2.png",
    ],
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
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Node.js"],
    features: [
      "Quote, contract, and invoice generation with PDF creation and email automation",
      "User authentication and role-based access control",
      "Organized project data layout for documents, design assets, and development resources",
    ],
  },
  {
    id: 2,
    title: "Google Calendar Booking App",
    image: ["/projects/google2.svg", "/projects/google.svg"],
    tags: ["Web App", "Backend Development"],
    github: "https://github.com/csam15/Google-Calendar-Booking",
    tagline:
      "A simple booking app using Google Calendar API, meant to be integrated with the users personal styling. For backend purposes only.",
    description:
      "A backend-only Google Calendar booking system built for developers to integrate into their own frontend applications. It manages authentication, checks availability, prevents double bookings, and schedules events directly in Google Calendar. Designed for flexibility and clean API integration into any custom frontend setup.",
    goals: [
      "To create a reusable backend setup for clients or users who need to utilize the Google Calendar API to let their clients or users book appointments",
      "Allow as much functionality and control over Google Calendar without ever needing to use the actual site",
    ],
    technologies: ["Next.js", "TypeScript", "Google Calendar API", "Node.js"],
    features: [
      "Frontend booking for clients or users",
      "Password protected admin page",
      "Automatically prevents double bookings",
    ],
  },
  {
    id: 3,
    title: "Kalshi Trading Bot",
    image: ["/projects/kalshi2.svg", "/projects/kalshi.svg"],
    tags: ["Backend Development", "Automation"],
    github: "https://github.com/csam15/Kalshi-Trading-Bot",
    tagline:
      "Trading bot that utilizes Kalshi's API to place trades automatically based on predefined strategies and market conditions.",
    description:
      "Developed an automated trading bot that interacts with Kalshi's REST and WebSocket APIs to monitor market data, place batch orders, and manage open positions in real time. Implemented order book tracking, profit-taking logic, and robust error handling with automatic reconnection and retry systems for reliable long-term operation.",
    goals: [
      "Automate trading on Kalshi's platform to capitalize on market opportunities without manual intervention",
      "Implement risk management strategies to minimize potential losses",
    ],
    technologies: ["Python", "Kalshi API", "yfinance library", "websockets"],
    features: [
      "Automatic buying and selling on Kalshi trade markets based off user inputed strategies",
    ],
  },
];
