import { Reveal } from "@/components/motion-provider";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { timeline } from "@/lib/content";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="A career path shaped by frontend depth, then expanded into full-stack product ownership."
          description="The timeline below captures the progression from strong UI execution into more architectural, system-aware engineering work."
        />
      </Reveal>

      <div className="mt-10 space-y-4">
        {timeline.map((item, index) => (
          <Reveal key={`${item.period}-${item.title}`} delay={index * 0.08}>
            <Card className="rounded-[1.75rem] p-6 sm:p-7">
              <div className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-8">
                <div className="text-sm font-medium uppercase tracking-[0.2em] accent-cool-soft">{item.period}</div>
                <div>
                  <h3 className="display-title text-2xl font-semibold text-[var(--foreground)]">{item.title}</h3>
                  <p className="mt-3 max-w-3xl text-base leading-8 text-[var(--muted)]">{item.detail}</p>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
