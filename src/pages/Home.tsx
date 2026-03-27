import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Star, MapPin, Wifi, Coffee, ShieldCheck } from 'lucide-react';
import { ROOMS, FACILITIES } from '../constants';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section 
        className="relative min-h-dvh flex items-center justify-start text-white px-6 md:px-12 lg:px-24"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(10, 25, 47, 0.95) 0%, rgba(10, 25, 47, 0.7) 40%, transparent 100%), url('https://res.cloudinary.com/dm7sxhaeb/image/upload/v1774612031/sushuti-bali-2975787_1_hnrswl.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-10 text-left space-y-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold uppercase tracking-[0.4em] text-sm font-semibold">Welcome to Urban Rest</span>
            <h1 className="text-5xl md:text-7xl font-serif mt-4 leading-tight">
              Experience Affordable Luxury in Mahikeng
            </h1>
            <p className="text-lg md:text-xl font-light mt-6 opacity-90">
              Where comfort meets modern living. A peaceful retreat designed for business and leisure travelers.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-start gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Link to="/book" className="btn-primary w-full sm:w-auto text-center">Book Your Stay</Link>
            <Link to="/accommodation" className="btn-outline border-white text-white hover:bg-white hover:text-brand-brown w-full sm:w-auto text-center">View Our Rooms</Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-brand-gold uppercase tracking-widest text-xs font-bold">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-brown">A Peaceful Retreat in the Heart of the City</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Urban Rest offers guests affordable luxury accommodation and hospitality services in a warm, friendly, and welcoming environment. Located in a tranquil and upmarket area in Mahikeng, we provide the perfect balance of convenience and serenity.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <h4 className="text-3xl font-serif text-brand-gold">15+</h4>
                <p className="text-xs uppercase tracking-widest text-gray-400">Luxury Units</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl font-serif text-brand-gold">5/5</h4>
                <p className="text-xs uppercase tracking-widest text-gray-400">Guest Rating</p>
              </div>
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 text-brand-brown font-bold hover:text-brand-gold transition-colors group">
              Learn More About Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000" 
                alt="Urban Rest Interior" 
                className="w-full h-full object-cover hover-zoom"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-brand-brown text-white p-8 hidden md:block">
              <p className="font-serif text-2xl italic">"Rest Easy. Stay Urban."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 px-6 md:px-12 bg-brand-beige">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-4xl font-serif text-brand-brown">Why Choose Urban Rest?</h2>
            <p className="text-gray-500">We pride ourselves on providing top-tier facilities for a seamless stay.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Wifi, title: 'High-Speed Wi-Fi', desc: 'Stay connected always' },
              { icon: Coffee, title: 'Complimentary Tea', desc: 'Freshly brewed daily' },
              { icon: ShieldCheck, title: '24/7 Security', desc: 'Peace of mind guaranteed' },
              { icon: MapPin, title: 'Prime Location', desc: 'Near CBD & Malls' },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 space-y-4 border border-brand-brown/5 hover:shadow-xl transition-all duration-300">
                <feature.icon className="mx-auto text-brand-gold" size={32} />
                <h4 className="font-serif text-lg">{feature.title}</h4>
                <p className="text-xs text-gray-400 uppercase tracking-tighter">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Highlights */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4">
              <span className="text-brand-gold uppercase tracking-widest text-xs font-bold">Our Rooms</span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-brown">Refined Comfort</h2>
            </div>
            <Link to="/accommodation" className="btn-outline">View All Rooms</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROOMS.map((room) => (
              <div key={room.id} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden mb-6">
                  <img 
                    src={room.image} 
                    alt={room.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-serif">{room.title}</h3>
                    <span className="text-brand-gold font-bold">{room.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm line-clamp-2">{room.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 bg-brand-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-brand-gold text-brand-gold" />)}
          </div>
          <h2 className="text-3xl md:text-4xl font-serif italic leading-relaxed">
            "The perfect home away from home. The staff were incredibly welcoming, and the rooms were spotless and modern. Highly recommended for business trips to Mahikeng!"
          </h2>
          <div className="space-y-1">
            <p className="font-bold uppercase tracking-widest">Sarah Johnson</p>
            <p className="text-brand-gold text-xs">Business Traveler</p>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="h-[500px] w-full relative">
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

export default Home;
