import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Container } from '../ui/Container';

const faqs = [
  // General & Process
  {
    question: "What is your typical project timeline?",
    answer: "Most corporate websites take 4-6 weeks from discovery to launch. Complex web applications may take 8-12 weeks. We provide a detailed timeline during the proposal phase based on your specific requirements."
  },
  {
    question: "How do we get started?",
    answer: "Getting started is simple. Contact us through our form, WhatsApp, or email. We'll schedule a discovery call to understand your business goals, target audience, and requirements. After that, we'll send a customized proposal and timeline."
  },
  {
    question: "Do I need to write my own content?",
    answer: "While nobody knows your business better than you do, we understand writing can be tough. We can either use your provided content, or our professional copywriters can craft SEO-optimized content for your website as an additional service."
  },
  {
    question: "Will I have a dedicated project manager?",
    answer: "Yes, every client is assigned a dedicated project manager who will be your single point of contact throughout the entire development lifecycle, ensuring transparent communication and timely updates."
  },
  
  // Design & Revisions
  {
    question: "How many revisions do I get during the design phase?",
    answer: "We typically offer 2-3 rounds of major revisions during the initial design phase to ensure the look and feel perfectly align with your brand identity. Minor tweaks are accommodated throughout the build."
  },
  {
    question: "Do you design logos and brand identities?",
    answer: "Yes! We have a dedicated graphic design team that specializes in creating timeless logos, brand guidelines, and complete visual identities for businesses and startups."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely. We employ a strict mobile-first design approach. Your website will be fully responsive and optimized to look and perform flawlessly on smartphones, tablets, laptops, and ultra-wide desktop monitors."
  },

  // Tech & Development
  {
    question: "What technologies do you use?",
    answer: "For custom web applications, we specialize in React, Next.js, Vite, Node.js, and Tailwind CSS. For content-heavy or e-commerce sites, we often leverage robust WordPress and WooCommerce architectures."
  },
  {
    question: "Why should I choose custom development over a cheap template?",
    answer: "Templates are bloated, slow, and hard to scale. A custom-built website by Deyzora Infotech ensures blazing-fast performance, rock-solid security, specific functionality tailored to your exact business workflow, and a unique design that stands out from competitors."
  },
  {
    question: "Can I update the website myself once it's built?",
    answer: "Yes. If we build your site on WordPress or a modern Headless CMS, we will provide you with a secure, user-friendly dashboard and training so you can easily manage text, images, and blog posts without touching any code."
  },

  // Hosting, Domains & Maintenance
  {
    question: "Do you provide web hosting and domain registration?",
    answer: "While we highly recommend acquiring your own domain for ownership purposes, we can guide you through the process. We do offer premium, high-speed managed hosting packages optimized specifically for the sites we build."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes. We offer comprehensive maintenance packages that cover regular security updates, automated backups, performance optimization, and priority technical support to keep your digital asset running smoothly."
  },
  {
    question: "What happens if my website goes down?",
    answer: "If you are on our managed hosting and maintenance plan, we monitor your site 24/7. In the rare event of downtime, our automated systems alert our engineering team, and we resolve the issue immediately, often before you even notice."
  },

  // SEO & Marketing
  {
    question: "Are your websites optimized for SEO?",
    answer: "Yes. Technical SEO is built into our core process. We ensure proper semantic HTML, optimized meta tags, schema markup, lightning-fast load times, and mobile responsiveness—giving you the best possible foundation for search engine rankings."
  },
  {
    question: "Do you guarantee first-page Google rankings?",
    answer: "No reputable agency can guarantee organic search rankings as algorithms are controlled by Google. However, we guarantee that your website will adhere to the highest technical SEO standards, significantly improving your ability to rank."
  },

  // Pricing & Payments
  {
    question: "How much does a new website cost?",
    answer: "Pricing depends on the scope, complexity, and features required. Our basic packages start at reasonable rates for startups, while custom enterprise applications are quoted based on technical requirements. Contact us for a free, no-obligation quote."
  },
  {
    question: "What is your payment structure?",
    answer: "Typically, we structure payments in milestones: a 50% deposit to commence work, 25% upon design approval, and the final 25% before launch and handoff. We accept all major payment methods including Bank Transfers and UPI."
  },
  {
    question: "Are there any hidden fees?",
    answer: "Never. We believe in absolute transparency. All costs, including any optional add-ons, premium plugins, or hosting fees, will be clearly outlined in your initial proposal before you sign anything."
  },

  // Additional Services
  {
    question: "Can you redesign my existing website?",
    answer: "Yes! We frequently help businesses overhaul outdated websites. We will audit your current site, retain your existing SEO value, and transition you to a modern, high-performance platform."
  },
  {
    question: "Do you offer eCommerce solutions?",
    answer: "Yes, we build robust, secure, and scalable e-commerce platforms using WooCommerce, Shopify, or custom headless architectures to help you sell products and services globally."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padding bg-[var(--color-bg-dark)] border-b border-[var(--color-border-subtle)]" id="faq">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6 tracking-tight">
                Frequently <br/>Asked Questions
              </h2>
              <p className="text-xl text-[var(--color-text-gray)] leading-relaxed mb-8">
                Everything you need to know about our process, pricing, capabilities, and how we deliver digital excellence.
              </p>
              
              <div className="p-6 bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] rounded-2xl">
                 <h4 className="text-white font-bold mb-2">Still have questions?</h4>
                 <p className="text-[var(--color-text-gray)] text-sm mb-4">Our team is available to help you with any specific requirements.</p>
                 <a href="mailto:deyzorainfotech@gmail.com" className="text-[var(--color-primary)] font-medium text-sm hover:underline">
                   deyzorainfotech@gmail.com &rarr;
                 </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className="border-b border-[var(--color-border-subtle)] last:border-0"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                  >
                    <span className={`text-lg font-bold font-poppins transition-colors pr-8 ${isOpen ? 'text-[var(--color-primary)]' : 'text-white group-hover:text-[var(--color-primary)]'}`}>
                      {faq.question}
                    </span>
                    <span className="shrink-0 w-8 h-8 rounded-full border border-[var(--color-border-subtle)] flex items-center justify-center bg-[var(--color-bg-surface)] text-white">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-[var(--color-text-gray)] leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}
