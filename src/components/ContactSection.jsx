import React, { useState, useEffect } from 'react';
import { 
  CornerDownRight, 
  CornerUpLeft, 
  Check, 
  Copy, 
  Clock, 
  MapPin, 
  Compass, 
  ArrowUpRight,
  Mail 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/logisticsData';

export default function ContactSection({ prefillData, showToast }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    requestType: 'Freight Booking & Rapid Quote',
    name: '',
    companyName: '',
    serviceRequired: 'Ocean Freight',
    route: '',
    weightVolume: '',
    email: '',
    phone: '',
    notes: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedInquiry, setCopiedInquiry] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState(null);
  const [errorNotice, setErrorNotice] = useState('');

  // Handle prefilled data from other sections
  useEffect(() => {
    if (prefillData) {
      setFormData((prev) => ({
        ...prev,
        requestType: 'Freight Booking & Rapid Quote',
        serviceRequired: prefillData.serviceType || prev.serviceRequired,
        notes: prefillData.message || prev.notes
      }));
      // Jump to step 2 if prefilled
      setCurrentStep(2);
    }
  }, [prefillData]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_INFO.email);
    setCopiedEmail(true);
    if (showToast) {
      showToast({
        type: 'success',
        title: 'Email Copied!',
        message: `${COMPANY_INFO.email} copied to clipboard.`
      });
    }
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const formatInquirySummary = (ticketId) => {
    return `ChanLogix Logistics Inquiry: #${ticketId}
====================================================
Inquiry Type: ${formData.requestType}
Client Name: ${formData.name || 'N/A'}
Company Name: ${formData.companyName || 'N/A'}

SHIPMENT SPECIFICATIONS
----------------------------------------------------
Freight Service: ${formData.serviceRequired || 'N/A'}
Route Corridor: ${formData.route || 'N/A'}
Weight / Volume: ${formData.weightVolume || 'N/A'}

CONTACT DETAILS
----------------------------------------------------
Work Email: ${formData.email || 'N/A'}
Phone / WhatsApp: ${formData.phone || 'N/A'}

ADDITIONAL NOTES
----------------------------------------------------
${formData.notes || 'None provided'}
====================================================
Dispatched via ChanLogix Portal (${COMPANY_INFO.email})`;
  };

  const getMailtoUrl = (ticketId) => {
    const subject = encodeURIComponent(`[Inquiry #${ticketId}] ${formData.requestType} - ${formData.name || 'Client'}`);
    const body = encodeURIComponent(formatInquirySummary(ticketId));
    return `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
  };

  const getGmailUrl = (ticketId) => {
    const subject = encodeURIComponent(`[Inquiry #${ticketId}] ${formData.requestType} - ${formData.name || 'Client'}`);
    const body = encodeURIComponent(formatInquirySummary(ticketId));
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${COMPANY_INFO.email}&su=${subject}&body=${body}`;
  };

  const handleCopyInquiry = () => {
    if (!submittedTicket) return;
    navigator.clipboard.writeText(formatInquirySummary(submittedTicket));
    setCopiedInquiry(true);
    if (showToast) {
      showToast({
        type: 'info',
        title: 'Inquiry Copied',
        message: 'Full inquiry details copied to clipboard.'
      });
    }
    setTimeout(() => setCopiedInquiry(false), 2500);
  };

  const handleNext = () => {
    setErrorNotice('');
    
    // Step validations
    if (currentStep === 2) {
      if (!formData.name.trim()) {
        setErrorNotice('Please provide your full name to proceed.');
        return;
      }
    }

    if (currentStep === 3) {
      if (!formData.route.trim() && !formData.serviceRequired) {
        setErrorNotice('Please indicate your shipment route or service.');
        return;
      }
    }

    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrev = () => {
    setErrorNotice('');
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    if (!formData.email.trim() && !formData.phone.trim()) {
      setErrorNotice('Please enter an email or phone number so we can reach you.');
      return;
    }

    setIsSubmitting(true);
    const ticketId = `CLX-${Math.floor(100000 + Math.random() * 900000)}`;

    // Attempt synchronous protocol launch during the click event
    try {
      const mailtoUrl = getMailtoUrl(ticketId);
      window.open(mailtoUrl, '_self');
    } catch {
      // Ignored if browser policy blocks protocol navigation
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedTicket(ticketId);

      if (showToast) {
        showToast({
          type: 'success',
          title: 'Inquiry Prepared',
          message: `Ticket #${ticketId} ready for dispatch to ${COMPANY_INFO.email}.`
        });
      }
    }, 400);
  };

  const handleReset = () => {
    setSubmittedTicket(null);
    setCurrentStep(1);
    setFormData({
      requestType: 'Freight Booking & Rapid Quote',
      name: '',
      companyName: '',
      serviceRequired: 'Ocean Freight',
      route: '',
      weightVolume: '',
      email: '',
      phone: '',
      notes: ''
    });
  };

  const serviceOptions = [
    'Ocean Freight',
    'Air Freight',
    'Road Transport',
    'Warehousing',
    'Supply Chain'
  ];

  const inquiryOptions = [
    'Freight Booking & Rapid Quote',
    'Customs Clearance & Compliance',
    'General & Strategic Inquiries'
  ];

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-28 bg-[#F8FAF7] text-[#151615] relative overflow-hidden">
      {/* Subtle ambient light glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-forest-moss/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-forest-moss/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* EDITORIAL MULTI-STEP FORM (Website Light Theme & Forest Moss) */}
        {/* ========================================================= */}
        <div 
          className="rounded-[24px] sm:rounded-[36px] lg:rounded-[40px] bg-white text-[#151615] p-5 xs:p-7 sm:p-10 lg:p-16 shadow-[0_20px_60px_rgba(71,133,1,0.06),0_4px_20px_rgba(0,0,0,0.03)] border border-[#DCE4D8] min-h-[520px] lg:min-h-[620px] flex flex-col justify-between relative transition-all duration-300"
          style={{
            backgroundImage: 'radial-gradient(#DCE5D8 1.2px, transparent 1.2px)',
            backgroundSize: '10px 10px'
          }}
        >
          
          {!submittedTicket ? (
            <>
              {/* TOP & MIDDLE: 2-Column Editorial Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start flex-1">
                
                {/* --------------------------------------------------- */}
                {/* LEFT COLUMN: Category Tag, Big Headline, Prev Link */}
                {/* --------------------------------------------------- */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full min-h-[140px] sm:min-h-[180px] lg:min-h-[260px]">
                  <div>
                    {/* Website Forest Moss Green Tag */}
                    <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-forest-moss uppercase block mb-3 sm:mb-6 font-mono">
                      {currentStep === 1 && 'INQUIRY TYPE'}
                      {currentStep === 2 && 'YOUR INFORMATION'}
                      {currentStep === 3 && 'YOUR SHIPMENT'}
                      {currentStep === 4 && 'DISPATCH & CONTACT'}
                    </span>

                    {/* Headline in crisp high-contrast editorial typography */}
                    <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-normal text-[#151615] tracking-tight leading-[1.25] sm:leading-[1.2] max-w-md">
                      {currentStep === 1 && (
                        <>Start a conversation about freight bookings, customs, or corporate inquiries.</>
                      )}
                      {currentStep === 2 && (
                        <>Tell us more about you. What’s your business information?</>
                      )}
                      {currentStep === 3 && (
                        <>Specify your cargo details, route corridor, and freight mode.</>
                      )}
                      {currentStep === 4 && (
                        <>Where should our logistics coordinators deliver your custom rates?</>
                      )}
                    </h2>
                  </div>

                  {/* Return Link (Prev) */}
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#151615]/70 hover:text-forest-moss transition-colors mt-4 sm:mt-10 cursor-pointer w-fit group"
                    >
                      <CornerUpLeft className="w-4 h-4 stroke-[2] transition-transform group-hover:-translate-x-0.5" />
                      <span>Prev</span>
                    </button>
                  )}
                </div>

                {/* --------------------------------------------------- */}
                {/* RIGHT COLUMN: Form Controls according to Step     */}
                {/* --------------------------------------------------- */}
                <div className="lg:col-span-7 pt-1 sm:pt-4">
                  
                  {/* STEP 1: Radio Selection */}
                  {currentStep === 1 && (
                    <div className="space-y-0">
                      {inquiryOptions.map((option) => {
                        const isSelected = formData.requestType === option;
                        return (
                          <div
                            key={option}
                            onClick={() => setFormData({ ...formData, requestType: option })}
                            className="py-4 sm:py-6 flex items-center gap-3.5 sm:gap-4 cursor-pointer group border-b border-[#E2E8DC] transition-colors"
                          >
                            {/* Radio Circle */}
                            <div className={`w-[20px] sm:w-[22px] h-[20px] sm:h-[22px] rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                              isSelected 
                                ? 'border-forest-moss bg-forest-moss' 
                                : 'border-[#151615]/30 group-hover:border-forest-moss'
                            }`}>
                              {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                            </div>

                            {/* Option Text */}
                            <span className={`text-lg xs:text-xl sm:text-2xl lg:text-[30px] font-semibold tracking-tight transition-colors ${
                              isSelected ? 'text-[#151615]' : 'text-[#151615]/70 group-hover:text-[#151615]'
                            }`}>
                              {option}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* STEP 2: Underline Inputs */}
                  {currentStep === 2 && (
                    <div className="space-y-8 sm:space-y-10 pt-2">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-[#667062] mb-2 font-mono">
                          FULL NAME
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your full name"
                          autoFocus
                          className="w-full bg-transparent border-b border-[#D0D8CC] focus:border-forest-moss pb-3.5 pt-1 text-xl sm:text-2xl font-light text-[#151615] placeholder:text-[#9EA89A] outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-[#667062] mb-2 font-mono">
                          COMPANY NAME
                        </label>
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="Type your company name"
                          className="w-full bg-transparent border-b border-[#D0D8CC] focus:border-forest-moss pb-3.5 pt-1 text-xl sm:text-2xl font-light text-[#151615] placeholder:text-[#9EA89A] outline-none transition-colors"
                        />
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Shipment & Corridor Details */}
                  {currentStep === 3 && (
                    <div className="space-y-7 sm:space-y-9 pt-1">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-[#667062] mb-3 font-mono">
                          FREIGHT SERVICE
                        </label>
                        <div className="flex flex-wrap gap-2.5">
                          {serviceOptions.map((srv) => (
                            <button
                              key={srv}
                              type="button"
                              onClick={() => setFormData({ ...formData, serviceRequired: srv })}
                              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                                formData.serviceRequired === srv 
                                  ? 'bg-forest-moss text-white border border-forest-moss shadow-sm' 
                                  : 'bg-[#F8FAF7] hover:bg-[#EEF4E8] text-[#151615] border border-[#DCE4D8]'
                              }`}
                            >
                              {srv}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-[#667062] mb-2 font-mono">
                          ORIGIN & DESTINATION CORRIDOR
                        </label>
                        <input
                          type="text"
                          value={formData.route}
                          onChange={(e) => setFormData({ ...formData, route: e.target.value })}
                          placeholder="e.g. Chennai (MAA) to Frankfurt (FRA) or Rotterdam"
                          className="w-full bg-transparent border-b border-[#D0D8CC] focus:border-forest-moss pb-3.5 pt-1 text-lg sm:text-xl font-light text-[#151615] placeholder:text-[#9EA89A] outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-[#667062] mb-2 font-mono">
                          ESTIMATED WEIGHT / VOLUME (OPTIONAL)
                        </label>
                        <input
                          type="text"
                          value={formData.weightVolume}
                          onChange={(e) => setFormData({ ...formData, weightVolume: e.target.value })}
                          placeholder="e.g. 500 kg / 4 pallets / 40ft high cube container"
                          className="w-full bg-transparent border-b border-[#D0D8CC] focus:border-forest-moss pb-3.5 pt-1 text-lg sm:text-xl font-light text-[#151615] placeholder:text-[#9EA89A] outline-none transition-colors"
                        />
                      </div>
                    </div>
                  )}

                  {/* STEP 4: Email & Phone Contact */}
                  {currentStep === 4 && (
                    <div className="space-y-7 sm:space-y-9 pt-1">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-[#667062] mb-2 font-mono">
                          WORK EMAIL
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          autoFocus
                          className="w-full bg-transparent border-b border-[#D0D8CC] focus:border-forest-moss pb-3.5 pt-1 text-lg sm:text-xl font-light text-[#151615] placeholder:text-[#9EA89A] outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-[#667062] mb-2 font-mono">
                          PHONE / WHATSAPP
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98400 12345"
                          className="w-full bg-transparent border-b border-[#D0D8CC] focus:border-forest-moss pb-3.5 pt-1 text-lg sm:text-xl font-light text-[#151615] placeholder:text-[#9EA89A] outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-[#667062] mb-2 font-mono">
                          ADDITIONAL NOTES (OPTIONAL)
                        </label>
                        <input
                          type="text"
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          placeholder="Specific handling, temperature, or timeline requirements..."
                          className="w-full bg-transparent border-b border-[#D0D8CC] focus:border-forest-moss pb-3.5 pt-1 text-base sm:text-lg font-light text-[#151615] placeholder:text-[#9EA89A] outline-none transition-colors"
                        />
                      </div>
                    </div>
                  )}

                  {/* Validation Notice if any */}
                  {errorNotice && (
                    <p className="text-xs sm:text-sm font-semibold text-red-500 mt-4 animate-fadeIn">
                      {errorNotice}
                    </p>
                  )}

                </div>

              </div>

              {/* --------------------------------------------------- */}
              {/* BOTTOM ROW: Giant Step Number (Left) & Next Pill (Right) */}
              {/* --------------------------------------------------- */}
              <div className="flex items-center sm:items-end justify-between mt-8 sm:mt-16 pt-3 sm:pt-4">
                
                {/* Giant Step Counter */}
                <div className="text-[56px] xs:text-[72px] sm:text-[110px] lg:text-[150px] font-extralight text-[#151615] tracking-tighter select-none leading-none">
                  {currentStep}<span className="text-forest-moss/70 font-thin">/</span>4
                </div>

                {/* Next / Submit Button styled with sleek black pill with Forest Moss hover */}
                <div>
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-5 xs:px-7 sm:px-9 py-2.5 sm:py-3.5 rounded-full bg-[#151615] hover:bg-forest-moss text-white text-xs xs:text-sm sm:text-base font-medium tracking-wide transition-all shadow-md disabled:opacity-50 cursor-pointer group"
                  >
                    <span>{isSubmitting ? 'Transmitting...' : currentStep === 4 ? 'Submit Request' : 'Next'}</span>
                    <CornerDownRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2] transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                  </button>
                </div>

              </div>
            </>
          ) : (
            /* SUBMISSION CONFIRMATION VIEW */
            <div className="text-center py-6 sm:py-14 space-y-4 max-w-xl mx-auto my-auto animate-fadeIn">
              <span className="text-xs font-semibold text-forest-moss uppercase tracking-[0.2em] font-mono">
                DISPATCH PREPARED
              </span>
              <h3 className="text-2xl sm:text-4xl font-normal text-[#151615] tracking-tight">
                Thank you, {formData.name || 'Partner'}.
              </h3>
              <p className="text-xs sm:text-base text-[#555A54] leading-relaxed">
                Your inquiry has been compiled under reference ticket <strong className="text-forest-moss font-semibold">#{submittedTicket}</strong>. Choose your email client to send your request directly to <strong className="text-[#151615] font-semibold">{COMPANY_INFO.email}</strong>:
              </p>

              {/* Action buttons */}
              <div className="pt-4 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-2.5 sm:gap-3">
                {/* 1. Gmail Web */}
                <a
                  href={getGmailUrl(submittedTicket)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#EA4335] hover:bg-[#D93025] text-white text-xs sm:text-sm font-semibold transition-colors shadow-md cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Gmail (Web)</span>
                </a>

                {/* 2. Default Desktop Mail App */}
                <a
                  href={getMailtoUrl(submittedTicket)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-forest-moss hover:bg-forest-mossHover text-white text-xs sm:text-sm font-semibold transition-colors shadow-md cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open Mail App (Outlook)</span>
                </a>

                {/* 3. Copy Details */}
                <button
                  type="button"
                  onClick={handleCopyInquiry}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-[#EEF4E8] text-[#151615] border border-[#DCE4D8] text-xs sm:text-sm font-semibold transition-colors shadow-xs cursor-pointer"
                >
                  {copiedInquiry ? <Check className="w-4 h-4 text-forest-moss" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedInquiry ? 'Copied' : 'Copy Text'}</span>
                </button>

                {/* 4. Reset */}
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#151615] hover:bg-forest-moss text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs cursor-pointer"
                >
                  <span>New Request</span>
                  <CornerDownRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-[11px] text-[#788274] pt-2 max-w-md mx-auto">
                If your desktop email app didn't pop up, click <strong>Send via Gmail (Web)</strong> to open pre-filled in your browser, or <strong>Copy Text</strong> to paste anywhere.
              </p>
            </div>
          )}

        </div>

        {/* ========================================================= */}
        {/* COMPANY OPERATIONS & PHYSICAL HUBS INFORMATION            */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
          
          {/* Operations Email Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#DCE4D8] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-forest-moss block mb-1 font-mono">
                24/7 Operations Desk
              </span>
              <h4 className="text-sm font-bold text-[#151615] mb-1">Central Logistics Email</h4>
              <p className="text-xs text-[#555A54] mb-3 break-all">{COMPANY_INFO.email}</p>
            </div>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#F8FAF7] text-[#151615] hover:bg-forest-moss hover:text-white transition-colors w-fit border border-[#DCE4D8] cursor-pointer"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-forest-moss" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
            </button>
          </div>

          {/* Chennai Global HQ */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#DCE4D8] shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-wider text-forest-moss block mb-1 font-mono">
              Global Operations Hub
            </span>
            <h4 className="text-sm font-bold text-[#151615] mb-1">Chennai Headquarters</h4>
            <p className="text-xs text-[#555A54] leading-relaxed mb-3">
              Awfis Olympia Crystal, 11-14, Thiru Vi Ka Industrial Estate, Saidapet, Chennai - 600032
            </p>
            <a
              href="https://maps.google.com/?q=Awfis+Olympia+Crystal+Saidapet+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-forest-moss hover:underline"
            >
              <span>Get Directions</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Tiruchengode Hub */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#DCE4D8] shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-wider text-forest-moss block mb-1 font-mono">
              Regional Express Depot
            </span>
            <h4 className="text-sm font-bold text-[#151615] mb-1">Tiruchengode Hub</h4>
            <p className="text-xs text-[#555A54] leading-relaxed mb-3">
              Bhakiyam Complex, Sangagiri Main Road, Tiruchengode, TamilNadu - 637211
            </p>
            <a
              href="https://maps.google.com/?q=Bhakiyam+Complex+Sangagiri+Main+Road+Tiruchengode"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-forest-moss hover:underline"
            >
              <span>Get Directions</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
