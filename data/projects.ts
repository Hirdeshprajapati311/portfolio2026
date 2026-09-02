import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    slug: "syncnote",
    title: "SyncNote",
    description:
      "A local-first collaborative document editor designed around offline capability, synchronization, and a focused writing experience.",
    shortDescription:
      "A local-first collaborative document editor built around offline capability and synchronization.",
    category: "Productivity",
    technologies: ["Next.js", "TypeScript", "React", "Laravel", "PostgreSQL"],
    year: 2026,
    status: "active",
    featured: true,
    highlights: [
      "Local-first architecture",
      "Rich text editing",
      "Collaborative synchronization",
    ],
  },

  {
    slug: "biometric-attendance",
    title: "Biometric Attendance System",
    description:
      "A full-stack attendance management platform built to handle biometric-based attendance, organizational workflows, and administrative reporting.",
    shortDescription:
      "A full-stack attendance platform combining biometric workflows with administrative systems.",
    category: "Full-Stack",
    technologies: ["Next.js", "Node.js", "Express", "MongoDB"],
    year: 2026,
    status: "completed",
    featured: true,
    highlights: [
      "Biometric attendance",
      "REST API architecture",
      "Administrative dashboard",
    ],
  },

  {
    slug: "forgexui",
    title: "ForgeXUI",
    description:
      "An experimental UI library focused on expressive React components, motion, interaction, and distinctive interface patterns.",
    shortDescription:
      "An experimental React UI library for expressive interfaces and interaction-driven components.",
    category: "UI Library",
    technologies: ["React", "TypeScript", "Tailwind CSS", "GSAP"],
    year: 2026,
    status: "active",
    featured: true,
    highlights: [
      "Reusable React components",
      "Motion-driven interactions",
      "Experimental UI patterns",
    ],
  },

  {
    slug: "forgex3d",
    title: "ForgeX3D",
    description:
      "An exploration into bringing high-quality 3D assets and interactive visual experiences to the modern web.",
    shortDescription:
      "A 3D web exploration focused on interactive models and visual experiences.",
    category: "3D / Web",
    technologies: ["Three.js", "React Three Fiber", "Drei"],
    year: 2026,
    status: "experimental",
    featured: true,
    highlights: [
      "Interactive 3D models",
      "Web-based rendering",
      "3D asset exploration",
    ],
  },
];
