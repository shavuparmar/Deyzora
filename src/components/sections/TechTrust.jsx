import { motion } from'framer-motion';
import { Database, Server, Layout, FileCode2, Paintbrush, ShieldCheck } from'lucide-react';

const TechTrust = () => {
  const technologies = [
    { name:'React.js', category:'Frontend', icon: <Layout className="w-8 h-8 text-cyan-400" />, desc:'Component-driven UI.' },
    { name:'Tailwind CSS', category:'Frontend', icon: <Paintbrush className="w-8 h-8 text-cyan-300" />, desc:'Utility-first styling.' },
    { name:'JavaScript', category:'Frontend', icon: <FileCode2 className="w-8 h-8 text-yellow-400" />, desc:'Dynamic interactivity.' },
    { name:'HTML5 & CSS3', category:'Frontend', icon: <FileCode2 className="w-8 h-8 text-orange-500" />, desc:'Semantic web structure.' },
    { name:'Node.js', category:'Backend', icon: <Server className="w-8 h-8 text-green-500" />, desc:'Scalable runtime.' },
    { name:'Express.js', category:'Backend', icon: <Server className="w-8 h-8 text-gray-300" />, desc:'Robust API routing.' },
    { name:'MongoDB', category:'Database', icon: <Database className="w-8 h-8 text-green-600" />, desc:'NoSQL flexibility.' },
    { name:'PostgreSQL', category:'Database', icon: <Database className="w-8 h-8 text-blue-400" />, desc:'Relational power.' },
    { name:'WordPress', category:'CMS', icon: <ShieldCheck className="w-8 h-8 text-blue-300" />, desc:'Content management.' },
  ];

  return (
    <section className="py-24 relative bg-black border-y border-white/5" id="technology">
      <div className="absolute inset-0 from-primary/5 via-transparent to-black pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Technologies We <span className="text-[var(--color-accent)] font-semibold">Work With</span>
          </motion.h2>
          <p className="text-gray-400 text-lg">
            We use modern, battle-tested technologies to build scalable solutions.
          </p>
        </div>
        
        {/* Responsive Grid: Mobile: 1, Tablet: 2-3, Desktop: 4-5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card flex flex-col items-center text-center group hover:-translate-y-2 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl pointer-events-none" />
              
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">{tech.name}</h3>
              <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider mb-3 relative z-10">{tech.category}</span>
              <p className="text-sm text-gray-400 relative z-10">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechTrust;
