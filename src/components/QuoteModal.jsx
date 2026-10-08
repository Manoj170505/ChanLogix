import React, { useState } from 'react';
import { FaTimes, FaBolt, FaPaperPlane, FaShieldAlt, FaCheckCircle, FaEnvelope } from 'react-icons/fa';
import { COMPANY_INFO } from '../data/logisticsData';

export default function QuoteModal({ isOpen, onClose, initialService, showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService || 'International Express Courier',
    origin: '',
    destination: '',
    weight: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`[Freight Quote Request] ${formData.service} - ${formData.name}`);
    const bodyText = `ChanLogix Commercial Freight Quote Request
====================================================
Service Mode: ${formData.service}
Client Name: ${formData.name}
Work Email: ${formData.email}
Phone: ${formData.phone || 'N/A'}

ROUTE & CARGO SPECIFICATIONS
----------------------------------------------------
Origin Port/City: ${formData.origin || 'N/A'}
Destination Port/City: ${formData.destination || 'N/A'}
Estimated Weight / Volume: ${formData.weight || 'N/A'}

ADDITIONAL SPECIFICATIONS
----------------------------------------------------
${formData.notes || 'None provided'}
====================================================
Dispatched to ChanLogix Operations (${COMPANY_INFO.email})`;

    return `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
  };

  const getGmailUrl = () => {
    const subject = encodeURIComponent(`[Freight Quote Request] ${formData.service} - ${formData.name}`);
    const bodyText = `ChanLogix Commercial Freight Quote Request
====================================================
Service Mode: ${formData.service}
Client Name: ${formData.name}
Work Email: ${formData.email}
Phone: ${formData.phone || 'N/A'}

ROUTE & CARGO SPECIFICATIONS
----------------------------------------------------
Origin Port/City: ${formData.origin || 'N/A'}
Destination Port/City: ${formData.destination || 'N/A'}
Estimated Weight / Volume: ${formData.weight || 'N/A'}

ADDITIONAL SPECIFICATIONS
----------------------------------------------------
${formData.notes || 'None provided'}
====================================================
Dispatched to ChanLogix Operations (${COMPANY_INFO.email})`;

    return `https://mail.google.com/mail/?view=cm&fs=1&to=${COMPANY_INFO.email}&su=${subject}&body=${encodeURIComponent(bodyText)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      window.open(getMailtoUrl(), '_self');
    } catch {
      // Ignored
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      if (showToast) {
        showToast({
          type: 'success',
          title: 'Quote Prepared',
          message: `Freight quote pre-filled for ${COMPANY_INFO.email}.`
        });
      }
    }, 400);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-[#D5D8D4]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 text-silver-dark hover:text-[#151615] rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#EEF5E6] text-forest-moss flex items-center justify-center">
                <FaBolt className="w-5 h-5 text-forest-moss" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-forest-moss block">
                  Fast Express Quotation
                </span>
                <h3 className="text-xl font-extrabold text-[#151615]">
                  Request Commercial Freight Quote
                </h3>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#151615] uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full px-3.5 py-2.5 bg-[#F8F9F8] border border-[#D5D8D4] rounded-xl text-xs text-[#151615] focus:outline-none focus:ring-2 focus:ring-forest-moss"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#151615] uppercase tracking-wider mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 bg-[#F8F9F8] border border-[#D5D8D4] rounded-xl text-xs text-[#151615] focus:outline-none focus:ring-2 focus:ring-forest-moss"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#151615] uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98400..."
                    className="w-full px-3.5 py-2.5 bg-[#F8F9F8] border border-[#D5D8D4] rounded-xl text-xs text-[#151615] focus:outline-none focus:ring-2 focus:ring-forest-moss"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#151615] uppercase tracking-wider mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F8F9F8] border border-[#D5D8D4] rounded-xl text-xs text-[#151615] focus:outline-none focus:ring-2 focus:ring-forest-moss"
                  >
                    <option value="International Express Courier">International Express Courier</option>
                    <option value="Air & Ocean Freight Forwarding">Air & Ocean Freight Forwarding</option>
                    <option value="Smart Warehousing & Distribution">Smart Warehousing & Distribution</option>
                    <option value="Customs Clearance & Compliance">Customs Clearance & Compliance</option>
                    <option value="Last-Mile Delivery Network">Last-Mile Delivery Network</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#151615] uppercase tracking-wider mb-1">
                    Origin (City/Country) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.origin}
                    onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                    placeholder="e.g. Chennai, India"
                    className="w-full px-3.5 py-2.5 bg-[#F8F9F8] border border-[#D5D8D4] rounded-xl text-xs text-[#151615] focus:outline-none focus:ring-2 focus:ring-forest-moss"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#151615] uppercase tracking-wider mb-1">
                    Destination (City/Country) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    placeholder="e.g. London, UK"
                    className="w-full px-3.5 py-2.5 bg-[#F8F9F8] border border-[#D5D8D4] rounded-xl text-xs text-[#151615] focus:outline-none focus:ring-2 focus:ring-forest-moss"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#151615] uppercase tracking-wider mb-1">
                  Weight & Package Type
                </label>
                <input
                  type="text"
                  value={formData.weight}
                  onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                  placeholder="e.g. 10 kg parcel / 2 pallets / 20ft container"
                  className="w-full px-3.5 py-2.5 bg-[#F8F9F8] border border-[#D5D8D4] rounded-xl text-xs text-[#151615] focus:outline-none focus:ring-2 focus:ring-forest-moss"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#151615] uppercase tracking-wider mb-1">
                  Specific Requirements or Instructions
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Delivery timeframe, customs assistance needed, hazardous status, etc."
                  className="w-full px-3.5 py-2.5 bg-[#F8F9F8] border border-[#D5D8D4] rounded-xl text-xs text-[#151615] focus:outline-none focus:ring-2 focus:ring-forest-moss"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-forest-moss to-sage-green hover:from-forest-mossHover hover:to-sage-hover shadow-md transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Transmitting Request...' : 'Send Quote Request to Operations'}
                <FaPaperPlane className="w-3.5 h-3.5" />
              </button>

              <p className="text-[11px] text-silver-dark text-center flex items-center justify-center gap-1.5 pt-1">
                <FaShieldAlt className="text-forest-moss" />
                <span>Zero obligations. All rates validated against current airline and ocean tariff tables.</span>
              </p>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center animate-fadeIn space-y-3">
            <div className="w-14 h-14 bg-[#EEF5E6] text-forest-moss rounded-full flex items-center justify-center mx-auto mb-2">
              <FaCheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-extrabold text-[#151615]">
              Quotation Request Prepared!
            </h3>
            <p className="text-xs text-[#555A54] max-w-sm mx-auto leading-relaxed">
              Your commercial quote has been compiled for <strong className="text-forest-moss">{COMPANY_INFO.email}</strong>. Choose an option below to send:
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5">
              <a
                href={getGmailUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#EA4335] hover:bg-[#D93025] transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <FaEnvelope className="w-3.5 h-3.5" />
                <span>Send via Gmail (Web)</span>
              </a>
              <a
                href={getMailtoUrl()}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-forest-moss hover:bg-forest-mossHover transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <FaEnvelope className="w-3.5 h-3.5" />
                <span>Open Mail App</span>
              </a>
              <button
                onClick={handleClose}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-[#151615] bg-[#F4F6F3] hover:bg-[#EAEFE8] border border-[#D5D8D4] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
