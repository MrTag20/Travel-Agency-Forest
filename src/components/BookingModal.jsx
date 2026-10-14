import React, { useState } from 'react';
import { X, Calendar, MessageSquare, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, PACKAGES } from '../data/travelData';

export default function BookingModal({ isOpen, onClose, preselectedPackageId }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    packageId: preselectedPackageId || 'sundarban-2-nights-3-days-package',
    departurePreference: 'Kolkata Pickup',
    travelDate: '',
    travelers: '2',
    roomType: 'Standard Room / Cottage',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg('');
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please provide your name and contact phone number.');
      return;
    }

    const selectedPkg = PACKAGES.find((p) => p.id === formData.packageId);
    const pkgTitle = selectedPkg ? selectedPkg.title : 'Custom Sundarban Tour';

    const messageText = `*New Tour Enquiry — SM Bengal Travel*\n\n` +
      `*Guest Name:* ${formData.name}\n` +
      `*Phone/WhatsApp:* ${formData.phone}\n` +
      (formData.email ? `*Email:* ${formData.email}\n` : '') +
      `*Package:* ${pkgTitle}\n` +
      `*Departure Preference:* ${formData.departurePreference}\n` +
      `*Travel Date:* ${formData.travelDate || 'Flexible'}\n` +
      `*Total Guests:* ${formData.travelers}\n` +
      `*Accommodation:* ${formData.roomType}\n` +
      (formData.message ? `*Notes:* ${formData.message}\n` : '') +
      `\n_Sent via SM Bengal Travel official booking portal_`;

    const encoded = encodeURIComponent(messageText);
    const waUrl = `https://wa.me/${COMPANY_INFO.whatsappNumberDigits}?text=${encoded}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-sand/70 p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-sand/30 hover:bg-sand/60 text-primary flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-2">Enquiry Dispatched!</h3>
            <p className="text-sm text-primary/75 mb-6 leading-relaxed">
              Your enquiry has been formatted and redirected to our WhatsApp booking desk. Our travel coordinator will reply with departure confirmation and finalized tariff.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-sand/40 hover:bg-sand/70 text-primary font-semibold text-sm transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                Quick Reservation
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-1.5">
                Plan Your Sundarban Tour
              </h2>
              <p className="text-xs sm:text-sm text-primary/70">
                Fill in your details below for an instant quote and itinerary via WhatsApp or direct phone.
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs sm:text-sm mb-4 border border-red-200">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              {/* Tour Package Selection */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-primary mb-1">
                  Select Tour Package *
                </label>
                <select
                  name="packageId"
                  value={formData.packageId}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-sand/80 focus:border-accent bg-white text-xs sm:text-sm text-primary outline-none transition-colors"
                >
                  {PACKAGES.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title} ({p.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-primary mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Anirban Roy"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-sand/80 focus:border-accent bg-white text-xs sm:text-sm text-primary outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-primary mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98300 XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-sand/80 focus:border-accent bg-white text-xs sm:text-sm text-primary outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Departure Point & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-primary mb-1">
                    Departure Point
                  </label>
                  <select
                    name="departurePreference"
                    value={formData.departurePreference}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-sand/80 focus:border-accent bg-white text-xs sm:text-sm text-primary outline-none transition-colors"
                  >
                    <option value="Kolkata Pickup (AC Vehicle)">Kolkata Pickup (AC Vehicle)</option>
                    <option value="Godkhali Ferry Ghat (Direct Boarding)">Godkhali Ferry Ghat (Direct Boarding)</option>
                    <option value="Canning Railway Station">Canning Railway Station</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-primary mb-1">
                    Preferred Travel Date
                  </label>
                  <input
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-sand/80 focus:border-accent bg-white text-xs sm:text-sm text-primary outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Number of Travelers & Room Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-primary mb-1">
                    Number of Guests
                  </label>
                  <select
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-sand/80 focus:border-accent bg-white text-xs sm:text-sm text-primary outline-none transition-colors"
                  >
                    <option value="1 Guest (Solo)">1 Guest (Solo)</option>
                    <option value="2 Guests (Couple)">2 Guests (Couple)</option>
                    <option value="3-5 Guests (Family)">3-5 Guests (Family)</option>
                    <option value="6-10 Guests (Small Group)">6-10 Guests (Small Group)</option>
                    <option value="10+ Guests (Corporate/Large Group)">10+ Guests (Corporate/Large Group)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-primary mb-1">
                    Accommodation Choice
                  </label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-sand/80 focus:border-accent bg-white text-xs sm:text-sm text-primary outline-none transition-colors"
                  >
                    <option value="Standard Non-AC Room">Standard Non-AC Room</option>
                    <option value="Deluxe AC Cottage">Deluxe AC Cottage</option>
                    <option value="Day Trip Only (No Room)">Day Trip Only (No Room)</option>
                  </select>
                </div>
              </div>

              {/* Additional message */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-primary mb-1">
                  Custom Preferences / Questions (Optional)
                </label>
                <textarea
                  name="message"
                  rows={2}
                  placeholder="e.g. Vegetarian meal requirements, pickup location near airport, senior citizen in group..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-sand/80 focus:border-accent bg-white text-xs sm:text-sm text-primary outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>
                <span className="block text-center text-[11px] text-primary/60 mt-2">
                  Direct connection with SM Bengal Travel team. No automated spam.
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
