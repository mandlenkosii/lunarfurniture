import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRODUCTS } from '@/src/constants';
import { ChevronLeft, ChevronRight, Minus, Plus, Share2, Heart } from 'lucide-react';
import ProductCard from '@/src/components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-4 mb-12 text-[10px] uppercase tracking-widest text-lunar-silver/40">
          <Link to="/" className="hover:text-lunar-ivory transition-colors">Home</Link>
          <span>/</span>
          <Link to="/collections" className="hover:text-lunar-ivory transition-colors">{product.category}</Link>
          <span>/</span>
          <span className="text-lunar-ivory">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Image Gallery */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="aspect-square overflow-hidden bg-lunar-charcoal"
            >
              <img 
                src={product.images[activeImage]} 
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square overflow-hidden border transition-colors ${activeImage === idx ? 'border-lunar-ivory' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-lunar-silver mb-4 block">{product.category}</span>
              <h1 className="text-4xl md:text-6xl font-serif text-lunar-ivory mb-6">{product.name}</h1>
              <p className="text-2xl font-light text-lunar-silver mb-8">{product.price}</p>
              
              <div className="w-12 h-[1px] bg-lunar-silver/30 mb-8"></div>
              
              <p className="text-lunar-silver/70 text-lg font-light leading-relaxed mb-12">
                {product.description}
              </p>

              <div className="space-y-8 mb-12">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-lunar-ivory mb-4">Materials</h4>
                  <ul className="flex flex-wrap gap-3">
                    {product.materials.map(m => (
                      <li key={m} className="px-4 py-2 bg-lunar-charcoal text-xs text-lunar-silver/80 rounded-full border border-white/5">
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-lunar-ivory mb-4">Dimensions</h4>
                  <p className="text-sm text-lunar-silver/60">{product.dimensions}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact" className="luxury-button flex-grow text-center">
                  Request Consultation
                </Link>
                <button className="luxury-button-outline flex items-center justify-center px-6">
                  <Heart size={18} />
                </button>
                <button className="luxury-button-outline flex items-center justify-center px-6">
                  <Share2 size={18} />
                </button>
              </div>
              
              <p className="mt-8 text-[10px] uppercase tracking-widest text-lunar-silver/40 text-center sm:text-left">
                * Limited production. Lead time: 12-16 weeks.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="mt-32 pt-32 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <h3 className="font-serif text-2xl mb-6">Celestial Inspiration</h3>
              <p className="text-lunar-silver/60 leading-relaxed">
                Every curve of the {product.name} is designed to mimic the soft, diffused light of the moon. 
                A piece that brings tranquility to any architectural space.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-6">Bespoke Options</h3>
              <p className="text-lunar-silver/60 leading-relaxed">
                Available in a range of exclusive finishes and custom dimensions. 
                Contact our concierge for a personalized material palette.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-6">White Glove Delivery</h3>
              <p className="text-lunar-silver/60 leading-relaxed">
                We offer worldwide installation and white-glove delivery service. 
                Your piece is handled with the utmost care from our workshop to your home.
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-48">
          <h2 className="text-3xl font-serif mb-16 text-center">Complementary Pieces</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {relatedProducts.map((p, idx) => (
              <ProductCard key={p.id} product={p} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
