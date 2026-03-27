import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24">
      <section className="py-24 px-6 md:px-12 bg-brand-beige">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-brand-gold uppercase tracking-[0.4em] text-sm font-bold">Get in Touch</span>
              <h1 className="text-5xl md:text-6xl font-serif text-brand-brown">We'd Love to Hear From You</h1>
              <p className="text-gray-600 text-lg">
                Whether you have a question about our rooms, facilities, or local attractions, our friendly team is here to help.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-brown text-white flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-xl text-brand-brown">Our Location</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    5 DF Malan Avenue, Libertas,<br />
                    Mahikeng, North West, 2745,<br />
                    South Africa
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-brown text-white flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-xl text-brand-brown">Call Us</h4>
                  <p className="text-gray-500 text-sm">Landline: (+27) 18 381 5137</p>
                  <p className="text-gray-500 text-sm">Mobile: 072 940 6791</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-brown text-white flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-xl text-brand-brown">Email Us</h4>
                  <p className="text-gray-500 text-sm">apolus@mweb.co.za</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-2xl border border-brand-brown/5">
            <h3 className="text-3xl font-serif text-brand-brown mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Your Name</label>
                <input required type="text" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-brand-gold transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                <input required type="email" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-brand-gold transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Subject</label>
                <input required type="text" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-brand-gold transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Message</label>
                <textarea required rows={4} className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-brand-gold transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Full Width Map */}
      <section className="h-[600px] w-full">
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
