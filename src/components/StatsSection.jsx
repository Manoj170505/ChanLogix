import React from 'react';

export default function StatsSection() {
  const capabilityTags = [
    'Secure Warehousing',
    '24/7 Customer Support',
    'Affordable Freight Rates',
    'Real-Time Shipment Tracking',
    'Expert Logistics Team',
    'International Shipping',
  ];

  const row1 = [
    {
      type: 'image',
      // Verified Cargo Plane image loading freight
      src: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=700&q=80',
      alt: 'International air cargo transport plane'
    },
    {
      type: 'stat',
      value: '30K',
      suffix: '+',
      label: 'Successful Deliveries'
    },
    {
      type: 'image',
      // Commercial linehaul highway transport truck
      src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=700&q=80',
      alt: 'Commercial highway freight transport truck'
    },
    {
      type: 'stat',
      value: '100',
      suffix: '+',
      label: 'Cities & Regions Covered'
    },
    {
      type: 'image',
      // Maritime ocean container vessel
      src: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=700&q=80',
      alt: 'Container freight ship cruising at sea'
    }
  ];

  const row2 = [
    {
      type: 'stat',
      value: '500',
      suffix: '+',
      label: 'Trusted Business Clients'
    },
    {
      type: 'image',
      // Smart automated logistics distribution warehouse
      src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80',
      alt: 'Modern 3PL automated logistics warehouse'
    },
    {
      type: 'stat',
      value: '98',
      suffix: '%',
      label: 'On-Time Delivery Rate'
    },
    {
      type: 'image',
      // Intermodal container port cranes and terminal
      src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=700&q=80',
      alt: 'Harbor shipping container port with gantry cranes'
    },
    {
      type: 'stat',
      value: '150',
      suffix: '+',
      label: 'Global Logistics Hubs'
    }
  ];

  return (
    <section id="insights" className="relative scroll-mt-20 overflow-hidden">
      
      {/* ========================================================= */}
      {/* TOP HALF: LIGHT THEME (Headline, Paragraphs, Pill Badges) */}
      {/* ========================================================= */}
      <div className="bg-[#F8FAF7] text-[#151615] pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-16 border-t border-[#AFAEAE]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Category Label & Bold Condensed Headline */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-gray-500 font-mono text-xs tracking-widest uppercase font-semibold flex items-center gap-2">
                <span className="text-forest-moss font-bold">#</span>
                <span>WHO WE ARE</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#151615] uppercase tracking-tight leading-[1.05]">
                YOUR TRUSTED <br />
                <span className="text-forest-moss">LOGISTICS</span> <br />
                PARTNER
              </h2>
            </div>

            {/* Middle Column: Two Informational Paragraphs */}
            <div className="lg:col-span-4 space-y-4 text-[#4A5248] text-sm sm:text-base leading-relaxed pt-1">
              <p>
                With years of experience in transportation and supply chain management, we provide customized logistics solutions for businesses of all sizes. From local deliveries to international freight forwarding, our team ensures every shipment reaches its destination safely and on schedule.
              </p>
              <p className="text-[#687265] text-sm">
                We combine technology, professional expertise, and customer-focused service to simplify logistics and improve operational efficiency.
              </p>
            </div>

            {/* Right Column: 2-Column Capability Pill Badges */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {capabilityTags.map((tag) => (
                <div
                  key={tag}
                  className="px-4 py-2.5 rounded-full bg-white border border-gray-200/90 text-[#151615] text-xs sm:text-sm font-semibold text-center shadow-sm hover:border-forest-moss/40 hover:text-forest-moss hover:bg-forest-mossLight/40 transition-colors whitespace-nowrap"
                >
                  {tag}
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* BOTTOM HALF: BLACK THEME (10-Card Photo & Metric Mosaic)   */}
      {/* ========================================================= */}
      <div className="bg-[#090B0E] text-white py-14 sm:py-18 lg:py-20 border-b border-[#1A1D23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-4 sm:space-y-5">
            
            {/* Row 1 (5 Cards: Cargo Plane, Stat, Truck, Stat, Ship) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
              {row1.map((item, index) => (
                <div
                  key={`r1-${index}`}
                  className="h-44 sm:h-48 lg:h-52 rounded-2xl sm:rounded-3xl overflow-hidden bg-[#131518] border border-white/10 shadow-xl relative flex flex-col justify-center items-center text-center p-4 group transition-colors hover:border-forest-moss/40"
                >
                  {item.type === 'image' ? (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                        {item.value}
                        <span className="text-forest-moss ml-0.5 font-bold">{item.suffix}</span>
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400 font-medium mt-2 max-w-[130px] leading-snug">
                        {item.label}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Row 2 (5 Cards: Stat, Warehouse, Stat, Harbor Port, Stat) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
              {row2.map((item, index) => (
                <div
                  key={`r2-${index}`}
                  className="h-44 sm:h-48 lg:h-52 rounded-2xl sm:rounded-3xl overflow-hidden bg-[#131518] border border-white/10 shadow-xl relative flex flex-col justify-center items-center text-center p-4 group transition-colors hover:border-forest-moss/40"
                >
                  {item.type === 'image' ? (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                        {item.value}
                        <span className="text-forest-moss ml-0.5 font-bold">{item.suffix}</span>
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400 font-medium mt-2 max-w-[130px] leading-snug">
                        {item.label}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
