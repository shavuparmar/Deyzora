import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Premium glassmorphic loader screen with smooth entry/exit animations.
 */
export default function Loader({ onFinished }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Keep loader for a minimum of 2000ms to show off the premium branding animation
    const timer = setTimeout(() => {
      setShow(false);
      if (onFinished) onFinished();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -20,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020617]"
        >
          {/* Subtle grid mesh background inside loader */}
          <div className="absolute inset-0 grid-mesh opacity-20" />
          
          {/* Ambient background glows */}
          <div className="absolute w-[300px] h-[300px] bg-brand-purple/10 rounded-full blur-[100px] animate-pulse-slow" />
          <div className="absolute w-[350px] h-[350px] bg-brand-blue/10 rounded-full blur-[120px] animate-pulse-slow delayed" style={{ animationDelay: '2s' }} />

          <div className="relative flex flex-col items-center gap-6">
            
            {/* Morphing glass container */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
              style={{ backdropFilter: 'blur(16px)' }}
            >
              {/* Rotating outer border neon outline effect */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-tr from-brand-purple via-transparent to-brand-blue opacity-50"
                style={{ margin: '-20px' }}
              />
              
              {/* Internal card overlay to mask rotation */}
              <div className="absolute inset-[2px] rounded-[22px] bg-[#020617]/90 z-10" />

              {/* Pulsing logo glyph */}
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: [0.5, 1.1, 1] }}
                transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                className="relative z-20 font-display font-black text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-brand-purple to-brand-blue shadow-sm"
              >
                D
              </motion.span>
            </motion.div>

            {/* Tracing company name */}
            <div className="flex flex-col items-center">
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="font-display font-extrabold text-2xl text-white tracking-widest uppercase select-none"
              >
                Deyzora
              </motion.h1>
              
              {/* Premium Progress Bar */}
              <div className="w-24 h-[1px] bg-white/10 rounded-full mt-3 overflow-hidden">
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-full h-full bg-gradient-to-r from-brand-purple to-brand-blue shadow-[0_0_8px_rgba(124,58,237,0.5)]"
                />
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
