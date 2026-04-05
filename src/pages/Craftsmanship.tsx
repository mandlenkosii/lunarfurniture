import React from 'react';
import { motion } from 'motion/react';

export default function Craftsmanship() {
  return (
    <div className="pt-32 pb-48">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-32">
          <span className="text-[10px] uppercase tracking-[0.4em] text-lunar-silver mb-4 block">The Process</span>
          <h1 className="text-5xl md:text-8xl font-serif text-lunar-ivory mb-8 italic">Artisanship</h1>
          <p className="text-lunar-silver/60 text-lg max-w-2xl mx-auto font-light">
            Where precision meets poetry. Discover the meticulous journey of a Lunar piece.
          </p>
        </div>

        {/* Section 1: Materials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-48">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-serif mb-8">Celestial Materials</h2>
            <p className="text-lunar-silver/70 text-lg leading-relaxed mb-8">
              We source only the rarest materials from across the globe. Our Nero Marquina marble is hand-selected 
              from specific quarries in Spain, chosen for its deep black hue and ethereal white veining that 
              resembles the surface of a distant moon.
            </p>
            <p className="text-lunar-silver/70 text-lg leading-relaxed">
              Our leathers are tanned using ancient techniques that preserve the natural grain, resulting in 
              a texture that is as soft as a lunar shadow.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-square overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80&w=2000" 
              alt="Marble Material"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Section 2: The Human Touch */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-48">
          <motion.div
            initial={{ opacity: 0, order: 2 }}
            whileInView={{ opacity: 1, order: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:order-2"
          >
            <h2 className="text-4xl font-serif mb-8">The Human Touch</h2>
            <p className="text-lunar-silver/70 text-lg leading-relaxed mb-8">
              In an era of mass production, we choose the slow path. Every joint is hand-fitted, every 
              surface hand-polished. Our artisans spend hundreds of hours on a single piece, ensuring 
              that the final result is not just furniture, but a legacy.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <span className="text-4xl font-serif text-lunar-ivory block mb-2">240+</span>
                <span className="text-[10px] uppercase tracking-widest text-lunar-silver/50">Hours per Sofa</span>
              </div>
              <div>
                <span className="text-4xl font-serif text-lunar-ivory block mb-2">12</span>
                <span className="text-[10px] uppercase tracking-widest text-lunar-silver/50">Quality Checks</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50, order: 1 }}
            whileInView={{ opacity: 1, x: 0, order: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-square overflow-hidden md:order-1"
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
              alt="Artisan at work"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
