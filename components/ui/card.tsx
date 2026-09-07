import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Card — now a minimal layout primitive only.
 * No default visual treatment (border/shadow/bg); add those via className.
 * Use for semantic grouping, not decoration.
 */
export function Card({ children, className, ...props }: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}
