import { ExternalLink } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export default function DemoWebsitesPreview() {
  return (
    <section className="section-padding bg-[var(--color-bg-dark)] border-b border-[var(--color-border-subtle)] overflow-hidden relative">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-primary)]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] text-xs font-bold uppercase tracking-widest text-[var(--color-text-gray)] mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Live Demos
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6 tracking-tight">
              Experience Our Premium Architectures.
            </h2>
            <p className="text-lg text-[var(--color-text-gray)] mb-8 leading-relaxed">
              Don't just take our word for it. Interact with our live demonstration hub to experience the speed, responsiveness, and aesthetic quality we deliver to every client.
            </p>
            <div className="flex gap-4">
              <Button href="https://deyzdemo.netlify.app" target="_blank" variant="primary">
                Launch Demo Hub <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <a href="https://deyzdemo.netlify.app" target="_blank" rel="noopener noreferrer" className="block relative group rounded-2xl overflow-hidden border border-[var(--color-border-subtle)] shadow-2xl shadow-black/50">
              <img 
                src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1200" 
                alt="Demo Hub Preview" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <span className="bg-white text-[var(--color-bg-dark)] px-6 py-3 rounded-xl font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Enter Hub <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
