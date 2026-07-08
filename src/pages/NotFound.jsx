import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Deyzora Infotech</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-[var(--color-bg-dark)]">
        <Container className="max-w-xl text-center flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[12rem] leading-none font-bold font-poppins text-white/5 tracking-tighter select-none mb-4"
          >
            404
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6 tracking-tight"
          >
            Page not found
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--color-text-gray)] mb-10 leading-relaxed"
          >
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
          >
            <Button to="/" variant="primary" size="lg">
              Return Home
            </Button>
          </motion.div>
        </Container>
      </main>
    </>
  );
}
