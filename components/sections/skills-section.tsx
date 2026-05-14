import { Reveal } from "@/components/motion-provider";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { skillGroups } from "@/lib/content";

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="A balanced stack for premium frontend craft and dependable full-stack delivery."
          description="The strongest value I bring is combining UX sensitivity with architecture thinking, so the experience looks polished and the codebase stays resilient."
        />
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.06}>
            <Card className="h-full rounded-[1.75rem] p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/6 p-3 accent-cool">
                  <group.icon className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{group.title}</h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
