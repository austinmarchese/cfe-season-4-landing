'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  videoSrc?: string;
  title?: string;
  className?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoSrc = "/CFE Preview.mp4", // CFE Preview video
  title = "CFE Performance Video",
  className = ""
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    const videoElement = document.getElementById('cfe-video') as HTMLVideoElement;
    if (videoElement) {
      videoElement.play();
    }
  };

  return (
    <div className={`relative group ${className}`}>
      <div className="relative overflow-hidden rounded-xl bg-black/20 backdrop-blur-sm border border-white/10">
        {/* Video element or thumbnail */}
        {isPlaying ? (
          <video
            id="cfe-video"
            className="w-full aspect-[9/16]"
            controls
            autoPlay
            src={videoSrc}
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="relative aspect-[9/16] cursor-pointer" onClick={handlePlay}>
            <video
              className="w-full h-full object-cover"
              muted
              preload="metadata"
              src={`${videoSrc}#t=0.1`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <Button
                onClick={handlePlay}
                size="lg"
                className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cfe-gold/25"
              >
                <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
              </Button>
            </div>
          </div>
        )}
        
        {/* Video title overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h3 className="text-white font-semibold text-lg">{title}</h3>
        </div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cfe-gold/20 via-cfe-emerald/20 to-cfe-gold/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </div>
  );
};

export default VideoPlayer;
