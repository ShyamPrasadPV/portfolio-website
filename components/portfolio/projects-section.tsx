"use client";

import { MotionReveal } from "@/components/portfolio/motion-reveal";
import { ProjectCard } from "@/components/portfolio/project-card";
import { projects } from "@/lib/content";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 bg-background py-24 md:py-28">
      <div className="mx-auto max-w-[1100px] px-6 md:px-8">
        <MotionReveal className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.05)] px-4 py-1.5 font-mono text-[var(--portfolio-cyan)] text-xs font-medium tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="text-foreground mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl text-lg">
            A selection of impactful projects I&apos;ve led and contributed to.
          </p>
        </MotionReveal>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
