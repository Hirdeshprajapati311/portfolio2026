"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type CursorMode = "default" | "interactive" | "project";

export function CustomCursor() {
  const [mode, setMode] = useState<CursorMode>("default");
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
    mass: 0.25,
  });

  const springY = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
    mass: 0.25,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener(
      "mouseleave",
      handleMouseLeave,
    );

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    const handlePointerOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      if (!target) return;

      if (target.closest("[data-cursor='project']")) {
        setMode("project");
        return;
      }

      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea")
      ) {
        setMode("interactive");
        return;
      }

      setMode("default");
    };

    document.addEventListener("mouseover", handlePointerOver);

    return () => {
      document.removeEventListener("mouseover", handlePointerOver);
    };
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden items-center justify-center md:flex"
      style={{
        x: springX,
        y: springY,
      }}
      animate={{
        opacity: visible ? 1 : 0,
      }}
      transition={{
        opacity: {
          duration: 0.2,
        },
      }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full border border-white/30 bg-white/[0.04] text-white backdrop-blur-sm"
        animate={{
          width:
            mode === "project"
              ? 72
              : mode === "interactive"
                ? 40
                : 10,

          height:
            mode === "project"
              ? 72
              : mode === "interactive"
                ? 40
                : 10,

          x:
            mode === "project"
              ? -36
              : mode === "interactive"
                ? -20
                : -5,

          y:
            mode === "project"
              ? -36
              : mode === "interactive"
                ? -20
                : -5,

          backgroundColor:
            mode === "project"
              ? "rgba(255,255,255,0.08)"
              : mode === "interactive"
                ? "rgba(255,255,255,0.04)"
                : "rgba(255,255,255,0.9)",

          borderColor:
            mode === "default"
              ? "rgba(255,255,255,0)"
              : "rgba(255,255,255,0.25)",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
        }}
      >
        {mode === "project" && (
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/70">
            View
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}