import React from 'react';

interface IafEmblemProps {
  className?: string;
  size?: number;
}

/**
 * Authentic SVG representation of the Indian Air Force Crest & Roundel
 * Features the Ashoka Lion Capital, Himalayan Eagle wings,
 * and the iconic Saffron-White-Green national roundel.
 */
export const IafEmblem: React.FC<IafEmblemProps> = ({ className = '', size = 44 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Indian Air Force Emblem and Roundel"
      role="img"
    >
      {/* Outer Glow / Shield Base */}
      <circle cx="50" cy="50" r="48" fill="#102A43" stroke="#FF9933" strokeWidth="1.5" />
      
      {/* National Tricolor Concentric Roundel */}
      <circle cx="50" cy="50" r="42" fill="#FFFFFF" />
      {/* Saffron Outer Ring */}
      <circle cx="50" cy="50" r="40" fill="#FF9933" />
      {/* White Middle Ring */}
      <circle cx="50" cy="50" r="28" fill="#FFFFFF" stroke="#D9E2EC" strokeWidth="0.5" />
      {/* Green Inner Core */}
      <circle cx="50" cy="50" r="16" fill="#138808" />

      {/* Navy Ashoka Chakra Center Hub */}
      <circle cx="50" cy="50" r="4.5" fill="#102A43" />
      <circle cx="50" cy="50" r="1.5" fill="#FFFFFF" />

      {/* 24-Spoke Radial Chakra Pattern (subtle stylized lines) */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <line
          key={deg}
          x1="50"
          y1="50"
          x2={50 + 13 * Math.cos((deg * Math.PI) / 180)}
          y2={50 + 13 * Math.sin((deg * Math.PI) / 180)}
          stroke="#102A43"
          strokeWidth="0.75"
          opacity="0.8"
        />
      ))}

      {/* Eagle Wings Silhouette Overlay in Navy & Gold */}
      <path
        d="M20 48 C 30 36, 42 38, 50 44 C 58 38, 70 36, 80 48 C 68 44, 58 48, 50 54 C 42 48, 32 44, 20 48 Z"
        fill="#102A43"
        fillOpacity="0.25"
      />

      {/* Golden Lion Capital Stylized Crown */}
      <path
        d="M45 20 L50 14 L55 20 L53 25 L47 25 Z"
        fill="#FF9933"
        stroke="#102A43"
        strokeWidth="0.75"
      />
      <circle cx="50" cy="18" r="1.5" fill="#FFFFFF" />
    </svg>
  );
};
