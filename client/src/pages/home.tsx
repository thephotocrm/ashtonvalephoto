import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { PromoBanner } from "@/components/PromoBanner";
import { QuickLinks } from "@/components/QuickLinks";
import { AwardsBanner } from "@/components/AwardsBanner";
import { FeaturedPhotographers } from "@/components/FeaturedPhotographers";
import { WhyAshtonVale } from "@/components/WhyAshtonVale";
import { StyleTestCTA } from "@/components/StyleTestCTA";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { StorySection } from "@/components/StorySection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <PromoBanner />
        <QuickLinks />
        <AwardsBanner />
        <FeaturedPhotographers />
        <WhyAshtonVale />
        <StyleTestCTA />
        <ReviewsCarousel />
        <StorySection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
