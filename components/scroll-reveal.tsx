"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: "fade-up" | "fade-in" | "slide-right" | "slide-left" | "scale-up";
  delay?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const variantStyles = {
    "fade-up": isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
    "fade-in": isVisible ? "opacity-100" : "opacity-0",
    "slide-right": isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
    "slide-left": isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
    "scale-up": isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) transform-gpu ${variantStyles[variant]} ${className}`}
    >
      {children}
    </div>
  );
}
