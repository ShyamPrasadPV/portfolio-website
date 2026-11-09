"use client";

import { ProjectPreview } from "@/components/portfolio/project-preview";
import { RichText } from "@/lib/rich-text";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/portfolio/social-icons";

export type Project = {
  number: string;
  role: string;
  title: string;
  summary: string;
  challenge: string;
  contributions: readonly string[];
  stack: readonly string[];
  accent: "ocean" | "violet" | "amber" | "forest";
  featured: boolean;
  liveUrl?: string;
  sourceUrl?: string;
};

export function ProjectCard({
  project,
  index,
  layout = "stack",
}: {
  project: Project;
  index: number;
  layout?: "featured" | "stack" | "compact";
}) {
  const reverse = layout === "featured" && index % 2 === 1;

  const isFeatured = layout === "featured";
  const isCompact = layout === "compact";

  return (
    <motion.article
      className={cn(
        "group overflow-hidden rounded-[1.5rem] border border-border bg-card",
        isFeatured && "lg:grid lg:grid-cols-2 lg:items-stretch",
        reverse && "lg:[&>*:first-child]:order-2",
      )}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px", amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <ProjectPreview
        accent={project.accent}
        number={project.number}
        title={project.title}
        fill={isFeatured}
        className={cn(
          "rounded-none",
          isFeatured && "aspect-[16/10] min-h-[16rem] lg:aspect-auto lg:min-h-full",
          isCompact && "aspect-[16/9]",
          !isFeatured && !isCompact && "aspect-[16/10]",
        )}
      />

      <div
        className={cn(
          "flex min-w-0 flex-col justify-center p-6 md:p-8",
          isCompact && "p-5 md:p-6",
        )}
      >
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="font-mono text-[0.68rem] tracking-[0.18em] text-primary uppercase">
            {project.number}
          </span>
          <span className="text-border">/</span>
          <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {project.role}
          </span>
        </div>

        <h3
          className={cn(
            "font-semibold tracking-tight text-foreground",
            layout === "featured"
              ? "text-2xl md:text-3xl"
              : "text-xl md:text-2xl",
          )}
        >
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
          {project.summary}
        </p>

        {layout !== "compact" ? (
          <>
            <p className="mt-5 text-xs font-semibold tracking-[0.14em] text-foreground uppercase">
              Contribution
            </p>
            <ul className="mt-3 space-y-2">
              {project.contributions.slice(0, layout === "featured" ? 4 : 3).map((item) => (
                <li
                  key={item.slice(0, 36)}
                  className="relative pl-4 text-sm leading-relaxed text-ink-soft before:absolute before:left-0 before:top-[0.55rem] before:size-1 before:rounded-full before:bg-primary"
                >
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            <span className="font-medium text-foreground">Challenge: </span>
            {project.challenge}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[0.68rem] text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.liveUrl || project.sourceUrl) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Live project
                <ExternalLink className="size-3.5" />
              </a>
            ) : null}
            {project.sourceUrl ? (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Source
                <GitHubIcon className="size-3.5" />
              </a>
            ) : null}
          </div>
        )}

        {layout === "featured" ? (
          <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors group-hover:text-primary">
            Case study highlights
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
