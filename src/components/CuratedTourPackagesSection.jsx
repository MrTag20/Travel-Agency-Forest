import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Ship, 
  Eye, 
  Leaf, 
  UtensilsCrossed, 
  Bed, 
  Users, 
  TreePine, 
  Camera, 
  Compass, 
  ArrowUpRight,
  Heart
} from 'lucide-react';
import { TigerOutline, IndianBirdOutline } from './WildlifeOutlines';

export default function CuratedTourPackagesSection({ onOpenBooking }) {
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const packageCards = [
    {
      id: 'sundarban-1-day-tour',
      slug: 'sundarban-1-day-tour',
      headerImg: '/images/card_img_1@2x.png',
      titleLine1: 'Sundarban',
      titleLine2: '1 Day Tour',
      desc: 'A perfect short getaway to explore the highlights of the Sundarbans.',
      features: [
        { label: 'Boat Safari', icon: <Ship className="w-3.5 h-3.5" /> },
        { label: 'Wildlife Spotting', icon: <Eye className="w-3.5 h-3.5" /> },
        { label: 'Key Attractions', icon: <Leaf className="w-3.5 h-3.5" /> },
        { label: 'Bengali Lunch', icon: <UtensilsCrossed className="w-3.5 h-3.5" /> }
      ]
    },
    {
      id: 'sundarban-1-night-2-days-package',
      slug: 'sundarban-1-night-2-days-package',
      headerImg: '/images/card_img_2@2x.png',
      titleLine1: 'Sundarban',
      titleLine2: '1 Night 2 Days',
      desc: 'Stay amidst nature and experience the true charm of the mangroves.',
      features: [
        { label: 'Comfortable Stay', icon: <Bed className="w-3.5 h-3.5" /> },
        { label: 'Multiple Safaris', icon: <Ship className="w-3.5 h-3.5" /> },
        { label: 'All Meals Included', icon: <UtensilsCrossed className="w-3.5 h-3.5" /> },
        { label: 'Local Culture', icon: <Users className="w-3.5 h-3.5" /> }
      ]
    },
    {
      id: 'sundarban-2-nights-3-days-package',
      slug: 'sundarban-2-nights-3-days-package',
      headerImg: '/images/card_img_3@2x.png',
      titleLine1: 'Sundarban',
      titleLine2: '2 Nights 3 Days',
      desc: 'A deeper journey with Dobanki Canopy Walkway, wildlife and relaxing stays.',
      features: [
        { label: 'Dobanki Canopy', icon: <Compass className="w-3.5 h-3.5" /> },
        { label: 'Core Waterways', icon: <TreePine className="w-3.5 h-3.5" /> },
        { label: 'Riverside Resort', icon: <Bed className="w-3.5 h-3.5" /> },
        { label: 'Baul Folk Music', icon: <Camera className="w-3.5 h-3.5" /> }
      ]
    },
    {
      id: 'sundarban-3-nights-4-days-package',
      slug: 'sundarban-3-nights-4-days-package',
      headerImg: '/images/card_img_4@2x.png',
      titleLine1: 'Sundarban',
      titleLine2: '3 Nights 4 Days',
      desc: 'An immersive slow-travel expedition for photographers and birdwatchers.',
      features: [
        { label: 'Remote Ruins', icon: <Compass className="w-3.5 h-3.5" /> },
        { label: 'Private Cottages', icon: <Bed className="w-3.5 h-3.5" /> },
        { label: 'Bird Photography', icon: <Camera className="w-3.5 h-3.5" /> },
        { label: 'Rare Kingfishers', icon: <Leaf className="w-3.5 h-3.5" /> }
      ]
    }
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" id="curated-packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Wildlife Outlines */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 sm:mb-16">
          <div className="hidden lg:block shrink-0 opacity-80 hover:opacity-100 transition-opacity">
            <TigerOutline size={110} color="#c96f4f" />
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-accent/60" />
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                HANDPICKED ITINERARIES
              </span>
              <span className="w-8 h-[1px] bg-accent/60" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3.5 leading-tight">
              Our Tour <span className="text-accent italic">Packages</span>
            </h2>

            <p className="text-sm sm:text-base text-primary/75 leading-relaxed">
              From short weekend escapes to immersive multi-day journeys, discover thoughtfully 
              crafted Sundarban safaris with certified delta guides and warm Bengali hospitality.
            </p>
          </div>

          <div className="hidden lg:block shrink-0 opacity-80 hover:opacity-100 transition-opacity">
            <IndianBirdOutline size={110} color="#c96f4f" />
          </div>
        </div>

        {/* Responsive Grid for 4 Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {packageCards.map((card) => {
            const isSaved = !!wishlist[card.id];

            return (
              <div 
                key={card.id} 
                className="flex flex-col h-full bg-white/90 backdrop-blur-md border border-[#d9c9b2]/70 rounded-3xl overflow-hidden shadow-[0_8px_24px_rgba(46,58,47,0.06)] hover:shadow-[0_18px_40px_rgba(46,58,47,0.14)] hover:-translate-y-1.5 transition-all duration-300 group"
              >
                {/* Card Image Header */}
                <div className="relative w-full h-52 sm:h-56 overflow-hidden">
                  <img 
                    src={card.headerImg} 
                    alt={`${card.titleLine1} ${card.titleLine2}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Heart / Wishlist button */}
                  <button 
                    type="button"
                    onClick={(e) => toggleWishlist(card.id, e)}
                    className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center transition-transform hover:scale-110 active:scale-95 cursor-pointer z-10"
                    title={isSaved ? 'Remove from saved' : 'Save this package'}
                    aria-label="Save package"
                  >
                    <Heart 
                      className={`w-4 h-4 ${isSaved ? 'fill-accent text-accent' : 'text-white'}`}
                      strokeWidth={2}
                    />
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-2 leading-snug">
                    <span className="block text-primary/70 text-sm font-sans font-semibold tracking-wide uppercase">
                      {card.titleLine1}
                    </span>
                    <span className="text-primary group-hover:text-accent transition-colors">
                      {card.titleLine2}
                    </span>
                  </h3>

                  <p className="text-xs sm:text-sm text-primary/75 mb-5 leading-relaxed line-clamp-2">
                    {card.desc}
                  </p>

                  {/* 4 Feature Pills */}
                  <div className="grid grid-cols-2 gap-2 mb-6 flex-grow">
                    {card.features.map((feat, fidx) => (
                      <div 
                        key={fidx} 
                        className="flex items-center gap-1.5 p-2 rounded-xl bg-sand/20 border border-sand/40 text-[11px] sm:text-xs font-semibold text-primary/80"
                      >
                        <span className="text-accent shrink-0">{feat.icon}</span>
                        <span className="truncate">{feat.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <Link 
                    to={`/${card.slug}`} 
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-sand/30 hover:bg-accent text-primary hover:text-white font-semibold text-xs sm:text-sm transition-all duration-200 group-hover:bg-accent group-hover:text-white shadow-sm"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link 
            to="/sundarban-tour-packages" 
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary hover:bg-[#1f2720] text-white font-semibold text-sm sm:text-base shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>Explore All Tour Packages</span>
            <span className="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
