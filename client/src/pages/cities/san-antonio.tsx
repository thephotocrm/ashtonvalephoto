import { useMemo } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Play, Sparkles, Clock, Heart } from "lucide-react";
import heroImg from "@assets/generated_images/soft_natural_light_aesthetic.png";
import ceremonyImg from "@assets/generated_images/bride_walking_aisle_ceremony.png";
import ringsImg from "@assets/generated_images/wedding_rings_on_roses.png";
import cakeImg from "@assets/generated_images/elegant_wedding_cake.png";
import { useSEO } from "@/hooks/use-seo";
import { pageSEO, cityLocalBusinessSchema } from "@/lib/seo-data";
import { SEOBreadcrumb, buildBreadcrumbJsonLd } from "@/components/SEOBreadcrumb";

export default function SanAntonio() {
  const jsonLd = useMemo(
    () => [
      buildBreadcrumbJsonLd([
        { label: "Home", href: "/" },
        { label: "San Antonio", href: "/san-antonio" },
      ]),
      cityLocalBusinessSchema({
        name: "San Antonio",
        state: "TX",
        slug: "sanAntonio",
      }),
    ],
    [],
  );

  useSEO({
    title: pageSEO.sanAntonio.title,
    description: pageSEO.sanAntonio.description,
    canonical: "https://ashtonvalephoto.com/san-antonio",
    jsonLd,
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <SEOBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "San Antonio" },
        ]}
      />
      <main className="flex-grow">
        {/* Cinematic Hero with Play Button Aesthetic */}
        <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${heroImg})` }}
          >
            <div className="absolute inset-0 bg-black/55"></div>
          </div>
          <div className="relative h-full container mx-auto px-8 flex flex-col items-center justify-center text-center">
            <p className="text-[10px] uppercase tracking-[0.5em] text-white/60 mb-8">San Antonio, Texas</p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light mb-8 text-white max-w-5xl leading-tight">
              San Antonio Wedding Photography & Film
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mb-12 leading-relaxed font-light">
              Where Spanish colonial romance meets modern Texas luxury
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button
                asChild
                size="lg"
                className="rounded-none bg-white hover:bg-white/90 text-neutral-900 px-12 py-7 text-[11px] uppercase tracking-[0.2em] font-medium hover:scale-[1.02] transition-all duration-300"
              >
                <Link href="/pricing">Plan Your Wedding</Link>
              </Button>
              <Link
                href="/portfolio"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <span className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Play size={18} fill="currentColor" />
                </span>
                <span className="text-sm uppercase tracking-[0.15em]">View Portfolio</span>
              </Link>
            </div>
          </div>
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="w-px h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-28 bg-white">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Sparkles size={32} className="mx-auto mb-8 text-primary" strokeWidth={1} />
              <h2 className="text-3xl md:text-5xl font-serif font-light mb-10 leading-tight">
                San Antonio is a city steeped in history, culture, and undeniable romance.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                From the candlelit pathways of the River Walk to the sun-drenched courtyards
                of historic missions, every corner of this city whispers stories of love.
                We're here to capture yours.
              </p>
            </div>
          </div>
        </section>

        {/* Three Image Grid with Text Overlay */}
        <section className="py-0 bg-ivory">
          <div className="grid md:grid-cols-3">
            <div className="relative group overflow-hidden">
              <img
                src={ceremonyImg}
                alt="Wedding ceremony in San Antonio"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                <div>
                  <h3 className="font-serif text-2xl text-white mb-2">Ceremonies</h3>
                  <p className="text-white/70 text-sm">Sacred moments, beautifully preserved</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden">
              <img
                src={ringsImg}
                alt="Wedding details"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                <div>
                  <h3 className="font-serif text-2xl text-white mb-2">Details</h3>
                  <p className="text-white/70 text-sm">Every meaningful element captured</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden">
              <img
                src={cakeImg}
                alt="Wedding reception details"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                <div>
                  <h3 className="font-serif text-2xl text-white mb-2">Celebrations</h3>
                  <p className="text-white/70 text-sm">Joy, laughter, and unforgettable moments</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Focus Section */}
        <section className="py-28 bg-white">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-6">Cultural Heritage</p>
                <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 leading-tight">
                  Honoring Traditions, Creating New Ones
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    San Antonio's rich cultural tapestry—from vibrant Mexican-American
                    traditions to elegant Texas ranch celebrations—inspires our approach
                    to wedding photography. We believe in honoring heritage while
                    creating timeless, modern imagery.
                  </p>
                  <p>
                    Whether your wedding includes a traditional lasso ceremony, a
                    mariachi-filled fiesta, or a refined Hill Country soirée, our
                    photographers adapt seamlessly to capture the authentic spirit
                    of your celebration.
                  </p>
                  <p>
                    We've documented weddings at San Antonio's most treasured venues
                    for years, building relationships and expertise that translate
                    into exceptional photography for every couple we serve.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-ivory p-8 border border-border/30">
                    <Clock size={24} className="text-primary mb-4" strokeWidth={1} />
                    <p className="font-serif text-lg mb-2">8+ Hours</p>
                    <p className="text-sm text-muted-foreground">Standard coverage</p>
                  </div>
                  <div className="bg-ivory p-8 border border-border/30">
                    <Heart size={24} className="text-primary mb-4" strokeWidth={1} />
                    <p className="font-serif text-lg mb-2">100%</p>
                    <p className="text-sm text-muted-foreground">Happy couples</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-ivory p-8 border border-border/30">
                    <p className="font-serif text-lg mb-2">2-3 Weeks</p>
                    <p className="text-sm text-muted-foreground">Sneak peek delivery</p>
                  </div>
                  <div className="bg-ivory p-8 border border-border/30">
                    <p className="font-serif text-lg mb-2">500+</p>
                    <p className="text-sm text-muted-foreground">Images delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Venues - Elegant List Style */}
        <section className="py-24 bg-neutral-900">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Featured Venues</p>
                <h2 className="text-3xl md:text-4xl font-serif font-light text-white">
                  San Antonio's Finest Wedding Destinations
                </h2>
              </div>
              <div className="divide-y divide-white/10">
                {[
                  { name: "Lost Mission", location: "Spring Branch" },
                  { name: "The Club at Garden Ridge", location: "Garden Ridge" },
                  { name: "Magnolia Halle", location: "Downtown" },
                  { name: "The Veranda", location: "Castle Hills" },
                  { name: "Kendall Plantation", location: "Boerne" },
                  { name: "Hotel Emma", location: "Pearl District" },
                  { name: "The St. Anthony", location: "Downtown" },
                  { name: "Eilan Hotel & Spa", location: "La Cantera" }
                ].map((venue) => (
                  <div
                    key={venue.name}
                    className="flex justify-between items-center py-5 text-white/80 hover:text-white transition-colors group"
                  >
                    <span className="font-serif text-lg">{venue.name}</span>
                    <span className="text-sm text-white/40 group-hover:text-white/60 transition-colors">
                      {venue.location}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-ivory">
          <div className="container mx-auto px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-light">
                  Why San Antonio Couples Choose Us
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                <div className="flex gap-6">
                  <span className="text-4xl font-serif text-primary/30 flex-shrink-0">01</span>
                  <div>
                    <h3 className="font-serif text-xl mb-3">Local Expertise</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Deep knowledge of San Antonio venues, lighting conditions,
                      and the unique rhythm of local celebrations.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="text-4xl font-serif text-primary/30 flex-shrink-0">02</span>
                  <div>
                    <h3 className="font-serif text-xl mb-3">Cultural Sensitivity</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Experience with diverse traditions and the ability to
                      honor customs while creating beautiful imagery.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="text-4xl font-serif text-primary/30 flex-shrink-0">03</span>
                  <div>
                    <h3 className="font-serif text-xl mb-3">Editorial Quality</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Magazine-worthy photography that elevates your wedding
                      while staying true to authentic moments.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="text-4xl font-serif text-primary/30 flex-shrink-0">04</span>
                  <div>
                    <h3 className="font-serif text-xl mb-3">White-Glove Service</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      A seamless experience from inquiry to delivery, with
                      dedicated support at every step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Unique Style */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-6">Ready to Begin?</p>
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 leading-tight">
                Your San Antonio love story deserves to be told beautifully.
              </h2>
              <p className="text-muted-foreground mb-12 leading-relaxed">
                We'd love to hear about your wedding plans. Reach out to check
                availability and receive a custom proposal.
              </p>
              <div className="inline-flex flex-col items-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-none bg-neutral-900 hover:bg-neutral-800 text-white px-14 py-8 text-[11px] uppercase tracking-[0.2em] font-medium hover:scale-[1.02] transition-all duration-300"
                >
                  <Link href="/pricing">Inquire Now</Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-6">
                  or call <a href="tel:9722497048" className="text-primary hover:underline">(972) 249-7048</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
