import { Helmet } from 'react-helmet-async';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import ContactCTA from '../components/sections/ContactCTA';

export default function PortfolioPage() {
  return (
    <>
      <Helmet>
        <title>Portfolio & Recent Projects | Deyzora Infotech</title>
        <meta name="description" content="Explore our portfolio of custom websites, mobile apps, e-commerce stores, and AI software delivered for clients worldwide." />
      </Helmet>

      <main className="pt-28 bg-[var(--color-bg-dark)]">
        {/* Hero Banner */}
        <section className="py-16 border-b border-white/10">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="cyan" className="mb-4">Our Work</Badge>
              <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight mb-6">
                Featured Projects & Case Studies
              </h1>
              <p className="text-lg text-white/70 leading-relaxed">
                Take a look at how we helped real businesses launch fast websites, scale online sales, and automate daily tasks.
              </p>
            </div>
          </Container>
        </section>

        <FeaturedProjects />
        <ContactCTA />
      </main>
    </>
  );
}
