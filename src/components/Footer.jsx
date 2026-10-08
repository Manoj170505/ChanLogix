import React, { useState } from 'react';
import { 
  FaInstagram, 
  FaLinkedinIn, 
  FaXTwitter 
} from 'react-icons/fa6';
import { FiMail, FiArrowUpRight, FiChevronDown, FiCheck } from 'react-icons/fi';
export default function Footer({ onOpenQuote, showToast }) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: 'en-gb',
    name: 'English',
    flag: '🇬🇧'
  });

  const languageOptions = [
    { code: 'en-gb', name: 'English (UK)', flag: '🇬🇧' },
    { code: 'en-in', name: 'English (India)', flag: '🇮🇳' },
    { code: 'en-us', name: 'English (US)', flag: '🇺🇸' },
    { code: 'ar-ae', name: 'Arabic (UAE)', flag: '🇦🇪' },
    { code: 'de-de', name: 'Deutsch', flag: '🇩🇪' },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      if (showToast) {
        showToast({
          type: 'error',
          title: 'Invalid Email',
          message: 'Please provide a valid business email address.'
        });
      }
      return;
    }

    setIsSubscribed(true);
    if (showToast) {
      showToast({
        type: 'success',
        title: 'Subscribed to Logistics Briefings',
        message: 'You have been registered for global tariff & trade updates.'
      });
    }

    setTimeout(() => {
      setEmail('');
      setIsSubscribed(false);
    }, 4500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0B0D0B] text-white pt-16 pb-10 overflow-hidden font-sans border-t border-white/10 selection:bg-forest-moss selection:text-white">
      {/* Subtle organic ambient glow */}
      <div 
        className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-forest-moss/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-[#75953E]/10 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* TOP ROW: 5 Columns Grid matching the provided design */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12">
          
          {/* Column 1: Left Disclaimer / Value Proposition with Vertical Bar */}
          <div className="lg:col-span-4 flex items-start">
            <div className="border-l border-white/50 pl-4 py-0.5">
              <p className="text-[13px] sm:text-[13.5px] text-white/80 leading-relaxed font-normal">
                ChanLogix delivers high-precision international express courier, ocean/air cargo forwarding, and intelligent customs clearance connecting over 150 countries.
              </p>
              <div className="mt-3">
                <a 
                  href="#contact" 
                  className="text-xs text-white/60 hover:text-white underline underline-offset-4 transition-colors font-medium"
                >
                  Chennai & Tiruchengode Hubs
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="lg:col-span-2">
            <h4 className="text-[15px] font-normal text-white mb-4 tracking-normal">
              Company
            </h4>
            <ul className="space-y-2.5 text-[13px] text-white/70">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#network" className="hover:text-white transition-colors">
                  Global Network
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-white transition-colors">
                  Insights & Scale
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Operating Hubs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-2">
            <h4 className="text-[15px] font-normal text-white mb-4 tracking-normal">
              Services
            </h4>
            <ul className="space-y-2.5 text-[13px] text-white/70">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Express Courier
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Air & Ocean Cargo
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Smart Warehousing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Customs Clearance
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: SIGN UP AND SAVE */}
          <div className="lg:col-span-4">
            <h4 className="text-[13px] sm:text-[14px] font-medium tracking-[0.08em] uppercase text-white mb-2">
              SIGN UP AND SAVE
            </h4>
            <p className="text-[12px] sm:text-[12.5px] text-white/70 leading-relaxed mb-4">
              Subscribe to get special offers, global tariff updates, and priority freight notifications.
            </p>

            {/* Newsletter Input Box styled cleanly with border and diagonal arrow */}
            <form onSubmit={handleSubscribe} className="relative">
              <div className="border border-white/70 hover:border-white focus-within:border-white transition-colors px-3.5 py-2.5 flex items-center justify-between gap-2.5 bg-black/20">
                <FiMail className="w-4 h-4 text-white/80 shrink-0" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your mail"
                  disabled={isSubscribed}
                  className="bg-transparent text-white placeholder:text-white/55 text-[13px] focus:outline-none flex-1 w-full min-w-0"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="text-white hover:text-white/80 p-0.5 transition-transform hover:scale-110 active:scale-95 cursor-pointer shrink-0"
                >
                  {isSubscribed ? (
                    <FiCheck className="w-4 h-4 text-[#85C83E]" />
                  ) : (
                    <FiArrowUpRight className="w-5 h-5 text-white stroke-[2.2]" />
                  )}
                </button>
              </div>

              {isSubscribed && (
                <p className="text-[11px] text-[#85C83E] mt-1.5 font-medium animate-fadeIn">
                  ✓ Successfully subscribed to briefings.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* ========================================================= */}
        {/* CRISP HORIZONTAL DIVIDER */}
        {/* ========================================================= */}
        <div className="border-t border-white/20 w-full mb-6 sm:mb-8" />

        {/* ========================================================= */}
        {/* BOTTOM ROW: Language Selector | Copyright | Social Icons */}
        {/* ========================================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-xs text-white/70">
          
          {/* Left: Language & Region Selector Box */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              className="border border-white/40 hover:border-white/80 px-3 py-1.5 rounded-none flex items-center gap-2 text-xs text-white bg-transparent transition-colors cursor-pointer"
              aria-expanded={languageMenuOpen}
              aria-label="Select language"
            >
              <span className="text-sm leading-none">{selectedLanguage.flag}</span>
              <span className="text-[12px] font-normal">{selectedLanguage.name}</span>
              <FiChevronDown className={`w-3.5 h-3.5 text-white/80 transition-transform ${languageMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Language Menu Dropdown */}
            {languageMenuOpen && (
              <div className="absolute bottom-full mb-2 left-0 w-44 bg-[#141814] border border-white/20 shadow-xl py-1 z-30">
                {languageOptions.map((opt) => (
                  <button
                    key={opt.code}
                    type="button"
                    onClick={() => {
                      setSelectedLanguage(opt);
                      setLanguageMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center gap-2.5 transition-colors cursor-pointer ${
                      selectedLanguage.code === opt.code
                        ? 'bg-forest-moss/40 text-white font-medium'
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span>{opt.flag}</span>
                    <span>{opt.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Center: Copyright */}
          <div className="text-[12px] text-white/80 text-center font-normal">
            © 2026 ChanLogix | Logistics Beyond Boundaries
          </div>

          {/* Right: Social Media Icons matching design */}
          <div className="flex items-center gap-5 text-white/85">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Instagram"
              className="hover:text-white hover:scale-110 transition-all text-sm sm:text-base"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="X (formerly Twitter)"
              className="hover:text-white hover:scale-110 transition-all text-sm sm:text-base"
            >
              <FaXTwitter className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn"
              className="hover:text-white hover:scale-110 transition-all text-sm sm:text-base"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
