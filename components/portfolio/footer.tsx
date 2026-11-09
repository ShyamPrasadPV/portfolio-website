"use client";

import { GitHubIcon, LinkedInIcon } from "@/components/portfolio/social-icons";
import logo from "@/assets/images/shyam-dev-logo.png";
import { navLinks, site } from "@/lib/content";
import { scrollToHash } from "@/lib/scroll";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const links = navLinks.filter((link) => !("cta" in link && link.cta));

  return (
    <footer className="border-t border-border bg-section/70 px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Link
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToHash("#hero");
              }}
              className="inline-flex items-center gap-3"
            >
              <Image
                src={logo}
                alt=""
                width={40}
                height={40}
                className="size-9 rounded-md object-cover ring-1 ring-border dark:ring-white/10"
              />
              <span>
                <span className="block text-sm font-semibold text-foreground">
                  {site.name}
                </span>
                <span className="mt-1 block text-xs text-muted-foreground">
                  {site.role}
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Building modern web applications, scalable backends, and
              production-ready digital products.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
            <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHash(href);
                  }}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="size-4" />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
                aria-label="GitHub"
              >
                <GitHubIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs tracking-wide uppercase">
            Designed & engineered with intent
          </p>
        </div>
      </div>
    </footer>
  );
}
