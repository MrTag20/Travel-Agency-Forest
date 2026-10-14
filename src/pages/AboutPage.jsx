import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { COMPANY_INFO } from '../data/travelData';
import { ShieldCheck, Heart, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutPage({ onOpenBooking }) {
  return (
    <div className="bg-[#fcfaf7] min-h-screen pb-16 sm:pb-20">
      {/* Header */}
      <div className="relative bg-gradient-to-b from-[#2e3a2f]/95 via-[#2e3a2f]/90 to-[#2e3a2f] text-white py-14 sm:py-16 md:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About Us', path: '/about-us' }]} />
          <div className="max-w-3xl mt-4">
            <span className="inline-flex items-center text-xs sm:text-sm font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#c96f4f]/20 text-[#e5b382] border border-[#c96f4f]/40">
              Our Roots & Mission
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
              About SM Bengal Travel
            </h1>
            <p className="text-white/85 text-base sm:text-lg leading-relaxed">
              Local delta specialists dedicated to transparent, safe, and culturally respectful Sundarban tourism.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">
          <div>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#c96f4f] block mb-2">
              Who We Are
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1c2e24] mb-5 leading-tight">
              Born from a Love for the Mangrove Delta
            </h2>
            <p className="text-base text-[#4a5548] leading-relaxed mb-4">
              <strong className="text-[#1c2e24]">{COMPANY_INFO.name}</strong> was founded with a singular purpose: to bridge travelers with the true, unhurried wilderness of the Sundarbans. We work directly with licensed local boatmen, certified forest guides, island cooks, and village storytellers to deliver authentic experiences.
            </p>
            <p className="text-base text-[#4a5548] leading-relaxed mb-6">
              Unlike crowded commercial mass tours, our itineraries are thoughtfully scheduled around tidal windows to optimize wildlife spotting, creek peace, and guest safety.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {[
                'Licensed Forest Department clearance for every safari',
                'Sturdy wooden vessels with certified life jackets & onboard toilets',
                '100% fresh, locally procured Bengali meals prepared onboard',
                'Honest pricing with zero hidden entrance charges'
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 border border-[#d9c9b2]/60 shadow-xs"
                >
                  <CheckCircle2 size={18} className="text-[#2d5a3f] shrink-0" />
                  <span className="text-sm font-medium text-[#1c2e24]">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button 
                onClick={() => onOpenBooking && onOpenBooking()} 
                className="inline-flex items-center gap-2 py-3.5 px-6 rounded-xl bg-[#2d5a3f] text-white font-semibold text-sm hover:bg-[#234631] shadow-md hover:shadow-lg transition-all duration-200"
              >
                <span>Plan Your Journey</span>
                <ArrowRight size={16} />
              </button>
              <Link 
                to="/contact-us" 
                className="inline-flex items-center gap-2 py-3.5 px-6 rounded-xl border border-[#2d5a3f] text-[#2d5a3f] font-semibold text-sm hover:bg-[#2d5a3f] hover:text-white transition-all duration-200"
              >
                <span>Contact Operations Desk</span>
              </Link>
            </div>
          </div>

          <div>
            <div className="bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-3xl border border-[#d9c9b2]/60 shadow-xl overflow-hidden">
              <img
                src="/images/tiger-wildlife.jpg"
                alt="Wildlife in Sundarban mangrove forest"
                className="w-full h-80 sm:h-96 lg:h-[440px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Pillars / Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-[#d9c9b2]/60 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#c96f4f]/10 text-[#c96f4f] flex items-center justify-center mb-4">
              <ShieldCheck size={26} />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1c2e24] mb-2">
              Safety First Standards
            </h3>
            <p className="text-sm text-[#4a5548] leading-relaxed">
              We adhere strictly to maritime safety protocols and Forest Department guidelines. All passengers receive fitting life jackets, and our boats undergo regular inspections.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-[#d9c9b2]/60 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#2d5a3f]/10 text-[#2d5a3f] flex items-center justify-center mb-4">
              <Heart size={26} />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1c2e24] mb-2">
              Ecology & Respect
            </h3>
            <p className="text-sm text-[#4a5548] leading-relaxed">
              We maintain a zero-single-use-plastic code on all safaris. We respect the silence of the creeks and ensure wildlife is observed without disturbance or artificial feeding.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-[#d9c9b2]/60 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#c96f4f]/10 text-[#c96f4f] flex items-center justify-center mb-4">
              <Users size={26} />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1c2e24] mb-2">
              Local Community Support
            </h3>
            <p className="text-sm text-[#4a5548] leading-relaxed">
              Our crews, boat owners, cooks, and cultural performers are indigenous residents of the Sundarban islands, ensuring tourism directly benefits local livelihoods.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
