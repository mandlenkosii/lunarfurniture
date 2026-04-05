import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Collections', path: '/collections' },
    { name: 'Craftsmanship', path: '/craftsmanship' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 md:px-12 py-6",
      isScrolled ? "glass-nav py-4" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-lunar-ivory"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Links Left */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.slice(0, 2).map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-[10px] uppercase tracking-[0.2em] text-lunar-ivory/70 hover:text-lunar-ivory transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link to="/" className="flex flex-col items-center group">
          <span className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase text-lunar-ivory group-hover:text-lunar-silver transition-colors">
            Lunar
          </span>
          <span className="text-[8px] uppercase tracking-[0.5em] text-lunar-silver/50 -mt-1">
            Furniture
          </span>
        </Link>

        {/* Desktop Links Right */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.slice(2).map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-[10px] uppercase tracking-[0.2em] text-lunar-ivory/70 hover:text-lunar-ivory transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button className="text-lunar-ivory/70 hover:text-lunar-ivory transition-colors">
            <Search size={18} strokeWidth={1.5} />
          </button>
          <Link to="/contact" className="text-[10px] uppercase tracking-[0.2em] px-4 py-2 ring-1 ring-lunar-ivory/20 hover:ring-lunar-ivory transition-all">
            Inquire
          </Link>
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center space-x-4">
          <button className="text-lunar-ivory">
            <Search size={20} />
          </button>
          <button className="text-lunar-ivory">
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-lunar-black z-40 flex flex-col items-center justify-center space-y-8"
          >
            <button 
              className="absolute top-8 right-8 text-lunar-ivory"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="font-serif text-3xl text-lunar-ivory hover:text-lunar-silver transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="luxury-button mt-8"
            >
              Book Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
