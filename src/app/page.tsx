'use client';

import CountdownTimer from "@/components/CountdownTimer";
import VideoPlayer from "@/components/VideoPlayer";
import SnowfallBackground from "@/components/SnowfallBackground";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [isCountdownComplete, setIsCountdownComplete] = useState(false);
  const [secretCode, setSecretCode] = useState('');
  const [isCodeValid, setIsCodeValid] = useState(false);
  
  // Calculate tomorrow at 4:37 PM EST
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(16, 37, 0, 0); // 4:37 PM
  
  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const code = e.target.value;
    setSecretCode(code);
    // Case-insensitive check for SZN4
    setIsCodeValid(code.toUpperCase() === 'SZN4');
  };
  
  const handlePurchaseClick = () => {
    if (isCountdownComplete && isCodeValid) {
      window.open('https://account.venmo.com/payment-link?amount=250&note=CFE%20Season%204&recipients=Austin-marchese&txn=pay', '_blank');
    }
  };
  return (
    <div className="relative min-h-screen overflow-hidden bg-green-950">
      {/* Snowfall background */}
      <SnowfallBackground className="opacity-80" />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center min-h-screen px-4 pt-4 pb-6">
        {/* Top spacer */}
        <div className="flex-shrink-0 h-1"></div>
        
        {/* Content container */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-4 w-full">
          {/* Video Player */}
          <div className="w-full max-w-[280px] md:max-w-sm">
            <VideoPlayer 
              videoSrc="/CFE Preview.mp4"
              title="SZN4 Coming Soon"
              className="text-center"
            />
          </div>

          {/* Countdown Timer */}
          <div className="w-full">
            <CountdownTimer 
              targetDate={tomorrow} 
              onComplete={() => setIsCountdownComplete(true)}
              className="text-center" 
            />
            <p className="text-center text-cfe-gold text-sm font-semibold mt-2 tracking-wide">
              Tickets Live Tomorrow.
            </p>
          </div>

          {/* Secret Code Input */}
          <div className="w-full max-w-sm px-2">
            <input
              type="text"
              value={secretCode}
              onChange={handleCodeChange}
              disabled={!isCountdownComplete}
              placeholder={isCountdownComplete ? "Enter secret code" : "Code required once live"}
              className={`
                w-full px-4 py-3 text-center text-lg font-semibold rounded-full
                ${isCountdownComplete 
                  ? 'bg-cfe-gold/10 text-white placeholder-gray-300 border border-gray-600/50 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400/30' 
                  : 'bg-cfe-gold/10 text-cfe-gold border border-cfe-gold/30 cursor-not-allowed'
                }
                backdrop-blur-sm transition-all duration-300
              `}
            />
          </div>
        </div>

        {/* Bottom section for button */}
        <div className="flex-shrink-0 w-full">
          {/* Purchase Tickets Button - Only visible with valid code */}
          {isCountdownComplete && isCodeValid && (
            <div className="text-center w-full px-2">
              <Button
                size="lg"
                onClick={handlePurchaseClick}
                className="
                  px-8 py-3 text-lg font-bold uppercase tracking-wider
                  bg-gradient-to-r from-cfe-gold via-cfe-emerald to-cfe-gold hover:from-cfe-emerald hover:via-cfe-gold hover:to-cfe-emerald
                  text-white border-0 rounded-full
                  shadow-2xl shadow-cfe-gold/25 hover:shadow-cfe-emerald/25
                  hover:scale-105
                  transition-all duration-300
                  backdrop-blur-sm
                  relative overflow-hidden
                  group
                  w-full max-w-sm
                "
              >
                <span className="relative z-10">Purchase Tickets - $250</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
              
              <p className="mt-1 text-gray-300 text-xs">
                CFE Season 4 • Secure Venmo payment • Limited availability
              </p>
            </div>
          )}

          {/* Status message when countdown complete but no valid code */}
          {isCountdownComplete && !isCodeValid && (
            <div className="text-center w-full px-2">
              <p className="text-gray-40party of 0 text-sm">
                Enter the secret code to access tickets
              </p>
            </div>
          )}
        </div>

                {/* Subtle black sparkle effects */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-800 rounded-full animate-ping opacity-60" style={{ animationDelay: '0s', boxShadow: '0 0 6px rgba(64, 64, 64, 0.8)' }} />
                  <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-gray-900 rounded-full animate-ping opacity-40" style={{ animationDelay: '2s', boxShadow: '0 0 4px rgba(64, 64, 64, 0.6)' }} />
                  <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-gray-800 rounded-full animate-ping opacity-50" style={{ animationDelay: '4s', boxShadow: '0 0 5px rgba(64, 64, 64, 0.7)' }} />
                  <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-gray-900 rounded-full animate-ping opacity-30" style={{ animationDelay: '6s', boxShadow: '0 0 4px rgba(64, 64, 64, 0.5)' }} />
                </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-950/50 to-transparent pointer-events-none" />
    </div>
  );
}
