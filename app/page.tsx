import { AboutSection } from "@/components/portfolio/about-section";
import { BackToTop } from "@/components/portfolio/back-to-top";
import { ContactSection } from "@/components/portfolio/contact-section";
import { CursorGlow } from "@/components/portfolio/cursor-glow";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { Footer } from "@/components/portfolio/footer";
import { HeroSection } from "@/components/portfolio/hero-section";
import { Navbar } from "@/components/portfolio/navbar";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SkillsSection } from "@/components/portfolio/skills-section";

export default function Home() {
  return (
    <>
      <CursorGlow />

      <Navbar />

      <main className="flex flex-1 flex-col">
        <HeroSection />

        <ExperienceSection />

        <ProjectsSection />

        <SkillsSection />

        <AboutSection />

        <ContactSection />
      </main>

      <Footer />

      <BackToTop />
    </>
  );
}
