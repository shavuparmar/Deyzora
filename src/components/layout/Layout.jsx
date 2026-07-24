import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';
import ErrorBoundary from '../ErrorBoundary';

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }
};

export default function Layout() {
  const location = useLocation();

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Deyzora Infotech",
    "image": "https://deyzora.com/og-image.jpg",
    "description": "Premium software development agency building high-performance websites, SaaS platforms, and AI applications.",
    "url": "https://deyzora.com",
    "telephone": "+919879001603",
    "priceRange": "₹₹",
    "sameAs": [
      "https://www.linkedin.com/company/deyzora-infotech",
      "https://twitter.com/deyzorainfotech"
    ]
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans antialiased selection:bg-[#0070F3] selection:text-white">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="flex-1 flex flex-col relative z-10 w-full" id="main-content">
        <ErrorBoundary>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 flex flex-col w-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </ErrorBoundary>
      </main>

      <Footer />
    </div>
  );
}
