import { AboutSection } from "@/components/sections/about-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LearningSection } from "@/components/sections/learning-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { CursorGlow } from "@/components/cursor-glow";
import { ScrollProgress } from "@/components/scroll-progress";
import { SiteHeader } from "@/components/site-header";
import { StatsStrip } from "@/components/stats-strip";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
      <ScrollProgress />
      <CursorGlow />

      <div className="absolute inset-x-0 top-0 -z-10 h-[720px] bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.24),transparent_36%),radial-gradient(circle_at_18%_18%,rgba(251,191,36,0.14),transparent_24%),radial-gradient(circle_at_82%_12%,rgba(129,140,248,0.2),transparent_28%)]" />
      <div className="absolute inset-x-0 top-[26rem] -z-10 h-[900px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_24%),linear-gradient(180deg,transparent,rgba(255,255,255,0.03),transparent)]" />

      <SiteHeader />

      <main className="relative mx-auto flex w-full max-w-7xl flex-col gap-7 px-4 pb-16 sm:px-6 lg:px-8">
        <HeroSection />
        <StatsStrip />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <LearningSection />
        <ContactSection />
      </main>
    </div>
  );
}
