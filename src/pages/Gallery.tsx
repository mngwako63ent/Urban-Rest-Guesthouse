import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X } from 'lucide-react';
import { CardStack, CardStackItem } from '../components/ui/card-stack';

const GALLERY_STACK_ITEMS: CardStackItem[] = [
  { id: 1, title: 'Elegant Suite', description: 'Experience refined comfort in our luxury suites.', imageSrc: 'https://res.cloudinary.com/dm7sxhaeb/image/upload/v1774610433/012-308_fopbhj.jpg' },
  { id: 2, title: 'Modern Living', description: 'Sleek designs for the modern traveler.', imageSrc: 'https://res.cloudinary.com/dm7sxhaeb/image/upload/v1774610492/005-4470_idw6os.jpg' },
  { id: 3, title: 'Premium Amenities', description: 'Top-tier facilities at your fingertips.', imageSrc: 'https://www.ratanangbb.co.za/gallery/016-1141.JPG' },
];

const GALLERY_ITEMS = [
  { id: 1, category: 'Rooms', image: 'https://res.cloudinary.com/dm7sxhaeb/image/upload/v1774610433/012-308_fopbhj.jpg' },
  { id: 2, category: 'Outdoor', image: 'https://www.ratanangbb.co.za/gallery/004-1874.JPG' },
  { id: 3, category: 'Facilities', image: 'https://www.ratanangbb.co.za/gallery/016-1141.JPG' },
  { id: 4, category: 'Dining', image: 'https://www.ratanangbb.co.za/gallery/006-3496.JPG' },
  { id: 5, category: 'Rooms', image: 'https://www.ratanangbb.co.za/gallery/001new-1797.JPG' },
  { id: 6, category: 'Outdoor', image: 'https://www.ratanangbb.co.za/gallery/015-2488.JPG' },
  { id: 7, category: 'Facilities', image: 'https://www.ratanangbb.co.za/gallery/002-2827.JPG' },
  { id: 8, category: 'Rooms', image: 'https://res.cloudinary.com/dm7sxhaeb/image/upload/v1774610492/005-4470_idw6os.jpg' },
];

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ['All', 'Rooms', 'Outdoor', 'Facilities', 'Dining'];
  
  const [cardDimensions, setCardDimensions] = useState({ width: 600, height: 400 });

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardDimensions({ width: 300, height: 350 });
      } else if (window.innerWidth < 1024) {
        setCardDimensions({ width: 500, height: 400 });
      } else {
        setCardDimensions({ width: 600, height: 400 });
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="pt-24 bg-white min-h-screen">
      <section className="py-24 px-6 md:px-12 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif text-brand-charcoal mb-6 tracking-tight">Gallery</h1>
        <p className="text-gray-500 text-lg">
          Take a visual tour of Urban Rest Guesthouse.
        </p>
      </section>

      {/* Featured Card Stack */}
      <section className="pb-12 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <CardStack 
              items={GALLERY_STACK_ITEMS}
              autoAdvance
              intervalMs={3500}
              cardWidth={cardDimensions.width}
              cardHeight={cardDimensions.height}
              className="max-w-4xl"
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-brand-charcoal text-white' 
                    : 'bg-white text-brand-charcoal border border-gray-200 hover:border-brand-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode='popLayout'>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative aspect-square rounded-3xl group overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <img 
                    src={item.image} 
                    alt={item.category} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-brand-charcoal shadow-lg">
                      <Maximize2 size={20} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-brand-charcoal hover:scale-110 transition-transform bg-gray-100 p-3 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} strokeWidth={2} />
            </button>
            <motion.img 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage} 
              alt="Full size" 
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
