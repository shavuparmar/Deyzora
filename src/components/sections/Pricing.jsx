import { motion } from'framer-motion';
import { Check } from'lucide-react';
import { PRICING_PLANS } from'../../data/pricingData';
import Button from'../ui/Button';

const Pricing = () => {
  return (
    <section className="py-24 relative" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Transparent <span className="text-[var(--color-accent)] font-semibold">Pricing</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Affordable, high-quality development packages designed for businesses of all sizes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative glass-card flex flex-col ${
                plan.popular 
                  ?'border-primary/50 shadow-[0_0_40px_rgba(255,255,255,0.1)] scale-105 z-10' 
                  :'hover:border-white/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black text-xs font-bold rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ?'primary' :'outline'} 
                className="w-full justify-center"
                to={`/lets-talk?plan=${encodeURIComponent(plan.title)}&price=${encodeURIComponent(plan.price.replace('₹',''))}&timeline=${encodeURIComponent(plan.timeline)}`}
              >
                Choose Plan
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
