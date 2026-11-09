"use client";

import { MotionReveal } from "@/components/portfolio/motion-reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { skillGroups } from "@/lib/content";
import { motion } from "framer-motion";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 bg-background/35 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <MotionReveal className="mb-14 md:mb-16">
          <SectionHeading
            eyebrow="Capabilities"
            title="A stack tuned for modern product engineering."
            description="Frontend craft, backend integrations, CMS platforms, and delivery discipline—used together to ship dependable software."
          />
        </MotionReveal>

        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <MotionReveal key={group.title} delay={index * 0.05}>
              <motion.div
                className="h-full rounded-[1.35rem] border border-border bg-card p-6 transition-colors hover:border-primary/25 md:p-7"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {group.description}
                    </p>
                  </div>
                  <span className="font-mono text-[0.68rem] text-primary">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground/85 transition-colors hover:border-primary/30 hover:text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
