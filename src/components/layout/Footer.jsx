import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, 
  MessageSquare, ArrowUp, Loader2, AlertCircle 
} from 'lucide-react';
import { 
  FaLinkedinIn, FaInstagram, FaFacebookF, FaGithub, FaBehance, FaDribbble 
} from 'react-icons/fa';
import { footerNavigation } from '../../data/navigation';
import { companyInfo } from '../../data/company';
import logoSvg from '/deys.svg';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim() || !validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 5000);
    }, 800);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-10 relative text-white/70 text-sm" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Column 1: Logo & Newsletter */}
          <div className="lg:col-span-2 flex flex-col gap-6 pr-0 lg:pr-6">
            <Link to="/" className="flex items-center group w-fit" aria-label="Deyzora Infotech Home">
              <img 
                src={logoSvg} 
                alt="Deyzora Infotech Logo" 
                className="h-24 sm:h-12 w-40 object-contain"
                loading="lazy"
              />
            </Link>

            <p className="text-white/70 leading-relaxed text-xs sm:text-sm max-w-md">
              {companyInfo.description}
            </p>

            {/* Newsletter */}
            <div className="flex flex-col gap-3 max-w-md pt-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider">Subscribe to Engineering Updates</span>

              {status === 'success' ? (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>Thank you! You are subscribed to our tech newsletter.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                  <div className="relative flex items-center">
                    <Mail className="w-4 h-4 text-white/40 absolute left-3.5 pointer-events-none" />
                    <input 
                      type="email"
                      placeholder="Enter your work email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      className="w-full h-11 pl-10 pr-12 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-xs focus:outline-none focus:border-[#0070F3] transition-all"
                      aria-label="Work email for newsletter"
                    />
                    <button 
                      type="submit"
                      disabled={status === 'loading'}
                      className="absolute right-1 w-9 h-9 rounded-lg bg-[#0070F3] hover:bg-[#005bb5] text-white flex items-center justify-center transition-colors"
                      aria-label="Subscribe"
                    >
                      {status === 'loading' ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  {status === 'error' && (
                    <div className="text-[11px] text-rose-400 flex items-center gap-1.5 pl-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}
                </form>
              )}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-2">
              <a 
                href={companyInfo.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#0070F3] transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a 
                href={companyInfo.socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#0070F3] transition-all"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a 
                href={companyInfo.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#0070F3] transition-all"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-l-2 border-[#0070F3] pl-2.5 py-0.5">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-white transition-colors text-white/70">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-l-2 border-[#50E3C2] pl-2.5 py-0.5">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-white transition-colors text-white/70">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-l-2 border-emerald-400 pl-2.5 py-0.5">
              Contact Us
            </h4>
            
            <div className="flex flex-col gap-3 text-xs">
              <a 
                href={`mailto:${companyInfo.email}`} 
                className="flex items-center gap-2.5 text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#50E3C2]" />
                <span className="truncate">{companyInfo.email}</span>
              </a>

              <a 
                href={`tel:${companyInfo.phone}`} 
                className="flex items-center gap-2.5 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#50E3C2]" />
                <span>{companyInfo.phone}</span>
              </a>

              <div className="flex items-start gap-2.5 text-white/70">
                <MapPin className="w-4 h-4 text-[#50E3C2] shrink-0 mt-0.5" />
                <span className="leading-snug">{companyInfo.address}</span>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href={`https://wa.me/${companyInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-bold hover:bg-white/10 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Support
              </a>
            </div>

          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          
          <div>
            &copy; {new Date().getFullYear()} Deyzora Infotech. All rights reserved.
          </div>

          <div className="flex items-center gap-5 flex-wrap justify-center">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/refund-policy" className="hover:text-white transition-colors">Refunds</Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookies</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-all ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#0070F3]" />
              <span>Top</span>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
