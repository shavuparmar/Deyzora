import { useEffect } from'react';
import { motion } from'framer-motion';
import { CheckCircle2, ArrowRight } from'lucide-react';
import { Link } from'react-router-dom';
import SEO from'../components/SEO';
import { Button } from'../components/ui/Button';

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-[var(--color-background)] min-h-screen flex items-center justify-center">
      <SEO title="Thank You | Deyzora Infotech" description="Your inquiry has been received." />
      
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type:'spring' }}
          className="flex justify-center mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-[var(--color-accent)]/30 blur-2xl rounded-full" />
            <CheckCircle2 className="w-12 h-12 text-[var(--color-accent)] relative z-10" />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-[var(--color-foreground)]"
        >
          Message <span className="text-[var(--color-accent)]">Received</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-[var(--color-muted-foreground)] mb-12 leading-relaxed"
        >
          Thank you for reaching out to Deyzora Infotech. One of our project managers will review your requirements and get back to you within 24 hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-md inline-block">
            <Button variant="primary" className="mx-auto" icon={false}>
              Return to Homepage <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYou;
