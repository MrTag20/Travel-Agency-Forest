import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp, Shield } from 'lucide-react';
import { COMPANY_INFO, PACKAGES } from '../data/travelData';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-sand border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-3.5">
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide block">
                SM BENGAL <span className="text-accent">TRAVEL</span>
              </span>
              <span className="text-[11px] uppercase tracking-widest text-accent font-semibold">
                Sundarban Tour Specialists
              </span>
            </div>

            <p className="text-xs sm:text-sm text-sand/80 leading-relaxed">
              Specialized local tour operator curating authentic, safe, and memorable Sundarban journeys with licensed forest guides and fresh Bengali cuisine.
            </p>

            <div className="flex items-center gap-2 text-xs text-sand/90 pt-1">
              <Shield className="w-4 h-4 text-accent shrink-0" />
              <span>Govt. Forest Clearance Guaranteed</span>
            </div>
          </div>

          {/* Column 2: Tour Packages */}
          <div>
            <h4 className="text-white text-base font-bold mb-4 font-serif">
              Tour Packages
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {PACKAGES.map((pkg) => (
                <li key={pkg.id}>
                  <Link
                    to={`/${pkg.slug}`}
                    className="text-sand/80 hover:text-accent transition-colors block"
                  >
                    {pkg.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/sundarban-tour-packages"
                  className="text-accent hover:underline font-semibold text-xs inline-flex items-center gap-1"
                >
                  <span>View All Packages &rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-white text-base font-bold mb-4 font-serif">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { label: 'Sundarban Experiences', path: '/sundarban-experiences' },
                { label: 'Destinations & Places', path: '/sundarban-tour-places' },
                { label: 'Complete Travel Guide', path: '/sundarban-tour-guide' },
                { label: 'About SM Bengal Travel', path: '/about-us' },
                { label: 'Travel Articles & Blog', path: '/blog' },
                { label: 'Contact & Reservations', path: '/contact-us' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-sand/80 hover:text-accent transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white text-base font-bold mb-4 font-serif">
              Contact Desk
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-sand/85">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <div>
                  <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`} className="text-white font-semibold hover:text-accent transition-colors block">
                    {COMPANY_INFO.phone}
                  </a>
                  <div className="text-[11px] text-sand/60">Support: 7:00 AM – 9:00 PM</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:text-accent transition-colors break-all">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-white text-xs">Departure Hub:</div>
                  <div className="text-xs text-sand/75">{COMPANY_INFO.departureHub}</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal, Policy & Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand/65">
          <div className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/refund-policy" className="hover:text-white transition-colors">
              Refund Policy
            </Link>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-accent font-medium text-xs border border-white/15 transition-all cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
