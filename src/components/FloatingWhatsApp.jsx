import React from 'react';
import { MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/travelData';

export default function FloatingWhatsApp() {
  const defaultMsg = encodeURIComponent(
    'Hello SM Bengal Travel! I am planning a Sundarban tour and would like to know package details and upcoming dates.'
  );

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsappNumberDigits}?text=${defaultMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact SM Bengal Travel on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        <MessageSquare className="w-7 h-7" />
      </a>
    </div>
  );
}
