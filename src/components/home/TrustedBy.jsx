import { motion } from 'framer-motion';
import { Container } from '../ui/Container';

const clients = [
  'Keshav Krupa Dairy',
  'Bharkadevi Ice Cream',
  'Suhani Frankie',
  'TechFlow Solutions',
  'Apex Industries',
  'Global Ventures',
];

export default function TrustedBy() {
  return (
    <section className="py-12 border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-dark)] overflow-hidden flex flex-col justify-center">
      <Container className="mb-6">
        <p className="text-center text-sm font-medium text-[var(--color-text-gray)] uppercase tracking-widest">
          Trusted by innovative companies
        </p>
      </Container>
      
      <div className="relative w-full overflow-hidden flex">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-[var(--color-bg-dark)] opacity-90 z-10 pointer-events-none" style={{ maskImage: 'linear-gradient(to right, black, transparent)' }}></div>
        
        {/* Marquee Container */}
        <motion.div 
          className="flex whitespace-nowrap items-center gap-16 md:gap-24 px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 20 
          }}
        >
          {/* Double the array for seamless loop */}
          {[...clients, ...clients].map((client, i) => (
            <div 
              key={i} 
              className="text-xl md:text-2xl font-bold font-poppins text-white/30 hover:text-white transition-colors cursor-default"
            >
              {client}
            </div>
          ))}
        </motion.div>

        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-[var(--color-bg-dark)] opacity-90 z-10 pointer-events-none" style={{ maskImage: 'linear-gradient(to left, black, transparent)' }}></div>
      </div>
    </section>
  );
}
