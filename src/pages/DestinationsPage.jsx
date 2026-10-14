import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { DESTINATIONS } from '../data/travelData';
import { MapPin, ArrowRight } from 'lucide-react';

export default function DestinationsPage({ onOpenBooking }) {
  return (
    <div className="bg-[#fcfaf7] min-h-screen pb-16 sm:pb-20">
      {/* Header */}
      <div className="relative bg-gradient-to-b from-[#2e3a2f]/95 via-[#2e3a2f]/90 to-[#2e3a2f] text-white py-14 sm:py-16 md:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Sundarban Destinations', path: '/sundarban-tour-places' }]} />
          <div className="max-w-3xl mt-4">
            <span className="inline-flex items-center text-xs sm:text-sm font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#c96f4f]/20 text-[#e5b382] border border-[#c96f4f]/40">
              Sightseeing & Watchtowers
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
              Places to Visit in Sundarban
            </h1>
            <p className="text-white/85 text-base sm:text-lg leading-relaxed">
              A detailed guide to the essential watchtowers, canopy bridges, historic ruins, and river junctions included in SM Bengal Travel circuits.
            </p>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DESTINATIONS.map((dest) => (
            <div 
              key={dest.id} 
              className="bg-white/90 backdrop-blur-md rounded-2xl border border-[#d9c9b2]/60 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-gray-200">
                <img
                  src={dest.image}
                  alt={dest.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-3 left-3 bg-[#2e3a2f]/80 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/10">
                  <MapPin size={12} className="text-[#c96f4f]" />
                  <span>Sundarban Reserve</span>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1c2e24] mb-1 group-hover:text-[#2d5a3f] transition-colors">
                  {dest.name}
                </h2>
                <span className="text-xs sm:text-sm font-medium text-[#c96f4f] mb-3">
                  {dest.subtitle}
                </span>
                <p className="text-sm text-[#4a5548] leading-relaxed mb-5 flex-grow">
                  {dest.description}
                </p>

                <div className="border-t border-[#d9c9b2]/40 pt-4 mb-5">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#6c7a6b] block mb-2.5">
                    Key Highlights
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {dest.highlights.map((h, i) => (
                      <span 
                        key={i} 
                        className="inline-block text-xs font-medium px-2.5 py-1 rounded-lg bg-[#2d5a3f]/10 text-[#2d5a3f] border border-[#2d5a3f]/20"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  to="/sundarban-tour-packages" 
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl border border-[#2d5a3f] text-[#2d5a3f] font-semibold text-sm hover:bg-[#2d5a3f] hover:text-white transition-all duration-200"
                >
                  <span>Explore Tours Visiting Here</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
