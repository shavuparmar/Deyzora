import { motion } from'framer-motion';

const Timeline = () => {
  const steps = [
    { year:"Phase 1", title:"Discovery", desc:"Deep dive into your business goals, target audience, and technical requirements." },
    { year:"Phase 2", title:"Architecture", desc:"Designing the database schema, selecting the stack, and mapping user flows." },
    { year:"Phase 3", title:"Development", desc:"Agile sprints delivering production-ready code with continuous integration." },
    { year:"Phase 4", title:"Launch", desc:"Rigorous QA, security auditing, and deployment to a scalable edge network." },
  ];

  return (
    <section className="py-24 relative bg-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            How We <span className="text-[var(--color-accent)] font-semibold">Ship</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px from-primary via-accent to-transparent md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin:"-100px" }}
                className={`relative flex flex-col md:flex-row items-start ${i % 2 === 0 ?'md:flex-row-reverse' :''} gap-8 md:gap-16`}
              >
                {/* Node */}
                <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-black border-2 border-primary rounded-full flex items-center justify-center text-primary text-sm font-bold shadow-[0_0_20px_rgba(123,44,191,0.5)] md:-translate-x-1/2 z-10">
                  {i + 1}
                </div>
                
                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${i % 2 === 0 ?'md:pl-16' :'md:pr-16 md:text-right'} pt-2`}>
                  <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-2 block">{step.year}</span>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
