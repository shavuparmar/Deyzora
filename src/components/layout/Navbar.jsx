import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, LayoutTemplate, ShoppingBag, Cpu, Globe, 
  Smartphone, Palette, Bot, Video, Search, Sparkles, ArrowRight, ShieldCheck, Phone
} from 'lucide-react';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { mainNavigation, megaMenuServices } from '../../data/navigation';
import mainlogo from '/deys.svg';

const iconMap = {
  LayoutTemplate,
  ShoppingBag,
  Cpu,
  Globe,
  Smartphone,
  Palette,
  Bot,
  Video,
  Search,
  Sparkles,
  ShieldCheck
};

export default function Navbar() {
  const { scrollDirection, isAtTop } = useScrollDirection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-none transition-transform duration-300 ${
          scrollDirection === 'down' && !isAtTop && !mobileMenuOpen && !megaMenuOpen
            ? '-translate-y-full'
            : 'translate-y-0'
        }`}
      >
        <div className="max-w-7xl mx-auto pointer-events-auto">
          <div 
            className={`transition-all duration-300 rounded-full glass-capsule px-4 sm:px-6 ${
              isAtTop ? 'py-3' : 'py-2.5'
            }`}
          >
            <div className="flex items-center justify-between">
              
              {/* Brand Logo */}
              <Link 
                to="/" 
                className="flex items-center group shrink-0 py-0.5 focus:outline-none focus:ring-2 focus:ring-[#0070F3] rounded-lg"
                aria-label="Deyzora Infotech Home Page"
              >
                <img 
                  src={mainlogo} 
                  alt="Deyzora Infotech Logo" 
                  className="h-9 sm:h-10 md:h-11 w-auto max-w-[200px] sm:max-w-[260px] object-contain transition-transform group-hover:scale-105"
                  loading="eager"
                  decoding="async"
                />
              </Link>

              {/* Desktop Nav Items */}
              <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
                {mainNavigation.map((item) => {
                  if (item.name === 'Services') {
                    const isServicesActive = location.pathname.startsWith('/services');
                    return (
                      <div 
                        key={item.name}
                        className="relative"
                        onMouseEnter={() => setMegaMenuOpen(true)}
                        onMouseLeave={() => setMegaMenuOpen(false)}
                      >
                        <Link 
                          to="/services"
                          className={`px-4 py-2 text-sm font-medium rounded-full flex items-center gap-1.5 transition-all focus:outline-none focus:ring-2 focus:ring-[#0070F3] ${
                            isServicesActive || megaMenuOpen
                              ? 'text-white bg-white/10 font-semibold'
                              : 'text-white/70 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          Services
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180 text-[#0070F3]' : ''}`} />
                        </Link>

                        {/* Mega Menu Dropdown */}
                        <AnimatePresence>
                          {megaMenuOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 12, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 8, scale: 0.98 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[840px]"
                            >
                              <div className="bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/15 rounded-3xl p-6 shadow-[0_30px_70px_rgba(0,0,0,0.9)] grid grid-cols-3 gap-6 relative overflow-hidden">
                                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#0070F3]/15 rounded-full blur-[80px] pointer-events-none" />
                                
                                {Object.entries(megaMenuServices).map(([category, links]) => (
                                  <div key={category} className="relative z-10 flex flex-col gap-2">
                                    <h4 className="text-[11px] font-bold text-[#50E3C2] uppercase tracking-wider px-2 py-1 border-b border-white/10 mb-1">
                                      {category === 'Development' ? 'Web & Code' : category === 'AppsAndDashboards' ? 'Apps & Software' : 'SEO & Optimization'}
                                    </h4>
                                    <div className="flex flex-col gap-1">
                                      {links.map(link => {
                                        const IconComp = iconMap[link.icon] || LayoutTemplate;
                                        return (
                                          <Link 
                                            key={link.name} 
                                            to={link.path}
                                            className="p-2.5 rounded-xl hover:bg-white/5 transition-colors group/link flex items-start gap-3"
                                          >
                                            <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover/link:border-[#0070F3]/40 group-hover/link:bg-[#0070F3]/10 transition-colors shrink-0">
                                              <IconComp className="w-4 h-4 text-white/70 group-hover/link:text-[#0070F3] transition-colors" />
                                            </div>
                                            <div>
                                              <div className="text-xs font-semibold text-white group-hover/link:text-[#0070F3] transition-colors">
                                                {link.name}
                                              </div>
                                              <div className="text-[11px] text-white/50 leading-tight">
                                                {link.desc}
                                              </div>
                                            </div>
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </div>
                                ))}

                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`px-4 py-2 text-sm font-medium rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#0070F3] ${
                        isActive
                          ? 'text-white bg-white/10 font-semibold shadow-inner'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <Link
                  to="/contact"
                  className="hidden sm:inline-flex items-center gap-2 bg-[#0070F3] hover:bg-[#005bb5] text-white font-bold text-xs px-5 h-9 rounded-full shadow-[0_0_20px_rgba(0,112,243,0.3)] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span>Start Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0070F3]"
                  aria-label="Toggle Mobile Menu"
                  aria-expanded={mobileMenuOpen}
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl pt-24 pb-8 px-6 flex flex-col overflow-y-auto"
          >
            <div className="flex-1 flex flex-col gap-6 max-w-md mx-auto w-full">
              <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
                {mainNavigation.map((item) => {
                  if (item.name === 'Services') {
                    return (
                      <div key={item.name} className="flex flex-col">
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="flex items-center justify-between py-3 px-4 rounded-2xl text-lg font-semibold text-white hover:bg-white/5 transition-colors text-left"
                        >
                          <span>Services</span>
                          <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180 text-[#0070F3]' : ''}`} />
                        </button>

                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-4 flex flex-col gap-2 border-l border-white/10 my-2"
                            >
                              <Link to="/services" className="py-2 text-sm font-semibold text-[#0070F3]">
                                View All Services &rarr;
                              </Link>
                              {Object.values(megaMenuServices).flat().map((link) => (
                                <Link
                                  key={link.name}
                                  to={link.path}
                                  className="py-2 text-sm text-white/70 hover:text-white transition-colors"
                                >
                                  {link.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`py-3 px-4 rounded-2xl text-lg font-semibold transition-colors ${
                        isActive ? 'text-white bg-white/10 font-bold' : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                <Link
                  to="/contact"
                  className="w-full bg-[#0070F3] text-white py-3.5 rounded-full font-bold text-center text-sm shadow-[0_0_20px_rgba(0,112,243,0.4)]"
                >
                  Start Your Project
                </Link>
                <a 
                  href="https://wa.me/919879001603"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-center text-xs text-white/60 hover:text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  Call or WhatsApp: <span className="text-white font-semibold">+91 9879001603</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
