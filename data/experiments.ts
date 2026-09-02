export type Experiment = {
  number: string;
  title: string;
  description: string;
  category: string;
  technology: string;
  status: "exploring" | "building" | "complete";
};

export const experiments: Experiment[] = [
  {
    number: "01",
    title: "ForgeXUI",
    description:
      "Exploring expressive React components, unusual interaction patterns, motion, and reusable UI primitives.",
    category: "UI / Interaction",
    technology: "React + GSAP",
    status: "building",
  },
  {
    number: "02",
    title: "ForgeX3D",
    description:
      "Exploring interactive 3D objects on the web and how physical-looking objects can become part of an interface.",
    category: "3D / Web",
    technology: "Three.js + R3F",
    status: "exploring",
  },
  {
    number: "03",
    title: "Paint Spill Tabs",
    description:
      "An interaction experiment where the active navigation state behaves more like a physical layer of paint spilling into its surroundings.",
    category: "Interaction",
    technology: "React + Motion",
    status: "complete",
  },
  {
    number: "04",
    title: "Cursor Field",
    description:
      "A small interaction study exploring how subtle cursor movement can influence the atmosphere of an interface without becoming distracting.",
    category: "Motion",
    technology: "Motion",
    status: "complete",
  },
  {
    number: "05",
    title: "3D Product Objects",
    description:
      "A collection of reusable product models designed specifically for web experiences, starting with everyday objects that are surprisingly difficult to find.",
    category: "3D Assets",
    technology: "Three.js",
    status: "exploring",
  },
];
