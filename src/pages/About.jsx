import { useEffect } from'react';
import { motion } from'framer-motion';
import { Check, Target, Compass, Users } from'lucide-react';
import SEO from'../components/SEO';
import { Card } from'../components/ui/Card';
import { Section, Container } from'../components/ui/LayoutComponents';
import TechTrust from'../components/sections/TechTrust';
import FinalCTA from'../components/sections/FinalCTA';
import Timeline from'../components/sections/Timeline';
import Process from'../components/sections/Process';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Deyzora Infotech",
    "url": "https://deyzora.online/",
    "logo": "https://deyzora.online/vite.svg",
    "description": "We are a team of passionate engineers, designers, and strategists dedicated to helping businesses grow through world-class digital products.",
    "foundingDate": "2023",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9879001603",
      "contactType": "customer service"
    }
  };

  return (
    <div className="pt-32 bg-[var(--color-background)] min-h-screen">
      <SEO 
        title="About Us | Deyzora Infotech" 
        description="Learn about our mission to build modern digital experiences." 
        schema={aboutSchema}
      />
      
      {/* Hero */}
      <Section className="relative pt-12 pb-24 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-[var(--color-foreground)]"
        >
          Our <span className="text-[var(--color-accent)]">Story</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-[var(--color-muted-foreground)] max-w-3xl mx-auto leading-relaxed"
        >
          We are a team of passionate engineers, designers, and strategists dedicated to helping businesses grow through world-class digital products. We believe in writing clean code, designing intuitive interfaces, and building relationships based on trust and transparency.
        </motion.p>
      </Section>

      {/* Mission / Vision / Values */}
      <Section className="py-12">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            <Card glass className="p-8 group hover:-translate-y-2 transition-transform duration-300">
              <Target className="w-10 h-10 text-[var(--color-accent)] mb-6" />
              <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">Our Mission</h3>
              <p className="text-[var(--color-muted-foreground)] leading-relaxed">
                To democratize enterprise-grade web architecture, bringing lightning-fast, highly converting digital experiences to startups and growing businesses.
              </p>
            </Card>
            <Card glass className="p-8 group hover:-translate-y-2 transition-transform duration-300">
              <Compass className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">Our Vision</h3>
              <p className="text-[var(--color-muted-foreground)] leading-relaxed">
                To be the most trusted digital engineering partner globally, known for our uncompromising quality and honest approach to software development.
              </p>
            </Card>
            <Card glass className="p-8 group hover:-translate-y-2 transition-transform duration-300">
              <Users className="w-10 h-10 text-pink-400 mb-6" />
              <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">Our Values</h3>
              <ul className="space-y-3 text-[var(--color-muted-foreground)]">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[var(--color-success)]" /> Quality without compromise</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[var(--color-success)]" /> Radical transparency</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[var(--color-success)]" /> Continuous learning</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Development Process from homepage */}
      <Process />

      {/* Technology Stack */}
      <TechTrust />

      {/* Company Timeline */}
      <Timeline />

      <FinalCTA />
    </div>
  );
};

export default About;
