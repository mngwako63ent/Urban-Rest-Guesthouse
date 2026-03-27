import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Compass, History, Trees, Landmark, Waves } from 'lucide-react';

const ATTRACTIONS = [
  {
    title: 'Anglo-Boer War History',
    category: 'History',
    icon: History,
    description: 'Explore the rich military history of Mahikeng through various battlefields and museums dedicated to the Siege of Mafeking.',
    image: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Mafikeng Game Reserve',
    category: 'Nature',
    icon: Trees,
    description: 'A 4,600-hectare reserve home to white rhino, buffalo, gemsbok, and giraffe. Perfect for a morning game drive.',
    image: 'https://images.unsplash.com/photo-1547471080-7cb2ac6470b9?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Mmabatho Palms Resort',
    category: 'Entertainment',
    icon: Landmark,
    description: 'A premier casino and resort offering world-class gaming, dining, and entertainment just minutes away.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Lotlamoreng Dam',
    category: 'Leisure',
    icon: Waves,
    description: 'A beautiful spot for fishing, bird watching, and family picnics in a tranquil lakeside setting.',
    image: 'https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&q=80&w=1200'
  }
];

const Attractions = () => {
  return (
    <div className="pt-24">
      <section className="py-24 px-6 md:px-12 bg-brand-brown text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1518182170546-076616fdacdc?auto=format&fit=crop&q=80&w=1920" 
            alt="Mahikeng History" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-sm font-bold">Local Guide</span>
          <h1 className="text-5xl md:text-6xl font-serif">Explore Mahikeng</h1>
          <p className="text-gray-300 text-lg">
            Discover the hidden gems, rich history, and natural beauty surrounding Urban Rest.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
          {ATTRACTIONS.map((attr, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
            >
              <div className="w-full lg:w-1/2 aspect-video overflow-hidden shadow-2xl">
                <img 
                  src={attr.image} 
                  alt={attr.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3 text-brand-gold">
                  <attr.icon size={20} />
                  <span className="text-xs uppercase tracking-widest font-bold">{attr.category}</span>
                </div>
                <h2 className="text-4xl font-serif text-brand-brown">{attr.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {attr.description}
                </p>
                <button className="btn-outline flex items-center gap-2">
                  <MapPin size={16} /> Get Directions
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-24 px-6 md:px-12 bg-brand-beige">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-3xl font-serif text-brand-brown">Travel Tips</h3>
            <p className="text-gray-500">Make the most of your visit to the North West province with these helpful tips.</p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Best Time to Visit', desc: 'Spring (Sept-Nov) and Autumn (March-May) offer the most pleasant weather for outdoor activities.' },
              { title: 'Getting Around', desc: 'While we are centrally located, having a car is recommended for exploring the wider region.' },
              { title: 'Local Culture', desc: 'Mahikeng is rich in Tswana culture. Be sure to visit local markets for authentic crafts.' },
              { title: 'Safety', desc: 'Our area is very safe, but always practice standard travel safety when exploring the CBD.' },
            ].map((tip, i) => (
              <div key={i} className="space-y-2">
                <h4 className="font-bold text-brand-brown uppercase tracking-widest text-sm">{tip.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Attractions;
