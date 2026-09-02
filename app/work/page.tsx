
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";
import { Reveal } from "@/components/animations/Reveal";
import {
  RevealGroup,
} from "@/components/animations/RevealGroup";
import {
  RevealItem,
} from "@/components/animations/RevealItem";

export default function WorkPage() {
  const projects = getFeaturedProjects();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-8 lg:pt-40">

        {/* Header */}
        <Reveal>
          <section className="border-b border-border/70 pb-12">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                  Selected Work
                </p>

                <h1 className="mt-5 max-w-4xl text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
                  Things
                  <br />
                  <span className="text-muted-foreground">I've built.</span>
                </h1>
              </div>

              <div className="max-w-xs">
                <p className="text-sm leading-6 text-muted-foreground">
                  A collection of products, systems, interfaces, and experiments
                  built while exploring what the web can become.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Project list */}
        <section className="pt-12">
          <div className="mb-8 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Projects
            </span>

            <span className="font-mono text-[10px] text-muted-foreground">
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>


          <RevealGroup className="space-y-6">
            {projects.map((project, index) => (
              <RevealItem key={project.slug}>
                <ProjectCard
                  project={project}
                  index={index}
                />
              </RevealItem>
            ))}
          </RevealGroup>

        </section>

      </div>
    </main>
  );
}