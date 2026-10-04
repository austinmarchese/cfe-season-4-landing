'use client';

import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

const UNITS = [
  { label: 'Days', ms: 86_400_000, mod: Infinity },
  { label: 'Hrs', ms: 3_600_000, mod: 24 },
  { label: 'Min', ms: 60_000, mod: 60 },
  { label: 'Sec', ms: 1_000, mod: 60 },
] as const;

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, className = "" }) => {
  // null until mounted so server and client render the same placeholder
  const [msLeft, setMsLeft] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setMsLeft(Math.max(0, targetDate.getTime() - Date.now()));
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`flex items-start justify-center gap-1 ${className}`}>
      {UNITS.map((unit, i) => {
        const value = msLeft === null ? null : Math.floor(msLeft / unit.ms) % unit.mod;
        return (
          <React.Fragment key={unit.label}>
            {i > 0 && <span className="font-mono text-lg font-bold leading-none text-cfe-gold/50">:</span>}
            <div className="flex w-8 flex-col items-center">
              <span className="font-mono text-lg font-bold leading-none tabular-nums text-white [text-shadow:0_0_12px_rgba(255,214,0,0.35)]">
                {value === null ? '--' : value.toString().padStart(2, '0')}
              </span>
              <span className="mt-0.5 text-[8px] uppercase tracking-[0.15em] text-cfe-gold/70">{unit.label}</span>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CountdownTimer;
