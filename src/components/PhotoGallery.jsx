import React, { useState, useEffect } from "react";
import { config } from "../data/storyData";
import { X } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const TILTS = [-1.5, 1.5, -1, 1.5, -1.5, 1];

export default function PhotoGallery() {
  const [lightbox, setLightbox] = useState(null);
  const [grayIndex, setGrayIndex] = useState(-1);
  const { images } = config;
  const refSection = useReveal();

  // Duplicate images for a completely seamless 10-second right-moving loop
  const loopImages = [...images, ...images];

  // 6-second cycling grayscale
  useEffect(() => {
    let idx = 0;
    const id = setInterval(() => {
      setGrayIndex(idx % images.length);
      idx += 1;
      setTimeout(() => setGrayIndex(-1), 1200);
    }, 6000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section
      ref={refSection}
      className="reveal"
      style={{ padding: "4.5rem 0", position: "relative", zIndex: 1, maxWidth: "100%", margin: "0 auto", overflow: "hidden" }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "1.75rem", padding: "0 1.5rem" }}>
        <p style={eyebrowStyle}>LITTLE MOMENTS</p>
        <h2 style={sectionTitleStyle}>Few Pictures of My Favorite Person</h2>
        <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.45rem", color: "rgba(250,246,245,0.6)", marginTop: "0.2rem" }}>
          sedikit foto favoritku dari kamu 🤍
        </p>
      </div>

      {/* Desktop View (>= 768px): Clean static 3-column polaroid grid */}
      <div className="photo-desktop-grid">
        {images.map((img, i) => (
          <div key={`desktop-${i}`} style={{ width: "100%" }}>
            <PhotoCard
              img={img}
              tilt={TILTS[i % TILTS.length]}
              isGray={grayIndex === i}
              onClick={() => setLightbox(img)}
            />
          </div>
        ))}
      </div>

      {/* Mobile View (< 768px): Infinite right-moving seamless marquee (10s duration) */}
      <div className="photo-mobile-marquee marquee-container">
        <div className="marquee-track">
          {loopImages.map((img, i) => {
            const originalIndex = i % images.length;
            const tilt = TILTS[originalIndex % TILTS.length];
            const isGray = grayIndex === originalIndex;

            return (
              <div key={`mobile-${i}`} className="marquee-card-wrap">
                <PhotoCard
                  img={img}
                  tilt={tilt}
                  isGray={isGray}
                  onClick={() => setLightbox(img)}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 200,
            background: "rgba(5,4,8,0.95)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "1rem",
            animation: "pageFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both",
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute", top: "1.2rem", right: "1.2rem",
              background: "rgba(20,19,26,0.85)", border: "1px solid rgba(229,193,123,0.35)",
              borderRadius: "50%", width: "2.6rem", height: "2.6rem",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "#E5C17B",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <X size={18} />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw", maxHeight: "90vh", textAlign: "center",
              animation: "unfoldLetter 0.4s cubic-bezier(0.16, 1, 0.3, 1) both",
            }}
          >
            <img
              src={lightbox.src}
              alt={lightbox.caption}
              style={{ maxWidth: "100%", maxHeight: "80vh", borderRadius: "0.5rem", objectFit: "contain", boxShadow: "0 12px 40px rgba(0,0,0,0.6)" }}
            />
            <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.5rem", color: "#E5C17B", marginTop: "0.85rem" }}>
              {lightbox.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

function PhotoCard({ img, tilt, isGray, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "none", border: "none", cursor: "pointer",
        padding: 0, width: "100%", display: "block",
        transform: hovered ? "rotate(0deg) translateY(-6px) scale(1.04)" : `rotate(${tilt}deg) translateY(0)`,
        transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div
        style={{
          background: "#F5EFE6",
          borderRadius: "0.35rem",
          padding: "0.55rem 0.55rem 2rem",
          boxShadow: hovered
            ? "0 16px 40px rgba(0,0,0,0.55), 0 0 24px rgba(225,29,72,0.2)"
            : "0 6px 20px rgba(0,0,0,0.4)",
          transition: "box-shadow 0.35s ease",
        }}
      >
        <img
          src={img.src}
          alt={img.caption}
          loading="lazy"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
          style={{
            width: "100%", aspectRatio: "1 / 1",
            objectFit: "cover", borderRadius: "0.15rem",
            display: "block",
            filter: isGray ? "grayscale(100%)" : "grayscale(0%)",
            transition: "filter 1.2s ease-in-out",
          }}
        />
        {/* Fallback placeholder */}
        <div style={{
          display: "none", width: "100%", aspectRatio: "1 / 1",
          background: "rgba(225,29,72,0.07)",
          borderRadius: "0.15rem",
          alignItems: "center", justifyContent: "center",
          flexDirection: "column", gap: "0.3rem",
        }}>
          <span style={{ fontSize: "1.5rem" }}>📷</span>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", color: "#E11D48" }}>
            Tambah foto
          </span>
        </div>

        <p style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: "1rem", color: "#4A2030",
          marginTop: "0.45rem", textAlign: "center", lineHeight: 1.3,
        }}>
          {img.caption}
        </p>
      </div>
    </button>
  );
}

const eyebrowStyle = {
  fontFamily: "'Outfit', sans-serif",
  fontSize: "0.68rem", letterSpacing: "0.22em",
  color: "#E11D48", fontWeight: 600, marginBottom: "0.5rem",
};
const sectionTitleStyle = {
  fontFamily: "'Outfit', sans-serif",
  fontSize: "clamp(1.8rem, 5.5vw, 2.8rem)", fontWeight: 700,
  color: "#FAF6F5", marginBottom: "0.2rem", lineHeight: 1.1,
};
