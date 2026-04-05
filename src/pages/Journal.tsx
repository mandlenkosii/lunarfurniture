import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const JOURNAL_POSTS = [
  {
    title: "The Art of Stillness: Designing for Silence",
    category: "Philosophy",
    date: "March 24, 2024",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "Celestial Materials: Rare Marbles of the Moon",
    category: "Materials",
    date: "February 12, 2024",
    image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "Penthouse Project: A Lunar Sanctuary in Dubai",
    category: "Projects",
    date: "January 05, 2024",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000"
  }
];

export default function Journal() {
  return (
    <div className="pt-32 pb-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.4em] text-lunar-silver mb-4 block">The Journal</span>
          <h1 className="text-5xl md:text-7xl font-serif text-lunar-ivory mb-8 italic">Lunar Editorial</h1>
          <p className="text-lunar-silver/60 text-lg max-w-2xl mx-auto font-light">
            Insights into the world of luxury design, craftsmanship, and the philosophy of celestial living.
          </p>
        </div>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative aspect-[21/9] overflow-hidden mb-24 group cursor-pointer"
        >
          <img 
            src={JOURNAL_POSTS[0].image} 
            alt={JOURNAL_POSTS[0].title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-12 left-12 max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-lunar-silver mb-4 block">{JOURNAL_POSTS[0].category} — {JOURNAL_POSTS[0].date}</span>
            <h2 className="text-4xl md:text-5xl font-serif text-lunar-ivory mb-8">{JOURNAL_POSTS[0].title}</h2>
            <button className="luxury-button">Read Article</button>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {JOURNAL_POSTS.slice(1).map((post, idx) => (
            <motion.div 
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden mb-8">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-lunar-silver mb-4 block">{post.category} — {post.date}</span>
              <h3 className="text-3xl font-serif text-lunar-ivory mb-6 group-hover:text-lunar-silver transition-colors">{post.title}</h3>
              <button className="flex items-center text-[10px] uppercase tracking-widest text-lunar-ivory group-hover:text-lunar-silver transition-colors">
                Read More <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
