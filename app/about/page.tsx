import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { about } from "@/data/about";
import { Reveal } from "@/components/animations/Reveal";
import { RevealGroup } from "@/components/animations/RevealGroup";
import { RevealItem } from "@/components/animations/RevealItem";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-8 lg:pt-40">

        {/* Intro */}
        <Reveal>
          <section className="border-b border-border/70 pb-16">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              About
            </p>

            <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-20">
              <h1 className="max-w-5xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.92] tracking-[-0.065em]">
                Developer,
                <br />
                <span className="text-muted-foreground">
                  builder,
                </span>
                <br />
                explorer.
              </h1>

              <div className="flex flex-col justify-end">
                <p className="text-base leading-7 text-muted-foreground">
                  {about.intro}
                </p>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium !text-black transition-transform hover:-translate-y-1"
                  >
                    Let's talk
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Philosophy */}
        <section className="grid gap-10 border-b border-border/70 py-20 lg:grid-cols-[220px_1fr] lg:gap-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              How I think
            </p>
          </div>

          <p className="max-w-4xl text-2xl leading-relaxed tracking-tight sm:text-3xl lg:text-4xl">
            {about.philosophy}
          </p>
        </section>

        {/* Skills */}
        <Reveal>
          <section className="grid gap-10 border-b border-border/70 py-20 lg:grid-cols-[220px_1fr] lg:gap-20">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Toolbox
              </p>
            </div>

            <div>
              <div className="flex max-w-4xl flex-wrap gap-3">
                {about.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* Current exploration */}
        <section className="grid gap-10 border-b border-border/70 py-20 lg:grid-cols-[220px_1fr] lg:gap-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Currently exploring
            </p>
          </div>

          <div className="max-w-4xl">
            <div className="divide-y divide-border/70">
              {about.currentlyExploring.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between py-5"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-lg">{item}</span>
                  </div>

                  <span className="text-muted-foreground">↗</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="grid gap-10 py-20 lg:grid-cols-[220px_1fr] lg:gap-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              The journey
            </p>
          </div>

          <div className="max-w-4xl">
            <div className="divide-y divide-border/70">
              <RevealGroup>
                {about.journey.map((item) => (

                  <RevealItem
                    key={item.year}
                  >
                    <div
                      className="grid gap-5 py-8 sm:grid-cols-[60px_180px_1fr]"
                    >
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {item.year}
                      </span>

                      <h2 className="text-xl font-medium tracking-tight">
                        {item.title}
                      </h2>

                      <p className="max-w-lg text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}