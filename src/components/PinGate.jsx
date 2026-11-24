import React, { useRef, useState, useEffect } from "react";
import { config } from "../data/storyData";
import { Lock, Moon, Sun } from "lucide-react";

const BURST_PARTICLES = [
  { symbol: "💖", angle: 0, dist: 190, scale: 1.5, delay: 0.08 },
  { symbol: "💕", angle: 25, dist: 250, scale: 1.3, delay: 0.12 },
  { symbol: "🤍", angle: 50, dist: 210, scale: 1.4, delay: 0.05 },
  { symbol: "💗", angle: 75, dist: 270, scale: 1.6, delay: 0.18 },
  { symbol: "🩷", angle: 100, dist: 230, scale: 1.3, delay: 0.1 },
  { symbol: "✨", angle: 125, dist: 260, scale: 1.2, delay: 0.22 },
  { symbol: "💖", angle: 150, dist: 220, scale: 1.5, delay: 0.07 },
  { symbol: "💕", angle: 175, dist: 280, scale: 1.3, delay: 0.15 },
  { symbol: "🤍", angle: 200, dist: 240, scale: 1.4, delay: 0.09 },
  { symbol: "💗", angle: 225, dist: 270, scale: 1.6, delay: 0.2 },
  { symbol: "🩷", angle: 250, dist: 230, scale: 1.3, delay: 0.14 },
  { symbol: "✨", angle: 275, dist: 260, scale: 1.2, delay: 0.05 },
  { symbol: "💖", angle: 300, dist: 210, scale: 1.5, delay: 0.16 },
  { symbol: "💕", angle: 325, dist: 270, scale: 1.3, delay: 0.11 },
  { symbol: "🤍", angle: 350, dist: 230, scale: 1.4, delay: 0.08 },
  { symbol: "🌸", angle: 15, dist: 330, scale: 1.3, delay: 0.22 },
  { symbol: "💖", angle: 85, dist: 320, scale: 1.4, delay: 0.25 },
  { symbol: "💕", angle: 140, dist: 350, scale: 1.2, delay: 0.2 },
  { symbol: "🤍", angle: 210, dist: 310, scale: 1.5, delay: 0.18 },
  { symbol: "💗", angle: 265, dist: 340, scale: 1.3, delay: 0.24 },
  { symbol: "🩷", angle: 335, dist: 330, scale: 1.4, delay: 0.2 },
  { symbol: "✨", angle: 40, dist: 160, scale: 1.2, delay: 0.1 },
  { symbol: "💖", angle: 160, dist: 170, scale: 1.3, delay: 0.13 },
  { symbol: "💕", angle: 290, dist: 150, scale: 1.4, delay: 0.15 },
];

export default function PinGate({ onUnlock, theme, onToggleTheme }) {
  const [digits, setDigits] = useState(Array(6).fill(""));
  const [shake, setShake] = useState(false);
  const [error, setError] = useState("");
  const [burst, setBurst] = useState(false);
  const refs = useRef([]);
  const nextTheme = theme === "day" ? "night" : "day";
  const ThemeIcon = nextTheme === "night" ? Moon : Sun;

  useEffect(() => { refs.current[0]?.focus(); }, []);

  function handleChange(i, val) {
    if (!/^\d?$/.test(val)) return;
    const next = [...digits];
    next[i] = val;
    setDigits(next);
    setError("");
    if (val && i < 5) refs.current[i + 1]?.focus();
    if (val && i === 5) {
      const code = [...next].join("");
      if (code === config.secretPin) {
        setBurst(true);
        setTimeout(onUnlock, 1850);
      } else {
        triggerError();
      }
    }
  }

  function handleKeyDown(i, e) {
    if (e.key === "Backspace") {
      if (digits[i]) { const n = [...digits]; n[i] = ""; setDigits(n); }
      else if (i > 0) refs.current[i - 1]?.focus();
    }
  }

  function handlePaste(e) {
    e.preventDefault();
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const next = Array(6).fill("");
    text.split("").forEach((c, idx) => { next[idx] = c; });
    setDigits(next);
    if (text.length === 6) {
      if (text === config.secretPin) {
        setBurst(true);
        setTimeout(onUnlock, 1850);
      } else {
        triggerError();
      }
    }
  }

  function triggerError() {
    setShake(true);
    setError("Eits salah sayang~ coba ingat tanggal jadian kita 🤍");
    setDigits(Array(6).fill(""));
    setTimeout(() => { setShake(false); refs.current[0]?.focus(); }, 600);
  }

  return (
    <div
      className="pin-gate"
      style={{
        minHeight: "100dvh",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexDirection: "column", gap: "2rem",
        background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(225,29,72,0.18) 0%, #0B0B0E 70%)",
        padding: "5rem 1.5rem 1.5rem",
        position: "relative", zIndex: 10,
      }}
    >
      <button
        type="button"
        className="pin-theme-toggle"
        onClick={onToggleTheme}
        aria-label={`Ganti ke mode ${nextTheme === "night" ? "" : ""}`}
        aria-pressed={theme === "night"}
      >
        <ThemeIcon size={16} strokeWidth={1.5} />
        <span>{nextTheme === "night" ? "" : ""}</span>
      </button>

      {/* Grand Opening Heart Bloom & Particle Explosion */}
      {burst && (
        <div
          className="pin-gate-success"
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "radial-gradient(circle at center, rgba(225,29,72,0.35) 0%, rgba(11,11,14,0.96) 75%)",
            zIndex: 100,
            pointerEvents: "none",
            animation: "pageFadeIn 0.35s ease forwards",
          }}
        >
          {/* 360-degree Bursting Hearts */}
          {BURST_PARTICLES.map((p, i) => {
            const rad = (p.angle * Math.PI) / 180;
            const tx = Math.round(Math.cos(rad) * p.dist);
            const ty = Math.round(Math.sin(rad) * p.dist);
            return (
              <span
                key={i}
                style={{
                  position: "absolute",
                  fontSize: "clamp(1.6rem, 5vw, 2.5rem)",
                  "--tx": `${tx}px`,
                  "--ty": `${ty}px`,
                  "--scale": p.scale,
                  animation: `heartParticleBurst 1.6s ${p.delay}s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                  opacity: 0,
                  filter: "drop-shadow(0 0 12px rgba(244,114,182,0.8))",
                  userSelect: "none",
                }}
              >
                {p.symbol}
              </span>
            );
          })}

          {/* Center Giant Blooming Heart */}
          <div
            style={{
              fontSize: "clamp(5rem, 16vw, 8rem)",
              animation: "heartBloom 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              filter: "drop-shadow(0 0 40px rgba(225,29,72,1)) drop-shadow(0 0 85px rgba(244,114,182,0.9))",
              userSelect: "none",
            }}
          >
            💖
          </div>

          {/* Romantic Welcome Message */}
          <p
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(2.2rem, 7vw, 3.6rem)",
              color: "#E5C17B",
              marginTop: "1.25rem",
              textAlign: "center",
              textShadow: "0 0 24px rgba(225,29,72,0.9), 0 0 40px rgba(229,193,123,0.7)",
              animation: "welcomeTextIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) both",
              userSelect: "none",
            }}
          >
            Welcome, my love 🤍
          </p>

          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.76rem",
              letterSpacing: "0.25em",
              color: "#FB7185",
              fontWeight: 600,
              marginTop: "0.45rem",
              animation: "welcomeTextIn 1.5s 0.2s cubic-bezier(0.16, 1, 0.3, 1) both",
              userSelect: "none",
            }}
          >
            ✦ ACCESS GRANTED • WELCOME HOME ✦
          </p>
        </div>
      )}

      {/* Main Lock Screen Card */}
      <div
        className="pin-gate-card"
        style={{
          textAlign: "center", maxWidth: "420px", width: "100%",
          animation: "fadeSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
          opacity: burst ? 0 : 1,
          transform: burst ? "scale(0.95)" : "scale(1)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
          <div
            className="pin-lock-badge"
            style={{
              width: "58px", height: "58px", borderRadius: "50%",
              background: "rgba(225,29,72,0.18)",
              border: "1px solid rgba(225,29,72,0.45)",
              display: "flex", alignItems: "center", justifyContent: "center",
              animation: "glowPulse 2.4s infinite",
            }}
          >
            <Lock size={24} color="#E5C17B" />
          </div>
        </div>

        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.72rem", letterSpacing: "0.22em", color: "#E11D48", fontWeight: 600, marginBottom: "0.5rem" }}>
          PRIVATE ACCESS
        </p>

        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 7vw, 3.2rem)", fontWeight: 700, color: "#FAF6F5", lineHeight: 1.1, marginBottom: "0.3rem" }}>
          Our Secret Date
        </h1>

        <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(1.4rem, 4.5vw, 1.9rem)", color: "#E5C17B", marginBottom: "1.5rem" }}>
          special day that only we know  
        </p>

        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.88rem", color: "rgba(250,246,245,0.6)", marginBottom: "2rem", lineHeight: 1.6 }}>
          Enter our 6-digit anniversary date (DDMMYY)
        </p>

        <div
          className="pin-digit-group"
          onPaste={handlePaste}
          style={{
            display: "flex", gap: "0.6rem", justifyContent: "center",
            animation: shake ? "shakeX 0.5s ease" : "none",
          }}
        >
          {digits.map((d, i) => (
            <input
              key={i}
              className="pin-digit"
              ref={(el) => (refs.current[i] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={d}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              style={{
                width: "clamp(42px, 12vw, 54px)",
                height: "clamp(50px, 14vw, 62px)",
                textAlign: "center",
                fontSize: "1.45rem", fontWeight: 700,
                fontFamily: "'Outfit', sans-serif",
                color: "#E5C17B",
                background: "rgba(20, 19, 26, 0.85)",
                border: `1.5px solid ${d ? "#E5C17B" : "rgba(229,193,123,0.25)"}`,
                borderRadius: "0.65rem",
                outline: "none",
                caretColor: "#E5C17B",
                transition: "all 0.25s ease",
                boxShadow: d ? "0 0 16px rgba(229,193,123,0.3)" : "none",
              }}
            />
          ))}
        </div>

        {error && (
          <p style={{ marginTop: "1.2rem", color: "#FB7185", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.85rem", lineHeight: 1.5, animation: "fadeSlideIn 0.25s ease" }}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
