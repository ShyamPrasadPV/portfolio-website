"use client";

import { site } from "@/lib/content";
import { motion } from "framer-motion";
import Link from "next/link";

const footerLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
] as const;

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

export function Footer() {
  return (
    <footer className="border-border bg-background border-t py-10">
      <div className="mx-auto flex max-w-275 flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-8">
        <Link
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToHash("#hero");
          }}
          className="font-mono text-lg font-bold text-foreground"
        >
          <span className="text-gradient">&lt;</span>
          Dev
          <span className="text-gradient">/&gt;</span>
        </Link>

        <p className="text-muted-foreground order-3 text-center text-sm md:order-0">
          Built with passion — {site.name} © {new Date().getFullYear()}
        </p>

        <nav className="flex gap-6">
          {footerLinks.map(({ href, label }) => (
            <motion.div key={href} whileHover={{ y: -1 }}>
              <Link
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHash(href);
                }}
                className="text-muted-foreground text-sm transition-colors hover:text-(--portfolio-cyan)"
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </footer>
  );
}
