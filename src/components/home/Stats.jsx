import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Container } from '../ui/Container';

const stats = [
  { value: 50, label: 'Completed Projects', suffix: '+' },
  { value: 99, label: 'Client Satisfaction', suffix: '%' },
  { value: 24, label: 'Support Available', suffix: '/7' },
  { value: 5, label: 'Years Experience', suffix: '+' },
];

function Counter({ from = 0, to, duration = 2, suffix = '' }) {
  const nodeRef = useRef();
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let startTime;
      let animationFrame;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing out quart
        const easeOut = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOut * (to - from) + from));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        }
      };

      animationFrame = requestAnimationFrame(step);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, to, from, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-20 bg-[var(--color-bg-surface-light)] border-b border-[var(--color-border-subtle)]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[var(--color-border-subtle)]">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-bold font-poppins text-white mb-2">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-[var(--color-text-gray)] uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
