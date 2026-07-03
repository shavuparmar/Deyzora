import { motion } from'framer-motion';
import { TECH_STACK } from'../../data/constants';

const TechnologyStack = () => {
  const categories = [...new Set(TECH_STACK.map(t => t.category))];

  return (
    <section className="py-24 relative overflow-hidden bg-black" id="tech">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Engineering <span className="text-[var(--color-accent)] font-semibold">Excellence</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            We leverage enterprise-grade technologies to build secure, scalable, and lightning-fast digital products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="glass-card flex flex-col"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-primary"></span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.filter(t => t.category === category).map((tech, i) => (
                  <span 
                    key={tech.name} 
                    className="px-4 py-2 text-sm font-medium rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-primary/50 transition-colors cursor-default"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
