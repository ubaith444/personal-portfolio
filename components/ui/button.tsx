import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
};

export function Button({ href, children, className, variant = "primary", ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex h-9 items-center justify-center gap-2 rounded px-4 text-xs font-semibold tracking-wide transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    variant === "primary" &&
      "bg-[--foreground] text-[--background] hover:opacity-80 focus-visible:outline-[--accent]",
    variant === "secondary" &&
      "border border-[--border-strong] bg-[--surface] text-[--foreground] hover:bg-[--surface-2] focus-visible:outline-[--accent]",
    variant === "outline" &&
      "border border-[--border-strong] bg-transparent text-[--foreground] hover:bg-[--surface] focus-visible:outline-[--accent]",
    variant === "ghost" &&
      "border border-transparent text-[--muted-foreground] hover:text-[--foreground] hover:bg-[--surface] focus-visible:outline-[--accent]",
    className
  );

  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("/") && href.endsWith(".pdf")) {
    return (
      <a
        className={classes}
        href={href}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel="noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...props}>
      {children}
    </Link>
  );
}
