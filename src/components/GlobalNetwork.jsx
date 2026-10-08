import React from 'react';
import { Globe } from './Globe';
import { ShieldCheck, Zap, Globe2 } from 'lucide-react';

export default function GlobalNetwork() {
  // Key global logistics gateway markers
  const markers = [
    { id: 'chennai', location: [13.0827, 80.2707], label: 'Chennai HQ' },
    { id: 'dubai', location: [25.2048, 55.2708], label: 'Dubai Gateway' },
    { id: 'singapore', location: [1.3521, 103.8198], label: 'Singapore Hub' },
    { id: 'frankfurt', location: [50.1109, 8.6821], label: 'Frankfurt Central' },
    { id: 'london', location: [51.5074, -0.1278], label: 'London Heathrow' },
    { id: 'newyork', location: [40.7128, -74.0060], label: 'New York JFK' },
    { id: 'tokyo', location: [35.6762, 139.6503], label: 'Tokyo Narita' },
    { id: 'sydney', location: [-33.8688, 151.2093], label: 'Sydney Hub' },
  ];

  // Intercontinental trade routes connecting primary corridors
  const arcs = [
    { id: 'arc-1', from: [13.0827, 80.2707], to: [25.2048, 55.2708], label: 'Middle East Line' },
    { id: 'arc-2', from: [13.0827, 80.2707], to: [1.3521, 103.8198], label: 'APAC Express' },
    { id: 'arc-3', from: [25.2048, 55.2708], to: [50.1109, 8.6821], label: 'Europe Corridor' },
    { id: 'arc-4', from: [50.1109, 8.6821], to: [51.5074, -0.1278] },
    { id: 'arc-5', from: [51.5074, -0.1278], to: [40.7128, -74.0060], label: 'Transatlantic' },
    { id: 'arc-6', from: [1.3521, 103.8198], to: [35.6762, 139.6503] },
    { id: 'arc-7', from: [1.3521, 103.8198], to: [-33.8688, 151.2093] },
  ];

  return (
    <section id="about" className="relative bg-[#090B0E] text-white py-16 sm:py-24 lg:py-32 border-b border-[#1A1D24] scroll-mt-20 overflow-hidden">
      <div id="network" className="absolute -top-24"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* SECTION HEADER: Headline & Description                     */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-3 sm:mb-4">
            Global Network
          </h2>

          <p className="text-xs sm:text-base lg:text-lg text-gray-300 leading-relaxed font-normal">
            Connect with teams and clients worldwide. Our platform enables seamless collaboration across continents, bringing the world to your workspace.
          </p>
        </div>

        {/* ========================================================= */}
        {/* 3D INTERACTIVE GLOBE CENTERPIECE (Dark Mode Earth)       */}
        {/* ========================================================= */}
        <div className="relative w-full max-w-[280px] xs:max-w-[340px] sm:max-w-[480px] lg:max-w-[620px] aspect-square mx-auto flex items-center justify-center my-2 sm:my-6">
          
          {/* Glowing Atmospheric Aura behind Globe */}
          <div className="absolute inset-0 bg-gradient-to-tr from-forest-moss/25 via-forest-moss/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* 3D Cobe Globe */}
          <div className="w-full h-full relative z-10 flex items-center justify-center">
            <Globe
              markers={markers}
              arcs={arcs}
              className="w-full h-full"
              markerColor={[0.38, 0.75, 0.1]} // Glowing Forest Moss (#55b814)
              arcColor={[0.38, 0.75, 0.1]}
              baseColor={[0.18, 0.22, 0.28]} // Dark slate continents
              glowColor={[0.12, 0.3, 0.08]} // Emerald halo
              dark={1}
              mapBrightness={6}
              diffuse={1.6}
              speed={0.0035}
            />
          </div>

        </div>

        {/* ========================================================= */}
        {/* NETWORK METRIC TEXTS (Static, Clean, Dark Styled)        */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-14 max-w-4xl mx-auto mt-10 sm:mt-16 lg:mt-20 text-center">
          
          {/* Item 1 */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-forest-moss/15 text-forest-moss flex items-center justify-center mb-2.5 sm:mb-3 border border-forest-moss/20">
              <Globe2 className="w-4 h-4" />
            </div>
            <h3 className="text-sm sm:text-base font-extrabold text-white mb-1">
              150+ Direct Gateway Ports
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xs">
              Synchronized maritime container lanes and airline block-space allocations across continents.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-forest-moss/15 text-forest-moss flex items-center justify-center mb-2.5 sm:mb-3 border border-forest-moss/20">
              <Zap className="w-4 h-4" />
            </div>
            <h3 className="text-sm sm:text-base font-extrabold text-white mb-1">
              Active Freight Arcs
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xs">
              Real-time transshipment telematics with automated pre-clearance EDI tracking on trade routes.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-forest-moss/15 text-forest-moss flex items-center justify-center mb-2.5 sm:mb-3 border border-forest-moss/20">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="text-sm sm:text-base font-extrabold text-white mb-1">
              Zero Demurrage Guarantee
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xs">
              Bonded sorting velocity and digital customs manifest execution before vessel or air touchdown.
            </p>
          </div>

        </div>

        {/* Interaction Hint */}
        <p className="text-center text-[11px] sm:text-xs text-gray-400 font-medium mt-8 sm:mt-12 flex items-center justify-center gap-2 px-2">
          <span className="w-2 h-2 rounded-full bg-forest-moss animate-ping shrink-0" />
          <span>Drag to rotate globe • Interactive real-time trade route telematics</span>
        </p>

      </div>
    </section>
  );
}
