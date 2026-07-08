import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Lenis from 'lenis';

import Layout from './components/layout/Layout';

// Eagerly loaded for performance
import Home from './pages/Home';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import LetsTalk from './pages/LetsTalk';
import ServicesPage from './pages/ServicesPage';
import ServiceDetails from './pages/ServiceDetails';

// Lazy loaded pages
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const BlogList = lazy(() => import('./pages/BlogList'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const DemoWebsites = lazy(() => import('./pages/DemoWebsites'));

// Legal
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'));
const CancellationPolicy = lazy(() => import('./pages/CancellationPolicy'));
const ShippingPolicy = lazy(() => import('./pages/ShippingPolicy'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));
const Accessibility = lazy(() => import('./pages/Accessibility'));
const SecurityPolicy = lazy(() => import('./pages/SecurityPolicy'));
const DMCAPolicy = lazy(() => import('./pages/DMCAPolicy'));
const CopyrightPolicy = lazy(() => import('./pages/CopyrightPolicy'));
const AcceptableUsePolicy = lazy(() => import('./pages/AcceptableUsePolicy'));
const SLA = lazy(() => import('./pages/SLA'));
const IntellectualProperty = lazy(() => import('./pages/IntellectualProperty'));
const GrievancePolicy = lazy(() => import('./pages/GrievancePolicy'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const NotFound = lazy(() => import('./pages/NotFound'));

const PageLoader = () => (
  <div className="min-h-screen pt-32 flex items-center justify-center bg-[var(--color-bg-dark)]">
    <div className="w-10 h-10 border-[3px] border-[var(--color-primary)] border-t-transparent rounded-full animate-spin"></div>
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

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/:slug" element={<ServiceDetails />} />
            
            <Route path="blog" element={<BlogList />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="projects" element={<Navigate to="/portfolio" replace />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="demo-websites" element={<DemoWebsites />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="lets-talk" element={<LetsTalk />} />
            
            {/* Legal */}
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-and-conditions" element={<TermsConditions />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="cancellation-policy" element={<CancellationPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="cookie-policy" element={<CookiePolicy />} />
            <Route path="disclaimer" element={<Disclaimer />} />
            <Route path="accessibility" element={<Accessibility />} />
            <Route path="security-policy" element={<SecurityPolicy />} />
            <Route path="dmca-policy" element={<DMCAPolicy />} />
            <Route path="copyright-policy" element={<CopyrightPolicy />} />
            <Route path="acceptable-use-policy" element={<AcceptableUsePolicy />} />
            <Route path="sla" element={<SLA />} />
            <Route path="intellectual-property" element={<IntellectualProperty />} />
            <Route path="grievance-policy" element={<GrievancePolicy />} />
            <Route path="sitemap" element={<Sitemap />} />
            <Route path="thank-you" element={<ThankYou />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
