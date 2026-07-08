import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Pricing from '../components/home/Pricing';
import FAQ from '../components/home/FAQ';
import ContactCTA from '../components/home/ContactCTA';
import { Container } from '../components/ui/Container';

export default function PricingPage() {
  return (
    <>
      <Helmet>
        <title>Pricing | Deyzora Infotech</title>
        <meta name="description" content="Transparent and competitive pricing for website development, design, and digital services." />
      </Helmet>

      <main className="pt-24 bg-[var(--color-bg-dark)]">
        {/* Page Hero */}
        <section className="section-padding border-b border-[var(--color-border-subtle)]">
          <Container className="text-center max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins text-white mb-6 tracking-tight"
            >
              Plans & <span className="text-[var(--color-primary)]">Pricing.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-[var(--color-text-gray)] leading-relaxed max-w-2xl mx-auto"
            >
              Choose the right plan that fits your business needs. No hidden fees, no surprises.
            </motion.p>
          </Container>
        </section>

        <Pricing />
        <FAQ />
        <ContactCTA />
      </main>
    </>
  );
}
