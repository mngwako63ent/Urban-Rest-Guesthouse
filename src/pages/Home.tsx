import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MapPin, Star, ShieldCheck, Coffee, Search, CheckCircle2, LayoutGrid, CalendarRange, Users } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ROOMS, ATTRACTIONS } from '../constants';

const FloatingBookingBar = () => {
  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return 'Select Date';
    // Fix timezone offset issues by splitting and parsing as local
    const [year, month, day] = dateStr.split('-');
    const d = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="w-full max-w-5xl bg-white shadow-2xl rounded-[2rem] md:rounded-full p-3 md:p-3 border border-gray-100 flex flex-col md:grid md:grid-cols-[1fr_1fr_1fr_auto] gap-2 md:items-center"
    >
      <div className="flex items-center gap-4 px-4 md:px-6 py-3 md:py-4 rounded-2xl md:rounded-full hover:bg-gray-50 cursor-pointer transition-colors group relative overflow-hidden">
        <input 
          type="date"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          value={arrival}
          onChange={(e) => setArrival(e.target.value)}
          onClick={(e) => {
            try {
              if ('showPicker' in HTMLInputElement.prototype) {
                e.currentTarget.showPicker();
              }
            } catch (err) {}
          }}
        />
        <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors shrink-0">
          <CalendarRange size={18} />
        </div>
        <div className="truncate">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Arrival</p>
          <p className="text-sm font-medium text-brand-charcoal truncate">{formatDate(arrival)}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4 px-4 md:px-6 py-3 md:py-4 rounded-2xl md:rounded-full hover:bg-gray-50 cursor-pointer transition-colors group relative overflow-hidden before:hidden md:before:block before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-8 before:w-px before:bg-gray-200 border-t border-gray-100 md:border-t-0">
        <input 
          type="date"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          value={departure}
          min={arrival || undefined}
          onChange={(e) => setDeparture(e.target.value)}
          onClick={(e) => {
            try {
              if ('showPicker' in HTMLInputElement.prototype) {
                e.currentTarget.showPicker();
              }
            } catch (err) {}
          }}
        />
        <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors shrink-0">
          <CalendarRange size={18} />
        </div>
        <div className="truncate">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Departure</p>
          <p className="text-sm font-medium text-brand-charcoal truncate">{formatDate(departure)}</p>
        </div>
      </div>
      
      <div 
        className="flex items-center gap-4 px-4 md:px-6 py-3 md:py-4 rounded-2xl md:rounded-full hover:bg-gray-50 cursor-pointer transition-colors group relative before:hidden md:before:block before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-8 before:w-px before:bg-gray-200 border-t border-gray-100 md:border-t-0"
        onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}
      >
        <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors shrink-0">
          <Users size={18} />
        </div>
        <div className="truncate">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Guests</p>
          <p className="text-sm font-medium text-brand-charcoal truncate">{guests} {guests === 1 ? 'Adult' : 'Adults'}, {rooms} {rooms === 1 ? 'Room' : 'Rooms'}</p>
        </div>

        {/* Guests Popover */}
        <AnimatePresence>
          {isGuestDropdownOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute top-full left-0 md:left-auto md:right-0 mt-4 w-full md:w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50 cursor-default"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-sm font-medium text-brand-charcoal">Adults</h4>
                  <p className="text-xs text-gray-500">Ages 13 or above</p>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-brand-gold hover:text-brand-gold transition-colors disabled:opacity-50"
                    disabled={guests <= 1}
                  >
                    -
                  </button>
                  <span className="w-4 text-center text-sm font-medium">{guests}</span>
                  <button 
                    onClick={() => setGuests(Math.min(10, guests + 1))}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-brand-gold hover:text-brand-gold transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-brand-charcoal">Rooms</h4>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setRooms(Math.max(1, rooms - 1))}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-brand-gold hover:text-brand-gold transition-colors disabled:opacity-50"
                    disabled={rooms <= 1}
                  >
                    -
                  </button>
                  <span className="w-4 text-center text-sm font-medium">{rooms}</span>
                  <button 
                    onClick={() => setRooms(Math.min(5, rooms + 1))}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-brand-gold hover:text-brand-gold transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Link 
        to={`/book?arrival=${arrival}&departure=${departure}&guests=${guests}&rooms=${rooms}`} 
        className="bg-brand-charcoal h-full text-white rounded-[1.5rem] md:rounded-full py-4 md:py-0 px-10 flex items-center justify-center gap-2 hover:bg-black transition-colors min-w-[200px]"
      >
        <span className="font-semibold text-sm tracking-wide">Check Availability</span>
      </Link>
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="bg-[#fffcf5] min-h-screen">
      
      {/* Editorial Hero Section */}
      <section className="relative w-full flex flex-col">
        <div className="relative min-h-[650px] md:min-h-[600px] h-[92vh] md:h-screen w-full flex items-center justify-center pt-28 pb-32 md:py-0">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.img 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src="https://res.cloudinary.com/dm7sxhaeb/image/upload/v1774612031/sushuti-bali-2975787_1_hnrswl.jpg"
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col items-center text-center md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              <p className="text-white/90 text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-6 drop-shadow-md">
                PREMIUM GUESTHOUSE & ACCOMMODATION
              </p>
              <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif text-white leading-[1.05] tracking-tight mb-8 drop-shadow-lg">
                Rest, curated<br />for life.
              </h1>
              <p className="text-white/90 text-sm md:text-lg lg:text-xl font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md mb-8">
                Individual experiences, impeccable comfort, and attention to every detail in the heart of Mahikeng.
              </p>

              {/* Trust Indicators */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white/90 text-xs sm:text-sm"
              >
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <div className="flex text-brand-gold">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <span className="font-medium tracking-wide">4.9/5 Average Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <ShieldCheck size={16} className="text-brand-gold" />
                  <span className="font-medium tracking-wide">Premium Verified Stays</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Floating Search Bar */}
        <div className="relative -mt-20 md:-mt-12 z-30 w-full px-4 md:px-6 flex justify-center">
          <FloatingBookingBar />
        </div>
      </section>

      {/* About / Bento Section */}
      <section className="py-24 md:py-32 px-4 md:px-12 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 md:gap-5">
            {/* 1. Intro Text */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6 }}
               className="space-y-6 lg:row-span-2 flex flex-col justify-start p-2"
            >
               <p className="text-[11px] uppercase tracking-widest text-gray-500 font-semibold mb-2">ABOUT US</p>
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-charcoal leading-[1.1] tracking-tight">Comfort.<br/>Luxury.<br/>Tranquility.</h2>
               <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-sm mt-6">
                 We create spaces that become a memorable part of your journey, blending modern design with warm hospitality and reflecting your impeccable taste.
               </p>
               <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-charcoal hover:opacity-70 mt-4 transition-opacity group">
                 More about us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </Link>
            </motion.div>
            
            {/* 2. Individual approach */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: 0.1 }}
               className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col justify-between group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 min-h-[250px] md:min-h-[300px]"
            >
               <div className="space-y-4">
                 <h3 className="text-xl font-serif text-brand-charcoal">Individual approach</h3>
                 <p className="text-sm text-gray-500 leading-relaxed">
                   We consider your lifestyle and every detail to craft a stay that feels tailor-made for you.
                 </p>
               </div>
               <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-brand-charcoal self-end transition-transform group-hover:scale-110 group-hover:bg-brand-charcoal group-hover:text-white">
                  <LayoutGrid size={18} />
               </div>
            </motion.div>

            {/* 3. Image */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative group bg-brand-charcoal min-h-[250px] md:min-h-[300px] shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
            >
               <img src="https://res.cloudinary.com/dm7sxhaeb/image/upload/v1774610433/012-308_fopbhj.jpg" className="w-full h-full object-cover transition-transform duration-700 opacity-90 group-hover:scale-105" alt="Detail" />
            </motion.div>

            {/* 4. Premium amenities */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: 0.1 }}
               className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col justify-between group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 min-h-[250px] md:min-h-[300px]"
            >
               <div className="space-y-4">
                 <h3 className="text-xl font-serif text-brand-charcoal">Premium amenities</h3>
                 <p className="text-sm text-gray-500 leading-relaxed">
                   Selected materials, luxury bedding, and high-quality appliances from leading brands.
                 </p>
               </div>
               <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-brand-charcoal self-end transition-transform group-hover:scale-110 group-hover:bg-brand-charcoal group-hover:text-white">
                  <Star size={18} />
               </div>
            </motion.div>

            {/* 5. Impeccable service */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col justify-between group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 min-h-[250px] md:min-h-[300px]"
            >
               <div className="space-y-4">
                 <h3 className="text-xl font-serif text-brand-charcoal">Impeccable service</h3>
                 <p className="text-sm text-gray-500 leading-relaxed">
                   Modern facilities and stringent quality control at every stage of your stay.
                 </p>
               </div>
               <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-brand-charcoal self-end transition-transform group-hover:scale-110 group-hover:bg-brand-charcoal group-hover:text-white">
                  <CheckCircle2 size={18} />
               </div>
            </motion.div>
         </div>
      </section>

      {/* Rooms Showcase (Tall Cards like mockup "Categories") */}
      <section className="py-24 md:py-32 px-4 md:px-12 max-w-7xl mx-auto">
         <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
               <p className="text-[11px] uppercase tracking-widest text-gray-500 font-semibold mb-2">CATEGORIES</p>
               <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal tracking-tight">Spaces for every need</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/accommodation" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-charcoal hover:opacity-70 transition-opacity group">
                View all spaces <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ROOMS.map((room, i) => (
               <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
               >
                 <Link to="/accommodation" className="group relative aspect-[4/5] md:aspect-[3/4] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden block">
                    <img src={room.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={room.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex justify-between items-end">
                       <div>
                          <h3 className="text-white text-2xl font-serif mb-1">{room.title}</h3>
                          <p className="text-white/80 text-sm font-medium">{room.price}</p>
                       </div>
                       <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-charcoal shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          <ArrowRight size={18} />
                       </div>
                    </div>
                 </Link>
               </motion.div>
            ))}
         </div>
      </section>

      {/* Extended Attractions (Horizontal wide cards like mockup "Projects") */}
      <section className="py-24 md:py-32 px-4 md:px-12 max-w-7xl mx-auto">
         <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
               <p className="text-[11px] uppercase tracking-widest text-gray-500 font-semibold mb-2">EXPERIENCES</p>
               <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal tracking-tight">Curated environments</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/attractions" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-charcoal hover:opacity-70 transition-opacity group">
                Explore locally <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] md:grid-rows-2 gap-4 h-[auto] md:h-[500px]">
            {ATTRACTIONS.slice(0, 3).map((attr, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.7, delay: i * 0.2 }}
                 className={i === 0 ? "md:col-span-1 md:row-span-2 min-h-[300px] md:min-h-0" : "md:col-start-2 min-h-[220px] md:min-h-0"}
               >
                 <Link to="/attractions" className={`group relative rounded-[2rem] overflow-hidden block bg-brand-charcoal h-full`}>
                    <img src={attr.image} className="w-full h-full object-cover transition-transform duration-700 opacity-90 group-hover:scale-105" alt={attr.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex justify-between items-end">
                       <div>
                          <h3 className="text-white text-xl md:text-2xl font-serif mb-2 leading-tight">{attr.title}</h3>
                          <p className="text-white/80 text-[10px] md:text-xs uppercase tracking-wider max-w-[80%]">{attr.description.length > 50 ? attr.description.substring(0, 50) + '...' : attr.description}</p>
                       </div>
                       <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-brand-charcoal transition-all duration-300">
                          <ArrowRight size={16} />
                       </div>
                    </div>
                 </Link>
               </motion.div>
            ))}
         </div>
      </section>

      {/* Process / How we operate */}
      <section className="py-24 md:py-32 px-4 md:px-12 max-w-7xl mx-auto border-t border-gray-100">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
         >
           <p className="text-[11px] uppercase tracking-widest text-gray-500 font-semibold mb-8 md:mb-12">HOW IT WORKS</p>
           <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal tracking-tight mb-12 md:mb-16">From idea to the ideal stay</h2>
         </motion.div>
         
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {[
               { icon: CalendarRange, title: "1. Booking", desc: "Select dates and space." },
               { icon: LayoutGrid, title: "2. Personalization", desc: "We prepare for your needs." },
               { icon: ShieldCheck, title: "3. Arrival", desc: "Seamless priority check-in." },
               { icon: Coffee, title: "4. Experience", desc: "Enjoy premium amenities." },
               { icon: Star, title: "5. Memories", desc: "Depart feeling restored." },
            ].map((step, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.5, delay: i * 0.1 }}
                 className="flex flex-col relative group cursor-default"
               >
                  <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center text-brand-charcoal mb-6 border border-gray-100 z-10 relative transition-transform duration-500 group-hover:scale-110 group-hover:shadow-md">
                     <step.icon size={20} strokeWidth={1.5} />
                  </div>
                  {i !== 4 && (
                     <div className="hidden lg:block absolute top-7 left-14 w-[calc(100%-3.5rem)] h-[1px] border-t border-dashed border-gray-200 -z-0"></div>
                  )}
                  <h4 className="font-semibold text-brand-charcoal text-sm mb-2">{step.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed pr-4">{step.desc}</p>
               </motion.div>
            ))}
         </div>
      </section>

      {/* Lifestyle / Gallery Section */}
      <section className="py-24 md:py-32 px-4 md:px-12 max-w-7xl mx-auto border-t border-gray-100">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <p className="text-[11px] uppercase tracking-widest text-gray-500 font-semibold mb-4">LIFESTYLE</p>
           <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal tracking-tight">The art of living well.</h2>
         </motion.div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
           {[
             "https://res.cloudinary.com/dm7sxhaeb/image/upload/v1774610492/005-4470_idw6os.jpg",
             "https://res.cloudinary.com/dm7sxhaeb/image/upload/v1779795432/001new-1797_a5bm1h.jpg",
             "https://res.cloudinary.com/dm7sxhaeb/image/upload/v1774610433/012-308_fopbhj.jpg",
             "https://res.cloudinary.com/dm7sxhaeb/image/upload/v1779795432/002-2827_rvhr9y.jpg"
           ].map((url, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.7, delay: i * 0.15 }}
               className={`rounded-[2rem] overflow-hidden aspect-[4/5] md:aspect-[3/4] ${i % 2 === 1 ? 'mt-8 md:mt-16' : ''}`}
             >
               <img src={url} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Lifestyle gallery" />
             </motion.div>
           ))}
         </div>
      </section>

      {/* Guest Reviews Section */}
      <section className="py-24 md:py-32 px-4 md:px-12 max-w-7xl mx-auto border-t border-gray-100 mb-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="mb-16 md:mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
         >
           <div>
             <p className="text-[11px] uppercase tracking-widest text-gray-500 font-semibold mb-4">TESTIMONIALS</p>
             <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal tracking-tight">Stories from our guests</h2>
           </div>
           <div className="flex items-center gap-2 justify-center">
             <div className="flex text-brand-gold">
               {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
             </div>
             <p className="text-sm font-medium text-brand-charcoal">4.9 Overall</p>
           </div>
         </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
           {[
             { name: "Sarah M.", role: "Business Traveler", text: "An absolute oasis in Mahikeng. The attention to detail is unparalleled, and the serenity of the garden rooms made my business trip feel like a retreat." },
             { name: "James & Claire", role: "Couples Getaway", text: "Impeccable service from the moment we arrived. The rooms are beautifully curated, and the local dining recommendations were spot on." },
             { name: "David T.", role: "Design Enthusiast", text: "A masterclass in minimal, elegant design. Every touchpoint, from the premium linens to the beautifully appointed bathrooms, speaks of quality." }
           ].map((review, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.7, delay: i * 0.2 }}
               className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
             >
               <div className="flex text-brand-gold mb-6">
                 {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
               </div>
               <p className="text-gray-600 leading-relaxed mb-8 flex-grow">"{review.text}"</p>
               <div>
                 <p className="font-medium text-brand-charcoal">{review.name}</p>
                 <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{review.role}</p>
               </div>
             </motion.div>
           ))}
         </div>
      </section>

      {/* Full Width Footer CTA */}
      <section className="px-4 md:px-8 pb-12 max-w-7xl mx-auto">
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] overflow-hidden bg-brand-charcoal h-[450px] flex items-end p-8 md:p-20 shadow-2xl group"
         >
            <img 
               src="https://res.cloudinary.com/dm7sxhaeb/image/upload/v1774612031/sushuti-bali-2975787_1_hnrswl.jpg" 
               className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay transition-transform duration-[2s] group-hover:scale-105" 
               alt="Footer CTA background"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight max-w-xl shadow-sm drop-shadow-md">
                 Create a space you want to return to
               </h2>
               <Link to="/book" className="bg-white text-brand-charcoal rounded-full px-8 py-4 flex items-center gap-3 hover:bg-gray-100 transition-colors font-medium text-sm shrink-0 shadow-xl group/btn">
                 Leave a request <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
               </Link>
            </div>
         </motion.div>
      </section>

    </div>
  );
};

export default Home;
