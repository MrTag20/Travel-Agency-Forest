import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import PackageCard from '../components/PackageCard';
import FaqAccordion from '../components/FaqAccordion';
import { PACKAGES, FAQS } from '../data/travelData';
import { CheckCircle2, Car, Ship } from 'lucide-react';

export default function PackagesPage({ onOpenBooking }) {
  const [filterDuration, setFilterDuration] = useState('all');

  const filteredPackages = PACKAGES.filter((p) => {
    if (filterDuration === 'all') return true;
    if (filterDuration === '1day') return p.days === 1;
    if (filterDuration === '2days') return p.days === 2;
    if (filterDuration === '3days') return p.days >= 3;
    return true;
  });

  return (
    <div className="bg-ivory min-h-screen pb-20">
      {/* Page Header */}
      <div
        className="relative bg-[#2e3a2f] text-white pt-28 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10"
        style={{
          backgroundImage: 'linear-gradient(rgba(46, 58, 47, 0.9), rgba(46, 58, 47, 0.96)), url("/images/boat-safari.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: 'Tour Packages', path: '/sundarban-tour-packages' }]} />
          
          <div className="max-w-3xl mt-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-accent/25 border border-accent/40 text-sand text-xs font-bold uppercase tracking-wider mb-3">
              Curated Itineraries
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Sundarban Tour Packages
            </h1>
            <p className="text-sm sm:text-base text-sand/90 leading-relaxed">
              Choose from our verified safari packages from Kolkata and Godkhali. Every package includes dedicated boat safaris, licensed forest guides, delicious Bengali meals, and government permits.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
        {/* Filter Pills */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-10 pb-6 border-b border-sand/50">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Packages (4)' },
              { id: '1day', label: '1 Day Day-Trip' },
              { id: '2days', label: '1 Night 2 Days' },
              { id: '3days', label: 'Multi-Day Expeditions (3-4 Days)' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilterDuration(f.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  filterDuration === f.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-white text-primary/75 hover:bg-sand/30 border border-sand/70'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <span className="text-xs sm:text-sm text-primary/60">
            Showing {filteredPackages.length} tour itineraries
          </span>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mb-16 sm:mb-20">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} onOpenBooking={onOpenBooking} />
          ))}
        </div>

        {/* Departure Comparison Guidance Box */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-md border border-sand/70 shadow-sm mb-16 sm:mb-20">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
              Departure Options Explained
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-2">
              Kolkata-to-Kolkata vs Godkhali Direct Boarding
            </h2>
            <p className="text-xs sm:text-sm text-primary/75 leading-relaxed">
              We offer full flexibility. Whether you require complete door-to-door air-conditioned road transfers from Kolkata or prefer to drive yourself to the Godkhali ferry harbor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-6 rounded-2xl bg-ivory/60 border border-sand/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-primary">
                  Kolkata-to-Kolkata Packages
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-primary/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span>Pickup from central Kolkata points (Science City, Indian Museum, Ruby) in AC vehicle.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span>Complete scenic drive via Basanti Highway directly to Godkhali Ghat.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span>Drop-off back in Kolkata on the final evening. Zero travel stress.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-ivory/60 border border-sand/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center shrink-0">
                  <Ship className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-primary">
                  Godkhali Ghat Direct Boarding
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-primary/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Ideal if driving your own car or arriving via Canning train.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Secure vehicle parking available near Godkhali harbor.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Direct boarding on your private or group safari boat with immediate welcome tea.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Package FAQs */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-1">
              Clear Information
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary">
              Package Booking FAQs
            </h2>
          </div>
          <FaqAccordion items={FAQS.slice(0, 5)} />
        </div>
      </div>
    </div>
  );
}
