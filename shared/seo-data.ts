const SITE_NAME = "Abbie Street Photo & Video";

export const pageSEO = {
  home: {
    title: `${SITE_NAME} | Luxury Wedding Photography`,
    description:
      "Luxury wedding photography and cinematography in the United States and worldwide destinations. Abbie Street captures timeless, editorial imagery for discerning couples.",
  },
  portfolio: {
    title: `Wedding Photography Portfolio | ${SITE_NAME}`,
    description:
      "Browse our curated wedding photography and cinematography portfolio. Timeless, editorial imagery from celebrations across the United States.",
  },
  reviews: {
    title: `Reviews & Testimonials | ${SITE_NAME}`,
    description:
      "Read reviews from couples who trusted Abbie Street for their wedding photography. 5-star rated across verified reviews.",
  },
  about: {
    title: `About Us | ${SITE_NAME}`,
    description:
      "Meet the Abbie Street collective — a curated network of distinguished wedding photographers and cinematographers dedicated to artistry and excellence.",
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
      "Book a complimentary 20-minute discovery call to discuss your wedding vision. Schedule your consultation with Abbie Street today.",
  },
  howItWorks: {
    title: `How It Works | ${SITE_NAME}`,
    description:
      "Discover the Abbie Street experience — from style consultation to artist matching. A thoughtfully designed process for extraordinary wedding photography.",
  },
  styleQuiz: {
    title: `Wedding Photography Style Quiz | ${SITE_NAME}`,
    description:
      "Take our 2-minute style quiz to discover your wedding photography aesthetic and get matched with your ideal artist.",
  },
  terms: {
    title: `Terms of Service | ${SITE_NAME}`,
    description:
      "Terms of service for Abbie Street Photo & Video wedding photography and cinematography services.",
  },
  privacy: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description:
      "Privacy policy for Abbie Street Photo & Video. Learn how we collect, use, and protect your personal information.",
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

export const routeSEOMap: Record<string, { title: string; description: string }> = {
  "/": pageSEO.home,
  "/portfolio": pageSEO.portfolio,
  "/reviews": pageSEO.reviews,
  "/about": pageSEO.about,
  "/pricing": pageSEO.pricing,
  "/packages": pageSEO.packages,
  "/schedule": pageSEO.schedule,
  "/how-it-works": pageSEO.howItWorks,
  "/style-quiz": pageSEO.styleQuiz,
  "/terms": pageSEO.terms,
  "/privacy": pageSEO.privacy,
  "/dallas": pageSEO.dallas,
  "/austin": pageSEO.austin,
  "/houston": pageSEO.houston,
  "/san-antonio": pageSEO.sanAntonio,
};
