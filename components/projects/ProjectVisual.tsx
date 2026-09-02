import { Project } from "@/types/projects";
import { FileText, Fingerprint, Layers3, Sparkles } from "lucide-react";

type ProjectVisualProps = {
  project: Project;
  index: number;
};

function SyncNoteVisual() {
  return (
    <div className="absolute inset-0 p-6 sm:p-8">
      <div className="mx-auto flex h-full max-w-xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <FileText className="size-3.5 text-white/60" />
            <span className="text-xs text-white/70">My First Note</span>
          </div>

          <span className="font-mono text-[9px] uppercase tracking-wider text-white/30">
            synced
          </span>
        </div>

        <div className="flex flex-1">
          <div className="hidden w-28 border-r border-white/10 p-3 sm:block">
            <div className="h-2 w-12 rounded bg-white/10" />
            <div className="mt-4 space-y-2">
              <div className="h-1.5 w-full rounded bg-white/5" />
              <div className="h-1.5 w-10/12 rounded bg-white/5" />
              <div className="h-1.5 w-8/12 rounded bg-white/5" />
              <div className="h-1.5 w-full rounded bg-white/5" />
            </div>
          </div>

          <div className="flex-1 p-5 sm:p-7">
            <div className="h-3 w-32 rounded bg-white/15" />

            <div className="mt-6 space-y-3">
              <div className="h-2 w-full rounded bg-white/8" />
              <div className="h-2 w-11/12 rounded bg-white/8" />
              <div className="h-2 w-9/12 rounded bg-white/8" />
            </div>

            <div className="mt-8 h-24 rounded-xl border border-white/5 bg-white/[0.02]" />

            <div className="mt-6 space-y-3">
              <div className="h-2 w-10/12 rounded bg-white/8" />
              <div className="h-2 w-8/12 rounded bg-white/8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AttendanceVisual() {
  return (
    <div className="absolute inset-0 p-6 sm:p-8">
      <div className="mx-auto flex h-full max-w-xl flex-col rounded-2xl border border-white/10 bg-black/40 p-5 shadow-2xl backdrop-blur-sm sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
              Attendance
            </div>
            <div className="mt-2 text-lg font-medium text-white/80">
              Today
            </div>
          </div>

          <Fingerprint className="size-7 text-white/30" />
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <div className="font-mono text-[9px] text-white/30">
              PRESENT
            </div>
            <div className="mt-2 text-xl text-white/80">94%</div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <div className="font-mono text-[9px] text-white/30">
              ABSENT
            </div>
            <div className="mt-2 text-xl text-white/80">6%</div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <div className="font-mono text-[9px] text-white/30">
              TOTAL
            </div>
            <div className="mt-2 text-xl text-white/80">248</div>
          </div>
        </div>

        <div className="mt-4 flex-1 rounded-xl border border-white/10 bg-white/[0.02] p-4">
          <div className="flex h-full items-end gap-2">
            {[35, 55, 45, 72, 62, 84, 68, 92, 78, 88, 64, 76].map(
              (height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t bg-white/[0.14] transition-all duration-500 group-hover:bg-white/[0.22]"
                  style={{ height: `${height}%` }}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ForgeXUIVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute left-[12%] top-[18%] w-44 rotate-[-8deg] rounded-2xl border border-white/10 bg-black/50 p-4 shadow-2xl backdrop-blur-md transition-transform duration-700 group-hover:-translate-x-3 group-hover:-translate-y-2">
        <div className="flex items-center justify-between">
          <Sparkles className="size-4 text-white/50" />
          <span className="font-mono text-[8px] text-white/30">01</span>
        </div>

        <div className="mt-8 h-2 w-20 rounded bg-white/15" />
        <div className="mt-3 h-1.5 w-32 rounded bg-white/7" />
        <div className="mt-1.5 h-1.5 w-24 rounded bg-white/7" />

        <div className="mt-6 h-7 w-20 rounded-full bg-white/10" />
      </div>

      <div className="absolute right-[12%] top-[26%] w-48 rotate-[7deg] rounded-2xl border border-white/10 bg-white/[0.045] p-4 shadow-2xl backdrop-blur-md transition-transform duration-700 group-hover:translate-x-3 group-hover:translate-y-2">
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-white/30" />
          <div className="h-1.5 w-16 rounded bg-white/10" />
        </div>

        <div className="mt-6 space-y-2">
          <div className="h-8 rounded-lg border border-white/10 bg-white/[0.03]" />
          <div className="h-8 rounded-lg border border-white/10 bg-white/[0.03]" />
        </div>

        <div className="mt-4 flex gap-2">
          <div className="h-6 flex-1 rounded-full bg-white/10" />
          <div className="h-6 w-10 rounded-full border border-white/10" />
        </div>
      </div>

      <div className="absolute bottom-[15%] left-1/2 size-28 -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.025] shadow-2xl backdrop-blur-sm transition-transform duration-700 group-hover:scale-110">
        <div className="absolute inset-5 rounded-full border border-white/10" />
        <div className="absolute inset-9 rounded-full bg-white/[0.08]" />
      </div>

      <div className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-[1px]" />
    </div>
  );
}

function ForgeX3DVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[2.5rem] border border-white/15 bg-gradient-to-br from-white/[0.12] via-white/[0.04] to-transparent shadow-[0_30px_80px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:rotate-[18deg] group-hover:scale-105">
        <div className="absolute inset-4 rounded-[2rem] border border-white/10" />

        <div className="absolute left-1/2 top-1/2 h-20 w-14 -translate-x-1/2 -translate-y-1/2 rounded-[1rem] border border-white/15 bg-white/[0.05]" />

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-[8px] uppercase tracking-[0.25em] text-white/30">
          3D
        </div>
      </div>

      <div className="absolute left-[20%] top-[20%] size-2 rounded-full bg-white/30" />
      <div className="absolute right-[20%] top-[30%] size-1.5 rounded-full bg-white/20" />
      <div className="absolute bottom-[22%] left-[28%] size-1.5 rounded-full bg-white/20" />

      <div className="absolute inset-x-[15%] bottom-[15%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

export function ProjectVisual({
  project,
  index,
}: ProjectVisualProps) {
  return (
    <div className="absolute inset-0">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {project.slug === "syncnote" && <SyncNoteVisual />}
      {project.slug === "biometric-attendance" && <AttendanceVisual />}
      {project.slug === "forgexui" && <ForgeXUIVisual />}
      {project.slug === "forgex3d" && <ForgeX3DVisual />}

      <div className="absolute bottom-6 right-6">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}