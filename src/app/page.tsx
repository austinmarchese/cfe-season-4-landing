'use client';

import CountdownTimer from "@/components/CountdownTimer";
import VideoPlayer from "@/components/VideoPlayer";
import SnowfallBackground from "@/components/SnowfallBackground";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [secretCode, setSecretCode] = useState('');
  const [isCodeValid, setIsCodeValid] = useState(false);
  const [isPriceIncreased, setIsPriceIncreased] = useState(false);  
  // Calculate Tuesday (September 17th) at 11:59 PM EST for price increase
  const priceIncreaseDate = new Date();
  priceIncreaseDate.setFullYear(2025, 8, 16); // September 17, 2025 (Tuesday, month is 0-indexed)
  priceIncreaseDate.setHours(23, 59, 0, 0); // 11:59 PM EST
  
  // Check if current time is past price increase date
  const currentPrice = new Date() > priceIncreaseDate ? 270 : 250;
  const priceText = currentPrice === 270 ? "Live Now" : "Early Elf Special";
  
  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const code = e.target.value;
    setSecretCode(code);
    // Case-insensitive check for SZN4
    setIsCodeValid(code.toUpperCase() === 'SZN4');
  };
  
  const handlePurchaseClick = () => {
    if (isCodeValid) {
      const note = currentPrice === 270 ? 'CFE%20SZN%204%20Ticket' : 'Early%20Elf%20Special%20CFE%20Season%204';
      window.open(`https://venmo.com/Austin-marchese?txn=pay&amount=${currentPrice}&note=${note}`, '_blank');
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
              videoSrc="/CFE Recap.mp4"
              title="What did I miss?"
              className="text-center"
            />
          </div>

          {/* Countdown Timer */}
          <div className="w-full">
            {/* <CountdownTimer 
              targetDate={priceIncreaseDate} 
              onComplete={() => {}}
              className="text-center" 
            /> */}
             <p className="text-center text-cfe-gold text-sm font-semibold mt-2 tracking-wide">
               {currentPrice === 250 ? "Prices go up End of Day Tuesday." : "SZN4 Tickets are live"}
             </p>
          </div>

          {/* Secret Code Input */}
          <div className="w-full max-w-sm px-2">
            <input
              type="text"
              value={secretCode}
              onChange={handleCodeChange}
              placeholder="🔐 Enter secret code here"
              className="
                w-full px-4 py-4 text-center text-xl font-bold rounded-full
                bg-cfe-gold/20 text-white placeholder-gray-300 border-2 border-cfe-gold/70 focus:border-cfe-gold focus:outline-none focus:ring-4 focus:ring-cfe-gold/30 shadow-lg shadow-cfe-gold/20 hover:bg-cfe-gold/30
                backdrop-blur-sm transition-all duration-300 animate-pulse
              "
            />
            <div className="text-center mt-2">
              <p className="text-gray-300 text-xs">
                💡 Need the secret code? Check your invite!
              </p>
            </div>
          </div>
        </div>

        {/* Spacer between input and button */}
        <div className="h-6"></div>

        {/* Bottom section for button */}
        <div className="flex-shrink-0 w-full">
          {/* Purchase Tickets Button - Only visible with valid code */}
          {isCodeValid && (
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
                <span className="relative z-10">Purchase 2 Tickets - ${currentPrice}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
              
                <p className="mt-1 text-gray-300 text-xs">
                  CFE Season 4 • {priceText} • {currentPrice === 250 ? "Prices go up End of Day Tuesday" : "Its going to be different."}
                </p>
            </div>
          )}

          {/* Status message when no valid code */}
          {!isCodeValid && (
            <div className="text-center w-full px-2">
              <p className="text-gray-400 text-sm">
                Enter the secret code to get the chance to reserve your spot
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
