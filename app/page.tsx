import type { Metadata } from "next";
import Link from "next/link";
import { CertOrgLogo } from "@/components/cert-org-logo";
import { ContactForm } from "@/components/contact-form";
import { FaqAccordion } from "@/components/faq-accordion";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { JsonLd } from "@/components/json-ld";
import { MarqueeRow } from "@/components/marquee-row";
import { TechIcon } from "@/components/tech-icon";
import { UnscriptExperience } from "@/components/unscript-experience";
import { certifications } from "@/lib/certifications";
import { education } from "@/lib/education";
import { internships } from "@/lib/experience";
import { faqs } from "@/lib/faq";
import { profile } from "@/lib/profile";
import { projects } from "@/lib/projects";
import { verifiedArticles } from "@/lib/research-notes";
import { siteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Ubaith Sherif — AI Engineer & Full-Stack Developer",
  description:
    "Ubaith Sherif is an AI Engineer building LLM applications, multi-agent workflows, RAG systems, FastAPI microservices, and production Next.js applications.",
  alternates: { canonical: siteUrl("/") },
  openGraph: {
    title: "Ubaith Sherif — AI Engineer & Full-Stack Developer",
    description: "AI Engineering work: agents, RAG, LangGraph orchestration, computer vision, FastAPI, and full-stack development.",
    url: siteUrl("/"),
    type: "profile",
  },
};

const stackCategories = [
  { label: "AI / ML & Computer Vision",    items: ["Python", "PyTorch", "TensorFlow", "OpenCV", "scikit-learn"] },
  { label: "Generative AI & Agents",       items: ["LangGraph", "LangChain", "RAG", "MCP", "Ragas", "Qdrant", "OpenAI", "Google Gemini"] },
  { label: "Backend & Distributed",        items: ["FastAPI", "Node.js", "PostgreSQL", "MongoDB", "Redis", "Docker"] },
  { label: "Frontend & Web",               items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"] },
  { label: "Cloud & Infrastructure",       items: ["Docker", "GitHub", "Vercel", "AWS", "Supabase"] },
];

const engineeringProjects = projects.filter((p) => p.slug !== "ai-teacher-robot");
const featuredProject = engineeringProjects.find((p) => p.featured) ?? engineeringProjects[0];
const otherProjects = engineeringProjects.filter((p) => p.slug !== featuredProject.slug);

const certs2026 = certifications.filter((c) => c.issueDate.includes("2026"));
const certs2025 = certifications.filter((c) => c.issueDate.includes("2025"));

export default function HomePage() {
  const teacherRobot = education.combinedTeacherRobotProject;

  return (
    <main id="main-content">
      <JsonLd />

      {/* ══════════════════════════════════════════════════════
          §01 HERO — Ultra-premium animated interactive Hero
      ══════════════════════════════════════════════════════ */}
      <HeroSection />


      {/* ══════════════════════════════════════════════════════
          §01b ABOUT — Dark inverted band
          Style: full-width dark background, oversized quote,
                 two-column facts grid
      ══════════════════════════════════════════════════════ */}
      <section id="about" className="about-band py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          {/* Oversize label */}
          <p className="font-mono text-[10px] font-semibold tracking-[0.22em] uppercase about-accent mb-6">
            01b — About
          </p>

          {/* Pull-quote hero text */}
          <h2
            className="text-[clamp(1.75rem,4vw,3.25rem)] font-bold leading-[1.15] max-w-[22ch]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            I deconstruct systems to understand how they{" "}
            <span className="about-accent">actually</span> work, then rebuild
            them into things that are useful.
          </h2>

          {/* 2×2 fact grid */}
          <div className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-2xl overflow-hidden">
            {[
              { n: "01", title: "How I think",          body: "Data flow over isolated functions. Edge cases over happy paths. Failures are just lessons I haven't documented yet." },
              { n: "02", title: "What I build",         body: "End-to-end AI systems — multi-agent workflows, retrieval pipelines, computer vision, and full-stack products around them." },
              { n: "03", title: "Where I'm heading",    body: "From someone who solves isolated problems to an engineer who can architect, implement, and deploy complete AI products." },
              { n: "04", title: "Outside the terminal", body: "Football, competitive gaming, and visual design. Same instinct every time: read the pattern, make the call." },
            ].map((row) => (
              <div
                key={row.n}
                className="flex flex-col gap-3 p-6 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
              >
                <span className="font-mono text-[10px] font-bold about-accent">{row.n}</span>
                <p className="text-[15px] font-semibold" style={{ fontFamily: "'Syne', sans-serif" }}>{row.title}</p>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{row.body}</p>
              </div>
            ))}
          </div>

          {/* Footer quote */}
          <p className="mt-10 font-mono text-[11px] font-semibold tracking-wide about-accent">
            &ldquo;Engineering at the intersection of AI models, clean architecture, and real-world products.&rdquo;
          </p>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          §02 PROJECTS — Dark hero banner + ghost-num hover cards
      ══════════════════════════════════════════════════════ */}
      <section id="projects" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-12">
            <div>
              <span className="section-label">02 — Engineering Works</span>
              <h2 className="text-section-display text-[--foreground] mt-1">Selected Projects</h2>
            </div>
            <a href={profile.github} target="_blank" rel="noreferrer"
              className="shrink-0 font-mono text-[12px] font-semibold text-[--muted-foreground] hover:text-[--accent] transition-colors">
              All repositories <span className="arrow-shift">↗</span>
            </a>
          </div>

          {/* Featured — dark cinematic banner */}
          {featuredProject && (
            <div className="project-featured-banner mb-10">
              <div className="relative z-10">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="pfb-label font-mono text-[11px] font-bold tracking-widest uppercase mb-1">
                      ★ Featured · {featuredProject.industry} · {featuredProject.status}
                    </p>
                    <h3
                      className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold leading-tight"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {featuredProject.title}
                    </h3>
                    <p className="mt-1.5 text-[14px] pfb-muted">{featuredProject.subtitle}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3 mt-2 sm:mt-0">
                    {featuredProject.github && (
                      <a href={featuredProject.github} target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/20 font-mono text-[11px] font-semibold text-white/80 hover:bg-white/10 transition-colors">
                        GitHub ↗
                      </a>
                    )}
                    <Link href={`/projects/${featuredProject.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[--accent] font-mono text-[11px] font-bold text-white hover:opacity-90 transition-opacity">
                      Technical Spec →
                    </Link>
                  </div>
                </div>

                <p className="mt-6 text-[14px] leading-relaxed pfb-muted max-w-[66ch]">{featuredProject.description}</p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 border-t pfb-border pt-6">
                  <div>
                    <p className="pfb-label font-mono text-[10px] uppercase tracking-widest mb-3">Architecture</p>
                    <ul className="space-y-2">
                      {featuredProject.architecture.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[13px] pfb-muted">
                          <span className="shrink-0 font-mono text-[10px] font-bold pfb-label pt-0.5">{String(i+1).padStart(2,"0")}.</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="pfb-label font-mono text-[10px] uppercase tracking-widest mb-3">Capabilities</p>
                    <ul className="space-y-2">
                      {featuredProject.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[13px] pfb-muted">
                          <span className="shrink-0 pfb-label font-bold">✓</span>{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 border-t pfb-border pt-4 flex flex-wrap gap-1.5">
                  {featuredProject.tags.map((tag) => (
                    <span key={tag} className="pfb-chip"><TechIcon name={tag} size={11} /><span>{tag}</span></span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Other projects — ghost-num hover cards grid */}
          <p className="section-label mb-6">Other Systems</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, i) => (
              <div key={project.slug} className="project-card">
                <div className="project-card-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="project-card-body">
                  <p className="font-mono text-[10px] uppercase tracking-wide text-[--muted-foreground] mb-1">{project.eyebrow}</p>
                  <h3 className="text-[17px] font-bold text-[--foreground] leading-snug" style={{ fontFamily: "'Syne', sans-serif" }}>
                    <Link href={`/projects/${project.slug}`} className="hover:text-[--accent] transition-colors">{project.title}</Link>
                  </h3>
                  <p className="mt-2 text-[13px] text-[--muted-foreground] leading-relaxed">{project.subtitle}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 5).map((tag) => <span key={tag} className="tech-chip"><TechIcon name={tag} size={11} /><span>{tag}</span></span>)}
                  </div>
                </div>
                <div className="project-card-footer">
                  <span className="font-mono text-[10px] font-semibold uppercase text-[--muted-foreground]">{project.status}</span>
                  <div className="flex items-center gap-3">
                    {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="font-mono text-[11px] font-semibold text-[--muted-foreground] hover:text-[--accent] transition-colors">GitHub ↗</a>}
                    <Link href={`/projects/${project.slug}`} className="font-mono text-[11px] font-semibold text-[--accent]">Spec →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          §03 EXPERIENCE — Unscript Labs Founder + Internships
      ══════════════════════════════════════════════════════ */}
      <UnscriptExperience />

      {/* Internship sub-section */}
      <section id="internships" className="py-12 md:py-16 bg-[--surface] border-t border-[--border]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <span className="section-label mb-2 block">Engineering Experience</span>
          <h3 className="text-[clamp(1.2rem,2.5vw,1.7rem)] font-bold text-[--foreground] mb-10"
            style={{ fontFamily: "'Syne', sans-serif" }}>Internships</h3>

          <div className="space-y-6">
            {internships.map((intern, idx) => (
              <div key={intern.company} className="exp-card">
                {/* Header banner */}
                <div className="exp-card-header">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                      <h3 className="text-[19px] font-bold text-[--foreground]" style={{ fontFamily: "'Syne', sans-serif" }}>
                        {intern.role}
                      </h3>
                      <span className="hidden sm:block w-px h-5 bg-[--border-strong]" />
                      <p className="font-mono text-[12px] font-semibold text-[--accent]">{intern.company}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-mono text-[11px] font-semibold text-[--foreground]">{intern.duration}</p>
                    <p className="font-mono text-[10px] text-[--subtle]">{intern.location}</p>
                  </div>
                  <span className="exp-number shrink-0 hidden md:block">{String(idx + 1).padStart(2, "0")}</span>
                </div>

                {/* Body */}
                <div className="exp-card-body">
                  <p className="text-[14px] leading-relaxed text-[--muted-foreground] max-w-[68ch] mb-6">{intern.overview}</p>

                  <div className="grid gap-2.5 sm:grid-cols-2 mb-6">
                    {intern.technicalContributions.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-[13px] text-[--muted-foreground]">
                        <span className="shrink-0 font-mono text-[10px] font-bold text-[--accent] pt-0.5">{String(i + 1).padStart(2, "0")}.</span>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {intern.technologies.map((tech) => <span key={tech} className="tech-chip"><TechIcon name={tech} size={11} /><span>{tech}</span></span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          §04 STACK — Animated marquee rows per category
      ══════════════════════════════════════════════════════ */}
      <section id="skills" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mb-10">
          <span className="section-label">04 — Stack &amp; Competencies</span>
          <h2 className="text-section-display text-[--foreground] mt-1">Technical Stack</h2>
          <p className="mt-3 text-[14px] text-[--muted-foreground] max-w-[48ch]">
            Technologies I work with daily across the full AI-to-product pipeline.
          </p>
        </div>

        {/* Alternating marquee rows — each category gets its own animated strip */}
        <div className="space-y-8">
          {stackCategories.map((cat, idx) => (
            <div key={cat.label}>
              <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                <div className="stack-category-label">
                  <span className="section-label shrink-0">{cat.label}</span>
                </div>
              </div>
              <MarqueeRow
                items={cat.items}
                direction={idx % 2 === 0 ? "ltr" : "rtl"}
                speed={20 + idx * 4}
              />
            </div>
          ))}
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          §05 EDUCATION — Dark/light split card
      ══════════════════════════════════════════════════════ */}
      <section id="education" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <span className="section-label">05 — Education</span>
          <h2 className="text-section-display text-[--foreground] mt-1 mb-10">Academic Background</h2>

          <div className="edu-split reveal">
            {/* Left — dark identity panel */}
            <div className="edu-split-left">
              <div>
                <p className="font-mono text-[11px] font-semibold" style={{ color: "var(--accent)" }}>{education.duration}</p>
                <h3
                  className="mt-3 text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold leading-tight"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {education.degree}
                </h3>
                <p className="mt-2 text-[15px] font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {education.field}
                </p>
              </div>
              <div className="mt-8">
                <p className="font-mono text-[12px] font-semibold" style={{ color: "var(--accent)" }}>
                  {education.institution}
                </p>
                <p className="font-mono text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {education.location}, India
                </p>
              </div>
            </div>

            {/* Right — details panel */}
            <div className="edu-split-right flex flex-col justify-between gap-6">
              <div>
                <p className="section-label mb-3">Focus Areas</p>
                <p className="text-[14px] leading-relaxed text-[--muted-foreground]">{education.focus}</p>
              </div>
              <div>
                <p className="section-label mb-3">Coursework</p>
                <div className="flex flex-wrap gap-1.5">
                  {education.coursework.map((c) => <span key={c} className="tech-chip">{c}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          §06 CAPSTONE — Dark cinematic card
          Style: inverted (dark) card with teal radial glow,
                 white text, white borders
      ══════════════════════════════════════════════════════ */}
      <section id="capstone-project" className="py-20 md:py-28 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <span className="section-label">06 — Final Year Capstone & Research · 2025–2026</span>
        <h2 className="text-section-display text-[--foreground] mt-1 mb-10">{teacherRobot.title}</h2>
        <p className="text-[15px] font-medium text-[--muted-foreground] mb-10 max-w-[60ch]">{teacherRobot.subtitle}</p>

        <div className="capstone-card reveal">
          <p className="font-mono text-[10px] font-semibold tracking-widest uppercase cap-accent mb-2">
            Project Overview
          </p>
          <p className="text-[14px] leading-relaxed cap-muted max-w-[68ch]">{teacherRobot.description}</p>

          {/* Capabilities */}
          <div className="mt-8">
            <p className="font-mono text-[10px] font-semibold tracking-widest uppercase cap-accent mb-4">
              Core Capabilities
            </p>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {teacherRobot.capabilities.map((cap, i) => (
                <div key={i} className="flex items-center gap-2.5 text-[13px]">
                  <span className="font-mono text-[10px] font-bold cap-accent">✓</span>
                  <span className="font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture grid */}
          <div className="mt-8 border-t cap-border pt-6">
            <p className="font-mono text-[10px] font-semibold tracking-widest uppercase cap-accent mb-4">
              Technical Architecture
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { label: "Computer Vision", value: "InsightFace · ArcFace · SCRFD · OpenCV" },
                { label: "AI / LLM / RAG",  value: "OpenAI APIs · Google Gemini · ChromaDB" },
                { label: "Voice",           value: "Deepgram · Whisper (STT / TTS)" },
                { label: "Backend",         value: "FastAPI · Node.js · PostgreSQL · SQLite" },
                { label: "Frontend",        value: "React · Vite · Tailwind CSS" },
                { label: "Edge Hardware",   value: "Raspberry Pi Integration" },
              ].map((row) => (
                <div key={row.label} className="cap-surface p-3">
                  <p className="font-mono text-[9px] uppercase tracking-widest cap-accent mb-1">{row.label}</p>
                  <p className="text-[12px] font-semibold" style={{ color: "rgba(255,255,255,0.85)" }}>{row.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Research pub */}
          <div className="mt-8 border-t cap-border pt-6">
            <p className="font-mono text-[10px] font-semibold tracking-widest uppercase cap-accent mb-3">
              Research Publication
            </p>
            <h4 className="text-[16px] font-bold" style={{ color: "rgba(255,255,255,0.92)", fontFamily: "'Syne', sans-serif" }}>
              {teacherRobot.researchPaper.title}
            </h4>
            <p className="font-mono text-[11px] cap-muted mt-1">
              {teacherRobot.researchPaper.journal} · {teacherRobot.researchPaper.status}
            </p>
            <p className="mt-3 text-[13px] leading-relaxed cap-muted max-w-[60ch]">{teacherRobot.researchPaper.summary}</p>
          </div>

          {/* Tech chips */}
          <div className="mt-6 border-t cap-border pt-5 flex flex-wrap gap-1.5">
            {teacherRobot.technologies.map((tech) => (
              <span key={tech} className="cap-chip"><TechIcon name={tech} size={10} /><span>{tech}</span></span>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          §07 RESEARCH — Large-number ghost cards in 2-col grid
          Style: cards with giant ghost number, teal glow hover
      ══════════════════════════════════════════════════════ */}
      <section id="research" className="py-20 md:py-28 bg-[--surface]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <span className="section-label">07 — Research & System Notes</span>
          <h2 className="text-section-display text-[--foreground] mt-1 mb-12">Published Writing</h2>

          <div className="grid gap-5 sm:grid-cols-2">
            {verifiedArticles.map((article, i) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="research-card reveal"
                data-num={String(i + 1)}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="section-label">{String(i + 1).padStart(2, "0")} · {article.source}</span>
                  <span className="font-mono text-[11px] font-semibold text-[--muted-foreground] group-hover:text-[--accent] transition-colors">
                    Read ↗
                  </span>
                </div>
                <h3
                  className="text-[16px] font-bold text-[--foreground] leading-snug mb-1"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {article.title}
                </h3>
                <p className="font-mono text-[11px] text-[--subtle] mb-3">{article.author} · {article.topic}</p>
                <p className="text-[13px] leading-relaxed text-[--muted-foreground] max-w-[48ch]">{article.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          §08 CERTIFICATIONS — Year-grouped card rows
          Style: flat card rows per cert, year as teal header
      ══════════════════════════════════════════════════════ */}
      <section id="certifications" className="py-20 md:py-28 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <span className="section-label">08 — Certifications</span>
        <h2 className="text-section-display text-[--foreground] mt-1 mb-12">Credentials &amp; Training</h2>

        {[{ year: "2026", certs: certs2026 }, { year: "2025", certs: certs2025 }].map(({ year, certs: yearCerts }) => (
          <div key={year} className="mb-12">
            {/* Year header */}
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-[--accent]">{year}</span>
              <div className="flex-1 h-px bg-[--accent] opacity-20" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {yearCerts.map((cert) => (
                <div key={cert.title} className="cert-row">
                  <CertOrgLogo org={cert.organization} size={32} />
                  <div className="flex-1 min-w-0">
                    <p className="text-[13.5px] font-semibold text-[--foreground] leading-snug">{cert.title}</p>
                    <p className="font-mono text-[10px] text-[--muted-foreground] mt-0.5">{cert.organization}</p>
                  </div>
                  <span className="shrink-0 font-mono text-[10px] text-[--subtle]">{cert.issueDate}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>


      {/* ══════════════════════════════════════════════════════
          §09 FAQ — Frequently Asked Questions
      ══════════════════════════════════════════════════════ */}
      <section id="faq" className="py-20 md:py-28 bg-[--surface] border-t border-[--border]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[340px_1fr] lg:gap-16">
            {/* Left Column: Heading & Sticky Context */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="section-label">09 — FAQ</span>
              <h2 className="text-section-display text-[--foreground] mt-1">Common Questions</h2>
              <p className="mt-4 text-[14px] leading-relaxed text-[--muted-foreground] max-w-[30ch]">
                Direct insights on AI engineering, system architecture, technical background, and project collaboration.
              </p>
            </div>

            {/* Right Column: Interactive Accordion */}
            <div>
              <FaqAccordion faqs={faqs} />
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          §10 CONTACT — Open for Collaboration & Send a Message
      ══════════════════════════════════════════════════════ */}
      <section id="contact" className="py-20 md:py-28 border-t border-[--border]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-12">
            <span className="section-label">10 — Contact &amp; Collaboration</span>
            <h2 className="text-section-display text-[--foreground] mt-1">Get In Touch</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] items-start">
            {/* Left Card: Open for Collaboration */}
            <div className="contact-hero reveal">
              <div className="relative z-10 flex flex-col justify-between h-full min-h-[380px]">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6">
                    <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                    <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-white">
                      Available for Roles &amp; Projects
                    </span>
                  </div>

                  <h3
                    className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-tight mb-4 text-white"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    Open for Collaboration
                  </h3>
                  <p className="text-[14px] leading-relaxed text-white/80 max-w-[36ch]">
                    Seeking AI engineering roles, multi-agent system architecture, or technical advisory for high-impact software products.
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-white/15 space-y-4">
                  {[
                    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
                    { label: "GitHub", value: `github.com/${profile.githubUsername}`, href: profile.github },
                    { label: "LinkedIn", value: "linkedin.com/in/ubaith-sherif", href: profile.linkedin },
                  ].map((channel) => (
                    <div key={channel.label} className="flex items-center justify-between group">
                      <span className="font-mono text-[10px] font-semibold tracking-wider uppercase text-white/60">
                        {channel.label}
                      </span>
                      <a
                        href={channel.href}
                        target={channel.href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noreferrer"
                        className="font-mono text-[13px] font-bold text-white group-hover:underline flex items-center gap-1"
                      >
                        {channel.value} <span className="text-[11px] opacity-70 group-hover:translate-x-0.5 transition-transform">↗</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card: Send a Message Form */}
            <div className="contact-form-card reveal reveal-d1">
              <div className="mb-6">
                <p className="section-label">Direct Reachout</p>
                <h3
                  className="text-[20px] font-bold text-[--foreground] mt-1"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Send a Message
                </h3>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
