import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Deyzora Infotech</title>
      </Helmet>

      <main className="min-h-screen bg-[var(--color-bg-dark)] flex items-center justify-center relative overflow-hidden">
        {/* Deep Space Background Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] bg-[var(--color-accent)]/10 rounded-full blur-[150px]" />
        </div>

        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-[12rem] font-black font-display leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 select-none">
              404
            </h1>
            <div className="text-2xl font-display font-bold text-white mb-4 mt-[-2rem]">
              Signal Lost in Deep Space.
            </div>
            <p className="text-[var(--color-text-gray)] mb-10 max-w-md">
              The page you are looking for has been moved, deleted, or never existed in our architecture.
            </p>
            <Button to="/" variant="primary" size="lg">
              Return to Base
            </Button>
          </motion.div>
        </Container>
      </main>
    </>
  );
}
