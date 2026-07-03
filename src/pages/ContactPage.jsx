import { useEffect } from'react';
import SEO from'../components/SEO';
import { Section, Container } from'../components/ui/LayoutComponents';
import ContactHero from'../components/contact/ContactHero';
import QuickCards from'../components/contact/QuickCards';
import SimpleContactForm from'../components/contact/SimpleContactForm';
import InfoPanel from'../components/contact/InfoPanel';
import WhyChooseUs from'../components/contact/WhyChooseUs';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Deyzora Infotech",
    "image": "https://deyzora.online/vite.svg",
    "telephone": "+91-9879001603",
    "email": "deyzorainfotech@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "url": "https://deyzora.online/contact"
  };

  return (
    <div className="pt-32 bg-[var(--color-background)] min-h-screen">
      <SEO 
        title="Contact Us | Deyzora Infotech" 
        description="Get in touch with Deyzora Infotech for web development, app development, and digital marketing services." 
        schema={contactSchema}
      />
      
      <ContactHero />
      <QuickCards />
      
      <Section className="mb-24">
        <Container className="max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-2/3">
              <SimpleContactForm />
            </div>
            <div className="w-full lg:w-1/3">
              <InfoPanel />
            </div>
          </div>
        </Container>
      </Section>

      <WhyChooseUs />
    </div>
  );
};

export default ContactPage;
