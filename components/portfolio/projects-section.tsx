"use client";

import { MotionReveal } from "@/components/portfolio/motion-reveal";
import { ProjectCard } from "@/components/portfolio/project-card";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { projects } from "@/lib/content";

export function ProjectsSection() {
  const featured = projects.filter((project) => project.featured);
  const supporting = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="scroll-mt-24 bg-section/70 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <MotionReveal className="mb-14 md:mb-16">
          <SectionHeading
            eyebrow="Selected work"
            title="Products where interface, data, and systems meet."
            description="A focused selection of client platforms spanning discovery, realtime collaboration, commerce, and content-driven marketing."
          />
        </MotionReveal>

        <div className="space-y-8">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              layout="featured"
            />
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {supporting.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index + featured.length}
              layout="compact"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
