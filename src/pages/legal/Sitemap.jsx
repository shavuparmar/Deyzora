import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Globe, ArrowRight } from 'lucide-react';
import { services } from '../../data/services';

export default function Sitemap() {
  return (
    <div className="pt-32 pb-24 bg-black text-white min-h-screen">
      <Helmet>
        <title>HTML Sitemap | Deyzora Infotech</title>
        <meta name="description" content="Complete HTML Sitemap of Deyzora Infotech agency website." />
        <link rel="canonical" href="https://deyzora.com/sitemap" />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0070F3] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-4 inline-block">
            Site Navigation Index
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">HTML Sitemap</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Pages */}
          <div className="glass-card rounded-3xl p-6">
            <h2 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">Core Pages</h2>
            <ul className="space-y-2 text-xs text-white/70">
              <li><Link to="/" className="hover:text-[#0070F3] transition-colors">Home Page</Link></li>
              <li><Link to="/about" className="hover:text-[#0070F3] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#0070F3] transition-colors">Services Overview</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#0070F3] transition-colors">Portfolio & Work</Link></li>
              <li><Link to="/pricing" className="hover:text-[#0070F3] transition-colors">Pricing Matrix</Link></li>
              <li><Link to="/blog" className="hover:text-[#0070F3] transition-colors">Engineering Blog</Link></li>
              <li><Link to="/contact" className="hover:text-[#0070F3] transition-colors">Contact Agency</Link></li>
            </ul>
          </div>

          {/* Service Pages */}
          <div className="glass-card rounded-3xl p-6">
            <h2 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">Dedicated Service Pages (12)</h2>
            <ul className="space-y-2 text-xs text-white/70">
              {services.map(s => (
                <li key={s.id}>
                  <Link to={`/services/${s.slug}`} className="hover:text-[#50E3C2] transition-colors flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-[#0070F3]" /> {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Pages */}
          <div className="glass-card rounded-3xl p-6">
            <h2 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">Legal & Policies</h2>
            <ul className="space-y-2 text-xs text-white/70">
              <li><Link to="/privacy-policy" className="hover:text-[#0070F3] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-[#0070F3] transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy" className="hover:text-[#0070F3] transition-colors">Refund Policy</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-[#0070F3] transition-colors">Cookie Policy</Link></li>
              <li><Link to="/disclaimer" className="hover:text-[#0070F3] transition-colors">Disclaimer</Link></li>
              <li><Link to="/accessibility" className="hover:text-[#0070F3] transition-colors">Accessibility</Link></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
