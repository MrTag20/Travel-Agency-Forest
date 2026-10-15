import React from 'react';
import { Link } from 'react-router-dom';
import HeroCanvas from '../components/HeroCanvas';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import CuratedTourPackagesSection from '../components/CuratedTourPackagesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FaqAccordion from '../components/FaqAccordion';
import { COMPANY_INFO, FAQS } from '../data/travelData';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Utensils, 
  Car, 
  Calendar, 
  MessageSquare, 
  Phone,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export default function HomePage({ onOpenBooking }) {
  // Top 4 most critical buyer FAQs
  const funnelFaqs = [
    FAQS[0], // How do I reach from Kolkata?
    FAQS[2], // Can I spot a Royal Bengal Tiger?
    FAQS[3], // Is it safe for families & children?
    FAQS[6], // Cancellation & refund
  ].filter(Boolean);

  return (
    <div className="home-page relative w-full overflow-hidden">
      {/* 1. Cinematic Video Hero */}
      <HeroCanvas onOpenBooking={onOpenBooking} />

      {/* 2. Why Choose Us Section */}
      <WhyChooseUsSection onOpenBooking={onOpenBooking} />

      {/* 3. Our Tour Packages Section */}
      <CuratedTourPackagesSection onOpenBooking={onOpenBooking} />

      {/* 4. 4-Pillar Trust Strip */}
      <section className="py-10 sm:py-14 relative overflow-hidden bg-ivory/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal-fade-up text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-2">
              The Sundarban Guarantee
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Travel With Complete Peace of Mind
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {[
              {
                icon: <ShieldCheck className="w-4 h-4 text-accent" />,
                badge: 'Govt. Authorized',
                image: '/images/trust-forest-clearance.jpg',
                alt: 'Sajnekhali Range Office Forest Department Checkpoint with official safari boat',
                title: '100% Forest Clearance',
                desc: 'Government-registered boats, official Sajnekhali range entry permits, and certified local naturalists.',
                highlight: 'Official Range Permits'
              },
              {
                icon: <Utensils className="w-4 h-4 text-accent" />,
                badge: 'Cooked Live Onboard',
                image: '/images/trust-onboard-meals.jpg',
                alt: 'Steaming authentic Bengali meal spread served on boat table with river window view',
                title: 'Fresh Onboard Meals',
                desc: 'Authentic hot Bengali delicacies cooked fresh on the boat daily — fragrant rice, river fish curry & bharer cha.',
                highlight: 'Fresh Bengali Delicacies'
              },
              {
                icon: <Car className="w-4 h-4 text-accent" />,
                badge: 'Chauffeured Pickup',
                image: '/images/trust-door-transfers.jpg',
                alt: 'Comfortable AC traveler car at Godkhali Ferry Point with chauffeur luggage assist',
                title: 'Door-to-Door Transfers',
                desc: 'Comfortable sanitized AC vehicles from central Kolkata directly to Godkhali Ghat ferry point and back.',
                highlight: 'Doorstep Pickup & Return'
              },
              {
                icon: <CheckCircle2 className="w-4 h-4 text-accent" />,
                badge: 'Zero Hidden Charges',
                image: '/images/trust-transparent-pricing.jpg',
                alt: 'Sundarbans watchtower panoramic view over watering hole and river delta',
                title: 'Transparent Pricing',
                desc: 'Zero hidden entry charges, watchtower fees, or surprise guide costs. 100% honest quotes upfront.',
                highlight: 'All Fees & Taxes Included'
              }
            ].map((pillar, pidx) => (
              <div
                key={pidx}
                data-delay={pidx * 100}
                className="reveal-fade-up flex flex-col bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden border border-[#d9c9b2]/70 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative w-full h-48 overflow-hidden group">
                  <img
                    src={pillar.image}
                    alt={pillar.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-sm text-white text-xs font-semibold">
                    {pillar.icon}
                    <span>{pillar.badge}</span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-serif text-lg font-bold text-primary mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-primary/75 mb-4 leading-relaxed flex-grow">
                    {pillar.desc}
                  </p>
                  <div className="flex items-center gap-1.5 pt-3 border-t border-sand/40 text-xs font-semibold text-accent">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{pillar.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 3-Step Simple How It Works Funnel */}
      <section className="pt-12 sm:pt-16 pb-10 sm:pb-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Curious Green Chameleon on Branch (reduced size, placed upright as per reference) */}
          <div className="reveal-fade-left hidden lg:block absolute -left-2 sm:-left-4 lg:-left-6 xl:-left-8 -top-8 sm:-top-10 lg:-top-14 xl:-top-16 w-64 lg:w-76 xl:w-[350px] pointer-events-none drop-shadow-xl z-10 hover:scale-105 transition-transform duration-300">
            <img 
              src="/Curious%20Green%20Chameleon%20on%20Branch.png" 
              alt="Curious Green Chameleon on Branch" 
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="reveal-fade-up text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-2">
              Seamless Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-3">
              How Your Trip Works
            </h2>
            <p className="text-sm sm:text-base text-primary/75 leading-relaxed">
              From initial WhatsApp inquiry to cruising the mangrove creeks in 3 simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                num: '01',
                title: 'Select Your Tour',
                desc: 'Choose between a 1-day express tour, weekend cottage stay, or 3-day deep wildlife expedition.'
              },
              {
                num: '02',
                title: 'Instant Confirmation',
                desc: 'Connect on WhatsApp to confirm dates, room types, and forest clearance passes without paperwork hassle.'
              },
              {
                num: '03',
                title: 'Board & Enjoy The Delta',
                desc: 'Board our AC vehicle in Kolkata or boat at Godkhali. Relax while we take care of all meals and safaris.'
              }
            ].map((step, sidx) => (
              <div
                key={sidx}
                data-delay={sidx * 120}
                className="reveal-fade-up p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-[#d9c9b2]/70 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
              >
                <div className="font-serif text-4xl sm:text-5xl font-extrabold text-accent mb-3.5">
                  {step.num}
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-primary/75 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Visual Experience Gallery */}
      <section className="py-10 sm:py-14 relative overflow-hidden bg-primary text-white" id="visual-proof">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Title and Wildlife Art PNGs (Doubled Size) */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 sm:mb-10">
            <div className="reveal-fade-left hidden lg:flex items-center justify-center shrink-0 w-52 h-52 xl:w-64 xl:h-64 opacity-95 hover:opacity-100 transition-all hover:scale-105 duration-300">
              <img 
                src="/download__10_-removebg-preview.png" 
                alt="Golden Leopard Line Art" 
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]"
              />
            </div>

            <div className="reveal-fade-up text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-8 h-[1px] bg-sand/60" />
                <span className="text-xs font-bold uppercase tracking-widest text-sand">
                  VISUAL PROOF
                </span>
                <span className="w-8 h-[1px] bg-sand/60" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
                What Awaits You in the <span className="text-accent italic">Sundarbans</span>
              </h2>

              <p className="text-sm sm:text-base text-sand/80 leading-relaxed">
                Immerse yourself in authentic delta adventures, untamed mangrove wilderness, 
                and unforgettable living biodiversity.
              </p>
            </div>

            <div className="reveal-fade-right hidden lg:flex items-center justify-center shrink-0 w-52 h-52 xl:w-64 xl:h-64 opacity-95 hover:opacity-100 transition-all hover:scale-105 duration-300">
              <img 
                src="/Elegant%20Gold%20Butterfly%20Line%20Art.png" 
                alt="Elegant Gold Butterfly Line Art" 
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {[
              {
                title: 'River Boat Safaris',
                badge: 'CREEK SAFARI',
                image: '/images/boat-safari.jpg',
                alt: 'Traditional covered wooden boat cruising calmly through mangrove channel',
                desc: 'Silent creek cruising on covered wooden vessels deep into untouched tidal waterways.',
                highlight: 'Traditional Wooden Boat • Licensed Crew',
                link: '/sundarban-experiences'
              },
              {
                title: 'Tiger & Wildlife Tracking',
                badge: 'WILDLIFE SPOTTING',
                image: '/images/tiger-wildlife.jpg',
                alt: 'Royal Bengal Tiger prowling along the muddy creek bank amidst mangrove roots',
                desc: 'Naturalist-led tracking along tidal mudbanks in the core Sundarban tiger habitat.',
                highlight: 'Core Habitat Corridor • Certified Naturalist',
                link: '/sundarban-experiences'
              },
              {
                title: 'Dobanki Canopy Walkway',
                badge: 'CANOPY WALKWAY',
                image: '/images/watchtower-view.jpg',
                alt: 'Elevated Dobanki watchtower panoramic vantage over tree canopy and watering hole',
                desc: 'Elevated 20-ft vantage points above mangrove trees overlooking sweet-water watering holes.',
                highlight: '20-ft Elevated Bridge • 360° Panorama',
                link: '/sundarban-tour-places'
              },
              {
                title: 'Delta Wildlife & Estuary Life',
                badge: 'ESTUARINE HABITAT',
                image: '/images/delta-wildlife.jpg',
                alt: 'Spotted deer herds, estuarine crocodile, and river dolphin in natural delta habitat',
                desc: 'Herds of spotted chital deer, basking estuarine crocodiles, and rare Gangetic river dolphins.',
                highlight: 'Biodiversity Sanctuary • Rare Species',
                link: '/sundarban-experiences'
              }
            ].map((exp, idx) => (
              <div
                key={idx}
                data-delay={idx * 100}
                className="reveal-fade-up flex flex-col bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/15 hover:border-accent transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-semibold text-sand">
                    <Sparkles className="w-3.5 h-3.5 text-accent" />
                    <span>{exp.badge}</span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-sand/80 mb-4 leading-relaxed flex-grow">
                    {exp.desc}
                  </p>
                  <div className="flex items-center gap-1.5 pt-3 border-t border-white/10 text-xs text-sand/90 mb-4">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span className="truncate">{exp.highlight}</span>
                  </div>
                  <Link 
                    to={exp.link}
                    className="w-full py-2.5 px-4 rounded-xl bg-white/15 hover:bg-accent text-white font-semibold text-xs text-center flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>View Experience</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 text-center">
            <Link 
              to="/sundarban-experiences"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-accent hover:bg-[#b35d3e] text-white font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
            >
              <span>Explore All Experiences</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Customer Testimonials */}
      <TestimonialsSection />

      {/* 8. Curated Buyer FAQs */}
      <section className="py-10 sm:py-14 relative overflow-hidden bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal-fade-up text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-2">
              Direct Answers
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-primary/75 leading-relaxed">
              Essential facts about safety, pickup points, and booking your safari.
            </p>
          </div>

          <div className="reveal-fade-up delay-100">
            <FaqAccordion items={funnelFaqs} />
          </div>

          <div className="reveal-fade-up delay-200 text-center mt-6 sm:mt-8">
            <Link 
              to="/sundarban-tour-guide" 
              className="text-primary font-semibold text-sm hover:text-accent inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Read our complete travel guide for packing & route details &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Direct Booking Hotline Closing Banner */}
      <div className="pt-2 pb-14 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
        <section className="reveal-scale py-14 sm:py-20 relative overflow-hidden rounded-3xl max-w-7xl mx-auto text-white shadow-2xl">
          {/* Background image of tiger beside river */}
          <img 
            src="/images/tiger-beside-river.jpg" 
            alt="Royal Bengal Tiger beside river in the Sundarbans" 
            className="absolute inset-0 w-full h-full object-cover object-center" 
            loading="lazy"
          />

          {/* 10% overlay */}
          <div className="absolute inset-0 bg-black/10 z-[1]" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="reveal-fade-up inline-block px-4 py-1.5 rounded-full bg-black/50 border border-white/30 backdrop-blur-md text-[#C96F4F] text-xs font-bold uppercase tracking-widest mb-4 drop-shadow-md">
              Direct Booking Hotline
            </span>

            <h2 className="reveal-fade-up delay-100 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              Ready to Explore the <span className="text-[#C96F4F] italic">Sundarbans</span>?
            </h2>

            <p className="reveal-fade-up delay-150 text-sm sm:text-base text-white/95 max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-medium">
              Connect with our local tour desk right now for upcoming departure dates, 
              waterfront cottage availability, and instant quotes. Zero hidden fees, 100% transparent pricing.
            </p>

            <div className="reveal-fade-up delay-200 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={() => onOpenBooking && onOpenBooking()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-accent hover:bg-[#b35d3e] text-white font-semibold text-sm sm:text-base shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Plan Your Trip Online</span>
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumberDigits}?text=Hello%20SM%20Bengal%20Travel,%20I%20am%20ready%20to%20plan%20my%20Sundarban%20tour.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm sm:text-base shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:scale-105 active:scale-95 transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-black/60 hover:bg-black/80 border border-white/40 text-white font-semibold text-sm sm:text-base backdrop-blur-md transition-colors shadow-lg"
              >
                <Phone className="w-4 h-4 text-[#C96F4F]" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>

            <div className="reveal-fade-up delay-300 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-white/95 pt-6 border-t border-white/25 drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] font-medium">
              <span>⚡ Instant Booking Confirmation</span>
              <span>•</span>
              <span>✓ 100% Govt. Forest Clearance</span>
              <span>•</span>
              <span>🛡️ Certified Local Naturalists</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
