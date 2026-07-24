import { Helmet } from 'react-helmet-async';
import { ExternalLink, Monitor, Smartphone, CheckCircle2 } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import ContactCTA from '../components/sections/ContactCTA';

const demos = [
  {
    id: 1,
    title: "Healthcare & Clinic Template",
    category: "Medical",
    desc: "Clean website template for doctor clinics, hospitals, and wellness centers with appointment booking.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    url: "#"
  },
  {
    id: 2,
    title: "Luxury Fashion Store",
    category: "E-Commerce",
    desc: "High-converting shop layout for clothing brands, jewelry stores, and online boutiques.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    url: "#"
  },
  {
    id: 3,
    title: "Corporate & Law Firm",
    category: "Corporate",
    desc: "Professional agency layout for consultants, law firms, accounting, and finance advisors.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    url: "#"
  }
];

export default function DemoWebsites() {
  return (
    <>
      <Helmet>
        <title>Live Demo Websites | Deyzora Infotech</title>
        <meta name="description" content="Preview live website designs and layout templates built by Deyzora Infotech." />
      </Helmet>

      <main className="pt-28 bg-[var(--color-bg-dark)]">
        <section className="py-16 border-b border-white/10">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="cyan" className="mb-4">Live Demos</Badge>
              <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight mb-6">
                Website Design Previews
              </h1>
              <p className="text-lg text-white/70 leading-relaxed">
                Explore our ready-to-launch website layouts tailored for different business industries.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <div className="grid md:grid-cols-3 gap-8">
              {demos.map((d) => (
                <div key={d.id} className="rounded-3xl bg-white/5 border border-white/10 overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="h-48 overflow-hidden relative">
                      <img src={d.image} alt={d.title} className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4"><Badge variant="accent">{d.category}</Badge></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold font-display text-white mb-2">{d.title}</h3>
                      <p className="text-sm text-white/70 leading-relaxed">{d.desc}</p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-white/10">
                    <Button to="/contact" size="sm" className="w-full">
                      Customize This Design
                    </Button>
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
