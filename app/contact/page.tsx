import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${profile.name} for AI engineering, backend services, and full-stack product development.`
};

export default function ContactPage() {
  return (
    <main id="main-content" className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <JsonLd />

      <div className="mb-6">
        <Link href="/" className="font-mono text-xs text-blue-600 dark:text-blue-400 hover:underline">
          ← Back to Portfolio
        </Link>
      </div>

      <header className="border-b border-slate-200 pb-8 dark:border-zinc-800">
        <span className="font-mono text-xs text-blue-600 dark:text-blue-400">{"// DIRECT_INQUIRY"}</span>
        <h1 className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-slate-100 sm:text-4xl">
          Contact & Engineering Collaboration
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
          Reach out for full-time AI Engineering roles, contract architecture, or technical collaboration.
        </p>
      </header>

      <div className="my-10 grid gap-8 md:grid-cols-2">
        <Card className="flex flex-col justify-between">
          <div>
            <h2 className="font-mono text-xs font-bold uppercase text-slate-500 dark:text-zinc-400">
              {"// Contact Channels"}
            </h2>

            <dl className="mt-4 space-y-4 font-mono text-xs">
              <div className="border-b border-slate-100 pb-3 dark:border-zinc-800">
                <dt className="text-slate-500">Direct Email:</dt>
                <dd className="mt-1 font-semibold text-slate-800 dark:text-zinc-200">
                  <a href={`mailto:${profile.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                    {profile.email}
                  </a>
                </dd>
              </div>

              <div className="border-b border-slate-100 pb-3 dark:border-zinc-800">
                <dt className="text-slate-500">GitHub Profile:</dt>
                <dd className="mt-1 font-semibold text-slate-800 dark:text-zinc-200">
                  <a href={profile.github} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    github.com/{profile.githubUsername}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-slate-500">LinkedIn Profile:</dt>
                <dd className="mt-1 font-semibold text-slate-800 dark:text-zinc-200">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    linkedin.com/in/ubaith-sherif
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-6 border-t border-slate-100 pt-4 dark:border-zinc-800">
            <Button href={profile.linkedin} variant="outline" className="w-full">
              Connect on LinkedIn
            </Button>
          </div>
        </Card>

        <div>
          <h2 className="mb-3 font-mono text-xs font-bold uppercase text-slate-500 dark:text-zinc-400">
            {"// Direct Message Form"}
          </h2>
          <ContactForm />
        </div>
      </div>

      <Footer />
    </main>
  );
}
