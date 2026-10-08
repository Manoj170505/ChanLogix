import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Package, Play, Pause, Compass, Sparkles } from 'lucide-react';
import backgroundVideo from '../assets/Cardboard_box_traveling_right_1080p_20261005004826.mp4';

export default function ScrollVideoBackground() {
  const videoRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [mode, setMode] = useState('scroll'); // 'scroll' | 'autoplay'
  const [videoDuration, setVideoDuration] = useState(0);
  const [isScrubbingIndicatorVisible, setIsScrubbingIndicatorVisible] = useState(true);

  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const animationFrameRef = useRef(null);

  // Handle Video Metadata loaded
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const dur = videoRef.current.duration || 1;
      setVideoDuration(dur);
      setIsVideoLoaded(true);
      // Ensure starting at 0 for scroll sync
      videoRef.current.currentTime = 0.001;
    }
  };

  // Smooth scroll interpolation loop
  useEffect(() => {
    if (mode !== 'scroll') return;

    const updateVideoScrub = () => {
      const video = videoRef.current;
      if (video && video.duration && !isNaN(video.duration)) {
        // Linear interpolation for buttery smooth scrubbing
        const diff = targetProgressRef.current - currentProgressRef.current;
        currentProgressRef.current += diff * 0.12;

        const targetTime = currentProgressRef.current * video.duration;

        // Apply when difference is meaningful and not currently seeking
        if (Math.abs(video.currentTime - targetTime) > 0.03 && !video.seeking) {
          try {
            if (typeof video.fastSeek === 'function') {
              video.fastSeek(targetTime);
            } else {
              video.currentTime = targetTime;
            }
          } catch {
            video.currentTime = targetTime;
          }
        }

        setScrollProgress(Math.round(currentProgressRef.current * 100));
      }

      animationFrameRef.current = requestAnimationFrame(updateVideoScrub);
    };

    animationFrameRef.current = requestAnimationFrame(updateVideoScrub);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mode, isVideoLoaded]);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(Math.max(window.scrollY / totalScroll, 0), 1);
        targetProgressRef.current = progress;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle mode toggle (Scroll vs Ambient Autoplay)
  const toggleMode = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (mode === 'scroll') {
      setMode('autoplay');
      video.loop = true;
      video.play().catch(() => {});
    } else {
      setMode('scroll');
      video.loop = false;
      video.pause();
      // Snap back to scroll position
      if (video.duration) {
        video.currentTime = targetProgressRef.current * video.duration;
      }
    }
  }, [mode]);

  return (
    <>
      {/* Fixed Fullscreen Background Video Container */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* HTML5 Video Layer */}
        <video
          ref={videoRef}
          src={backgroundVideo}
          muted
          playsInline
          autoPlay={false}
          preload="auto"
          onLoadedMetadata={handleLoadedMetadata}
          className="w-full h-full object-cover object-center filter brightness-[1.03] contrast-[1.04] transition-opacity duration-700"
          style={{
            opacity: isVideoLoaded ? 0.72 : 0,
            transform: 'scale(1.02)', // Avoid sub-pixel edge seams
          }}
        />

        {/* Ambient Gradient Overlays for Brand Harmony and Perfect Contrast */}
        {/* Soft radial glow matching ChanLogix Forest Moss and Sage */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAF7]/75 via-[#F8FAF7]/55 to-[#F8FAF7]/80 backdrop-blur-[1px]" />
        
        {/* Diagonal brand tint for subtle depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-forest-moss/[0.04] via-transparent to-sage-green/[0.05] mix-blend-multiply" />
        
        {/* Subtle grid pattern overlay for modern logistics feel */}
        <div className="absolute inset-0 radial-grid-light opacity-40 mix-blend-overlay" />
      </div>

      {/* Interactive Floating Transit & Scroll Indicator */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto">
        {isScrubbingIndicatorVisible && (
          <div className="group flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-white/90 backdrop-blur-md border border-[#AFAEAE]/40 shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Package icon with pulse animation */}
            <div className="w-8 h-8 rounded-xl bg-forest-moss/10 flex items-center justify-center text-forest-moss">
              <Package className="w-4 h-4 animate-bounce" />
            </div>

            {/* Status Text & Progress Bar */}
            <div className="flex flex-col pr-1">
              <div className="flex items-center justify-between gap-3 text-[11px] font-semibold text-[#151615]">
                <span className="flex items-center gap-1 text-[#478501]">
                  <Sparkles className="w-3 h-3 text-forest-moss" />
                  {mode === 'scroll' ? 'Scroll-Driven Transit' : 'Ambient Playback'}
                </span>
                <span className="font-mono text-[10px] text-gray-500">
                  {scrollProgress}%
                </span>
              </div>
              
              {/* Mini Transit Progress Track */}
              <div className="w-28 sm:w-36 h-1.5 bg-gray-200/80 rounded-full mt-1 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-forest-moss to-sage-green rounded-full transition-all duration-150"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>
            </div>

            {/* Mode Switch Button */}
            <button
              onClick={toggleMode}
              title={mode === 'scroll' ? 'Switch to Continuous Autoplay' : 'Switch to Scroll Sync'}
              className="p-1.5 rounded-lg text-gray-600 hover:text-black hover:bg-gray-100 transition-colors"
              aria-label="Toggle background animation mode"
            >
              {mode === 'scroll' ? (
                <Play className="w-3.5 h-3.5 text-forest-moss" />
              ) : (
                <Pause className="w-3.5 h-3.5 text-forest-moss" />
              )}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
