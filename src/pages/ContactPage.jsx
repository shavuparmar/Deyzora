import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ContactFormSection from '../components/home/ContactFormSection';
import Location from '../components/home/Location';
import FAQ from '../components/home/FAQ';
import { Container } from '../components/ui/Container';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Deyzora Infotech</title>
        <meta name="description" content="Get in touch with Deyzora Infotech for premium digital solutions. We'd love to hear from you." />
      </Helmet>

      <main className="pt-24 bg-[var(--color-bg-dark)]">
        {/* Page Hero */}
        <section className="section-padding border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-surface-light)]">
          <Container className="text-center max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins text-white mb-6 tracking-tight"
            >
              Contact <span className="text-[var(--color-primary)]">Us.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-[var(--color-text-gray)] leading-relaxed max-w-2xl mx-auto"
            >
              Have a project in mind? We'd love to help you bring it to life. Reach out to our team today.
            </motion.p>
          </Container>
        </section>

        <ContactFormSection />
        <Location />
        <FAQ />
      </main>
    </>
  );
}
