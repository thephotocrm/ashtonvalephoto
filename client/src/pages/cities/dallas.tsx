import { useMemo } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Camera, Film, Heart, MapPin } from "lucide-react";
import heroImg from "@assets/generated_images/editorial_luxury_hotel_venue.png";
import coupleImg from "@assets/generated_images/romantic_wedding_couple_under_veil.png";
import { useSEO } from "@/hooks/use-seo";
import { pageSEO, cityLocalBusinessSchema } from "@/lib/seo-data";
import { SEOBreadcrumb, buildBreadcrumbJsonLd } from "@/components/SEOBreadcrumb";

export default function Dallas() {
  const jsonLd = useMemo(
    () => [
      buildBreadcrumbJsonLd([
        { label: "Home", href: "/" },
        { label: "Dallas", href: "/dallas" },
      ]),
      cityLocalBusinessSchema({ name: "Dallas", state: "TX", slug: "dallas" }),
    ],
    [],
  );

  useSEO({
    title: pageSEO.dallas.title,
    description: pageSEO.dallas.description,
    canonical: "https://ashtonvalephoto.com/dallas",
    jsonLd,
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <SEOBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Dallas" },
        ]}
      />
      <main className="flex-grow">
        {/* Hero Section - Full Width with Overlay */}
        <section className="relative h-[70vh] min-h-[550px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
          </div>
          <div className="relative h-full container mx-auto px-8 flex items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-white/60 mb-6">
                <MapPin size={14} strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-[0.3em]">Dallas, Texas</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-white leading-tight">
                Luxury Wedding Photography in Dallas
              </h1>
              <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-xl">
                Capturing timeless moments at Dallas's most prestigious venues.
                From the Arts District to Highland Park, we document love stories
                with editorial elegance.
              </p>
              <Button
                asChild
                size="lg"
                className="rounded-none bg-white hover:bg-white/90 text-neutral-900 px-10 py-6 text-[11px] uppercase tracking-[0.2em] font-medium hover:scale-[1.02] transition-all duration-300"
              >
                <Link href="/pricing">Plan Your Dallas Wedding</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Two Column Intro */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 border border-primary/10"></div>
                <img
                  src={coupleImg}
                  alt="Romantic wedding couple in Dallas"
                  className="relative w-full shadow-luxury-lg"
                />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Dallas Wedding Specialists</p>
                <h2 className="text-3xl md:text-4xl font-serif font-light mb-8">
                  The Heart of Texas Elegance
                </h2>
                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Dallas represents the perfect fusion of Southern charm and metropolitan sophistication.
                    From the iconic Adolphus Hotel to intimate garden ceremonies at the Dallas Arboretum,
                    every venue tells a unique story waiting to be captured.
                  </p>
                  <p>
                    Our photographers understand the distinct character of Dallas weddings—the grandeur of
                    Highland Park estates, the modern edge of Design District celebrations, and the timeless
                    beauty of historic downtown venues.
                  </p>
                  <p>
                    We've had the privilege of documenting hundreds of Dallas love stories, each one
                    approached with the same dedication to artistry and attention to detail that has
                    earned us recognition among the city's most trusted wedding professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-ivory">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Our Services</p>
              <h2 className="text-3xl md:text-4xl font-serif font-light">
                Complete Dallas Wedding Coverage
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-10 border border-border/30 shadow-luxury text-center hover:border-primary/20 transition-all duration-500">
                <Camera size={32} className="mx-auto mb-6 text-primary" strokeWidth={1} />
                <h3 className="font-serif text-xl mb-4">Wedding Photography</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Editorial and documentary photography that captures every emotion,
                  from intimate preparations to the last dance.
                </p>
              </div>
              <div className="bg-white p-10 border border-border/30 shadow-luxury text-center hover:border-primary/20 transition-all duration-500">
                <Film size={32} className="mx-auto mb-6 text-primary" strokeWidth={1} />
                <h3 className="font-serif text-xl mb-4">Cinematography</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Cinematic wedding films that transform your day into a
                  timeless visual narrative you'll treasure forever.
                </p>
              </div>
              <div className="bg-white p-10 border border-border/30 shadow-luxury text-center hover:border-primary/20 transition-all duration-500">
                <Heart size={32} className="mx-auto mb-6 text-primary" strokeWidth={1} />
                <h3 className="font-serif text-xl mb-4">Engagement Sessions</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Romantic portrait sessions at Dallas's most photogenic locations,
                  from Turtle Creek to the Nasher Sculpture Center.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dallas Venues Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Venue Experience</p>
              <h2 className="text-3xl md:text-4xl font-serif font-light mb-8">
                Dallas's Premier Wedding Venues
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-12">
                We've photographed at the most distinguished venues across Dallas-Fort Worth,
                giving us intimate knowledge of the best lighting, timing, and locations for
                exceptional imagery.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-muted-foreground">
                <div className="p-4 bg-ivory border border-border/30">The Adolphus</div>
                <div className="p-4 bg-ivory border border-border/30">Dallas Arboretum</div>
                <div className="p-4 bg-ivory border border-border/30">The Crescent</div>
                <div className="p-4 bg-ivory border border-border/30">Nasher Sculpture</div>
                <div className="p-4 bg-ivory border border-border/30">NYLO Dallas</div>
                <div className="p-4 bg-ivory border border-border/30">The Room on Main</div>
                <div className="p-4 bg-ivory border border-border/30">Rosewood Mansion</div>
                <div className="p-4 bg-ivory border border-border/30">Arlington Hall</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-neutral-900 text-white">
          <div className="container mx-auto px-8 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/50 mb-4">Begin Your Journey</p>
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
              Ready to Capture Your Dallas Wedding?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
              Let's discuss your vision and create a photography experience
              as exceptional as your celebration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-none bg-white hover:bg-white/90 text-neutral-900 px-10 py-6 text-[11px] uppercase tracking-[0.2em] font-medium hover:scale-[1.02] transition-all duration-300"
              >
                <Link href="/pricing">View Pricing & Availability</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-white/30 text-white hover:bg-white/10 px-10 py-6 text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300"
              >
                <Link href="/portfolio">View Our Portfolio</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
