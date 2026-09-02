import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { Project } from "@/types/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block"
    >
      <article
        data-cursor="project"
        className="relative overflow-hidden rounded-3xl border border-border/70 bg-surface transition-colors duration-300 hover:border-foreground/20">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border/70 bg-surface-elevated">
          <ProjectVisual
            project={project}
            index={index}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-60" />

          <div className="absolute left-6 top-6">
            <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/50 backdrop-blur-md">
              {project.category}
            </span>
          </div>

          <div className="absolute right-6 top-6 flex size-10 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/40 backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-white/25 group-hover:text-white">
            <ArrowUpRight className="size-4" />
          </div>

          <div className="absolute bottom-6 left-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
              {project.status}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight transition-colors duration-300 sm:text-3xl">
                {project.title}
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                {project.shortDescription}
              </p>
            </div>

            <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
              {project.year}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors group-hover:border-foreground/15"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}