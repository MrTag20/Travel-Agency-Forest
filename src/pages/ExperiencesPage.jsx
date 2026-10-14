import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { EXPERIENCES } from '../data/travelData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function ExperiencesPage({ onOpenBooking }) {
  return (
    <div className="bg-ivory min-h-screen pb-20">
      {/* Hero Header */}
      <div
        className="relative bg-[#2e3a2f] text-white pt-28 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10"
        style={{
          backgroundImage: 'linear-gradient(rgba(46, 58, 47, 0.9), rgba(46, 58, 47, 0.96)), url("/images/boat-safari.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: 'Sundarban Experiences', path: '/sundarban-experiences' }]} />
          <div className="max-w-3xl mt-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-accent/25 border border-accent/40 text-sand text-xs font-bold uppercase tracking-wider mb-3">
              Activities & Encounters
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Sundarban Tour Experiences
            </h1>
            <p className="text-sm sm:text-base text-sand/90 leading-relaxed">
              From morning mist cruises along remote mangrove creeks to the legendary lore of Bono Bibi, explore the authentic dimensions of life in the delta.
            </p>
          </div>
        </div>
      </div>

      {/* Experiences Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="space-y-10 sm:space-y-14">
          {EXPERIENCES.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={exp.id}
                id={exp.id}
                className="rounded-3xl overflow-hidden bg-white/90 backdrop-blur-md border border-sand/70 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-2 items-center"
              >
                {/* Image Section */}
                <div className={`h-64 sm:h-80 lg:h-full min-h-[300px] w-full overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img
                    src={exp.image}
                    alt={exp.alt}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Text Content */}
                <div className={`p-6 sm:p-10 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <span className="text-xs font-bold text-accent uppercase tracking-widest mb-2 block">
                    {exp.tagline}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-3.5 leading-snug">
                    {exp.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-primary/75 leading-relaxed mb-6">
                    {exp.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                    {exp.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 p-2.5 rounded-xl bg-ivory/60 border border-sand/50 text-xs font-semibold text-primary/80">
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <Link 
                      to="/sundarban-tour-packages" 
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sand/35 hover:bg-sand/60 text-primary font-semibold text-xs sm:text-sm transition-colors"
                    >
                      <span>View Packages Featuring This</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
