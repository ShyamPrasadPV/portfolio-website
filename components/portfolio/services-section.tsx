"use client";

import { MotionReveal } from "@/components/portfolio/motion-reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { services } from "@/lib/content";
import { motion } from "framer-motion";

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-section/70 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <MotionReveal className="mb-14 md:mb-16">
          <SectionHeading
            eyebrow="What I do"
            title="Engineering support across the product lifecycle."
            description="From early architecture decisions to polished delivery, I help teams design, build, and refine digital products."
          />
        </MotionReveal>

        <div className="divide-y divide-border overflow-hidden rounded-[1.5rem] border border-border bg-card">
          {services.map((service, index) => (
            <MotionReveal key={service.title} delay={index * 0.04}>
              <motion.article
                className="group grid gap-4 px-6 py-7 transition-colors hover:bg-muted/40 md:grid-cols-[6rem_1fr_1.2fr] md:items-start md:gap-8 md:px-8 md:py-9"
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <span className="font-mono text-sm text-primary">
                  {service.number}
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {service.description}
                </p>
              </motion.article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
