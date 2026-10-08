import React from 'react';
import { 
  FaGlobeAmericas, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaTimesCircle, 
  FaBolt 
} from 'react-icons/fa';
import { MdOutlineTrackChanges, MdFactCheck } from 'react-icons/md';
import { WHY_CHOOSE_US, COMPARISON_DATA } from '../data/logisticsData';

export default function WhyChooseUs({ onOpenQuote }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'MdOutlineTrackChanges':
        return <MdOutlineTrackChanges className="w-7 h-7 text-forest-moss" />;
      case 'FaGlobeAmericas':
        return <FaGlobeAmericas className="w-7 h-7 text-forest-moss" />;
      case 'MdFactCheck':
        return <MdFactCheck className="w-7 h-7 text-forest-moss" />;
      case 'FaShieldAlt':
      default:
        return <FaShieldAlt className="w-7 h-7 text-forest-moss" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-[#F8FAF7]/75 backdrop-blur-md border-b border-[#AFAEAE]/30 relative overflow-hidden scroll-mt-20">
      <div id="why-us" className="absolute -top-24"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-moss/10 text-forest-moss text-xs font-bold uppercase tracking-wider mb-3 border border-forest-moss/20">
            <span>The ChanLogix Benchmark</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#151615] tracking-tight">
            Why Leading Enterprises <br className="hidden sm:inline" />
            <span className="text-forest-moss">Rely on ChanLogix Worldwide</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-[#555A54] font-normal leading-relaxed">
            By fusing proprietary AI routing intelligence, licensed customs brokerage, and an agile multi-modal network, we eliminate friction from international shipping.
          </p>
        </div>

        {/* 4 Pillars Grid in Light Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#AFAEAE]/40 rounded-2xl p-6 hover:border-forest-moss hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#EEF5E6] border border-forest-moss/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-forest-moss/10 text-forest-moss border border-forest-moss/30">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#151615] mb-2.5 group-hover:text-forest-moss transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#555A54] font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#AFAEAE]/30 flex items-center gap-1.5 text-xs font-bold text-forest-moss">
                <FaCheckCircle className="w-3.5 h-3.5" />
                <span>Enterprise SLA Guarantee</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Comparison Matrix in Clean Light Theme */}
        <div className="bg-white rounded-3xl p-5 sm:p-10 text-[#151615] shadow-xl relative overflow-hidden border border-[#AFAEAE]/50">
          <div className="absolute top-0 right-0 w-96 h-96 bg-forest-moss/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl mb-6 sm:mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-forest-moss block mb-2 font-mono">
              Performance Comparison
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight text-[#151615]">
              The ChanLogix Intelligence Advantage
            </h3>
            <p className="text-xs sm:text-sm text-[#555A54] font-normal mt-2">
              See how our agile tech-first logistics infrastructure outpaces conventional freight forwarders.
            </p>
          </div>

          <div className="-mx-5 px-5 sm:mx-0 sm:px-0 overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[560px]">
              <thead>
                <tr className="border-b border-[#AFAEAE]/40 text-[11px] sm:text-xs uppercase tracking-wider text-[#555A54] bg-[#F4F7F2]">
                  <th className="py-3.5 px-3.5 sm:py-4 sm:px-4 font-bold text-[#151615]">Capability / Metric</th>
                  <th className="py-3.5 px-3.5 sm:py-4 sm:px-4 font-extrabold text-forest-moss bg-[#EEF5E6] rounded-t-lg border-t-2 border-x border-forest-moss">
                    ChanLogix Global
                  </th>
                  <th className="py-3.5 px-3.5 sm:py-4 sm:px-4 font-semibold text-[#555A54]">Traditional Couriers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#AFAEAE]/30">
                {COMPARISON_DATA.map((row, index) => (
                  <tr key={index} className="hover:bg-[#F8FAF7] transition-colors">
                    <td className="py-3.5 px-3.5 sm:py-4 sm:px-4 font-bold text-[#151615]">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-3.5 sm:py-4 sm:px-4 text-forest-moss font-bold bg-[#EEF5E6]/70 border-x border-forest-moss/30">
                      <div className="flex items-center gap-2">
                        <FaCheckCircle className="text-forest-moss w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                        <span>{row.chanlogix}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3.5 sm:py-4 sm:px-4 text-[#7A8278] font-normal">
                      <div className="flex items-center gap-2">
                        <FaTimesCircle className="text-rose-400 w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#AFAEAE]/30 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="text-xs text-[#555A54] font-medium text-center sm:text-left">
              Need a tailored commercial supply chain proposal for your enterprise?
            </div>
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-forest-moss to-sage-green hover:from-forest-mossHover hover:to-sage-hover shadow-md shadow-forest-moss/20 transition-all duration-200 cursor-pointer"
            >
              <span>Schedule Commercial Review</span>
              <FaBolt className="text-white w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
