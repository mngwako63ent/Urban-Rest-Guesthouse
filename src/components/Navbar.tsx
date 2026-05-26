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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms', path: '/accommodation' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Spa', path: '/spa' },
    { name: 'Local Guide', path: '/attractions' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 transition-all duration-300 pointer-events-none">
      <nav
        className={cn(
          'max-w-7xl mx-auto transition-all duration-300 rounded-full px-6 md:px-8 py-3 flex justify-between items-center pointer-events-auto',
          isScrolled ? 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)]' : 'bg-transparent'
        )}
      >
        <Link to="/" className="flex items-center gap-3 relative z-50">
          <img 
            src="https://res.cloudinary.com/dm7sxhaeb/image/upload/v1774603858/Urban_Background_removed_nhulaz.png" 
            alt="Urban Rest Logo" 
            className="w-12 h-12 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden flex-col">
            <span className={cn(
              "font-serif text-xl font-bold tracking-tight leading-none", 
              (!isScrolled && (location.pathname === '/' || location.pathname === '/spa')) ? "text-white" : "text-brand-charcoal"
            )}>Urban Rest</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isDarkHeroPage = location.pathname === '/' || location.pathname === '/spa';
            const isTransparentWhite = !isScrolled && isDarkHeroPage;
            
            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-gold",
                  isTransparentWhite ? "text-white/90" : "text-brand-charcoal",
                  location.pathname === link.path && "text-brand-gold"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-4">
            <Link 
              to="/book" 
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-transform hover:scale-105", 
                (!isScrolled && (location.pathname === '/' || location.pathname === '/spa'))
                  ? "bg-white text-brand-charcoal hover:bg-gray-100 shadow-sm" 
                  : "bg-brand-charcoal text-white hover:bg-black shadow-[0_4px_14px_0_rgb(0,0,0,0.1)]"
              )}
            >
              Book Now
            </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn("lg:hidden relative z-50 p-2 rounded-full", isScrolled || (location.pathname !== '/' && location.pathname !== '/spa') ? "bg-gray-100 text-brand-charcoal" : "bg-white/20 text-white")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 pt-28 px-6 pb-8 flex flex-col justify-between animate-in fade-in slide-in-from-top-4 pointer-events-auto">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-3xl font-serif tracking-tight text-brand-charcoal hover:text-brand-gold transition-colors",
                  location.pathname === link.path && "text-brand-gold"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-12 space-y-4">
            <Link
              to="/book"
              className="block w-full py-4 bg-brand-charcoal text-white text-center rounded-full font-medium text-lg hover:bg-black transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Check Availability
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
