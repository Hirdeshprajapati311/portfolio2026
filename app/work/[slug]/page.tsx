import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/projects";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { Reveal } from "@/components/animations/Reveal";
import { RevealGroup } from "@/components/animations/RevealGroup";
import { RevealItem } from "@/components/animations/RevealItem";



type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-8 lg:pt-40">
        <Reveal>
          <section className="border-b border-border/70 pb-12">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-3 transition-transform group-hover:-translate-x-1" />
              Back to work
            </Link>

            <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_300px] lg:items-end lg:gap-20">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {project.category}
                  </span>

                  <span className="font-mono text-[10px] text-muted-foreground">
                    {project.year}
                  </span>

                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    {project.status}
                  </span>
                </div>

                <h1 className="mt-7 max-w-5xl text-[clamp(3.5rem,9vw,9rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
                  {project.title}
                </h1>
              </div>

              <p className="max-w-sm text-base leading-7 text-muted-foreground">
                {project.shortDescription}
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.1} y={32}>
          <section className="pt-10">
            <ProjectShowcase project={project} />
          </section>
        </Reveal>

        <Reveal>
          <section className="grid gap-12 border-b border-border/70 py-20 lg:grid-cols-[220px_1fr] lg:gap-20">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Overview
              </p>
            </div>

            <div className="max-w-3xl">
              <p className="text-2xl leading-relaxed tracking-tight sm:text-3xl">
                {project.description}
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid gap-12 border-b border-border/70 py-20 lg:grid-cols-[220px_1fr] lg:gap-20">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Technology
              </p>
            </div>

            <RevealGroup className="flex max-w-3xl flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <RevealItem key={technology}>
                  <span className="block rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground">
                    {technology}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid gap-12 border-b border-border/70 py-20 lg:grid-cols-[220px_1fr] lg:gap-20">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Highlights
              </p>
            </div>

            <RevealGroup className="max-w-3xl divide-y divide-border/70">
              {project.highlights.map((highlight, index) => (
                <RevealItem key={highlight}>
                  <div className="flex items-center justify-between py-5">
                    <div className="flex items-center gap-6">
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-base sm:text-lg">
                        {highlight}
                      </span>
                    </div>

                    <span className="text-muted-foreground">
                      ↗
                    </span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </section>
        </Reveal>

        {(project.githubUrl || project.liveUrl) && (
          <Reveal>
            <section className="flex flex-wrap gap-3 py-12">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium !text-black transition-transform hover:-translate-y-1"
                >
                  GitHub
                  <ArrowUpRight className="size-4" />
                </Link>
              )}

              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  Live project
                  <ArrowUpRight className="size-4" />
                </Link>
              )}
            </section>
          </Reveal>
        )}
      </div>
    </main>
  );
}