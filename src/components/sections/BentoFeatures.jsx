import { motion } from'framer-motion';

const BentoFeatures = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Why Choose <span className="text-[var(--color-accent)] font-semibold">Deyzora</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            We deliver uncompromising quality and measurable results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:auto-rows-[250px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 glass-card relative overflow-hidden group flex flex-col justify-end min-h-[300px] md:min-h-0"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 p-4">
              <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors">Modern Architecture</h3>
              <p className="text-gray-400 max-w-md">We build using the latest frameworks ensuring your product is fast, secure, and future-proof.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 glass-card relative overflow-hidden group flex flex-col justify-center min-h-[250px] md:min-h-0"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 p-4">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors">Pixel-Perfect Design</h3>
              <p className="text-gray-400">Our UI/UX team crafts interfaces that are not only beautiful but intuitively functional.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card relative overflow-hidden group flex flex-col justify-center min-h-[250px] md:min-h-0 md:col-span-1"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors">SEO Optimized</h3>
              <p className="text-gray-400 text-sm">Rank higher out of the box with our built-in SEO strategies.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card relative overflow-hidden group flex flex-col justify-center min-h-[250px] md:min-h-0 md:col-span-1"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors">24/7 Support</h3>
              <p className="text-gray-400 text-sm">Dedicated maintenance and support after launch.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
