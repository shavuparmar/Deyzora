import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

export default function ThankYou() {
  return (
    <>
      <Helmet>
        <title>Thank You | Deyzora Infotech</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-[var(--color-bg-dark)]">
        <Container className="max-w-xl text-center flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-20 h-20 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mb-8 border border-[var(--color-primary)]/20"
          >
            <CheckCircle2 className="w-10 h-10 text-[var(--color-primary)]" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6 tracking-tight"
          >
            Thank You!
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--color-text-gray)] mb-10 leading-relaxed"
          >
            Your message has been successfully sent. Our team will review your inquiry and get back to you within 24 hours.
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
          >
            <Button to="/" variant="primary" size="lg">
              Return to Homepage
            </Button>
          </motion.div>
        </Container>
      </main>
    </>
  );
}
