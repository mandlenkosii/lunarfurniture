import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-lunar-black border-t border-white/5 pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link to="/" className="flex flex-col mb-8">
              <span className="font-serif text-2xl tracking-[0.15em] uppercase text-lunar-ivory">
                Lunar
              </span>
              <span className="text-[8px] uppercase tracking-[0.5em] text-lunar-silver/50 -mt-1">
                Furniture
              </span>
            </Link>
            <p className="text-lunar-silver/60 text-sm leading-relaxed max-w-xs">
              Crafted in silence. Designed to endure. We create celestial-inspired pieces for the modern sanctuary.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-lunar-ivory mb-8">Collections</h4>
            <ul className="space-y-4">
              {['Living', 'Dining', 'Bedroom', 'Outdoor', 'Lighting', 'Bespoke'].map((item) => (
                <li key={item}>
                  <Link to="/collections" className="text-sm text-lunar-silver/50 hover:text-lunar-ivory transition-colors flex items-center group">
                    {item}
                    <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-lunar-ivory mb-8">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Craftsmanship', 'Journal', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-lunar-silver/50 hover:text-lunar-ivory transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-lunar-ivory mb-8">Newsletter</h4>
            <p className="text-sm text-lunar-silver/50 mb-6">Join our inner circle for exclusive previews and design insights.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-white/20 py-2 text-sm focus:outline-none focus:border-lunar-ivory transition-colors"
              />
              <button className="absolute right-0 bottom-2 text-[10px] uppercase tracking-widest text-lunar-ivory hover:text-lunar-silver transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 space-y-6 md:space-y-0">
          <div className="flex space-x-8">
            <a href="#" className="text-lunar-silver/40 hover:text-lunar-ivory transition-colors"><Instagram size={18} /></a>
            <a href="#" className="text-lunar-silver/40 hover:text-lunar-ivory transition-colors"><Facebook size={18} /></a>
            <a href="#" className="text-lunar-silver/40 hover:text-lunar-ivory transition-colors"><Linkedin size={18} /></a>
          </div>
          
          <div className="flex space-x-8 text-[10px] uppercase tracking-widest text-lunar-silver/30">
            <Link to="/privacy" className="hover:text-lunar-ivory transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-lunar-ivory transition-colors">Terms of Service</Link>
            <span>&copy; {currentYear} Lunar Furniture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
