import { ArrowUpRight, BriefcaseBusiness, Code2, FileDown, Mail } from "lucide-react";
import { Reveal } from "@/components/motion-provider";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { profile } from "@/lib/content";

const contactItems = [
  {
    label: "LinkedIn",
    href: profile.linkedin,
    value: "Professional profile for recruiters and hiring teams",
    icon: BriefcaseBusiness
  },
  {
    label: "GitHub",
    href: profile.github,
    value: "Code samples, shipped work, and engineering signal",
    icon: Code2
  },
  {
    label: "Email",
    href: profile.emailHref,
    value: profile.email,
    icon: Mail
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="section-shell mb-10">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Open to senior frontend, MERN, and product engineering roles."
          description="Especially interested in ambitious product teams, strong frontend organizations, and international opportunities including Dubai-based roles."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <Card className="rounded-[1.75rem] p-6 sm:p-7">
            <div className="text-sm uppercase tracking-[0.22em] accent-cool-soft">Next conversation</div>
            <p className="mt-4 text-lg leading-8 text-[var(--foreground)]">
              If you&apos;re hiring for a role that needs frontend craftsmanship, architectural clarity,
              and full-stack practicality, I&apos;d love to connect.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href={profile.emailHref} target="_blank" rel="noreferrer">
                  <Mail className="size-4" />
                  Email Prakash
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href={profile.resume} download>
                  <FileDown className="size-4" />
                  Resume Download
                </a>
              </Button>
            </div>
          </Card>
        </Reveal>

        <div className="grid gap-4">
          {contactItems.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.08}>
              <Card className="rounded-[1.75rem] p-5">
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/8 p-3 accent-cool">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-[var(--foreground)]">{item.label}</div>
                      <div className="mt-1 text-sm leading-7 text-[var(--muted)]">{item.value}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="size-4 shrink-0 text-[var(--muted)] transition group-hover:text-[var(--foreground)]" />
                </a>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
