import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Journal from './pages/Journal';
import Craftsmanship from './pages/Craftsmanship';
import { COLLECTIONS } from './constants';

// Placeholder Pages
const Collections = () => (
  <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
    <h1 className="text-5xl font-serif mb-12">Collections</h1>
    <p className="text-lunar-silver/60 text-lg max-w-2xl">Explore our curated categories of celestial-inspired furniture.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
      {COLLECTIONS.map(collection => (
        <div key={collection.name} className="aspect-video relative bg-lunar-charcoal flex items-center justify-center group cursor-pointer overflow-hidden">
          <img 
            src={collection.image} 
            alt={collection.name} 
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
          />
          <span className="relative z-10 text-4xl font-serif group-hover:scale-110 transition-transform duration-700">{collection.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const About = () => (
  <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
    <h1 className="text-5xl font-serif mb-12 italic">The Lunar Story</h1>
    <div className="space-y-8 text-lunar-silver/70 text-lg leading-relaxed text-left">
      <p>Founded on the principles of celestial beauty and terrestrial precision, Lunar Furniture represents the pinnacle of modern luxury design.</p>
      <p>Our journey began in a small workshop under the silver light of a full moon, where our founder envisioned furniture that didn't just fill a room, but defined its atmosphere.</p>
      <p>Today, we collaborate with the world's finest artisans to bring that vision to life for discerning clients globally.</p>
    </div>
  </div>
);

const Portfolio = () => (
  <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
    <h1 className="text-5xl font-serif mb-12">Portfolio</h1>
    <p className="text-lunar-silver/60 text-lg max-w-2xl">A collection of our finest placements in luxury residences and commercial spaces worldwide.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} className="aspect-square bg-lunar-charcoal overflow-hidden group cursor-pointer">
          <img 
            src={`https://images.unsplash.com/photo-${1600210492486 + i}-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000`} 
            alt="Project" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        </div>
      ))}
    </div>
  </div>
);

const Contact = () => (
  <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
    <div>
      <h1 className="text-5xl font-serif mb-8">Inquire</h1>
      <p className="text-lunar-silver/60 text-lg mb-12">Private consultations are available by appointment. Please provide your details and a design consultant will reach out within 24 hours.</p>
      <div className="space-y-6 text-sm">
        <div>
          <p className="text-lunar-silver/40 uppercase tracking-widest mb-2">Global Headquarters</p>
          <p>128 Celestial Way, Cape Town, South Africa</p>
        </div>
        <div>
          <p className="text-lunar-silver/40 uppercase tracking-widest mb-2">Email</p>
          <p>concierge@lunarfurniture.com</p>
        </div>
      </div>
    </div>
    <form className="space-y-8">
      <div className="grid grid-cols-2 gap-8">
        <input type="text" placeholder="First Name" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-lunar-ivory transition-colors" />
        <input type="text" placeholder="Last Name" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-lunar-ivory transition-colors" />
      </div>
      <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-lunar-ivory transition-colors" />
      <select className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-lunar-ivory transition-colors appearance-none text-lunar-silver/50">
        <option>Project Type</option>
        <option>Residential</option>
        <option>Commercial</option>
        <option>Bespoke Commission</option>
      </select>
      <textarea placeholder="Tell us about your project" rows={4} className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-lunar-ivory transition-colors resize-none"></textarea>
      <button type="submit" className="luxury-button w-full">Send Inquiry</button>
    </form>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/craftsmanship" element={<Craftsmanship />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add other routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
