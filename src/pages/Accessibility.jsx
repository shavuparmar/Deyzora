import { Eye } from'lucide-react';
import LegalLayout from'../components/layout/LegalLayout';

const Accessibility = () => {
  return (
    <LegalLayout
      title="Accessibility Statement"
      icon={Eye}
      description="Our commitment to making digital experiences accessible to everyone."
      lastUpdated={new Date().toLocaleDateString()}
    >
      <section>
        <h2>1. Our Commitment</h2>
        <p>At Deyzora Infotech, we are deeply committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to all our digital products and internal websites.</p>
      </section>
      
      <section>
        <h2>2. Standards We Follow</h2>
        <p>We strive to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.</p>
        <p>Our implementations focus on:</p>
        <ul>
          <li><strong>Keyboard Navigation:</strong> Ensuring interactive elements can be focused and triggered via keyboard alone.</li>
          <li><strong>Screen Reader Support:</strong> Utilizing semantic HTML and ARIA labels where appropriate to provide context.</li>
          <li><strong>Color Contrast:</strong> Maintaining high contrast ratios for text and crucial UI elements against dark backgrounds.</li>
          <li><strong>Animation Control:</strong> Respecting the <code>prefers-reduced-motion</code> media query to disable heavy animations for sensitive users.</li>
        </ul>
      </section>

      <section>
        <h2>3. Ongoing Efforts</h2>
        <p>Accessibility is not a one-time task but an ongoing effort. We regularly audit our frontend codebases using tools like Lighthouse and Axe to identify and fix accessibility bottlenecks.</p>
      </section>

      <section>
        <h2>4. Feedback</h2>
        <p>We welcome your feedback on the accessibility of Deyzora Infotech. If you encounter any accessibility barriers on our website, please contact us immediately at <a href="mailto:deyzorainfotech@gmail.com">deyzorainfotech@gmail.com</a>.</p>
      </section>
    </LegalLayout>
  );
};

export default Accessibility;
