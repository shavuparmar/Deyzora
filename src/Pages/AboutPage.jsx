import AboutImage from "../assets/AboutImage.jpg"; // Replace with your image
import FooterSection from "../Common/FooterSection";
import NavBar from "../Common/NavBar"
export default function AboutSection() {
  return (
    <>
    <NavBar/>
    <div className="flex flex-col lg:flex-row items-center gap-10 py-20 px-6 mb-10 lg:px-20 ">
      {/* Image Side */}
      <div className="flex-shrink-0 w-full lg:w-1/2">
        <img
          src={AboutImage}
          alt="About Deyzora"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>

      {/* Text Side */}
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-blue-950">
          About Deyzora
        </h2>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4">
          At Deyzora, we are passionate about crafting digital experiences that leave a lasting impact.
          Founded with the vision of transforming ideas into visually stunning, user-centric designs, we
          specialize in web design, UI/UX development, and creative digital solutions that empower
          businesses to stand out in the digital landscape.
        </p>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4">
          Our team of experienced designers and developers works closely with each client to understand
          their unique brand identity, goals, and target audience. We believe that design is not just about
          aesthetics—it’s about functionality, engagement, and storytelling. Every project we undertake
          combines strategic thinking, cutting-edge technology, and creative innovation to deliver a
          digital experience that is both beautiful and intuitive.
        </p>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4">
          From responsive websites and interactive web apps to branding, social media creatives, and marketing
          visuals, Deyzora ensures every design element serves a purpose. Our process is meticulous: we research,
          prototype, test, and refine until we achieve a product that exceeds expectations.
        </p>

        {/* Mission */}
        <h3 className="text-2xl font-semibold mt-6 mb-2 text-blue-950">Our Mission</h3>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4">
          To empower brands with innovative, visually compelling, and user-friendly digital experiences that
          drive growth, engagement, and lasting connections.
        </p>

        {/* Vision */}
        <h3 className="text-2xl font-semibold mt-6 mb-2 text-blue-950">Our Vision</h3>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg">
          To become a leading creative agency known for pushing boundaries in design, technology, and digital
          storytelling.
        </p>
      </div>
    </div>
    <FooterSection/>
    </>
  );
}
