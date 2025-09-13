'use client';

import React from 'react';

interface AnimatedWavesProps {
  className?: string;
}

export const AnimatedWaves: React.FC<AnimatedWavesProps> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 214, 0, 0.4)" />
            <stop offset="50%" stopColor="rgba(255, 214, 0, 0.3)" />
            <stop offset="100%" stopColor="rgba(255, 214, 0, 0.2)" />
          </linearGradient>
          <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(34, 139, 34, 0.4)" />
            <stop offset="50%" stopColor="rgba(46, 125, 50, 0.3)" />
            <stop offset="100%" stopColor="rgba(76, 175, 80, 0.2)" />
          </linearGradient>
        </defs>
        
        {/* Gold wave */}
        <path
          d="M0,400 Q150,300 300,350 T600,320 T900,380 T1200,340 L1200,800 L0,800 Z"
          fill="url(#goldGradient)"
          className="animate-wave-1"
        />
        
        {/* Green wave */}
        <path
          d="M0,500 Q200,400 400,450 T800,420 T1200,480 L1200,800 L0,800 Z"
          fill="url(#greenGradient)"
          className="animate-wave-2"
        />
        
        {/* Additional flowing elements */}
        <circle cx="200" cy="300" r="3" fill="rgba(255, 214, 0, 0.8)" className="animate-float-1" />
        <circle cx="400" cy="250" r="2" fill="rgba(34, 139, 34, 0.8)" className="animate-float-2" />
        <circle cx="600" cy="350" r="4" fill="rgba(255, 214, 0, 0.6)" className="animate-float-3" />
        <circle cx="800" cy="280" r="2" fill="rgba(46, 125, 50, 0.7)" className="animate-float-1" />
        <circle cx="1000" cy="320" r="3" fill="rgba(255, 214, 0, 0.5)" className="animate-float-2" />
      </svg>
      
      <style jsx>{`
        @keyframes wave1 {
          0% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-25px) translateY(-10px); }
          100% { transform: translateX(0) translateY(0); }
        }
        
        @keyframes wave2 {
          0% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(25px) translateY(10px); }
          100% { transform: translateX(0) translateY(0); }
        }
        
        @keyframes float1 {
          0% { transform: translateY(0px) translateX(0px); opacity: 0.8; }
          33% { transform: translateY(-20px) translateX(10px); opacity: 1; }
          66% { transform: translateY(10px) translateX(-5px); opacity: 0.6; }
          100% { transform: translateY(0px) translateX(0px); opacity: 0.8; }
        }
        
        @keyframes float2 {
          0% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
          33% { transform: translateY(15px) translateX(-10px); opacity: 1; }
          66% { transform: translateY(-10px) translateX(8px); opacity: 0.8; }
          100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
        }
        
        @keyframes float3 {
          0% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.7; }
          50% { transform: translateY(-25px) translateX(15px) scale(1.2); opacity: 1; }
          100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.7; }
        }
        
        .animate-wave-1 {
          animation: wave1 8s ease-in-out infinite;
        }
        
        .animate-wave-2 {
          animation: wave2 10s ease-in-out infinite reverse;
        }
        
        .animate-float-1 {
          animation: float1 6s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float2 7s ease-in-out infinite;
        }
        
        .animate-float-3 {
          animation: float3 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedWaves;
