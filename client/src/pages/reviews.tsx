import { useMemo } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Quote } from "lucide-react";
import reviewsHeroImg from "@assets/generated_images/first_look_moment.png";
import { useSEO } from "@/hooks/use-seo";
import { pageSEO, aggregateRatingSchema } from "@/lib/seo-data";
import { buildBreadcrumbJsonLd } from "@/components/SEOBreadcrumb";
import { reviews, aggregateRating } from "@/lib/reviews-data";

export default function Reviews() {
  const jsonLd = useMemo(
    () => [
      buildBreadcrumbJsonLd([
        { label: "Home", href: "/" },
        { label: "Reviews", href: "/reviews" },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Ashton Vale Photo & Video",
        aggregateRating: aggregateRatingSchema,
      },
    ],
    [],
  );

  useSEO({
    title: pageSEO.reviews.title,
    description: pageSEO.reviews.description,
    canonical: "https://ashtonvalephoto.com/reviews",
    jsonLd,
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden bg-neutral-900">
          <div className="container mx-auto px-8 text-center text-white">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/50 mb-4">Testimonials</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-white">
              In Their Words
            </h1>
            <div className="w-16 h-px bg-white/30 mx-auto mb-6"></div>
            <p className="text-lg text-white/60 max-w-xl mx-auto font-light">
              The greatest honor is earning the trust of discerning couples
              on their most important day.
            </p>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-ivory p-8 border border-border/30 shadow-luxury hover:border-primary/20 transition-all duration-500"
                >
                  <Quote size={28} className="text-primary/30 mb-6" strokeWidth={1} />
                  <p className="font-serif text-foreground/80 leading-relaxed italic mb-8">
                    <span className="text-primary/40 text-xl font-serif">"</span>
                    {review.quote}
                    <span className="text-primary/40 text-xl font-serif">"</span>
                  </p>
                  <div className="border-t border-border/50 pt-6">
                    <p className="font-serif text-lg mb-1">{review.couple}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-ivory">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute inset-4 border border-primary/20"></div>
                <img
                  src={reviewsHeroImg}
                  alt="Intimate wedding moment"
                  className="relative w-full shadow-luxury-lg"
                />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Our Legacy</p>
                <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">
                  Trusted by Thousands
                </h2>
                <p className="text-muted-foreground mb-10 leading-relaxed">
                  For half a decade, we've had the privilege of documenting love stories
                  across the country's most distinguished venues. Our couples' words are our
                  greatest testament.
                </p>
                <div className="grid grid-cols-3 gap-8 mb-10">
                  <div className="text-center">
                    <p className="text-4xl font-serif text-primary mb-2">{aggregateRating.count}</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Reviews</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-serif text-primary mb-2">{aggregateRating.average.toFixed(1)}</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Rating</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-serif text-primary mb-2">5+</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Years</p>
                  </div>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-[11px] uppercase tracking-[0.2em] font-medium hover:shadow-luxury hover:scale-[1.02] transition-all duration-300"
                >
                  <Link href="/pricing">
                    Begin Your Story
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
