export interface CalligraphyProject {
  id: number;
  title: string;
  image: string;
  tagline: string;
  description: string;
  tools: string[];
}

export const calligraphyProjects: CalligraphyProject[] = [
  {
    id: 100,
    title: "Defiant Gym Chalkboard",
    tagline: "Chalkboard art to place outside gym to drive in customers",
    image: "/projects/defiant.jpeg",
    description: "",
    tools: ["Chalk Markers", "Ruler"],
  },
  {
    id: 101,
    title: "Personalized Initial Artwork",
    tagline: "Piece done for a client looking to gift hand drawn art to a loved one.",
    image: "/projects/K.jpeg",
    description: "",
    tools: ["Pencil", "Ruler", "Markers"],
  },
  {
    id: 102,
    title: "Custom Graduation Sign",
    tagline: "Chalkboard displayed at the entrance to a college graduation party",
    image: "/projects/grad.jpeg",
    description: "",
    tools: ["Chalk Markers", "Ruler"],
  },
];
