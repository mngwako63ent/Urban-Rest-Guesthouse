import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X } from 'lucide-react';
import { CardStack, CardStackItem } from '../components/ui/card-stack';

const GALLERY_STACK_ITEMS: CardStackItem[] = [
  { id: 1, title: 'Elegant Suite', description: 'Experience refined comfort in our luxury suites.', imageSrc: 'https://www.ratanangbb.co.za/gallery/002-2827.JPG' },
  { id: 2, title: 'Modern Living', description: 'Sleek designs for the modern traveler.', imageSrc: 'https://www.ratanangbb.co.za/gallery/004-1874.JPG' },
  { id: 3, title: 'Tranquil Spaces', description: 'Peaceful environments for rest and relaxation.', imageSrc: 'https://www.ratanangbb.co.za/gallery/005-4470.JPG' },
  { id: 4, title: 'Premium Amenities', description: 'Top-tier facilities at your fingertips.', imageSrc: 'https://www.ratanangbb.co.za/gallery/016-1141.JPG' },
  { id: 5, title: 'Urban Retreat', description: 'Your sanctuary in the heart of Mahikeng.', imageSrc: 'https://www.ratanangbb.co.za/gallery/006-3496.JPG' },
  { id: 6, title: 'Sophisticated Decor', description: 'Attention to detail in every corner.', imageSrc: 'https://www.ratanangbb.co.za/gallery/012-308.JPG' },
  { id: 7, title: 'Cozy Corners', description: 'Warm and welcoming atmosphere.', imageSrc: 'https://www.ratanangbb.co.za/gallery/015-2488.JPG' },
  { id: 8, title: 'Luxury Details', description: 'Affordable luxury redefined.', imageSrc: 'https://www.ratanangbb.co.za/gallery/008-4580.JPG' },
  { id: 9, title: 'Welcome Home', description: 'Exceptional hospitality services.', imageSrc: 'https://www.ratanangbb.co.za/gallery/001new-1797.JPG' },
];

const GALLERY_ITEMS = [
  { id: 1, category: 'Rooms', image: 'https://www.ratanangbb.co.za/gallery/002-2827.JPG' },
  { id: 2, category: 'Outdoor', image: 'https://www.ratanangbb.co.za/gallery/004-1874.JPG' },
  { id: 3, category: 'Facilities', image: 'https://www.ratanangbb.co.za/gallery/005-4470.JPG' },
  { id: 4, category: 'Dining', image: 'https://www.ratanangbb.co.za/gallery/016-1141.JPG' },
  { id: 5, category: 'Rooms', image: 'https://www.ratanangbb.co.za/gallery/006-3496.JPG' },
  { id: 6, category: 'Outdoor', image: 'https://www.ratanangbb.co.za/gallery/012-308.JPG' },
  { id: 7, category: 'Facilities', image: 'https://www.ratanangbb.co.za/gallery/015-2488.JPG' },
  { id: 8, category: 'Dining', image: 'https://www.ratanangbb.co.za/gallery/008-4580.JPG' },
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
    <div className="pt-24">
      <section className="py-24 px-6 md:px-12 bg-brand-beige text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-sm font-bold">Visual Tour</span>
          <h1 className="text-5xl md:text-6xl font-serif text-brand-brown">Our Gallery</h1>
          <p className="text-gray-500 text-lg">
            A glimpse into the comfort and elegance that awaits you at Urban Rest.
          </p>
        </div>
      </section>

      {/* Featured Card Stack */}
      <section className="py-12 px-6 md:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-brand-brown italic">Featured Highlights</h2>
            <div className="w-24 h-[1px] bg-brand-gold mx-auto mt-4" />
          </div>
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

      <section className="py-24 px-6 md:px-12 bg-brand-beige">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-serif text-brand-brown">Explore More</h2>
            <p className="text-gray-500">Browse through our collection of moments and spaces.</p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2 text-xs uppercase tracking-widest transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-brand-brown text-white' 
                    : 'bg-white text-brand-brown border border-brand-brown/10 hover:bg-brand-gold hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
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
                  className="relative aspect-square group overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <img 
                    src={item.image} 
                    alt={item.category} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-brown/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Maximize2 size={24} />
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
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-brand-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage} 
              alt="Full size" 
              className="max-w-full max-h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
