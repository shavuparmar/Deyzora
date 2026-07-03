import { AlertTriangle } from'lucide-react';
import LegalLayout from'../components/layout/LegalLayout';

const Disclaimer = () => {
  return (
    <LegalLayout
      title="Disclaimer"
      icon={AlertTriangle}
      description="Limitation of liability and general website disclaimers."
      lastUpdated={new Date().toLocaleDateString()}
    >
      <section>
        <h2>1. General Information</h2>
        <p>The information provided by Deyzora Infotech on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.</p>
      </section>
      
      <section>
        <h2>2. Professional Advice</h2>
        <p>Our website cannot and does not contain legal, financial, or strict business advice. The software engineering and marketing information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.</p>
      </section>

      <section>
        <h2>3. External Links</h2>
        <p>The site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites.</p>
      </section>

      <section>
        <h2>4. Limitation of Liability</h2>
        <p>Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information is solely at your own risk.</p>
      </section>
    </LegalLayout>
  );
};

export default Disclaimer;
