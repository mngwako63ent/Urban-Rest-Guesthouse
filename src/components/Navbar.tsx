import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Accommodation', path: '/accommodation' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Attractions', path: '/attractions' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12',
        isScrolled ? 'glass-nav shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="https://res.cloudinary.com/dm7sxhaeb/image/upload/v1774603858/Urban_Background_removed_nhulaz.png" 
            alt="Urban Rest Logo" 
            className="w-16 h-16 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden flex flex-col">
            <span className={cn("font-serif text-xl font-bold tracking-tight leading-none", (isScrolled || isOpen) ? "text-brand-brown" : "text-white")}>Urban Rest</span>
            <span className={cn("text-[10px] uppercase tracking-[0.2em]", (isScrolled || isOpen) ? "text-brand-gold" : "text-brand-gold/80")}>Guesthouse</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm uppercase tracking-widest transition-colors hover:text-brand-gold",
                isScrolled ? "text-brand-brown" : "text-white",
                location.pathname === link.path && "text-brand-gold font-semibold"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/book" className="btn-primary py-2 px-6 text-xs">
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn("lg:hidden", (isScrolled || isOpen) ? "text-brand-brown" : "text-white")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white/95 backdrop-blur-lg z-40 py-8 flex flex-col items-center gap-6 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-xl uppercase tracking-widest text-brand-brown font-serif",
                location.pathname === link.path && "text-brand-gold font-bold"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/book"
            className="btn-primary w-2/3 text-center mt-4"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
