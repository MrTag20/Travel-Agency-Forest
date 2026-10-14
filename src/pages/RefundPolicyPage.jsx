import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { COMPANY_INFO } from '../data/travelData';

export default function RefundPolicyPage() {
  return (
    <div className="bg-[#fcfaf7] min-h-screen pb-16 sm:pb-20">
      <div className="bg-[#1c2e24] text-white py-12 sm:py-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Refund Policy', path: '/refund-policy' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-3 mb-2">
            Cancellation and Refund Policy
          </h1>
          <p className="text-[#e5b382] text-sm">
            Policy Notice for {COMPANY_INFO.name} • Last updated October 2026
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-[#d9c9b2]/60 p-6 sm:p-10 md:p-12 shadow-sm leading-relaxed text-[#4a5548]">
          <div className="bg-[#c96f4f]/10 border border-[#c96f4f]/30 p-4 sm:p-5 rounded-xl mb-8 text-sm text-[#1c2e24]">
            <strong>Notice:</strong> This policy represents standard operational cancellation and refund terms for Sundarban tour bookings with {COMPANY_INFO.name}. Actual group contracts may specify custom terms.
          </div>

          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1c2e24] mb-3 mt-6">
            1. Booking Advance & Confirmation
          </h2>
          <p className="mb-6">
            To confirm a reservation for any Sundarban tour package, an advance booking deposit (typically 30% to 50% of the total tour cost) is required. The balance payment must be settled prior to boarding the vehicle or safari vessel.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1c2e24] mb-3 mt-6">
            2. Cancellation Timelines & Refund Scale
          </h2>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>15 or more days prior to departure:</strong> 80% refund of the deposit, minus non-refundable Forest Department government permit processing costs.</li>
            <li><strong>7 to 14 days prior to departure:</strong> 50% refund of the deposit.</li>
            <li><strong>Less than 7 days prior to departure:</strong> Deposits are non-refundable due to advance resort, vessel, and guide reservations.</li>
          </ul>

          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1c2e24] mb-3 mt-6">
            3. Weather & Natural Force Majeure
          </h2>
          <p className="mb-6">
            In the event of severe weather warnings, cyclones, or official Forest Department closures, {COMPANY_INFO.name} reserves the right to postpone or re-route safaris for passenger safety. In such situations, guests will be offered alternative dates or a credit voucher valid for 12 months.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1c2e24] mb-3 mt-6">
            4. Processing Time
          </h2>
          <p>
            Approved refunds will be processed via original payment methods (Bank Transfer, UPI, or Card) within 7–10 working business days.
          </p>
        </div>
      </div>
    </div>
  );
}
