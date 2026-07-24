import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { AlertOctagon } from 'lucide-react';

export default function ServerError() {
  return (
    <>
      <Helmet>
        <title>500 - Server Error | Deyzora Infotech</title>
      </Helmet>

      <main className="min-h-screen bg-[var(--color-bg-dark)] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent pointer-events-none" />

        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center max-w-2xl mx-auto glass-card p-12 rounded-[3rem] border border-red-500/20 shadow-[0_0_100px_rgba(220,38,38,0.1)]"
          >
            <AlertOctagon className="w-20 h-20 text-red-500 mb-8" />
            
            <h1 className="text-5xl font-display font-bold text-white mb-4 tracking-tighter">
              500 Internal Error
            </h1>
            
            <p className="text-lg text-[var(--color-text-gray)] mb-10 leading-relaxed">
              Our servers encountered an unexpected condition. Our engineering team has been notified and is currently investigating the anomaly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => window.location.reload()} variant="primary" size="lg">
                Retry Connection
              </Button>
              <Button to="/" variant="outline" size="lg">
                Return Home
              </Button>
            </div>
          </motion.div>
        </Container>
      </main>
    </>
  );
}
