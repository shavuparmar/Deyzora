import { useEffect } from'react';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Lenis from'lenis';

import Layout from'./components/layout/Layout';
import Home from'./pages/Home';
import About from'./pages/About';
import ServiceDetails from'./pages/ServiceDetails';
import PortfolioPage from'./pages/PortfolioPage';
import PricingPage from'./pages/PricingPage';
import ContactPage from'./pages/ContactPage';
import LetsTalk from'./pages/LetsTalk';
import PrivacyPolicy from'./pages/PrivacyPolicy';
import TermsConditions from'./pages/TermsConditions';
import RefundPolicy from'./pages/RefundPolicy';
import CancellationPolicy from'./pages/CancellationPolicy';
import ShippingPolicy from'./pages/ShippingPolicy';
import CookiePolicy from'./pages/CookiePolicy';
import Disclaimer from'./pages/Disclaimer';
import Accessibility from'./pages/Accessibility';
import SecurityPolicy from'./pages/SecurityPolicy';
import Sitemap from'./pages/Sitemap';
import ThankYou from'./pages/ThankYou';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from'./pages/NotFound';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation:'vertical',
      gestureOrientation:'vertical',
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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services/:slug" element={<ServiceDetails />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="lets-talk" element={<LetsTalk />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-and-conditions" element={<TermsConditions />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="cancellation-policy" element={<CancellationPolicy />} />
          <Route path="shipping-policy" element={<ShippingPolicy />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="accessibility" element={<Accessibility />} />
          <Route path="security-policy" element={<SecurityPolicy />} />
          <Route path="sitemap" element={<Sitemap />} />
          <Route path="thank-you" element={<ThankYou />} />

          {/* Admin / CRM */}
          <Route path="admin" element={<AdminDashboard />} />
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
