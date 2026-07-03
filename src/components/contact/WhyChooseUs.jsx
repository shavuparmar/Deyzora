import { motion } from'framer-motion';
import { Sparkles, Zap, Smartphone, Search, CreditCard, Layers, TerminalSquare, ShieldCheck } from'lucide-react';

const reasons = [
  { title:"Modern UI", icon: Sparkles, desc:"Framer & Figma driven designs." },
  { title:"Fast Development", icon: Zap, desc:"Rapid deployment cycles." },
  { title:"Responsive Websites", icon: Smartphone, desc:"Flawless on every device." },
  { title:"SEO Optimized", icon: Search, desc:"Rank higher on Google." },
  { title:"Affordable Pricing", icon: CreditCard, desc:"Transparent, premium value." },
  { title:"Latest Technologies", icon: Layers, desc:"React, Vite, Node.js." },
  { title:"Clean Code", icon: TerminalSquare, desc:"Maintainable & scalable." },
  { title:"Long-Term Support", icon: ShieldCheck, desc:"We build partnerships." }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Work With Deyzora</h2>
          <p className="text-gray-400 text-lg">We don't just write code. We build digital assets that generate revenue.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-1 transition-transform border border-white/5 hover:border-primary/30"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
