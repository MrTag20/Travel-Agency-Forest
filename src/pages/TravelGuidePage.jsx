import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { COMPANY_INFO } from '../data/travelData';
import { 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Car, 
  Train, 
  Sun, 
  CloudRain, 
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

export default function TravelGuidePage({ onOpenBooking }) {
  return (
    <div className="bg-[#fcfaf7] min-h-screen pb-16 sm:pb-20">
      {/* Header */}
      <div className="relative bg-gradient-to-b from-[#2e3a2f]/95 via-[#2e3a2f]/90 to-[#2e3a2f] text-white py-14 sm:py-16 md:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Travel Guide', path: '/sundarban-tour-guide' }]} />
          <div className="max-w-3xl mt-4">
            <span className="inline-flex items-center text-xs sm:text-sm font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#c96f4f]/20 text-[#e5b382] border border-[#c96f4f]/40">
              Complete Planning Guide
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
              Sundarban Travel Guide: Everything You Need to Know
            </h1>
            <p className="text-white/85 text-base sm:text-lg leading-relaxed">
              A factual, comprehensive handbook to timing your visit, packing appropriately, navigating routes from Kolkata, and respecting the delta ecosystem.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 items-start">
          {/* Main Guide Content (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col gap-8 sm:gap-10">
            {/* Section 1: Best Time to Visit */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-[#d9c9b2]/60 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#c96f4f]/10 text-[#c96f4f] flex items-center justify-center">
                  <Calendar size={22} />
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1c2e24]">
                  Best Time to Visit the Sundarbans
                </h2>
              </div>
              <p className="text-base text-[#4a5548] leading-relaxed mb-6">
                The Sundarbans can be visited throughout the year, but each season offers a distinct landscape and travel experience:
              </p>

              <div className="flex flex-col gap-4">
                <div className="p-5 rounded-xl bg-[#fcfaf7] border border-[#d9c9b2]/60">
                  <div className="flex items-center gap-2 mb-2">
                    <Sun size={18} className="text-[#c96f4f]" />
                    <h3 className="font-serif text-lg font-bold text-[#1c2e24]">
                      October to March (Peak Winter Season)
                    </h3>
                  </div>
                  <p className="text-sm text-[#4a5548] leading-relaxed">
                    The weather is delightfully cool (15°C to 26°C), skies are clear, and water conditions are calm. Wildlife, including Royal Bengal Tigers and saltwater crocodiles, frequently basks on sunny mudbanks during midday hours. Highly recommended for first-time visitors and families.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#fcfaf7] border border-[#d9c9b2]/60">
                  <div className="flex items-center gap-2 mb-2">
                    <CloudRain size={18} className="text-[#2d5a3f]" />
                    <h3 className="font-serif text-lg font-bold text-[#1c2e24]">
                      July to September (Monsoon Magic)
                    </h3>
                  </div>
                  <p className="text-sm text-[#4a5548] leading-relaxed">
                    The mangrove canopy becomes intensely vibrant and green. While heavy downpours can occasionally occur, our covered boats allow safe cruising. Ideal for poets, nature photographers, and those seeking serene, uncrowded backwaters.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#fcfaf7] border border-[#d9c9b2]/60">
                  <div className="flex items-center gap-2 mb-2">
                    <Sun size={18} className="text-[#c96f4f]" />
                    <h3 className="font-serif text-lg font-bold text-[#1c2e24]">
                      April to June (Summer Season)
                    </h3>
                  </div>
                  <p className="text-sm text-[#4a5548] leading-relaxed">
                    Warm and humid during midday (28°C to 36°C), but early mornings and evenings on the water are cool and breezy. Wildlife congregates around sweetwater ponds near watchtowers.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: How to Reach */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-[#d9c9b2]/60 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#2d5a3f]/10 text-[#2d5a3f] flex items-center justify-center">
                  <MapPin size={22} />
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1c2e24]">
                  How to Reach Sundarban from Kolkata
                </h2>
              </div>
              <p className="text-base text-[#4a5548] leading-relaxed mb-6">
                All journeys into the Sundarban islands transition from road/rail to water at <strong className="text-[#1c2e24]">Godkhali Ferry Ghat</strong>:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-[#fcfaf7] border border-[#d9c9b2]/60">
                  <div className="flex items-center gap-2 mb-2">
                    <Car size={18} className="text-[#2d5a3f]" />
                    <h3 className="font-serif text-lg font-bold text-[#1c2e24]">By Road (Car or Bus)</h3>
                  </div>
                  <p className="text-sm text-[#4a5548] leading-relaxed">
                    Distance: Approx. 85-95 km from Kolkata. Drive via Science City &rarr; Ghatakpukur &rarr; Malancha &rarr; Basanti Highway &rarr; Godkhali Ghat. Travel duration is approximately 2.5 to 3 hours.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#fcfaf7] border border-[#d9c9b2]/60">
                  <div className="flex items-center gap-2 mb-2">
                    <Train size={18} className="text-[#c96f4f]" />
                    <h3 className="font-serif text-lg font-bold text-[#1c2e24]">By Train via Canning</h3>
                  </div>
                  <p className="text-sm text-[#4a5548] leading-relaxed">
                    Board a suburban local train from Sealdah South to Canning Station (approx. 1 hour 15 mins). From Canning, take a shared auto, taxi, or local bus to Godkhali Ghat (approx. 28 km, 45 mins).
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Packing Checklist & Rules */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-[#d9c9b2]/60 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#c96f4f]/10 text-[#c96f4f] flex items-center justify-center">
                  <ShieldCheck size={22} />
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1c2e24]">
                  Essential Packing Checklist & Rules
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#2d5a3f] mb-3.5 flex items-center gap-2">
                    <span>Must-Carry Items</span>
                  </h3>
                  <ul className="space-y-3 text-sm text-[#4a5548]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#2b8a3e] shrink-0 mt-0.5" />
                      <span>Original government photo ID (mandatory for forest permits)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#2b8a3e] shrink-0 mt-0.5" />
                      <span>Comfortable earthy-colored cotton clothing (olive, khaki, brown)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#2b8a3e] shrink-0 mt-0.5" />
                      <span>Binoculars & camera with zoom lens</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#2b8a3e] shrink-0 mt-0.5" />
                      <span>Wide-brimmed sun hat, sunglasses & sunscreen</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#2b8a3e] shrink-0 mt-0.5" />
                      <span>Sufficient cash (island ATMs are very limited)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-[#c92a2a] mb-3.5 flex items-center gap-2">
                    <span>Important Prohibitions</span>
                  </h3>
                  <ul className="space-y-3 text-sm text-[#4a5548]">
                    <li className="flex items-start gap-2.5">
                      <AlertCircle size={16} className="text-[#c92a2a] shrink-0 mt-0.5" />
                      <span>Single-use plastics are strictly prohibited in the National Park.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <AlertCircle size={16} className="text-[#c92a2a] shrink-0 mt-0.5" />
                      <span>Loud music and smoking on safari boats are strictly banned.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <AlertCircle size={16} className="text-[#c92a2a] shrink-0 mt-0.5" />
                      <span>Never lean over boat railings or throw food into the water.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <AlertCircle size={16} className="text-[#c92a2a] shrink-0 mt-0.5" />
                      <span>Drones are strictly prohibited inside the tiger reserve without written permissions.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar CTA */}
          <div className="lg:col-span-1 lg:sticky lg:top-28 space-y-6">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-[#d9c9b2]/60 p-6 sm:p-8 shadow-sm">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#c96f4f] block mb-1">
                Personalized Advice
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1c2e24] mb-3">
                Need Guidance?
              </h3>
              <p className="text-sm text-[#4a5548] leading-relaxed mb-6">
                Not sure whether a 1-day or 2-day itinerary suits your group best? Connect with our trip coordinators for personalized advice.
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => onOpenBooking && onOpenBooking()}
                  className="w-full py-3.5 px-5 rounded-xl bg-[#c96f4f] text-white font-semibold text-sm hover:bg-[#b55f3f] shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Plan Tour With Coordinator
                </button>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumberDigits}?text=Hi%20SM%20Bengal%20Travel,%20I%20need%20advice%20planning%20my%20trip.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20ba59] shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <MessageSquare size={16} />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
