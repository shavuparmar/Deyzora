import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/sections/HeroSection';
import ServicesBento from '../components/sections/ServicesBento';
import ProcessTimeline from '../components/sections/ProcessTimeline';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Testimonials from '../components/sections/Testimonials';
import PricingPreview from '../components/sections/PricingPreview';
import FAQPreview from '../components/sections/FAQPreview';
import Technologies from '../components/sections/Technologies';
import ContactCTA from '../components/sections/ContactCTA';

export default function Home() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Deyzora Infotech | Premium Web Architecture & IT Agency</title>
        <meta 
          name="description" 
          content="Deyzora Infotech builds high-performance websites, web applications, SaaS platforms, and AI tools with sub-second speed, luxury UI/UX, and zero technical debt." 
        />
        <link rel="canonical" href="https://deyzora.com" />
      </Helmet>

      <HeroSection />
      <ServicesBento />
      <WhyChooseUs />
      <ProcessTimeline />
      <FeaturedProjects />
      <Testimonials />
      <Technologies />
      <PricingPreview />
      <FAQPreview />
      <ContactCTA />
    </div>
  );
}
