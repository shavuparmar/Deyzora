import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import AboutBento from '../components/home/AboutBento';
import Stats from '../components/home/Stats';
import TrustedBy from '../components/home/TrustedBy';
import ContactCTA from '../components/home/ContactCTA';
import { Container } from '../components/ui/Container';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Deyzora Infotech</title>
        <meta name="description" content="Learn more about Deyzora Infotech, our mission, vision, values, and the talented team behind our premium digital experiences." />
      </Helmet>

      <main className="pt-24 bg-[var(--color-bg-dark)]">
        {/* Page Hero */}
        <section className="section-padding border-b border-[var(--color-border-subtle)]">
          <Container className="text-center max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins text-white mb-6 tracking-tight"
            >
              Building digital <br className="hidden md:block" /> excellence.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-[var(--color-text-gray)] leading-relaxed max-w-2xl mx-auto"
            >
              We are a collective of passionate designers, developers, and strategists committed to transforming businesses through powerful digital solutions.
            </motion.p>
          </Container>
        </section>

        <AboutBento />
        <Stats />

        {/* Core Philosophy */}
        <section className="section-padding bg-[var(--color-bg-surface-light)] border-b border-[var(--color-border-subtle)]">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden border border-[var(--color-border-subtle)]">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Our Team"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              <div className="max-w-lg">
                <h2 className="text-4xl font-bold font-poppins text-white mb-6 tracking-tight">
                  Quality over everything.
                </h2>
                <div className="prose-deyzora">
                  <p>
                    In a world of templates and shortcuts, we choose the path of craftsmanship. Every line of code, every pixel, and every strategy is meticulously crafted to ensure your digital presence stands out.
                  </p>
                  <p>
                    We don't just build websites; we build scalable digital ecosystems that adapt and grow with your business, providing a solid foundation for long-term success.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <TrustedBy />
        <ContactCTA />
      </main>
    </>
  );
}
