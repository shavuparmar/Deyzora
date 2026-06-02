import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Custom hook to detect when an element is in view for triggering animations.
 * @param {Object} options - IntersectionObserver configuration
 * @returns {[React.RefObject, boolean]} - The ref to attach, and the in-view status
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.15,
    ...options,
  });

  return [ref, isInView];
}

// Global Animation Variants
export const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 70,
      damping: 15,
      mass: 0.8,
      duration: 0.8,
      delay: custom.delay || 0,
    },
  }),
};

export const FADE_DOWN = {
  hidden: { opacity: 0, y: -30 },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 70,
      damping: 15,
      mass: 0.8,
      duration: 0.8,
      delay: custom.delay || 0,
    },
  }),
};

export const FADE_IN = {
  hidden: { opacity: 0 },
  visible: (custom = {}) => ({
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: custom.delay || 0,
    },
  }),
};

export const FADE_LEFT = {
  hidden: { opacity: 0, x: 40 },
  visible: (custom = {}) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 70,
      damping: 15,
      mass: 0.8,
      duration: 0.8,
      delay: custom.delay || 0,
    },
  }),
};

export const FADE_RIGHT = {
  hidden: { opacity: 0, x: -40 },
  visible: (custom = {}) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 70,
      damping: 15,
      mass: 0.8,
      duration: 0.8,
      delay: custom.delay || 0,
    },
  }),
};

export const SCALE_IN = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (custom = {}) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 15,
      duration: 0.8,
      delay: custom.delay || 0,
    },
  }),
};

export const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: (custom = {}) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.staggerTime || 0.12,
      delayChildren: custom.delay || 0,
    },
  }),
};

export const HOVER_GLOW = {
  hover: {
    scale: 1.02,
    borderColor: 'rgba(124, 58, 237, 0.4)',
    boxShadow: '0 20px 40px -10px rgba(124, 58, 237, 0.25)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  tap: { scale: 0.98 },
};

export const BUTTON_INTERACTIVE = {
  hover: {
    scale: 1.03,
    boxShadow: '0 10px 25px -5px rgba(37, 99, 235, 0.4)',
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  tap: { scale: 0.97 },
};
