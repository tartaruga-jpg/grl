import React, { useState, useEffect, useRef } from "react";
import { config } from "../data/storyData";
import { X, Sparkles } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const TILTS = [-1.5, 1.5, -1, 1.5, -1.5, 1];

export default function PhotoGallery() {
  const [lightbox, setLightbox] = useState(null);
  const [grayIndex, setGrayIndex] = useState(-1);
  const { images } = config;
  const refHeader = useReveal();

  // Attach reveal to the photo grid container
  const trackRef = useRef(null);
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const makeVisible = () => {
      el.classList.add("visible");
      el.setAttribute("data-revealed", "true");
    };

    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight + 100) {
      makeVisible();
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          makeVisible();
          obs.unobserve(el);
        }
      },
      { threshold: 0.01, rootMargin: "60px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

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
    <section style={{ padding: "5rem 1.5rem", position: "relative", zIndex: 1, maxWidth: "960px", margin: "0 auto" }}>
      {/* Header */}
      <div ref={refHeader} className="reveal" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <p style={eyebrowStyle}>LITTLE MOMENTS</p>
        <h2 style={sectionTitleStyle}>Few Pictures of My Favorite Person</h2>
        <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.5rem", color: "rgba(250,246,245,0.6)", marginTop: "0.25rem" }}>
          sedikit foto favoritku dari kamu 🤍
        </p>
      </div>

      {/* Photo track — grid desktop, swipe mobile. ref + stagger for reveal */}
      <div
        ref={trackRef}
        className="photo-track stagger"
        style={{ gap: "1.25rem" }}
      >
        {images.map((img, i) => (
          <PhotoCard
            key={i}
            img={img}
            tilt={TILTS[i % TILTS.length]}
            isGray={grayIndex === i}
            onClick={() => setLightbox(img)}
          />
        ))}
      </div>

      {/* Lightbox */}
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
    <div className="photo-card-wrap">
      <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "none", border: "none", cursor: "pointer",
          padding: 0, width: "100%", display: "block",
          transform: hovered ? "rotate(0deg) translateY(-6px) scale(1.03)" : `rotate(${tilt}deg) translateY(0)`,
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div
          style={{
            background: "#F5EFE6",
            borderRadius: "0.35rem",
            padding: "0.65rem 0.65rem 2.2rem",
            boxShadow: hovered
              ? "0 16px 40px rgba(0,0,0,0.55), 0 0 24px rgba(225,29,72,0.2)"
              : "0 6px 22px rgba(0,0,0,0.4)",
            transition: "box-shadow 0.4s ease",
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
            fontSize: "1.05rem", color: "#4A2030",
            marginTop: "0.55rem", textAlign: "center", lineHeight: 1.3,
          }}>
            {img.caption}
          </p>
        </div>
      </button>
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
  fontSize: "clamp(1.8rem, 5.5vw, 2.8rem)", fontWeight: 700,
  color: "#FAF6F5", marginBottom: "0.25rem", lineHeight: 1.1,
};
