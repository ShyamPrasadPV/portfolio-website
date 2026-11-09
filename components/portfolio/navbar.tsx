"use client";

import { ThemeToggle } from "@/components/portfolio/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/assets/images/shyam-dev-logo.png";
import { navLinks, site } from "@/lib/content";
import { scrollToHash } from "@/lib/scroll";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
  });

  return (
    <motion.header
      id="site-nav"
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-[background,border,backdrop-filter,padding] duration-300",
        scrolled
          ? "border-b border-border/80 bg-background/80 py-3 backdrop-blur-xl"
          : "py-5",
      )}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 md:px-8">
        <Link
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToHash("#hero");
          }}
          className="group flex items-center gap-3"
          aria-label={`${site.name} home`}
        >
          <Image
            src={logo}
            alt=""
            width={44}
            height={44}
            priority
            className="size-10 rounded-md object-cover ring-1 ring-border transition-transform duration-300 group-hover:scale-[1.03] dark:ring-white/10"
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-sm font-semibold tracking-tight text-foreground">
              {site.name}
            </span>
            <span className="mt-1 text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase">
              Software Engineer
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((item) => {
            const isCta = "cta" in item && item.cta;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHash(item.href);
                }}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  isCta
                    ? "ml-2 bg-foreground px-4 text-background hover:opacity-90"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <ThemeToggle className="ml-2" />
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground hover:bg-muted"
              aria-label="Open menu"
            >
              <Menu className="size-4" />
            </SheetTrigger>
            <SheetContent className="w-[min(100%,22rem)] border-border bg-background/98 backdrop-blur-xl">
              <SheetHeader>
                <SheetTitle className="text-left text-foreground">
                  {site.name}
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1 px-2" aria-label="Mobile">
                {navLinks.map((item) => {
                  const isCta = "cta" in item && item.cta;
                  return (
                    <button
                      key={item.href}
                      type="button"
                      className={cn(
                        "rounded-xl px-4 py-3 text-left text-base font-medium transition-colors",
                        isCta
                          ? "mt-3 bg-foreground text-center text-background"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                      onClick={() => {
                        setOpen(false);
                        scrollToHash(item.href);
                      }}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
