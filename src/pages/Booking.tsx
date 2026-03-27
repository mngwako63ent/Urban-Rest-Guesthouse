import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, CheckCircle2 } from 'lucide-react';

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-24 min-h-[80vh] flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-12 text-center space-y-6 shadow-2xl border border-brand-gold/20"
        >
          <div className="w-20 h-20 bg-brand-beige rounded-full flex items-center justify-center mx-auto text-brand-gold">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-serif text-brand-brown">Reservation Request Sent</h2>
          <p className="text-gray-500">
            Thank you for choosing Urban Rest. Our team will review your request and contact you shortly to confirm availability and provide deposit details.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="btn-primary w-full"
          >
            Make Another Booking
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <section className="py-24 px-6 md:px-12 bg-brand-beige">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-brand-gold uppercase tracking-[0.4em] text-sm font-bold">Reservations</span>
              <h1 className="text-5xl md:text-6xl font-serif text-brand-brown">Book Your Stay</h1>
              <p className="text-gray-600 text-lg">
                Secure your peaceful retreat in Mahikeng. Please fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="bg-brand-brown text-white p-8 space-y-4">
              <h4 className="font-serif text-xl text-brand-gold">Booking Policy</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                A 50% deposit is required to secure your booking. The remaining balance is payable upon arrival. We accept all major credit cards and electronic transfers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white flex items-center justify-center text-brand-gold">
                  <Calendar size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400">Check-in</p>
                  <p className="font-bold text-brand-brown">From 14:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white flex items-center justify-center text-brand-gold">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400">Check-out</p>
                  <p className="font-bold text-brand-brown">By 10:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-2xl border border-brand-brown/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Full Name</label>
                  <input required type="text" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-brand-gold transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                  <input required type="email" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-brand-gold transition-colors" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Phone Number</label>
                <input required type="tel" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-brand-gold transition-colors" placeholder="+27 72 000 0000" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Arrival Date</label>
                  <input required type="date" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-brand-gold transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Departure Date</label>
                  <input required type="date" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-brand-gold transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Adults</label>
                  <select className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-brand-gold transition-colors bg-transparent">
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>3 Adults</option>
                    <option>4 Adults</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Children</label>
                  <select className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-brand-gold transition-colors bg-transparent">
                    <option>0 Children</option>
                    <option>1 Child</option>
                    <option>2 Children</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Special Notes</label>
                <textarea rows={3} className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-brand-gold transition-colors resize-none" placeholder="Any special requests?"></textarea>
              </div>

              <button type="submit" className="btn-primary w-full py-4">Make Reservation</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
