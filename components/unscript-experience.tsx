"use client";

import { useState } from "react";

type FeaturedWorkCategory = {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  mockupLines: string[];
};

const featuredWork: FeaturedWorkCategory[] = [
  {
    num: "01",
    title: "Websites",
    subtitle: "Web Design & Development",
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
    <section id="unscript" className="unscript-section py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* ── Section Label ── */}
        <p className="section-label mb-3">03 — Founder Experience</p>

        {/* ── Masthead ── */}
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
            className="unscript-visit-link group shrink-0"
          >
            Visit Unscript Labs
            <span className="unscript-visit-arrow group-hover:translate-x-1 transition-transform"> →</span>
          </a>
        </div>

        {/* ── Company Identity Block ── */}
        <div className="unscript-identity-block mb-14">
          {/* Logo + Company Name Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="unscript-logo-mark" aria-label="Unscript Labs">
              <span className="font-display text-lg font-black tracking-tight text-[--accent]">UL</span>
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-[22px] sm:text-[26px] font-black tracking-tight text-[--foreground]"
                  style={{ fontFamily: "'Syne', sans-serif" }}>
                  Unscript Labs
                </h3>
                <span className="unscript-founder-badge">Co-Founder</span>
              </div>
              <p className="font-mono text-[12px] text-[--accent] font-semibold mt-0.5 tracking-wide">
                AI-Focused Technology Studio
              </p>
            </div>
          </div>

          {/* Role + Duration Bar */}
          <div className="unscript-role-bar">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[--subtle] mb-0.5">Role</p>
              <p className="text-[15px] font-bold text-[--foreground]">Co-Founder & AI Engineer</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-[--border-strong]" />
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[--subtle] mb-0.5">Type</p>
              <p className="text-[15px] font-bold text-[--foreground]">Founder / Professional</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-[--border-strong]" />
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[--subtle] mb-0.5">Website</p>
              <a
                href="https://unscriptlabs.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[15px] font-bold text-[--accent] hover:underline"
              >
                unscriptlabs.com
              </a>
            </div>
          </div>
        </div>

        {/* ── What I Do — Responsibilities Narrative ── */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-10 mb-20">
          <div>
            <p className="section-label mb-4">Overview</p>
            <p className="text-[16px] leading-[1.85] text-[--muted-foreground] max-w-[60ch] mb-6">
              I co-founded Unscript Labs as an AI-focused technology company, building intelligent
              products and digital solutions for real business problems. My work spans the full
              product lifecycle — from design and architecture through engineering, AI integration,
              and production deployment.
            </p>
            <p className="text-[16px] leading-[1.85] text-[--muted-foreground] max-w-[60ch]">
              I work across web development, LLM-powered systems, RAG pipelines, multi-agent
              workflows, computer vision, NLP, and automation — turning business requirements into
              functional, scalable AI products that deliver measurable outcomes.
            </p>
          </div>

          {/* ── Contributions List ── */}
          <div className="space-y-3">
            <p className="section-label mb-4">Responsibilities</p>
            {[
              "Co-founded and help lead Unscript Labs as an AI technology company",
              "Design and develop modern websites and full-stack web applications",
              "Build AI chatbots using LLMs, RAG, knowledge bases, and custom workflows",
              "Develop AI-powered software solving specific business and operational problems",
              "Work across Generative AI, LLM APIs, Agents, Automation, NLP, Computer Vision",
              "Build scalable backend systems and APIs using FastAPI and modern tooling",
              "Integrate AI models and automation into practical product architectures",
              "Own product design, technical implementation, and production deployment",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-[13px] text-[--muted-foreground]">
                <span className="shrink-0 font-mono text-[10px] font-bold text-[--accent] pt-0.5">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Featured Work Section ── */}
        <div className="mb-20">
          <p className="section-label mb-2">Featured Work</p>
          <h3
            className="text-[clamp(1.4rem,3vw,2.2rem)] font-bold text-[--foreground] mb-10"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            What We Build
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredWork.map((work) => (
              <div
                key={work.num}
                className="unscript-work-card"
                onMouseEnter={() => setHoveredWork(work.num)}
                onMouseLeave={() => setHoveredWork(null)}
              >
                {/* Card Header */}
                <div className="unscript-work-card-header">
                  <span className="font-mono text-[11px] font-bold text-[--accent] tracking-widest">
                    {work.num} —
                  </span>
                  <h4 className="text-[17px] font-black text-[--foreground] mt-1"
                    style={{ fontFamily: "'Syne', sans-serif" }}>
                    {work.title}
                  </h4>
                  <p className="font-mono text-[11px] text-[--muted-foreground] mt-0.5">
                    {work.subtitle}
                  </p>
                </div>

                {/* Code Mockup */}
                <div className="unscript-code-mockup">
                  <div className="unscript-code-dots">
                    <span /><span /><span />
                  </div>
                  <pre className="text-[11px] leading-[1.7] text-emerald-400 font-mono">
                    {work.mockupLines.map((line, i) => (
                      <div
                        key={i}
                        className={`${
                          line.startsWith("//") ? "text-slate-500" :
                          line.includes("status") ? "text-[--accent]" :
                          "text-slate-300"
                        } ${hoveredWork === work.num ? "opacity-100" : "opacity-80"} transition-opacity`}
                      >
                        {line}
                      </div>
                    ))}
                  </pre>
                </div>

                {/* Description */}
                <div className="p-5 pt-4">
                  <p className="text-[13px] leading-relaxed text-[--muted-foreground] mb-4">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {work.tags.map((tag) => (
                      <span key={tag} className="unscript-tag">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Coming Soon Footer */}
                <div className="unscript-work-card-footer">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[--subtle]">
                    Case studies coming soon
                  </span>
                  <span className="font-mono text-[10px] text-[--accent] font-bold">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Closing Founder Quote ── */}
        <div className="unscript-closing-quote">
          <div className="unscript-quote-line" aria-hidden="true" />
          <blockquote className="unscript-quote-text">
            &ldquo;Don&rsquo;t just build what technology can do.{" "}
            <span className="text-[--accent]">Build what people actually need.&rdquo;</span>
          </blockquote>
          <p className="unscript-quote-attr">
            — Ubaith Sherif, Co-Founder · Unscript Labs
          </p>
        </div>

      </div>
    </section>
  );
}
