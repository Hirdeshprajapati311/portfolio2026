import { ExperimentItem } from "@/content/experiments/ExperimentItem";
import { experiments } from "@/data/experiments";

export default function ExperimentsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-8 lg:pt-40">

        {/* Header */}
        <section className="border-b border-border/70 pb-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-end lg:gap-20">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                Experiments
              </p>

              <h1 className="mt-6 max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
                Curiosity
                <br />
                <span className="text-muted-foreground">
                  in progress.
                </span>
              </h1>
            </div>

            <p className="max-w-sm text-base leading-7 text-muted-foreground">
              Small ideas, interaction studies, visual experiments, and
              things I'm building simply because I want to know if they can
              work.
            </p>
          </div>
        </section>

        {/* Experiment list */}
        <section className="pt-12">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Laboratory
            </span>

            <span className="font-mono text-[10px] text-muted-foreground">
              {String(experiments.length).padStart(2, "0")} experiments
            </span>
          </div>

          <div>
            {experiments.map((experiment) => (
              <ExperimentItem
                key={experiment.number}
                experiment={experiment}
              />
            ))}
          </div>
        </section>

        {/* Closing statement */}
        <section className="mt-24 overflow-hidden rounded-3xl border border-border/70 bg-surface p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Why experiments?
            </p>

            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Not everything needs to become a product.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
              Some ideas exist to teach me something. Some become components.
              Some become products. And some are simply interesting enough to
              build once.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}