import { Shield } from'lucide-react';
import LegalLayout from'../components/layout/LegalLayout';

const SecurityPolicy = () => {
  return (
    <LegalLayout
      title="Security Policy"
      icon={Shield}
      description="Our practices for securing infrastructure, code, and user data."
      lastUpdated={new Date().toLocaleDateString()}
    >
      <section>
        <h2>1. Commitment to Security</h2>
        <p>Security is not an afterthought at Deyzora Infotech; it is a foundational pillar of our engineering process. We employ industry-leading practices to ensure the applications we build and our own infrastructure remain resilient against modern cyber threats.</p>
      </section>
      
      <section>
        <h2>2. Secure Coding Practices</h2>
        <p>Our engineering teams strictly adhere to secure coding standards, including:</p>
        <ul>
          <li><strong>Input Sanitization:</strong> Preventing SQL injection, XSS, and related attacks.</li>
          <li><strong>Authentication & Authorization:</strong> Utilizing robust JWT (JSON Web Tokens), Role-Based Access Control (RBAC), and secure password hashing (e.g., bcrypt).</li>
          <li><strong>Dependency Management:</strong> Continually scanning and updating npm/yarn packages to patch known vulnerabilities.</li>
        </ul>
      </section>

      <section>
        <h2>3. Data Protection in Transit and at Rest</h2>
        <p>All data transmitted between our frontend applications and backend APIs is encrypted using TLS 1.2 or higher (HTTPS). Sensitive data stored in our databases is encrypted at rest using modern cryptographic algorithms provided by platforms like AWS KMS or MongoDB Atlas.</p>
      </section>

      <section>
        <h2>4. Incident Response & Responsible Disclosure</h2>
        <p>We actively monitor our systems for anomalous behavior. If a security breach occurs, we have an incident response plan to isolate, mitigate, and transparently report the issue to affected clients within 72 hours.</p>
        <p>If you are a security researcher and believe you have found a vulnerability in our systems, we encourage responsible disclosure. Please contact us immediately at <a href="mailto:deyzorainfotech@gmail.com">deyzorainfotech@gmail.com</a> before publicizing the flaw.</p>
      </section>
    </LegalLayout>
  );
};

export default SecurityPolicy;
