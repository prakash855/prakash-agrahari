import { ProjectsGallery } from "@/components/projects-gallery";
import { Reveal } from "@/components/motion-provider";
import { SectionHeading } from "@/components/section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Projects that highlight both engineering capability and frontend craft."
          description="These case studies are framed around outcome, architecture, and decision-making so recruiters can quickly see depth beyond surface-level UI."
        />
      </Reveal>

      <div className="mt-10">
        <ProjectsGallery />
      </div>
    </section>
  );
}
