import React from 'react';
import { motion } from 'framer-motion';
import { FADE_UP } from '../../hooks/useScrollAnimation';

/**
 * SectionTitle component for standard, visually striking section titles.
 */
export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={FADE_UP}
      className={`max-w-3xl mb-16 md:mb-20 ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {badge && (
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-brand-purple bg-brand-purple/10 border border-brand-purple/20 mb-4 shadow-[0_0_15px_rgba(124,58,237,0.1)]">
          {badge}
        </span>
      )}
      
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mt-2">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-brand-gray text-base sm:text-lg md:text-xl font-light mt-4 sm:mt-5 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
