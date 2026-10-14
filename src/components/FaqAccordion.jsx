import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="flex flex-col gap-3.5 w-full max-w-4xl mx-auto">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
              isOpen 
                ? 'bg-white/95 border-accent shadow-md' 
                : 'bg-white/80 border-[#d9c9b2]/70 hover:border-accent/60 shadow-xs'
            }`}
          >
            <button
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-transparent gap-4 cursor-pointer"
            >
              <span
                className={`font-serif text-base sm:text-lg font-semibold leading-snug transition-colors ${
                  isOpen ? 'text-accent' : 'text-primary'
                }`}
              >
                {faq.q}
              </span>

              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 bg-accent/15 text-accent' : 'bg-sand/30 text-primary/70'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-primary/80 leading-relaxed border-t border-[#d9c9b2]/35 pt-3">
                <p>{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
