import Link from "next/link";
import { profile } from "@/lib/profile";

const navSections = [
  {
    label: "Navigation",
    links: [
      { label: "About",       href: "/#about" },
      { label: "Projects",    href: "/#projects" },
      { label: "Experience",  href: "/#experience" },
      { label: "Stack",       href: "/#skills" },
      { label: "Research",    href: "/#research" },
      { label: "FAQ",         href: "/#faq" },
      { label: "Contact",     href: "/#contact" },
    ],
  },
  {
    label: "Legal",
    links: [
      { label: "Privacy Policy",   href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[--border] bg-[--surface] pt-14 pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <p className="text-[18px] font-bold tracking-tight text-[--foreground]" style={{ fontFamily: "'Syne', sans-serif" }}>
              Ubaith Sherif
            </p>
            <p className="mt-1 font-mono text-[11px] text-[--accent]">
              AI Engineer · Full-Stack Developer
            </p>
            <p className="mt-3 text-[13px] text-[--muted-foreground] max-w-[32ch] leading-relaxed">
              Building AI-native systems, retrieval pipelines, and production software.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {[
                { label: "GitHub",   href: profile.github },
                { label: "LinkedIn", href: profile.linkedin },
                { label: "Email",    href: `mailto:${profile.email}` },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="font-mono text-[11px] font-medium text-[--muted-foreground] transition-colors hover:text-[--accent]"
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navSections.map((section) => (
            <div key={section.label}>
              <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-widest text-[--accent]">
                {section.label}
              </p>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-[--muted-foreground] transition-colors hover:text-[--foreground]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[--border] pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] text-[--subtle]">
            © 2026 Ubaith Sherif · Built with Next.js &amp; TypeScript
          </p>
          <p className="font-mono text-[11px] text-[--subtle]">
            Coimbatore, India
          </p>
        </div>
      </div>
    </footer>
  );
}
