import React from "react";
import { config } from "../data/storyData";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const { badge, headingLine1, headingLine2, message, signOff, scrollCta } = config.hero;

  function scrollToStory() {
    document.getElementById("chapter-story")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      style={{
        minHeight: "100dvh",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "5rem 1.5rem 4rem",
        position: "relative", zIndex: 1,
        background: "radial-gradient(ellipse 65% 50% at 50% 42%, rgba(225,29,72,0.12) 0%, transparent 70%)",
      }}
    >
      {/* Badge with smooth entrance */}
      <div
        style={{
          display: "inline-flex", alignItems: "center",
          padding: "0.38rem 1.2rem",
          borderRadius: "9999px",
          border: "1px solid rgba(229,193,123,0.35)",
          background: "rgba(225,29,72,0.12)",
          marginBottom: "2rem",
          animation: "heroBadgeIn 0.8s 0.15s cubic-bezier(0.16, 1, 0.3, 1) both",
          boxShadow: "0 0 20px rgba(225,29,72,0.15)",
        }}
      >
        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.72rem", letterSpacing: "0.14em", color: "#E5C17B", fontWeight: 500 }}>
          {badge}
        </span>
      </div>

      {/* Headline */}
      <h1
        style={{
          fontFamily: "'Outfit', sans-serif",
          lineHeight: 1.1,
          marginBottom: "2rem",
          maxWidth: "700px",
        }}
      >
        <span
          style={{
            display: "block",
            fontSize: "clamp(1.8rem, 5.5vw, 3.2rem)",
            fontWeight: 500,
            color: "#FAF6F5",
            letterSpacing: "-0.01em",
            animation: "heroTextIn 0.8s 0.3s cubic-bezier(0.16, 1, 0.3, 1) both",
          }}
        >
          {headingLine1}
        </span>
        {/* Romantic Latin Script Accent — with safe padding & line-height so letters never get cut off */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.35rem",
            marginTop: "0.2rem",
            overflow: "visible",
            animation: "heroRomanticPop 1s 0.45s cubic-bezier(0.16, 1, 0.3, 1) both",
          }}
        >
          <span
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(3.2rem, 10vw, 5.8rem)",
              background: "linear-gradient(135deg, #E5C17B 0%, #FAF6F5 50%, #FB7185 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 1.45,
              padding: "0.1em 0.25em",
              display: "inline-block",
              overflow: "visible",
              filter: "drop-shadow(0 0 18px rgba(225,29,72,0.25))",
            }}
          >
            Sayangku
          </span>
          <span
            aria-hidden="true"
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontSize: "clamp(1.6rem, 4.8vw, 2.5rem)",
              filter: "drop-shadow(0 0 14px rgba(251,113,133,0.7))",
              userSelect: "none",
              animation: "bounceY 2.5s infinite ease-in-out",
              marginBottom: "0.2em",
            }}
          >
            🤍
          </span>
        </div>
      </h1>

      {/* Top Divider */}
      <Divider delay="0.6s" />

      {/* Opening Message */}
      <p
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "clamp(0.92rem, 2.2vw, 1.08rem)",
          color: "rgba(250,246,245,0.78)",
          lineHeight: 1.9,
          maxWidth: "580px",
          margin: "1.5rem 0",
          animation: "heroTextIn 0.85s 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        }}
      >
        {message}
      </p>

      {/* Bottom Divider */}
      <Divider delay="0.8s" />

      {/* Handwritten Sign-off */}
      <p
        style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: "clamp(1.6rem, 4.8vw, 2.4rem)",
          color: "#E5C17B",
          marginTop: "1.5rem",
          letterSpacing: "0.02em",
          animation: "heroRomanticPop 0.9s 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
          filter: "drop-shadow(0 0 10px rgba(229,193,123,0.3))",
        }}
      >
        {signOff}
      </p>

      {/* Scroll CTA Button */}
      <button
        onClick={scrollToStory}
        style={{
          marginTop: "3rem",
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.72rem", letterSpacing: "0.18em", fontWeight: 600,
          color: "rgba(229,193,123,0.75)",
          background: "transparent", border: "none", cursor: "pointer",
          padding: "0.5rem 0",
          transition: "color 0.25s, transform 0.25s",
          animation: "heroBadgeIn 0.8s 1.05s cubic-bezier(0.16, 1, 0.3, 1) both",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#E5C17B";
          e.currentTarget.style.transform = "translateY(2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "rgba(229,193,123,0.75)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {scrollCta}
        <ChevronDown size={14} style={{ animation: "bounceY 2s infinite" }} />
      </button>
    </section>
  );
}

function Divider({ delay = "0.5s" }) {
  return (
    <div
      style={{
        display: "flex", alignItems: "center", width: "100%", maxWidth: "420px", gap: "0.75rem",
        animation: `heroLineExpand 0.7s ${delay} cubic-bezier(0.16, 1, 0.3, 1) both`,
        transformOrigin: "center",
      }}
    >
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(229,193,123,0.4), transparent)" }} />
      <span style={{ color: "#E5C17B", fontSize: "0.75rem", opacity: 0.7 }}>✦</span>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(229,193,123,0.4), transparent)" }} />
    </div>
  );
}
