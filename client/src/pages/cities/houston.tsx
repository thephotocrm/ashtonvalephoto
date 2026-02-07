import { useMemo } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Quote, ChevronRight } from "lucide-react";
import heroImg from "@assets/generated_images/historic_grand_ballroom_venue.png";
import brideImg from "@assets/generated_images/bride_holding_bouquet.png";
import { useSEO } from "@/hooks/use-seo";
import { pageSEO, cityLocalBusinessSchema } from "@/lib/seo-data";
import { SEOBreadcrumb, buildBreadcrumbJsonLd } from "@/components/SEOBreadcrumb";

export default function Houston() {
  const jsonLd = useMemo(
    () => [
      buildBreadcrumbJsonLd([
        { label: "Home", href: "/" },
        { label: "Houston", href: "/houston" },
      ]),
      cityLocalBusinessSchema({ name: "Houston", state: "TX", slug: "houston" }),
    ],
    [],
  );

  useSEO({
    title: pageSEO.houston.title,
    description: pageSEO.houston.description,
    canonical: "https://ashtonvalephoto.com/houston",
    jsonLd,
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <SEOBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Houston" },
        ]}
      />
      <main className="flex-grow">
        {/* Minimal Centered Hero */}
        <section className="pt-32 pb-20 bg-neutral-900 text-center">
          <div className="container mx-auto px-8">
            <p className="text-[10px] uppercase tracking-[0.5em] text-primary mb-8">Houston, Texas</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-8 text-white max-w-4xl mx-auto leading-tight">
              Houston Wedding Photographer
            </h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
              Sophisticated imagery for the nation's most diverse city. From Museum District elegance
              to Montrose charm, we document Houston weddings with refined artistry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-[11px] uppercase tracking-[0.2em] font-medium hover:scale-[1.02] transition-all duration-300"
              >
                <Link href="/pricing">Check Availability</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-white/20 text-white hover:bg-white/5 px-10 py-6 text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300"
              >
                <Link href="/portfolio">View Work</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Full Width Image */}
        <section className="h-[50vh] min-h-[400px]">
          <img
            src={heroImg}
            alt="Luxury Houston wedding venue"
            className="w-full h-full object-cover"
          />
        </section>

        {/* Intro Content */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-light mb-8">
                The Energy Capital Deserves Exceptional Wedding Photography
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Houston's world-class venues and multicultural celebrations demand photographers
                  who understand both grandeur and nuance. Our team brings editorial precision
                  to every wedding, whether you're hosting 50 guests or 500.
                </p>
                <p>
                  From the classic elegance of River Oaks to the industrial chic of the
                  East End, Houston offers an incredible diversity of wedding venues.
                  We've photographed at the finest—and we bring insider knowledge of
                  lighting, timing, and logistics to every celebration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Horizontal Feature Cards */}
        <section className="py-20 bg-ivory">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-3 gap-0 border border-border/50">
              <div className="p-12 bg-white border-b md:border-b-0 md:border-r border-border/50">
                <span className="text-6xl font-serif text-primary/20 block mb-4">01</span>
                <h3 className="font-serif text-xl mb-4">Documentary Coverage</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Unobtrusive, authentic storytelling that captures real emotions
                  and candid moments throughout your entire celebration.
                </p>
              </div>
              <div className="p-12 bg-white border-b md:border-b-0 md:border-r border-border/50">
                <span className="text-6xl font-serif text-primary/20 block mb-4">02</span>
                <h3 className="font-serif text-xl mb-4">Editorial Portraits</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Magazine-worthy portraits that showcase you and your venue
                  with sophisticated lighting and intentional composition.
                </p>
              </div>
              <div className="p-12 bg-white">
                <span className="text-6xl font-serif text-primary/20 block mb-4">03</span>
                <h3 className="font-serif text-xl mb-4">Cinematic Films</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Wedding films that play like your favorite movies—emotional,
                  beautifully scored, and crafted with cinematic intention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image + Quote Section */}
        <section className="py-0 bg-white">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-[500px]">
              <img
                src={brideImg}
                alt="Houston bride with bouquet"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="bg-neutral-900 p-12 md:p-20 flex items-center">
              <div>
                <Quote size={40} className="text-primary/40 mb-8" strokeWidth={1} />
                <p className="font-serif text-2xl md:text-3xl text-white font-light leading-relaxed mb-8 italic">
                  "From our first meeting to receiving our gallery, the experience
                  was flawless. They captured our Houston wedding with such elegance
                  and emotion. Every photo tells a story."
                </p>
                <div>
                  <p className="text-white font-medium">Sarah & Michael</p>
                  <p className="text-white/50 text-sm">The Corinthian, Houston</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Houston Venues */}
        <section className="py-24 bg-ivory">
          <div className="container mx-auto px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Venue Expertise</p>
                <h2 className="text-3xl md:text-4xl font-serif font-light">
                  Where Houston Says "I Do"
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="text-primary text-sm uppercase tracking-[0.2em] hover:underline flex items-center gap-1 mt-4 md:mt-0"
              >
                See Our Work <ChevronRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "The Corinthian",
                "Hotel Granduca",
                "Chateau Crystale",
                "The Bell Tower on 34th",
                "The Astorian",
                "Crystal Ballroom",
                "The Houston Club",
                "Briscoe Manor",
                "The Wynden",
                "Post Oak Hotel",
                "The Gallery",
                "Brennan's of Houston"
              ].map((venue) => (
                <div
                  key={venue}
                  className="p-6 bg-white border border-border/30 text-center hover:border-primary/30 hover:shadow-luxury transition-all duration-300"
                >
                  <p className="text-sm text-foreground">{venue}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">The Process</p>
                <h2 className="text-3xl md:text-4xl font-serif font-light">
                  How It Works
                </h2>
              </div>
              <div className="space-y-0">
                {[
                  { step: "Inquiry", desc: "Tell us about your Houston wedding—date, venue, and vision." },
                  { step: "Consultation", desc: "We'll schedule a call to discuss your photography style and coverage needs." },
                  { step: "Proposal", desc: "Receive a custom proposal tailored to your celebration." },
                  { step: "Planning", desc: "Work with your dedicated team to create a detailed timeline." },
                  { step: "Your Day", desc: "We arrive early, stay late, and capture everything in between." },
                  { step: "Delivery", desc: "Your curated gallery arrives within weeks, ready to share and cherish." }
                ].map((item, index) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-8 py-8 border-b border-border/30 last:border-b-0"
                  >
                    <span className="text-4xl font-serif text-primary/30 w-16 flex-shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl mb-2">{item.step}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-6">
              Let's Capture Your Houston Celebration
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-10">
              Available for weddings throughout Houston, Galveston, and the greater
              Gulf Coast region.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-none bg-white hover:bg-white/90 text-neutral-900 px-12 py-7 text-[11px] uppercase tracking-[0.2em] font-medium hover:scale-[1.02] transition-all duration-300"
            >
              <Link href="/pricing">Get Started</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
