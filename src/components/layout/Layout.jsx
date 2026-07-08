import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ErrorBoundary from '../ErrorBoundary';

/* ═══════════════════════════════════════════════════════════
   PAGE TRANSITION — soft fade
═══════════════════════════════════════════════════════════ */
const PageTransition = ({ children, locationKey }) => (
  <motion.div
    key={locationKey}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3, ease: 'easeInOut' }}
    className="flex-1 flex flex-col"
  >
    {children}
  </motion.div>
);

/* ═══════════════════════════════════════════════════════════
   MAIN LAYOUT
═══════════════════════════════════════════════════════════ */
export default function Layout() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg-dark)] font-sans">
      <Navbar />
      
      <main className="flex-1 flex flex-col relative z-10" id="main-content">
        <ErrorBoundary>
          <AnimatePresence mode="wait">
            <PageTransition locationKey={location.pathname}>
              <Outlet />
            </PageTransition>
          </AnimatePresence>
        </ErrorBoundary>
      </main>

      <Footer />
    </div>
  );
}
