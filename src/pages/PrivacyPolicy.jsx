import { ShieldCheck } from'lucide-react';
import LegalLayout from'../components/layout/LegalLayout';

const PrivacyPolicy = () => {
  return (
    <LegalLayout
      title="Privacy Policy"
      icon={ShieldCheck}
      description="Learn how Deyzora Infotech collects, uses, and protects your personal data."
      lastUpdated={new Date().toLocaleDateString()}
    >
      <section>
        <h2>1. Introduction</h2>
        <p>At Deyzora Infotech, your privacy is our priority. This Privacy Policy details how we collect, process, and safeguard your personal information when you use our services, visit our website, or interact with our communication channels.</p>
      </section>
      
      <section>
        <h2>2. Data We Collect</h2>
        <p>We may collect and process the following categories of data:</p>
        <ul>
          <li><strong>Identity Data:</strong> First name, last name, username or similar identifier.</li>
          <li><strong>Contact Data:</strong> Billing address, email address, and telephone numbers via contact forms.</li>
          <li><strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting, and operating system.</li>
          <li><strong>Usage Data:</strong> Information about how you use our website, analyzed through standard analytics tools.</li>
        </ul>
      </section>
      
      <section>
        <h2>3. How We Use Your Data</h2>
        <p>Your data is strictly used to:</p>
        <ul>
          <li>Provide, operate, and maintain our services.</li>
          <li>Communicate with you regarding project inquiries, updates, and support.</li>
          <li>Analyze website usage to improve our digital infrastructure and user experience.</li>
          <li>Comply with legal obligations and resolve potential disputes.</li>
        </ul>
        <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes under any circumstances.</p>
      </section>

      <section>
        <h2>4. Cookies and Analytics</h2>
        <p>Our website utilizes cookies and similar tracking technologies to enhance your browsing experience. We may use services like Google Analytics to understand traffic patterns. You can instruct your browser to refuse all cookies; however, some features of our website may not function properly without them.</p>
      </section>

      <section>
        <h2>5. Data Security</h2>
        <p>We have implemented strict security protocols to prevent your personal data from being accidentally lost, used, altered, or accessed in an unauthorized manner. All data transmitted through our website is encrypted using industry-standard SSL/TLS technology.</p>
      </section>

      <section>
        <h2>6. Your User Rights</h2>
        <p>Depending on your location, you may have rights under data protection laws in relation to your personal data, including the right to:</p>
        <ul>
          <li>Request access to your personal data.</li>
          <li>Request correction of incomplete or inaccurate data.</li>
          <li>Request erasure of your personal data ("Right to be Forgotten").</li>
          <li>Withdraw consent at any time where we are relying on consent to process your personal data.</li>
        </ul>
      </section>

      <section>
        <h2>7. Contact Information</h2>
        <p>If you have any questions about this Privacy Policy or our privacy practices, please contact our Data Protection Officer at:</p>
        <p><strong>Email:</strong> <a href="mailto:deyzorainfotech@gmail.com">deyzorainfotech@gmail.com</a></p>
      </section>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
