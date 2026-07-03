import { Link } from'react-router-dom';
import { motion } from'framer-motion';
import { Mail, Phone, Clock, Instagram, Linkedin, Send, Github, MessageSquare, MonitorPlay } from'lucide-react';
import { SOCIAL_LINKS } from'../../data/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { name:'Instagram', icon: <Instagram className="w-5 h-5" />, url: SOCIAL_LINKS.instagram, hoverColor:'hover:text-[var(--color-accent)]' },
    { name:'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: SOCIAL_LINKS.linkedin, hoverColor:'hover:text-[var(--color-accent)]' },
    { name:'Telegram', icon: <Send className="w-5 h-5" />, url: SOCIAL_LINKS.telegram, hoverColor:'hover:text-[var(--color-accent)]' },
    { name:'Discord', icon: <MonitorPlay className="w-5 h-5" />, url: SOCIAL_LINKS.discord, hoverColor:'hover:text-[var(--color-accent)]' },
    { name:'GitHub', icon: <Github className="w-5 h-5" />, url: SOCIAL_LINKS.github, hoverColor:'hover:text-[var(--color-accent)]' },
    { name:'Email', icon: <Mail className="w-5 h-5" />, url: SOCIAL_LINKS.email, hoverColor:'hover:text-[var(--color-accent)]' },
    { name:'WhatsApp', icon: <MessageSquare className="w-5 h-5" />, url: SOCIAL_LINKS.whatsapp, hoverColor:'hover:text-[var(--color-accent)]' }
  ];

  return (
    <footer className="relative bg-[var(--color-surface)] pt-24 pb-8 overflow-hidden border-t border-[var(--color-border)]">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-[var(--color-accent)]/5 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* 5-Column Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Column 1 - Company */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 group inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded p-1">
              <div className="w-8 h-8 rounded-full bg-[var(--color-foreground)] flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                <span className="text-[var(--color-background)] font-black text-xl leading-none pt-0.5">D</span>
              </div>
              <span className="text-xl font-bold text-[var(--color-foreground)] tracking-tight">Deyzora Infotech</span>
            </Link>
            <p className="text-[var(--color-muted-foreground)] text-sm mb-6 leading-relaxed">
              Build Modern Digital Experiences.
            </p>
            <ul className="space-y-4">
              <li>
                <a href={SOCIAL_LINKS.email} className="flex items-center gap-3 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded">
                  <Mail className="w-4 h-4 shrink-0" />
                  deyzorainfotech@gmail.com
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.whatsapp} className="flex items-center gap-3 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-success)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded">
                  <Phone className="w-4 h-4 shrink-0" />
                  +91 9879001603
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-[var(--color-muted-foreground)]">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Monday – Saturday<br/>10:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="text-[var(--color-foreground)] font-bold mb-6 tracking-wide">Services</h4>
            <ul className="space-y-3">
              {[
                { n:'Website Design', p:'/services/web-design' },
                { n:'Website Development', p:'/services/web-development' },
                { n:'React.js Development', p:'/services/react-development' },
                { n:'Node.js Backend', p:'/services/nodejs-development' },
                { n:'Database Engineering', p:'/services/database' },
                { n:'WordPress Development', p:'/services/wordpress-development' },
                { n:'Poster & Graphic Design', p:'/services/poster-design' },
                { n:'UI/UX Design', p:'/services/ui-ux-design' },
              ].map(link => (
                <li key={link.n}>
                  <Link to={link.p} className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded px-1 -mx-1">
                    {link.n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h4 className="text-[var(--color-foreground)] font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-3">
              {[
                { n:'Home', p:'/' },
                { n:'About Us', p:'/about' },
                { n:'Services', p:'/services/web-development' },
                { n:'Portfolio', p:'/portfolio' },
                { n:'Pricing', p:'/pricing' },
                { n:'Special Offers', p:'/special-offers' },
                { n:'Let\'s Talk', p:'/lets-talk' },
                { n:'Contact', p:'/contact' },
              ].map(link => (
                <li key={link.n}>
                  <Link to={link.p} className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded px-1 -mx-1">
                    {link.n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Resources */}
          <div>
            <h4 className="text-[var(--color-foreground)] font-bold mb-6 tracking-wide">Resources</h4>
            <ul className="space-y-3">
              {[
                { n:'Our Process', p:'/about' },
                { n:'Technologies', p:'/about' },
                { n:'Project Inquiry', p:'/lets-talk' },
                { n:'Client Reviews', p:'/' },
                { n:'Sitemap', p:'/sitemap' },
              ].map(link => (
                <li key={link.n}>
                  <Link to={link.p} className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded px-1 -mx-1">
                    {link.n}
                  </Link>
                </li>
              ))}
              <li><span className="text-sm text-[var(--color-muted-foreground)]/50 cursor-not-allowed">Blog (Coming Soon)</span></li>
              <li><span className="text-sm text-[var(--color-muted-foreground)]/50 cursor-not-allowed">Support (Coming Soon)</span></li>
              <li><span className="text-sm text-[var(--color-muted-foreground)]/50 cursor-not-allowed">Careers (Coming Soon)</span></li>
            </ul>
          </div>

          {/* Column 5 - Connect */}
          <div>
            <h4 className="text-[var(--color-foreground)] font-bold mb-6 tracking-wide">Connect</h4>
            <div className="flex flex-wrap gap-4">
              {socialIcons.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-[var(--color-background)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted-foreground)] transition-all duration-300 hover:bg-[var(--color-surface-hover)] ${social.hoverColor} hover:scale-110 group relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]`}
                  aria-label={social.name}
                >
                  {social.icon}
                  
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-[var(--color-surface)] backdrop-blur-md text-[var(--color-foreground)] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-[var(--color-border)]">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
        </div>

        {/* Footer Bottom - Legal Links */}
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[var(--color-muted-foreground)]">
            &copy; {currentYear} Deyzora Infotech. All Rights Reserved.
          </p>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-4 gap-y-2">
            {[
              { n:'Privacy Policy', p:'/privacy-policy' },
              { n:'Terms & Conditions', p:'/terms-and-conditions' },
              { n:'Refund Policy', p:'/refund-policy' },
              { n:'Cancellation Policy', p:'/cancellation-policy' },
              { n:'Shipping & Delivery Policy', p:'/shipping-policy' },
              { n:'Cookie Policy', p:'/cookie-policy' },
              { n:'Disclaimer', p:'/disclaimer' },
              { n:'Accessibility Statement', p:'/accessibility' },
              { n:'Security Policy', p:'/security-policy' },
            ].map(link => (
              <Link 
                key={link.n} 
                to={link.p}
                className="text-xs text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded px-1 -mx-1"
              >
                {link.n}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
