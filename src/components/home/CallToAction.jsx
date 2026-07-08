import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export default function CallToAction() {
  return (
    <section className="py-32 bg-[var(--color-bg-dark)] border-b border-[var(--color-border-subtle)] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--color-primary)]/20 blur-[100px] rounded-full pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold font-poppins text-white mb-8 tracking-tighter leading-tight">
            Ready to build <br className="hidden md:block"/>your next <span className="text-[var(--color-primary)]">big idea?</span>
          </h2>
          <p className="text-xl md:text-2xl text-[var(--color-text-gray)] mb-12 leading-relaxed max-w-2xl">
            Partner with Deyzora Infotech to engineer premium, high-performance digital products that convert. Let's discuss your vision.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Button to="/lets-talk" variant="primary" size="lg" className="group text-lg px-8 py-5">
              Start a Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="flex items-center gap-4 text-sm font-medium text-[var(--color-text-gray)]">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Accepting new clients
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
