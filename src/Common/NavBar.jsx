import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional icon lib
import MainLogo from "../assets/MainLogo.png";

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-100 shadow">
      <div className="w-full flex items-center justify-between px-5 py-4">
        {/* Logo */}
        <img src={MainLogo} alt="Main Logo" className=" h-18 md:h-24 w-auto transition-all" />

        {/* Hamburger Icon (Mobile Only) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Nav Links - Desktop */}
        <nav className="hidden md:flex gap-6 text-xl font-medium mr-5">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/services" className="hover:text-blue-600">Services</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>
      </div>

      {/* Nav Links - Mobile Dropdown */}
      {isOpen && (
        <nav className="md:hidden px-5 pb-4">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </ul>
        </nav>
      )}
    </header>
  );
}
