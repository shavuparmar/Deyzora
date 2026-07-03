import { Cookie } from'lucide-react';
import LegalLayout from'../components/layout/LegalLayout';

const CookiePolicy = () => {
  return (
    <LegalLayout
      title="Cookie Policy"
      icon={Cookie}
      description="How Deyzora Infotech uses cookies to improve your experience."
      lastUpdated={new Date().toLocaleDateString()}
    >
      <section>
        <h2>1. What Are Cookies?</h2>
        <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.</p>
      </section>
      
      <section>
        <h2>2. How We Use Cookies</h2>
        <p>We use cookies and similar tracking technologies (like Local Storage) for the following purposes:</p>
        <ul>
          <li><strong>Essential Cookies:</strong> Required for the website to function correctly (e.g., maintaining your session or keeping track of popup states like our Special Offer popup).</li>
          <li><strong>Analytical Cookies:</strong> Help us understand how visitors interact with our website by collecting and reporting information anonymously (e.g., Google Analytics).</li>
          <li><strong>Preference Cookies:</strong> Allow the website to remember choices you make (like language preferences or dark mode settings).</li>
        </ul>
      </section>

      <section>
        <h2>3. Local Storage</h2>
        <p>In addition to traditional cookies, our React-based frontend heavily utilizes the browser's Local Storage API to improve performance and user experience. For example, we use Local Storage to ensure our"Special Offer" popup only appears once per visitor, preventing annoyance.</p>
      </section>

      <section>
        <h2>4. Managing Cookies</h2>
        <p>You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.</p>
      </section>
    </LegalLayout>
  );
};

export default CookiePolicy;
