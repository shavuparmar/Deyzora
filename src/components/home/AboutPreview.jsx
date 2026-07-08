import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export default function AboutPreview() {
  return (
    <section className="py-24 bg-[var(--color-bg-dark)] border-b border-[var(--color-border-subtle)]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6 tracking-tight">
              We engineer digital excellence.
            </h2>
            <p className="text-lg text-[var(--color-text-gray)] mb-6 leading-relaxed">
              Based in India, Deyzora Infotech is a premium digital agency operating at the intersection of aesthetic design and robust software engineering.
            </p>
            <p className="text-lg text-[var(--color-text-gray)] mb-10 leading-relaxed">
              We partner with forward-thinking startups and local businesses to build scalable web applications, compelling brand identities, and high-converting platforms that command authority in the digital space.
            </p>
            <Button to="/about" variant="outline" className="group">
              Read Our Story
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-[var(--color-primary)] blur-3xl opacity-10 rounded-full" />
            <div className="relative grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team collaboration" className="rounded-2xl object-cover h-64 w-full" />
               <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" alt="Coding workspace" className="rounded-2xl object-cover h-64 w-full mt-12" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
