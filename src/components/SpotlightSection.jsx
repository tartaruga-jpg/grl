import React from "react";
import { config } from "../data/storyData";
import { useReveal } from "../hooks/useReveal";

export default function SpotlightSection() {
  const { eyebrow, title, headline, description, traits } = config.spotlight;
  const { src, caption } = config.portraitImage;
  const refSection = useReveal();

  return (
    <section
      ref={refSection}
      className="reveal"
      style={{ padding: "4rem 1.25rem", position: "relative", zIndex: 1, maxWidth: "860px", margin: "0 auto" }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <p style={eyebrowStyle}>{eyebrow}</p>
        <h2 style={sectionTitleStyle}>{title}</h2>
      </div>

      {/* Two-column card — compact and well-proportioned */}
      <div
        className="spotlight-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 0.85fr) minmax(0, 1.45fr)",
          gap: "1.75rem",
          background: "rgba(20, 19, 26, 0.82)",
          border: "1px solid rgba(229,193,123,0.18)",
          borderRadius: "1.5rem",
          padding: "1.75rem",
          alignItems: "center",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.4), 0 0 30px rgba(225,29,72,0.08)",
        }}
      >
        {/* Left — compact floating polaroid */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div
            className="portrait-floating"
            style={{
              background: "#F5EFE6",
              borderRadius: "0.3rem",
              padding: "0.45rem 0.45rem 1.6rem",
              boxShadow: "0 8px 28px rgba(0,0,0,0.5), 0 0 16px rgba(225,29,72,0.12)",
              maxWidth: "clamp(130px, 30vw, 165px)",
              width: "100%",
            }}
          >
            <img
              src={src} alt={caption} loading="lazy"
              onError={(e) => { e.target.style.display="none"; e.target.nextSibling.style.display="flex"; }}
              style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", borderRadius: "0.15rem", display: "block" }}
            />
            <div style={{ display:"none", width:"100%", aspectRatio:"3/4", background:"rgba(225,29,72,0.07)", borderRadius:"0.15rem", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"0.3rem" }}>
              <span style={{ fontSize:"1.6rem" }}>🌸</span>
              <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:"0.62rem", color:"#E11D48" }}>W.jpeg</span>
            </div>
            {/* Romantic script caption */}
            <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(0.95rem, 2.4vw, 1.15rem)", color: "#4A2030", marginTop: "0.35rem", textAlign: "center", lineHeight: 1.2 }}>
              {caption}
            </p>
          </div>
        </div>

        {/* Right — description & interactive pills */}
        <div>
          <div style={{ display:"inline-flex", padding:"0.28rem 0.85rem", borderRadius:"9999px", background:"rgba(225,29,72,0.14)", border:"1px solid rgba(225,29,72,0.32)", marginBottom:"0.75rem" }}>
            <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:"0.68rem", letterSpacing:"0.08em", color:"#FB7185", fontWeight:600 }}>
              ✦ Everything I Adore About You ✦
            </span>
          </div>

          <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.15rem, 3.2vw, 1.65rem)", fontWeight: 700, color: "#FAF6F5", marginBottom: "0.25rem", lineHeight: 1.25 }}>
            {headline}
          </h3>

          {/* Great Vibes sub-quote */}
          <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.25rem", color: "#E5C17B", marginBottom: "0.75rem" }}>
            Selamanya milikku 🤍
          </p>

          <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:"0.84rem", color:"rgba(250,246,245,0.7)", lineHeight:1.7, marginBottom:"1.1rem" }}>
            {description}
          </p>

          {/* Traits 2×2 with interactive hover */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.55rem" }}>
            {traits.map((t, i) => (
              <div
                key={i}
                className="trait-pill"
                style={{
                  display:"flex", alignItems:"center", gap:"0.45rem",
                  padding:"0.5rem 0.8rem",
                  borderRadius:"0.6rem",
                  background:"rgba(225,29,72,0.1)",
                  border:"1px solid rgba(229,193,123,0.15)",
                  cursor:"default",
                }}
              >
                <span style={{ fontSize:"1.05rem" }}>{t.emoji}</span>
                <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:"0.75rem", color:"rgba(250,246,245,0.88)", fontWeight:500 }}>
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const eyebrowStyle = {
  fontFamily:"'Outfit',sans-serif",
  fontSize:"0.68rem", letterSpacing:"0.22em",
  color:"#E11D48", fontWeight:600, marginBottom:"0.5rem",
};
const sectionTitleStyle = {
  fontFamily:"'Outfit',sans-serif",
  fontSize:"clamp(1.8rem, 5.5vw, 2.7rem)", fontWeight:700,
  color:"#FAF6F5", marginBottom: "0.4rem", lineHeight:1.1,
};
