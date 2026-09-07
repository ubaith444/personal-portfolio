import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { getProject, projects } from "@/lib/projects";
import { siteUrl } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: siteUrl(`/projects/${project.slug}`)
    }
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd />

      {/* Breadcrumb */}
      <div className="mb-10">
        <Link
          href="/#projects"
          className="font-mono text-[11px] font-medium text-[--muted-foreground] transition-colors hover:text-[--foreground]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          ← Back to Projects
        </Link>
      </div>

      {/* ─── Project Header ──────────────────────────────────── */}
      <div className="border-b border-[--border] pb-10">
        {/* Industry + Status */}
        <div
          className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-[--muted-foreground]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {project.industry} · {project.status}
        </div>

        {/* Title */}
        <h1
          className="text-4xl font-bold leading-tight text-[--foreground] sm:text-5xl"
          style={{ fontFamily: "'Fraunces', serif", fontVariationSettings: "'opsz' 60" }}
        >
          {project.title}
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-[17px] font-medium text-[--muted-foreground]">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[--muted-foreground]">
          {project.description}
        </p>

        {/* CTA Links */}
        <div className="mt-7 flex flex-wrap items-center gap-5">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center rounded px-5 text-[13px] font-semibold transition-opacity hover:opacity-80"
              style={{ background: "var(--foreground)", color: "var(--background)" }}
            >
              GitHub Repository ↗
            </a>
          ) : null}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[12px] font-medium text-[--muted-foreground] transition-colors hover:text-[--foreground]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Live Demo ↗
            </a>
          ) : null}
        </div>
      </div>

      {/* ─── Problem + Solution ──────────────────────────────── */}
      <div className="my-12 grid gap-10 md:grid-cols-2">
        <div>
          <h2
            className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-[--muted-foreground]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Problem Statement
          </h2>
          <p className="text-[15px] leading-relaxed text-[--muted-foreground]">
            {project.problem}
          </p>
        </div>
        <div>
          <h2
            className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-[--muted-foreground]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            System Solution
          </h2>
          <p className="text-[15px] leading-relaxed text-[--muted-foreground]">
            {project.solution}
          </p>
        </div>
      </div>

      <hr className="border-[--border]" />

      {/* ─── Architecture ────────────────────────────────────── */}
      <section className="my-12">
        <h2
          className="mb-6 font-mono text-[10px] font-semibold uppercase tracking-widest text-[--muted-foreground]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Architecture & Data Flow
        </h2>
        <div className="space-y-4">
          {project.architecture.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <span
                className="shrink-0 font-mono text-[12px] font-semibold text-[--accent]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {String(idx + 1).padStart(2, "0")}.
              </span>
              <p className="text-[15px] leading-relaxed text-[--muted-foreground]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-[--border]" />

      {/* ─── Features + Challenges ───────────────────────────── */}
      <div className="my-12 grid gap-10 md:grid-cols-2">
        <div>
          <h2
            className="mb-5 font-mono text-[10px] font-semibold uppercase tracking-widest text-[--muted-foreground]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Key Technical Features
          </h2>
          <ul className="space-y-3">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[14px] text-[--muted-foreground]">
                <span
                  className="shrink-0 font-mono text-[11px] text-[--accent]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {String(idx + 1).padStart(2, "0")}.
                </span>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2
            className="mb-5 font-mono text-[10px] font-semibold uppercase tracking-widest text-[--muted-foreground]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Engineering Challenges
          </h2>
          <ul className="space-y-3">
            {project.challenges.map((challenge, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[14px] text-[--muted-foreground]">
                <span
                  className="shrink-0 font-mono text-[11px] text-[--accent-warm]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {String(idx + 1).padStart(2, "0")}.
                </span>
                <span className="leading-relaxed">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="border-[--border]" />

      {/* ─── Full Stack ──────────────────────────────────────── */}
      <section className="my-12">
        <h2
          className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-widest text-[--muted-foreground]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Complete Technology Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="tech-chip">{item}</span>
          ))}
        </div>
      </section>

      <hr className="border-[--border]" />

      {/* ─── Related Projects ────────────────────────────────── */}
      <section className="my-12">
        <h2
          className="mb-6 font-mono text-[10px] font-semibold uppercase tracking-widest text-[--muted-foreground]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Related Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {relatedProjects.map((item) => (
            <Link
              key={item.slug}
              href={`/projects/${item.slug}`}
              className="group block border border-[--border] p-5 transition-colors hover:border-[--border-strong] hover:bg-[--surface]"
              style={{ borderRadius: "4px" }}
            >
              <p
                className="mb-1 font-mono text-[10px] font-medium uppercase tracking-widest text-[--muted-foreground]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {item.industry}
              </p>
              <h3
                className="text-[16px] font-bold text-[--foreground] transition-opacity group-hover:opacity-70"
                style={{ fontFamily: "'Fraunces', serif", fontVariationSettings: "'opsz' 32" }}
              >
                {item.title}
              </h3>
              <p className="mt-1 text-[13px] text-[--muted-foreground]">{item.subtitle}</p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
