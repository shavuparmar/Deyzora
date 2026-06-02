import React from 'react';
import { motion } from 'framer-motion';
import { BUTTON_INTERACTIVE } from '../../hooks/useScrollAnimation';

/**
 * GradientButton UI Component with micro-animations and glowing hover effects.
 */
export default function GradientButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
  href,
  type = 'button',
  ...props
}) {
  const baseStyles = 'relative inline-flex items-center justify-center font-display font-medium rounded-full text-sm px-7 py-3.5 transition-all duration-300 select-none overflow-hidden cursor-pointer';
  
  let variantStyles = '';
  
  if (variant === 'primary') {
    variantStyles = 'bg-gradient-to-r from-brand-purple to-brand-blue text-white shadow-[0_4px_20px_-5px_rgba(124,58,237,0.4)] border border-brand-purple/20 hover:shadow-[0_8px_30px_rgba(124,58,237,0.6)] before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity';
  } else if (variant === 'secondary') {
    variantStyles = 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_8px_25px_rgba(255,255,255,0.05)]';
  } else if (variant === 'glass') {
    variantStyles = 'bg-brand-purple/10 text-white border border-brand-purple/20 backdrop-blur-md hover:bg-brand-purple/20 hover:border-brand-purple/30 hover:shadow-[0_8px_30px_rgba(124,58,237,0.2)]';
  }

  const isAnchor = !!href;
  const Component = isAnchor ? motion.a : motion.button;

  const resolvedProps = isAnchor
    ? { href, ...props }
    : { type, onClick, ...props };

  return (
    <Component
      variants={BUTTON_INTERACTIVE}
      whileHover="hover"
      whileTap="tap"
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...resolvedProps}
    >
      {/* Decorative Glow Orb inside button */}
      {variant === 'primary' && (
        <span className="absolute -right-4 -bottom-4 w-12 h-12 bg-white/25 rounded-full blur-xl pointer-events-none transition-transform duration-500 hover:scale-150" />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Component>
  );
}
