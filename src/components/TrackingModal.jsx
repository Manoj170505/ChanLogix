import React, { useState, useEffect } from 'react';
import { 
  FaTimes, 
  FaPlaneDeparture, 
  FaCheckCircle, 
  FaMapMarkerAlt, 
  FaCopy, 
  FaPrint, 
  FaClock, 
  FaCheck, 
  FaArrowRight,
  FaSearch
} from 'react-icons/fa';
import { MdOutlineTrackChanges } from 'react-icons/md';
import { generateMockTracking } from '../data/logisticsData';

export default function TrackingModal({ isOpen, initialData, onClose, showToast }) {
  const [currentData, setCurrentData] = useState(initialData);
  const [searchInput, setSearchInput] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setCurrentData(initialData);
  }, [initialData]);

  if (!isOpen) return null;

  const sampleTrackingNumbers = [
    { id: 'CHX-8942-US', label: 'CHX-8942-US', status: 'In Transit (USA)', color: 'text-forest-moss bg-forest-moss/10 border-forest-moss/30' },
    { id: 'CHX-7719-EU', label: 'CHX-7719-EU', status: 'Out for Delivery (UK)', color: 'text-sage-green bg-sage-green/10 border-sage-green/30' },
    { id: 'CHX-5011-IN', label: 'CHX-5011-IN', status: 'Delivered (India)', color: 'text-forest-moss bg-forest-moss/20 border-forest-moss/40' },
  ];

  const handleSearch = (idToSearch) => {
    const query = (idToSearch || searchInput).trim();
    if (!query) {
      setError('Please enter a valid Tracking ID or AWB Number');
      return;
    }
    setError('');
    const data = generateMockTracking(query);
    setCurrentData(data);
    if (showToast) {
      showToast({
        type: 'info',
        title: 'Shipment Retrieved',
        message: `AWB ${data.trackingNumber} status loaded.`
      });
    }
  };

  const handleCopyLink = () => {
    if (!currentData) return;
    const url = `${window.location.origin}${window.location.pathname}#tracking?id=${currentData.trackingNumber}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    if (showToast) {
      showToast({
        type: 'success',
        title: 'Tracking Link Copied',
        message: `Direct link for ${currentData.trackingNumber} copied to clipboard.`
      });
    }
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const getStatusBadge = (code) => {
    switch (code) {
      case 'delivered':
        return {
          bg: 'bg-forest-moss/15 text-forest-moss border-forest-moss/30',
          dot: 'bg-forest-moss',
        };
      case 'out_for_delivery':
        return {
          bg: 'bg-sage-green/15 text-sage-green border-sage-green/30',
          dot: 'bg-sage-green animate-ping',
        };
      case 'in_transit':
      default:
        return {
          bg: 'bg-[#EEF4E8] text-forest-moss border-forest-moss/30',
          dot: 'bg-forest-moss animate-pulse',
        };
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn">
      <div 
        className="bg-white border border-[#AFAEAE]/50 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl relative text-[#151615] flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar in Light Forest Tint */}
        <div className="bg-[#EEF4E8] px-6 py-4 border-b border-[#AFAEAE]/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-forest-moss/30 flex items-center justify-center text-forest-moss shadow-sm">
              <MdOutlineTrackChanges className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider text-[#5A6258] font-bold">Live Intelligence Tracking</span>
                {currentData && (
                  <span className={`text-[11px] px-2 py-0.5 rounded-full border flex items-center gap-1.5 font-bold ${getStatusBadge(currentData.statusCode).bg}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${getStatusBadge(currentData.statusCode).dot}`}></span>
                    {currentData.status}
                  </span>
                )}
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-[#151615] flex items-center gap-2 mt-0.5">
                {currentData ? (
                  <>AWB: <span className="text-forest-moss font-mono">{currentData.trackingNumber}</span></>
                ) : (
                  <span>Track Consignment / AWB</span>
                )}
              </h3>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 text-[#5A6258] hover:text-[#151615] rounded-lg hover:bg-white transition-colors"
            aria-label="Close modal"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1 bg-white">
          
          {/* Tracking Search Input Box */}
          <div className="bg-[#F8FAF7] border border-[#AFAEAE]/50 p-4 rounded-xl">
            <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <FaSearch className="absolute left-3.5 top-3.5 text-[#7A8278] w-4 h-4" />
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => { setSearchInput(e.target.value); setError(''); }}
                  placeholder="Enter Tracking ID (e.g. CHX-8942-US, CHX-7719-EU, CHX-5011-IN)"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#AFAEAE]/60 rounded-lg text-[#151615] text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-forest-moss"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 bg-gradient-to-r from-forest-moss to-sage-green hover:from-forest-mossHover text-white font-bold text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Track Now</span>
                <FaArrowRight className="w-3 h-3" />
              </button>
            </form>

            {error && (
              <p className="text-xs text-rose-500 mt-2 font-semibold">⚠️ {error}</p>
            )}

            {/* Quick Sample Pills */}
            <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-[#AFAEAE]/30 text-xs">
              <span className="text-[#5A6258] font-medium">Sample Consignments:</span>
              {sampleTrackingNumbers.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => { setSearchInput(s.id); handleSearch(s.id); }}
                  className="px-2.5 py-1 rounded bg-[#EEF4E8] hover:bg-[#DDE8D4] text-forest-moss font-mono text-[11px] font-bold border border-forest-moss/30 transition-colors"
                >
                  {s.label} ({s.status.split(' ')[0]})
                </button>
              ))}
            </div>
          </div>

          {currentData && (
            <>
              {/* Journey Route Banner in Light Green Tint */}
              <div className="bg-[#EEF4E8] border border-forest-moss/30 rounded-xl p-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                  <div>
                    <span className="text-xs font-semibold text-[#5A6258] block mb-1">Origin Gateway</span>
                    <p className="text-base font-extrabold text-[#151615] flex items-center gap-1.5">
                      <FaMapMarkerAlt className="text-forest-moss shrink-0" />
                      {currentData.origin}
                    </p>
                  </div>

                  <div className="flex flex-col items-center justify-center py-2 sm:py-0">
                    <span className="text-[11px] font-bold text-forest-moss uppercase tracking-wider mb-1">
                      {currentData.service}
                    </span>
                    <div className="w-full flex items-center gap-2">
                      <div className="h-1 flex-1 bg-white rounded-full relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-forest-moss to-sage-green rounded-full"></div>
                      </div>
                      <FaPlaneDeparture className="text-forest-moss w-4 h-4 shrink-0 animate-pulse" />
                      <div className="h-1 flex-1 bg-white rounded-full relative">
                        <div className="absolute inset-0 bg-forest-moss/40 rounded-full"></div>
                      </div>
                    </div>
                    <span className="text-[11px] text-[#5A6258] mt-1 font-medium">Global Air Routing</span>
                  </div>

                  <div className="sm:text-right">
                    <span className="text-xs font-semibold text-[#5A6258] block mb-1">Final Destination</span>
                    <p className="text-base font-extrabold text-[#151615] flex items-center sm:justify-end gap-1.5">
                      <FaMapMarkerAlt className="text-sage-green shrink-0" />
                      {currentData.destination}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-forest-moss/20 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="text-[#5A6258]">Estimated Delivery: </span>
                    <span className="font-extrabold text-forest-moss ml-1 bg-white px-2 py-0.5 rounded border border-forest-moss/30 shadow-xs">
                      {currentData.estimatedDelivery}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#5A6258]">Current Facility: </span>
                    <span className="font-bold text-[#151615] ml-1">
                      {currentData.currentLocation}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-[#F8FAF7] border border-[#AFAEAE]/40 p-3 rounded-lg">
                  <span className="text-[11px] text-[#5A6258] block mb-1">Weight</span>
                  <span className="text-sm font-bold text-[#151615]">{currentData.weight}</span>
                </div>
                <div className="bg-[#F8FAF7] border border-[#AFAEAE]/40 p-3 rounded-lg">
                  <span className="text-[11px] text-[#5A6258] block mb-1">Pieces</span>
                  <span className="text-sm font-bold text-[#151615]">{currentData.pieces} Box(es)</span>
                </div>
                <div className="bg-[#F8FAF7] border border-[#AFAEAE]/40 p-3 rounded-lg">
                  <span className="text-[11px] text-[#5A6258] block mb-1">Dimensions</span>
                  <span className="text-sm font-bold text-[#151615]">{currentData.dimensions}</span>
                </div>
                <div className="bg-[#F8FAF7] border border-[#AFAEAE]/40 p-3 rounded-lg">
                  <span className="text-[11px] text-[#5A6258] block mb-1">SLA Verification</span>
                  <span className="text-sm font-bold text-forest-moss flex items-center gap-1">
                    <FaCheckCircle className="w-3 h-3" /> Guaranteed
                  </span>
                </div>
              </div>

              {/* Milestone Step Timeline */}
              <div>
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#151615] mb-4 flex items-center gap-2">
                  <FaClock className="text-forest-moss" /> Shipment Milestones & Scanning Logs
                </h4>
                
                <div className="relative pl-6 space-y-5 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-[#AFAEAE]/40">
                  {currentData.steps.map((step, idx) => {
                    const isDone = step.completed;
                    const isCurrent = step.current;

                    return (
                      <div key={idx} className="relative group">
                        <div 
                          className={`absolute -left-[30px] top-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                            isDone 
                              ? isCurrent 
                                ? 'bg-forest-moss border-white ring-4 ring-forest-moss/30 shadow-md' 
                                : 'bg-sage-green border-white' 
                              : 'bg-white border-[#AFAEAE]'
                          }`}
                        >
                          {isDone ? (
                            isCurrent ? (
                              <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                            ) : (
                              <FaCheck className="w-2.5 h-2.5 text-white" />
                            )
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#AFAEAE]"></span>
                          )}
                        </div>

                        <div className={`p-3 rounded-xl border transition-all ${
                          isCurrent 
                            ? 'bg-[#EEF4E8] border-forest-moss shadow-sm' 
                            : isDone 
                              ? 'bg-[#F8FAF7] border-[#AFAEAE]/30' 
                              : 'bg-[#F8FAF7]/50 border-[#AFAEAE]/20 opacity-60'
                        }`}>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                            <span className={`text-sm font-bold ${isCurrent ? 'text-forest-moss' : isDone ? 'text-[#151615]' : 'text-[#7A8278]'}`}>
                              {step.title}
                            </span>
                            <span className="text-[11px] text-[#5A6258] font-mono">
                              {step.date}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-[#555A54]">
                            <FaMapMarkerAlt className="text-forest-moss w-3 h-3 shrink-0" />
                            <span>{step.location}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="bg-[#EEF4E8] px-6 py-4 border-t border-[#AFAEAE]/40 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {currentData && (
              <>
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-[#151615] bg-white hover:bg-slate-100 border border-[#AFAEAE]/50 transition-colors shadow-xs"
                >
                  {copiedLink ? <FaCheck className="text-forest-moss" /> : <FaCopy className="text-forest-moss" />}
                  <span>{copiedLink ? 'Copied Link' : 'Copy Direct Link'}</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-[#151615] bg-white hover:bg-slate-100 border border-[#AFAEAE]/50 transition-colors shadow-xs"
                >
                  <FaPrint className="text-forest-moss" />
                  <span>Print AWB Summary</span>
                </button>
              </>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg text-xs font-bold text-white bg-forest-moss hover:bg-forest-mossHover transition-colors shadow-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
