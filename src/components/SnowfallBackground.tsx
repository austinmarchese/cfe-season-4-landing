'use client';

import React from 'react';

interface SnowfallBackgroundProps {
  className?: string;
}

export const SnowfallBackground: React.FC<SnowfallBackgroundProps> = ({ className = "" }) => {
  // Generate random snowflakes
  const snowflakes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 10,
    animationDuration: 10 + Math.random() * 20,
    size: 2 + Math.random() * 4,
    opacity: 0.3 + Math.random() * 0.7,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Dark green background */}
      <div className="absolute inset-0 bg-green-950" />
      
      {/* Snowflakes */}
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute animate-snowfall"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.animationDelay}s`,
            animationDuration: `${flake.animationDuration}s`,
            '--flake-size': `${flake.size}px`,
            '--flake-opacity': flake.opacity,
          } as React.CSSProperties & { [key: string]: string }}
        >
          <div
            className="bg-silver rounded-full"
            style={{
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              opacity: flake.opacity,
              background: 'radial-gradient(circle, #404040 0%, #303030 50%, #202020 100%)',
              boxShadow: '0 0 6px rgba(64, 64, 64, 0.8)',
            }}
          />
        </div>
      ))}
      
      <style jsx>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-100vh) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: var(--flake-opacity);
          }
          90% {
            opacity: var(--flake-opacity);
          }
          100% {
            transform: translateY(100vh) translateX(100px) rotate(360deg);
            opacity: 0;
          }
        }
        
        .animate-snowfall {
          animation: snowfall linear infinite;
        }
        
        /* Additional snowflake variations */
        .animate-snowfall:nth-child(3n) {
          animation-direction: reverse;
        }
        
        .animate-snowfall:nth-child(4n) {
          animation-timing-function: ease-in-out;
        }
        
        .animate-snowfall:nth-child(5n) {
          transform-origin: 50% 0%;
        }
      `}</style>
    </div>
  );
};

export default SnowfallBackground;
