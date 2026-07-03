import { motion } from'framer-motion';

const Process = () => {
  const steps = [
    { num:'01', title:'Discovery', desc:'We start by deeply understanding your business, goals, and target audience.' },
    { num:'02', title:'Strategy & Design', desc:'Crafting the blueprint and creating pixel-perfect, conversion-optimized designs.' },
    { num:'03', title:'Development', desc:'Building your digital product using robust, scalable modern technologies.' },
    { num:'04', title:'Launch & Scale', desc:'Rigorous testing, successful deployment, and continuous optimization.' },
  ];

  return (
    <section className="py-24 relative bg-black/30 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our <span className="text-[var(--color-accent)] font-semibold">Process</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="w-16 h-16 rounded-full bg-black border-2 border-primary flex items-center justify-center text-xl font-bold text-white mx-auto mb-8 shadow-[0_0_20px_rgba(123,44,191,0.3)]">
                  {step.num}
                </div>
                <div className="text-center glass-card p-6 h-full">
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
