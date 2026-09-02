"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    const { clientX, clientY } = event;

    mouseX.set(clientX);
    mouseY.set(clientY);
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative isolate min-h-screen overflow-hidden bg-background text-foreground"
    >
      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Mouse-following ambient light */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.045] blur-3xl"
        style={{
          x: springX,
          y: springY,
        }}
      />

      {/* Ambient orb */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[22%] -z-10 h-72 w-72 rounded-full border border-white/[0.08] bg-white/[0.025] blur-[1px]"
        animate={{
          y: [0, -18, 0],
          rotate: [0, 6, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 pb-8 pt-32 lg:px-8 lg:pb-10">
        {/* Top metadata */}
        <div className="flex items-center justify-between border-b border-border/60 pb-4">
          <div className="flex items-center gap-3">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-foreground/40" />
              <span className="relative inline-flex size-2 rounded-full bg-foreground" />
            </span>

            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Available for opportunities
            </span>
          </div>

          <span className="font-mono text-[11px] text-muted-foreground">
            INDIA / 2026
          </span>
        </div>

        {/* Main hero */}
        <div className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-[1fr_280px] lg:gap-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
            >
              Frontend / Full-Stack Developer
            </motion.p>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-5xl text-[clamp(3.5rem,9vw,9rem)] font-semibold leading-[0.88] tracking-[-0.065em]"
              >
                I build
                <br />
                <span className="text-muted-foreground">digital</span>
                <br />
                experiences.
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
            >
              <p className="max-w-md text-base leading-7 text-muted-foreground">
                I design and engineer interfaces, full-stack systems, and
                experimental web experiences where technology meets craft.
              </p>

              <div className="flex shrink-0 gap-3">
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 !text-zinc-950 transition-all duration-200 hover:-translate-y-1 hover:bg-zinc-200"
                >
                  Explore my work
                  <ArrowUpRight className="size-4 text-zinc-950 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/experiments"
                  className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
                >
                  Experiments
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right-side index */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="hidden lg:block"
          >
            <div className="border-l border-border/70 pl-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Currently building
              </p>

              <div className="mt-6 space-y-5">
                {[
                  ["01", "ForgeXUI"],
                  ["02", "ForgeX3D"],
                  ["03", "SyncNote"],
                  ["04", "Experiments"],
                ].map(([number, name]) => (
                  <div
                    key={number}
                    className="flex items-center gap-4"
                  >
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {number}
                    </span>

                    <span className="text-sm text-foreground/80">
                      {name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-12 border-t border-border/70 pt-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Focus
                </p>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Interfaces
                  <br />
                  Systems
                  <br />
                  3D / Motion
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom metadata */}
        <div className="flex items-end justify-between border-t border-border/60 pt-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Portfolio / 2026
          </span>

          <div className="flex items-center gap-2 text-muted-foreground">
            <ArrowDown className="size-3 animate-bounce" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
              Scroll to explore
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}