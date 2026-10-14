import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { COMPANY_INFO } from '../data/travelData';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#fcfaf7] min-h-screen pb-16 sm:pb-20">
      <div className="bg-[#1c2e24] text-white py-12 sm:py-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Privacy Policy', path: '/privacy-policy' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-3 mb-2">
            Privacy Policy
          </h1>
          <p className="text-[#e5b382] text-sm">
            Privacy Guidelines for {COMPANY_INFO.name} • Last updated October 2026
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-[#d9c9b2]/60 p-6 sm:p-10 md:p-12 shadow-sm leading-relaxed text-[#4a5548]">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1c2e24] mb-3">
            1. Information We Collect
          </h2>
          <p className="mb-6">
            When you inquire about or book a tour with {COMPANY_INFO.name}, we collect personal details including your name, contact phone number, email address, number of guests, travel dates, and government identity document numbers as required by the Forest Department for permit verification.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1c2e24] mb-3 mt-6">
            2. How Information is Used
          </h2>
          <p className="mb-6">
            Your information is used strictly to arrange boat licenses, obtain mandatory forest entry permits, coordinate transportation, make resort reservations, and communicate itinerary updates. We do not sell or share personal data with external third-party advertisers.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1c2e24] mb-3 mt-6">
            3. Government Permit Compliance
          </h2>
          <p className="mb-6">
            Under West Bengal Forest Department regulations, traveler identity records must be submitted at range checkpoints (such as Sajnekhali). We handle all such records securely.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1c2e24] mb-3 mt-6">
            4. Contact Us
          </h2>
          <p>
            For privacy-related inquiries, contact our operations desk at{' '}
            <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#2d5a3f] font-semibold hover:underline">
              {COMPANY_INFO.email}
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
