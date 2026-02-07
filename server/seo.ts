import { routeSEOMap, pageSEO } from "@shared/seo-data";

const SITE_URL = "https://ashtonvalephoto.com";

const localBusinessJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Ashton Vale Photo & Video",
  description: pageSEO.home.description,
  url: SITE_URL,
  telephone: "(972) 249-7048",
  email: "inquire@ashtonvalephoto.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: ["Wedding Photography", "Cinematography", "Engagement Sessions"],
  priceRange: "$$$",
  image: `${SITE_URL}/opengraph.jpg`,
  sameAs: [
    "https://www.instagram.com/ashtonvalephoto",
    "https://www.facebook.com/people/Ashton-Vale-Photo-Video/61587390063273/",
  ],
});

const organizationJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ashton Vale Photo & Video",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "(972) 249-7048",
    email: "inquire@ashtonvalephoto.com",
    contactType: "customer service",
  },
  sameAs: [
    "https://www.instagram.com/ashtonvalephoto",
    "https://www.facebook.com/people/Ashton-Vale-Photo-Video/61587390063273/",
  ],
});

export function injectMetaTags(html: string, url: string): string {
  // Strip query strings and hashes for lookup
  const path = url.split("?")[0].split("#")[0];
  const seo = routeSEOMap[path];

  if (!seo) return html;

  const canonicalUrl = `${SITE_URL}${path === "/" ? "/" : path}`;

  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(seo.title)}</title>`,
  );

  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${escapeAttr(seo.description)}">`,
  );

  html = html.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${escapeAttr(seo.title)}" />`,
  );

  html = html.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${escapeAttr(seo.description)}" />`,
  );

  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${escapeAttr(canonicalUrl)}" />`,
  );

  html = html.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${escapeAttr(seo.title)}" />`,
  );

  html = html.replace(
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${escapeAttr(seo.description)}" />`,
  );

  html = html.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${escapeAttr(canonicalUrl)}" />`,
  );

  // For the home page, inject LocalBusiness JSON-LD so crawlers see it
  if (path === "/") {
    html = html.replace(
      "</head>",
      `<script type="application/ld+json">${localBusinessJsonLd}</script>\n<script type="application/ld+json">${organizationJsonLd}</script>\n</head>`,
    );
  }

  return html;
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeAttr(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}
