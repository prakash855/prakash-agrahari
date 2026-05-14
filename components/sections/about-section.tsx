import { Reveal } from "@/components/motion-provider";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { strengths } from "@/lib/content";

export function AboutSection() {
  return (
    <Reveal>
      <section id="about" className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="A frontend engineer who thinks in systems, not just screens."
          description="My work sits at the intersection of product polish and engineering discipline: creating interfaces that feel premium for users while staying scalable for teams."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="rounded-[1.75rem] p-6 sm:p-7">
            <p className="text-lg leading-8 text-[var(--foreground)]">
              Over the last 5+ years, I&apos;ve built responsive, user-friendly web applications with React,
              JavaScript, and TypeScript, then expanded into the MERN stack to deliver complete product
              workflows from UI to backend integration.
            </p>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              I enjoy designing reusable component foundations, shaping frontend architecture, and
              reducing complexity in API-heavy products. That mindset has naturally grown into an
              interest in cloud systems, AWS, and backend scalability so the interfaces I build can
              keep pace with modern product ambition.
            </p>
          </Card>

          <div className="grid gap-4">
            {strengths.map((item, index) => (
              <Reveal key={item.title} delay={0.08 * index}>
                <Card className="rounded-[1.75rem] p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-3 accent-cool">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
