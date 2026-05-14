"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/motion-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/lib/content";
import { cn } from "@/lib/utils";

const filters = ["All", "Full Stack", "Frontend Foundation"] as const;

export function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.type === activeFilter);
  }, [activeFilter]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition",
              activeFilter === filter
                ? "border-cyan-300/35 bg-cyan-300/12 text-[var(--accent-cool)]"
                : "border-white/10 bg-white/[0.03] text-[var(--muted)] hover:text-[var(--foreground)]"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <motion.div layout>
              <Card className="group h-full overflow-hidden rounded-[1.9rem] p-0">
                <div className={cn("h-2 w-full bg-gradient-to-r", project.accent)} />
                <div className="p-6 sm:p-7">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <Badge className="border-white/12 bg-white/8 text-[var(--foreground)]">{project.type}</Badge>
                      <h3 className="display-title mt-4 text-3xl font-semibold text-[var(--foreground)]">
                        {project.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">{project.summary}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button asChild variant="secondary" size="icon">
                        <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}>
                          <Code2 className="size-4" />
                        </a>
                      </Button>
                      <Button asChild variant="secondary" size="icon">
                        <a
                          href={project.live}
                          target={project.live.startsWith("http") ? "_blank" : undefined}
                          rel={project.live.startsWith("http") ? "noreferrer" : undefined}
                          aria-label={`${project.title} live demo`}
                        >
                          <ArrowUpRight className="size-4" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="text-xs uppercase tracking-[0.2em] accent-cool-soft">Challenge</div>
                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.challenge}</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="text-xs uppercase tracking-[0.2em] accent-cool-soft">Solution</div>
                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.solution}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {project.stack.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
