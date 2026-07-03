import { motion } from'framer-motion';
import { SOCIAL_LINKS } from'../../data/constants';
import { Instagram, Linkedin, Send, MessageSquare, Github, Mail, Phone } from'lucide-react';

const SocialCommunity = () => {
  const socials = [
    { name:'Instagram', icon: <Instagram className="w-8 h-8" />, url: SOCIAL_LINKS.instagram, color:'hover:text-pink-500 hover:border-pink-500/50', desc:'Behind the scenes & design inspiration.' },
    { name:'LinkedIn', icon: <Linkedin className="w-8 h-8" />, url: SOCIAL_LINKS.linkedin, color:'hover:text-blue-500 hover:border-blue-500/50', desc:'Professional updates and case studies.' },
    { name:'Telegram', icon: <Send className="w-8 h-8" />, url: SOCIAL_LINKS.telegram, color:'hover:text-blue-400 hover:border-blue-400/50', desc:'Direct announcements and quick chat.' },
    { name:'Discord', icon: <MessageSquare className="w-8 h-8" />, url: SOCIAL_LINKS.discord, color:'hover:text-indigo-400 hover:border-indigo-400/50', desc:'Join our developer community.' },
    { name:'GitHub', icon: <Github className="w-8 h-8" />, url: SOCIAL_LINKS.github, color:'hover:text-white hover:border-white/50', desc:'Open source contributions and repos.' },
    { name:'Email', icon: <Mail className="w-8 h-8" />, url: SOCIAL_LINKS.email, color:'hover:text-red-400 hover:border-red-400/50', desc:'Direct business inquiries.' },
    { name:'WhatsApp', icon: <Phone className="w-8 h-8" />, url: SOCIAL_LINKS.whatsapp, color:'hover:text-green-500 hover:border-green-500/50', desc:'Instant support and quick questions.' },
  ];

  return (
    <section className="py-24 relative bg-black/50 border-t border-white/5" id="community">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Join Our <span className="text-[var(--color-accent)] font-semibold">Community</span>
          </motion.h2>
          <p className="text-gray-400 text-lg">
            Connect with us across platforms. We're always active and ready to collaborate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card flex flex-col items-center text-center group transition-colors duration-300 ${social.color}`}
            >
              <div className="mb-4 text-gray-400 transition-colors duration-300 group-hover:text-inherit">
                {social.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{social.name}</h3>
              <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">{social.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialCommunity;
