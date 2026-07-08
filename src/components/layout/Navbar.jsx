import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    const newState = !mobileMenuOpen;
    setMobileMenuOpen(newState);
    document.body.style.overflow = newState ? 'hidden' : 'auto';
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'pt-2' : 'pt-6'
        }`}
      >
        <Container>
          <div
            className={`glass-nav rounded-full px-4 md:px-6 py-3 flex items-center justify-between transition-all duration-300`}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 z-50">
              <span className="text-xl font-bold font-poppins text-white tracking-tight">
                Deyzora<span className="text-[var(--color-primary)]">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {links.map((link) => {
                const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors hover:text-white"
                  >
                    <span className={`relative z-10 ${isActive ? 'text-white' : 'text-[var(--color-text-gray)]'}`}>
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 bg-white/10 rounded-full"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <div className="hidden lg:block">
                <Button to="/lets-talk" variant="primary" size="sm">
                  Get Free Quote
                </Button>
              </div>

              <button
                className="lg:hidden relative z-50 p-2 text-white bg-white/5 border border-[var(--color-border-subtle)] rounded-full hover:bg-white/10 transition-colors"
                onClick={toggleMobileMenu}
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[var(--color-bg-dark)] lg:hidden pt-32 px-6 pb-6 flex flex-col h-[100dvh] overflow-y-auto"
          >
            <nav className="flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-3xl font-poppins font-semibold transition-colors flex items-center justify-between ${
                        isActive ? 'text-white' : 'text-[var(--color-text-gray)] hover:text-white'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                  <div className="w-full h-px bg-[var(--color-border-subtle)] mt-6"></div>
                </motion.div>
              ))}
            </nav>
            <div className="mt-12 flex flex-col w-full">
              <Button to="/lets-talk" variant="primary" size="lg" className="w-full">
                Get Free Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
