import { BrainCircuit, CloudCog, Cpu } from "lucide-react";
import { Reveal } from "@/components/motion-provider";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { learning } from "@/lib/content";

const icons = [CloudCog, Cpu, BrainCircuit];

export function LearningSection() {
  return (
    <section className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Learning & Certifications"
          title="Growing toward cloud-native and AI-assisted product engineering."
          description="The portfolio doesn&apos;t stop at current experience. It also signals curiosity, trajectory, and readiness for larger-scale engineering environments."
        />
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {learning.map((item, index) => {
          const Icon = icons[index] ?? Cpu;

          return (
            <Reveal key={item} delay={index * 0.08}>
              <Card className="h-full rounded-[1.75rem] p-6">
                <div className="rounded-2xl border border-white/10 bg-white/8 p-3 accent-warm">
                  <Icon className="size-5" />
                </div>
                <p className="mt-5 text-base leading-8 text-[var(--foreground)]">{item}</p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
