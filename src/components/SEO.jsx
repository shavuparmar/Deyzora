import React from 'react';
import { Helmet } from 'react-helmet-async';
import { companyInfo } from '../data/company';

export default function SEO({ 
  title = `${companyInfo.name} | Best Website Development Company in Surat`,
  description = "Top-rated Web Design & Development Company in Surat, Gujarat. We engineer high-performance websites, custom web apps, and React JS solutions for growing businesses.",
  keywords = "Website Development Company in Surat, Web Development Company in Surat, Best Website Developer in Surat, Website Designer in Surat, Web Design Company in Surat, WordPress Development in Surat, React JS Development in Surat, Custom Web Application Development in Surat, Graphic Design Services in Surat, Logo Design Company in Surat, Affordable Website Development in Surat, Business Website Development in Gujarat, Website Development Near Me, Deyzora Infotech Surat",
  image = "https://deyzorainfotech.com/og-image.jpg",
  url = "https://deyzorainfotech.com",
  type = "website",
  faqData = null,
  breadcrumbsData = null,
  serviceData = null,
  isBlog = false
}) {
  const siteName = companyInfo.name;

  // Base Schema for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "url": "https://deyzorainfotech.com",
    "logo": "https://deyzorainfotech.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": companyInfo.phone,
      "contactType": "customer service"
    },
    "sameAs": [
      companyInfo.instagramUrl,
      companyInfo.linkedinUrl
    ]
  };

  // Base Schema for LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteName,
    "image": image,
    "description": description,
    "url": url,
    "telephone": companyInfo.phone,
    "email": companyInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "413, Milestone Canal Road",
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "postalCode": "395010",
      "addressCountry": "IN"
    },
    "areaServed": [
      "Surat", "Kim", "Bharuch", "Ankleshwar", "Bardoli", 
      "Navsari", "Valsad", "Kosamba", "Olpad", "Kamrej", 
      "Sachin", "Palsana", "Gujarat"
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.1702, 
      "longitude": 72.8311 
    },
    "priceRange": "₹₹",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ],
      "opens": "10:00",
      "closes": "18:00"
    }
  };

  // Dynamic Schemas
  const articleSchema = isBlog ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
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
        "url": `https://deyzorainfotech.com/logo.png`
      }
    },
    "description": description
  } : null;

  const faqSchema = faqData ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const breadcrumbSchema = breadcrumbsData ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbsData.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  } : null;

  const serviceItemSchema = serviceData ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceData.name,
    "description": serviceData.description,
    "provider": {
      "@type": "Organization",
      "name": siteName
    }
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

      {/* Structured Data Scripts */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
      
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}

      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {serviceItemSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceItemSchema)}
        </script>
      )}
    </Helmet>
  );
}
