"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type RevealGroupProps = {
  children: ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
};

export function RevealGroup({
  children,
  stagger = 0.08,
  delay = 0,
  className,
}: RevealGroupProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-80px",
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}