import { motion } from'framer-motion';
import { useEffect, useState } from'react';

const AnimatedCounter = ({ end, duration = 2, suffix ='' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      if (progress < duration * 1000) {
        setCount(Math.min(end, (progress / (duration * 1000)) * end));
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span className="text-5xl font-bold text-white mb-2 block">
      {Math.floor(count)}{suffix}
    </span>
  );
};

const Stats = () => {
  const stats = [
    { label:'Projects Completed', value: 150, suffix:'+' },
    { label:'Happy Clients', value: 98, suffix:'%' },
    { label:'Years Experience', value: 10, suffix:'+' },
    { label:'Awards Won', value: 25, suffix:'' },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 glass rounded-3xl border-white/5"
            >
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
