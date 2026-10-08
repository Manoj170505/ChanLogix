import React, { useState } from 'react';
import { 
  Ship, 
  Plane, 
  Truck, 
  Warehouse, 
  Workflow, 
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';

export default function ServicesSection({ onSelectServiceForQuote }) {
  // First service is expanded by default as requested
  const [activeId, setActiveId] = useState('ocean');

  const services = [
    {
      id: 'ocean',
      number: '01',
      title: 'Ocean Freight',
      tag: 'Maritime Logistics',
      icon: Ship,
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=80',
      description: 'Comprehensive Full Container Load (FCL) and Less Than Container Load (LCL) maritime shipping across all premier international sea lanes with guaranteed carrier allocations.',
      features: ['FCL & LCL Consolidation', 'Temperature Controlled Reefer', 'Pre-Arrival Port EDI Filing']
    },
    {
      id: 'air',
      number: '02',
      title: 'Air Freight',
      tag: 'Express Aviation',
      icon: Plane,
      image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80',
      description: 'Priority next-flight-out dispatch and scheduled cargo charters engineered for time-sensitive industrial freight, urgent electronics, and international courier shipments.',
      features: ['Priority Airline Charters', 'Same-Day Airside Transfer', 'Global Express Courier SLA']
    },
    {
      id: 'road',
      number: '03',
      title: 'Road Transport',
      tag: 'Overland Fleet',
      icon: Truck,
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
      description: 'Extensive linehaul trucking network providing reliable domestic transport, container drayage, and dedicated regional fleets tracked via 24/7 active GPS telematics.',
      features: ['24/7 Real-Time GPS Tracking', 'Dedicated Intermodal Linehaul', 'Door-to-Door Delivery Fleet']
    },
    {
      id: 'warehousing',
      number: '04',
      title: 'Warehousing',
      tag: 'Smart 3PL Storage',
      icon: Warehouse,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      description: 'High-density automated storage and strategic bonded distribution hubs equipped with smart RFID scanning, cross-dock sortation, and cloud inventory control.',
      features: ['Automated Inventory Cloud', 'Zero-Demurrage Cross Dock', 'Bonded Regional Gateways']
    },
    {
      id: 'supply-chain',
      number: '05',
      title: 'Supply Chain',
      tag: 'End-to-End Logistics',
      icon: Workflow,
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
      description: 'Turnkey supply chain orchestration uniting multi-tier vendor management, cross-border customs clearance, lane optimization, and predictive freight analytics.',
      features: ['Predictive Lane Analytics', 'Integrated Customs Brokerage', 'Complete Turnkey Visibility']
    }
  ];

  return (
    <section id="services" className="relative bg-[#F4F6F8] text-[#151615] py-20 sm:py-24 lg:py-28 border-b border-[#AFAEAE]/30 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* SECTION HEADER: Small Top-Left Label + Big Centered Title */}
        {/* ========================================================= */}
        <div className="relative mb-12 sm:mb-16">
          {/* Top-Left Discreet Label */}
          <div className="sm:absolute left-0 top-1 text-xs font-bold text-gray-500 uppercase tracking-widest leading-tight mb-2 sm:mb-0">
            Provide <br /> Services
          </div>

          {/* Centered Grand Title */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#151615] tracking-tight leading-[1.08] uppercase">
              WE PROVIDING THE <br />
              <span className="text-forest-moss">CARGO SERVICES</span>
            </h2>
          </div>
        </div>

        {/* ========================================================= */}
        {/* INTERACTIVE EXPANDABLE CARDS DECK (Hover to Expand)       */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 lg:h-[560px] items-stretch">
          {services.map((service) => {
            const isExpanded = activeId === service.id;
            const IconComponent = service.icon;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                onClick={() => setActiveId(service.id)}
                className={`relative rounded-[28px] sm:rounded-[32px] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border border-white/20 shadow-lg group ${
                  isExpanded 
                    ? 'lg:flex-[3.5] min-h-[460px] lg:min-h-0' 
                    : 'lg:flex-1 min-h-[90px] lg:min-h-0'
                }`}
              >
                {/* Background Image with Dark Contrast Gradients */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover object-center filter brightness-95"
                />
                
                {/* Ambient Dark Gradients for Crisp Legibility */}
                <div className={`absolute inset-0 transition-opacity duration-700 ${
                  isExpanded 
                    ? 'bg-gradient-to-t from-black/90 via-black/50 to-black/35' 
                    : 'bg-gradient-to-t from-black/85 via-black/45 to-black/30 group-hover:from-black/75'
                }`} />

                {/* --------------------------------------------------- */}
                {/* CARD CONTENT                                        */}
                {/* --------------------------------------------------- */}
                <div className="relative z-10 w-full h-full p-5 sm:p-7 md:p-8 flex flex-col justify-between overflow-hidden">
                  
                  {/* Top Bar: Number + Tag Badge + Icon */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-white/70">
                        {service.number}
                      </span>
                      {isExpanded && (
                        <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-semibold text-white tracking-wider uppercase border border-white/20 animate-fade-after-expand">
                          {service.tag}
                        </span>
                      )}
                    </div>

                    <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                      isExpanded 
                        ? 'bg-forest-moss text-white shadow-md' 
                        : 'bg-white/20 text-white backdrop-blur-md group-hover:bg-white group-hover:text-forest-moss'
                    }`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Content: Title + Animated Details After Card Completely Expands */}
                  <div className="mt-auto">
                    
                    {/* Title: Smoothly zooms up as card expands */}
                    <h3 className={`font-black text-white tracking-tight leading-tight drop-shadow-md transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-left ${
                      isExpanded 
                        ? 'text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3' 
                        : 'text-xs sm:text-sm text-white/90 truncate'
                    }`}>
                      {service.title}
                    </h3>

                    {/* Expanded Detail Content - Fades In with Smooth Delay After Card Expands */}
                    {isExpanded && (
                      <div className="space-y-3 sm:space-y-4 pt-1 overflow-hidden">
                        
                        {/* Description - Fades in smoothly after card expands */}
                        <p className="text-xs sm:text-sm lg:text-base text-gray-200 max-w-xl leading-relaxed font-normal animate-fade-after-expand">
                          {service.description}
                        </p>

                        {/* Feature Badges - Fades in with smooth delay */}
                        <div className="flex flex-wrap gap-2 animate-fade-after-expand-badges">
                          {service.features.map((feat, i) => (
                            <div 
                              key={i}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs text-white font-medium"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-forest-moss shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>

                        {/* Primary CTA Button - Fades in with smooth delay */}
                        <div className="pt-1 animate-fade-after-expand-cta">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectServiceForQuote(service.title);
                            }}
                            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-forest-moss hover:bg-forest-mossHover text-white text-xs sm:text-sm font-semibold shadow-lg shadow-forest-moss/30 transition-colors duration-200 cursor-pointer"
                          >
                            <span>Book {service.title}</span>
                            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                          </button>
                        </div>

                      </div>
                    )}

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
