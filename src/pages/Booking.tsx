import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, CheckCircle2, Search, ArrowRight } from 'lucide-react';

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-24 min-h-screen bg-brand-beige flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-12 rounded-[2rem] text-center space-y-6 shadow-xl border border-gray-100"
        >
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-500">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-serif text-brand-charcoal">Request Sent</h2>
          <p className="text-gray-500 leading-relaxed">
            Thank you for choosing Urban Rest. Our team will review your request and contact you shortly to confirm availability and provide deposit details.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="btn-primary w-full rounded-full"
          >
            Make Another Booking
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-brand-beige min-h-screen">
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
        
        <div className="lg:col-span-2 space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal tracking-tight">Request to book</h1>
            <p className="text-gray-500 text-lg">
              Secure your peaceful retreat in Mahikeng. Fill out the form, and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 space-y-6 shadow-sm border border-gray-100">
             <h3 className="font-serif text-2xl text-brand-charcoal">Your trip</h3>
             
             <div className="space-y-6">
                <div className="flex justify-between items-center">
                   <div>
                      <p className="font-semibold text-brand-charcoal">Dates</p>
                      <p className="text-sm text-gray-500">Add dates</p>
                   </div>
                   <button className="font-medium text-brand-charcoal underline">Edit</button>
                </div>
                <div className="flex justify-between items-center">
                   <div>
                      <p className="font-semibold text-brand-charcoal">Guests</p>
                      <p className="text-sm text-gray-500">1 guest</p>
                   </div>
                   <button className="font-medium text-brand-charcoal underline">Edit</button>
                </div>
             </div>

             <div className="pt-6 border-t border-gray-100">
                <h3 className="font-serif text-xl text-brand-charcoal mb-2">Booking Policy</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  A 50% deposit is required to secure your booking. The remaining balance is payable upon arrival. We accept all major credit cards and electronic transfers.
                </p>
             </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden">
             
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              
              <div className="space-y-4">
                 <h2 className="text-2xl font-serif text-brand-charcoal border-b border-gray-100 pb-4">Personal Information</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <label className="text-sm font-semibold text-brand-charcoal block">First Name</label>
                     <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-charcoal focus:bg-white transition-colors" placeholder="John" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-semibold text-brand-charcoal block">Last Name</label>
                     <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-charcoal focus:bg-white transition-colors" placeholder="Doe" />
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-semibold text-brand-charcoal block">Email Address</label>
                   <input required type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-charcoal focus:bg-white transition-colors" placeholder="john@example.com" />
                 </div>
                 
                 <div className="space-y-2">
                   <label className="text-sm font-semibold text-brand-charcoal block">Phone Number</label>
                   <input required type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-charcoal focus:bg-white transition-colors" placeholder="+27 72 000 0000" />
                 </div>
              </div>

              <div className="space-y-4 pt-6">
                 <h2 className="text-2xl font-serif text-brand-charcoal border-b border-gray-100 pb-4">Trip Details</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <label className="text-sm font-semibold text-brand-charcoal block">Arrival Date</label>
                     <input required type="date" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-charcoal focus:bg-white transition-colors" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-semibold text-brand-charcoal block">Departure Date</label>
                     <input required type="date" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-charcoal focus:bg-white transition-colors" />
                   </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <label className="text-sm font-semibold text-brand-charcoal block">Adults</label>
                     <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-charcoal focus:bg-white transition-colors">
                       <option>1 Adult</option>
                       <option>2 Adults</option>
                       <option>3 Adults</option>
                       <option>4 Adults</option>
                     </select>
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-semibold text-brand-charcoal block">Children</label>
                     <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-charcoal focus:bg-white transition-colors">
                       <option>0 Children</option>
                       <option>1 Child</option>
                       <option>2 Children</option>
                     </select>
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-semibold text-brand-charcoal block">Special Notes</label>
                   <textarea rows={3} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-charcoal focus:bg-white transition-colors resize-none" placeholder="Any special requests?"></textarea>
                 </div>
              </div>

              <div className="pt-6">
                 <button type="submit" className="btn-primary w-full py-4 rounded-full text-lg flex items-center justify-center gap-2">
                   Continue <ArrowRight size={20} />
                 </button>
                 <p className="text-center text-xs text-gray-400 mt-4">You won't be charged yet</p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
