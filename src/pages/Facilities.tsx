import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { FACILITIES } from '../constants';

const Facilities = () => {
  return (
    <div className="pt-24 bg-brand-beige min-h-screen">
       <section className="py-24 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-serif text-brand-charcoal tracking-tight">World-Class Facilities</h1>
          <p className="text-gray-500 text-lg">
            We offer a comprehensive range of services to ensure your stay is as comfortable and productive as possible.
          </p>
        </div>
      </section>

      <section className="pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((facility, index) => {
            const IconComponent = (Icons as any)[facility.icon];
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-50 text-brand-charcoal flex items-center justify-center mb-6 group-hover:bg-brand-charcoal group-hover:text-white transition-colors">
                  {IconComponent && <IconComponent size={24} strokeWidth={1.5} />}
                </div>
                <h3 className="text-xl font-semibold text-brand-charcoal mb-2">{facility.name}</h3>
                <p className="text-gray-500">{facility.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Featured Facility: Conference */}
      <section className="py-32 px-6 md:px-12 bg-white rounded-t-[3rem] border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
            <img 
              src="https://www.ratanangbb.co.za/gallery/016-1141.JPG" 
              alt="Conference Facility" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-serif text-brand-charcoal">Conference Facilities</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our modern conference room is perfect for small to medium-sized meetings, workshops, and seminars. We provide a professional environment with all the necessary equipment.
              </p>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-700">
                <Icons.CheckCircle2 className="text-brand-charcoal" size={20} />
                <span>Accommodates up to 30 people</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <Icons.CheckCircle2 className="text-brand-charcoal" size={20} />
                <span>High-speed Wi-Fi connectivity</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <Icons.CheckCircle2 className="text-brand-charcoal" size={20} />
                <span>Catering services available on request</span>
              </li>
            </ul>
            <button className="btn-primary rounded-xl">Enquire Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
