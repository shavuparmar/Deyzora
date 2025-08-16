import { Aboutimage } from "../assets/Images";
import FooterSection from "../Common/FooterSection";
import NavBar from "../Common/NavBar"



export default function ServicePage() {
  const services = [
    {
      title: "Web Design",
      description:
        "We create visually stunning and responsive websites that engage your audience and drive conversions.",
      image: Aboutimage,
    },
    {
      title: "UI/UX Design",
      description:
        "Our UI/UX designs focus on seamless user experiences, making your digital products intuitive and enjoyable.",
      image: Aboutimage,
    },
    {
      title: "Social Media Creatives",
      description:
        "We design eye-catching social media posts, banners, and campaigns to elevate your brand presence.",
      image: Aboutimage,
    },
    {
      title: "Branding & Identity",
      description:
        "From logos to complete brand guidelines, we help businesses craft a strong and memorable identity.",
      image:Aboutimage,
    },
    {
      title: "Digital Marketing",
      description:
        "Our team creates data-driven digital marketing strategies to grow your business online effectively.",
      image: Aboutimage,
    },
    {
      title: "Web App Development",
      description:
        "We develop interactive, secure, and scalable web applications tailored to your business needs.",
      image: Aboutimage,
    },
  ];

  return (
    <>
    <NavBar/>
    <div className="py-20 px-6 lg:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-blue-950">
          Our Services
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg">
          At Deyzora, we provide a full suite of digital solutions to help your
          brand stand out. Explore our range of services designed to meet
          your business goals.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            {service.image && (
              <img
                src={service.image}
                alt={service.title}
                className="w-24 h-24 mb-4 object-cover rounded-full"
              />
            )}
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-950">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    <FooterSection/>
    </>
  );
}
