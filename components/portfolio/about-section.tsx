"use client";

import { MotionReveal } from "@/components/portfolio/motion-reveal";
import { aboutCards } from "@/lib/content";
import { motion } from "framer-motion";
import { Clapperboard, Code2, Factory, Rocket, Trophy } from "lucide-react";

const cardIcons = {
  code: Code2,
  rocket: Rocket,
  factory: Factory,
} as const;

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-background py-24 md:py-28">
      <div className="mx-auto max-w-275 px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <MotionReveal>
            <div className="text-center lg:text-left">
              <span className="mb-4 inline-block rounded-full border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.05)] px-4 py-1.5 font-mono text-[var(--portfolio-cyan)] text-xs font-medium tracking-widest uppercase">
                About Me
              </span>
              <h2 className="text-foreground mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                Passionate About Building
                <br />
                Great Interfaces
              </h2>
              <p className="text-muted-foreground mt-6 text-[1.02rem] leading-relaxed">
                Over the past{" "}
                <strong className="text-foreground">4 years</strong>, I&apos;ve
                transitioned from building simple landing pages to architecting
                complex, data-heavy web applications. At Pixbit Solutions,
                I&apos;ve had the opportunity to work across industries—from
                real estate and e-commerce to social networking—which has taught
                me how to adapt quickly and choose the right tools for the job.
              </p>
              <p className="text-muted-foreground mt-4 text-[1.02rem] leading-relaxed">
                I&apos;m passionate about{" "}
                <strong className="text-foreground">clean code</strong>,
                intuitive user experiences, and bridging the gap between design
                and engineering. Every project is an opportunity to combine
                technical precision with creative problem-solving.
              </p>

              <div className="mt-10 border-border border-t pt-10">
                <h4 className="text-muted-foreground mb-4 text-xs font-bold tracking-widest uppercase">
                  Beyond the Code
                </h4>
                <div className="flex flex-wrap gap-3">
                  <div className="border-border bg-card flex items-center gap-2.5 rounded-[var(--radius-portfolio-md)] border px-4 py-2.5 transition-colors hover:border-[rgba(0,212,255,0.25)]">
                    <div className="flex size-9 items-center justify-center rounded-full border border-[rgba(0,212,255,0.2)] bg-[linear-gradient(135deg,rgba(0,212,255,0.15),rgba(124,58,237,0.15))] text-[var(--portfolio-cyan)]">
                      <Clapperboard className="size-4" />
                    </div>
                    <span className="text-foreground text-sm">
                      Movie Enthusiast
                    </span>
                  </div>
                  <div className="border-border bg-card flex items-center gap-2.5 rounded-(--radius-portfolio-md) border px-4 py-2.5 transition-colors hover:border-[rgba(0,212,255,0.25)]">
                    <div className="flex size-9 items-center justify-center rounded-full border border-[rgba(0,212,255,0.2)] bg-[linear-gradient(135deg,rgba(0,212,255,0.15),rgba(124,58,237,0.15))] text-(--portfolio-cyan)">
                      <Trophy className="size-4" />
                    </div>
                    <span className="text-foreground text-sm">
                      Football Player
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal className="order-first lg:order-0">
            <div className="relative mx-auto flex h-70 max-w-md items-center justify-center sm:h-80 lg:h-95">
              <motion.div
                className="pointer-events-none absolute top-1/2 left-1/2 size-62.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[rgba(0,212,255,0.12)]"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              {aboutCards.map((card, i) => {
                const Icon = cardIcons[card.icon];
                const positions = [
                  "top-5 left-0 -rotate-6 sm:left-2.5",
                  "top-1/2 left-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 rotate-2",
                  "right-0 bottom-5 rotate-[4deg] sm:right-2.5",
                ];
                return (
                  <motion.div
                    key={card.text}
                    className={`absolute flex items-center gap-4 rounded-(--radius-portfolio-md) border border-border bg-card px-5 py-4 shadow-xl ${positions[i]}`}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i, duration: 0.45 }}
                    whileHover={{
                      scale: 1.03,
                      borderColor: "rgba(0,212,255,0.3)",
                      zIndex: 10,
                    }}
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-gradient-accent text-white">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <span className="block text-xl font-extrabold text-foreground">
                        {card.num}
                      </span>
                      <span className="text-muted-foreground text-xs leading-snug">
                        {card.text}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
