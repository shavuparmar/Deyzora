import React, { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";

const faqs = [
  {
    question: "What is your service about?",
    answer:
      "We provide high-quality web solutions, including web design, development, and digital services to help your business grow.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach us through the contact form on our website or email us at support@example.com. Our team usually responds within 24 hours.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer refunds within 7 days of purchase if you are not satisfied with our service. Please check our refund policy for more details.",
  },
  {
    question: "Is my personal information safe with you?",
    answer:
      "Absolutely. We value your privacy and use secure systems to ensure your personal data is protected at all times.",
  },
  {
    question: "Do you offer custom solutions?",
    answer:
      "Yes, we provide tailored solutions depending on your project requirements. Contact us with your needs and we'll create a custom plan.",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();
  const Handleback = () => {
    navigate(-1);
  };

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-8 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        <div className="flex items-center gap-2 cursor-pointer" onClick={Handleback}>
          <FaArrowAltCircleLeft size={18} />
          <span className="text-black text-xl font-semibold">Back</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-center mb-10">
          Here are some of the most common questions we receive. Click on a
          question to view the answer.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm transition bg-gray-50"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <span className="text-gray-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
