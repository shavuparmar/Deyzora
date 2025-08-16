export default function SitemapSection() {
  const sitemapLinks = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Services", url: "/service" },
    { title: "Projects", url: "/projects" },
    { title: "Contact", url: "/contact" },
    { title: "Privacy Policy", url: "/privacypolicy" },
    { title: "Terms & Conditions", url: "/termsandcondition" },
    { title: "FAQ", url: "FAQ" },
  ];

  return (
    <div className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Sitemap</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center">
          {sitemapLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-gray-700 hover:text-blue-950 transition-colors"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
