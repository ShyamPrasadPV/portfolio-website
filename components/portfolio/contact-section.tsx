"use client";

import { MotionReveal } from "@/components/portfolio/motion-reveal";
import { GitHubIcon, LinkedInIcon } from "@/components/portfolio/social-icons";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const btnPrimary =
  "inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-accent px-8 font-semibold text-white shadow-[0_4px_20px_rgba(0,212,255,0.25)] transition-opacity hover:opacity-90";
const btnOutline =
  "inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-transparent px-8 font-semibold text-foreground transition-colors hover:border-[var(--portfolio-cyan)] hover:bg-[rgba(0,212,255,0.05)] hover:text-[var(--portfolio-cyan)]";

export function ContactSection() {
  const mailHref = site.email ? `mailto:${site.email}` : "mailto:";

  return (
    <section id="contact" className="scroll-mt-24 bg-card py-24 md:py-28">
      <div className="mx-auto max-w-275 px-6 md:px-8">
        <MotionReveal>
          <motion.div
            className="relative overflow-hidden rounded-(--radius-portfolio-xl) border border-[rgba(0,212,255,0.15)] bg-[linear-gradient(135deg,rgba(0,212,255,0.04),rgba(124,58,237,0.04))] px-8 py-16 text-center md:px-16 md:py-20"
            whileHover={{ scale: 1.005 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div
              className="pointer-events-none absolute top-1/2 left-1/2 h-100 w-150 -translate-x-1/2 -translate-y-1/2"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(0,212,255,0.06), transparent 60%)",
              }}
              aria-hidden
            />
            <div className="relative z-1">
              <span className="mb-4 inline-block rounded-full border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.05)] px-4 py-1.5 font-mono text-[var(--portfolio-cyan)] text-xs font-medium tracking-widest uppercase">
                Let&apos;s Connect
              </span>

              <h2 className="text-foreground mx-auto mt-4 max-w-xl text-3xl font-extrabold leading-tight md:text-4xl">
                Have a project in mind?
                <br />
                Let&apos;s build something great.
              </h2>

              <p className="text-muted-foreground mx-auto mt-6 max-w-lg text-lg leading-relaxed">
                I&apos;m currently open to new opportunities — whether it&apos;s
                a freelance project, a full-time role, or just a conversation
                about front-end engineering.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <motion.a
                  href={mailHref}
                  className={cn(btnPrimary)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="size-4" />
                  Send Me a Message
                </motion.a>

                <motion.a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnOutline}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <LinkedInIcon className="size-4" />
                  LinkedIn
                </motion.a>

                <motion.a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnOutline}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <GitHubIcon className="size-4" />
                  GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        </MotionReveal>
      </div>
    </section>
  );
}
