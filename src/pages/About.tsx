import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MapPin, ShoppingBag, Building2, Landmark } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-[#FAF9F8] relative">
      {/* Flowing Background Image */}
      <div className="absolute top-0 left-0 w-full h-[120vh] z-0 pointer-events-none">
        <img 
          src="/download (10)-upscaled.png"
          alt="Background overlay"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F8]/40 via-[#FAF9F8]/80 to-[#FAF9F8]" />
      </div>

      <div className="relative z-10">
        {/* Hero */}
        <section className="px-6 md:px-12 pt-32 pb-24 max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif text-brand-charcoal tracking-tight"
            >
              A peaceful retreat designed for ultimate comfort.
            </motion.h1>
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="text-xl text-gray-700 font-medium"
            >
              Experience affordable luxury and warm hospitality in Mahikeng.
            </motion.p>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://res.cloudinary.com/dm7sxhaeb/image/upload/v1774610433/012-308_fopbhj.jpg" alt="Room" className="w-full aspect-[3/4] object-cover rounded-3xl" />
              <img src="https://res.cloudinary.com/dm7sxhaeb/image/upload/v1774612031/sushuti-bali-2975787_1_hnrswl.jpg" alt="Lobby" className="w-full aspect-square object-cover rounded-3xl" />
            </div>
            <div className="space-y-4 pt-12">
              <img src="https://www.ratanangbb.co.za/gallery/006-3496.JPG" alt="Pool" className="w-full aspect-square object-cover rounded-3xl" />
              <img src="https://www.ratanangbb.co.za/gallery/015-2488.JPG" alt="Garden" className="w-full aspect-[3/4] object-cover rounded-3xl" />
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-serif text-brand-charcoal">Affordable Luxury in Mahikeng</h2>
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
                  <CheckCircle2 className="text-brand-charcoal" size={20} />
                  <span className="font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantages */}
      <section className="py-32 px-6 md:px-12 bg-brand-beige border-t border-gray-100 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-4xl font-serif text-brand-charcoal">Perfectly Positioned</h2>
            <p className="text-gray-500 text-lg">Located in a tranquil area with easy access to everything you need.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShoppingBag, title: 'Shopping Malls', desc: 'Minutes away from premier retail centers.' },
              { icon: Building2, title: 'CBD & Business', desc: 'Easy access to main business districts.' },
              { icon: Landmark, title: 'Government Offices', desc: 'Convenient for official business visits.' },
              { icon: MapPin, title: 'Local Attractions', desc: 'Close to museums and cultural sites.' },
            ].map((loc, i) => (
              <div key={i} className="bg-white p-8 space-y-4 rounded-3xl shadow-sm border border-gray-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-brand-charcoal">
                  <loc.icon size={24} strokeWidth={1.5} />
                </div>
                <h4 className="font-serif text-xl text-brand-charcoal">{loc.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default About;
