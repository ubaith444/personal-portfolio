"use client";

import type { HTMLAttributes, ReactNode } from "react";

export function Reveal({ children, className, ...props }: HTMLAttributes<HTMLDivElement> & { children: ReactNode; delay?: number }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export function Magnetic({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}
