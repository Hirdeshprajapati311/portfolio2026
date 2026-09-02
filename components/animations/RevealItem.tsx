"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type RevealItemProps = {
  children: ReactNode;
  className?: string;
};

export function RevealItem({
  children,
  className,
}: RevealItemProps) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}