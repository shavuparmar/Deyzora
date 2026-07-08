import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Services from '../components/home/Services';
import Process from '../components/home/Process';
import ContactCTA from '../components/home/ContactCTA';
import Technologies from '../components/home/Technologies';
import { Container } from '../components/ui/Container';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services | Deyzora Infotech</title>
        <meta name="description" content="Explore our premium digital services including Website Development, WordPress solutions, Graphic Design, and Logo Design." />
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
              Premium digital <br className="hidden md:block" /> solutions.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-[var(--color-text-gray)] leading-relaxed max-w-2xl mx-auto"
            >
              We provide end-to-end digital services designed to scale your business, enhance your brand identity, and dominate your market.
            </motion.p>
          </Container>
        </section>

        <Services />
        <Process />
        <Technologies />
        <ContactCTA />
      </main>
    </>
  );
}
