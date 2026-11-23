import React from "react";
import { config } from "../data/storyData";
import { useReveal } from "../hooks/useReveal";

export default function SpotlightSection() {
  const { eyebrow, title, headline, description, traits } = config.spotlight;
  const { src, caption } = config.portraitImage;
  const refHeader = useReveal();
  const refCard   = useReveal();

  return (
    <section style={{ padding: "5rem 1.5rem", position: "relative", zIndex: 1, maxWidth: "860px", margin: "0 auto" }}>
      {/* Header */}
      <div ref={refHeader} className="reveal" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <p style={eyebrowStyle}>{eyebrow}</p>
        <h2 style={sectionTitleStyle}>{title}</h2>
      </div>

      {/* Two-column card */}
      <div
        ref={refCard}
        className="reveal spotlight-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)",
          gap: "2.2rem",
          background: "rgba(20, 19, 26, 0.82)",
          border: "1px solid rgba(229,193,123,0.18)",
          borderRadius: "1.5rem",
          padding: "2.2rem",
          alignItems: "center",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.4), 0 0 30px rgba(225,29,72,0.08)",
        }}
      >
        {/* Left — floating polaroid */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="portrait-floating"
            style={{
              background: "#F5EFE6",
              borderRadius: "0.35rem",
              padding: "0.65rem 0.65rem 2.8rem",
              boxShadow: "0 10px 36px rgba(0,0,0,0.5), 0 0 20px rgba(225,29,72,0.12)",
              maxWidth: "220px", width: "100%",
            }}
          >
            <img
              src={src} alt={caption} loading="lazy"
              onError={(e) => { e.target.style.display="none"; e.target.nextSibling.style.display="flex"; }}
              style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", borderRadius: "0.15rem", display: "block" }}
            />
            <div style={{ display:"none", width:"100%", aspectRatio:"3/4", background:"rgba(225,29,72,0.07)", borderRadius:"0.15rem", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"0.4rem" }}>
              <span style={{ fontSize:"2rem" }}>🌸</span>
              <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:"0.65rem", color:"#E11D48" }}>W.jpeg</span>
            </div>
            {/* Romantic script caption */}
            <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.15rem", color: "#4A2030", marginTop: "0.6rem", textAlign: "center" }}>
              {caption}
            </p>
          </div>
        </div>

        {/* Right — description & interactive pills */}
        <div>
          <div style={{ display:"inline-flex", padding:"0.32rem 0.95rem", borderRadius:"9999px", background:"rgba(225,29,72,0.14)", border:"1px solid rgba(225,29,72,0.32)", marginBottom:"1rem" }}>
            <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:"0.7rem", letterSpacing:"0.1em", color:"#FB7185", fontWeight:600 }}>
              ✦ Everything I Adore About You ✦
            </span>
          </div>

          <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.25rem, 3.5vw, 1.85rem)", fontWeight: 700, color: "#FAF6F5", marginBottom: "0.35rem", lineHeight: 1.25 }}>
            {headline}
          </h3>

          {/* Great Vibes sub-quote */}
          <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.35rem", color: "#E5C17B", marginBottom: "0.9rem" }}>
            Selamanya milikku 🤍
          </p>

          <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:"0.88rem", color:"rgba(250,246,245,0.65)", lineHeight:1.85, marginBottom:"1.5rem" }}>
            {description}
          </p>

          {/* Traits 2×2 with interactive hover */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.65rem" }}>
            {traits.map((t, i) => (
              <div
                key={i}
                className="trait-pill"
                style={{
                  display:"flex", alignItems:"center", gap:"0.5rem",
                  padding:"0.6rem 0.95rem",
                  borderRadius:"0.65rem",
                  background:"rgba(225,29,72,0.1)",
                  border:"1px solid rgba(229,193,123,0.15)",
                  cursor:"default",
                }}
              >
                <span style={{ fontSize:"1.15rem" }}>{t.emoji}</span>
                <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:"0.78rem", color:"rgba(250,246,245,0.85)", fontWeight:500 }}>
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
  color:"#E11D48", fontWeight:600, marginBottom:"0.6rem",
};
const sectionTitleStyle = {
  fontFamily:"'Outfit',sans-serif",
  fontSize:"clamp(2rem, 6vw, 3rem)", fontWeight:700,
  color:"#FAF6F5", marginBottom: "0.5rem", lineHeight:1.1,
};
