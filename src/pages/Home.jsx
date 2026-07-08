import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import TrustedBy from '../components/home/TrustedBy';
import Stats from '../components/home/Stats';
import AboutPreview from '../components/home/AboutPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Services from '../components/home/Services';
import FeaturedServices from '../components/home/FeaturedServices';
import IndustriesWeServe from '../components/home/IndustriesWeServe';
import Process from '../components/home/Process';
import Technologies from '../components/home/Technologies';
import FeaturedProjects from '../components/home/FeaturedProjects';
import DemoWebsitesPreview from '../components/home/DemoWebsitesPreview';
import Testimonials from '../components/home/Testimonials';
import Pricing from '../components/home/Pricing';
import FAQ from '../components/home/FAQ';
import BlogPreviewSection from '../components/home/BlogPreviewSection';
import CallToAction from '../components/home/CallToAction';
import ContactFormSection from '../components/home/ContactFormSection';
import Location from '../components/home/Location';
import BusinessInformation from '../components/home/BusinessInformation';
import NewsletterSection from '../components/home/NewsletterSection';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Deyzora Infotech | Premium Digital Agency</title>
        <meta name="description" content="We build premium, world-class websites and digital products for modern startups and businesses." />
      </Helmet>

      <main className="min-h-screen">
        {/* 1. Hero */}
        <Hero />
        {/* 2. Trusted Clients Marquee */}
        <TrustedBy />
        {/* 3. Company Statistics */}
        <Stats />
        {/* 4. About Us Preview */}
        <AboutPreview />
        {/* 5. Why Choose Us */}
        <WhyChooseUs />
        {/* 6. Core Services Bento Grid */}
        <Services />
        {/* 7. Featured Services Breakdown */}
        <FeaturedServices />
        {/* 8. Industries We Serve */}
        <IndustriesWeServe />
        {/* 9. Website Development Process */}
        <Process />
        {/* 10. Technologies We Use */}
        <Technologies />
        {/* 11. Featured Projects Portfolio */}
        <FeaturedProjects />
        {/* 12. Demo Websites Hub Link */}
        <DemoWebsitesPreview />
        {/* 13. Testimonials */}
        <Testimonials />
        {/* 14. Premium Pricing */}
        <Pricing />
        {/* 15. FAQ Accordion */}
        <FAQ />
        {/* 16. Blog Preview Grid */}
        <BlogPreviewSection />
        {/* 17. Massive Call To Action */}
        <CallToAction />
        {/* 18. Contact Form & Methods */}
        <ContactFormSection />
        {/* 19. Connect With Us / Socials */}
        <Location />
        {/* 20. Business Information / Metrics */}
        <BusinessInformation />
        {/* 21. Newsletter Opt-in */}
        <NewsletterSection />
      </main>
    </>
  );
}
