import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import brandLogo from '../assets/chanlogix-brand-logo.png';

export default function Navbar({ onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Insights', href: '#insights' },
  ];

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 w-full px-3 sm:px-6 lg:px-8 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* ========================================================= */}
        {/* LEFT: Frosted Pill Capsules (Home, About, Services, Insights) */}
        {/* ========================================================= */}
        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-5 py-2 rounded-full bg-white/70 hover:bg-white/95 backdrop-blur-md border border-white/60 text-[#151615] hover:text-forest-moss text-sm font-medium shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* ========================================================= */}
        {/* CENTER: ChanLogix Brand Logo Cut Directly as a Pill (No Border) */}
        {/* ========================================================= */}
        <a 
          href="#home" 
          className="rounded-full overflow-hidden inline-flex items-center justify-center h-14 sm:h-16 md:h-[68px] shadow-[0_6px_24px_rgba(0,0,0,0.25)] hover:opacity-95 transition-all"
        >
          <img 
            src={brandLogo} 
            alt="ChanLogix - Logistics Beyond Boundaries" 
            className="h-full w-auto object-cover rounded-full"
          />
        </a>

        {/* ========================================================= */}
        {/* RIGHT: Website Focused Forest Moss CTA Button */}
        {/* ========================================================= */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* "Ask for a quote" CTA Button */}
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2.5 pl-5 pr-2 py-1.5 sm:pl-6 sm:pr-2.5 sm:py-2 rounded-full bg-forest-moss hover:bg-forest-mossHover text-white text-xs sm:text-sm font-semibold shadow-[0_4px_16px_rgba(71,133,1,0.28)] hover:shadow-[0_6px_20px_rgba(71,133,1,0.38)] transition-colors duration-200 cursor-pointer"
          >
            <span className="whitespace-nowrap tracking-tight">Ask for a quote</span>
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-forest-moss stroke-[2.5]" />
            </div>
          </button>

          {/* Mobile Drawer Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/70 backdrop-blur-md border border-white/60 text-[#151615] hover:bg-white/95 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* ========================================================= */}
      {/* MOBILE EXPANDED MENU DRAWER */}
      {/* ========================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-sm mx-auto mt-3 rounded-3xl bg-white/95 backdrop-blur-2xl border border-gray-200/80 p-5 shadow-2xl animate-fadeIn pointer-events-auto space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div className="rounded-full overflow-hidden inline-flex items-center justify-center h-12 sm:h-14 shadow-sm">
              <img 
                src={brandLogo} 
                alt="ChanLogix Logo" 
                className="h-full w-auto object-cover rounded-full" 
              />
            </div>
            
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 rounded-full text-gray-500 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-1">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-[#151615] hover:text-forest-moss hover:bg-forest-mossLight transition-colors duration-150"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-gray-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-forest-moss hover:bg-forest-mossHover text-white text-sm font-bold shadow-md shadow-forest-moss/20 transition-colors duration-200"
            >
              <span>Ask for a quote</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
