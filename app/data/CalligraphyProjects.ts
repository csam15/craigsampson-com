export interface CalligraphyProject {
  id: number;
  title: string;
  image: string[];
  tagline: string;
  description: string;
  goals: string[];
  tools: string[];
}

export const cProjects: CalligraphyProject[] = [
  {
    id: 103,
    title: "Custom Wedding Displays",
    tagline: "",
    image: ["/projects/wedding.JPG"],
    description: "Designed and hand-lettered a custom chalkboard sign for a graduation celebration. The piece featured decorative lettering, celebratory accents, and personalized details to match the event’s theme. Each element was drawn by hand using chalk and paint markers, combining elegance and playfulness to create a memorable centerpiece for the occasion.",
    goals: ["Create a personalized sign that captures the excitement and achievement of graduation.", "Produce a durable, visually balanced piece suitable for both display and photography."],
    tools: ["Pencil", "Ruler", "Markers"],
  },
  {
    id: 100,
    title: "Defiant Gym Chalkboard",
    tagline: "Chalkboard art to place outside gym to drive in customers",
    image: ["/projects/defiant.JPEG"],
    description: "Designed and hand-lettered a large-scale chalkboard mural for a local MMA and fitness gym. The artwork featured bold, motivational typography and dynamic layouts to match the gym’s intense, high-energy atmosphere. Each design element was created freehand using chalk and paint markers, blending clean lettering with rough, gritty textures to reflect the spirit of discipline and strength that defines combat sports.",
    goals: ["Create a bold, motivating centerpiece that energizes gym members and reinforces the gym's brand identity.", "Use hand-lettered typography and design to communicate strength, focus, and determination."],
    tools: ["Chalk Markers", "Ruler"],
  },
  {
    id: 101,
    title: "Personalized Initial Artwork",
    tagline: "Pieces done for clients looking to gift hand drawn art to loved ones.",
    image: ["/projects/K.jpeg", "/projects/L.JPEG"],
    description: "Created a personalized hand-lettered design featuring custom-drawn initials. The piece combined traditional calligraphy techniques with modern flourishes to produce a refined, elegant composition. Each curve and stroke was crafted with precision to highlight balance, symmetry, and individuality — resulting in a unique artwork tailored to the client’s style and personality.",
    goals: ["Design a refined, personalized monogram that reflects the client’s style and character.", "Deliver a clean, detailed piece suitable for display or digital reproduction."],
    tools: ["Pencil", "Ruler", "Markers"],
  },
  {
    id: 102,
    title: "Custom Graduation Sign",
    tagline: "Chalkboard displayed at the entrance to a college graduation party",
    image: ["/projects/grad.jpeg", "/projects/grad2.JPEG"],
    description: "Designed and hand-lettered a custom chalkboard sign for a graduation celebration. The piece featured decorative lettering, celebratory accents, and personalized details to match the event’s theme. Each element was drawn by hand using chalk and paint markers, combining elegance and playfulness to create a memorable centerpiece for the occasion.",
    goals: ["Create a personalized sign that captures the excitement and achievement of graduation.", "Produce a durable, visually balanced piece suitable for both display and photography."],
    tools: ["Chalk Markers", "Ruler"],
  },

];
