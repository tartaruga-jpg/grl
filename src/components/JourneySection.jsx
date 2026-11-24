import React, { useState } from "react";
import { config } from "../data/storyData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export default function JourneySection() {
  const { eyebrow, title, subtitle, phases } = config.journey;
  const [active, setActive] = useState(0);
  const [isShaking, setIsShaking] = useState(false);
  const phase = phases[active];
  const refSection = useReveal();

  function triggerShake() {
    setIsShaking(false);
    requestAnimationFrame(() => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 450);
    });
  }

  function handleSelectPhase(i) {
    setActive(i);
    triggerShake();
  }

  function prev() {
    setActive((v) => (v === 0 ? phases.length - 1 : v - 1));
    triggerShake();
  }

  function next() {
    setActive((v) => (v === phases.length - 1 ? 0 : v + 1));
    triggerShake();
  }

  return (
    <section
      ref={refSection}
      className="reveal"
      style={{ padding: "5rem 1.5rem", position: "relative", zIndex: 1, maxWidth: "800px", margin: "0 auto" }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <p style={eyebrowStyle}>{eyebrow}</p>
        <h2 style={sectionTitleStyle}>{title}</h2>
        <p style={subtitleStyle}>{subtitle}</p>
      </div>

      {/* Tab bar */}
      <div
        className="journey-tabs"
        style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.5rem", marginBottom: "1.75rem" }}
      >
        {phases.map((p, i) => (
          <button
            key={i}
            onClick={() => handleSelectPhase(i)}
            className="journey-tab-btn"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.75rem", fontWeight: 600,
              letterSpacing: "0.06em",
              padding: "0.65rem 0.85rem",
              borderRadius: "0.6rem",
              border: i === active
                ? "1px solid rgba(229,193,123,0.55)"
                : "1px solid rgba(229,193,123,0.12)",
              background: i === active
                ? "linear-gradient(135deg, rgba(225,29,72,0.25) 0%, rgba(20,19,26,0.85) 100%)"
                : "rgba(20,19,26,0.65)",
              color: i === active ? "#E5C17B" : "rgba(250,246,245,0.45)",
              cursor: "pointer",
              boxShadow: i === active ? "0 4px 16px rgba(225,29,72,0.2)" : "none",
              textAlign: "left",
            }}
          >
            <span style={{ opacity: 0.6, marginRight: "0.3em" }}>{p.num} •</span>
            {p.tab}
          </button>
        ))}
      </div>

      {/* Spotlight Card: Always visible, shakes on click, internal content glides smoothly */}
      <div
        className={isShaking ? "shake-active" : ""}
        style={{
          position: "relative",
          background: "rgba(20, 19, 26, 0.88)",
          border: "1px solid rgba(229,193,123,0.2)",
          borderRadius: "1.25rem",
          padding: "2.2rem 1.85rem 1.85rem",
          boxShadow: `0 0 60px ${phase.glowColor}, 0 8px 32px rgba(0,0,0,0.35)`,
          overflow: "hidden",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          transition: "box-shadow 0.5s ease, border-color 0.5s ease",
        }}
      >
        {/* Watermark Number */}
        <span
          className="journey-watermark"
          aria-hidden="true"
          style={{
            position: "absolute", top: "-1rem", right: "1rem", zIndex: 0,
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(5rem, 18vw, 9rem)",
            fontWeight: 700,
            color: "rgba(229,193,123,0.06)",
            lineHeight: 1, userSelect: "none",
            pointerEvents: "none",
          }}
        >
          {phase.num}
        </span>

        {/* Animated content wrapper when active tab changes */}
        <div
          key={active}
          style={{
            position: "relative",
            zIndex: 1,
            animation: "fadeSlideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "1.85rem", filter: "drop-shadow(0 0 8px rgba(244,114,182,0.4))" }}>
              {phase.icon}
            </span>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.72rem", letterSpacing: "0.18em", fontWeight: 700, color: "#E5C17B" }}>
              {phase.title}
            </span>
          </div>

          {/* Great Vibes accent */}
          <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.5rem", color: "#FB7185", marginBottom: "0.5rem" }}>
            {phase.tab}
          </p>

          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.95rem", color: "rgba(250,246,245,0.8)", lineHeight: 1.85, minHeight: "4.5rem" }}>
            {phase.text}
          </p>
        </div>

        {/* Navigation Buttons */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1.75rem", gap: "0.5rem", position: "relative", zIndex: 2 }}>
          <button
            onClick={prev}
            style={navBtnStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#E5C17B";
              e.currentTarget.style.borderColor = "rgba(229,193,123,0.45)";
              e.currentTarget.style.transform = "translateX(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(229,193,123,0.75)";
              e.currentTarget.style.borderColor = "rgba(229,193,123,0.2)";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            <ChevronLeft size={14} /> Sebelumnya
          </button>
          <button
            onClick={next}
            style={navBtnStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#E5C17B";
              e.currentTarget.style.borderColor = "rgba(229,193,123,0.45)";
              e.currentTarget.style.transform = "translateX(2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(229,193,123,0.75)";
              e.currentTarget.style.borderColor = "rgba(229,193,123,0.2)";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            Selanjutnya <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}

const navBtnStyle = {
  display: "flex", alignItems: "center", gap: "0.3rem",
  fontFamily: "'Outfit', sans-serif",
  fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.06em",
  color: "rgba(229,193,123,0.75)",
  background: "rgba(20,19,26,0.75)",
  border: "1px solid rgba(229,193,123,0.2)",
  borderRadius: "0.5rem", padding: "0.55rem 1.1rem",
  cursor: "pointer",
  transition: "all 0.25s ease",
};
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
