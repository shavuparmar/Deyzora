import { motion } from'framer-motion';
import { Mail, Phone, MessageSquare, Clock, Zap } from'lucide-react';
import { SOCIAL_LINKS } from'../../data/constants';

const quickLinks = [
  {
    title:"Email Us",
    value:"deyzorainfotech@gmail.com",
    icon: Mail,
    link: SOCIAL_LINKS.email,
    color:"",
    iconColor:"text-blue-400"
  },
  {
    title:"Call Us",
    value:"+91 9879001603",
    icon: Phone,
    link:"tel:+919879001603",
    color:"from-primary/20 to-primary/0",
    iconColor:"text-primary"
  },
  {
    title:"WhatsApp Chat",
    value:"Quick Response",
    icon: MessageSquare,
    link: SOCIAL_LINKS.whatsapp,
    color:"",
    iconColor:"text-green-400"
  },
  {
    title:"Business Hours",
    value:"Mon-Sat, 10 AM-7 PM",
    icon: Clock,
    link: null,
    color:"",
    iconColor:"text-purple-400"
  }
];

const QuickCards = () => {
  return (
    <section className="relative -mt-12 z-20 container mx-auto px-6 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {quickLinks.map((item, i) => {
          const Icon = item.icon;
          const CardContent = () => (
            <>
              <div className={`absolute top-0 right-0 w-32 h-32  ${item.color} rounded-bl-full opacity-50 pointer-events-none`} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <h3 className="text-gray-400 text-sm font-semibold tracking-wider uppercase mb-1">{item.title}</h3>
                <p className="text-white font-bold text-lg">{item.value}</p>
                {item.title ==='WhatsApp Chat' && (
                  <div className="mt-auto pt-4 flex items-center gap-2 text-xs text-green-400 font-medium">
                    <Zap className="w-4 h-4" /> Usually replies instantly
                  </div>
                )}
              </div>
            </>
          );

          const wrapperClass ="glass-card p-6 rounded-2xl relative overflow-hidden group hover:border-white/30 transition-all duration-300 h-[180px] shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:-translate-y-2 cursor-pointer flex flex-col";

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {item.link ? (
                <a href={item.link} target={item.title ==='Email Us' || item.title ==='Call Us' ?'_self' :'_blank'} rel="noopener noreferrer" className={wrapperClass}>
                  <CardContent />
                </a>
              ) : (
                <div className={wrapperClass}>
                  <CardContent />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default QuickCards;
