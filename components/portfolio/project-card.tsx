"use client";

import { Badge } from "@/components/ui/badge";
import { RichText } from "@/lib/rich-text";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Lightbulb } from "lucide-react";
import { useRef } from "react";

export type Project = {
  number: string;
  role: string;
  title: string;
  challenge: string;
  contributions: readonly string[];
  stack: readonly string[];
};

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 150, damping: 20 });
  const springY = useSpring(my, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

  function onPointerMove(e: React.PointerEvent) {
    if (!ref.current) return;
    const coarse =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;
    if (coarse) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(x);
    my.set(y);
  }

  function onPointerLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.article
      ref={ref}
      className="relative cursor-default overflow-hidden rounded-(--radius-portfolio-lg) border border-border bg-card"
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px", amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
    >
      <div className="relative z-1 p-8">
        <span className="font-mono text-5xl font-black leading-none text-gradient opacity-25">
          {project.number}
        </span>

        <Badge
          variant="outline"
          className="mb-3 mt-2 rounded-full border-[rgba(124,58,237,0.4)] bg-[rgba(124,58,237,0.08)] px-3 py-0.5 font-semibold text-(--portfolio-purple) text-xs uppercase tracking-wider"
        >
          {project.role}
        </Badge>

        <h3 className="text-foreground mb-4 text-lg font-bold leading-snug md:text-xl">
          {project.title}
        </h3>

        <div className="mb-4 rounded-r-lg border-(--portfolio-cyan) border-l-2 bg-[rgba(0,212,255,0.04)] py-3 pr-4 pl-4">
          <span className="mb-2 flex items-center gap-2 font-bold text-(--portfolio-cyan) text-[0.78rem] uppercase tracking-widest">
            <Lightbulb className="size-3.5" />
            The Challenge
          </span>

          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.challenge}
          </p>
        </div>

        <ul className="mb-5 flex flex-col gap-2">
          {project.contributions.map((c) => (
            <li
              key={c.slice(0, 40)}
              className="relative pl-5 text-sm leading-relaxed text-foreground/90 before:absolute before:left-0 before:text-(--portfolio-cyan) before:content-['→']"
            >
              <RichText text={c} />
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[rgba(0,212,255,0.18)] bg-[rgba(0,212,255,0.06)] px-2.5 py-1 font-mono text-(--portfolio-cyan) text-xs font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div
        className="pointer-events-none absolute right-0 bottom-0 h-45 w-45 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.08), transparent 60%)",
        }}
        aria-hidden
      />
    </motion.article>
  );
}
