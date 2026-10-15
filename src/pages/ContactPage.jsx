import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { COMPANY_INFO, PACKAGES } from '../data/travelData';
import { Phone, Mail, MapPin, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    travelers: '2',
    travelDate: '',
    packageId: 'sundarban-2-nights-3-days-package',
    departurePreference: 'Kolkata Pickup (AC Vehicle)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage('Please provide your name and phone number.');
      return;
    }

    const selectedPkg = PACKAGES.find((p) => p.id === formData.packageId);
    const pkgName = selectedPkg ? selectedPkg.title : 'General Tour Enquiry';

    const msg = `*Tour Enquiry Form — SM Bengal Travel*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone/WhatsApp:* ${formData.phone}\n` +
      (formData.email ? `*Email:* ${formData.email}\n` : '') +
      `*Package:* ${pkgName}\n` +
      `*Departure Point:* ${formData.departurePreference}\n` +
      `*Travel Date:* ${formData.travelDate || 'Flexible'}\n` +
      `*Guests:* ${formData.travelers}\n` +
      (formData.message ? `*Message:* ${formData.message}\n` : '') +
      `\n_Submitted via contact page on smbengaltravel.com_`;

    const encoded = encodeURIComponent(msg);
    const waUrl = `https://wa.me/${COMPANY_INFO.whatsappNumberDigits}?text=${encoded}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="bg-[#fcfaf7] min-h-screen pb-16 sm:pb-20">
      {/* Header */}
      <div className="relative bg-gradient-to-b from-[#2e3a2f]/95 via-[#2e3a2f]/90 to-[#2e3a2f] text-white py-14 sm:py-16 md:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact Us', path: '/contact-us' }]} />
          <div className="max-w-3xl mt-4">
            <span className="inline-flex items-center text-xs sm:text-sm font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#c96f4f]/20 text-[#e5b382] border border-[#c96f4f]/40">
              Direct Booking Desk
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
              Contact SM Bengal Travel
            </h1>
            <p className="text-white/85 text-base sm:text-lg leading-relaxed">
              Reach out for date confirmations, customized quotes for private boats, group discounts, or special safari arrangements.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          {/* Left Column: Direct Contact Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-[#d9c9b2]/60 p-6 sm:p-8 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#c96f4f] block mb-1">
                Always Accessible
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#1c2e24] mb-6">
                Operations & Booking Desks
              </h2>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#c96f4f]/10 text-[#c96f4f] flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#1c2e24] mb-0.5">
                      Phone Reservations
                    </h3>
                    <a 
                      href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`} 
                      className="text-[#2d5a3f] font-bold text-base hover:text-[#c96f4f] transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <div className="text-xs text-[#6c7a6b] mt-0.5">Daily: 7:00 AM – 9:00 PM IST</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#1c2e24] mb-0.5">
                      WhatsApp Instant Support
                    </h3>
                    <a 
                      href={`https://wa.me/${COMPANY_INFO.whatsappNumberDigits}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#25D366] font-bold text-base hover:underline"
                    >
                      {COMPANY_INFO.whatsapp}
                    </a>
                    <div className="text-xs text-[#6c7a6b] mt-0.5">Fastest response for availability & quotes</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#2d5a3f]/10 text-[#2d5a3f] flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#1c2e24] mb-0.5">
                      Email Inquiries
                    </h3>
                    <a 
                      href={`mailto:${COMPANY_INFO.email}`} 
                      className="text-[#2d5a3f] font-semibold text-sm hover:text-[#c96f4f] transition-colors break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <div className="text-xs text-[#6c7a6b] mt-0.5">For corporate, institutional & group proposals</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#c96f4f]/10 text-[#c96f4f] flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#1c2e24] mb-0.5">
                      Departure Harbor
                    </h3>
                    <p className="text-sm text-[#4a5548] leading-relaxed">
                      {COMPANY_INFO.departureHub}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-[#d9c9b2]/60 p-6 sm:p-8 md:p-10 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#c96f4f] block mb-1">
                Tour Planning Form
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1c2e24] mb-2">
                Send an Enquiry
              </h2>
              <p className="text-sm text-[#4a5548] leading-relaxed mb-6">
                Fill in your tour preferences below. Upon submission, your enquiry is instantly routed to our WhatsApp booking desk for rapid assistance.
              </p>

              {submitted ? (
                <div className="text-center py-10 px-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1c2e24] mb-2">
                    Enquiry Form Dispatched
                  </h3>
                  <p className="text-sm text-[#4a5548] max-w-md mx-auto mb-6 leading-relaxed">
                    Your tour preferences have been formatted and dispatched to our WhatsApp booking desk. We will respond shortly!
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="py-3 px-6 rounded-xl bg-[#2d5a3f] text-white font-semibold text-sm hover:bg-[#234631] transition-all"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                  {errorMessage && (
                    <div className="bg-red-50 text-red-600 border border-red-200 p-3.5 rounded-xl text-sm font-medium">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1c2e24] uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#d9c9b2] bg-white text-sm text-[#1c2e24] focus:outline-none focus:ring-2 focus:ring-[#2d5a3f] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1c2e24] uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 90887 85701"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#d9c9b2] bg-white text-sm text-[#1c2e24] focus:outline-none focus:ring-2 focus:ring-[#2d5a3f] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1c2e24] uppercase tracking-wider mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#d9c9b2] bg-white text-sm text-[#1c2e24] focus:outline-none focus:ring-2 focus:ring-[#2d5a3f] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1c2e24] uppercase tracking-wider mb-1.5">
                        Number of Guests
                      </label>
                      <select
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#d9c9b2] bg-white text-sm text-[#1c2e24] focus:outline-none focus:ring-2 focus:ring-[#2d5a3f] transition-all"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3-5">3 - 5 Guests</option>
                        <option value="6-10">6 - 10 Guests</option>
                        <option value="10+">10+ Guests (Group)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1c2e24] uppercase tracking-wider mb-1.5">
                        Preferred Package
                      </label>
                      <select
                        name="packageId"
                        value={formData.packageId}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#d9c9b2] bg-white text-sm text-[#1c2e24] focus:outline-none focus:ring-2 focus:ring-[#2d5a3f] transition-all"
                      >
                        {PACKAGES.map((p) => (
                          <option key={p.id} value={p.id}>{p.title}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1c2e24] uppercase tracking-wider mb-1.5">
                        Departure Point
                      </label>
                      <select
                        name="departurePreference"
                        value={formData.departurePreference}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#d9c9b2] bg-white text-sm text-[#1c2e24] focus:outline-none focus:ring-2 focus:ring-[#2d5a3f] transition-all"
                      >
                        <option value="Kolkata Pickup (AC Vehicle)">Kolkata Pickup (AC Vehicle)</option>
                        <option value="Godkhali Ferry Ghat">Godkhali Ferry Ghat (Direct Boarding)</option>
                        <option value="Canning Station">Canning Railway Station</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1c2e24] uppercase tracking-wider mb-1.5">
                      Preferred Travel Date
                    </label>
                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#d9c9b2] bg-white text-sm text-[#1c2e24] focus:outline-none focus:ring-2 focus:ring-[#2d5a3f] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1c2e24] uppercase tracking-wider mb-1.5">
                      Additional Message / Special Requests
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Tell us about special dietary requirements, senior citizens in the group, or custom room choices..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#d9c9b2] bg-white text-sm text-[#1c2e24] focus:outline-none focus:ring-2 focus:ring-[#2d5a3f] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-xl bg-[#25D366] text-white font-bold text-base hover:bg-[#20ba59] shadow-md hover:shadow-lg transition-all duration-200 mt-2"
                  >
                    <MessageSquare size={20} />
                    <span>Send Enquiry via WhatsApp Desk</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
