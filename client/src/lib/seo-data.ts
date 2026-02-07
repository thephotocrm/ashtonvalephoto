import { aggregateRating } from "./reviews-data";

export { pageSEO } from "@shared/seo-data";
import { pageSEO } from "@shared/seo-data";

const SITE_URL = "https://ashtonvalephoto.com";

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
    name: `Ashton Vale Photo & Video — ${city.name}`,
    description: pageSEO[city.seoKey]?.description ?? "",
    url: `${SITE_URL}/${city.urlPath}`,
    telephone: "(972) 249-7048",
    email: "inquire@ashtonvalephoto.com",
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
      "https://www.instagram.com/ashtonvalephoto",
      "https://www.facebook.com/people/Ashton-Vale-Photo-Video/61587390063273/",
    ],
  };
}
