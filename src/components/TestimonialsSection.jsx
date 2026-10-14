import React, { useState } from 'react';
import { 
  Users, 
  Star, 
  Leaf, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight,
  Quote
} from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    image: '/images/testi-card-1.png',
    alt: 'Happy family on Sundarban safari boat',
    rating: 5,
    quote: 'An unforgettable experience! Everything was well organised from transport to stay. The boat safari and the whole Sundarban experience was simply amazing.',
    author: 'Rohit Agarwal',
    location: 'Kolkata, West Bengal',
    avatar: '/images/testi-avatar-1.png'
  },
  {
    id: 2,
    image: '/images/testi-card-2.png',
    alt: 'Luxury eco cottage resort in Sundarban at dusk',
    rating: 5,
    quote: 'Beautiful locations, comfortable stay and delicious Bengali food. The team was very helpful throughout the trip. Highly recommended for families.',
    author: 'Priya Sharma',
    location: 'Delhi',
    avatar: '/images/testi-avatar-2.png'
  },
  {
    id: 3,
    image: '/images/testi-card-3.png',
    alt: 'Wildlife photographer on safari boat in Sundarbans',
    rating: 5,
    quote: 'As a nature lover, this trip was a dream. We spotted so many birds and the boat safari was the highlight. Great arrangements and a very friendly team.',
    author: 'Amit Verma',
    location: 'Bangalore',
    avatar: '/images/testi-avatar-3.png'
  },
  {
    id: 4,
    image: '/images/boat-safari.jpg',
    alt: 'Morning creek boat safari in mangrove forest',
    rating: 5,
    quote: 'The naturalist guide knew every creek and bird call by heart. Seeing the fresh tiger pugmarks on the mudbank was thrilling! Truly top-notch Bengali hospitality.',
    author: 'Sneha Mukherjee',
    location: 'Kolkata, West Bengal',
    avatar: '/images/testi-avatar-2.png'
  },
  {
    id: 5,
    image: '/images/watchtower-view.jpg',
    alt: 'Panoramic watchtower canopy view over watering hole',
    rating: 5,
    quote: 'From pickup at central Kolkata to boat boarding at Godkhali, zero stress. The watchtower view with deer herds made our family holiday truly unforgettable.',
    author: 'Vikram Sen',
    location: 'Mumbai, Maharashtra',
    avatar: '/images/testi-avatar-3.png'
  }
];

const STATS = [
  {
    icon: <Users className="w-4 h-4 text-primary" />,
    value: '5000+',
    label: 'Happy Travellers'
  },
  {
    icon: <Star className="w-4 h-4 text-accent" />,
    value: '4.8/5',
    label: 'Average Rating'
  },
  {
    icon: <Leaf className="w-4 h-4 text-secondary" />,
    value: '10+',
    label: 'Unique Safaris'
  },
  {
    icon: <ShieldCheck className="w-4 h-4 text-primary" />,
    value: '95%',
    label: 'Satisfaction Rate'
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = TESTIMONIALS.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Compute 3 visible cards starting from currentIndex
  const visibleCards = [
    TESTIMONIALS[currentIndex % totalSlides],
    TESTIMONIALS[(currentIndex + 1) % totalSlides],
    TESTIMONIALS[(currentIndex + 2) % totalSlides]
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-ivory/50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-sand/60 bg-white/40 p-2 max-w-sm lg:max-w-none">
              <img 
                src="/images/testimonials-collage@2x.png" 
                alt="Journeys That Stay Forever - Sundarban traveller moments" 
                className="w-full h-auto rounded-2xl object-cover hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Narrative & Carousel */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-8 h-[1px] bg-accent/60" />
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  TRAVELLERS STORIES
                </span>
                <span className="w-8 h-[1px] bg-accent/60" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3 leading-tight">
                What Our <span className="text-accent italic">Travellers Say</span>
              </h2>

              <p className="text-sm sm:text-base text-primary/75 max-w-2xl leading-relaxed">
                Real experiences. Real stories. Discover why travellers choose 
                SM Bengal Travel for their Sundarban journeys.
              </p>
            </div>

            {/* 4-Item Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-sand/60 shadow-xs mb-8">
              {STATS.map((stat, sidx) => (
                <div key={sidx} className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-sand/30 flex items-center justify-center shrink-0">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-extrabold text-primary leading-none mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-primary/60 leading-none truncate">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonials Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {visibleCards.map((item, idx) => (
                <div 
                  key={`${item.id}-${idx}`} 
                  className={`flex flex-col bg-white/90 backdrop-blur-md border border-[#d9c9b2]/70 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
                    idx === 2 ? 'hidden lg:flex' : idx === 1 ? 'hidden sm:flex' : 'flex'
                  }`}
                >
                  {/* Top Image with Quote Badge */}
                  <div className="relative w-full h-36 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center shadow-md">
                      <Quote className="w-3.5 h-3.5 fill-current" />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="flex items-center gap-1 mb-2.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="text-xs sm:text-sm text-primary/80 italic mb-4 leading-relaxed line-clamp-4 flex-grow">
                      "{item.quote}"
                    </p>

                    <div className="flex items-center gap-2.5 pt-3 border-t border-sand/40">
                      <img 
                        src={item.avatar} 
                        alt={item.author}
                        className="w-8 h-8 rounded-full object-cover border border-sand"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-primary leading-tight">
                          {item.author}
                        </h4>
                        <span className="text-[11px] text-primary/60 block">
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Navigation Controls */}
            <div className="flex items-center justify-center gap-4">
              <button 
                type="button" 
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white hover:bg-sand/30 border border-sand/70 text-primary flex items-center justify-center transition-colors cursor-pointer shadow-xs active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-1.5">
                {TESTIMONIALS.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => setCurrentIndex(dotIdx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentIndex === dotIdx ? 'w-6 bg-accent' : 'w-2 bg-sand/60 hover:bg-sand'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              <button 
                type="button" 
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white hover:bg-sand/30 border border-sand/70 text-primary flex items-center justify-center transition-colors cursor-pointer shadow-xs active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
