import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Check, ArrowRight, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/travelData';

export default function PackageCard({ pkg, onOpenBooking }) {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumberDigits}?text=${encodeURIComponent(
    `Hello SM Bengal Travel, I would like to enquire about the "${pkg.title}". Please share available dates and pricing details.`
  )}`;

  return (
    <div 
      className="flex flex-col h-full bg-white/90 backdrop-blur-md border border-[#d9c9b2]/70 rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(46,58,47,0.06)] hover:shadow-[0_16px_36px_rgba(46,58,47,0.12)] hover:-translate-y-1 transition-all duration-300"
    >
      {/* Thumbnail with Badge & Duration */}
      <div className="relative w-full h-56 sm:h-60 overflow-hidden group">
        <img
          src={pkg.image}
          alt={pkg.alt || pkg.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {pkg.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent text-white shadow-md">
              {pkg.badge}
            </span>
          </div>
        )}
        <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 z-10">
          <Clock className="w-3.5 h-3.5 text-accent" />
          <span>{pkg.duration}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-1.5 text-primary/70 text-xs sm:text-sm mb-2">
          <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
          <span className="truncate">{pkg.departure}</span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-primary mb-2.5 leading-snug line-clamp-2">
          <Link to={`/${pkg.slug}`} className="hover:text-accent transition-colors">
            {pkg.title}
          </Link>
        </h3>

        <p className="text-sm text-primary/75 mb-4 line-clamp-3 leading-relaxed">
          {pkg.shortDescription}
        </p>

        {/* Highlights List */}
        <div className="mb-5 flex-grow">
          <div className="space-y-2">
            {(pkg.highlights || []).slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-primary/80">
                <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-4 border-t border-[#d9c9b2]/50 flex flex-col gap-3">
          <div className="flex items-baseline justify-between flex-wrap gap-1">
            <div>
              <span className="text-[11px] text-primary/60 uppercase tracking-wider block">
                Tour Tariff
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-xl sm:text-2xl font-extrabold text-primary">
                  {pkg.startingPrice}
                </span>
                <span className="text-xs text-primary/60">/ guest</span>
              </div>
            </div>

            <span className="text-xs text-secondary font-semibold bg-secondary/10 px-2.5 py-1 rounded">
              Permits & Meals Included
            </span>
          </div>

          <div className="grid grid-cols-[1fr_auto] gap-2 pt-1">
            <Link
              to={`/${pkg.slug}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-primary bg-sand/35 hover:bg-sand/60 transition-colors"
            >
              <span>View Itinerary</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white shadow-sm transition-transform hover:scale-105 active:scale-95"
              title="Enquire on WhatsApp"
              aria-label="Enquire on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
