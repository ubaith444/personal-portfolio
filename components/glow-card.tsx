"use client";

import { useRef, useState, ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export function GlowCard({ children, className = "" }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Radial Spotlight Glow overlay */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-100 z-0"
          style={{
            background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--accent-glow), transparent 70%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
