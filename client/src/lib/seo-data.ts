const SITE_NAME = "Ashton Vale Photo & Video";
const SITE_URL = "https://ashtonvalephoto.com";

export const pageSEO = {
  home: {
    title: `${SITE_NAME} | Luxury Wedding Photography`,
    description:
      "Luxury wedding photography and cinematography in the United States and worldwide destinations. Ashton Vale captures timeless, editorial imagery for discerning couples.",
  },
  portfolio: {
    title: `Wedding Photography Portfolio | ${SITE_NAME}`,
    description:
      "Browse our curated wedding photography and cinematography portfolio. Timeless, editorial imagery from celebrations across the United States.",
  },
  reviews: {
    title: `Reviews & Testimonials | ${SITE_NAME}`,
    description:
      "Read reviews from couples who trusted Ashton Vale for their wedding photography. 4.9-star rating across 100+ verified reviews.",
  },
  about: {
    title: `About Us | ${SITE_NAME}`,
    description:
      "Meet the Ashton Vale collective — a curated network of distinguished wedding photographers and cinematographers dedicated to artistry and excellence.",
  },
  pricing: {
    title: `Wedding Photography Pricing | ${SITE_NAME}`,
    description:
      "View pricing and check availability for luxury wedding photography and cinematography packages. Bespoke collections starting at $2,495.",
  },
  packages: {
    title: `Wedding Photography Packages | ${SITE_NAME}`,
    description:
      "Explore our signature wedding photography and cinematography collections. Documentary, photography, cinematography, and elopement packages available.",
  },
  schedule: {
    title: `Schedule a Consultation | ${SITE_NAME}`,
    description:
      "Book a complimentary 20-minute discovery call to discuss your wedding vision. Schedule your consultation with Ashton Vale today.",
  },
  howItWorks: {
    title: `How It Works | ${SITE_NAME}`,
    description:
      "Discover the Ashton Vale experience — from style consultation to artist matching. A thoughtfully designed process for extraordinary wedding photography.",
  },
  styleQuiz: {
    title: `Wedding Photography Style Quiz | ${SITE_NAME}`,
    description:
      "Take our 2-minute style quiz to discover your wedding photography aesthetic and get matched with your ideal artist.",
  },
  terms: {
    title: `Terms of Service | ${SITE_NAME}`,
    description:
      "Terms of service for Ashton Vale Photo & Video wedding photography and cinematography services.",
  },
  privacy: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description:
      "Privacy policy for Ashton Vale Photo & Video. Learn how we collect, use, and protect your personal information.",
  },
  dallas: {
    title: `Dallas Wedding Photographer | ${SITE_NAME}`,
    description:
      "Luxury wedding photography in Dallas, TX. From the Arts District to Highland Park, we capture timeless moments at Dallas's most prestigious venues.",
  },
  austin: {
    title: `Austin Wedding Photographer | ${SITE_NAME}`,
    description:
      "Austin wedding photography capturing the spirit of Texas Hill Country. Editorial and documentary coverage at Austin's finest venues.",
  },
  houston: {
    title: `Houston Wedding Photographer | ${SITE_NAME}`,
    description:
      "Sophisticated Houston wedding photography for the nation's most diverse city. From Museum District elegance to Montrose charm.",
  },
  sanAntonio: {
    title: `San Antonio Wedding Photographer | ${SITE_NAME}`,
    description:
      "San Antonio wedding photography where Spanish colonial romance meets modern Texas luxury. Capturing love stories along the River Walk and beyond.",
  },
} as const;

export const aggregateRatingSchema = {
  "@type": "AggregateRating",
  ratingValue: "4.9",
  bestRating: "5",
  ratingCount: "100",
  reviewCount: "100",
};

export function cityLocalBusinessSchema(city: {
  name: string;
  state: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: `Ashton Vale Photo & Video — ${city.name}`,
    description: pageSEO[city.slug as keyof typeof pageSEO]?.description ?? "",
    url: `${SITE_URL}/${city.slug}`,
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
