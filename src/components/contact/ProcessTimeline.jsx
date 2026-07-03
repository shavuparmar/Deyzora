import { motion } from'framer-motion';
import { Search, PenTool, Code, TestTube, Rocket, HeartHandshake, Lightbulb } from'lucide-react';

const steps = [
  { id: 1, title:'Discovery', icon: Search, desc:'We understand your goals, target audience, and business logic.' },
  { id: 2, title:'Planning', icon: Lightbulb, desc:'Creating sitemaps, wireframes, and a comprehensive project roadmap.' },
  { id: 3, title:'Design', icon: PenTool, desc:'Crafting premium, high-converting UI/UX in Figma.' },
  { id: 4, title:'Development', icon: Code, desc:'Building scalable architecture with React and Node.js.' },
  { id: 5, title:'Testing', icon: TestTube, desc:'Rigorous QA, cross-browser compatibility, and performance optimization.' },
  { id: 6, title:'Deployment', icon: Rocket, desc:'Launching your digital asset to production servers.' },
  { id: 7, title:'Support', icon: HeartHandshake, desc:'Ongoing maintenance, SEO updates, and feature additions.' }
];

const ProcessTimeline = () => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Project Process</h2>
          <p className="text-gray-400 text-lg">A transparent, step-by-step framework to ensure project success.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 from-primary/50 -translate-x-1/2 hidden md:block" />
          
          {/* Mobile Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 from-primary/50 -translate-x-1/2 md:hidden" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin:"-100px" }}
                  transition={{ duration: 0.6 }}
                  className="relative flex items-center md:justify-between flex-col md:flex-row gap-8 md:gap-0"
                >
                  {/* Left Side (Desktop) */}
                  <div className={`md:w-5/12 ${isEven ?'md:text-right' :'md:order-last md:text-left'} text-left w-full pl-16 md:pl-0`}>
                    <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-8 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-16 h-16 rounded-full bg-black border-4 border-[#050505] flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
