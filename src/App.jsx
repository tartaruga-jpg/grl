import React, { useState } from "react";
import FloatingHearts from "./components/FloatingHearts";
import ShootingStars from "./components/ShootingStars";
import PinGate from "./components/PinGate";
import HeroSection from "./components/HeroSection";
import StoryTimeline from "./components/StoryTimeline";
import JourneySection from "./components/JourneySection";
import PhotoGallery from "./components/PhotoGallery";
import SpotlightSection from "./components/SpotlightSection";
import PromiseSection from "./components/PromiseSection";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [theme, setTheme] = useState("day");

  return (
    <div
      className="app-shell"
      data-theme={theme}
      style={{
        minHeight: "100dvh",
        position: "relative",
      }}
    >
      {/* Ambient glowing orb top */}
      <div
        className="ambient-orb ambient-orb-top"
        aria-hidden="true"
        style={{
          position: "fixed", top: "-80px", left: "50%",
          width: "680px", height: "420px",
          background: "radial-gradient(ellipse at center, rgba(225,29,72,0.25) 0%, transparent 70%)",
          pointerEvents: "none", zIndex: 0,
          animation: "ambientBreathe 8s ease-in-out infinite",
        }}
      />

      {/* Ambient glowing orb bottom */}
      <div
        className="ambient-orb ambient-orb-bottom"
        aria-hidden="true"
        style={{
          position: "fixed", bottom: "-100px", right: "10%",
          width: "500px", height: "350px",
          background: "radial-gradient(ellipse at center, rgba(190,18,60,0.18) 0%, transparent 70%)",
          pointerEvents: "none", zIndex: 0,
        }}
      />

      <ShootingStars />
      <FloatingHearts />

      {!unlocked ? (
        <PinGate
          onUnlock={() => setUnlocked(true)}
          theme={theme}
          onToggleTheme={() => setTheme((current) => current === "day" ? "night" : "day")}
        />
      ) : (
        <main className="app-main-entrance">
          <HeroSection
            theme={theme}
            onToggleTheme={() => setTheme((current) => current === "day" ? "night" : "day")}
          />
          <StoryTimeline />
          <JourneySection />
          <PhotoGallery />
          <SpotlightSection />
          <PromiseSection />
        </main>
      )}
    </div>
  );
}
