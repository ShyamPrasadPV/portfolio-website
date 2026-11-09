"use client";

import { MotionReveal } from "@/components/portfolio/motion-reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { experience } from "@/lib/content";
import { motion } from "framer-motion";

export function ExperienceSection() {
  return (
    <section id="work" className="scroll-mt-24 bg-background/35 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <MotionReveal className="mb-14 md:mb-16">
          <SectionHeading
            eyebrow="Experience"
            title="Career timeline shaped by real product delivery."
            description="Roles and responsibilities focused on shipping durable systems for client products."
          />
        </MotionReveal>

        <div className="relative">
          <div
            className="absolute top-3 bottom-3 left-[0.7rem] hidden w-px bg-border md:block"
            aria-hidden
          />

          <div className="space-y-8">
            {experience.map((job, index) => (
              <MotionReveal key={job.company} delay={index * 0.05}>
                <motion.article
                  className="relative grid gap-6 rounded-[1.35rem] border border-border bg-card p-6 md:grid-cols-[12rem_1fr] md:gap-10 md:p-8"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                >
                  <div className="md:pl-8">
                    <span
                      className="absolute top-8 left-[0.45rem] hidden size-2.5 rounded-full bg-primary ring-4 ring-background md:block"
                      aria-hidden
                    />
                    <p className="font-mono text-[0.68rem] tracking-[0.16em] text-muted-foreground uppercase">
                      {job.period}
                    </p>
                    {job.current ? (
                      <span className="mt-3 inline-flex rounded-full bg-primary/10 px-2.5 py-1 font-mono text-[0.65rem] tracking-wider text-primary uppercase">
                        Current
                      </span>
                    ) : null}
                  </div>

                  <div>
                    <header className="mb-4">
                      <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-primary">
                        {job.company}
                      </p>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                        {job.summary}
                      </p>
                    </header>

                    <ul className="space-y-3">
                      {job.achievements.map((line) => (
                        <li
                          key={line.slice(0, 40)}
                          className="relative pl-5 text-sm leading-relaxed text-ink-soft before:absolute before:left-0 before:top-2 before:size-1.5 before:rounded-full before:bg-primary md:text-[0.95rem]"
                        >
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
