'use client';

import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate?: Date;
  onComplete?: () => void;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  targetDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 15 * 60 * 60 * 1000 + 31 * 60 * 1000 + 29 * 1000), // Default: 2 days, 15 hours, 31 minutes, 29 seconds from now
  onComplete,
  className = ""
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const calculateTimeLeft = (): TimeLeft => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      
      // Countdown completed
      if (onComplete) {
        onComplete();
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Set initial time
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [targetDate, mounted, onComplete]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  if (!mounted) {
    // Return a placeholder to prevent hydration mismatch
    return (
      <div className={`flex items-center justify-center space-x-4 ${className}`}>
      <div className="text-center">
        <div className="text-xl md:text-3xl font-mono font-bold text-white digital-display flex justify-center items-center space-x-2">
          <span className="w-6 text-center">02</span>
          <span>:</span>
          <span className="w-6 text-center">15</span>
          <span>:</span>
          <span className="w-6 text-center">31</span>
          <span>:</span>
          <span className="w-6 text-center">29</span>
        </div>
      </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center space-x-4 ${className}`}>
      <div className="text-center">
        <div className="text-xl md:text-3xl font-mono font-bold text-white digital-display flex justify-center items-center space-x-2">
          <span className="w-6 text-center">{formatNumber(timeLeft.days)}</span>
          <span>:</span>
          <span className="w-6 text-center">{formatNumber(timeLeft.hours)}</span>
          <span>:</span>
          <span className="w-6 text-center">{formatNumber(timeLeft.minutes)}</span>
          <span>:</span>
          <span className="w-6 text-center">{formatNumber(timeLeft.seconds)}</span>
        </div>
      </div>
      
      <style jsx>{`
        .digital-display {
          text-shadow: 
            0 0 2px currentColor,
            0 0 4px currentColor,
            0 0 8px rgba(255, 215, 0, 0.3);
          filter: drop-shadow(0 0 4px rgba(255, 215, 0, 0.2));
        }
      `}</style>
    </div>
  );
};

export default CountdownTimer;
