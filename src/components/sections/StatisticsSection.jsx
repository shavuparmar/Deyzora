import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: 20, suffix: '+', label: 'Completed Projects' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 24, suffix: '/7', label: 'Enterprise Support' }
];

export default function StatisticsSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section className="py-24 bg-black border-y border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] pointer-events-none mix-blend-overlay" />
      
      <Container>
        <div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/5"
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-2 tracking-tighter flex items-center justify-center">
                {inView ? (
                  <CountUp 
                    start={0} 
                    end={stat.value} 
                    duration={2.5} 
                    useEasing={true}
                  />
                ) : "0"}
                <span className="text-[var(--color-accent)]">{stat.suffix}</span>
              </div>
              <div className="text-sm md:text-base font-semibold text-white/50 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
