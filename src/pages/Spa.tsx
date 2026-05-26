import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Flower2, Droplets } from 'lucide-react';

const Spa = () => {
  return (
    <div className="min-h-screen bg-brand-beige flex flex-col items-center">
      {/* Hero / Coming Soon Banner */}
      <section className="relative h-[92vh] min-h-[650px] w-full mt-2 mx-auto max-w-[98%] flex items-center justify-center pt-20">
        {/* Background Image showing a relaxing spa atmosphere */}
        <div className="absolute inset-0 z-0 rounded-[2rem] overflow-hidden">
          <img 
            src="https://res.cloudinary.com/dm7sxhaeb/image/upload/v1774612031/sushuti-bali-2975787_1_hnrswl.jpg" 
            alt="Spa Atmosphere" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white"
          >
            <Sparkles size={16} className="text-brand-gold" />
            <span className="text-sm font-medium tracking-widest uppercase">Coming Soon</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif text-white tracking-tight"
          >
            The Urban Sanctuary
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            We are curating a luxurious spa experience designed to elevate your stay. Prepare to immerse yourself in ultimate relaxation and rejuvenation.
          </motion.p>
        </div>
      </section>

      {/* Anticipated Features */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-brown">What to Expect</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">We are bringing world-class wellness treatments directly to our guesthouse.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              icon: Flower2, 
              title: "Holistic Massages", 
              desc: "From deep tissue to hot stone therapy, our expert therapists will help you unwind." 
            },
            { 
              icon: Droplets, 
              title: "Skin & Beauty", 
              desc: "Rejuvenating facials using premium botanical products to restore your natural glow." 
            },
            { 
              icon: Sparkles, 
              title: "Wellness Packages", 
              desc: "Curated half-day and full-day retreats perfect for couples or solo relaxation." 
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-brand-brown/5 text-center space-y-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 mx-auto bg-brand-beige rounded-2xl flex items-center justify-center text-brand-gold rotate-3">
                <feature.icon size={28} />
              </div>
              <h3 className="text-2xl font-serif text-brand-brown">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Newsletter Signup for updates */}
      <section className="w-full max-w-4xl mx-auto px-6 md:px-12 py-24 text-center">
        <div className="bg-brand-charcoal text-white rounded-[2.5rem] p-12 md:p-16 space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif">Be the First to Know</h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Join our exclusive waitlist to receive updates on our grand opening and introductory spa offers.
            </p>
          </div>
          
          <form className="relative z-10 max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-brand-gold focus:bg-white/20 transition-colors"
            />
            <button className="px-8 py-4 rounded-full bg-brand-gold text-white font-medium hover:bg-white hover:text-brand-charcoal transition-colors">
              Notify Me
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Spa;
