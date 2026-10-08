import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import GlobalNetwork from './components/GlobalNetwork';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import Toast from './components/Toast';


export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState('');
  const [contactPrefillData, setContactPrefillData] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (toastConfig) => {
    setToast(toastConfig);
  };

  const handleCloseToast = () => {
    setToast(null);
  };

  const handleOpenQuote = (serviceName = '') => {
    setSelectedServiceForQuote(typeof serviceName === 'string' ? serviceName : '');
    setQuoteModalOpen(true);
  };

  const handleSelectServiceForQuote = (serviceTitle) => {
    setContactPrefillData({
      serviceType: serviceTitle,
      message: `I would like to inquire about booking: ${serviceTitle}. Please share custom enterprise pricing and transit schedules.`
    });
    
    // Smooth scroll down to contact section
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }

    showToast({
      type: 'info',
      title: 'Service Selected',
      message: `Quote form pre-filled with ${serviceTitle}`
    });
  };

  const handleExploreServices = () => {
    const servicesElem = document.getElementById('services');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF7]/40 text-[#151615] font-sans selection:bg-forest-moss selection:text-white relative">

      {/* Toast Notification Container */}
      <Toast toast={toast} onClose={handleCloseToast} />

      {/* Floating Pill Navigation Bar */}
      <Navbar 
        onOpenQuote={() => handleOpenQuote()} 
        showToast={showToast}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section with Interactive 3D Globe and Attached Banner Logo */}
        <Hero 
          onOpenQuote={() => handleOpenQuote()} 
          onExploreServices={handleExploreServices}
        />

        {/* 2. Key Stats & Industry Credentials */}
        <StatsSection />

        {/* 3. Services Offered (Grid & Detailed Modals) */}
        <ServicesSection 
          onSelectServiceForQuote={handleSelectServiceForQuote} 
        />

        {/* 4. Global Network Interactive 3D Globe Section */}
        <GlobalNetwork 
          onOpenQuote={() => handleOpenQuote()} 
        />

        {/* 5. Contact & Company Details Section (Both Hubs + Validated Form) */}
        <ContactSection 
          prefillData={contactPrefillData}
          showToast={showToast}
        />
      </main>

      {/* 6. Comprehensive Footer with Official Attached Banner Logo */}
      <Footer 
        onOpenQuote={() => handleOpenQuote()} 
        showToast={showToast} 
      />

      {/* Get Started / Quote Floating Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={selectedServiceForQuote}
        showToast={showToast}
      />
    </div>
  );
}
