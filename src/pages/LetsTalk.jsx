import { useEffect } from'react';
import { motion } from'framer-motion';
import SEO from'../components/SEO';
import { Section, Container } from'../components/ui/LayoutComponents';
import LetsTalkWizard from'../components/contact/LetsTalkWizard';
import InfoPanel from'../components/contact/InfoPanel';

const LetsTalk = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {"@context":"https://schema.org","@type":"ContactPage","name":"Let's Talk - Project Discovery","description":"Start your web design or development project with Deyzora Infotech.","url":"https://deyzora.com/lets-talk"
  };

  return (
    <div className="bg-[var(--color-background)] min-h-screen pt-32 pb-24">
      <SEO
        title="Let's Talk | Start a Project | Deyzora Infotech"
        description="Fill out our project discovery form to get started. Tell us about your goals, features, and timeline."
        schema={structuredData}
      />

      <Section className="mb-16 text-center">
        <Container className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-[var(--color-accent)] text-sm font-bold tracking-widest uppercase mb-6"
          >
            Project Discovery
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-[var(--color-foreground)]"
          >
            Let's Build <span className="text-transparent bg-clip-text from-[var(--color-accent)]">Together</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[var(--color-muted-foreground)]"
          >
            Tell us exactly what you need. This helps us prepare a detailed proposal and accurate quote for your project.
          </motion.p>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left: Huge Wizard */}
            <div className="w-full lg:w-2/3">
              <LetsTalkWizard />
            </div>

            {/* Right: Info Panel (Sticky) */}
            <div className="w-full lg:w-1/3">
              <InfoPanel />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default LetsTalk;
