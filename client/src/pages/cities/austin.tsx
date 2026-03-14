import { useMemo } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Star, Award, Users } from "lucide-react";
import heroImg from "@assets/generated_images/romantic_garden_wedding_venue.png";
import coupleImg from "@assets/generated_images/first_look_moment.png";
import danceImg from "@assets/generated_images/couple_dancing_reception.png";
import { useSEO } from "@/hooks/use-seo";
import { pageSEO, cityLocalBusinessSchema } from "@/lib/seo-data";
import { SEOBreadcrumb, buildBreadcrumbJsonLd } from "@/components/SEOBreadcrumb";

export default function Austin() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Austin" },
  ];

  const jsonLd = useMemo(
    () => [
      buildBreadcrumbJsonLd(breadcrumbs),
      cityLocalBusinessSchema({ name: "Austin", state: "TX", seoKey: "austin", urlPath: "austin" }),
    ],
    [],
  );

  useSEO({
    title: pageSEO.austin.title,
    description: pageSEO.austin.description,
    canonical: "https://abbiestreetphoto.com/austin",
    jsonLd,
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <SEOBreadcrumb items={breadcrumbs} />
      <main className="flex-grow">
        {/* Split Hero Section */}
        <section className="min-h-[80vh] grid md:grid-cols-2">
          <div className="bg-neutral-900 flex items-center justify-center p-12 md:p-16 order-2 md:order-1">
            <div className="max-w-lg">
              <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-6">Austin, Texas</p>
              <h1 className="font-serif text-4xl md:text-5xl font-light mb-6 text-white leading-tight">
                Austin Wedding Photography
              </h1>
              <div className="w-12 h-px bg-primary mb-8"></div>
              <p className="text-lg text-white/60 mb-10 leading-relaxed">
                Where Texas Hill Country beauty meets vibrant city energy.
                We capture the eclectic spirit of Austin weddings with artistry
                and authenticity.
              </p>
              <Button
                asChild
                size="lg"
                className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-[11px] uppercase tracking-[0.2em] font-medium hover:scale-[1.02] transition-all duration-300"
              >
                <Link href="/pricing">Inquire for Austin</Link>
              </Button>
            </div>
          </div>
          <div
            className="min-h-[50vh] md:min-h-full bg-cover bg-center order-1 md:order-2"
            style={{ backgroundImage: `url(${heroImg})` }}
          ></div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 bg-ivory border-y border-border/30">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star size={18} className="text-primary" strokeWidth={1.5} />
                  <span className="text-3xl font-serif text-primary">4.9</span>
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Average Rating</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users size={18} className="text-primary" strokeWidth={1.5} />
                  <span className="text-3xl font-serif text-primary">200+</span>
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Austin Weddings</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award size={18} className="text-primary" strokeWidth={1.5} />
                  <span className="text-3xl font-serif text-primary">5</span>
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Austin Section */}
        <section className="py-28 bg-white">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Why Austin</p>
                <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
                  Capturing the Spirit of the Live Music Capital
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Austin's unique blend of laid-back sophistication and creative energy
                  makes it one of the most exciting wedding destinations in Texas.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    From the rolling hills of Dripping Springs to the urban elegance of downtown's
                    warehouse venues, Austin offers an extraordinary canvas for wedding photography.
                    The city's legendary sunsets paint the sky in hues of gold and amber, creating
                    natural magic for golden hour portraits.
                  </p>
                  <p>
                    Our Austin team understands what makes this city special. Whether you're
                    exchanging vows at a vineyard in the Hill Country, a historic mansion
                    on Congress Avenue, or a modern rooftop with skyline views, we adapt
                    our approach to honor your venue and vision.
                  </p>
                </div>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Austin couples tend to embrace creativity and authenticity. We love working
                    with partners who want their photos to feel genuine—capturing real laughter,
                    spontaneous moments, and the unique details that make your celebration yours.
                  </p>
                  <p>
                    The result is a collection that doesn't just document your day but tells
                    the story of who you are as a couple, set against the backdrop of one
                    of America's most beloved cities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image + Text Alternating */}
        <section className="py-20 bg-ivory">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-[4/3] md:aspect-auto">
                <img
                  src={coupleImg}
                  alt="First look moment in Austin"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-12 md:p-16 flex items-center">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-light mb-6">
                    Intimate First Looks
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Austin's diverse landscapes offer endless possibilities for private
                    first look moments. From secluded garden alcoves to dramatic cliff
                    overlooks, we scout locations that create the perfect backdrop for
                    these emotional exchanges.
                  </p>
                  <Link href="/portfolio" className="text-primary text-sm uppercase tracking-[0.2em] hover:underline">
                    View Gallery
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-white p-12 md:p-16 flex items-center order-2 md:order-1">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-light mb-6">
                    Reception Magic
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    When the dancing begins, our photographers become invisible storytellers,
                    capturing the joy and energy that Austin receptions are famous for.
                    Low-light expertise means every moment shines, from sparkler exits
                    to late-night celebrations.
                  </p>
                  <Link href="/reviews" className="text-primary text-sm uppercase tracking-[0.2em] hover:underline">
                    Read Reviews
                  </Link>
                </div>
              </div>
              <div className="relative aspect-[4/3] md:aspect-auto order-1 md:order-2">
                <img
                  src={danceImg}
                  alt="Reception dancing in Austin"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Venues */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-8">
            <div className="text-center mb-12">
              <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Local Expertise</p>
              <h2 className="text-3xl md:text-4xl font-serif font-light">
                Austin Venues We Love
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[
                "Ma Maison",
                "The Driskill",
                "Barr Mansion",
                "Camp Lucy",
                "Prospect House",
                "Allan House",
                "The Brodie Homestead",
                "Laguna Gloria",
                "Mercury Hall",
                "Hotel Van Zandt",
                "The Greenhouse at Driftwood",
                "Vista West Ranch"
              ].map((venue) => (
                <span
                  key={venue}
                  className="px-6 py-3 bg-ivory border border-border/50 text-sm text-muted-foreground hover:border-primary/30 transition-colors"
                >
                  {venue}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg})` }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          <div className="relative container mx-auto px-8 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-serif font-light mb-6">
              Your Austin Love Story Awaits
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
              Whether you're planning a Hill Country destination wedding or an intimate
              downtown celebration, we're ready to capture every beautiful moment.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-none bg-white hover:bg-white/90 text-neutral-900 px-12 py-7 text-[11px] uppercase tracking-[0.2em] font-medium hover:scale-[1.02] transition-all duration-300"
            >
              <Link href="/pricing">Start Planning</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
