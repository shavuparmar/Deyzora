import { Truck } from'lucide-react';
import LegalLayout from'../components/layout/LegalLayout';

const ShippingPolicy = () => {
  return (
    <LegalLayout
      title="Shipping & Delivery Policy"
      icon={Truck}
      description="Delivery methods for Deyzora Infotech's digital services."
      lastUpdated={new Date().toLocaleDateString()}
    >
      <section>
        <h2>1. No Physical Shipping</h2>
        <p>Deyzora Infotech operates strictly as a digital software engineering and design agency. We do not sell or ship physical products. Therefore, standard shipping rates, shipping carriers, and physical delivery times do not apply to our services.</p>
      </section>
      
      <section>
        <h2>2. Delivery of Digital Services</h2>
        <p>All project deliverables are provided electronically. Depending on the scope of your project, delivery methods may include:</p>
        <ul>
          <li><strong>Websites & Web Applications:</strong> Deployed directly to production servers (e.g., Vercel, AWS, DigitalOcean) or standard hosting providers as agreed upon in the project scope.</li>
          <li><strong>Source Code:</strong> Delivered via secure Git repositories (GitHub, GitLab) or as compressed archives via secure cloud storage.</li>
          <li><strong>Design Assets:</strong> Delivered via Figma links, Adobe Creative Cloud, or direct cloud storage downloads.</li>
        </ul>
      </section>

      <section>
        <h2>3. Delivery Timelines</h2>
        <p>While physical shipping timelines do not apply, digital delivery timelines are strictly governed by the initial project proposal. Final delivery (deployment or code handoff) occurs only after the final invoice has been paid in full.</p>
      </section>
    </LegalLayout>
  );
};

export default ShippingPolicy;
