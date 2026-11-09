"use client";

import { MotionReveal } from "@/components/portfolio/motion-reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { GitHubIcon, LinkedInIcon } from "@/components/portfolio/social-icons";
import { Button } from "@/components/ui/button";
import { contact, site } from "@/lib/content";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check, Mail } from "lucide-react";
import { useState, type ReactNode } from "react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-background/35 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative p-8 md:p-12">
                <div
                  className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full blur-3xl"
                  style={{ background: "var(--hero-glow-a)" }}
                  aria-hidden
                />
                <SectionHeading
                  eyebrow={contact.eyebrow}
                  title={contact.title}
                  description={contact.description}
                />

                <div className="relative mt-10 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
                  >
                    <Mail className="size-4" />
                    Email me
                    <ArrowUpRight className="size-4" />
                  </a>
                  <Button
                    type="button"
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-full border-border bg-background/50 px-6"
                    onClick={copyEmail}
                  >
                    {copied ? (
                      <Check className="size-4 text-emerald-500" />
                    ) : (
                      <Copy className="size-4" />
                    )}
                    {copied ? "Copied" : "Copy email"}
                  </Button>
                </div>

                <p className="relative mt-6 text-sm text-muted-foreground">
                  {contact.formNote}
                </p>
              </div>

              <div className="border-t border-border bg-surface/70 p-8 md:p-12 lg:border-t-0 lg:border-l">
                <p className="font-mono text-[0.68rem] tracking-[0.18em] text-muted-foreground uppercase">
                  Direct channels
                </p>

                <div className="mt-6 space-y-3">
                  <ContactLink
                    href={`mailto:${site.email}`}
                    label="Email"
                    value={site.email}
                    icon={<Mail className="size-4" />}
                  />
                  <ContactLink
                    href={site.linkedin}
                    label="LinkedIn"
                    value="Connect professionally"
                    icon={<LinkedInIcon className="size-4" />}
                    external
                  />
                  <ContactLink
                    href={site.github}
                    label="GitHub"
                    value="View repositories"
                    icon={<GitHubIcon className="size-4" />}
                    external
                  />
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  label,
  value,
  icon,
  external,
}: {
  href: string;
  label: string;
  value: string;
  icon: ReactNode;
  external?: boolean;
}) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-card px-4 py-4 transition-colors hover:border-primary/30 hover:bg-card"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.99 }}
    >
      <span className="flex items-center gap-3">
        <span className="inline-flex size-9 items-center justify-center rounded-full bg-muted text-foreground">
          {icon}
        </span>
        <span>
          <span className="block text-xs tracking-wide text-muted-foreground uppercase">
            {label}
          </span>
          <span className="mt-0.5 block text-sm font-medium text-foreground">
            {value}
          </span>
        </span>
      </span>
      <ArrowUpRight className="size-4 text-muted-foreground" />
    </motion.a>
  );
}
