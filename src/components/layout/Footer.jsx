import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Linkedin, MessageCircle, Mail, Phone } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Demo Websites', path: '/demo-websites' },
    { name: 'Contact', path: '/contact' }
  ];

  const servicesLinks = [
    { name: 'Website Development', path: '/services/website-development' },
    { name: 'WordPress Development', path: '/services/wordpress-development' },
    { name: 'Graphic Design', path: '/services/graphic-design' },
    { name: 'Logo Design', path: '/services/logo-design' }
  ];
  
  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
    { name: 'Refund Policy', path: '/refund-policy' },
    { name: 'Cancellation Policy', path: '/cancellation-policy' },
    { name: 'Shipping Policy', path: '/shipping-policy' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
    { name: 'Disclaimer', path: '/disclaimer' },
    { name: 'Accessibility', path: '/accessibility' },
    { name: 'DMCA', path: '/dmca-policy' },
    { name: 'Copyright', path: '/copyright-policy' },
    { name: 'SLA', path: '/sla' },
    { name: 'Acceptable Use', path: '/acceptable-use-policy' }
  ];

  return (
    <footer className="bg-[var(--color-bg-dark)] border-t border-[var(--color-border-subtle)] pt-24 pb-12">
      <Container>
        {/* Top CTA Glass Card */}
        <div className="glass-card rounded-3xl p-10 md:p-16 mb-24 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-4 tracking-tight">
              Ready to elevate your digital presence?
            </h2>
            <p className="text-[var(--color-text-gray)] text-lg leading-relaxed">
              Partner with Deyzora Infotech to build high-performance products that drive growth.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Button to="/lets-talk" variant="primary" size="lg" className="group w-full sm:w-auto">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a 
              href="https://wa.me/919879001603"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-[#25D366]/10 text-[#25D366] font-bold text-sm hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/20 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col">
            <Link to="/" className="inline-block mb-8">
              <span className="text-3xl font-bold font-poppins text-white tracking-tight">
                Deyzora<span className="text-[var(--color-primary)]">.</span>
              </span>
            </Link>
            <p className="text-[var(--color-text-gray)] mb-8 text-sm leading-relaxed pr-8">
              We engineer high-performance digital products and premium brand identities for modern businesses and startups globally.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com/deyzorainfotech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-[var(--color-text-gray)] hover:text-white hover:border-[var(--color-primary)] transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/deyzorainfotech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-[var(--color-text-gray)] hover:text-white hover:border-[#0A66C2] transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Company</h4>
            <ul className="flex flex-col gap-4">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-[var(--color-text-gray)] hover:text-white transition-colors text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Services</h4>
            <ul className="flex flex-col gap-4">
              {servicesLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-[var(--color-text-gray)] hover:text-white transition-colors text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="flex flex-col gap-6">
              <li>
                <a href="mailto:deyzorainfotech@gmail.com" className="flex items-center gap-4 text-[var(--color-text-gray)] hover:text-white transition-colors text-sm font-medium group">
                  <span className="w-10 h-10 rounded-lg glass-card flex items-center justify-center group-hover:border-[var(--color-primary)] transition-colors">
                    <Mail className="w-4 h-4" />
                  </span>
                  deyzorainfotech@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919879001603" className="flex items-center gap-4 text-[var(--color-text-gray)] hover:text-white transition-colors text-sm font-medium group">
                  <span className="w-10 h-10 rounded-lg glass-card flex items-center justify-center group-hover:border-[var(--color-primary)] transition-colors">
                    <Phone className="w-4 h-4" />
                  </span>
                  +91 9879001603
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 border-t border-[var(--color-border-subtle)] flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3">
            {legalLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-xs text-[var(--color-text-gray)] hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <p className="text-xs font-medium text-[var(--color-text-gray)] tracking-wide shrink-0">
            &copy; {currentYear} Deyzora Infotech. All Rights Reserved.
          </p>
        </div>

      </Container>
    </footer>
  );
}
