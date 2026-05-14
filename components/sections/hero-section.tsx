import { ArrowRight, Download, Globe2, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { profile } from "@/lib/content";

const spotlightMetrics = [
  "Frontend architecture for scalable products",
  "MERN systems with polished UI depth",
  "Open to Dubai and international roles"
];

export function HeroSection() {
  return (
    <section id="home" className="section-shell isolate pt-10 sm:pt-14">
      <div className="fine-grid absolute inset-0 -z-20 opacity-35" />
      <div className="absolute inset-x-16 top-0 -z-10 h-48 rounded-full bg-[var(--hero-glow)] blur-3xl" />

      <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <Reveal>
          <div>
            <Badge className="border-amber-300/25 bg-amber-300/10 accent-warm">
              <Sparkles className="mr-2 size-3.5" />
              Senior Frontend / MERN Stack Engineer
            </Badge>

            <h1 className="display-title mt-6 max-w-5xl text-5xl font-semibold leading-[0.95] text-[var(--foreground)] sm:text-6xl lg:text-8xl">
              Crafting product-grade interfaces with systems thinking and full-stack depth.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              I&apos;m {profile.name}, a software engineer with 5+ years of experience building scalable,
              user-focused web applications across React, TypeScript, Next.js, Node.js, Express, and
              MongoDB. I focus on modern frontend architecture, resilient product UX, and the kind of
              engineering quality that stands out to top product teams.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="group">
                <a href="#projects">
                  View Featured Projects
                  <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href={profile.resume} download>
                  <Download className="size-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {spotlightMetrics.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm text-[var(--muted)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="h-full">
          <Card className="relative h-full overflow-hidden rounded-[2rem] border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-6 sm:p-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.16),transparent_26%)]" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] accent-cool-soft">Currently focused</p>
                  <h2 className="display-title mt-2 text-2xl font-semibold text-[var(--foreground)]">
                    Product-quality frontend systems
                  </h2>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/6 p-3 accent-cool">
                  <Globe2 className="size-6" />
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    label: "Core stack",
                    value: "React, Next.js, TypeScript, Tailwind, Node.js, MongoDB"
                  },
                  {
                    label: "Engineering angle",
                    value: "Reusable UI systems, API integration, state architecture, responsive performance"
                  },
                  {
                    label: "Next step",
                    value: "Cloud-ready systems, AWS in depth, and backend scalability patterns"
                  }
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-black/10 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{item.label}</div>
                    <div className="mt-2 text-sm leading-7 text-[var(--foreground)]">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
