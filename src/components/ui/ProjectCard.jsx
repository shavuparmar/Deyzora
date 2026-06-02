import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import GlassCard from './GlassCard';
import { SCALE_IN } from '../../hooks/useScrollAnimation';

/**
 * ProjectCard Component for beautiful Portfolio presentations.
 */
export default function ProjectCard({
  title,
  category,
  description,
  tags = [],
  image,
  link = '#',
  delay = 0,
  className = '',
  ...props
}) {
  return (
    <GlassCard
      animate={true}
      delay={delay}
      hoverable={false} /* Custom hover actions internally */
      className={`relative overflow-hidden group flex flex-col justify-between h-[450px] p-0 border border-white/5 hover:border-brand-purple/20 transition-all duration-500 rounded-3xl ${className}`}
      {...props}
    >
      {/* Background Image Container with Hover Scale */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-40 group-hover:opacity-30"
          loading="lazy"
        />
        {/* Dark Vignette and Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      </div>

      {/* Top Section - Category Badge */}
      <div className="relative z-20 p-6 flex justify-between items-start">
        <span className="inline-block px-3.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-brand-purple bg-brand-purple/10 border border-brand-purple/20 backdrop-blur-md">
          {category}
        </span>
        
        {/* Floating Action Arrow */}
        <a 
          href={link} 
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white backdrop-blur-md transition-all duration-300 group-hover:bg-brand-purple group-hover:border-brand-purple group-hover:text-white group-hover:rotate-45"
          aria-label={`View details for ${title}`}
        >
          <FiArrowUpRight className="w-5 h-5" />
        </a>
      </div>

      {/* Bottom Section - Content */}
      <div className="relative z-20 p-8 mt-auto">
        {/* Technology tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-[10px] font-medium text-brand-light/60 bg-white/5 px-2.5 py-1 rounded-md border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title & Description */}
        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-brand-purple transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-brand-gray text-xs md:text-sm leading-relaxed font-light line-clamp-2">
          {description}
        </p>
      </div>
    </GlassCard>
  );
}
