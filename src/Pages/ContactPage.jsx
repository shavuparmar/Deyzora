import React from "react";
import NavBar from "../Common/NavBar";
import {Contactimg} from "../assets/Images"; // Replace with your image
import FooterSection from "../Common/FooterSection";

export default function ContactPage() {
  return (
    <>
      <NavBar />

      <div className="flex flex-col lg:flex-row items-center gap-10 py-20 px-6 lg:px-20 bg-gray-50">
        {/* Left Side - Image */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <img
            src={Contactimg}
            alt="Contact Us"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-blue-950 text-center lg:text-left">
            Get in Touch
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-8 text-center lg:text-left">
            Have a project or query? Fill out the form below and our team will get back to you as soon as possible.
          </p>

          <form className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              type="text"
              placeholder="Phone Number"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-blue-950 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Submit
            </button>
          </form>

          {/* Optional contact details */}
          <div className="mt-10 text-gray-700 text-sm sm:text-base md:text-lg space-y-2 text-center lg:text-left">
            <p><strong>Email:</strong> contact@deyzora.com</p>
            <p><strong>Phone:</strong> +91 12345 67890</p>
            <p><strong>Address:</strong> 123 Digital Street, Ahmedabad, India</p>
          </div>
        </div>
      </div>
      <FooterSection/>
    </>
  );
}
