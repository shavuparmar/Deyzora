import { Mail, Phone, Clock, MapPin, Instagram, Linkedin, Send, Github, MonitorPlay } from'lucide-react';
import { SOCIAL_LINKS } from'../../data/constants';

const socialIcons = [
  { name:'Instagram', icon: <Instagram className="w-4 h-4" />, url: SOCIAL_LINKS.instagram, hoverColor:'hover:text-pink-500 hover:bg-pink-500/10 hover:border-pink-500/30' },
  { name:'LinkedIn', icon: <Linkedin className="w-4 h-4" />, url: SOCIAL_LINKS.linkedin, hoverColor:'hover:text-blue-500 hover:bg-blue-500/10 hover:border-blue-500/30' },
  { name:'Telegram', icon: <Send className="w-4 h-4" />, url: SOCIAL_LINKS.telegram, hoverColor:'hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/30' },
  { name:'Discord', icon: <MonitorPlay className="w-4 h-4" />, url: SOCIAL_LINKS.discord, hoverColor:'hover:text-indigo-500 hover:bg-indigo-500/10 hover:border-indigo-500/30' },
  { name:'GitHub', icon: <Github className="w-4 h-4" />, url: SOCIAL_LINKS.github, hoverColor:'hover:text-gray-300 hover:bg-white/10 hover:border-white/30' }
];

const services = ["Website Design","Website Development","React.js Application","Node.js Backend","MongoDB / PostgreSQL","WordPress","Poster Design","UI/UX Design"
];

const InfoPanel = () => {
  return (
    <div className="glass-card p-8 md:p-10 rounded-3xl sticky top-32 h-fit">
      <div className="flex items-center gap-3 mb-8 pb-8 border-b border-white/10">
        <div className="w-12 h-12 rounded-full from-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          <span className="text-black font-black text-2xl leading-none pt-0.5">D</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight">Deyzora Infotech</h3>
          <p className="text-sm text-primary">Software Agency</p>
        </div>
      </div>

      <div className="space-y-6 mb-8 pb-8 border-b border-white/10">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
            <Mail className="w-4 h-4 text-gray-300" />
          </div>
          <div>
            <p className="text-xs font-medium text-[var(--color-muted-foreground)] uppercase tracking-widest mb-1">Email</p>
            <a href={SOCIAL_LINKS.email} className="text-white hover:text-[var(--color-accent)] transition-colors font-medium break-all text-sm sm:text-base">deyzorainfotech@gmail.com</a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
            <Phone className="w-4 h-4 text-gray-300" />
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-1">Phone & WhatsApp</p>
            <a href={SOCIAL_LINKS.whatsapp} className="text-white hover:text-primary transition-colors font-medium">+91 9879001603</a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
            <Clock className="w-4 h-4 text-gray-300" />
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-1">Business Hours</p>
            <p className="text-white font-medium">Monday–Saturday<br/>10:00 AM – 7:00 PM (IST)</p>
            <p className="text-sm text-green-400 mt-1 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Response within 24 Hours
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8 pb-8 border-b border-white/10">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-4">Our Core Services</p>
        <div className="flex flex-wrap gap-2">
          {services.map(service => (
            <span key={service} className="px-3 py-1.5 text-xs text-gray-300 bg-white/5 border border-white/10 rounded-full">
              {service}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-4">Connect With Us</p>
        <div className="flex flex-wrap gap-3">
          {socialIcons.map((social) => (
            <a 
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.hoverColor}`}
              aria-label={social.name}
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
