"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, useAnimation } from "motion/react";

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({
  children,
}: PageTransitionProps) {
  const pathname = usePathname();
  const controls = useAnimation();

  useEffect(() => {
    controls.set({
      opacity: 0,
      y: 12,
    });

    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    });
  }, [pathname, controls]);

  return (
    <motion.div
      animate={controls}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}