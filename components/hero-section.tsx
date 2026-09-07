"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { profile } from "@/lib/profile";

const specialtyTitles = [
  "AI Engineer & Agentic Systems",
  "Multi-Agent Workflow Architect",
  "RAG & Retrieval System Developer",
  "Full-Stack Next.js & FastAPI Builder",
  "Computer Vision & Robotics Enthusiast",
];

export function HeroSection() {
  const [specialtyIndex, setSpecialtyIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState(false);
      setTimeout(() => {
        setSpecialtyIndex((prev) => (prev + 1) % specialtyTitles.length);
        setFadeState(true);
      }, 300);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="hero-mesh hero-grid-pattern relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-5 py-16 sm:px-8 lg:px-12"
    >
      {/* Ambient background glows */}
      <div
        className="hero-glow-orb top-1/4 left-1/6 h-[320px] w-[320px] bg-[--accent]"
        aria-hidden="true"
      />
      <div
        className="hero-glow-orb bottom-1/4 right-1/6 h-[380px] w-[380px] bg-[--accent]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_360px] lg:gap-20">
          
          {/* LEFT COLUMN: Main Hero Content */}
          <div className="order-2 lg:order-1">
            {/* Availability status badge */}
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[--accent]/30 bg-[--accent-light] px-3.5 py-1.5 backdrop-blur-md animate-fade-up">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[--accent] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[--accent]" />
              </span>
              <span className="font-mono text-[11px] font-bold tracking-widest uppercase text-[--accent]">
                Open to AI Engineering Roles
              </span>
            </div>

            {/* Main Shimmer Display Title */}
            <h1 className="text-hero-display animate-text-shimmer animate-fade-up-d1 tracking-tight">
              Ubaith<br />Sherif
            </h1>

            {/* Cycling Dynamic Specialty Subtitle */}
            <div className="mt-6 h-8 flex items-center animate-fade-up-d1">
              <p className="font-mono text-[13px] font-semibold tracking-[0.16em] uppercase text-[--accent] flex items-center">
                <span className="mr-2 text-[--muted-foreground]">Focus:</span>
                <span
                  className={`transition-opacity duration-300 ${
                    fadeState ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {specialtyTitles[specialtyIndex]}
                </span>
                <span className="typewriter-cursor" />
              </p>
            </div>

            {/* Hero Summary */}
            <p className="mt-4 max-w-[54ch] text-[15px] leading-relaxed text-[--muted-foreground] animate-fade-up-d1">
              Studying AI & Data Science in Coimbatore. Building multi-agent workflows, retrieval platforms, and production Next.js applications focused on latency, state, and reliability.
            </p>

            {/* Clean CTA Row */}
            <div className="mt-9 flex flex-wrap items-center gap-3.5 animate-fade-up-d2">
              <Link href="#about" className="btn-primary hover-lift">
                Read Narrative <span className="arrow-shift">→</span>
              </Link>
              <Link href="#projects" className="btn-outline hover-lift">
                View Work <span className="arrow-shift">→</span>
              </Link>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="btn-outline hover-lift"
              >
                GitHub <span className="arrow-shift">↗</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Clean Profile Image Frame */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative w-full max-w-[300px] sm:max-w-[340px] animate-float">
              {/* Glowing Aura Accent Border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[--accent] via-teal-500 to-[--accent-2] opacity-30 blur-lg transition duration-500 group-hover:opacity-60" />

              {/* Profile Image Container */}
              <div className="profile-frame relative z-10 overflow-hidden rounded-xl border border-[--border-strong] bg-[--surface] shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                <div className="relative w-full aspect-[3/4] min-h-[350px] sm:min-h-[420px]">
                  <img
                    src="/profile.png"
                    alt="Ubaith Sherif — AI Engineer & Full-Stack Developer"
                    className="h-full w-full object-cover object-top filter brightness-[1.02] contrast-[1.02]"
                    loading="eager"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src.includes("/profile.png")) {
                        target.src = "/profile.jpg";
                      } else if (target.src.includes("/profile.jpg")) {
                        target.src = "/profile.jpeg";
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[--background]/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-fade-up-d2">
        <Link
          href="#about"
          className="group flex flex-col items-center gap-1 text-[--subtle] hover:text-[--accent] transition-colors"
        >
          <span className="font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
            Scroll
          </span>
          <span className="text-[--accent] text-lg animate-bounce group-hover:translate-y-1 transition-transform">
            ↓
          </span>
        </Link>
      </div>
    </section>
  );
}
