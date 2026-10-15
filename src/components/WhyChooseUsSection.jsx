import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Ship, 
  Bed, 
  ShieldCheck, 
  Users, 
  Leaf, 
  ArrowUpRight,
  ArrowRight,
  Award
} from 'lucide-react';

export default function WhyChooseUsSection({ onOpenBooking }) {
  const features = [
    {
      id: 'local-expertise',
      title: 'Local Expertise',
      desc: 'Guided by people who know the Sundarbans inside out.',
      bg: '#4d6952',
      icon: <MapPin className="w-5 h-5 text-white" />
    },
    {
      id: 'planned-tours',
      title: 'Thoughtfully Planned Tours',
      desc: 'Well-designed itineraries for a safe and enriching experience.',
      bg: '#c5b085',
      icon: <Ship className="w-5 h-5 text-white" />
    },
    {
      id: 'comfortable-stays',
      title: 'Comfortable Stays',
      desc: 'Handpicked accommodations for a relaxing journey.',
      bg: '#b96646',
      icon: <Bed className="w-5 h-5 text-white" />
    },
    {
      id: 'safety-priority',
      title: 'Your Safety, Our Priority',
      desc: 'Reliable support, trained guides and proper safety arrangements.',
      bg: '#33483c',
      icon: <ShieldCheck className="w-5 h-5 text-white" />
    }
  ];

  return (
    <section className="relative pt-16 sm:pt-20 pb-8 sm:pb-10 overflow-hidden" id="why-choose-us">
      {/* Decorative compass watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="#2e3a2f" strokeWidth="1.2" className="w-full h-full">
          <circle cx="50" cy="50" r="38" strokeDasharray="2 3" />
          <circle cx="50" cy="50" r="28" />
          <polygon points="50,14 54,46 50,42 46,46" fill="#2e3a2f" />
          <polygon points="50,86 54,54 50,58 46,54" fill="#2e3a2f" />
          <polygon points="14,50 46,54 42,50 46,46" fill="#2e3a2f" />
          <polygon points="86,50 54,54 58,50 54,46" fill="#2e3a2f" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-5 flex justify-center reveal-fade-left">
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-sand/60 bg-white/40 p-2">
                <img 
                  src="/images/why-choose-us-collage@2x.png" 
                  alt="Sundarban delta boat safari, Bengal tiger, water cottages, and delta wildlife" 
                  className="w-full h-auto rounded-2xl object-cover hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Floating Trust Badge */}
              <div className="reveal-scale delay-200 absolute -bottom-5 -right-3 sm:right-4 bg-white/95 backdrop-blur-md border border-sand/70 rounded-2xl p-3.5 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-primary">Certified Operators</div>
                  <div className="text-[11px] text-primary/70">WBFDC Forest Dept. Approved</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start relative">
            {/* Realistic Green Parrot on Branch straight to this line on right side (placed higher without overlaying hero) */}
            <div className="reveal-fade-right hidden sm:block absolute right-0 lg:-right-6 -top-3 sm:-top-8 lg:-top-12 w-36 sm:w-44 lg:w-56 pointer-events-none drop-shadow-xl z-10 hover:scale-105 transition-transform duration-300">
              <img 
                src="/Realistic%20Green%20Parrot%20on%20Branch.png" 
                alt="Realistic Green Parrot on Branch" 
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Eyebrow */}
            <div className="reveal-fade-up inline-flex items-center gap-2 mb-3">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-accent uppercase">
                WHY CHOOSE US
              </span>
              <span className="w-10 h-[1.5px] bg-accent/60" />
            </div>

            {/* Heading */}
            <h2 className="reveal-fade-up delay-100 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-4 max-w-md lg:max-w-xl">
              More Than a Trip, <br />
              <span className="text-accent italic">A Deeper Connection.</span>
            </h2>

            {/* Description */}
            <p className="reveal-fade-up delay-150 text-sm sm:text-base text-primary/80 leading-relaxed mb-8 max-w-2xl">
              At SM Bengal Travel, we don't just take you to the Sundarbans, we help you 
              experience its soul. With deep local knowledge, carefully planned journeys, 
              and a commitment to responsible travel, we make every trip meaningful, 
              comfortable, and unforgettable.
            </p>

            {/* 4 Feature Cards (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {features.map((feat, fidx) => (
                <div 
                  key={feat.id} 
                  data-delay={(fidx + 1) * 90}
                  className="reveal-fade-up p-4 rounded-2xl bg-white/85 backdrop-blur-sm border border-sand/60 shadow-sm hover:shadow-md transition-all flex items-start gap-3.5"
                >
                  <div 
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
                    style={{ backgroundColor: feat.bg }}
                  >
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-primary mb-1">
                      {feat.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-primary/70 leading-normal">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Bar */}
            <div className="reveal-fade-up delay-300 w-full p-4 sm:p-5 rounded-2xl bg-white/85 backdrop-blur-md border border-sand/60 shadow-sm flex flex-wrap items-center justify-around gap-4 sm:gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-accent shrink-0" />
                <div>
                  <div className="text-xl sm:text-2xl font-black text-primary">5000+</div>
                  <div className="text-xs text-primary/70">Happy Travellers</div>
                </div>
              </div>

              <div className="hidden sm:block w-[1px] h-10 bg-sand/60" />

              <div className="flex items-center gap-3">
                <Leaf className="w-6 h-6 text-secondary shrink-0" />
                <div>
                  <div className="text-xl sm:text-2xl font-black text-primary">10+</div>
                  <div className="text-xs text-primary/70">Unique Experiences</div>
                </div>
              </div>

              <div className="hidden sm:block w-[1px] h-10 bg-sand/60" />

              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <div className="text-xl sm:text-2xl font-black text-primary">Years of</div>
                  <div className="text-xs text-primary/70">Local Heritage</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="reveal-fade-up delay-400 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Link 
                to="/sundarban-tour-packages" 
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-accent hover:bg-[#b35d3e] shadow-[0_6px_20px_rgba(201,111,79,0.35)] transition-all duration-200 hover:scale-105 active:scale-95 text-center"
              >
                <span>Explore Tour Packages</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <button 
                type="button" 
                onClick={() => onOpenBooking && onOpenBooking()} 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-primary bg-sand/35 hover:bg-sand/60 transition-colors text-center cursor-pointer"
              >
                <span>Plan Your Custom Trip</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
