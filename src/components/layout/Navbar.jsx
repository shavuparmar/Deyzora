import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import { NAVIGATION_LINKS } from '../../utils/constants';
import GradientButton from '../ui/GradientButton';

/**
 * Navbar Layout Component.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-4 glass-nav shadow-lg' 
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <span className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-blue shadow-[0_0_15px_rgba(124,58,237,0.4)]">
                <span className="text-white font-display font-extrabold text-lg select-none">D</span>
              </span>
              <span className="text-xl font-display font-bold text-white tracking-tight select-none">
                Deyzora<span className="text-brand-purple font-black">.</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {NAVIGATION_LINKS.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-brand-light/70 hover:text-white transition-colors duration-200 relative py-2 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-purple transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <GradientButton href="#contact" variant="primary" className="py-2.5 px-5 text-xs">
                Start Project <FiArrowRight className="w-3.5 h-3.5" />
              </GradientButton>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white focus:outline-none transition-colors hover:bg-white/10"
                aria-label="Toggle Navigation Drawer"
              >
                {isMobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Slider Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-sm md:hidden"
            />

            {/* Drawer Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm z-50 bg-brand-dark/95 border-l border-white/5 p-8 flex flex-col justify-between shadow-2xl md:hidden"
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex items-center justify-between mb-12">
                  <a href="#" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <span className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-purple to-brand-blue text-white font-display font-bold text-base">D</span>
                    <span className="text-lg font-display font-bold text-white tracking-tight">Deyzora</span>
                  </a>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white focus:outline-none"
                    aria-label="Close Navigation Drawer"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                </div>

                {/* Vertical menu links */}
                <div className="flex flex-col gap-5">
                  {NAVIGATION_LINKS.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-base font-semibold text-brand-light/70 hover:text-white transition-colors py-2 border-b border-white/5"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* CTA in Mobile Menu bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-auto"
              >
                <GradientButton
                  href="#contact"
                  variant="primary"
                  className="w-full py-4 text-center justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Start Project <FiArrowRight className="w-4 h-4" />
                </GradientButton>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
