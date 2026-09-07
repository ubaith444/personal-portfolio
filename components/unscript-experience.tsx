"use client";

import { useState } from "react";
import { ArrowUpRight, Bot, CheckCircle2, Cpu, Globe, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { GlowCard } from "@/components/glow-card";

type FeaturedWorkCategory = {
  num: string;
  title: string;
  subtitle: string;
  icon: typeof Globe;
  description: string;
  tags: string[];
  mockupLines: string[];
};

const featuredWork: FeaturedWorkCategory[] = [
  {
    num: "01",
    title: "Websites",
    subtitle: "Web Design & Development",
    icon: Globe,
    description:
      "Designing and developing modern, responsive, production-ready websites and digital experiences for businesses, products, and organizations.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
    mockupLines: [
      "// PRODUCTION_WEBSITE",
      "const site = {",
      "  stack: 'Next.js + Tailwind',",
      "  deploy: 'Vercel / CF Workers',",
      "  status: 'LIVE',",
      "};",
    ],
  },
  {
    num: "02",
    title: "AI Chatbots",
    subtitle: "Conversational AI Systems",
    icon: Bot,
    description:
      "Building intelligent conversational AI systems using LLMs, RAG, knowledge bases, APIs, and custom workflows to create context-aware user experiences.",
    tags: ["LangGraph", "RAG", "LangChain", "OpenAI", "Qdrant", "FastAPI"],
    mockupLines: [
      "// CHATBOT_PIPELINE",
      "const bot = {",
      "  retrieval: 'Hybrid RAG',",
      "  memory: 'MemorySaver',",
      "  status: 'DEPLOYED',",
      "};",
    ],
  },
  {
    num: "03",
    title: "AI Software",
    subtitle: "Custom AI-Powered Applications",
    icon: Cpu,
    description:
      "Developing custom AI-powered software and automation solutions that solve specific business and operational problems with precision.",
    tags: ["Python", "FastAPI", "Computer Vision", "Agents", "Automation"],
    mockupLines: [
      "// AI_SOFTWARE_SYSTEM",
      "const product = {",
      "  ai: 'LLM + Vision',",
      "  backend: 'FastAPI',",
      "  status: 'PRODUCTION',",
      "};",
    ],
  },
];

export function UnscriptExperience() {
  const [hoveredWork, setHoveredWork] = useState<string | null>(null);

  return (
    <section id="unscript" className="unscript-section relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* ── Masthead ── */}
        <ScrollReveal variant="fade-up">
          <p className="section-label mb-3">03 — Founder Experience</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <h2 className="text-section-display text-[--foreground] mt-1">
                Work Experience
              </h2>
            </div>
            <a
              href="https://unscriptlabs.com/"
              target="_blank"
              rel="noreferrer"
              className="unscript-visit-link group shrink-0 inline-flex items-center gap-2"
            >
              <span>Visit Unscript Labs</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </ScrollReveal>

        {/* ── Company Identity Block ── */}
        <ScrollReveal variant="fade-up" delay={80}>
          <div className="unscript-identity-block mb-14 relative backdrop-blur-sm transition-all duration-300 hover:border-[--accent]/30">
            {/* Company Name & Status Row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3
                    className="text-[24px] sm:text-[28px] font-black tracking-tight text-[--foreground]"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    Unscript Labs
                  </h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[--accent-light] border border-[--accent]/30">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[--accent] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[--accent]" />
                    </span>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[--accent]">
                      Co-Founder
                    </span>
                  </div>
                </div>
                <p className="font-mono text-[12px] text-[--accent] font-semibold mt-1 tracking-wide flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  AI-Focused Technology Studio
                </p>
              </div>
            </div>

            {/* Role + Duration Bar */}
            <div className="unscript-role-bar">
              <div className="group">
                <p className="font-mono text-[11px] uppercase tracking-widest text-[--subtle] mb-0.5">Role</p>
                <p className="text-[15px] font-bold text-[--foreground] group-hover:text-[--accent] transition-colors">
                  Co-Founder & AI Engineer
                </p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-[--border-strong]" />
              <div className="group">
                <p className="font-mono text-[11px] uppercase tracking-widest text-[--subtle] mb-0.5">Type</p>
                <p className="text-[15px] font-bold text-[--foreground]">Founder / Professional</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-[--border-strong]" />
              <div className="group">
                <p className="font-mono text-[11px] uppercase tracking-widest text-[--subtle] mb-0.5">Website</p>
                <a
                  href="https://unscriptlabs.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[15px] font-bold text-[--accent] hover:text-[--accent-hover] group/link transition-colors"
                >
                  <span>unscriptlabs.com</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Overview + Responsibilities ── */}
        <ScrollReveal variant="fade-up" delay={120}>
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 mb-20">
            <div className="flex flex-col justify-between">
              <div>
                <p className="section-label mb-3">01 / Overview</p>
                <p className="text-[15.5px] leading-[1.8] text-[--muted-foreground] max-w-[56ch]">
                  Co-founded Unscript Labs to build AI-powered products and digital solutions for real
                  business problems — spanning web development, LLMs, RAG pipelines, multi-agent
                  workflows, computer vision, and automation.
                </p>
              </div>

              {/* Ownership Callout */}
              <div className="mt-6 border-l-2 border-[--accent] bg-[--surface]/70 backdrop-blur-sm p-4 rounded-r-xl border-y border-r border-[--border]">
                <p className="font-mono text-[11px] uppercase tracking-wider text-[--accent] font-semibold mb-1">
                  Full Lifecycle Ownership
                </p>
                <p className="text-[13px] text-[--muted-foreground] leading-relaxed">
                  Leading conceptual design, scalable architecture, AI orchestration, and production deployment across client and internal products.
                </p>
              </div>
            </div>

            {/* ── Responsibilities ── */}
            <div>
              <p className="section-label mb-3">02 / What I Do</p>
              <div className="space-y-2.5">
                {[
                  "Design & develop websites and full-stack web apps",
                  "Build AI chatbots with LLMs, RAG, and custom workflows",
                  "Develop AI-powered software and automation solutions",
                  "Build scalable backends and APIs with FastAPI",
                  "Own architecture, implementation, and deployment",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-center justify-between p-3 rounded-xl border border-[--border] bg-[--surface]/50 hover:bg-[--surface] hover:border-[--accent]/40 transition-all duration-200 hover:translate-x-1 cursor-default"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="flex items-center justify-center w-6 h-6 rounded-md bg-[--accent-light] text-[--accent] font-mono text-[10.5px] font-bold group-hover:bg-[--accent] group-hover:text-white transition-colors shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[13.5px] font-medium text-[--foreground]/90 group-hover:text-[--foreground] truncate">
                        {item}
                      </span>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-[--subtle] group-hover:text-[--accent] transition-colors shrink-0 ml-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Featured Work Section ── */}
        <div className="mb-20">
          <ScrollReveal variant="fade-up" delay={140}>
            <div className="mb-10">
              <p className="section-label mb-2">Featured Work</p>
              <h3
                className="text-[clamp(1.4rem,3vw,2.2rem)] font-bold text-[--foreground]"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                What We Build
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {featuredWork.map((work, idx) => {
              const IconComponent = work.icon;
              return (
                <ScrollReveal
                  key={work.num}
                  variant="fade-up"
                  delay={100 + idx * 80}
                  className="h-full"
                >
                  <GlowCard className="h-full rounded-[18px]">
                    <div
                      className="unscript-work-card group h-full flex flex-col justify-between"
                      onMouseEnter={() => setHoveredWork(work.num)}
                      onMouseLeave={() => setHoveredWork(null)}
                    >
                      {/* Card Top Section */}
                      <div>
                        {/* Card Header */}
                        <div className="unscript-work-card-header flex items-center justify-between">
                          <div>
                            <span className="font-mono text-[11px] font-bold text-[--accent] tracking-widest">
                              {work.num} —
                            </span>
                            <h4
                              className="text-[18px] font-black text-[--foreground] mt-0.5 group-hover:text-[--accent] transition-colors"
                              style={{ fontFamily: "'Syne', sans-serif" }}
                            >
                              {work.title}
                            </h4>
                            <p className="font-mono text-[11px] text-[--muted-foreground] mt-0.5">
                              {work.subtitle}
                            </p>
                          </div>
                          <div className="w-9 h-9 rounded-xl bg-[--accent-light] border border-[--accent]/20 flex items-center justify-center text-[--accent] transition-all duration-300 group-hover:scale-110 group-hover:bg-[--accent] group-hover:text-white shrink-0">
                            <IconComponent className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Code Mockup */}
                        <div className="unscript-code-mockup relative">
                          <div className="unscript-code-dots">
                            <span /><span /><span />
                          </div>
                          <pre className="text-[11px] leading-[1.7] text-emerald-400 font-mono">
                            {work.mockupLines.map((line, i) => (
                              <div
                                key={i}
                                className={`${
                                  line.startsWith("//")
                                    ? "text-slate-500"
                                    : line.includes("status")
                                    ? "text-[--accent] font-semibold"
                                    : "text-slate-300"
                                } ${hoveredWork === work.num ? "opacity-100" : "opacity-80"} transition-opacity`}
                              >
                                {line}
                              </div>
                            ))}
                            {/* Blinking terminal cursor */}
                            <span className="inline-block w-1.5 h-3 bg-emerald-400 animate-pulse ml-0.5 align-middle" />
                          </pre>
                        </div>

                        {/* Description */}
                        <div className="p-5 pt-4">
                          <p className="text-[13px] leading-relaxed text-[--muted-foreground] mb-4">
                            {work.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {work.tags.map((tag) => (
                              <span
                                key={tag}
                                className="unscript-tag transition-colors hover:border-[--accent]/50 hover:text-[--accent]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Coming Soon Footer */}
                      <div className="unscript-work-card-footer mt-auto">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[--subtle] group-hover:text-[--muted-foreground] transition-colors">
                          Case studies coming soon
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[--accent] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </GlowCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* ── Closing Founder Quote ── */}
        <ScrollReveal variant="scale-up" delay={160}>
          <div className="unscript-closing-quote relative rounded-2xl border border-[--border] bg-[--surface]/40 backdrop-blur-sm p-8 md:p-12 hover:border-[--accent]/30 transition-colors">
            <div className="unscript-quote-line" aria-hidden="true" />
            <blockquote className="unscript-quote-text-sm">
              &ldquo;Don&rsquo;t just build what technology can do.{" "}
              <span className="text-[--accent]">Build what people actually need.&rdquo;</span>
            </blockquote>
            <p className="unscript-quote-attr mt-3">
              — Ubaith Sherif, Co-Founder · Unscript Labs
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
