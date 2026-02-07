import { useMemo } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Film, Sparkles } from "lucide-react";
import { Link } from "wouter";

import heroImg from "@assets/generated_images/romantic_wedding_couple_under_veil.png";
import brideImg from "@assets/generated_images/bride_holding_bouquet.png";
import engagementImg from "@assets/generated_images/engagement_couple_laughing.png";
import gardenImg from "@assets/generated_images/romantic_garden_wedding_venue.png";
import { useSEO } from "@/hooks/use-seo";
import { pageSEO } from "@/lib/seo-data";
import { buildBreadcrumbJsonLd } from "@/components/SEOBreadcrumb";

export default function Packages() {
  const breadcrumbJsonLd = useMemo(
    () =>
      buildBreadcrumbJsonLd([
        { label: "Home", href: "/" },
        { label: "Packages", href: "/packages" },
      ]),
    [],
  );

  useSEO({
    title: pageSEO.packages.title,
    description: pageSEO.packages.description,
    canonical: "https://ashtonvalephoto.com/packages",
    jsonLd: breadcrumbJsonLd,
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        {/* Header */}
        <section className="pt-32 pb-16 bg-white text-center">
          <div className="container mx-auto px-4 md:px-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Investment</p>
            <h1 className="font-serif text-4xl md:text-5xl font-light mb-6">
              Our Collections
            </h1>
            <div className="w-16 h-px bg-primary/40 mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every love story deserves to be told beautifully. Choose the coverage
              that best captures your celebration.
            </p>
            <p className="text-sm text-foreground/70 max-w-2xl mx-auto mt-6 italic">
              As a bespoke studio, we accept fewer than 20 weddings per year — ensuring each couple receives our full creative attention and images they'll treasure for a lifetime.
            </p>
          </div>
        </section>

        {/* Documentary - Full Width Hero Card */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-0 overflow-hidden border border-primary/30 shadow-luxury-lg">
              {/* Image Side */}
              <div className="relative min-h-[450px] md:min-h-[550px]">
                <img
                  src={heroImg}
                  alt="Documentary Coverage"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6 bg-primary text-white px-4 py-2 flex items-center gap-2">
                  <Sparkles size={14} />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Most Popular</span>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-6 md:p-14 flex flex-col justify-center bg-neutral-900 text-white">
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Complete Experience</p>
                <h2 className="font-serif text-3xl md:text-4xl font-light mb-3 text-white">
                  Documentary Coverage
                </h2>
                <p className="text-sm italic mb-6 text-white/70">
                  Photography & cinematography, beautifully woven together
                </p>

                <p className="mb-8">
                  <span className="text-[11px] uppercase tracking-[0.15em] mr-2 text-white/60">Starting at</span>
                  <span className="font-serif text-4xl text-white">$6,995</span>
                </p>

                <div className="space-y-3 mb-8">
                  <p className="flex items-center gap-3 text-sm text-white/80">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                    Lead Photographer + Cinematographer
                  </p>
                  <p className="flex items-center gap-3 text-sm text-white/80">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                    8+ Hours of Coverage
                  </p>
                  <p className="flex items-center gap-3 text-sm text-white/80">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                    Curated Digital Gallery
                  </p>
                  <p className="flex items-center gap-3 text-sm text-white/80">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                    Cinematic Highlight Film
                  </p>
                  <p className="flex items-center gap-3 text-sm text-white/80">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                    Dedicated Planning Portal
                  </p>
                  <p className="flex items-center gap-3 text-sm text-white/50 italic">
                    & more
                  </p>
                </div>

                <Button
                  asChild
                  className="self-start rounded-none px-8 py-6 text-[11px] uppercase tracking-[0.2em] font-medium bg-white text-black hover:bg-white/90 hover:shadow-luxury hover:scale-[1.02] transition-all duration-300"
                >
                  <Link href="/schedule">
                    Schedule Discovery Call <ArrowRight size={14} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Photography & Cinematography - Side by Side */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Photography Card */}
              <div className="bg-white overflow-hidden border border-border shadow-sm hover-lift group">
                <div className="relative overflow-hidden">
                  <img
                    src={brideImg}
                    alt="Photography"
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 flex items-center gap-2">
                    <Camera size={14} className="text-primary" />
                    <span className="text-[10px] uppercase tracking-[0.15em] font-medium">Photography</span>
                  </div>
                </div>

                <div className="p-5 md:p-8 text-center">
                  <h3 className="font-serif text-2xl mb-2">Photography</h3>
                  <p className="text-sm text-muted-foreground italic mb-6">
                    Timeless images that tell your story
                  </p>

                  <p className="mb-6">
                    <span className="text-[11px] uppercase tracking-[0.15em] mr-2 text-muted-foreground">Starting at</span>
                    <span className="font-serif text-3xl text-primary">$3,500</span>
                  </p>

                  <div className="space-y-2 mb-8 text-left">
                    <p className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></span>
                      Lead Photographer • 8 Hours
                    </p>
                    <p className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></span>
                      400+ Edited Images
                    </p>
                    <p className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></span>
                      Curated Digital Gallery
                    </p>
                    <p className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></span>
                      Full Print Release
                    </p>
                    <p className="flex items-center gap-2 text-sm text-muted-foreground italic">
                      & more
                    </p>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-none border-border text-foreground hover:bg-primary hover:text-white hover:border-primary text-[10px] uppercase tracking-[0.2em] font-medium py-5 hover:shadow-luxury hover:scale-[1.02] transition-all duration-300"
                  >
                    <Link href="/schedule">
                      Schedule Discovery Call
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Cinematography Card */}
              <div className="bg-white overflow-hidden border border-border shadow-sm hover-lift group">
                <div className="relative overflow-hidden">
                  <img
                    src={engagementImg}
                    alt="Cinematography"
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 flex items-center gap-2">
                    <Film size={14} className="text-primary" />
                    <span className="text-[10px] uppercase tracking-[0.15em] font-medium">Cinematography</span>
                  </div>
                </div>

                <div className="p-5 md:p-8 text-center">
                  <h3 className="font-serif text-2xl mb-2">Cinematography</h3>
                  <p className="text-sm text-muted-foreground italic mb-6">
                    Your day, cinematically told
                  </p>

                  <p className="mb-6">
                    <span className="text-[11px] uppercase tracking-[0.15em] mr-2 text-muted-foreground">Starting at</span>
                    <span className="font-serif text-3xl text-primary">$3,800</span>
                  </p>

                  <div className="space-y-2 mb-8 text-left">
                    <p className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></span>
                      Lead Cinematographer • 8 Hours
                    </p>
                    <p className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></span>
                      4K Highlight Film
                    </p>
                    <p className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></span>
                      Licensed Music
                    </p>
                    <p className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></span>
                      Shareable Streaming Link
                    </p>
                    <p className="flex items-center gap-2 text-sm text-muted-foreground italic">
                      & more
                    </p>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-none border-border text-foreground hover:bg-primary hover:text-white hover:border-primary text-[10px] uppercase tracking-[0.2em] font-medium py-5 hover:shadow-luxury hover:scale-[1.02] transition-all duration-300"
                  >
                    <Link href="/schedule">
                      Schedule Discovery Call
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Elopement Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Intimate Celebrations</p>
              <h2 className="font-serif text-3xl font-light mb-4">Elopements & Micro-Weddings</h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Big love doesn't require a big guest list. Beautiful, intentional
                documentation of your most intimate moments.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-0 overflow-hidden border border-border/30 shadow-luxury">
                {/* Image Side */}
                <div className="relative min-h-[400px]">
                  <img
                    src={gardenImg}
                    alt="Elopement Collection"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Content Side */}
                <div className="p-6 md:p-12 flex flex-col justify-center bg-ivory">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-3">Intimate Celebrations</p>
                  <h3 className="font-serif text-2xl md:text-3xl font-light mb-2">The Elopement Collection</h3>
                  <p className="text-sm italic text-muted-foreground mb-4">For adventurous souls</p>

                  <p className="mb-6">
                    <span className="text-[11px] uppercase tracking-[0.15em] mr-2 text-muted-foreground">Starting at</span>
                    <span className="font-serif text-3xl text-primary">$2,495</span>
                  </p>

                  <div className="space-y-2 mb-8">
                    <p className="flex items-center gap-3 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Lead Photographer • 3 Hours
                    </p>
                    <p className="flex items-center gap-3 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Up to 2 Locations
                    </p>
                    <p className="flex items-center gap-3 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      200+ Edited Images
                    </p>
                    <p className="flex items-center gap-3 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Full Print Release
                    </p>
                    <p className="flex items-center gap-3 text-sm text-muted-foreground italic">
                      & more
                    </p>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="self-start rounded-none px-8 py-6 text-[11px] uppercase tracking-[0.2em] font-medium border-foreground/30 text-foreground hover:bg-foreground hover:text-white hover:shadow-luxury hover:scale-[1.02] transition-all duration-300"
                  >
                    <Link href="/schedule">
                      Schedule Discovery Call <ArrowRight size={14} className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-neutral-900 text-white text-center">
          <div className="container mx-auto px-4 md:px-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/50 mb-4">Ready to Begin?</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-6 text-white">
              Let's Discuss Your Vision
            </h2>
            <p className="text-white/60 max-w-lg mx-auto mb-4">
              Each celebration is unique. We'll customize a collection
              specifically for your day.
            </p>
            <p className="text-white/70 text-sm max-w-lg mx-auto mb-8">
              Wondering if your date is available? Inquire today and receive a complimentary 24-hour hold while we prepare your personalized proposal.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-none bg-white text-black hover:bg-white/90 px-12 py-7 text-[11px] uppercase tracking-[0.2em] font-medium hover:shadow-luxury hover:scale-[1.02] transition-all duration-300"
            >
              <Link href="/schedule">
                Schedule Discovery Call
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
