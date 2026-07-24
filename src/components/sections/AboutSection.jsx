import { motion } from 'framer-motion';
import { Container } from '../ui/Container';

export default function AboutSection() {
  return (
    <section className="py-32 bg-black border-b border-[var(--color-border-subtle)] relative overflow-hidden">
      
      {/* Background Depth */}
      <div className="absolute left-[-20%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-sm font-bold text-[var(--color-accent)] uppercase tracking-[0.2em] mb-6">
              About Deyzora
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-8 tracking-tighter leading-[1.1]">
              We don't just build websites. <br/>
              <span className="text-[var(--color-text-gray)]">We engineer digital growth.</span>
            </h2>
            <div className="space-y-6 text-lg text-[var(--color-text-gray)] leading-relaxed">
              <p>
                Deyzora Infotech was founded with a singular vision: to eliminate the compromise between beautiful design and robust engineering. In a world of generic templates and bloated architectures, we build bespoke digital products that demand attention.
              </p>
              <p>
                We are a collective of product designers, senior engineers, and strategists. We treat every project as our own, ensuring flawless performance under scale, whether it's a corporate website or a complex SaaS application.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-10 left-10 right-10">
                <div className="glass-panel p-6 rounded-2xl border border-white/10 backdrop-blur-xl">
                  <div className="text-3xl font-display font-bold text-white mb-2">5+ Years</div>
                  <div className="text-white/70">Of engineering excellence and pushing boundaries.</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
