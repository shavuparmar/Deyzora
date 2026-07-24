import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { Settings } from 'lucide-react';

export default function Maintenance() {
  return (
    <>
      <Helmet>
        <title>Maintenance | Deyzora Infotech</title>
      </Helmet>

      <main className="min-h-screen bg-[var(--color-bg-dark)] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
        
        <Container className="relative z-10 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-16 rounded-[3rem] border border-white/10 shadow-2xl"
          >
            <div className="w-20 h-20 mx-auto bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Settings className="w-10 h-10 text-[var(--color-accent)]" />
              </motion.div>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              System Upgrade in Progress
            </h1>
            <p className="text-[var(--color-text-gray)] text-lg leading-relaxed">
              We are currently optimizing our architecture. Our infrastructure will be back online shortly with enhanced capabilities.
            </p>
          </motion.div>
        </Container>
      </main>
    </>
  );
}
