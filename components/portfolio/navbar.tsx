"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, site } from "@/lib/content";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import logo from "@/assets/images/shyam-dev-logo.png";

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

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  const linkClass = (cta: boolean) =>
    cn(
      "rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground",
      cta &&
        "rounded-full bg-gradient-accent px-4 py-2 font-semibold text-white shadow-[0_4px_20px_rgba(0,212,255,0.25)] hover:opacity-95",
    );

  return (
    <motion.header
      id="site-nav"
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-[padding,background,border] duration-300",
        scrolled
          ? "border-border border-b bg-background/85 py-3 backdrop-blur-xl"
          : "py-5",
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-275 items-center justify-between px-6 md:px-8">
        <Link
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToHash("#hero");
          }}
          className="font-mono text-lg font-bold text-foreground"
        >
          <Image
            src={logo}
            alt={`${site.name} logo`}
            width={128}
            height={32}
            className="inline-block"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClass("cta" in item && item.cta)}
              onClick={(e) => {
                e.preventDefault();
                scrollToHash(item.href);
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-white/5 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </SheetTrigger>

          <SheetContent className="w-[min(100%,320px)] border-border bg-background/97 backdrop-blur-xl">
            <SheetHeader>
              <SheetTitle className="text-foreground font-mono text-left">
                {site.name}
              </SheetTitle>
            </SheetHeader>

            <nav className="mt-8 flex flex-col gap-1 px-2" aria-label="Mobile">
              {navLinks.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  className={cn(
                    "w-full rounded-lg px-4 py-3 text-left text-base font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground",
                    "cta" in item &&
                      item.cta &&
                      "mt-2 rounded-full bg-gradient-accent text-center font-semibold text-white hover:opacity-95",
                  )}
                  onClick={() => {
                    setOpen(false);
                    scrollToHash(item.href);
                  }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
