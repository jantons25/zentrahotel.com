// Genera los datos estructurados Schema.org (Hotel / LocalBusiness) del sitio.
import { siteConfig } from "@/config/site";

export function buildHotelJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phoneDisplay,
    email: siteConfig.contact.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Leoncio Prado 919",
      addressLocality: "Chiclayo",
      addressRegion: "Lambayeque",
      addressCountry: "PE",
    },
    hasMap: siteConfig.contact.mapShareUrl,
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.tiktok,
    ],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Wi-Fi 5G", value: true },
      { "@type": "LocationFeatureSpecification", name: "Jacuzzi", value: true },
      {
        "@type": "LocationFeatureSpecification",
        name: "Desayuno americano",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Pet-friendly",
        value: true,
      },
    ],
  };
}

// Datos estructurados de un artículo del diario (Schema.org BlogPosting).
export function buildArticleJsonLd(input: {
  url: string;
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  authorName: string;
  section: string;
  locale: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    image: [`${siteConfig.url}${input.image}`],
    datePublished: input.publishedAt,
    dateModified: input.publishedAt,
    inLanguage: input.locale,
    articleSection: input.section,
    mainEntityOfPage: { "@type": "WebPage", "@id": input.url },
    author: { "@type": "Organization", name: input.authorName },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo-zentra.png`,
      },
    },
  };
}
