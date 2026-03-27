import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Check, Users, Wind, Tv, Refrigerator, Coffee, Wifi } from 'lucide-react';
import { ROOMS } from '../constants';

const Accommodation = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-24 px-6 md:px-12 bg-brand-beige text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-sm font-bold">Our Rooms</span>
          <h1 className="text-5xl md:text-6xl font-serif text-brand-brown">Luxury Living Spaces</h1>
          <p className="text-gray-500 text-lg">
            Choose from our selection of 15 premium units, each designed with your ultimate comfort in mind.
          </p>
        </div>
      </section>

      {/* Rooms List */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-32">
          {ROOMS.map((room, index) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
            >
              <div className="w-full lg:w-1/2 relative group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 flex items-center gap-2">
                  <Users size={16} className="text-brand-gold" />
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-brown">Up to {room.capacity} Guests</span>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl font-serif text-brand-brown">{room.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">{room.description}</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
                  {room.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-beige flex items-center justify-center">
                        <Check size={12} className="text-brand-gold" />
                      </div>
                      <span className="text-sm text-gray-500">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 flex items-center justify-between border-t border-gray-100">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gray-400 block mb-1">Starting from</span>
                    <span className="text-3xl font-serif text-brand-brown">{room.price}</span>
                    <span className="text-sm text-gray-400"> / night</span>
                  </div>
                  <Link to="/book" className="btn-primary">Book This Room</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Standard Features */}
      <section className="py-24 px-6 md:px-12 bg-brand-charcoal text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 text-center">
          {[
            { icon: Wind, label: 'Air Conditioning' },
            { icon: Tv, label: 'MultiChoice TV' },
            { icon: Refrigerator, label: 'Bar Fridge' },
            { icon: Coffee, label: 'Tea & Coffee' },
            { icon: Wifi, label: 'Free High-Speed Wi-Fi' },
          ].map((item, i) => (
            <div key={i} className="space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full border border-gray-700 flex items-center justify-center text-brand-gold">
                <item.icon size={28} />
              </div>
              <p className="text-xs uppercase tracking-widest font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Accommodation;
