"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { profile } from "@/lib/profile";

const navLinks = [
  { label: "About",      href: "/#about" },
  { label: "Work",       href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Stack",      href: "/#skills" },
  { label: "Research",   href: "/#research" },
  { label: "Contact",    href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ["about", "projects", "experience", "skills", "research", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`/#${section}`);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[--border] bg-[--background]/85 backdrop-blur-xl shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
        aria-label="Primary navigation"
      >
        {/* Wordmark */}
        <Link
          href="/#home"
          aria-label="Ubaith Sherif — home"
          className="group flex items-center gap-2.5 transition-transform active:scale-95"
        >
          <span
            className="text-[16px] sm:text-[17px] font-extrabold tracking-tight text-[--foreground] transition-colors group-hover:text-[--accent]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Ubaith Sherif
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-[--accent]/30 bg-[--accent-light] px-2.5 py-0.5 font-mono text-[9px] font-semibold tracking-widest uppercase text-[--accent]">
            <span className="h-1.5 w-1.5 rounded-full bg-[--accent] animate-ping" />
            AI Engineer
          </span>
        </Link>

        {/* Center nav desktop */}
        <div className="hidden items-center gap-1 rounded-full border border-[--border]/60 bg-[--surface]/60 px-4 py-1.5 backdrop-blur-md md:flex shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1 text-[13px] font-medium transition-all rounded-full ${
                  isActive
                    ? "text-[--accent] font-semibold bg-[--accent-light]"
                    : "text-[--muted-foreground] hover:text-[--foreground]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2.5">
          {/* GitHub icon */}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden lg:flex h-9 w-9 items-center justify-center rounded-full border border-[--border-strong] text-[--muted-foreground] transition-all hover:border-[--accent] hover:text-[--accent] hover:bg-[--surface] hover:scale-105 active:scale-95"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>

          {/* LinkedIn icon */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hidden lg:flex h-9 w-9 items-center justify-center rounded-full border border-[--border-strong] text-[--muted-foreground] transition-all hover:border-[--accent] hover:text-[--accent] hover:bg-[--surface] hover:scale-105 active:scale-95"
          >
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          {/* Dark/light theme toggle */}
          <button
            aria-label="Toggle color theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[--border-strong] text-[--muted-foreground] transition-all hover:border-[--accent] hover:text-[--accent] hover:bg-[--surface] hover:scale-105 active:scale-95"
            data-theme-toggle
            type="button"
          >
            {/* Sun */}
            <svg className="dark:hidden" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            {/* Moon */}
            <svg className="hidden dark:block" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
            </svg>
          </button>

          {/* Resume CTA */}
          <a
            href="/Ubaith_Sherif_AI_Engineer_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-primary hidden sm:inline-flex text-[12px] px-4 py-2 hover:scale-105 active:scale-95"
          >
            Resume ↗
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden h-9 w-9 items-center justify-center rounded-full border border-[--border-strong] text-[--foreground] transition-all hover:border-[--accent]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="8" x2="20" y2="8" /><line x1="4" y1="16" x2="20" y2="16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[--border] bg-[--background]/95 backdrop-blur-2xl px-6 py-6 animate-fade-down shadow-xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-[18px] font-bold text-[--foreground] hover:text-[--accent] transition-colors py-1 border-b border-[--border]/40"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 flex items-center justify-between">
              <a
                href="/Ubaith_Sherif_AI_Engineer_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-[13px] px-5 py-2 w-full text-center justify-center"
              >
                Download Resume ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
