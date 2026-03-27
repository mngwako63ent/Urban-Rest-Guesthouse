import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MapPin, ShoppingBag, Building2, Landmark } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-32 px-6 md:px-12 bg-brand-brown text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=2000" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand-gold uppercase tracking-[0.4em] text-sm font-bold"
          >
            Our Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-serif"
          >
            A Peaceful Retreat Designed for Comfort
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif text-brand-brown">Affordable Luxury in Mahikeng</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Urban Rest offers guests affordable luxury accommodation and hospitality services in a warm, friendly, and welcoming environment. We believe that luxury shouldn't be out of reach, which is why we've curated a space that combines high-end comfort with accessible pricing.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our guesthouse is more than just a place to sleep; it's a sanctuary for those who appreciate the finer things in life while valuing the peace and quiet of an upmarket residential area.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {[
                'Warm & Friendly Service',
                'Tranquil Environment',
                'Modern Amenities',
                'Upmarket Location'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-gold" size={20} />
                  <span className="font-medium text-brand-brown">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=600" alt="Room" className="w-full aspect-[3/4] object-cover" />
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600" alt="Lobby" className="w-full aspect-square object-cover" />
            </div>
            <div className="space-y-4 pt-12">
              <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=600" alt="Pool" className="w-full aspect-square object-cover" />
              <img src="https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=600" alt="Garden" className="w-full aspect-[3/4] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantages */}
      <section className="py-24 px-6 md:px-12 bg-brand-beige">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-4xl font-serif text-brand-brown">Perfectly Positioned</h2>
            <p className="text-gray-500">Located in a tranquil area with easy access to everything you need.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShoppingBag, title: 'Shopping Malls', desc: 'Minutes away from premier retail centers.' },
              { icon: Building2, title: 'CBD & Business', desc: 'Easy access to main business districts.' },
              { icon: Landmark, title: 'Government Offices', desc: 'Convenient for official business visits.' },
              { icon: MapPin, title: 'Local Attractions', desc: 'Close to museums and cultural sites.' },
            ].map((loc, i) => (
              <div key={i} className="bg-white p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-beige flex items-center justify-center text-brand-gold">
                  <loc.icon size={24} />
                </div>
                <h4 className="font-serif text-xl">{loc.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
