"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

const defaultView = { once: true, margin: "0px 0px -40px 0px", amount: 0.12 };

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
} & Omit<MotionProps, "children">;

export function MotionReveal({
  children,
  className,
  delay = 0,
  ...motionProps
}: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={defaultView}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
