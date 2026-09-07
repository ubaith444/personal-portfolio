"use client";

import type { FormEvent } from "react";
import { useState } from "react";

type FormState = {
  fullName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  company: "",
  subject: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSuccess(false);
  }

  function validate() {
    const nextErrors: Partial<FormState> = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Valid email address required.";
    }

    if (!form.subject.trim()) {
      nextErrors.subject = "Subject is required.";
    }

    if (form.message.trim().length < 15) {
      nextErrors.message = "Message must be at least 15 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setLoading(false);
    setSuccess(true);
    setForm(initialState);
  }

  return (
    <form className="rounded-lg border border-slate-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60 sm:p-6" onSubmit={onSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <Field
          error={errors.fullName}
          label="Full Name"
          onChange={(value) => updateField("fullName", value)}
          placeholder="Your name"
          value={form.fullName}
        />
        <Field
          error={errors.email}
          label="Email Address"
          onChange={(value) => updateField("email", value)}
          placeholder="name@company.com"
          type="email"
          value={form.email}
        />
        <Field
          label="Company / Team (Optional)"
          onChange={(value) => updateField("company", value)}
          placeholder="Organization"
          value={form.company}
        />
        <Field
          error={errors.subject}
          label="Subject"
          onChange={(value) => updateField("subject", value)}
          placeholder="Project scope or inquiry"
          value={form.subject}
        />
      </div>

      <label className="mt-4 block">
        <span className="text-xs font-mono font-semibold text-slate-700 dark:text-zinc-300">Message</span>
        <textarea
          className="mt-1.5 min-h-32 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none transition-colors focus:border-slate-800 dark:border-zinc-700 dark:bg-zinc-950 dark:text-slate-100 dark:focus:border-zinc-400"
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Specify goals, technical context, timeline, and deliverables."
          value={form.message}
        />
        {errors.message ? <span className="mt-1 block text-xs text-red-600 dark:text-red-400">{errors.message}</span> : null}
      </label>

      <button
        className="mt-4 inline-flex h-9 w-full items-center justify-center rounded-md border border-slate-900 bg-slate-900 px-4 text-xs font-semibold text-white transition-colors hover:bg-slate-800 disabled:opacity-50 dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
        disabled={loading}
        type="submit"
      >
        {loading ? "Transmitting..." : "Send Message"}
      </button>

      {success ? (
        <p className="mt-3 rounded border border-emerald-300 bg-emerald-50 px-3 py-2 text-xs text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
          Message sent successfully. I will respond to your email shortly.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  error,
  label,
  onChange,
  placeholder,
  type = "text",
  value
}: {
  error?: string;
  label: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  value: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-mono font-semibold text-slate-700 dark:text-zinc-300">{label}</span>
      <input
        className="mt-1.5 h-9 w-full rounded-md border border-slate-300 bg-white px-3 text-xs text-slate-900 outline-none transition-colors focus:border-slate-800 dark:border-zinc-700 dark:bg-zinc-950 dark:text-slate-100 dark:focus:border-zinc-400"
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {error ? <span className="mt-1 block text-xs text-red-600 dark:text-red-400">{error}</span> : null}
    </label>
  );
}
