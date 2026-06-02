import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import TrustedBy from '../components/sections/TrustedBy';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import About from '../components/sections/About'; // Import About section
import Portfolio from '../components/sections/Portfolio';
import Process from '../components/sections/Process';
import Testimonials from '../components/sections/Testimonials';
import Pricing from '../components/sections/Pricing';
import FAQ from '../components/sections/FAQ';
import CTA from '../components/sections/CTA';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';

/**
 * LandingPage component gathering all individual page sections.
 */
export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-brand-dark overflow-hidden font-sans">
      {/* Immersive mesh & glow effects at the page root level */}
      <div className="absolute inset-0 grid-mesh opacity-10 pointer-events-none z-0" />
      
      {/* Sticky header */}
      <Navbar />

      {/* Main interactive layouts */}
      <main className="relative z-10">
        <Hero />
        <TrustedBy />
        <Services />
        <WhyChooseUs />
        <About /> {/* Mount About section */}
        <Portfolio />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Contact />
      </main>

      {/* Corporate footer */}
      <Footer />
    </div>
  );
}
