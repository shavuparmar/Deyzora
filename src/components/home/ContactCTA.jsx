import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export default function ContactCTA() {
  return (
    <section className="py-24 bg-[var(--color-bg-dark)] border-b border-[var(--color-border-subtle)]">
      <Container>
        <div className="bg-[var(--color-primary)] rounded-3xl p-10 md:p-16 lg:p-24 flex flex-col items-center text-center relative overflow-hidden">
          {/* Subtle graphic in background if needed, but keeping it minimal */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-white mb-6 tracking-tight">
              Ready to start your project?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              Let's collaborate to build something extraordinary. Get in touch with our team today for a free consultation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button to="/lets-talk" className="bg-white text-[var(--color-primary)] hover:bg-white/90 hover:text-[var(--color-primary)] px-8 py-4 text-base group shadow-lg">
                Get a Free Quote
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
