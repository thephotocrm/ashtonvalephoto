import { useMemo } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { QuickLinks } from "@/components/QuickLinks";
import { AwardsBanner } from "@/components/AwardsBanner";
import { FeaturedPhotographers } from "@/components/FeaturedPhotographers";
import { WhyAbbieStreet } from "@/components/WhyAbbieStreet";
import { StyleTestCTA } from "@/components/StyleTestCTA";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { StorySection } from "@/components/StorySection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/use-seo";
import { pageSEO, aggregateRatingSchema } from "@/lib/seo-data";
import { buildBreadcrumbJsonLd } from "@/components/SEOBreadcrumb";

export default function Home() {
  const jsonLd = useMemo(
    () => [
      buildBreadcrumbJsonLd([{ label: "Home", href: "/" }]),
      {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "ProfessionalService"],
        name: "Abbie Street Photo & Video",
        description: pageSEO.home.description,
        url: "https://abbiestreetphoto.com",
        telephone: "(214) 930-2270",
        email: "info@abbiestreet.com",
        address: {
          "@type": "PostalAddress",
          addressCountry: "US",
        },
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        serviceType: [
          "Wedding Photography",
          "Cinematography",
          "Engagement Sessions",
        ],
        priceRange: "$$$",
        image: "https://abbiestreetphoto.com/opengraph.jpg",
        aggregateRating: aggregateRatingSchema,
        sameAs: [
          "https://www.instagram.com/abbiestreetphoto",
          "https://www.facebook.com/people/Abbie-Street-Photo-Video/61587390063273/",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Abbie Street Photo & Video",
        url: "https://abbiestreetphoto.com",
        logo: "https://abbiestreetphoto.com/favicon.svg",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "(214) 930-2270",
          email: "info@abbiestreet.com",
          contactType: "customer service",
        },
        sameAs: [
          "https://www.instagram.com/abbiestreetphoto",
          "https://www.facebook.com/people/Abbie-Street-Photo-Video/61587390063273/",
        ],
      },
    ],
    [],
  );

  useSEO({
    title: pageSEO.home.title,
    description: pageSEO.home.description,
    canonical: "https://abbiestreetphoto.com/",
    jsonLd,
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <QuickLinks />
        <StorySection />
        <AwardsBanner />
        <FeaturedPhotographers />
        <WhyAbbieStreet />
        <ReviewsCarousel />
        <StyleTestCTA />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
