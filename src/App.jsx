import React, { useState } from "react";
import FloatingHearts from "./components/FloatingHearts";
import SpotifyPlayer from "./components/SpotifyPlayer";
import PinGate from "./components/PinGate";
import HeroSection from "./components/HeroSection";
import StoryTimeline from "./components/StoryTimeline";
import JourneySection from "./components/JourneySection";
import PhotoGallery from "./components/PhotoGallery";
import SpotlightSection from "./components/SpotlightSection";
import PromiseSection from "./components/PromiseSection";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div
      style={{
        minHeight: "100dvh",
        background: "linear-gradient(180deg, #0B0B0E 0%, #131218 50%, #0D0B10 100%)",
        position: "relative",
      }}
    >
      {/* Ambient glowing orb top */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed", top: "-80px", left: "50%",
          width: "680px", height: "420px",
          background: "radial-gradient(ellipse at center, rgba(225,29,72,0.12) 0%, transparent 70%)",
          pointerEvents: "none", zIndex: 0,
          animation: "ambientBreathe 8s ease-in-out infinite",
        }}
      />

      {/* Ambient glowing orb bottom */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed", bottom: "-100px", right: "10%",
          width: "500px", height: "350px",
          background: "radial-gradient(ellipse at center, rgba(244,114,182,0.06) 0%, transparent 70%)",
          pointerEvents: "none", zIndex: 0,
        }}
      />

      <FloatingHearts />

      {!unlocked ? (
        <PinGate onUnlock={() => setUnlocked(true)} />
      ) : (
        <>
          <SpotifyPlayer />
          <main className="app-main-entrance">
            <HeroSection />
            <StoryTimeline />
            <JourneySection />
            <PhotoGallery />
            <SpotlightSection />
            <PromiseSection />
          </main>
        </>
      )}
    </div>
  );
}
