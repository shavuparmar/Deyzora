export const FADE_UP = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Apple-like easing
};

export const FADE_IN = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1, ease: "easeOut" }
};

export const STAGGER_CONTAINER = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const STAGGER_CHILD = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

export const SCALE_UP = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

// Reusable transition configuration
export const springTransition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
  mass: 1
};
