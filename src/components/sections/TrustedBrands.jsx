import { motion } from 'framer-motion';

const brands = [
  "Google", "Microsoft", "AWS", "Adobe", "Shopify", "Stripe", "Vercel", "Linear", "Notion", "Figma"
];

export default function TrustedBrands() {
  return (
    <section className="py-12 border-b border-[var(--color-border-subtle)] bg-black overflow-hidden relative">
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      <div className="text-center mb-8">
        <span className="text-xs font-bold text-white/40 uppercase tracking-[0.2em]">Trusted by Forward-Thinking Teams</span>
      </div>

      <div className="flex whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity duration-500">
        <motion.div 
          animate={{ x: [0, -1035] }} // Adjust based on width of elements
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex gap-16 lg:gap-24 items-center pl-16 lg:pl-24"
        >
          {/* We duplicate the array to create an infinite scroll illusion */}
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <div key={i} className="text-2xl md:text-3xl font-display font-bold text-white tracking-tighter">
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
