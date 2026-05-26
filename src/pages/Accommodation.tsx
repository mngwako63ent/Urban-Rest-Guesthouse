import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Heart, Share, Users } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { ROOMS } from '../constants';

const ImageSlider = ({ images, title }: { images: string[], title: string }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [hovered, setHovered] = useState(false);

  const scrollPrev = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div 
      className="relative aspect-[4/3] rounded-2xl overflow-hidden group w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((img, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0 h-full">
              <img 
                src={img} 
                alt={`${title} - image ${index + 1}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {hovered && images.length > 1 && (
          <>
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              onClick={scrollPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-brand-charcoal shadow-sm transition-colors"
            >
              <ChevronLeft size={18} />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              onClick={scrollNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-brand-charcoal shadow-sm transition-colors"
            >
              <ChevronRight size={18} />
            </motion.button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/60" />
              ))}
            </div>
          </>
        )}
      </AnimatePresence>
      <button className="absolute top-3 right-3 p-2 text-white hover:scale-110 transition-transform active:scale-95">
         <Heart size={24} className="drop-shadow-md" />
      </button>
    </div>
  );
};

const Accommodation = () => {
  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Header */}
      <section className="pt-12 pb-8 px-6 md:px-12 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-4">Select your room</h1>
        <p className="text-gray-500 text-lg">
          Comfortable, modern, and perfectly suited for your stay in Mahikeng.
        </p>
      </section>

      {/* Rooms List */}
      <section className="pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        {ROOMS.map((room, index) => (
          <motion.div 
            key={room.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-8 items-start pt-8 border-t border-gray-100 first:border-0 first:pt-0"
          >
            <div className="w-full lg:w-[45%] shrink-0">
               <ImageSlider images={room.images || [room.image]} title={room.title} />
            </div>
            
            <div className="w-full lg:w-[55%] flex flex-col h-full py-2">
              <div className="flex justify-between items-start mb-2">
                 <div className="space-y-1">
                    <p className="text-sm text-gray-500">Entire room · {room.capacity} guests</p>
                    <h2 className="text-3xl font-serif text-brand-charcoal">{room.title}</h2>
                 </div>
                 <div className="flex items-center gap-1 text-brand-charcoal">
                    <Star size={16} className="fill-brand-charcoal" />
                    <span className="font-semibold text-lg">4.96</span>
                 </div>
              </div>
              
              <div className="w-8 h-[1px] bg-gray-200 my-4" />
              
              <p className="text-gray-600 leading-relaxed mb-6">
                 {room.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-8">
                 {room.features.slice(0, 6).map((feature, i) => (
                   <span key={i} className="text-gray-600 text-sm flex items-center gap-2">
                     <span className="w-1 h-1 bg-gray-400 rounded-full" />
                     {feature}
                   </span>
                 ))}
                 {room.features.length > 6 && (
                   <span className="text-brand-charcoal font-medium text-sm underline cursor-pointer">Show more amenities</span>
                 )}
              </div>
              
              <div className="mt-auto flex items-end justify-between pt-6 border-t border-gray-100">
                <div>
                  <span className="text-2xl font-semibold text-brand-charcoal">{room.price}</span>
                  <span className="text-gray-500"> / night</span>
                </div>
                <Link to="/book" className="btn-primary rounded-xl px-8">Reserve</Link>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

    </div>
  );
};

export default Accommodation;
