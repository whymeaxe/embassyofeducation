import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  Calendar,
  User,
  Globe2,
  MessageSquare
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    destination: '',
    date: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="relative z-1 pt-32 pb-24 px-6">
      
      {/* Page Header */}
      <div className="max-w-[1100px] mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 glass-premium px-3 py-1 rounded-full mb-4">
          <span className="text-[10px] font-bold tracking-[2px] uppercase text-amber-600">
            Direct Access
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-4">
          Visit Us <span className="text-gradient-gold">Anytime</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          We maintain premium physical processing hubs in Vadodara and Ahmedabad. Drop by during operating hours, or instantly book a private, non-obligatory counseling session below.
        </p>
      </div>

      {/* Offices Grid */}
      <div className="max-w-[1150px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        
        {/* Vadodara Primary Office */}
        <div className="glass-premium p-8 sm:p-10 rounded-2xl relative overflow-hidden border border-purple-950/10 hover:border-amber-500/30 transition-all group shadow-xs hover:shadow-md">
          
          {/* Subtle top amber highlight */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

          <span className="text-[10px] font-bold tracking-[3px] uppercase text-amber-600 block mb-3">
            Primary Office
          </span>

          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
            Vadodara
          </h2>

          <div className="flex flex-col gap-4 text-xs text-slate-700 mb-8">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-purple-950 flex-shrink-0 mt-0.5" />
              <span className="leading-[1.6]">
                2nd Floor, Sakar Complex, RC Dutt Road, Alkapuri, Vadodara, Gujarat 390007
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-purple-950 flex-shrink-0" />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-purple-950 flex-shrink-0" />
              <span>vadodara@embassyofeducation.in</span>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-purple-950 flex-shrink-0" />
              <span>Mon – Sat, 9:00 AM – 7:00 PM</span>
            </div>
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors group-hover:gap-2.5"
          >
            <span>Get Directions</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>

        </div>

        {/* Ahmedabad Branch Office */}
        <div className="glass-premium p-8 sm:p-10 rounded-2xl relative overflow-hidden border border-purple-950/10 hover:border-amber-500/30 transition-all group shadow-xs hover:shadow-md">
          
          {/* Subtle top amber highlight */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

          <span className="text-[10px] font-bold tracking-[3px] uppercase text-amber-600 block mb-3">
            Branch Office
          </span>

          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
            Ahmedabad
          </h2>

          <div className="flex flex-col gap-4 text-xs text-slate-700 mb-8">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-purple-950 flex-shrink-0 mt-0.5" />
              <span className="leading-[1.6]">
                3rd Floor, Shapath Hexa, SG Highway, Prahlad Nagar, Ahmedabad, Gujarat 380015
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-purple-950 flex-shrink-0" />
              <span>+91 98765 43211</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-purple-950 flex-shrink-0" />
              <span>ahmedabad@embassyofeducation.in</span>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-purple-950 flex-shrink-0" />
              <span>Mon – Sat, 9:00 AM – 7:00 PM</span>
            </div>
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors group-hover:gap-2.5"
          >
            <span>Get Directions</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>

        </div>

      </div>

      {/* Main Interactive Counseling Session Booking System */}
      <div className="max-w-[1150px] mx-auto">
        <div className="glass-premium p-8 sm:p-14 rounded-2xl border border-purple-950/10 relative overflow-hidden shadow-xs">
          
          {/* Ornamental horizontal glow line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-600/20 to-transparent" />

          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-2">
              Book Your Free <span className="text-gradient-gold">Counseling Session</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              No obligations. No sales pitches. Just an expert conversation calibrated entirely around your academic and global future.
            </p>
          </div>

          {isSubmitted ? (
            <div className="max-w-md mx-auto glass-premium-strong p-8 rounded-2xl text-center border border-amber-500/30 animate-fade-in shadow-xs">
              <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center mx-auto mb-4 text-slate-950">
                <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Session Confirmed!
              </h3>

              <p className="text-xs text-slate-600 mb-6 leading-[1.6]">
                Thank you, <b className="text-slate-900">{bookingForm.name}</b>. We have reserved a priority consultation slot for <b className="text-amber-600">{bookingForm.destination || 'General Assessment'}</b>.
              </p>

              <div className="bg-purple-50 border border-purple-100 p-4 rounded-xl text-left text-xs text-slate-700 mb-6 space-y-2 shadow-2xs">
                <div className="flex justify-between">
                  <span>Assigned Officer:</span>
                  <span className="text-purple-950 font-bold">Senior Global Strategist</span>
                </div>
                <div className="flex justify-between">
                  <span>Preferred Schedule:</span>
                  <span className="text-purple-950 font-bold">{bookingForm.date || 'Earliest available'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Consultation Fee:</span>
                  <span className="text-amber-600 font-bold">100% Waived</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setBookingForm({ name: '', phone: '', email: '', destination: '', date: '', message: '' });
                }}
                className="w-full text-xs font-bold text-white bg-purple-950 hover:bg-purple-900 py-2.5 rounded-lg transition-colors shadow-2xs"
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold tracking-[1px] uppercase text-slate-500 flex items-center gap-1.5">
                  <User className="w-3 h-3 text-amber-600" />
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="bg-white border border-purple-950/10 rounded-xl px-4 py-3.5 text-xs text-slate-900 outline-none focus:border-purple-600 transition-colors shadow-2xs"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold tracking-[1px] uppercase text-slate-500 flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-amber-600" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={bookingForm.phone}
                  onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                  placeholder="+91 00000 00000"
                  className="bg-white border border-purple-950/10 rounded-xl px-4 py-3.5 text-xs text-slate-900 outline-none focus:border-purple-600 transition-colors font-mono shadow-2xs"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold tracking-[1px] uppercase text-slate-500 flex items-center gap-1.5">
                  <Mail className="w-3 h-3 text-amber-600" />
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={bookingForm.email}
                  onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                  placeholder="your@email.com"
                  className="bg-white border border-purple-950/10 rounded-xl px-4 py-3.5 text-xs text-slate-900 outline-none focus:border-purple-600 transition-colors shadow-2xs"
                />
              </div>

              {/* Preferred Destination */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold tracking-[1px] uppercase text-slate-500 flex items-center gap-1.5">
                  <Globe2 className="w-3 h-3 text-amber-600" />
                  Preferred Destination
                </label>
                <select
                  value={bookingForm.destination}
                  onChange={(e) => setBookingForm({ ...bookingForm, destination: e.target.value })}
                  className="bg-white border border-purple-950/10 rounded-xl px-4 py-3.5 text-xs text-slate-900 outline-none focus:border-purple-600 transition-colors shadow-2xs"
                >
                  <option value="">Select country</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Ireland">Ireland</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Europe">Europe</option>
                </select>
              </div>

              {/* Preferred Date */}
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-[10px] font-bold tracking-[1px] uppercase text-slate-500 flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-amber-600" />
                  Preferred Consultation Date
                </label>
                <input
                  type="date"
                  value={bookingForm.date}
                  onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                  className="bg-white border border-purple-950/10 rounded-xl px-4 py-3.5 text-xs text-slate-900 outline-none focus:border-purple-600 transition-colors cursor-pointer shadow-2xs"
                />
              </div>

              {/* Optional Message */}
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-[10px] font-bold tracking-[1px] uppercase text-slate-500 flex items-center gap-1.5">
                  <MessageSquare className="w-3 h-3 text-amber-600" />
                  Message / Context (Optional)
                </label>
                <textarea
                  rows={3}
                  value={bookingForm.message}
                  onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })}
                  placeholder="Tell us about your academic background, test scores, or specific aspirations..."
                  className="bg-white border border-purple-950/10 rounded-xl px-4 py-3.5 text-xs text-slate-900 outline-none focus:border-purple-600 transition-colors resize-y shadow-2xs"
                />
              </div>

              {/* Submit Trigger */}
              <div className="sm:col-span-2 text-center mt-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-purple-950 hover:bg-purple-900 px-12 py-4 rounded-xl transition-all duration-250 shadow-md hover:shadow-lg"
                >
                  Confirm Free Session
                  <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
                </button>
              </div>

            </form>
          )}

        </div>
      </div>

    </div>
  );
};
