import React, { useState } from "react";
import { config } from "../data/storyData";
import { Music, X } from "lucide-react";

export default function SpotifyPlayer() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "fixed", top: "1rem", right: "1rem", zIndex: 50 }}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle Spotify player"
        style={{
          display: "flex", alignItems: "center", gap: "0.45rem",
          padding: "0.5rem 1.15rem",
          borderRadius: "9999px",
          background: "rgba(11,11,14,0.92)",
          border: "1px solid #E5C17B",
          color: "#E5C17B",
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.78rem", fontWeight: 600,
          cursor: "pointer",
          letterSpacing: "0.04em",
          boxShadow: "0 2px 16px rgba(225,29,72,0.3)",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          animation: "floatGentle 4s ease-in-out infinite",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 4px 22px rgba(225,29,72,0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 2px 16px rgba(225,29,72,0.3)";
        }}
      >
        <Music size={14} style={{ animation: open ? "none" : "bounceY 1.8s infinite" }} />
        {open ? "Tutup Player" : "♫ Play Spotify"}
      </button>

      {open && (
        <div
          style={{
            marginTop: "0.5rem",
            borderRadius: "1rem",
            overflow: "hidden",
            border: "1px solid rgba(229,193,123,0.35)",
            boxShadow: "0 12px 36px rgba(0,0,0,0.6), 0 0 28px rgba(225,29,72,0.25)",
            background: "rgba(13,12,18,0.98)",
            animation: "fadeSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both",
          }}
        >
          <iframe
            src={config.spotifyEmbedUrl}
            width="300"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Player"
            style={{ display: "block" }}
          />
        </div>
      )}
    </div>
  );
}
