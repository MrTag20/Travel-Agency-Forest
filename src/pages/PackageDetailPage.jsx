import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import FaqAccordion from '../components/FaqAccordion';
import { PACKAGES, COMPANY_INFO } from '../data/travelData';
import { 
  Clock, 
  MapPin, 
  CheckCircle2, 
  XCircle, 
  Utensils, 
  ShieldCheck, 
  Calendar, 
  MessageSquare, 
  Phone, 
  Info
} from 'lucide-react';

export default function PackageDetailPage({ packageIdOverride, onOpenBooking }) {
  const { packageSlug } = useParams();
  const slug = packageIdOverride || packageSlug;

  const pkg = PACKAGES.find((p) => p.slug === slug || p.id === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!pkg) {
    return <Navigate to="/sundarban-tour-packages" replace />;
  }

  const relatedPackages = PACKAGES.filter((p) => p.id !== pkg.id);

  const whatsappInquiryUrl = `https://wa.me/${COMPANY_INFO.whatsappNumberDigits}?text=${encodeURIComponent(
    `Hello SM Bengal Travel, I am interested in booking the "${pkg.title}" (${pkg.duration}). Please let me know upcoming dates and availability.`
  )}`;

  return (
    <div className="bg-ivory min-h-screen pb-20">
      {/* Package Hero Section */}
      <div
        className="relative bg-[#2e3a2f] text-white pt-28 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10"
        style={{
          backgroundImage: `linear-gradient(rgba(46, 58, 47, 0.88), rgba(46, 58, 47, 0.96)), url("${pkg.image}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { label: 'Tour Packages', path: '/sundarban-tour-packages' },
              { label: pkg.title, path: `/${pkg.slug}` }
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-6">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent text-white shadow-sm">
                  {pkg.duration}
                </span>
                {pkg.badge && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
                    {pkg.badge}
                  </span>
                )}
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {pkg.title}
              </h1>

              <p className="text-sm sm:text-base text-sand/90 leading-relaxed mb-6 max-w-2xl">
                {pkg.shortDescription}
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-sand/85">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span>{pkg.departure}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                  <span>Forest Dept. Clearance Included</span>
                </div>
              </div>
            </div>

            {/* Quick Tariff Card */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-2xl border border-sand/70 shadow-2xl text-primary">
              <span className="text-xs font-bold text-primary/60 uppercase tracking-wider block">
                Package Tariff
              </span>
              <div className="flex items-baseline gap-1.5 mt-1 mb-1">
                <span className="font-serif text-3xl sm:text-4xl font-extrabold text-primary">
                  {pkg.startingPrice}
                </span>
                <span className="text-xs sm:text-sm text-primary/60">/ guest</span>
              </div>
              <p className="text-xs text-primary/70 mb-6 leading-relaxed">
                {pkg.priceNote}
              </p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => onOpenBooking && onOpenBooking(pkg.id)}
                  className="w-full py-3.5 px-4 rounded-full bg-accent hover:bg-[#b35d3e] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Reserve This Package</span>
                </button>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Instant WhatsApp Enquiry</span>
                </a>
              </div>

              <div className="mt-5 pt-4 border-t border-sand/40 flex items-center gap-2 text-xs text-primary/65">
                <Info className="w-4 h-4 text-accent shrink-0" />
                <span>Transparent terms. No hidden taxes or guide tips added later.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Itinerary & Detail Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Itinerary Details */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-10">
            {/* Overview */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-sand/70 shadow-sm">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-3">Tour Overview</h2>
              <p className="text-sm sm:text-base text-primary/80 leading-relaxed">
                {pkg.overview}
              </p>
            </div>

            {/* Departure Options Breakdown */}
            {pkg.departureOptions && (
              <div className="p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-sand/70 shadow-sm">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-4">Departure Options</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pkg.departureOptions.map((opt, oidx) => (
                    <div
                      key={oidx}
                      className="p-4 rounded-2xl bg-ivory/60 border border-sand/60"
                    >
                      <h3 className="font-bold text-sm sm:text-base text-primary mb-1">{opt.option}</h3>
                      <div className="text-accent font-extrabold text-base mb-1.5">
                        {opt.price}
                      </div>
                      <div className="text-xs text-primary/75 leading-relaxed">
                        <strong className="text-primary">Pickup:</strong> {opt.pickupPoint}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Day-by-Day Timeline */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-sand/70 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-accent" />
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary">Detailed Tour Itinerary</h2>
              </div>

              <div className="space-y-6">
                {pkg.itinerary.map((step, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col sm:grid sm:grid-cols-[140px_1fr] gap-2 sm:gap-6 pb-6 ${
                      idx === pkg.itinerary.length - 1 ? '' : 'border-b border-sand/40'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm text-secondary tracking-wide shrink-0">
                      {step.time}
                    </div>
                    <div>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-primary mb-1">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-primary/75 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions and Exclusions Side-by-Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-md border border-sand/70 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-primary mb-4 flex items-center gap-2 text-emerald-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>What is Included</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-primary/80">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-md border border-sand/70 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-primary mb-4 flex items-center gap-2 text-rose-700">
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>What is Excluded</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-primary/80">
                  {pkg.exclusions.map((exc, e) => (
                    <li key={e} className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-rose-600 mt-0.5 shrink-0" />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Meals & Food Details */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-sand/70 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Utensils className="w-5 h-5 text-accent" />
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary">Authentic Bengali Culinary Menu</h3>
              </div>
              <p className="text-xs sm:text-sm text-primary/80 leading-relaxed mb-4">
                {pkg.mealPlan}
              </p>
              <div className="p-3.5 rounded-xl bg-ivory text-xs text-primary/70 leading-relaxed border border-sand/50">
                * Special vegetarian, egg-only, and Jain food requirements are prepared upon advance request at no additional charge.
              </div>
            </div>

            {/* Tour Specific FAQs */}
            {pkg.faq && (
              <div className="p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-sand/70 shadow-sm">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-6">Tour Specific Questions</h3>
                <FaqAccordion items={pkg.faq} />
              </div>
            )}
          </div>

          {/* Right Column: Sticky Reservation & Related Tours */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-sand/70 shadow-lg lg:sticky lg:top-28">
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Ready to Book?</h3>
              <p className="text-xs sm:text-sm text-primary/70 mb-5 leading-relaxed">
                Directly chat with our tour desk to check cabin availability and customized quotes for your group size.
              </p>

              <button
                onClick={() => onOpenBooking && onOpenBooking(pkg.id)}
                className="w-full py-3.5 px-4 rounded-full bg-accent hover:bg-[#b35d3e] text-white font-semibold text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer mb-3"
              >
                Book This Safari
              </button>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all text-center mb-6"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire via WhatsApp</span>
              </a>

              <div className="pt-4 border-t border-sand/50 flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <div>
                  <div className="text-[11px] text-primary/60">Call Us Directly:</div>
                  <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`} className="font-bold text-primary hover:text-accent text-sm sm:text-base">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Other Tour Packages */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-sand/70 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-primary mb-4">Explore Other Tours</h3>
              <div className="space-y-3">
                {relatedPackages.slice(0, 3).map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/${rel.slug}`}
                    className="flex items-center gap-3 p-2.5 rounded-2xl bg-ivory hover:bg-sand/30 border border-sand/50 transition-colors group"
                  >
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-16 h-16 rounded-xl object-cover shrink-0"
                    />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-primary group-hover:text-accent transition-colors line-clamp-1">
                        {rel.title}
                      </h4>
                      <span className="text-xs text-accent font-semibold block mt-0.5">
                        {rel.startingPrice} • {rel.duration}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
