"use client";

import { MotionReveal } from "@/components/portfolio/motion-reveal";
import { skillGroups } from "@/lib/content";
import { motion } from "framer-motion";
import {
  Database,
  Layers,
  Paintbrush,
  Server,
  Star,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: Record<(typeof skillGroups)[number]["icon"], LucideIcon> = {
  layers: Layers,
  brush: Paintbrush,
  database: Database,
  server: Server,
  wrench: Wrench,
  star: Star,
};

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 bg-card py-24 md:py-28">
      <div className="mx-auto max-w-275 px-6 md:px-8">
        <MotionReveal className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.05)] px-4 py-1.5 font-mono text-[var(--portfolio-cyan)] text-xs font-medium tracking-widest uppercase">
            Expertise
          </span>

          <h2 className="text-foreground mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Tech Stack & Skills
          </h2>

          <p className="text-muted-foreground mx-auto max-w-xl text-lg">
            Technologies I work with daily to build modern web applications.
          </p>
        </MotionReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon];

            return (
              <MotionReveal key={group.title} delay={i * 0.06}>
                <motion.div
                  className="h-full rounded-(--radius-portfolio-md) border border-border bg-(--surface-elevated) p-7 transition-shadow hover:border-[rgba(0,212,255,0.2)] hover:shadow-lg"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="mb-4 flex size-11 items-center justify-center rounded-lg border border-[rgba(0,212,255,0.2)] bg-[linear-gradient(135deg,rgba(0,212,255,0.15),rgba(124,58,237,0.15))] text-(--portfolio-cyan)">
                    <Icon className="size-5" />
                  </div>

                  <h3 className="text-foreground mb-4 font-bold">
                    {group.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {group.tags.map((tag) => (
                      <span
                        key={tag.name}
                        className={
                          tag.highlight
                            ? "rounded-full border border-[rgba(0,212,255,0.22)] bg-[rgba(0,212,255,0.06)] px-3 py-1.5 text-(--portfolio-cyan) text-xs"
                            : "rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-muted-foreground text-xs hover:border-white/15 hover:bg-white/[0.07] hover:text-foreground/90"
                        }
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
