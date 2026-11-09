"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Accent = "ocean" | "violet" | "amber" | "forest";

const accentVar: Record<Accent, string> = {
  ocean: "var(--project-ocean)",
  violet: "var(--project-violet)",
  amber: "var(--project-amber)",
  forest: "var(--project-forest)",
};

const patterns: Record<Accent, ReactNode> = {
  ocean: (
    <>
      <div className="absolute inset-[12%] rounded-2xl border border-white/15 bg-black/10 backdrop-blur-[2px]" />
      <div className="absolute inset-x-[16%] top-[18%] h-[22%] rounded-xl bg-white/10" />
      <div className="absolute right-[14%] bottom-[18%] size-[28%] max-h-28 max-w-28 rounded-full border border-white/20" />
      <div className="absolute right-[20%] bottom-[26%] size-[10%] max-h-12 max-w-12 rounded-full bg-white/25" />
      <div className="absolute bottom-[18%] left-[14%] h-2 w-[22%] rounded-full bg-white/30" />
      <div className="absolute bottom-[12%] left-[14%] h-2 w-[12%] rounded-full bg-white/20" />
    </>
  ),
  violet: (
    <>
      <div className="absolute inset-y-[12%] left-[10%] w-[34%] rounded-2xl border border-white/15 bg-white/8" />
      <div className="absolute inset-y-[12%] right-[10%] flex w-[40%] flex-col gap-3">
        <div className="h-10 rounded-xl bg-white/12" />
        <div className="h-10 rounded-xl bg-white/8" />
        <div className="h-10 rounded-xl bg-white/12" />
        <div className="min-h-0 flex-1 rounded-xl bg-white/6" />
      </div>
      <div className="absolute top-1/2 left-[42%] size-3 -translate-y-1/2 rounded-full bg-white/70 shadow-[0_0_20px_rgba(255,255,255,0.45)]" />
    </>
  ),
  amber: (
    <>
      <div className="absolute inset-[10%] grid grid-cols-3 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/10 bg-white/8"
            style={{ opacity: 0.45 + (i % 3) * 0.15 }}
          />
        ))}
      </div>
      <div className="absolute right-[10%] bottom-[12%] rounded-full bg-white/20 px-4 py-2 font-mono text-[0.65rem] tracking-wider text-white uppercase">
        Checkout
      </div>
    </>
  ),
  forest: (
    <>
      <div className="absolute inset-x-[10%] top-[12%] h-8 rounded-full bg-white/10" />
      <div className="absolute inset-x-[10%] top-[28%] bottom-[12%] grid grid-cols-2 gap-4">
        <div className="rounded-2xl bg-white/10" />
        <div className="flex flex-col gap-3">
          <div className="min-h-0 flex-1 rounded-2xl bg-white/12" />
          <div className="min-h-0 flex-1 rounded-2xl bg-white/8" />
          <div className="min-h-0 flex-1 rounded-2xl bg-white/10" />
        </div>
      </div>
    </>
  ),
};

export function ProjectPreview({
  accent,
  number,
  title,
  className,
  fill = false,
}: {
  accent: Accent;
  number: string;
  title: string;
  className?: string;
  /** Stretch to parent height without aspect-ratio forcing overflow */
  fill?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden",
        fill ? "h-full min-h-[16rem] w-full" : "aspect-[16/10] w-full",
        className,
      )}
    >
      <motion.div
        className="absolute inset-0 origin-center"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, color-mix(in oklab, ${accentVar[accent]} 55%, white), transparent 42%),
              radial-gradient(circle at 80% 70%, color-mix(in oklab, ${accentVar[accent]} 40%, black), transparent 45%),
              linear-gradient(145deg, color-mix(in oklab, ${accentVar[accent]} 70%, #0b0c0f), #12141a)
            `,
          }}
        />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />
        {patterns[accent]}
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/60 via-black/25 to-transparent p-5 pt-16">
        <p className="font-mono text-[0.65rem] tracking-[0.2em] text-white/70 uppercase">
          Case {number}
        </p>
        <p className="mt-1 line-clamp-1 text-sm font-medium text-white">
          {title}
        </p>
      </div>
    </div>
  );
}
