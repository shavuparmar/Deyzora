import { CheckCircle2, ChevronDown, Check } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

const plans = [
  {
    name: 'Starter Website',
    price: '₹4,999',
    prefix: '',
    perfectFor: 'Small businesses, Restaurants, Local shops, Personal portfolios',
    features: [
      'Up to 5 Pages',
      'Responsive Design',
      'Contact Form',
      'WhatsApp Integration',
      'Basic SEO Setup',
      'Fast Loading',
      'SSL Ready',
      'Google Maps (Optional)',
      '7 Days Support',
      'Free Consultation'
    ],
    popular: false,
    highlight: false,
  },
  {
    name: 'WordPress Business',
    price: '₹8,999',
    prefix: 'Starting From',
    perfectFor: 'Business Websites, Schools, Clinics, Hotels, Construction Companies, Small Enterprises',
    features: [
      'Premium WordPress Website',
      'Responsive Design',
      'Elementor Support',
      'Admin Panel',
      'Blog System',
      'Contact Forms',
      'WhatsApp Integration',
      'Speed Optimization',
      'Basic SEO',
      'Security Setup',
      'Training',
      '30 Days Support'
    ],
    popular: true,
    highlight: false,
  },
  {
    name: 'Custom React Website',
    price: '₹19,999',
    prefix: 'Starting From',
    perfectFor: 'Growing Businesses, Corporate Companies, Professional Brands',
    features: [
      'React Frontend',
      'Modern UI/UX',
      'Responsive Design',
      'Fast Performance',
      'Premium Animations',
      'API Integration',
      'Admin Dashboard (Optional)',
      'Contact Forms',
      'SEO-Friendly',
      'Performance Optimization',
      'Deployment Support',
      '30 Days Support'
    ],
    popular: false,
    highlight: false,
  },
  {
    name: 'Full Stack Web App',
    price: '₹39,999',
    prefix: 'Starting From',
    perfectFor: 'Startups, Business Automation, Booking Systems, Management Software, Custom Dashboards',
    features: [
      'React & Node.js',
      'Express.js & MongoDB',
      'Authentication',
      'Admin Dashboard',
      'User Dashboard',
      'API Development',
      'Database Design',
      'Deployment',
      'Security',
      'Documentation',
      '60 Days Support'
    ],
    popular: false,
    highlight: true,
  }
];

const addons = [
  'Domain Registration',
  'Hosting Setup',
  'Professional Email',
  'Logo Design',
  'Graphic Design',
  'Social Media Creatives',
  'Website Maintenance',
  'SEO Optimization',
  'Google Business Profile Setup',
  'Website Speed Optimization',
  'Content Writing',
  'Monthly Website Support'
];

export default function Pricing() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-dark)] border-b border-[var(--color-border-subtle)]" id="pricing">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-white mb-6 tracking-tight">
            Transparent, Affordable Pricing
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-gray)] leading-relaxed">
            Premium quality development tailored for Indian startups, local businesses, and SMEs in Surat and across South Gujarat. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch mb-24 max-w-[1400px] mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl ${
                plan.popular 
                ? 'bg-[var(--color-bg-surface-light)] border-2 border-[var(--color-primary)] shadow-lg shadow-[var(--color-primary)]/10' 
                : plan.highlight
                  ? 'bg-[var(--color-bg-surface)] border-2 border-[var(--color-secondary)] shadow-lg shadow-[var(--color-secondary)]/10'
                  : 'glass-card border border-[var(--color-border-subtle)]'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-primary)] text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg whitespace-nowrap z-10">
                  Most Popular
                </div>
              )}
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-secondary)] text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg whitespace-nowrap z-10">
                  Premium Custom
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold font-poppins text-white mb-2">{plan.name}</h3>
                <div className="h-[4.5rem]">
                  <p className="text-[var(--color-text-gray)] text-xs leading-relaxed line-clamp-3">
                    <span className="font-semibold text-white/80 uppercase tracking-wider block mb-1 text-[10px]">Perfect for:</span>
                    {plan.perfectFor}
                  </p>
                </div>
              </div>

              <div className="mb-8 flex flex-col items-start min-h-[5rem] justify-center">
                {plan.prefix && <span className="text-[var(--color-text-gray)] text-xs font-medium uppercase tracking-wider mb-1">{plan.prefix}</span>}
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold font-poppins text-white tracking-tight">{plan.price}</span>
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="text-xs font-bold text-white mb-4 uppercase tracking-wider border-b border-[var(--color-border-subtle)] pb-2 w-full">Includes:</div>
                <ul className="flex flex-col gap-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                        plan.popular ? 'text-[var(--color-primary)]' : plan.highlight ? 'text-[var(--color-secondary)]' : 'text-green-500'
                      }`} />
                      <span className="text-[var(--color-text-gray)] text-sm leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6">
                <Button 
                  to="/lets-talk" 
                  variant={plan.popular ? 'primary' : plan.highlight ? 'secondary' : 'outline'} 
                  className="w-full py-3.5 text-sm font-bold shadow-lg flex justify-center"
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Our Pricing section & Trust Signals */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-24">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-[var(--color-border-subtle)] text-[var(--color-text-gray)] text-xs font-bold uppercase tracking-widest mb-6 w-max">
              Why Choose Deyzora?
            </div>
            <h3 className="text-3xl font-bold font-poppins text-white mb-6">
              Premium Quality at Budget-Friendly Rates
            </h3>
            <p className="text-[var(--color-text-gray)] text-lg leading-relaxed mb-8">
              We believe professional digital infrastructure shouldn't be out of reach for Indian businesses. We deliver scalable solutions with transparent quotations and long-term support.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Affordable Pricing',
                'Transparent Process',
                'No Hidden Charges',
                'Fast Delivery',
                'Mobile-Friendly Websites',
                'SEO-Optimized Code',
                'Lifetime Technical Guidance',
                'Dedicated Local Support'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-white text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Optional Add-ons */}
          <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden">
             <div className="absolute -top-32 -right-32 w-64 h-64 bg-[var(--color-primary)]/10 blur-[80px] rounded-full pointer-events-none" />
             <h3 className="text-2xl font-bold font-poppins text-white mb-2 relative z-10">Optional Add-ons</h3>
             <p className="text-[var(--color-text-gray)] text-sm mb-8 relative z-10">Enhance your digital presence with our additional services.</p>
             
             <div className="flex flex-wrap gap-3 relative z-10">
               {addons.map(addon => (
                 <span key={addon} className="px-4 py-2 bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] rounded-lg text-[var(--color-text-gray)] text-sm font-medium hover:border-white/20 transition-colors">
                   {addon}
                 </span>
               ))}
             </div>
          </div>
        </div>

        {/* Links to FAQ */}
        <div className="text-center">
          <p className="text-[var(--color-text-gray)] mb-4 text-sm">
            Have questions about our pricing or process?
          </p>
          <a href="#faq" className="inline-flex items-center text-white font-medium hover:text-[var(--color-primary)] transition-colors text-sm border-b border-transparent hover:border-[var(--color-primary)] pb-0.5">
            Read our Frequently Asked Questions <ChevronDown className="w-4 h-4 ml-1" />
          </a>
        </div>
      </Container>
    </section>
  );
}
