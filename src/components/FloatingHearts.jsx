import React, { useMemo } from "react";

const HEARTS = ["♥", "♡", "🩷", "♥", "♡", "♥", "🩷", "♡", "♥", "🩷", "♡", "♥"];

export default function FloatingHearts() {
  const particles = useMemo(() =>
    HEARTS.map((h, i) => ({
      symbol: h,
      left: `${Math.round(5 + (i * 8.2) % 90)}%`,
      duration: `${14 + (i * 2.3) % 10}s`,
      delay: `${(i * 1.7) % 8}s`,
      size: i % 3 === 0 ? "1.1rem" : i % 3 === 1 ? "0.75rem" : "0.9rem",
      opacity: i % 2 === 0 ? 0.55 : 0.35,
      color: i % 3 === 0 ? "#F472B6" : i % 3 === 1 ? "#E6C280" : "#FBCFE8",
    })), []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed", inset: 0, pointerEvents: "none",
        zIndex: 0, overflow: "hidden",
      }}
    >
      {particles.map((p, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: p.left,
            bottom: "-2rem",
            fontSize: p.size,
            color: p.color,
            opacity: p.opacity,
            animation: `floatUp ${p.duration} ${p.delay} infinite linear`,
            willChange: "transform",
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
}
