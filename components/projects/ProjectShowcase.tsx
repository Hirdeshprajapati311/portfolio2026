"use client";

import { Project } from "@/types/projects";
import { FileText, Fingerprint, Layers3, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";


const ForgeX3DScene = dynamic(
  () =>
    import("@/components/3d/ForgeX3DScene").then(
      (mod) => mod.ForgeX3DScene,
    ),
  {
    ssr: false,
  },
);

type ProjectShowcaseProps = {
  project: Project;
};

function SyncNoteShowcase() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.08),transparent_45%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-1/2 w-[min(760px,85%)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-3">
            <FileText className="size-4 text-white/60" />

            <span className="text-sm text-white/70">
              My First SyncNote
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-white/50" />

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
              synced
            </span>
          </div>
        </div>

        <div className="grid min-h-[280px] grid-cols-[150px_1fr]">
          <aside className="border-r border-white/10 p-5">
            <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
              Documents
            </div>

            <div className="mt-6 space-y-3">
              <div className="rounded-lg bg-white/[0.07] px-3 py-2">
                <div className="h-1.5 w-20 rounded bg-white/20" />
              </div>

              <div className="px-3 py-2">
                <div className="h-1.5 w-16 rounded bg-white/8" />
              </div>

              <div className="px-3 py-2">
                <div className="h-1.5 w-24 rounded bg-white/8" />
              </div>

              <div className="px-3 py-2">
                <div className="h-1.5 w-14 rounded bg-white/8" />
              </div>
            </div>
          </aside>

          <main className="p-7">
            <div className="h-3 w-40 rounded bg-white/15" />

            <div className="mt-7 space-y-3">
              <div className="h-2 w-full rounded bg-white/8" />
              <div className="h-2 w-[92%] rounded bg-white/8" />
              <div className="h-2 w-[78%] rounded bg-white/8" />
            </div>

            <div className="mt-8 h-24 rounded-xl border border-white/8 bg-white/[0.025]" />

            <div className="mt-7 space-y-3">
              <div className="h-2 w-[86%] rounded bg-white/8" />
              <div className="h-2 w-[72%] rounded bg-white/8" />
            </div>
          </main>
        </div>
      </motion.div>
    </div>
  );
}

function AttendanceShowcase() {
  const bars = [38, 54, 46, 72, 62, 84, 67, 91, 76, 87, 65, 78];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.07),transparent_48%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-1/2 w-[min(760px,85%)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-black/60 p-5 shadow-2xl backdrop-blur-xl sm:p-7"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
              Attendance system
            </p>

            <h3 className="mt-2 text-lg text-white/75">
              Organization overview
            </h3>
          </div>

          <Fingerprint className="size-7 text-white/30" />
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            ["Present", "94%"],
            ["Absent", "6%"],
            ["Employees", "248"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-xl border border-white/8 bg-white/[0.025] p-4"
            >
              <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/25">
                {label}
              </p>

              <p className="mt-3 text-xl text-white/70">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-white/8 bg-white/[0.02] p-5">
          <div className="flex h-36 items-end gap-2">
            {bars.map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + index * 0.035,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex-1 rounded-t bg-white/[0.13]"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ForgeXUIShowcase() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.08),transparent_50%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute left-[13%] top-[20%] w-64 -rotate-6 rounded-2xl border border-white/10 bg-black/60 p-5 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex items-center justify-between">
          <Sparkles className="size-4 text-white/50" />

          <span className="font-mono text-[9px] text-white/25">
            COMPONENT / 01
          </span>
        </div>

        <div className="mt-10 h-2 w-24 rounded bg-white/15" />

        <div className="mt-4 space-y-2">
          <div className="h-1.5 w-full rounded bg-white/7" />
          <div className="h-1.5 w-[82%] rounded bg-white/7" />
        </div>

        <div className="mt-7 h-9 w-28 rounded-full bg-white/10" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="absolute right-[13%] top-[25%] w-72 rotate-6 rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-white/30" />
          <div className="h-1.5 w-20 rounded bg-white/10" />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2">
          <div className="h-16 rounded-xl border border-white/8 bg-white/[0.025]" />
          <div className="h-16 rounded-xl border border-white/8 bg-white/[0.025]" />
          <div className="h-10 rounded-xl border border-white/8 bg-white/[0.025]" />
          <div className="h-10 rounded-xl border border-white/8 bg-white/[0.025]" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.25 }}
        className="absolute bottom-[16%] left-1/2 flex size-36 -translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] shadow-2xl backdrop-blur-sm"
      >
        <Layers3 className="size-9 text-white/25" />

        <div className="absolute inset-5 rounded-full border border-white/8" />
      </motion.div>
    </div>
  );
}

function ForgeX3DShowcase() {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const handleReset = () => {
    controlsRef.current?.reset();
    setResetKey((key) => key + 1);
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.1),transparent_48%)]" />

      <ForgeX3DScene
        autoRotate={autoRotate}
        controlsRef={controlsRef}
        onInteraction={() => setHasInteracted(true)}
        resetKey={resetKey}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_25%,rgba(10,10,10,0.35)_100%)]" />

      <div className="pointer-events-none absolute left-6 top-6 z-10">
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/25">
          Interactive object
        </span>
      </div>

      <div className="absolute bottom-5 left-6 right-6 z-10 flex items-end justify-between gap-4">
        <span
          className={`pointer-events-none font-mono text-[9px] uppercase tracking-[0.25em] text-white/25 transition-opacity duration-500 motion-reduce:transition-none ${
            hasInteracted ? "opacity-0" : "opacity-100"
          }`}
        >
          Drag to explore
        </span>

        <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em]">
          <button
            type="button"
            onClick={() => setAutoRotate((rotating) => !rotating)}
            aria-label={autoRotate ? "Turn auto rotate off" : "Turn auto rotate on"}
            aria-pressed={autoRotate}
            className="text-white/45 transition-colors hover:text-white/80 focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/70 focus-visible:outline-offset-4"
          >
            <span
              aria-hidden="true"
              className={`mr-2 inline-block size-1.5 rounded-full align-[1px] ${
                autoRotate ? "bg-white/70" : "bg-white/20"
              }`}
            />
            Auto rotate
          </button>

          <span className="text-white/15">/</span>

          <button
            type="button"
            onClick={handleReset}
            aria-label="Reset 3D view"
            className="text-white/45 transition-colors hover:text-white/80 focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/70 focus-visible:outline-offset-4"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export function ProjectShowcase({
  project,
}: ProjectShowcaseProps) {
  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-border/70 bg-surface-elevated">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {project.slug === "syncnote" && <SyncNoteShowcase />}
      {project.slug === "biometric-attendance" && (
        <AttendanceShowcase />
      )}
      {project.slug === "forgexui" && <ForgeXUIShowcase />}
      {project.slug === "forgex3d" && <ForgeX3DShowcase />}

      <div className="absolute bottom-6 left-6">
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/25">
          {project.category} / {project.year}
        </span>
      </div>
    </div>
  );
}
