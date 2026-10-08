import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import heroVideo from '../assets/final.mp4';

export default function Hero({ onOpenQuote, onExploreServices }) {
  return (
    <section id="home" className="relative min-h-[88vh] sm:min-h-[92vh] lg:min-h-screen flex items-end pt-28 sm:pt-32 pb-8 sm:pb-12 lg:pb-14 px-4 sm:px-6 lg:px-12 overflow-hidden">
      
      {/* Background Video: Full bright looping video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
          src={heroVideo}
        />
        {/* Soft, light gradient at the base to ensure text clarity without dimming the video */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Hero Content - Clean without background box, positioned lower */}
        <div className="max-w-2xl text-left">
          
          {/* Main Headline */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-3.5 sm:mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">
            Logistics Built for Speed, <br className="hidden sm:inline" />
            Precision, and Scale
          </h1>

          {/* Subheading / Description */}
          <p className="text-xs sm:text-base lg:text-lg text-white/95 leading-relaxed font-medium mb-5 sm:mb-6 max-w-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            From air freight to last-mile delivery, we power global supply chains with reliable, data-driven logistics solutions
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 pt-1">
            {/* Primary CTA: Explore Services with Arrow Badge */}
            <a
              href="#services"
              onClick={(e) => {
                if (onExploreServices) {
                  e.preventDefault();
                  onExploreServices();
                }
              }}
              className="inline-flex items-center gap-2.5 sm:gap-3 pl-4 pr-1.5 py-1.5 sm:pl-6 sm:pr-2 sm:py-2 rounded-full bg-forest-moss hover:bg-forest-mossHover text-white text-xs sm:text-sm font-semibold shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-colors duration-200 cursor-pointer"
            >
              <span>Explore Services</span>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-forest-moss stroke-[2.5]" />
              </div>
            </a>

            {/* Secondary CTA: Quick Quote */}
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white text-xs sm:text-sm font-medium border border-white/30 backdrop-blur-md shadow-lg transition-colors duration-200 cursor-pointer"
            >
              <span>Instant Quote</span>
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}
