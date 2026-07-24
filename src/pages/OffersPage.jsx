import { Helmet } from 'react-helmet-async';
import { Tag, CheckCircle2, ArrowRight } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import ContactCTA from '../components/sections/ContactCTA';

export default function OffersPage() {
  return (
    <>
      <Helmet>
        <title>Special Offers & Bundles | Deyzora Infotech</title>
        <meta name="description" content="Check out our special web development packages and limited-time offer bundles." />
      </Helmet>

      <main className="pt-28 bg-[var(--color-bg-dark)]">
        <section className="py-16 border-b border-white/10">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="cyan" className="mb-4">Limited Offers</Badge>
              <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight mb-6">
                Special Agency Packages
              </h1>
              <p className="text-lg text-white/70 leading-relaxed">
                Save on complete digital bundles—website, branding logo, SEO setup, and hosting included in one easy package.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <div className="max-w-4xl mx-auto space-y-8">
              
              <div className="rounded-3xl bg-gradient-to-r from-[var(--color-accent)]/20 via-white/5 to-[var(--color-accent-cyan)]/20 border border-white/15 p-8 sm:p-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                    <Tag className="w-4 h-4" /> Limited Time Deal
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                    Complete Small Business Growth Pack
                  </h2>
                  <p className="text-sm text-white/70 max-w-lg leading-relaxed">
                    Get a 5-page custom website + custom logo design + 1 year cloud hosting + Google Maps SEO setup for one flat fee.
                  </p>
                  <div className="flex items-baseline gap-2 pt-2">
                    <span className="text-3xl font-extrabold text-white">₹19,999</span>
                    <span className="text-sm text-white/50 line-through">₹29,999</span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">Save 33%</span>
                  </div>
                </div>

                <Button to="/contact?offer=growth-pack" variant="primary" size="lg" className="shrink-0 h-14 px-8 text-base">
                  Claim Growth Pack
                </Button>
              </div>

            </div>
          </Container>
        </section>

        <ContactCTA />
      </main>
    </>
  );
}
