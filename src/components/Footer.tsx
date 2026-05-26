import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img 
              src="https://res.cloudinary.com/dm7sxhaeb/image/upload/v1774603858/Urban_Background_removed_nhulaz.png" 
              alt="Urban Rest Logo" 
              className="w-20 h-20 object-contain brightness-0 invert"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden flex flex-col">
              <span className="font-serif text-xl font-bold tracking-tight leading-none">Urban Rest</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold">Guesthouse</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Experience affordable luxury in the heart of Mahikeng. A peaceful retreat designed for comfort and convenience.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-lg mb-6 border-l-2 border-brand-gold pl-4">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-brand-gold transition-colors">Our Story</Link></li>
            <li><Link to="/accommodation" className="hover:text-brand-gold transition-colors">Rooms & Suites</Link></li>
            <li><Link to="/facilities" className="hover:text-brand-gold transition-colors">Facilities</Link></li>
            <li><Link to="/attractions" className="hover:text-brand-gold transition-colors">Local Guide</Link></li>
            <li><Link to="/gallery" className="hover:text-brand-gold transition-colors">Gallery</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-serif text-lg mb-6 border-l-2 border-brand-gold pl-4">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex gap-3">
              <MapPin size={18} className="text-brand-gold shrink-0" />
              <span>5 DF Malan Avenue, Libertas, Mahikeng, South Africa</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-brand-gold shrink-0" />
              <span>(+27) 18 381 5137</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-brand-gold shrink-0" />
              <span>apolus@mweb.co.za</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-serif text-lg mb-6 text-white border-l-2 border-brand-charcoal pl-4">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">Subscribe for exclusive offers and updates.</p>
          <form className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-white/10 border border-transparent rounded-full px-5 py-3 text-sm text-white focus:outline-none focus:border-white focus:bg-white/20 transition-colors"
            />
            <button className="bg-white text-brand-charcoal px-5 py-3 rounded-full font-medium transition-colors hover:bg-gray-100 flex items-center justify-center">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-gray-500">
        <p>© 2026 Urban Rest Guesthouse. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
