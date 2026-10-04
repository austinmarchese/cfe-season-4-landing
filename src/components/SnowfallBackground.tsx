'use client';

import React, { useEffect, useState } from 'react';

interface SnowfallBackgroundProps {
  className?: string;
}

interface Flake {
  id: number;
  left: number;
  delay: number;
  duration: number;
  drift: number;
  size: number;
  opacity: number;
}

export const SnowfallBackground: React.FC<SnowfallBackgroundProps> = ({ className = "" }) => {
  // Generated after mount: Math.random during render causes hydration mismatches
  const [flakes, setFlakes] = useState<Flake[]>([]);

  useEffect(() => {
    setFlakes(
      Array.from({ length: 70 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: -Math.random() * 25,
        duration: 14 + Math.random() * 18,
        drift: -40 + Math.random() * 80,
        size: 1.5 + Math.random() * 3.5,
        opacity: 0.25 + Math.random() * 0.6,
      }))
    );
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {/* Deep evergreen with a warm gold glow up top */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#0f3d26_0%,_#062417_45%,_#03140c_100%)]" />
      <div className="absolute -top-40 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-cfe-gold/10 blur-3xl" />

      {flakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute -top-4 rounded-full bg-white animate-snowfall"
          style={{
            left: `${flake.left}%`,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
            boxShadow: '0 0 6px rgba(255, 255, 255, 0.6)',
            '--drift': `${flake.drift}px`,
          } as React.CSSProperties}
        />
      ))}

      <style jsx>{`
        @keyframes snowfall {
          from { transform: translate3d(0, -5vh, 0); }
          to { transform: translate3d(var(--drift), 105vh, 0); }
        }
        .animate-snowfall {
          animation: snowfall linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SnowfallBackground;
