import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { FACILITIES } from '../constants';

const Facilities = () => {
  return (
    <div className="pt-24">
       <section className="py-24 px-6 md:px-12 bg-brand-beige text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-sm font-bold">Services & Amenities</span>
          <h1 className="text-5xl md:text-6xl font-serif text-brand-brown">World-Class Facilities</h1>
          <p className="text-gray-500 text-lg">
            We offer a comprehensive range of services to ensure your stay is as comfortable and productive as possible.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACILITIES.map((facility, index) => {
            const IconComponent = (Icons as any)[facility.icon];
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 border border-brand-brown/5 bg-brand-beige/30 hover:bg-white hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-brand-brown text-white flex items-center justify-center mb-8 group-hover:bg-brand-gold transition-colors">
                  {IconComponent && <IconComponent size={28} />}
                </div>
                <h3 className="text-2xl font-serif text-brand-brown mb-4">{facility.name}</h3>
                <p className="text-gray-500 leading-relaxed">{facility.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Featured Facility: Conference */}
      <section className="py-24 px-6 md:px-12 bg-brand-brown text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-video overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1000" 
              alt="Conference Facility" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-brand-gold uppercase tracking-widest text-xs font-bold">Business Ready</span>
              <h2 className="text-4xl font-serif">Conference Facilities</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our modern conference room is perfect for small to medium-sized meetings, workshops, and seminars. We provide a professional environment with all the necessary equipment.
              </p>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Icons.CheckCircle2 className="text-brand-gold" size={20} />
                <span>Accommodates up to 30 people</span>
              </li>
              <li className="flex items-center gap-3">
                <Icons.CheckCircle2 className="text-brand-gold" size={20} />
                <span>High-speed Wi-Fi connectivity</span>
              </li>
              <li className="flex items-center gap-3">
                <Icons.CheckCircle2 className="text-brand-gold" size={20} />
                <span>Catering services available on request</span>
              </li>
            </ul>
            <button className="btn-primary bg-brand-gold hover:bg-white hover:text-brand-brown">Enquire Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
