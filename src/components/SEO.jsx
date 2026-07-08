import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title = "Deyzora Infotech | Premium Website Development in Surat",
  description = "We engineer high-performance websites, web applications, and brand identities that drive real business growth. Based in Surat, built for the world.",
  keywords = "Website Development Surat, Web Design Company Surat, React Development, SEO Services Gujarat",
  image = "https://deyzorainfotech.com/og-image.jpg",
  url = "https://deyzorainfotech.com",
  type = "website"
}) {
  const siteName = "Deyzora Infotech";

  // Base Schema for Organization / LocalBusiness
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteName,
    "image": image,
    "description": description,
    "url": url,
    "telephone": "+919879001603",
    "email": "hello@deyzorainfotech.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "413, Milestone Canal Road",
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "postalCode": "395010",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.1702, // Approximate Surat latitude
      "longitude": 72.8311 // Approximate Surat longitude
    },
    "priceRange": "₹₹",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:30",
      "closes": "18:30"
    }
  };

  // Article schema if type is article
  const articleSchema = type === 'article' ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "image": [image],
    "author": {
      "@type": "Organization",
      "name": siteName,
      "url": url
    },
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "logo": {
        "@type": "ImageObject",
        "url": `${url}/logo.png`
      }
    },
    "description": description
  } : null;

  return (
    <Helmet>
      {/* Standard Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(baseSchema)}
      </script>
      
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
    </Helmet>
  );
}
