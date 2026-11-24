import React from "react";

const STAR_DELAYS = [0, 3, 6, 9, 12, 15];

export default function ShootingStars() {
  return (
    <div className="shooting-stars" aria-hidden="true">
      {STAR_DELAYS.map((delay, index) => (
        <span
          key={delay}
          className="shooting-star"
          style={{
            "--star-delay": `${delay}s`,
            "--star-top": `${index * 12}%`,
          }}
        />
      ))}
    </div>
  );
}
