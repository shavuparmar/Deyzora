import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { ArrowRight } from 'lucide-react';

const industries = [
  { name: 'Fintech', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800' },
  { name: 'Healthcare', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800' },
  { name: 'E-Commerce', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800' },
  { name: 'SaaS', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
];

export default function Industries() {
  return (
    <section className="py-32 bg-black border-y border-[var(--color-border-subtle)] relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6 tracking-tight">
              Engineering for <br/>
              <span className="text-[var(--color-accent-cyan)]">complex industries.</span>
            </h2>
            <p className="text-lg text-[var(--color-text-gray)]">
              Deep domain expertise across highly regulated and competitive sectors.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img 
                src={ind.image} 
                alt={ind.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold font-display text-white group-hover:text-[var(--color-accent-cyan)] transition-colors">{ind.name}</h3>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
