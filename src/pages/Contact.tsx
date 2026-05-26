import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
         <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
            <h1 className="text-5xl md:text-6xl font-serif text-brand-charcoal tracking-tight">Contact support</h1>
            <p className="text-gray-500 text-lg">
               We’re here to help and answer any question you might have.
            </p>
         </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="bg-brand-beige p-8 md:p-12 rounded-[2.5rem] space-y-12 shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
            <div className="space-y-8">
              <div className="flex gap-6 items-start group cursor-pointer">
                <div className="w-14 h-14 bg-white rounded-2xl text-brand-charcoal flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div className="space-y-1 mt-1">
                  <h4 className="font-semibold text-lg text-brand-charcoal">Our Location</h4>
                  <p className="text-gray-500 leading-relaxed">
                    5 DF Malan Avenue, Libertas,<br />
                    Mahikeng, North West, 2745,<br />
                    South Africa
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start group cursor-pointer">
                <div className="w-14 h-14 bg-white rounded-2xl text-brand-charcoal flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div className="space-y-1 mt-1">
                  <h4 className="font-semibold text-lg text-brand-charcoal">Call Us</h4>
                  <p className="text-gray-500">Landline: (+27) 18 381 5137</p>
                  <p className="text-gray-500">Mobile: 072 940 6791</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group cursor-pointer">
                <div className="w-14 h-14 bg-white rounded-2xl text-brand-charcoal flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div className="space-y-1 mt-1">
                  <h4 className="font-semibold text-lg text-brand-charcoal">Email Us</h4>
                  <p className="text-gray-500">apolus@mweb.co.za</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white">
            <h3 className="text-3xl font-serif text-brand-charcoal mb-8">Send a message</h3>
            <form className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-sm font-semibold text-brand-charcoal block">First Name</label>
                   <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-charcoal focus:bg-white transition-colors" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-semibold text-brand-charcoal block">Last Name</label>
                   <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-charcoal focus:bg-white transition-colors" />
                 </div>
               </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-charcoal block">Email Address</label>
                <input required type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-charcoal focus:bg-white transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-charcoal block">Subject</label>
                <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-charcoal focus:bg-white transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-charcoal block">Message</label>
                <textarea required rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-charcoal focus:bg-white transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 rounded-xl py-4 mt-4">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Full Width Map */}
      <section className="h-[500px] w-full mt-12 overflow-hidden rounded-t-[3rem]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.634598144081!2d25.64245647542095!3d-25.861788977287714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e97669527e0293d%3A0x673960017c699999!2s5%20DF%20Malan%20Ave%2C%20Libertas%2C%20Mahikeng%2C%202745%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1711530000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Urban Rest Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
