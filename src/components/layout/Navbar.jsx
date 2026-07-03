import { useState, useEffect } from'react';
import { Link, useLocation } from'react-router-dom';
import { motion, AnimatePresence } from'framer-motion';
import { Menu, X, ChevronDown, ArrowRight, LayoutTemplate, Monitor, Code, Server, Database, ShoppingCart, Image as ImageIcon, Paintbrush } from'lucide-react';
import { Button } from'../ui/Button';
import { SERVICES } from'../../data/constants';

// Icon Map for Services
const iconMap = {
  "web-design": <LayoutTemplate className="w-6 h-6 text-[var(--color-accent)]" />,
  "web-development": <Monitor className="w-6 h-6 text-[var(--color-accent)]" />,
  "react-development": <Code className="w-6 h-6 text-[var(--color-accent)]" />,
  "nodejs-development": <Server className="w-6 h-6 text-[var(--color-accent)]" />,
  "database": <Database className="w-6 h-6 text-[var(--color-accent)]" />,
  "wordpress-development": <ShoppingCart className="w-6 h-6 text-[var(--color-accent)]" />,
  "poster-design": <ImageIcon className="w-6 h-6 text-[var(--color-accent)]" />,
  "ui-ux-design": <Paintbrush className="w-6 h-6 text-[var(--color-accent)]" />
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setMegaMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow ='hidden';
    } else {
      document.body.style.overflow ='auto';
    }
    return () => { document.body.style.overflow ='auto'; };
  }, [isOpen]);

  const navLinks = [
    { name:'Home', path:'/' },
    { name:'About', path:'/about' },
    { name:'Portfolio', path:'/portfolio' },
    { name:'Pricing', path:'/pricing' },
    { name:'Contact', path:'/contact' }
  ];

  return (
    <>
      <nav 
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out flex items-center justify-between
          ${scrolled 
            ?'top-4 w-[calc(100%-32px)] md:w-[calc(100%-48px)] max-w-[1280px] h-[64px] bg-[var(--color-surface)]/80 backdrop-blur-2xl border border-[var(--color-glass-border)] rounded-full px-6 md:px-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' 
            :'top-6 w-[calc(100%-32px)] md:w-[calc(100%-48px)] max-w-[1280px] h-[72px] bg-[var(--color-background)]/40 backdrop-blur-xl border border-[var(--color-border)] rounded-full px-6 md:px-8'
          }
        `}
      >
        {/* Logo */}
        <Link to="/" className="relative z-50 flex items-center gap-2 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-full p-1">
          <div className="w-8 h-8 rounded-full bg-[var(--color-foreground)] flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            <span className="text-[var(--color-background)] font-black text-xl leading-none pt-0.5">D</span>
          </div>
          <span className="text-lg md:text-xl font-bold text-[var(--color-foreground)] tracking-tight hidden sm:block">Deyzora</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.slice(0,2).map(link => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] ${
                location.pathname === link.path 
                  ? 'text-[var(--color-foreground)] bg-[var(--color-surface-hover)]' 
                  : 'text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface-hover)]'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Mega Menu Trigger */}
          <div 
            className="relative"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <button className="px-4 py-2 rounded-full flex items-center gap-1 text-sm font-medium text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface-hover)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]">
              Services <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${megaMenuOpen ?'rotate-180' :''}`} />
            </button>
            
            {/* Mega Menu Dropdown */}
            <AnimatePresence>
              {megaMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[800px]"
                >
                  <div className="bg-[var(--color-surface)]/95 backdrop-blur-3xl border border-[var(--color-border)] rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)]/10 blur-[80px] rounded-full pointer-events-none" />
                    <div className="grid grid-cols-2 gap-3 relative z-10">
                      {SERVICES.map((service) => (
                        <Link 
                          key={service.id}
                          to={`/services/${service.id}`}
                          className="group/item flex items-start gap-4 p-4 rounded-2xl hover:bg-[var(--color-surface-hover)] border border-transparent hover:border-[var(--color-border)] transition-all relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                        >
                          <div className="absolute inset-0 from-[var(--color-accent)]/0 via-[var(--color-accent)]/5 to-[var(--color-accent)]/0 translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none" />
                          <div className="w-10 h-10 rounded-xl bg-[var(--color-background)] border border-[var(--color-border)] flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform shadow-[0_0_10px_rgba(255,255,255,0.02)] group-hover/item:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                            {iconMap[service.id] || <Code className="w-5 h-5 text-[var(--color-muted-foreground)]" />}
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-[var(--color-foreground)] mb-1 group-hover/item:text-[var(--color-accent)] transition-colors flex items-center justify-between">
                              {service.title}
                              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[var(--color-accent)]" />
                            </h4>
                            <p className="text-xs text-[var(--color-muted-foreground)] line-clamp-2 leading-relaxed">{service.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(2).map(link => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] ${
                location.pathname === link.path 
                  ? 'text-[var(--color-foreground)] bg-[var(--color-surface-hover)]' 
                  : 'text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface-hover)]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex shrink-0">
          <Link to="/lets-talk" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-full block">
            <Button variant="primary" size="sm" className="!py-2.5">
              Let's Talk
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden relative z-50 w-10 h-10 rounded-full bg-[var(--color-surface-hover)] flex items-center justify-center text-[var(--color-foreground)] border border-[var(--color-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Full Screen Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y:"-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y:"-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[var(--color-background)]/95 backdrop-blur-3xl z-40 flex flex-col pt-32 px-6 pb-12 overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              <Link to="/" className={`text-3xl font-bold py-3 border-b border-[var(--color-border)] ${location.pathname === '/' ? 'text-[var(--color-accent)]' : 'text-[var(--color-foreground)] hover:text-[var(--color-accent)]'}`}>Home</Link>
              <Link to="/about" className={`text-3xl font-bold py-3 border-b border-[var(--color-border)] ${location.pathname === '/about' ? 'text-[var(--color-accent)]' : 'text-[var(--color-foreground)] hover:text-[var(--color-accent)]'}`}>About</Link>
              
              {/* Mobile Services Accordion */}
              <div className="border-b border-[var(--color-border)]">
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full text-left py-3 flex items-center justify-between text-3xl font-bold text-[var(--color-foreground)] hover:text-[var(--color-accent)]"
                >
                  Services
                  <ChevronDown className={`w-6 h-6 transition-transform ${mobileServicesOpen ?'rotate-180 text-[var(--color-accent)]' :''}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height:"auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 py-4 flex flex-col gap-4 border-l-2 border-[var(--color-border)] ml-2 mb-4">
                        {SERVICES.map(s => (
                          <Link key={s.id} to={`/services/${s.id}`} className="text-lg text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] flex items-center gap-3">
                            {iconMap[s.id] || <Code className="w-4 h-4" />}
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/portfolio" className={`text-3xl font-bold py-3 border-b border-[var(--color-border)] ${location.pathname === '/portfolio' ? 'text-[var(--color-accent)]' : 'text-[var(--color-foreground)] hover:text-[var(--color-accent)]'}`}>Portfolio</Link>
              <Link to="/pricing" className={`text-3xl font-bold py-3 border-b border-[var(--color-border)] ${location.pathname === '/pricing' ? 'text-[var(--color-accent)]' : 'text-[var(--color-foreground)] hover:text-[var(--color-accent)]'}`}>Pricing</Link>
              <Link to="/contact" className={`text-3xl font-bold py-3 border-b border-[var(--color-border)] ${location.pathname === '/contact' ? 'text-[var(--color-accent)]' : 'text-[var(--color-foreground)] hover:text-[var(--color-accent)]'}`}>Contact</Link>
            </div>
            
            <div className="mt-auto pt-12">
              <Link to="/lets-talk" className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-full">
                <Button variant="primary" className="w-full justify-center !py-4 text-lg">Start a Project</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
