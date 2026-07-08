import { Mail } from 'lucide-react';
import { Container } from '../ui/Container';

export default function NewsletterSection() {
  return (
    <section className="py-24 bg-[var(--color-bg-dark)] border-b border-[var(--color-border-subtle)] relative overflow-hidden">
      <Container className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="w-16 h-16 rounded-2xl bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] flex items-center justify-center mx-auto mb-8 shadow-xl">
          <Mail className="w-8 h-8 text-[var(--color-primary)]" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold font-poppins text-white mb-6 tracking-tight">
          Subscribe to our insights.
        </h2>
        <p className="text-lg text-[var(--color-text-gray)] mb-10 leading-relaxed">
          Join our newsletter to receive the latest updates on modern web architecture, design trends, and exclusive agency news. No spam, ever.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] rounded-xl px-6 py-4 text-white placeholder-[var(--color-text-gray)] focus:outline-none focus:border-[var(--color-primary)] transition-colors shadow-lg"
            required
          />
          <button 
            type="submit" 
            className="px-8 py-4 bg-white text-[var(--color-bg-dark)] rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Subscribe
          </button>
        </form>
        
        <p className="text-xs text-[var(--color-text-gray)] mt-6">
          By subscribing, you agree to our <a href="/privacy-policy" className="underline hover:text-white">Privacy Policy</a>.
        </p>
      </Container>
    </section>
  );
}
