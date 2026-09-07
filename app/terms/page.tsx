import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${profile.name}'s portfolio website.`
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link href="/" className="font-mono text-xs text-blue-600 dark:text-blue-400 hover:underline">
          ← Back to Portfolio
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 dark:text-slate-100">Terms of Service</h1>
        <p className="mt-2 text-xs font-mono text-slate-500 dark:text-zinc-400">Effective Date: August 17, 2026</p>
      </div>

      <Card className="space-y-6 text-sm text-slate-700 dark:text-zinc-300">
        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">1. Acceptance of Terms</h2>
          <p className="mt-2 leading-relaxed">
            By accessing and viewing this portfolio site, you agree to comply with these Terms of Service. If you do not agree with any portion of these terms, please discontinue use.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">2. Intellectual Property & Open Source Licensing</h2>
          <p className="mt-2 leading-relaxed">
            Unless otherwise noted, the underlying source code for this portfolio is open-sourced under the MIT License and hosted on GitHub. Project write-ups, architecture diagrams, research publications, and personal branding content remain the intellectual property of Ubaith Sherif.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">3. Project Content & Demonstration Disclaimer</h2>
          <p className="mt-2 leading-relaxed">
            Projects, system architectures, and benchmark metrics presented on this site represent real engineering efforts and educational research. Code samples and live demos are provided &quot;as is&quot; without warranties of any kind regarding merchantability or fitness for a specific purpose.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">4. Responsible Usage</h2>
          <p className="mt-2 leading-relaxed">
            Visitors agree not to engage in unauthorized security testing, denial-of-service attempts, automated scraping that degrades service performance, or misrepresentation of project ownership.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">5. Modifications to Terms</h2>
          <p className="mt-2 leading-relaxed">
            These terms may be updated periodically to reflect changes in project hosting or open-source licenses. Continued use of the site constitutes acceptance of updated terms.
          </p>
        </section>
      </Card>
    </main>
  );
}
