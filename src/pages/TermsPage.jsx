import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { COMPANY_INFO } from '../data/travelData';

export default function TermsPage() {
  return (
    <div className="bg-[#fcfaf7] min-h-screen pb-16 sm:pb-20">
      <div className="bg-[#1c2e24] text-white py-12 sm:py-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Terms & Conditions', path: '/terms-and-conditions' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-3 mb-2">
            Terms and Conditions
          </h1>
          <p className="text-[#e5b382] text-sm">
            Service Terms for {COMPANY_INFO.name} • Last updated October 2026
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-[#d9c9b2]/60 p-6 sm:p-10 md:p-12 shadow-sm leading-relaxed text-[#4a5548]">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1c2e24] mb-3">
            1. Tour Agreement
          </h2>
          <p className="mb-6">
            By booking a tour with {COMPANY_INFO.name}, guests agree to comply with all safety protocols issued by boat captains, licensed forest guides, and the West Bengal Forest Department.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1c2e24] mb-3 mt-6">
            2. Wildlife Disclaimers
          </h2>
          <p className="mb-6">
            The Sundarban is a vast, natural biosphere reserve. Wildlife sightings—including the Royal Bengal Tiger—cannot be guaranteed by any operator. We provide professional naturalists and optimized itineraries to maximize observation opportunities in natural habitat.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1c2e24] mb-3 mt-6">
            3. Environmental Code of Conduct
          </h2>
          <p className="mb-6">
            Guests must refrain from littering, carrying single-use plastic into reserve areas, playing loud music, or harassing wildlife. Non-compliance may lead to immediate termination of the safari without refund as per Forest Department rules.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1c2e24] mb-3 mt-6">
            4. Personal Belongings & Safety
          </h2>
          <p>
            While our vessels and staff maintain the highest safety vigilance, travelers are responsible for safeguarding their cameras, mobile phones, and valuable personal belongings during water transit.
          </p>
        </div>
      </div>
    </div>
  );
}
