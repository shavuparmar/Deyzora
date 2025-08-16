import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Logo } from "../assets/Images"; // replace with your logo

export default function FooterSection() {
  return (
    <footer className="bg-white text-white py-12 -mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div className="flex flex-col items-start">
          <img src={Logo} alt="Deyzora Logo" className="w-32 mb-4" />
          <p className="text-gray-900 text-sm">
            Deyzora is a creative agency specializing in web design, UI/UX, and
            digital solutions to help brands grow online.
          </p>
          <div className="flex mt-4 gap-4 text-gray-900">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-black">Quick Links</h3>
          <ul className="space-y-2 text-gray-900">
            <li>
              <a href="#" className="hover:text-blue-700">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Policies / Sitemap */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-black">Policies</h3>
          <ul className="space-y-2 text-gray-900">
            <li>
              <a href="#" className="hover:text-red-600">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                FAQ
              </a>
            </li>
            <li>
              <a href="sitemap" className="hover:text-red-600">
                Site Map
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-black">Contact</h3>
          <p className="text-gray-900 mb-2">
            Email: shavuparmar63522@gmail.com
          </p>
          <p className="text-gray-900 mb-2">Phone: +91 12345 67890</p>
          <p className="text-gray-900">
            Address: 123, Your Street, City, Country
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-600 pt-6 text-center text-gray-900 text-sm">
        &copy; {new Date().getFullYear()} Deyzora. All rights reserved.
      </div>
    </footer>
  );
}
