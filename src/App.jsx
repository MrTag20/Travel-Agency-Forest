import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BookingModal from './components/BookingModal';
import AiChatAssistant from './components/AiChatAssistant';

import HomePage from './pages/HomePage';
import PackagesPage from './pages/PackagesPage';
import PackageDetailPage from './pages/PackageDetailPage';
import ExperiencesPage from './pages/ExperiencesPage';
import DestinationsPage from './pages/DestinationsPage';
import TravelGuidePage from './pages/TravelGuidePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import useScrollReveal from './hooks/useScrollReveal';

// Scroll to top & trigger scroll reveal animations upon route change
function ScrollController() {
  const { pathname } = useLocation();
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPkgId, setSelectedPkgId] = useState('');
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);

  const handleOpenBooking = (pkgId) => {
    if (pkgId) setSelectedPkgId(pkgId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleOpenAiChat = () => {
    setIsAiChatOpen(true);
  };

  const handleCloseAiChat = () => {
    setIsAiChatOpen(false);
  };

  const handleToggleAiChat = () => {
    setIsAiChatOpen((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <ScrollController />
      <div className="site-wrapper flex flex-col min-h-screen w-full bg-[#fcfaf7] text-[#1c2e24]">
        <Header 
          onOpenBooking={() => handleOpenBooking()} 
          onOpenAiChat={handleOpenAiChat}
        />

        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
            
            {/* Packages listing */}
            <Route path="/sundarban-tour-packages" element={<PackagesPage onOpenBooking={handleOpenBooking} />} />
            
            {/* Exact package detail routes from reference architecture */}
            <Route 
              path="/sundarban-1-day-tour" 
              element={<PackageDetailPage packageIdOverride="sundarban-1-day-tour" onOpenBooking={handleOpenBooking} />} 
            />
            <Route 
              path="/sundarban-1-night-2-days-package" 
              element={<PackageDetailPage packageIdOverride="sundarban-1-night-2-days-package" onOpenBooking={handleOpenBooking} />} 
            />
            <Route 
              path="/sundarban-2-nights-3-days-package" 
              element={<PackageDetailPage packageIdOverride="sundarban-2-nights-3-days-package" onOpenBooking={handleOpenBooking} />} 
            />
            <Route 
              path="/sundarban-3-nights-4-days-package" 
              element={<PackageDetailPage packageIdOverride="sundarban-3-nights-4-days-package" onOpenBooking={handleOpenBooking} />} 
            />

            {/* Experiences & Destinations */}
            <Route path="/sundarban-experiences" element={<ExperiencesPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/sundarban-tour-places" element={<DestinationsPage onOpenBooking={handleOpenBooking} />} />

            {/* Travel Guide & About */}
            <Route path="/sundarban-tour-guide" element={<TravelGuidePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/about-us" element={<AboutPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/blog" element={<BlogPage />} />

            {/* Contact */}
            <Route path="/contact-us" element={<ContactPage />} />

            {/* Legal & Policies */}
            <Route path="/refund-policy" element={<RefundPolicyPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />

            {/* Dynamic slug route fallback */}
            <Route path="/:packageSlug" element={<PackageDetailPage onOpenBooking={handleOpenBooking} />} />
          </Routes>
        </main>

        <Footer onOpenBooking={() => handleOpenBooking()} />
        <FloatingWhatsApp />

        {/* Bono AI Travel & Booking Assistant */}
        <AiChatAssistant 
          isOpen={isAiChatOpen}
          onClose={handleCloseAiChat}
          onToggle={handleToggleAiChat}
          onOpenBooking={handleOpenBooking}
        />

        {/* Global Booking & Reservation Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={handleCloseBooking}
          preselectedPackageId={selectedPkgId}
        />
      </div>
    </BrowserRouter>
  );
}
