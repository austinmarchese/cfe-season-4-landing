import React from 'react';

interface CFELogoProps {
  size?: number;
  className?: string;
}

export const CFELogo: React.FC<CFELogoProps> = ({ size = 120, className = "" }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-2xl"
      >
        {/* Outer rings */}
        <circle cx="100" cy="100" r="98" fill="url(#goldGradient)" />
        <circle cx="100" cy="100" r="94" fill="url(#forestGreenGradient)" />
        <circle cx="100" cy="100" r="90" fill="url(#goldGradient)" />
        <circle cx="100" cy="100" r="88" fill="url(#forestGreenGradient)" />
        <circle cx="100" cy="100" r="84" fill="url(#goldGradient)" />
        <circle cx="100" cy="100" r="82" fill="url(#forestGreenGradient)" />
        
        {/* Main background */}
        <circle cx="100" cy="100" r="75" fill="url(#mainGreenGradient)" />
        
        {/* Top ornament */}
        <g transform="translate(100, 45)">
          <path
            d="M0,-8 C-4,-8 -8,-4 -8,0 C-8,4 -4,8 0,8 C4,8 8,4 8,0 C8,-4 4,-8 0,-8 Z M0,-12 L-3,-18 L0,-15 L3,-18 Z"
            fill="url(#goldGradient)"
          />
          <path
            d="M-12,-2 C-15,-5 -18,-2 -15,1 C-12,4 -9,1 -12,-2 Z M12,-2 C15,-5 18,-2 15,1 C12,4 9,1 12,-2 Z"
            fill="url(#goldGradient)"
          />
        </g>
        
        {/* CFE Letters */}
        <g transform="translate(100, 100)" fill="url(#goldGradient)">
          {/* C */}
          <path
            d="M-45,-15 C-50,-15 -55,-10 -55,-5 L-55,5 C-55,10 -50,15 -45,15 L-35,15 L-35,10 L-45,10 C-47,10 -50,7 -50,5 L-50,-5 C-50,-7 -47,-10 -45,-10 L-35,-10 L-35,-15 Z"
            className="font-bold"
          />
          {/* F */}
          <path
            d="M-25,-15 L-25,15 L-20,15 L-20,2 L-10,2 L-10,-3 L-20,-3 L-20,-10 L-8,-10 L-8,-15 Z"
            className="font-bold"
          />
          {/* E */}
          <path
            d="M5,-15 L5,15 L25,15 L25,10 L10,10 L10,2 L22,2 L22,-3 L10,-3 L10,-10 L25,-10 L25,-15 Z"
            className="font-bold"
          />
        </g>
        
        {/* Bottom ornament */}
        <g transform="translate(100, 155)">
          <path
            d="M0,8 C-4,8 -8,4 -8,0 C-8,-4 -4,-8 0,-8 C4,-8 8,-4 8,0 C8,4 4,8 0,8 Z M0,12 L-3,18 L0,15 L3,18 Z"
            fill="url(#goldGradient)"
          />
          <path
            d="M-12,2 C-15,5 -18,2 -15,-1 C-12,-4 -9,-1 -12,2 Z M12,2 C15,5 18,2 15,-1 C12,-4 9,-1 12,2 Z"
            fill="url(#goldGradient)"
          />
        </g>
        
        {/* Gradients */}
        <defs>
          <radialGradient id="goldGradient" cx="0.5" cy="0.3" r="0.7">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#B8860B" />
            <stop offset="100%" stopColor="#8B6914" />
          </radialGradient>
          <radialGradient id="forestGreenGradient" cx="0.5" cy="0.3" r="0.7">
            <stop offset="0%" stopColor="#228B22" />
            <stop offset="50%" stopColor="#006400" />
            <stop offset="100%" stopColor="#013220" />
          </radialGradient>
          <radialGradient id="mainGreenGradient" cx="0.5" cy="0.3" r="0.8">
            <stop offset="0%" stopColor="#2E8B57" />
            <stop offset="50%" stopColor="#1F5F3F" />
            <stop offset="100%" stopColor="#0F2F1F" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default CFELogo;
