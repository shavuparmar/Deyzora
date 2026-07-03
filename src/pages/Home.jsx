import React, { Suspense } from'react';
import SEO from'../components/SEO';
import HeroV2 from'../components/sections/HeroV2';

// Lazy load sections below the fold for 95+ Performance
const TechTrust = React.lazy(() => import('../components/sections/TechTrust'));
const Services = React.lazy(() => import('../components/sections/Services'));
const TrustedClients = React.lazy(() => import('../components/sections/TrustedClients'));
const BentoFeatures = React.lazy(() => import('../components/sections/BentoFeatures'));
const Stats = React.lazy(() => import('../components/sections/Stats'));
const Process = React.lazy(() => import('../components/sections/Process'));
const Timeline = React.lazy(() => import('../components/sections/Timeline'));
const TechnologyStack = React.lazy(() => import('../components/sections/TechnologyStack'));
const PortfolioShowcase = React.lazy(() => import('../components/sections/PortfolioShowcase'));
const Pricing = React.lazy(() => import('../components/sections/Pricing'));
const FAQ = React.lazy(() => import('../components/sections/FAQ'));
const SocialCommunity = React.lazy(() => import('../components/sections/SocialCommunity'));
const FinalCTA = React.lazy(() => import('../components/sections/FinalCTA'));
const ContactForm = React.lazy(() => import('../components/sections/ContactForm'));

const SectionFallback = () => <div className="min-h-[30vh] bg-[var(--color-surface)]/50 animate-pulse" />;

const Home = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "Deyzora Infotech",
    "url": "https://deyzora.online/",
    "logo": "https://deyzora.online/vite.svg",
    "description": "Premium Web Development, SaaS Solutions, AI Solutions, and UI/UX Design.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    }
  };

  return (
    <>
      <SEO 
        title="Deyzora Infotech | Modern Digital Experiences" 
        schema={homeSchema}
      />
      
      {/* Above the fold - eager load */}
      <HeroV2 />
      


      <Suspense fallback={<SectionFallback />}>
        <TrustedClients />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <TechTrust />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <Services />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <PortfolioShowcase />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <BentoFeatures />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <Stats />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <Process />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Timeline />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <TechnologyStack />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <Pricing />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <SocialCommunity />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <FAQ />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <FinalCTA />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <ContactForm />
      </Suspense>
    </>
  );
};

export default Home;
