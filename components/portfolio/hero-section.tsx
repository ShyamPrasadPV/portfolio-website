"use client";

import { Button } from "@/components/ui/button";
import { StatCounter } from "@/components/portfolio/stat-counter";
import { heroStats, site } from "@/lib/content";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Fragment } from "react";

import Lanyard from "../ui/lanyard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function scrollToHash(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  const nav = document.getElementById("site-nav");
  const offset = nav?.offsetHeight ?? 72;
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-20 md:px-8 md:pt-32 md:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          }}
        />
        <motion.div
          className="absolute -top-24 -right-24 h-125 w-125 rounded-full opacity-50 blur-[80px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,255,0.15), transparent 60%)",
          }}
          animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 h-100 w-100 rounded-full opacity-50 blur-[80px]"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.15), transparent 60%)",
          }}
          animate={{ y: [0, 24, 0], scale: [1, 1.04, 1] }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="absolute -top-24 w-3/4 right-0 z-30 max-lg:hidden">
        <Lanyard />
      </div>

      <motion.div
        className="relative z-20 mx-auto w-full max-w-275"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={item}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[rgba(0,212,255,0.25)] bg-[rgba(0,212,255,0.06)] px-4 py-2 text-sm font-medium text-[var(--portfolio-cyan)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg---portfolio-cyan) opacity-60" />

            <span className="relative inline-flex h-2 w-2 rounded-full bg-(--portfolio-cyan) shadow-[0_0_8px_var(--portfolio-cyan)]" />
          </span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          variants={item}
          className="mb-6 max-w-4xl text-4xl font-black leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {site.name}
          <br />
          <span className="text-gradient">
            crafting scalable,
            <br />
            interactive web experiences.
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mb-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          With{" "}
          <strong className="font-semibold text-foreground">
            4 years of experience
          </strong>{" "}
          specializing in React, Next.js, and modern UI architectures. I build
          performant interfaces that bridge the gap between complex backend
          systems and seamless user experiences.
        </motion.p>

        <motion.div variants={item} className="mb-14 flex flex-wrap gap-4">
          <Button
            className="h-12 rounded-full border-0 bg-gradient-accent px-7 font-semibold text-white shadow-[0_4px_20px_rgba(0,212,255,0.25)] hover:opacity-90"
            onClick={() => scrollToHash("#projects")}
          >
            View My Work
            <ArrowRight className="size-4" />
          </Button>
          <Button
            variant="outline"
            className="h-12 rounded-full border-border bg-white/5 px-7 font-semibold backdrop-blur-md hover:bg-white/10"
            onClick={() => scrollToHash("#contact")}
          >
            Get In Touch
          </Button>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-6"
        >
          {heroStats.map((s, i) => (
            <Fragment key={s.label}>
              {i > 0 ? (
                <div
                  className="hidden h-10 w-px shrink-0 bg-border sm:block"
                  aria-hidden
                />
              ) : null}
              <StatCounter
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                className="text-center sm:text-left"
              />
            </Fragment>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground text-xs uppercase tracking-widest"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <motion.div
          className="h-12 w-px overflow-hidden rounded-full bg-linear-to-b from-(--portfolio-cyan) to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{
            duration: 2.2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
          style={{ transformOrigin: "top" }}
        />
        Scroll
      </motion.div>
    </section>
  );
}
