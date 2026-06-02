import React from 'react';
import { motion } from 'framer-motion';
import { SCALE_IN } from '../../hooks/useScrollAnimation';

/**
 * GlassCard component providing sleek, semi-transparent backgrounds and premium card styling.
 */
export default function GlassCard({
  children,
  className = '',
  hoverable = true,
  animate = false,
  delay = 0,
  ...props
}) {
  const Component = animate ? motion.div : 'div';
  
  const motionProps = animate 
    ? {
        variants: SCALE_IN,
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, amount: 0.15 },
        custom: { delay }
      }
    : {};

  return (
    <Component
      className={`glass-card ${hoverable ? 'glass-card-hover' : ''} ${className}`}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
}
