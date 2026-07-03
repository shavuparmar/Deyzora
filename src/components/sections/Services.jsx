import { motion } from'framer-motion';
import { SERVICES } from'../../data/constants';
import { Monitor, Code, LayoutTemplate, Server, Database, ShoppingCart, Image as ImageIcon } from'lucide-react';

const iconMap = {"web-design": <LayoutTemplate className="w-8 h-8 text-cyan-400" />,"web-dev": <Monitor className="w-8 h-8 text-blue-500" />,"react-dev": <Code className="w-8 h-8 text-blue-400" />,"backend-dev": <Server className="w-8 h-8 text-green-500" />,"database": <Database className="w-8 h-8 text-emerald-600" />,"wordpress": <ShoppingCart className="w-8 h-8 text-indigo-400" />,"graphics": <ImageIcon className="w-8 h-8 text-pink-400" />
};

const Services = () => {
  return (
    <section className="py-24 relative" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Our Core <span className="text-[var(--color-accent)] font-semibold">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl"
          >
            We provide high-quality digital solutions tailored to help your business grow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card group flex flex-col items-start hover:border-white/30"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-white/10">
                {iconMap[service.id]}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover: group-hover:from-white transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="mt-auto pt-6 border-t border-white/10 w-full">
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
