export type ProjectStatus =
  | "active"
  | "completed"
  | "experimental"
  | "archived";

export type Project = {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;

  category: string;

  technologies: string[];

  year: number;

  status: ProjectStatus;

  featured: boolean;

  githubUrl?: string;
  liveUrl?: string;

  image?: string;
  coverImage?: string;

  highlights: string[];
};
