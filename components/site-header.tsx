import { CommandMenu } from "@/components/command-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/lib/content";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
      <div className="container-shell flex items-center justify-between px-4 py-3 sm:px-5">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] text-sm font-semibold accent-cool">
            PA
          </div>
          <div>
            <div className="text-sm font-semibold text-[var(--foreground)]">{profile.name}</div>
            <div className="text-xs text-[var(--muted)]">{profile.role}</div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[var(--foreground)]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CommandMenu />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
