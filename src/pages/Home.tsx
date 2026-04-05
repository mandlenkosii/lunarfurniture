import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PRODUCTS, COLLECTIONS } from '@/src/constants';
import ProductCard from '@/src/components/ProductCard';
import { ArrowRight, Play } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Interior"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </motion.div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[10px] uppercase tracking-[0.6em] text-lunar-silver mb-8 block"
          >
            Celestial Craftsmanship
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="text-5xl md:text-8xl font-serif text-lunar-ivory mb-8 leading-tight"
          >
            Crafted in Silence. <br />
            <span className="italic">Designed to Endure.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-lunar-silver/70 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Experience the intersection of celestial inspiration and precision artisanship. 
            Furniture that transcends time.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link to="/collections" className="luxury-button">
              Explore Collection
            </Link>
            <Link to="/contact" className="luxury-button-outline">
              Book Consultation
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
        >
          <span className="text-[8px] uppercase tracking-[0.4em] text-lunar-silver/40">Scroll to Discover</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-lunar-silver/40 to-transparent"></div>
        </motion.div>
      </section>

      {/* Brand Statement */}
      <section className="py-32 px-6 md:px-12 bg-lunar-black relative overflow-hidden">
        <div className="lunar-gradient absolute inset-0 opacity-50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-lunar-ivory mb-12 leading-snug">
              "We don't just build furniture; we curate the stillness of your sanctuary."
            </h2>
            <div className="w-24 h-[1px] bg-lunar-silver/30 mx-auto mb-12"></div>
            <p className="text-lunar-silver/60 text-lg font-light leading-relaxed">
              Lunar Furniture was born from a desire to bring the calm, ethereal beauty of the celestial world 
              into the modern home. Every piece is a testament to the patience of our artisans and the 
              purity of our materials.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-32 px-6 md:px-12 bg-lunar-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-lunar-silver mb-4 block">The Collections</span>
              <h2 className="text-4xl md:text-5xl font-serif text-lunar-ivory">Curated Spaces</h2>
            </div>
            <Link to="/collections" className="hidden md:flex items-center text-[10px] uppercase tracking-widest text-lunar-ivory hover:text-lunar-silver transition-colors group">
              View All Collections <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COLLECTIONS.map((collection, idx) => (
              <motion.div
                key={collection.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
              >
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl font-serif text-lunar-ivory mb-2">{collection.name}</h3>
                  <span className="text-[10px] uppercase tracking-widest text-lunar-silver opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    Explore Collection
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Pieces */}
      <section className="py-32 px-6 md:px-12 bg-lunar-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[10px] uppercase tracking-[0.4em] text-lunar-silver mb-4 block">Flagship Designs</span>
            <h2 className="text-4xl md:text-5xl font-serif text-lunar-ivory">Signature Pieces</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {PRODUCTS.filter(p => p.featured).map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="relative py-48 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
            alt="Craftsmanship"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover brightness-[0.3]"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-lunar-silver mb-6 block">The Process</span>
            <h2 className="text-4xl md:text-6xl font-serif text-lunar-ivory mb-8 leading-tight">
              Artisanship <br />
              <span className="italic text-lunar-silver">Without Compromise</span>
            </h2>
            <p className="text-lunar-silver/70 text-lg font-light mb-12 leading-relaxed">
              Every Lunar piece undergoes a rigorous journey of creation. From the selection of rare 
              Italian marbles to the hand-stitching of our nubuck leathers, we prioritize the 
              human touch in an automated world.
            </p>
            <Link to="/craftsmanship" className="luxury-button">
              Discover Our Process
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 relative aspect-video group cursor-pointer"
          >
            <img 
              src="https://images.unsplash.com/photo-1616486341351-79b52752ad4f?auto=format&fit=crop&q=80&w=2000" 
              alt="Workshop"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-sm"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-lunar-ivory/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Play fill="white" size={24} className="text-lunar-ivory ml-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-32 px-6 md:px-12 bg-lunar-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex justify-center space-x-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-lunar-silver"></div>
              ))}
            </div>
            <p className="text-2xl md:text-3xl font-serif italic text-lunar-ivory mb-8 leading-relaxed">
              "Lunar Furniture has transformed our penthouse into a celestial retreat. The attention to detail 
              is unlike anything we've seen in modern luxury design."
            </p>
            <span className="text-[10px] uppercase tracking-[0.3em] text-lunar-silver">— Julian Thorne, Architect</span>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-48 px-6 md:px-12 bg-lunar-black text-center relative overflow-hidden">
        <div className="lunar-gradient absolute inset-0 opacity-30"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif text-lunar-ivory mb-8">Design Your Space with Lunar</h2>
          <p className="text-lunar-silver/60 text-lg font-light mb-12">
            Our design consultants are available for private appointments worldwide. 
            Begin your journey toward a more refined sanctuary today.
          </p>
          <Link to="/contact" className="luxury-button">
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
