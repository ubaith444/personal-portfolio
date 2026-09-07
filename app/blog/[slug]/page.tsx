import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { BlogCover } from "@/components/project-visual";
import { Card } from "@/components/ui/card";
import { blogPosts, getPost } from "@/lib/blog";
import { profile } from "@/lib/profile";
import { siteUrl } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: siteUrl(`/blog/${post.slug}`)
    }
  };
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const related = post.related.map(getPost).filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <JsonLd />
      
      <div className="mb-6">
        <Link href="/#blog" className="font-mono text-xs text-blue-600 dark:text-blue-400 hover:underline">
          ← Back to Articles & Research
        </Link>
      </div>

      <article className="space-y-8">
        <header className="border-b border-slate-200 pb-8 dark:border-zinc-800">
          <div className="flex items-center gap-3 font-mono text-xs text-slate-500">
            <span className="text-blue-600 dark:text-blue-400">[{post.topic}]</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          <h1 className="mt-3 text-3xl font-extrabold text-slate-900 dark:text-slate-100 sm:text-4xl">
            {post.title}
          </h1>

          <p className="mt-3 text-base text-slate-600 dark:text-zinc-300">
            {post.excerpt}
          </p>

          <div className="mt-4 font-mono text-xs text-slate-500">
            By {profile.name} (AI Engineer)
          </div>
        </header>

        <BlogCover type={post.cover} />

        <Card className="bg-slate-50 dark:bg-zinc-900/40">
          <h2 className="font-mono text-xs font-bold uppercase text-slate-500 dark:text-zinc-400">
            {"// Table of Contents"}
          </h2>
          <ol className="mt-3 grid gap-2 font-mono text-xs text-slate-700 dark:text-zinc-300 sm:grid-cols-2">
            {post.tableOfContents.map((item, idx) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-blue-500">0{idx + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </Card>

        <div className="space-y-8 pt-4">
          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                {section.heading}
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-slate-700 dark:text-zinc-300">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {section.code ? (
                <div className="rounded-lg border border-slate-200 bg-slate-950 p-4 font-mono text-xs text-emerald-400 dark:border-zinc-800">
                  <pre className="overflow-x-auto">
                    <code>{section.code}</code>
                  </pre>
                </div>
              ) : null}

              {section.diagram ? (
                <div className="flex flex-wrap items-center gap-2 rounded border border-slate-200 bg-slate-100 p-3 font-mono text-xs text-slate-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                  {section.diagram.map((node, index) => (
                    <div key={node} className="flex items-center gap-2">
                      <span className="rounded bg-slate-200 px-2 py-0.5 font-bold dark:bg-zinc-800">{node}</span>
                      {index < section.diagram!.length - 1 ? <span className="text-slate-400">→</span> : null}
                    </div>
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </div>

        <Card className="bg-slate-50 dark:bg-zinc-900/40">
          <h2 className="font-mono text-xs font-bold uppercase text-slate-500 dark:text-zinc-400">
            {"// Key Takeaways"}
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-zinc-300">
            {post.takeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="font-mono text-xs text-blue-500">•</span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </Card>

        {related.length ? (
          <section className="pt-6">
            <h2 className="font-mono text-xs font-bold uppercase text-slate-500 dark:text-zinc-400">
              {"// Related Articles"}
            </h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              {related.map((item) => (
                <Link key={item.slug} href={`/blog/${item.slug}`}>
                  <Card className="hover:border-slate-400 dark:hover:border-zinc-700">
                    <p className="font-mono text-xs text-blue-600 dark:text-blue-400">[{item.topic}]</p>
                    <h3 className="mt-1 text-sm font-bold text-slate-900 dark:text-slate-100">{item.title}</h3>
                    <p className="mt-1 font-mono text-xs text-slate-500">{item.readTime}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </article>

      <Footer />
    </main>
  );
}
