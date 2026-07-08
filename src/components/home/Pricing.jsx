import { CheckCircle2, XCircle, ChevronDown } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small local businesses establishing their first digital presence.',
    price: '₹15,000',
    turnaround: '1-2 Weeks',
    features: [
      'Up to 5 Pages',
      'Mobile Responsive Design',
      'Contact Form Integration',
      'Basic On-Page SEO',
      '1 Month Free Support',
      'Social Media Integration'
    ],
    missing: [
      'Custom Animations',
      'CMS Integration (Blog)',
      'E-commerce Capability',
      'Advanced Analytics'
    ],
    popular: false,
  },
  {
    name: 'Business',
    description: 'Ideal for growing companies needing a scalable, dynamic digital asset.',
    price: '₹35,000',
    turnaround: '3-4 Weeks',
    features: [
      'Up to 15 Pages',
      'Custom UI/UX Design',
      'CMS Integration (WordPress)',
      'Advanced Technical SEO',
      '3 Months Free Support',
      'Google Analytics Setup',
      'Custom Animations'
    ],
    missing: [
      'E-commerce Capability',
      'Dedicated Server Setup'
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions, web applications, and e-commerce platforms for maximum scale.',
    price: 'Custom',
    turnaround: '6+ Weeks',
    features: [
      'Unlimited Pages',
      'Full Custom Web App (React/Node)',
      'E-commerce / Payment Gateways',
      'Dedicated Project Manager',
      '12 Months Free Support',
      'Custom Third-Party API Integrations',
      'Dedicated High-Speed Hosting'
    ],
    missing: [],
    popular: false,
  }
];

const addons = [
  { name: 'Logo Design & Brand Identity', price: '₹5,000+' },
  { name: 'Monthly Maintenance & Updates', price: '₹2,500/mo' },
  { name: 'Professional Content Writing', price: '₹1,000/page' },
  { name: 'Managed Cloud Hosting (AWS/Vercel)', price: '₹3,000/yr' }
];

export default function Pricing() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-dark)] border-b border-[var(--color-border-subtle)]" id="pricing">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-white mb-6 tracking-tight">
            Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-gray)] leading-relaxed">
            No hidden fees or surprise charges. We deliver exceptional quality at competitive rates tailored for Indian startups and businesses.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-24 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative flex flex-col p-8 md:p-10 rounded-3xl transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl ${
                plan.popular 
                ? 'bg-[var(--color-bg-surface-light)] border-2 border-[var(--color-primary)]' 
                : 'glass-card border border-[var(--color-border-subtle)]'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg whitespace-nowrap">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold font-poppins text-white mb-3">{plan.name}</h3>
                <p className="text-[var(--color-text-gray)] text-sm leading-relaxed h-[3.5rem] overflow-hidden">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-baseline">
                <span className="text-4xl md:text-5xl font-bold font-poppins text-white tracking-tight">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-[var(--color-text-gray)] ml-2 font-medium">onwards</span>}
              </div>
              
              <div className="text-xs font-bold text-white mb-8 uppercase tracking-widest bg-white/5 py-3 px-4 rounded-xl border border-white/5 inline-flex w-max">
                Turnaround: {plan.turnaround}
              </div>

              <div className="flex-1 flex flex-col">
                <div className="text-sm font-bold text-white mb-4 uppercase tracking-wider">What's Included</div>
                <ul className="flex flex-col gap-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-[var(--color-primary)]' : 'text-blue-500'}`} />
                      <span className="text-[var(--color-text-gray)] text-sm leading-tight pt-0.5">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {plan.missing.length > 0 && (
                  <div className="mt-auto pt-8 border-t border-[var(--color-border-subtle)]">
                    <ul className="flex flex-col gap-4">
                      {plan.missing.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 opacity-50">
                          <XCircle className="w-5 h-5 shrink-0 text-white/50" />
                          <span className="text-[var(--color-text-gray)] text-sm leading-tight pt-0.5">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-8">
                <Button 
                  to="/lets-talk" 
                  variant={plan.popular ? 'primary' : 'outline'} 
                  className="w-full py-4 text-sm font-bold shadow-lg"
                >
                  Choose {plan.name}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Add-ons */}
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
           <div className="absolute inset-0 bg-white/5 pointer-events-none" />
           <h3 className="text-2xl font-bold font-poppins text-white mb-8 text-center relative z-10">Optional Add-ons</h3>
           <div className="grid sm:grid-cols-2 gap-4 relative z-10">
             {addons.map(addon => (
               <div key={addon.name} className="flex items-center justify-between p-5 bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] rounded-xl hover:border-white/20 transition-colors">
                 <span className="text-white text-sm font-medium">{addon.name}</span>
                 <span className="text-[var(--color-text-gray)] font-bold text-sm bg-white/5 px-3 py-1 rounded-lg">{addon.price}</span>
               </div>
             ))}
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
