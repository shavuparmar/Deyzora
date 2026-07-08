import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Map } from 'lucide-react';
import LegalLayout from '../components/layout/LegalLayout';

export default function Sitemap() {
  const mainPages = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact Us' },
    { to: '/lets-talk', label: 'Start a Project' }
  ];

  const services = [
    { id: 'website-development', title: 'Website Development' },
    { id: 'wordpress-development', title: 'WordPress Development' },
    { id: 'graphic-design', title: 'Graphic Design' },
    { id: 'logo-design', title: 'Logo Design' }
  ];

  const legalPages = [
    { to: '/privacy-policy', label: 'Privacy Policy' },
    { to: '/terms-conditions', label: 'Terms & Conditions' },
    { to: '/refund-policy', label: 'Refund Policy' },
    { to: '/cancellation-policy', label: 'Cancellation Policy' },
    { to: '/shipping-policy', label: 'Shipping Policy' },
    { to: '/cookie-policy', label: 'Cookie Policy' },
    { to: '/disclaimer', label: 'Disclaimer' },
    { to: '/accessibility', label: 'Accessibility' },
    { to: '/security-policy', label: 'Security Policy' },
    { to: '/dmca-policy', label: 'DMCA Policy' },
    { to: '/copyright-policy', label: 'Copyright Policy' },
    { to: '/acceptable-use-policy', label: 'Acceptable Use Policy' },
    { to: '/sla', label: 'Service Level Agreement' },
    { to: '/intellectual-property', label: 'Intellectual Property Policy' },
    { to: '/grievance-policy', label: 'Contact & Grievance Policy' }
  ];

  return (
    <LegalLayout
      title="Sitemap"
      icon={Map}
      description="Navigate through Deyzora Infotech's digital infrastructure."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold font-poppins text-white mb-6 border-b border-[var(--color-border-subtle)] pb-4">Main Pages</h2>
          <ul className="space-y-4">
            {mainPages.map(link => (
              <li key={link.to}>
                <Link to={link.to} className="text-[var(--color-text-gray)] hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold font-poppins text-white mb-6 border-b border-[var(--color-border-subtle)] pb-4">Services</h2>
          <ul className="space-y-4">
            <li>
              <Link to="/services" className="text-[var(--color-text-gray)] hover:text-white transition-colors font-medium">
                All Services Overview
              </Link>
            </li>
            {services.map(service => (
              <li key={service.id}>
                <Link to={`/services/${service.id}`} className="text-[var(--color-text-gray)] hover:text-white transition-colors pl-4 border-l border-[var(--color-border-subtle)] block">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 mt-8">
          <h2 className="text-2xl font-bold font-poppins text-white mb-6 border-b border-[var(--color-border-subtle)] pb-4">Legal & Policies</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {legalPages.map(link => (
              <li key={link.to}>
                <Link to={link.to} className="text-[var(--color-text-gray)] hover:text-white transition-colors text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </LegalLayout>
  );
}
