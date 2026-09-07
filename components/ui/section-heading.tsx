import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
  index
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  index?: string;
}) {
  return (
    <div className="mb-10">
      {(index || eyebrow) ? (
        <div className="mb-3 flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-widest text-[--muted-foreground]">
          {index ? <span>{index}.</span> : null}
          {eyebrow ? <span>{eyebrow}</span> : null}
        </div>
      ) : null}
      <h2
        className="font-display text-3xl font-bold leading-tight tracking-tight text-[--foreground] md:text-4xl"
        style={{ fontFamily: "'Fraunces', serif", fontVariationSettings: "'opsz' 60" }}
      >
        {title}
      </h2>
      {children ? (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[--muted-foreground]">
          {children}
        </p>
      ) : null}
    </div>
  );
}
