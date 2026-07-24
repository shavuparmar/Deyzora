import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Lenis from 'lenis';

import Layout from './components/layout/Layout';
import SplashScreen from './components/layout/SplashScreen';

// Core pages
import Home from './pages/Home';
import About from './pages/About';
import ContactPage from './pages/ContactPage';

// Lazy loaded pages
const ServicesPage = lazy(() => import('./pages/services/ServicesPage'));
const ServiceDetails = lazy(() => import('./pages/services/ServiceDetails'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const BlogList = lazy(() => import('./pages/BlogList'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const OffersPage = lazy(() => import('./pages/OffersPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const DemoWebsites = lazy(() => import('./pages/DemoWebsites'));

// Legal pages
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/legal/TermsConditions'));
const RefundPolicy = lazy(() => import('./pages/legal/RefundPolicy'));
const CookiePolicy = lazy(() => import('./pages/legal/CookiePolicy'));
const Disclaimer = lazy(() => import('./pages/legal/Disclaimer'));
const Accessibility = lazy(() => import('./pages/legal/Accessibility'));
const Sitemap = lazy(() => import('./pages/legal/Sitemap'));

// Status pages
const ComingSoon = lazy(() => import('./pages/ComingSoon'));
const Maintenance = lazy(() => import('./pages/Maintenance'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const ServerError = lazy(() => import('./pages/ServerError'));
const NotFound = lazy(() => import('./pages/NotFound'));

const PageLoader = () => (
  <div className="min-h-screen pt-32 flex items-center justify-center bg-black">
    <div className="w-10 h-10 border-[3px] border-[#0070F3] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.__lenis = null;
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <SplashScreen />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              
              {/* Service Architecture */}
              <Route path="services" element={<ServicesPage />} />
              <Route path="services/:slug" element={<ServiceDetails />} />
              
              {/* Main App Routes */}
              <Route path="blog" element={<BlogList />} />
              <Route path="blog/:slug" element={<BlogPost />} />
              <Route path="portfolio" element={<PortfolioPage />} />
              <Route path="projects" element={<Navigate to="/portfolio" replace />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="offers" element={<OffersPage />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="demo-websites" element={<DemoWebsites />} />
              <Route path="contact" element={<ContactPage />} />
              
              {/* Legal Policies */}
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="terms-and-conditions" element={<TermsConditions />} />
              <Route path="terms-conditions" element={<Navigate to="/terms-and-conditions" replace />} />
              <Route path="refund-policy" element={<RefundPolicy />} />
              <Route path="cookie-policy" element={<CookiePolicy />} />
              <Route path="disclaimer" element={<Disclaimer />} />
              <Route path="accessibility" element={<Accessibility />} />
              <Route path="sitemap" element={<Sitemap />} />

              {/* Status Pages */}
              <Route path="coming-soon" element={<ComingSoon />} />
              <Route path="maintenance" element={<Maintenance />} />
              <Route path="thank-you" element={<ThankYou />} />
              <Route path="500" element={<ServerError />} />

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
