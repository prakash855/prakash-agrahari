import { AnimatedStat } from "@/components/animated-stat";
import { Reveal } from "@/components/motion-provider";
import { stats } from "@/lib/content";

export function StatsStrip() {
  return (
    <Reveal delay={0.15}>
      <section aria-label="Key stats" className="section-shell grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <div className="display-title text-4xl font-semibold text-[var(--foreground)] sm:text-5xl">
              <AnimatedStat value={stat.value} suffix={stat.suffix} delay={index * 0.12} />
            </div>
            <p className="mt-3 max-w-[20ch] text-sm leading-6 text-[var(--muted)]">{stat.label}</p>
          </div>
        ))}
      </section>
    </Reveal>
  );
}
