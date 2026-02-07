import { useMemo } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { QuickLinks } from "@/components/QuickLinks";
import { AwardsBanner } from "@/components/AwardsBanner";
import { FeaturedPhotographers } from "@/components/FeaturedPhotographers";
import { WhyAshtonVale } from "@/components/WhyAshtonVale";
import { StyleTestCTA } from "@/components/StyleTestCTA";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { StorySection } from "@/components/StorySection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/use-seo";
import { pageSEO } from "@/lib/seo-data";
import { buildBreadcrumbJsonLd } from "@/components/SEOBreadcrumb";

export default function Home() {
  const breadcrumbJsonLd = useMemo(
    () => buildBreadcrumbJsonLd([{ label: "Home", href: "/" }]),
    [],
  );

  useSEO({
    title: pageSEO.home.title,
    description: pageSEO.home.description,
    canonical: "https://ashtonvalephoto.com/",
    jsonLd: breadcrumbJsonLd,
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
        <WhyAshtonVale />
        <ReviewsCarousel />
        <StyleTestCTA />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
