import { useState } from "react";
import FooterSection from "../Common/FooterSection";
import Navbar from "../Common/NavBar";
import { Aboutimage, Contactimg, PhotoshopEditing } from "../assets/Images";

import { Code } from "../assets/Images";

import { motion } from "framer-motion";

export default function LandingPage() {
  const ilertmssg = () => {
    alert(`This site is undercontruction try to react out Developer`);
  };
  const stats = [
    { label: "Projects Completed", value: "120+" },
    { label: "Happy Clients", value: "80+" },
    { label: "Awards Won", value: "15+" },
    { label: "Years of Experience", value: "5+" },
  ];

  const projects = [
    { img: Code, title: "Website Redesign", desc: "Modern UI/UX design" },
    { img: Code, title: "E-commerce App", desc: "User-friendly online store" },
    { img: Code, title: "Social Media Creatives", desc: "Branding & graphics" },
    { img: Code, title: "Social Media Creatives", desc: "Branding & graphics" },
    { img: Code, title: "Social Media Creatives", desc: "Branding & graphics" },
    {
      img: Code,
      title: "Landing Page Design",
      desc: "Conversion-focused layout",
    },
    // Add more projects as needed
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Company A",
      text: "Deyzora transformed our website into a stunning, user-friendly experience. Highly recommended!",
    },
    {
      name: "Jane Smith",
      role: "Marketing Manager, Company B",
      text: "Their team is creative, professional, and efficient. Our social media campaigns improved drastically.",
    },
    {
      name: "Mike Johnson",
      role: "Founder, Startup X",
      text: "Amazing design skills and attention to detail. The Deyzora team delivered above our expectations!",
    },
    // Add more testimonials as needed
  ];
  const loopTestimonials = [...testimonials, ...testimonials];
  const faqs = [
    {
      question: "What services does Deyzora provide?",
      answer:
        "We specialize in web design, UI/UX development, social media creatives, and branding solutions for businesses.",
    },
    {
      question: "How can I contact Deyzora?",
      answer:
        "You can reach us via email at shavuparmar63522@gmail.com or through our contact form on the website.",
    },
    {
      question: "Do you provide customized designs?",
      answer:
        "Yes! Every project is tailored to the client's brand, goals, and audience for a unique and effective solution.",
    },
    {
      question: "What is the typical turnaround time?",
      answer:
        "The timeline depends on the project size and complexity, but we always strive for timely delivery while maintaining quality.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! We'll get back to you soon.");
  };

  const brands = [Code, Code, Code, Code, Code, Code, Code];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row  items-center justify-between px-6 lg:px-20 py-10 gap-5">
        {/* Text Section */}
        <div className="text-center lg:text-left xl:ml-40">
          <h1 className="text-5xl   sm:text-6xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-blue-800  leading-tight">
            Deyzora
          </h1>
          <h6 className="text-xl   sm:text-2xl md:text-2xl lg:text-2xl text-slate-950 xl:text-2xl font-bold leading-tight">
            "Designs That Speak, Experiences That Last"
          </h6>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-md mx-auto lg:mx-0">
            Deyzora helps brands shine with stunning web design, intuitive
            UI/UX, and creative digital solutions tailored for modern
            businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-5 w-full sm:w-auto">
            <button
              className="cursor-pointer w-full sm:w-auto px-6 py-3 border-2 bg-blue-950 hover:bg-blue-800 text-white font-bold text-lg sm:text-xl rounded-xl"
              onClick={ilertmssg}
            >
              Get Started
            </button>
            <button
              className="cursor-pointer w-full sm:w-auto px-6 py-3 border-2 bg-red-600 text-white font-bold text-lg sm:text-xl rounded-xl"
              onClick={ilertmssg}
            >
              Explore Our Works
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:mr-50 xl:max-w-2xl">
          <img
            src={PhotoshopEditing}
            className="w-full h-auto rounded-2xl object-contain"
            alt="Editing"
          />
        </div>
      </div>

      <div className="py-20 px-6 ">
        <div className="text-center mb-5 -mt-10">
          <h2 className="text-4xl font-bold">Our Achievements</h2>
          <p className="mt-2 text-gray-600">
            A quick look at what we have accomplished
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center xl:gap-60 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-5xl font-bold text-blue-900">{stat.value}</h3>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-4xl   sm:text-5xl md:text-6xl lg:text-7xl xl:text-5xl text-center font-bold text-blue-800 mb-5  leading-tight">
        Brands work with Us
      </h1>
      <div
        style={{
          overflow: "hidden",
          // border: "1px solid #ddd",
          height: "120px",
          display: "flex", // flex container
          alignItems: "center", // vertical center
        }}
      >
        <motion.div
          className="flex items-center  "
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...brands, ...brands].map((logo, index) => (
            <div
              key={index}
              style={{
                minWidth: "200px",
                display: "flex", // flex inside each slide
                justifyContent: "center", // center horizontally
                alignItems: "center",
                // center vertically
              }}
            >
              <img
                src={logo}
                alt={`brand-${index}`}
                style={{ height: "80px", objectFit: "contain" }}
              />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="">
        <div className="py-20 px-6 ">
          {/* Section Header */}
          <div className="text-center mb-5 -mt-5">
            <h2 className="text-4xl font-bold">Our Projects</h2>
            <p className="mt-2 text-gray-600">
              A selection of projects we've successfully completed
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl  shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-gray-500">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:ml-60 -mt-10 justify-center items-center gap-8 py-20 px-5 lg:px-20">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src={Aboutimage}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[600px] rounded-xl"
            alt="Coder"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center   lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About</h2>
          <p className="text-gray-700 mb-4   text-sm sm:text-base md:text-lg">
            At Deyzora, we craft digital experiences that combine creativity,
            functionality, and strategy. We specialize in web design, UI/UX, and
            social media creatives, helping brands stand out and engage their
            audience effectively. Our team focuses on delivering beautiful,
            user-friendly designs tailored to each client’s goals. From
            responsive websites to branding and marketing visuals, we turn ideas
            into impactful, results-driven digital solutions. Our Mission:
            Empower brands with innovative, visually compelling, and
            user-friendly digital experiences.
          </p>
          <button
            className="cursor-pointer w-full sm:w-auto px-6 py-2 border-2 hover:bg-blue-800 bg-blue-950 text-white font-bold text-lg sm:text-xl rounded-lg"
            onClick={ilertmssg}
          >
            Read More
          </button>
        </div>
      </div>
      <div className="">
        <div className="py-20 px-4 sm:px-6 lg:px-20">
          <div className="max-w-5xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Client Testimonials
            </h2>
            <p className="mt-2 text-gray-600 text-sm sm:text-base md:text-lg">
              See what our clients have to say about us
            </p>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden">
  <motion.div
    className="flex gap-3 sm:gap-4 md:gap-6"
    animate={{ x: ["100%", "-200%"] }}
    transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
  >
    {loopTestimonials.map((testimonial, index) => (
      <motion.div
        key={index}
        className="w-60 sm:min-w-[220px] md:min-w-[300px] lg:min-w-[400px] bg-white border p-3 sm:p-4 md:p-6 rounded-xl shadow-lg flex-shrink-0"
      >
        <p className="text-gray-700 mb-2 text-xs sm:text-sm md:text-base">
          {testimonial.text}
        </p>
        <h3 className="font-bold text-xs sm:text-sm md:text-lg">{testimonial.name}</h3>
        {/* <p className="text-gray-500 text-xs sm:text-sm md:text-base">{testimonial.role}</p> */}
      </motion.div>
    ))}
  </motion.div>
</div>

        </div>
      </div>

      <div className="">
        <div className="py-20 px-6 -mt-15 ">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Frequently Asked Questions
            </h2>

            <div className="flex flex-col gap-4 text-left">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-semibold text-lg flex justify-between items-center">
                    {faq.question}
                    <span>{activeIndex === index ? "-" : "+"}</span>
                  </h3>
                  {activeIndex === index && (
                    <p className="mt-2 text-gray-700">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="py-20 px-6 -mt-20">
          <div className="max-w-7xl mx-auto  flex flex-col lg:flex-row items-center gap-10">
            {/* Left Side Image */}
            <div className="lg:w-1/2 w-full">
              <img
                src={Contactimg}
                alt="Contact Us"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* Right Side Form */}
            <div className="lg:w-1/2 w-full bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-600"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-600"
                  required
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-600"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  className="border-2 border-gray-300 rounded-lg p-3 h-32 resize-none focus:outline-none focus:border-blue-600"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-950 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
}
