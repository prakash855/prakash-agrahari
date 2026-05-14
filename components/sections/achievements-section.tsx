import { Reveal } from "@/components/motion-provider";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { achievements } from "@/lib/content";

export function AchievementsSection() {
  return (
    <section className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Achievements"
          title="Signals of ownership, independence, and product-facing engineering maturity."
          description="This section is intentionally recruiter-friendly: quick to scan, but still grounded in real strengths and tangible outcomes."
        />
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {achievements.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <Card className="h-full rounded-[1.75rem] p-6">
              <div className="rounded-2xl border border-white/10 bg-white/8 p-3 accent-cool">
                <item.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
