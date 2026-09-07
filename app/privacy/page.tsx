import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${profile.name}'s portfolio website.`
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link href="/" className="font-mono text-xs text-blue-600 dark:text-blue-400 hover:underline">
          ← Back to Portfolio
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 dark:text-slate-100">Privacy Policy</h1>
        <p className="mt-2 text-xs font-mono text-slate-500 dark:text-zinc-400">Effective Date: August 17, 2026</p>
      </div>

      <Card className="space-y-6 text-sm text-slate-700 dark:text-zinc-300">
        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">1. Data Collection Overview</h2>
          <p className="mt-2 leading-relaxed">
            This portfolio website is a static technical showcase. It does not collect personal data, require user registration, or deploy tracking cookies for advertising or profiling.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">2. Server Logs & Analytics</h2>
          <p className="mt-2 leading-relaxed">
            When you visit this site, standard web server hosting infrastructure (e.g., Vercel / Netlify) may log basic technical parameters such as IP address, user agent, browser type, referring URL, and page timestamps for performance monitoring, security diagnostics, and operational integrity.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">3. Contact Form Submission</h2>
          <p className="mt-2 leading-relaxed">
            If you submit an inquiry through the contact form, the information provided (name, email address, message body) is transmitted solely to process and respond to your direct inquiry. It is never sold, shared, or used for automated marketing.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">4. Third-Party Links</h2>
          <p className="mt-2 leading-relaxed">
            This site contains links to third-party platforms such as GitHub, LinkedIn, and research publications. External sites operate under their own privacy practices and terms.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">5. Contact Information</h2>
          <p className="mt-2 leading-relaxed">
            For questions regarding this policy or technical operation of the site, contact Ubaith Sherif at{" "}
            <a href={`mailto:${profile.email}`} className="font-mono text-blue-600 dark:text-blue-400 hover:underline">
              {profile.email}
            </a>.
          </p>
        </section>
      </Card>
    </main>
  );
}
