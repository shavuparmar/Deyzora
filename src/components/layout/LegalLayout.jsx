import { Container } from '../ui/Container';
import { motion } from 'framer-motion';

export default function LegalLayout({ title, lastUpdated, children }) {
  return (
    <main className="bg-[var(--color-bg-dark)] min-h-screen pt-40 pb-32">
      <Container>
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 border-b border-[var(--color-border-subtle)] pb-12"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
              {title}
            </h1>
            {lastUpdated && (
              <p className="text-[var(--color-text-gray)] font-medium">
                Last updated: {lastUpdated}
              </p>
            )}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-display prose-headings:font-bold prose-headings:text-white prose-headings:tracking-tight
              prose-p:text-[var(--color-text-gray)] prose-p:leading-relaxed
              prose-a:text-[var(--color-accent)] prose-a:no-underline hover:prose-a:underline
              prose-li:text-[var(--color-text-gray)] prose-li:marker:text-[var(--color-text-gray)]
              prose-strong:text-white prose-strong:font-semibold"
          >
            {children}
          </motion.div>
        </div>
      </Container>
    </main>
  );
}
