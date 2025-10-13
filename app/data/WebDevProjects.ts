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
}

export const projects: WebDevProject[] = [
  {
    id: 1,
    title: "Google Calendar Booking App",
    image: ["/projects/google-calendar.png"],
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
  },
  {
    id: 2,
    title: "Macstudio Nexus CRM",
    image: ["/projects/crm.png"],
    tags: ["Full Stack Development", "Custom Software"],
    github: "https://github.com/Macstudio-Nexus/macstudio-nexus-crm",
    tagline:
      "Simple custom CRM for storing customer and lead data while also allowing for easy project management between designers and developers.",
    description: "",
    goals: [
      "To allow employees to easily manage and track customer and lead information",
      "Make storing and accessing project data simple and efficient",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Node.js"],
  },
  {
    id: 3,
    title: "Kalshi Trading Bot",
    image: ["/projects/kalshi.png"],
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
