"use client";

import { TechIcon } from "@/components/tech-icon";

interface MarqueeRowProps {
  items: string[];
  direction?: "ltr" | "rtl";
  speed?: number;
}

export function MarqueeRow({ items, direction = "ltr", speed = 28 }: MarqueeRowProps) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="marquee-wrap py-1">
      <div
        className={`marquee-track ${direction === "rtl" ? "marquee-rtl" : "marquee-ltr"}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee-chip">
            <TechIcon name={item} size={16} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
