"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import type { Experiment } from "@/data/experiments";

type ExperimentItemProps = {
  experiment: Experiment;
};

export function ExperimentItem({
  experiment,
}: ExperimentItemProps) {
  return (
    <motion.a
      href={experiment.link}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${experiment.title} experiment`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group grid gap-6 border-b border-border/70 py-8 sm:grid-cols-[70px_1fr_180px_40px] sm:items-center"
    >
      <span className="font-mono text-[10px] text-muted-foreground">
        {experiment.number}
      </span>

      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
            {experiment.title}
          </h2>

          <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
            {experiment.status}
          </span>
        </div>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
          {experiment.description}
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
          {experiment.category}
        </span>

        <span className="text-sm text-foreground/70">
          {experiment.technology}
        </span>
      </div>

      <div className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-foreground/30 group-hover:text-foreground">
        <ArrowUpRight className="size-4" />
      </div>
    </motion.a>
  );
}