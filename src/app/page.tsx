'use client';

import CountdownTimer from "@/components/CountdownTimer";
import VideoPlayer from "@/components/VideoPlayer";
import AnimatedWaves from "@/components/AnimatedWaves";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [isCountdownComplete, setIsCountdownComplete] = useState(false);
  
  // Calculate tomorrow at 4:37 PM EST
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(16, 37, 0, 0); // 4:37 PM
  
  const handlePurchaseClick = () => {
    if (isCountdownComplete) {
      window.open('https://account.venmo.com/payment-link?amount=250&note=CFE%20Season%204&recipients=Austin-marchese&txn=pay', '_blank');
    }
  };
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-cfe-forest-green via-cfe-gold/30 to-cfe-emerald">
      {/* Animated background waves */}
      <AnimatedWaves className="opacity-30" />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-4 space-y-6">
        {/* Video Player */}
        <div className="w-full max-w-xs">
          <VideoPlayer 
            videoSrc="/CFE Preview.mp4"
            title="CFE Season 4 Preview"
            className="w-full"
          />
        </div>

        {/* Countdown Timer */}
        <div className="w-full">
          <CountdownTimer 
            targetDate={tomorrow} 
            onComplete={() => setIsCountdownComplete(true)}
            className="text-center" 
          />
        </div>

        {/* Purchase Tickets Button */}
        <div className="text-center w-full px-2">
          <Button
            size="lg"
            disabled={!isCountdownComplete}
            onClick={handlePurchaseClick}
            className={`
              px-8 py-4 text-lg font-bold uppercase tracking-wider
              ${isCountdownComplete 
                ? 'bg-gradient-to-r from-cfe-gold via-cfe-emerald to-cfe-gold hover:from-cfe-emerald hover:via-cfe-gold hover:to-cfe-emerald cursor-pointer' 
                : 'bg-gray-600 cursor-not-allowed opacity-50'
              }
              text-white border-0 rounded-full
              shadow-2xl ${isCountdownComplete ? 'shadow-cfe-gold/25 hover:shadow-cfe-emerald/25' : 'shadow-gray-500/25'}
              ${isCountdownComplete ? 'hover:scale-105' : ''}
              transition-all duration-300
              backdrop-blur-sm
              relative overflow-hidden
              group
              w-full max-w-sm
            `}
          >
            <span className="relative z-10">
              {isCountdownComplete ? 'Purchase Tickets - $250' : 'Tickets Available Soon'}
            </span>
            {isCountdownComplete && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            )}
          </Button>
          
          <p className="mt-2 text-gray-300 text-xs">
            {isCountdownComplete 
              ? 'CFE Season 4 • Secure Venmo payment • Limited availability'
              : 'Tickets will be available when countdown reaches zero'
            }
          </p>
        </div>

        {/* Subtle sparkle effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cfe-gold rounded-full animate-ping opacity-60" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-cfe-gradient-cyan rounded-full animate-ping opacity-40" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-cfe-gradient-purple rounded-full animate-ping opacity-50" style={{ animationDelay: '4s' }} />
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-cfe-gold rounded-full animate-ping opacity-30" style={{ animationDelay: '6s' }} />
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
    </div>
  );
}
