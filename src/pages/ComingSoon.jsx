import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

export default function ComingSoon() {
  return (
    <>
      <Helmet>
        <title>Coming Soon | Deyzora Infotech</title>
      </Helmet>

      <main className="min-h-screen bg-[var(--color-bg-dark)] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-white/5 rounded-full blur-[200px] pointer-events-none" />

        <Container className="relative z-10 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-[var(--color-accent)] font-bold uppercase tracking-[0.3em] text-sm mb-6">
              Launch Sequence Initiated
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tighter">
              Coming Soon.
            </h1>
            
            <p className="text-xl text-[var(--color-text-gray)] mb-10 leading-relaxed">
              We're architecting something extraordinary. Enter your email to get early access to our next-generation digital product platform.
            </p>

            <form className="flex flex-col sm:flex-row items-center gap-4 max-w-md mx-auto mb-8">
              <input 
                type="email" 
                required
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-[var(--color-accent)] transition-all"
              />
              <Button type="submit" variant="primary" className="w-full sm:w-auto h-[58px] px-8 shrink-0">
                Notify Me
              </Button>
            </form>

            <div className="flex gap-4 items-center justify-center mt-12">
              <Button to="/" variant="outline" size="sm">Back to Home</Button>
              <Button to="/contact" variant="outline" size="sm">Contact Us</Button>
            </div>
          </motion.div>
        </Container>
      </main>
    </>
  );
}
