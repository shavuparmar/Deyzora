import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title = "Deyzora Infotech | Premium Web Development & Design",
  description = "Deyzora Infotech builds high-performance, futuristic websites and digital experiences for modern businesses.",
  type = "website",
  schema = null,
  image = "/og-image.jpg"
}) => {
  const location = useLocation();
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://deyzora.online';
  const canonical = `${siteUrl}${location.pathname === '/' ? '' : location.pathname}`;
  const ogImageUrl = `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="theme-color" content="#3b82f6" />
      <meta name="author" content="Deyzora Infotech" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content="Deyzora Infotech" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Structured Data (Schema.org) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
