"use client";

import { Command } from "cmdk";
import { BriefcaseBusiness, Code2, Mail, Search } from "lucide-react";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { profile } from "@/lib/content";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if ((event.key === "k" && (event.metaKey || event.ctrlKey)) || event.key === "/") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="inline-flex h-10 items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-4 text-sm text-[var(--muted)] transition hover:bg-[color-mix(in_srgb,var(--surface-soft)_74%,white_26%)] hover:text-[var(--foreground)]">
        <Search className="size-4" />
        <span className="hidden sm:inline">Command</span>
        <kbd className="hidden rounded bg-[var(--surface)] px-1.5 py-0.5 text-[10px] text-[var(--muted)] sm:inline">⌘K</kbd>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-24 z-[90] w-[min(92vw,560px)] -translate-x-1/2 overflow-hidden rounded-lg border border-white/12 bg-neutral-950/95 shadow-2xl">
          <Dialog.Title className="sr-only">Command menu</Dialog.Title>
          <Command className="bg-transparent">
            <div className="flex items-center border-b border-white/10 px-4">
              <Search className="mr-3 size-4 text-neutral-500" />
              <Command.Input
                autoFocus
                placeholder="Jump to a section or open a profile..."
                className="h-14 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-neutral-500"
              />
            </div>
            <Command.List className="max-h-80 overflow-auto p-2">
              <Command.Empty className="px-3 py-8 text-center text-sm text-neutral-500">No results found.</Command.Empty>
              <Command.Group heading="Sections" className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-neutral-500">
                {links.map((link) => (
                  <Command.Item
                    key={link.href}
                    onSelect={() => {
                      setOpen(false);
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="cursor-pointer rounded-md px-3 py-3 text-sm text-neutral-200 data-[selected=true]:bg-white/10 data-[selected=true]:text-white"
                  >
                    {link.label}
                  </Command.Item>
                ))}
              </Command.Group>
              <Command.Group heading="Profiles" className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-neutral-500">
                {[
                  { label: "GitHub", href: profile.github, icon: Code2 },
                  { label: "LinkedIn", href: profile.linkedin, icon: BriefcaseBusiness },
                  { label: "Email", href: profile.emailHref, icon: Mail }
                ].map((item) => (
                  <Command.Item
                    key={item.label}
                    onSelect={() => {
                      setOpen(false);
                      window.open(item.href, "_blank", "noopener,noreferrer");
                    }}
                    className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-3 text-sm text-neutral-200 data-[selected=true]:bg-white/10 data-[selected=true]:text-white"
                  >
                    <item.icon className="size-4" />
                    {item.label}
                  </Command.Item>
                ))}
              </Command.Group>
            </Command.List>
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
