"use client";

import { MotionReveal } from "@/components/portfolio/motion-reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { about } from "@/lib/content";
import { Clapperboard, Trophy } from "lucide-react";

const interestIcons = {
  film: Clapperboard,
  sport: Trophy,
} as const;

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-section/70 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <MotionReveal>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} />
          <ul className="mt-10 space-y-4 border-t border-border pt-8">
            {about.highlights.map((item) => (
              <li
                key={item.label}
                className="grid grid-cols-[7rem_1fr] gap-3 text-sm md:grid-cols-[8rem_1fr]"
              >
                <span className="font-mono text-[0.68rem] tracking-[0.16em] text-muted-foreground uppercase">
                  {item.label}
                </span>
                <span className="font-medium text-foreground">{item.value}</span>
              </li>
            ))}
          </ul>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10">
            <p className="mb-4 font-mono text-[0.68rem] tracking-[0.18em] text-muted-foreground uppercase">
              Beyond the code
            </p>
            <div className="flex flex-wrap gap-3">
              {about.interests.map((interest) => {
                const Icon = interestIcons[interest.icon];
                return (
                  <div
                    key={interest.label}
                    className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2.5 text-sm text-foreground transition-colors hover:border-primary/30"
                  >
                    <Icon className="size-4 text-primary" />
                    {interest.label}
                  </div>
                );
              })}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
