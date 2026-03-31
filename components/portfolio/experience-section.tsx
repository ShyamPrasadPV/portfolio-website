"use client";

import { Badge } from "@/components/ui/badge";
import { MotionReveal } from "@/components/portfolio/motion-reveal";
import { experience } from "@/lib/content";
import { motion } from "framer-motion";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 bg-card py-24 md:py-28">
      <div className="mx-auto max-w-275 px-6 md:px-8">
        <MotionReveal className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.05)] px-4 py-1.5 font-mono text-(--portfolio-cyan) text-xs font-medium tracking-widest uppercase">
            Career
          </span>

          <h2 className="text-foreground text-3xl font-extrabold tracking-tight md:text-4xl">
            Work Experience
          </h2>
        </MotionReveal>

        <MotionReveal>
          <motion.article
            className="relative overflow-hidden rounded-(--radius-portfolio-lg) border border-border bg-(--surface-elevated) p-8 shadow-[0_0_40px_rgba(0,212,255,0.08)] md:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -2, borderColor: "rgba(0,212,255,0.2)" }}
          >
            <div className="absolute top-0 right-0 left-0 h-0.5 bg-gradient-accent" />

            <div
              className="absolute top-8 -left-3 hidden h-5 w-5 rounded-full bg-gradient-accent shadow-[0_0_12px_rgba(0,212,255,0.5)] md:block"
              aria-hidden
            />

            <header className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-foreground mb-2 text-xl font-bold md:text-2xl">
                  {experience.role}
                </h3>

                <div className="flex items-center gap-2 font-semibold text-(--portfolio-cyan)">
                  <Building2 className="size-4 shrink-0" />

                  {experience.company}
                </div>
              </div>

              <div className="flex flex-col items-start gap-2 md:items-end">
                <span className="text-muted-foreground flex items-center gap-2 font-mono text-sm">
                  <Calendar className="size-4" />

                  {experience.period}
                </span>

                {experience.current ? (
                  <Badge className="rounded-full border-0 bg-gradient-accent px-3 font-bold text-white uppercase tracking-wide">
                    Current
                  </Badge>
                ) : null}
              </div>
            </header>

            <ul className="flex flex-col gap-4">
              {experience.achievements.map((line) => (
                <li
                  key={line.slice(0, 48)}
                  className="flex gap-3 text-[0.97rem] leading-relaxed"
                >
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-(--portfolio-cyan)" />
                  {line}
                </li>
              ))}
            </ul>
          </motion.article>
        </MotionReveal>
      </div>
    </section>
  );
}
