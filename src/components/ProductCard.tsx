import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Product } from '@/src/constants';

interface ProductCardProps {
  product: Product;
  index: number;
  key?: string | number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block overflow-hidden relative aspect-[4/5]">
        <img 
          src={product.images[0]} 
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="luxury-button-outline scale-90 group-hover:scale-100 transition-transform duration-500">
            View Details
          </span>
        </div>
      </Link>
      <div className="mt-6 flex justify-between items-start">
        <div>
          <h3 className="font-serif text-xl text-lunar-ivory mb-1">{product.name}</h3>
          <p className="text-[10px] uppercase tracking-widest text-lunar-silver/50">{product.category}</p>
        </div>
        <p className="text-sm font-light text-lunar-silver/80">{product.price}</p>
      </div>
    </motion.div>
  );
}
