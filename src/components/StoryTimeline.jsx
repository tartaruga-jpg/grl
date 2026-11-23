import React, { useRef, useEffect, useState } from "react";
import { config } from "../data/storyData";
import { useReveal } from "../hooks/useReveal";

export default function StoryTimeline() {
  const { eyebrow, title, subtitle, steps } = config.story;
  const refHeader = useReveal();
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const beamRef = useRef(null);
  const [activeNode, setActiveNode] = useState(-1);

  // Scroll-linked glowing beam
  useEffect(() => {
    const section = sectionRef.current;
    const beam = beamRef.current;
    const line = lineRef.current;
    if (!section || !beam || !line) return;

    function onScroll() {
      const rect = section.getBoundingClientRect();
      const winH = window.innerHeight;
      const total = rect.height + winH;
      const traveled = winH - rect.top;
      const progress = Math.min(1, Math.max(0, traveled / total));

      const lineH = line.offsetHeight;
      const beamH = Math.round(lineH * progress);
      beam.style.height = `${beamH}px`;

      const lit = Math.floor(progress * (steps.length + 1)) - 1;
      setActiveNode(lit);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [steps.length]);

  return (
    <section
      id="chapter-story"
      ref={sectionRef}
      style={{ padding: "5rem 1.5rem", position: "relative", zIndex: 1, maxWidth: "760px", margin: "0 auto" }}
    >
      {/* Header */}
      <div ref={refHeader} className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <p style={eyebrowStyle}>{eyebrow}</p>
        <h2 style={sectionTitleStyle}>{title}</h2>
        <p style={subtitleStyle}>{subtitle}</p>
      </div>

      {/* Timeline */}
      <div style={{ position: "relative", paddingLeft: "3rem" }}>
        {/* Base line */}
        <div
          ref={lineRef}
          style={{
            position: "absolute", left: "1rem", top: "1rem", bottom: "1rem", width: "2px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "9999px",
          }}
        />
        {/* Glowing beam */}
        <div
          ref={beamRef}
          style={{
            position: "absolute", left: "1rem", top: "1rem",
            width: "2px", height: "0px",
            background: "linear-gradient(180deg, #E11D48 0%, #F472B6 60%, #E5C17B 100%)",
            borderRadius: "9999px",
            boxShadow: "0 0 12px #F472B6, 0 0 24px #E11D48",
            transition: "height 0.08s linear",
            pointerEvents: "none",
          }}
        />

        {steps.map((step, i) => {
          const lit = i <= activeNode;
          return (
            <StoryCard key={i} step={step} lit={lit} isLast={i === steps.length - 1} />
          );
        })}
      </div>
    </section>
  );
}

function StoryCard({ step, lit, isLast }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal" style={{ position: "relative", marginBottom: isLast ? 0 : "2.5rem" }}>
      {/* Circle node with animated glow */}
      <div
        style={{
          position: "absolute", left: "-2.5rem",
          width: "2rem", height: "2rem",
          borderRadius: "50%",
          background: lit ? "rgba(225,29,72,0.3)" : "rgba(20,19,26,1)",
          border: `2px solid ${lit ? "#F472B6" : "rgba(255,255,255,0.15)"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: lit ? "0 0 16px #F472B6, 0 0 28px #E11D48" : "none",
          transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: lit ? "scale(1.08)" : "scale(1)",
        }}
      >
        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.6rem", fontWeight: 700, color: lit ? "#F472B6" : "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}>
          {step.num}
        </span>
      </div>

      {/* Card with timeline-card hover micro-interaction */}
      <div
        className="timeline-card"
        style={{
          background: "rgba(20, 19, 26, 0.82)",
          border: `1px solid ${lit ? "rgba(244,114,182,0.35)" : "rgba(229,193,123,0.12)"}`,
          borderRadius: "1rem",
          padding: "1.4rem 1.6rem",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: lit ? "0 0 24px rgba(225,29,72,0.15)" : "0 4px 20px rgba(0,0,0,0.3)",
          cursor: "default",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
          <span style={{ fontSize: "1.1rem" }}>{step.icon}</span>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.7rem", letterSpacing: "0.14em", color: "#E5C17B", fontWeight: 600 }}>
            {step.platform}
          </span>
        </div>
        <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.1rem, 3.5vw, 1.5rem)", fontWeight: 600, color: "#FAF6F5", marginBottom: "0.5rem" }}>
          {step.heading}
        </h3>
        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.88rem", color: "rgba(250,246,245,0.65)", lineHeight: 1.75 }}>
          {step.text}
        </p>
      </div>
    </div>
  );
}

const eyebrowStyle = {
  fontFamily: "'Outfit', sans-serif",
  fontSize: "0.68rem", letterSpacing: "0.22em",
  color: "#E11D48", fontWeight: 600, marginBottom: "0.6rem",
};
const sectionTitleStyle = {
  fontFamily: "'Outfit', sans-serif",
  fontSize: "clamp(2rem, 6vw, 3rem)", fontWeight: 700,
  color: "#FAF6F5", marginBottom: "0.75rem", lineHeight: 1.1,
};
const subtitleStyle = {
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontSize: "0.9rem", color: "rgba(250,246,245,0.5)", lineHeight: 1.7, maxWidth: "520px", margin: "0 auto",
};
