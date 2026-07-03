import { XCircle } from'lucide-react';
import LegalLayout from'../components/layout/LegalLayout';

const CancellationPolicy = () => {
  return (
    <LegalLayout
      title="Cancellation Policy"
      icon={XCircle}
      description="Guidelines for cancelling an ongoing project with Deyzora Infotech."
      lastUpdated={new Date().toLocaleDateString()}
    >
      <section>
        <h2>1. Cancellation by the Client</h2>
        <p>Clients may request the cancellation of an ongoing project at any time by providing written notice to our official email address. However, please be aware of the financial implications:</p>
        <ul>
          <li>The initial 50% upfront deposit is generally non-refundable once work has commenced.</li>
          <li>If the project is cancelled mid-way through development, the client will be billed for all work completed up to the date of cancellation at our standard hourly rate, which may exceed the initial deposit.</li>
          <li>Upon cancellation and settlement of all outstanding invoices, any completed design assets or source code will be transferred to the client.</li>
        </ul>
      </section>
      
      <section>
        <h2>2. Cancellation by Deyzora Infotech</h2>
        <p>We reserve the right to cancel a project under the following circumstances:</p>
        <ul>
          <li><strong>Breach of Contract:</strong> Failure to provide necessary content, credentials, or timely feedback within 30 days of a formal request.</li>
          <li><strong>Unprofessional Conduct:</strong> Hostile, abusive, or highly unprofessional communication directed at our team members.</li>
          <li><strong>Scope Creep Refusal:</strong> Continuous demands for work outside the agreed-upon scope without willingness to renegotiate the contract.</li>
        </ul>
        <p>In the event we initiate the cancellation due to client breach, no refunds will be issued, and the project will be considered closed.</p>
      </section>

      <section>
        <h2>3. Dormant Projects</h2>
        <p>If a project remains inactive for more than 45 days due to a lack of client response or content delivery, the project will be classified as"Dormant." Reactivating a dormant project may incur a restart fee to re-allocate engineering resources.</p>
      </section>
    </LegalLayout>
  );
};

export default CancellationPolicy;
