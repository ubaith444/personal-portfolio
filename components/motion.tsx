"use client";

import { useEffect, useRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: number;
};

export function Reveal({ children, className, delay = 0, style, ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Mark hidden before first paint so the element is invisible until observed
    el.setAttribute("data-reveal", "hidden");
    el.style.animationDelay = `${delay}s`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-reveal", "visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn("reveal-in", className)}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}

export function Magnetic({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("magnetic-lite", className)}>{children}</div>;
}
