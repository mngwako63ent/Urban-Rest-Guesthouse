import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Compass, History, Trees, Landmark, Waves } from 'lucide-react';
import { ATTRACTIONS } from '../constants';

const Attractions = () => {
  return (
    <div className="pt-24 bg-white min-h-screen">
      <section className="py-24 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif text-brand-charcoal mb-6 tracking-tight">Explore Mahikeng</h1>
        <p className="text-gray-500 text-lg">
          Discover the hidden gems, rich history, and natural beauty surrounding Urban Rest.
        </p>
      </section>

      <section className="pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ATTRACTIONS.map((attr, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col space-y-4 cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-3xl relative">
                <img 
                  src={attr.image} 
                  alt={attr.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                  <MapPin size={18} className="text-brand-charcoal" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-charcoal">{attr.title}</h3>
                <p className="text-gray-500 mt-1 line-clamp-2">{attr.description}</p>
                <button className="mt-3 text-brand-charcoal font-medium underline underline-offset-4">Learn more</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-32 px-6 md:px-12 bg-brand-beige border-t border-gray-100 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-3xl md:text-4xl font-serif text-brand-charcoal">Things to know</h3>
            <p className="text-gray-500 text-lg">Make the most of your visit to the North West province with these helpful tips.</p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {[
              { title: 'Best Time to Visit', desc: 'Spring (Sept-Nov) and Autumn (March-May) offer the most pleasant weather for outdoor activities.' },
              { title: 'Getting Around', desc: 'While we are centrally located, having a car is recommended for exploring the wider region.' },
              { title: 'Local Culture', desc: 'Mahikeng is rich in Tswana culture. Be sure to visit local markets for authentic crafts.' },
              { title: 'Safety', desc: 'Our area is very safe, but always practice standard travel safety when exploring the CBD.' },
            ].map((tip, i) => (
              <div key={i} className="space-y-2 flex gap-4">
                <Compass className="text-brand-charcoal shrink-0 mt-1" size={24} strokeWidth={1.5} />
                <div>
                   <h4 className="font-semibold text-brand-charcoal mb-1">{tip.title}</h4>
                   <p className="text-gray-600 text-sm leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Attractions;
