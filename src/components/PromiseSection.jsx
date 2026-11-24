import React, { useState, useEffect, useRef } from "react";
import { config } from "../data/storyData";
import { Mail, Sparkles } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export default function PromiseSection() {
  const { eyebrow, buttonLabel, cardTitle, messages } = config.promise;
  const [revealed, setRevealed] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);
  const [words, setWords] = useState([]);
  const [visibleCount, setVisibleCount] = useState(0);
  const intervalRef = useRef(null);
  const cardRef = useRef(null);
  const refSection = useReveal();

  function scrollToCard() {
    setTimeout(() => {
      cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 120);
  }

  function reveal() {
    setRevealed(true);
    animateWords(messages[0]);
    scrollToCard();
  }

  function animateWords(text) {
    const ws = text.split(" ");
    setWords(ws);
    setVisibleCount(0);
    clearInterval(intervalRef.current);
    let count = 0;
    intervalRef.current = setInterval(() => {
      count += 1;
      setVisibleCount(count);
      if (count >= ws.length) clearInterval(intervalRef.current);
    }, 60);
  }

  function nextMessage() {
    const next = (msgIndex + 1) % messages.length;
    setMsgIndex(next);
    animateWords(messages[next]);
    scrollToCard();
  }

  useEffect(() => () => clearInterval(intervalRef.current), []);

  return (
    <section
      ref={refSection}
      className="reveal"
      style={{ padding: "5rem 1.5rem 3rem", position: "relative", zIndex: 1, maxWidth: "680px", margin: "0 auto", textAlign: "center" }}
    >
      <p style={eyebrowStyle}>{eyebrow}</p>

      {/* Glowing Pill Button — Stays visible always */}
      <button
        onClick={() => {
          if (!revealed) {
            reveal();
          } else {
            nextMessage();
          }
        }}
        style={{
          display: "inline-flex", alignItems: "center", gap: "0.6rem",
          padding: "0.95rem 2.2rem",
          borderRadius: "9999px",
          background: "linear-gradient(135deg, rgba(225,29,72,0.45) 0%, rgba(244,114,182,0.25) 100%)",
          border: "1px solid rgba(244,114,182,0.55)",
          color: "#FAF6F5",
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.95rem", fontWeight: 600,
          cursor: "pointer",
          boxShadow: "0 0 24px rgba(225,29,72,0.35), 0 0 48px rgba(244,114,182,0.15)",
          marginTop: "1.2rem",
          marginBottom: revealed ? "1.5rem" : "0",
          animation: "glowPulse 2.8s infinite ease-in-out",
          transition: "transform 0.25s ease, box-shadow 0.25s ease, margin 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.04)";
          e.currentTarget.style.boxShadow = "0 0 32px rgba(225,29,72,0.6), 0 0 54px rgba(244,114,182,0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 0 24px rgba(225,29,72,0.35), 0 0 48px rgba(244,114,182,0.15)";
        }}
      >
        <Mail size={18} />
        {buttonLabel}
      </button>

      {revealed && (
        <div
          ref={cardRef}
          style={{
            marginTop: "0.5rem",
            background: "rgba(20, 19, 26, 0.85)",
            border: "1px solid rgba(229,193,123,0.25)",
            borderRadius: "1.25rem",
            padding: "2.2rem 1.85rem",
            boxShadow: "0 0 48px rgba(225,29,72,0.18), 0 12px 32px rgba(0,0,0,0.4)",
            textAlign: "left",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            animation: "unfoldLetter 0.55s cubic-bezier(0.16, 1, 0.3, 1) both",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
            <span style={{ fontSize: "1.1rem" }}>🤍</span>
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.05rem, 3vw, 1.35rem)", fontWeight: 700, color: "#FAF6F5" }}>
              {cardTitle}
            </h3>
          </div>

          {/* Great Vibes accent */}
          <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.45rem", color: "#E5C17B", marginBottom: "0.85rem" }}>
            Untuk pacarku tersayang...
          </p>

          {/* Word-by-word animated message */}
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.96rem", color: "rgba(250,246,245,0.8)", lineHeight: 1.9, minHeight: "5.5rem" }}>
            {words.map((w, i) => (
              <span
                key={`${msgIndex}-${i}`}
                style={{
                  display: "inline-block",
                  marginRight: "0.28em",
                  opacity: i < visibleCount ? 1 : 0,
                  transform: i < visibleCount ? "translateY(0)" : "translateY(6px)",
                  transition: "opacity 0.22s ease, transform 0.22s ease",
                }}
              >
                {w}
              </span>
            ))}
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "1.75rem", flexWrap: "wrap", gap: "1rem" }}>
            <button
              onClick={nextMessage}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.45rem",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em",
                color: "#E5C17B",
                background: "rgba(225,29,72,0.18)",
                border: "1px solid rgba(229,193,123,0.3)",
                borderRadius: "0.5rem",
                padding: "0.55rem 1.1rem",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(225,29,72,0.3)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(225,29,72,0.18)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Sparkles size={13} />
              Baca harapan lainnya ✨
            </button>

            {/* Indicator dots */}
            <div style={{ display: "flex", gap: "0.45rem", alignItems: "center" }}>
              {messages.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: i === msgIndex ? "16px" : "6px",
                    height: "6px",
                    borderRadius: "9999px",
                    background: i === msgIndex ? "#E5C17B" : "rgba(229,193,123,0.25)",
                    transition: "all 0.35s ease",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ marginTop: "5rem", paddingBottom: "2rem" }}>
        <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.4rem", color: "rgba(250,246,245,0.35)", letterSpacing: "0.08em" }}>
          {config.footer.text}
        </p>
      </footer>
    </section>
  );
}

const eyebrowStyle = {
  fontFamily: "'Outfit', sans-serif",
  fontSize: "0.68rem", letterSpacing: "0.22em",
  color: "#E11D48", fontWeight: 600, marginBottom: "1rem",
};
