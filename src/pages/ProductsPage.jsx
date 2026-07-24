import { Helmet } from 'react-helmet-async';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import ContactCTA from '../components/sections/ContactCTA';

const products = [
  {
    id: 1,
    name: "Deyzora CMS Core",
    desc: "Lightweight admin dashboard for managing website content, blogs, and leads without plugin bloat.",
    price: "Included Free with Business Plans",
    features: ["Instant page text editing", "Image gallery uploader", "Lead form entries manager"]
  },
  {
    id: 2,
    name: "WhatsApp LeadBot",
    desc: "Automated WhatsApp chatbot integration for instant customer inquiries and booking notifications.",
    price: "₹4,999 one-time",
    features: ["24/7 automated FAQ responses", "Instant lead alerts to phone", "Custom chat script"]
  }
];

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title>Ready Digital Products | Deyzora Infotech</title>
        <meta name="description" content="Explore our pre-built digital products, tools, and admin software for growing businesses." />
      </Helmet>

      <main className="pt-28 bg-[var(--color-bg-dark)]">
        <section className="py-16 border-b border-white/10">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="cyan" className="mb-4">Our Software</Badge>
              <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight mb-6">
                Digital Products & Tools
              </h1>
              <p className="text-lg text-white/70 leading-relaxed">
                Pre-built software tools designed to speed up your business operations and capture leads effortlessly.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {products.map((p) => (
                <div key={p.id} className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold font-display text-white mb-2">{p.name}</h3>
                    <p className="text-sm text-white/70 leading-relaxed mb-6">{p.desc}</p>
                    
                    <div className="space-y-2 mb-6 border-t border-white/10 pt-4">
                      {p.features.map((f, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-white/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent-cyan)] shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-white/90">{p.price}</span>
                    <Button to="/contact" size="sm">Inquire Product</Button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <ContactCTA />
      </main>
    </>
  );
}
