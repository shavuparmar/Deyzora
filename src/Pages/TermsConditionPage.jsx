import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
export default function TermsConditionPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Goes back one step in browser history
  };
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-8 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleBack}
        >
          <FaArrowAltCircleLeft size={18} />
          <span className="text-black text-xl font-semibold">Back</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Please read these Terms & Conditions carefully before using our
          website or services. By accessing or using our services, you agree to
          be bound by these terms.
        </p>

        {/* Section 1 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600">
            By accessing or using our services, you acknowledge that you have
            read, understood, and agree to be bound by these Terms & Conditions
            and our Privacy Policy.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            2. Use of Services
          </h2>
          <p className="text-gray-600">
            You agree to use our services only for lawful purposes and in a way
            that does not infringe the rights of others or restrict their use
            and enjoyment of our services. Any unauthorized use may result in
            termination of access.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            3. Intellectual Property Rights
          </h2>
          <p className="text-gray-600">
            All content, trademarks, and other intellectual property displayed
            on our website are the property of their respective owners. You may
            not reproduce, distribute, or use them without proper authorization.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            4. Limitation of Liability
          </h2>
          <p className="text-gray-600">
            We are not responsible for any damages, losses, or claims arising
            from the use of our website or services. All services are provided
            on an “as is” and “as available” basis.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            5. User Responsibilities
          </h2>
          <p className="text-gray-600">
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities that occur under your
            account. Any misuse of our services will be at your own risk.
          </p>
        </div>

        {/* Section 6 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            6. Third-Party Links
          </h2>
          <p className="text-gray-600">
            Our website may include links to third-party websites. We are not
            responsible for the content or practices of these external sites and
            encourage you to read their terms and conditions.
          </p>
        </div>

        {/* Section 7 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            7. Changes to Terms
          </h2>
          <p className="text-gray-600">
            We may update these Terms & Conditions at any time. Any changes will
            be posted on this page with an updated “Last Updated” date. Your
            continued use of our services indicates your acceptance of such
            changes.
          </p>
        </div>

        {/* Section 8 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            8. Governing Law
          </h2>
          <p className="text-gray-600">
            These Terms & Conditions shall be governed by and construed in
            accordance with the laws of your country or state of residence,
            without regard to its conflict of law provisions.
          </p>
        </div>

        {/* Section 9 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            9. Contact Us
          </h2>
          <p className="text-gray-600">
            If you have any questions or concerns about these Terms &
            Conditions, please contact us at:
          </p>
          <p className="text-gray-600 mt-2">
            📧 Email: <span className="font-medium">support@example.com</span>
          </p>
          <p className="text-gray-600">
            📍 Address:{" "}
            <span className="font-medium">
              123 Web Street, Tech City, India
            </span>
          </p>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-8">
          <p>Last Updated: August 2025</p>
        </div>
      </div>
    </div>
  );
}
