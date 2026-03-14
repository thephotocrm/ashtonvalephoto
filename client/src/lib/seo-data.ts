import { aggregateRating } from "./reviews-data";

export { pageSEO } from "@shared/seo-data";
import { pageSEO } from "@shared/seo-data";

const SITE_URL = "https://abbiestreetphoto.com";

export const aggregateRatingSchema = {
  "@type": "AggregateRating",
  ratingValue: String(aggregateRating.average),
  bestRating: "5",
  ratingCount: String(aggregateRating.count),
  reviewCount: String(aggregateRating.count),
};

export function cityLocalBusinessSchema(city: {
  name: string;
  state: string;
  seoKey: keyof typeof pageSEO;
  urlPath: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: `Abbie Street Photo & Video — ${city.name}`,
    description: pageSEO[city.seoKey]?.description ?? "",
    url: `${SITE_URL}/${city.urlPath}`,
    telephone: "(972) 249-7048",
    email: "inquire@abbiestreetphoto.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: city.state,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    serviceType: [
      "Wedding Photography",
      "Cinematography",
      "Engagement Sessions",
    ],
    priceRange: "$$$",
    image: `${SITE_URL}/opengraph.jpg`,
    aggregateRating: aggregateRatingSchema,
    sameAs: [
      "https://www.instagram.com/abbiestreetphoto",
      "https://www.facebook.com/people/Abbie-Street-Photo-Video/61587390063273/",
    ],
  };
}
