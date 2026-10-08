import React, { useState } from 'react';
import { FaCalculator, FaArrowRight, FaPlane, FaShip, FaTruck, FaShieldAlt } from 'react-icons/fa';

export default function RateCalculator({ onProceedWithRate }) {
  const [origin, setOrigin] = useState('IN-MAA');
  const [destination, setDestination] = useState('US-NYC');
  const [serviceType, setServiceType] = useState('express');
  const [weight, setWeight] = useState(5);

  const calculateEstimate = () => {
    let baseRate = 45;
    let ratePerKg = 8.5;
    let days = '2 - 3 Business Days';

    if (serviceType === 'express') {
      baseRate = 60;
      ratePerKg = 12.0;
      days = '1 - 3 Business Days';
    } else if (serviceType === 'air_cargo') {
      baseRate = 120;
      ratePerKg = 4.5;
      days = '3 - 5 Business Days';
    } else if (serviceType === 'ocean_lcl') {
      baseRate = 220;
      ratePerKg = 1.2;
      days = '14 - 21 Days';
    } else if (serviceType === 'domestic') {
      baseRate = 15;
      ratePerKg = 2.2;
      days = 'Same-Day / Next-Day';
    }

    const calculated = Math.round(baseRate + weight * ratePerKg);
    return {
      priceMin: Math.round(calculated * 0.9),
      priceMax: Math.round(calculated * 1.15),
      transit: days,
    };
  };

  const estimate = calculateEstimate();

  const handleApplyEstimate = () => {
    if (onProceedWithRate) {
      onProceedWithRate({
        origin,
        destination,
        serviceType,
        weight: `${weight} kg`,
        estimatedCost: `$${estimate.priceMin} - $${estimate.priceMax}`,
        transitTime: estimate.transit,
      });
    }
  };

  return (
    <section id="calculator" className="py-20 bg-[#EEF4E8] relative border-b border-[#AFAEAE]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border border-[#AFAEAE]/50 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Col: Calculator Inputs in Crisp White */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-6">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-forest-moss mb-1">
                <FaCalculator className="w-4 h-4" />
                <span>Instant Freight & Courier Estimator</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151615] tracking-tight">
                Calculate Real-Time Shipping Rates
              </h2>

              <p className="text-sm text-[#555A54] font-normal">
                Select your shipment parameters below to get instant volumetric rate guidance and estimated transit schedules.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Origin */}
                <div>
                  <label className="block text-xs font-bold text-[#151615] uppercase tracking-wider mb-2">
                    Origin Hub
                  </label>
                  <select
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full bg-[#F8FAF7] border border-[#AFAEAE]/60 rounded-xl px-4 py-3 text-sm font-medium text-[#151615] focus:outline-none focus:ring-2 focus:ring-forest-moss"
                  >
                    <option value="IN-MAA">Chennai Gateway Hub (MAA), India</option>
                    <option value="IN-TCR">Tiruchengode Regional Depot, India</option>
                    <option value="IN-BOM">Mumbai Cargo Terminal (BOM), India</option>
                    <option value="IN-DEL">Delhi Indira Gandhi Cargo (DEL), India</option>
                    <option value="SG-SIN">Singapore Changi Terminal (SIN)</option>
                    <option value="AE-DXB">Dubai Logistics City (DXB), UAE</option>
                    <option value="US-JFK">New York (JFK), United States</option>
                  </select>
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-xs font-bold text-[#151615] uppercase tracking-wider mb-2">
                    Destination Hub / Country
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-[#F8FAF7] border border-[#AFAEAE]/60 rounded-xl px-4 py-3 text-sm font-medium text-[#151615] focus:outline-none focus:ring-2 focus:ring-forest-moss"
                  >
                    <option value="US-NYC">United States (New York / West Coast)</option>
                    <option value="GB-LON">United Kingdom (London Heathrow)</option>
                    <option value="EU-FRA">Germany / European Union (Frankfurt)</option>
                    <option value="AE-DXB">United Arab Emirates (Dubai)</option>
                    <option value="SG-SIN">Singapore & Southeast Asia</option>
                    <option value="AU-SYD">Australia (Sydney / Melbourne)</option>
                    <option value="IN-DOM">Domestic India Inter-City Express</option>
                  </select>
                </div>
              </div>

              {/* Service Level Radio Cards */}
              <div>
                <label className="block text-xs font-bold text-[#151615] uppercase tracking-wider mb-2.5">
                  Select Logistics Mode
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'express', label: 'Express Air Courier', icon: <FaPlane className="w-4 h-4" /> },
                    { id: 'air_cargo', label: 'Scheduled Air Freight', icon: <FaPlane className="w-4 h-4" /> },
                    { id: 'ocean_lcl', label: 'Ocean Freight LCL/FCL', icon: <FaShip className="w-4 h-4" /> },
                    { id: 'domestic', label: 'Domestic Road/Rail', icon: <FaTruck className="w-4 h-4" /> },
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => setServiceType(mode.id)}
                      className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${
                        serviceType === mode.id
                          ? 'border-forest-moss bg-[#EEF5E6] text-[#151615] ring-2 ring-forest-moss/30'
                          : 'border-[#AFAEAE]/40 bg-[#F8FAF7] text-[#555A54] hover:border-forest-moss/50'
                      }`}
                    >
                      <div className="text-forest-moss mb-2">{mode.icon}</div>
                      <span className="text-xs font-bold leading-snug">{mode.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Weight Slider & Input */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-[#151615] uppercase tracking-wider">
                    Total Chargeable Weight (kg)
                  </label>
                  <span className="text-sm font-extrabold text-forest-moss bg-[#EEF5E6] px-2.5 py-0.5 rounded-lg border border-forest-moss/30">
                    {weight} KG
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="150"
                  step="0.5"
                  value={weight}
                  onChange={(e) => setWeight(parseFloat(e.target.value))}
                  className="w-full h-2 bg-[#D5D8D4] rounded-lg appearance-none cursor-pointer accent-forest-moss"
                />
                <div className="flex justify-between text-[11px] text-[#7A8278] mt-1 font-medium">
                  <span>0.5 kg (Document / Small Parcel)</span>
                  <span>50 kg</span>
                  <span>150+ kg (Commercial Cargo)</span>
                </div>
              </div>
            </div>

            {/* Right Col: Instant Live Estimate Card in Lush Forest Moss to Sage Green */}
            <div className="lg:col-span-5 bg-gradient-to-br from-forest-moss via-[#568A1E] to-sage-green p-6 sm:p-10 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-forest-moss">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white border border-white/30 text-[11px] font-bold uppercase tracking-wider mb-6">
                  <span>Estimated Live Rate</span>
                </div>

                <div className="mb-6">
                  <span className="text-xs text-white/80 uppercase tracking-wider font-semibold block mb-1">
                    Indicative Cost Range
                  </span>
                  <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white flex items-baseline gap-2">
                    <span>${estimate.priceMin} - ${estimate.priceMax}</span>
                    <span className="text-xs font-normal text-white/80">USD*</span>
                  </div>
                  <span className="text-[11px] text-white/80 mt-1 block">
                    *Includes basic fuel index and standard documentation
                  </span>
                </div>

                {/* Schedule & Inclusions */}
                <div className="space-y-3 pt-6 border-t border-white/20 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 font-medium">Estimated Transit:</span>
                    <span className="font-extrabold text-white bg-white/10 px-2 py-0.5 rounded">{estimate.transit}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 font-medium">Customs Clearance:</span>
                    <span className="font-bold text-white">Pre-Filing Included</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 font-medium">Tracking Level:</span>
                    <span className="font-bold text-white">Real-Time Sensor Telematics</span>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-8">
                <button
                  type="button"
                  onClick={handleApplyEstimate}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm text-[#151615] bg-white hover:bg-[#EEF5E6] shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Lock In This Rate & Request Quote</span>
                  <FaArrowRight className="w-4 h-4 text-forest-moss" />
                </button>
                <p className="text-[11px] text-white/90 text-center mt-3 flex items-center justify-center gap-1 font-medium">
                  <FaShieldAlt className="text-white" /> Direct routing SLA with no hidden surcharges
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
