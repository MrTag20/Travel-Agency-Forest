import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/travelData';

export default function Header({ onOpenBooking, onOpenAiChat }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled state for backdrop/color adaptations
      setIsScrolled(currentScrollY > 40);

      // Headroom behavior: hide when scrolling down, show when scrolling up
      if (currentScrollY > 60) {
        if (currentScrollY > lastScrollYRef.current + 6) {
          // Scrolling down - hide navbar unless mobile menu is actively open
          if (!mobileMenuOpen) {
            setIsVisible(false);
          }
        } else if (currentScrollY < lastScrollYRef.current - 6) {
          // Scrolling up - reveal navbar
          setIsVisible(true);
        }
      } else {
        // Near top of page - always visible
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Close mobile drawer and reset visibility upon route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setIsVisible(true);
  }, [location.pathname]);

  // Primary navigation links for desktop
  const primaryNavLinks = [
    { label: 'Home', path: '/' },
    { label: 'Tour Packages', path: '/sundarban-tour-packages' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact', path: '/contact-us' },
  ];

  // Full navigation links for mobile drawer
  const allNavLinks = [
    { label: 'Home', path: '/' },
    { label: 'Tour Packages', path: '/sundarban-tour-packages' },
    { label: 'Experiences', path: '/sundarban-experiences' },
    { label: 'Destinations', path: '/sundarban-tour-places' },
    { label: 'Travel Guide', path: '/sundarban-tour-guide' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact', path: '/contact-us' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full py-3.5 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
      } ${
        isScrolled 
          ? 'bg-[#2e3a2f]/90 backdrop-blur-md shadow-lg border-b border-white/10' 
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent'
      }`}
    >
      <nav className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with Clean Text */}
          <Link 
            to="/" 
            className="flex flex-col group transition-opacity hover:opacity-90"
          >
            <span 
              className="font-serif text-base sm:text-lg lg:text-xl font-bold tracking-wider leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
            >
              SM BENGAL <span className="text-accent">TRAVEL</span>
            </span>
            <span 
              className="text-[9px] sm:text-[10px] text-white/85 uppercase tracking-[0.18em] font-semibold mt-0.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
            >
              Sundarban Wildlife & Escapes
            </span>
          </Link>

          {/* Desktop Navigation Pill Capsule */}
          <div 
            className="hidden lg:flex items-center gap-8 bg-ivory/90 backdrop-blur-xl border border-sand/75 rounded-full px-9 py-2.5 shadow-[0_8px_24px_rgba(46,58,47,0.08)]"
          >
            {primaryNavLinks.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm sm:text-base transition-colors duration-200 ${
                    active 
                      ? 'text-accent font-bold' 
                      : 'text-primary font-medium hover:text-accent'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Header Action Buttons & Mobile Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Ask AI button */}
            <button
              onClick={() => onOpenAiChat && onOpenAiChat()}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-bold bg-ivory/90 hover:bg-white text-primary border border-accent/40 hover:border-accent shadow-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer backdrop-blur-md"
              title="Chat with Bono AI"
              aria-label="Ask AI"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Ask AI</span>
            </button>

            {/* Book Safari CTA */}
            <button 
              onClick={() => onOpenBooking && onOpenBooking()} 
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-accent hover:bg-[#b35d3e] shadow-[0_6px_20px_rgba(201,111,79,0.35)] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Book Safari</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center p-2 sm:p-2.5 rounded-full bg-ivory/90 backdrop-blur-md text-primary border border-sand/85 shadow-sm cursor-pointer hover:bg-white transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed top-[68px] inset-x-4 max-w-lg mx-auto bg-ivory/95 backdrop-blur-2xl border border-sand/85 rounded-3xl p-6 flex flex-col gap-3 shadow-2xl z-50 max-h-[calc(100vh-90px)] overflow-y-auto"
        >
          {allNavLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-semibold py-2.5 border-b border-sand/35 transition-colors ${
                isActive(item.path) ? 'text-accent' : 'text-primary hover:text-accent'
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-3 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenAiChat) onOpenAiChat();
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-primary to-[#1f2720] text-white border border-accent flex items-center justify-center gap-2 font-bold text-sm shadow-md cursor-pointer hover:opacity-95"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Ask AI</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBooking) onOpenBooking();
              }}
              className="w-full py-3 rounded-full bg-accent text-white font-semibold text-sm shadow-md hover:bg-[#b35d3e] transition-colors cursor-pointer"
            >
              Plan Your Tour
            </button>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumberDigits}?text=Hi,%20I%20want%20to%20plan%20a%20Sundarban%20tour.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm shadow-md text-center hover:opacity-95 transition-opacity"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
