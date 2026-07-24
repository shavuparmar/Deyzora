import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

export default function ThankYou() {
  return (
    <>
      <Helmet>
        <title>Thank You | Deyzora Infotech</title>
      </Helmet>

      <main className="min-h-screen bg-[var(--color-bg-dark)] flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-accent-cyan)]/10 rounded-full blur-[120px] pointer-events-none" />

        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 30 }}
            className="flex flex-col items-center"
          >
            <div className="w-24 h-24 rounded-full bg-[var(--color-accent-cyan)]/20 flex items-center justify-center mb-8 border border-[var(--color-accent-cyan)]/30">
              <CheckCircle2 className="w-12 h-12 text-[var(--color-accent-cyan)]" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">
              Transmission Received.
            </h1>
            <p className="text-xl text-[var(--color-text-gray)] mb-10 max-w-lg">
              Thank you for reaching out. A senior engineer from our team will review your requirements and contact you within 24 hours.
            </p>
            <Button to="/" variant="outline" size="lg">
              Return Home
            </Button>
          </motion.div>
        </Container>
      </main>
    </>
  );
}
