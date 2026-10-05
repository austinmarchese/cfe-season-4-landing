'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface UnlockOverlayProps {
  code: string;
  onContinue: () => void;
}

// Gold sparks radiating out from the logo
const SPARKS = Array.from({ length: 24 }, (_, i) => ({
  angle: i * 15,
  distance: 110 + (i % 3) * 35,
  size: 3 + (i % 4),
  delay: (i % 5) * 0.04,
}));

export const UnlockOverlay: React.FC<UnlockOverlayProps> = ({ code, onContinue }) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="unlock-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#03140c]/85 px-6 backdrop-blur-md animate-in fade-in duration-500"
    >
      <div className="flex w-full max-w-sm flex-col items-center text-center">
        {/* Logo + spark burst */}
        <div className="relative flex h-40 w-40 items-center justify-center">
          {SPARKS.map((spark, i) => (
            <span
              key={i}
              className="spark absolute left-1/2 top-1/2 rounded-full bg-cfe-gold"
              style={{
                width: spark.size,
                height: spark.size,
                animationDelay: `${0.35 + spark.delay}s`,
                '--angle': `${spark.angle}deg`,
                '--distance': `${spark.distance}px`,
              } as React.CSSProperties}
            />
          ))}
          <div className="logo-pop relative">
            <div className="absolute inset-0 rounded-full bg-cfe-gold/30 blur-2xl glow" />
            <Image src="/logo.png" alt="CFE" width={128} height={128} priority className="relative" />
          </div>
        </div>

        <p className="rise mt-6 text-[11px] font-semibold uppercase tracking-[0.35em] text-cfe-gold/80" style={{ animationDelay: '0.6s' }}>
          You made the list
        </p>
        <h2 id="unlock-title" className="rise mt-2 font-display text-3xl font-semibold text-cfe-gold" style={{ animationDelay: '0.75s' }}>
          Congratulations
        </h2>
        <p className="rise mt-3 text-sm text-white/75" style={{ animationDelay: '0.9s' }}>
          Your invite link came with your secret code.
        </p>

        {/* Code revealed letter by letter */}
        <div className="rise mt-5 flex gap-1.5 rounded-full border-2 border-cfe-gold/70 bg-cfe-gold/10 px-6 py-3 shadow-lg shadow-cfe-gold/20" style={{ animationDelay: '1s' }}>
          {code.split('').map((char, i) => (
            <span
              key={i}
              className="letter font-mono text-2xl font-bold text-white [text-shadow:0_0_12px_rgba(255,214,0,0.5)]"
              style={{ animationDelay: `${1.15 + i * 0.12}s` }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Wrapper carries the animation: styled-jsx only scopes classes on DOM elements, not components */}
        <div className="rise mt-8 w-full" style={{ animationDelay: `${1.35 + code.length * 0.12}s` }}>
        <Button
          size="lg"
          onClick={onContinue}
          autoFocus
          className="
            group relative h-12 w-full overflow-hidden rounded-full border-0
            bg-gradient-to-r from-[#b8860b] via-cfe-gold to-[#b8860b]
            text-sm font-bold uppercase tracking-wider text-[#03140c]
            shadow-2xl shadow-cfe-gold/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-cfe-gold/50
          "
        >
          <span className="relative z-10">Continue</span>
          <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
        </Button>
        </div>
      </div>

      <style jsx>{`
        .logo-pop {
          animation: logo-pop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .glow {
          animation: glow 2.4s ease-in-out 0.7s infinite;
        }
        .spark {
          opacity: 0;
          animation: spark 1.1s ease-out both;
        }
        .rise {
          animation: rise 0.6s ease-out both;
        }
        .letter {
          animation: letter 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        @keyframes logo-pop {
          from { transform: scale(0.2) rotate(-20deg); opacity: 0; }
          to { transform: scale(1) rotate(0); opacity: 1; }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.15); }
        }
        @keyframes spark {
          0% { opacity: 1; transform: translate(-50%, -50%) rotate(var(--angle)) translateY(0) scale(0.4); }
          70% { opacity: 1; }
          100% { opacity: 0; transform: translate(-50%, -50%) rotate(var(--angle)) translateY(calc(-1 * var(--distance))) scale(1); }
        }
        @keyframes rise {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes letter {
          from { opacity: 0; transform: translateY(10px) scale(0.6); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .logo-pop, .glow, .spark, .rise, .letter {
            animation: none;
            opacity: 1;
          }
          .spark {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default UnlockOverlay;
