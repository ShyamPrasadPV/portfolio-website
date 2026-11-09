"use client";

import { StatCounter } from "@/components/portfolio/stat-counter";
import { Button } from "@/components/ui/button";
import { hero, heroStats, site } from "@/lib/content";
import { scrollToHash } from "@/lib/scroll";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Fragment } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-background/35 px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,var(--hero-glow-a),transparent_55%),radial-gradient(ellipse_50%_40%_at_10%_80%,var(--hero-glow-b),transparent_50%)]" />
        <div className="grid-fade absolute inset-0" />
      </div>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={item}
          className="mb-8 inline-flex items-center gap-3"
        >
          <span className="relative flex size-2.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/45" />
            <span className="relative size-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">
            {site.availability}
          </span>
        </motion.div>

        <motion.p
          variants={item}
          className="mb-5 font-mono text-[0.72rem] font-medium tracking-[0.24em] text-primary uppercase"
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display max-w-5xl text-[2.75rem] leading-[1.02] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.6rem]"
        >
          <span className="block">{site.name}</span>
          <span className="mt-3 block max-w-4xl italic text-ink-soft md:mt-4">
            {hero.headline}
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {hero.description}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
          <Button
            size="lg"
            className="h-12 rounded-full bg-foreground px-6 text-background hover:opacity-90"
            onClick={() => scrollToHash(hero.primaryCta.href)}
          >
            {hero.primaryCta.label}
            <ArrowDownRight className="size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-border bg-transparent px-6"
            onClick={() => scrollToHash(hero.secondaryCta.href)}
          >
            {hero.secondaryCta.label}
            <ArrowUpRight className="size-4" />
          </Button>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-14 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-end sm:gap-10"
        >
          {heroStats.map((stat, index) => (
            <Fragment key={stat.label}>
              {index > 0 ? (
                <div
                  className="hidden h-12 w-px shrink-0 bg-border sm:block"
                  aria-hidden
                />
              ) : null}
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </Fragment>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
