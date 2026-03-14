import { useEffect, useMemo, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArrowRight, Camera, Film, Sparkles, Check } from "lucide-react";
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

  const jsonLd = useMemo(
    () => [
      breadcrumbJsonLd,
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Abbie Street Wedding Photography & Cinematography",
        provider: {
          "@type": "LocalBusiness",
          name: "Abbie Street Photo & Video",
        },
        serviceType: "Wedding Photography",
        areaServed: { "@type": "Country", name: "United States" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Wedding Collections",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Documentary Coverage",
              description: "Photography & cinematography, beautifully woven together",
              price: "3495",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Photography",
              description: "Timeless images that tell your story",
              price: "1935",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Cinematography",
              description: "Your day, cinematically told",
              price: "1935",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Elopement Collection",
              description: "Beautiful documentation of intimate celebrations",
              price: "1045",
              priceCurrency: "USD",
            },
          ],
        },
      },
    ],
    [breadcrumbJsonLd],
  );

  useSEO({
    title: pageSEO.packages.title,
    description: pageSEO.packages.description,
    canonical: "https://abbiestreetphoto.com/packages",
    jsonLd,
  });

  // Fire conversion events when someone reaches the packages page (after form submission)
  useEffect(() => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "ViewContent", {
        content_name: "Packages Page",
        content_category: "Pricing",
      });
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_title: "Packages",
        page_path: "/packages",
      });
      window.gtag("event", "view_item_list", {
        item_list_name: "Wedding Packages",
      });
    }
  }, []);

  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const packageDetails: Record<string, {
    name: string;
    price: string;
    tagline: string;
    image: string;
    imageAlt: string;
    features: string[];
    description: string;
    deliveryTimeline: string;
  }> = {
    documentary: {
      name: "Documentary Coverage",
      price: "$3,495",
      tagline: "Photography & cinematography, beautifully woven together",
      image: heroImg,
      imageAlt: "Romantic wedding couple under veil",
      features: [
        "Lead Photographer + Cinematographer",
        "8+ Hours of Full-Day Coverage",
        "Curated Digital Gallery (600+ Images)",
        "Cinematic Highlight Film (4-6 min)",
        "Full Ceremony Film",
        "Dedicated Planning Portal",
        "Engagement Session Included",
        "Second Photographer",
        "Full Print Release & Download Rights",
        "Custom USB in Keepsake Box",
      ],
      description: "Our most comprehensive collection, designed for couples who want every moment captured from every angle. Two creative teams work in harmony — your photographer capturing timeless stills while your cinematographer films the emotion and movement of the day.",
      deliveryTimeline: "Gallery delivered within 6-8 weeks. Highlight film within 10-12 weeks.",
    },
    photography: {
      name: "Photography",
      price: "$1,935",
      tagline: "Timeless images that tell your story",
      image: brideImg,
      imageAlt: "Elegant bride holding bouquet",
      features: [
        "Lead Photographer • 8 Hours",
        "400+ Expertly Edited Images",
        "Curated Digital Gallery with Download",
        "Full Print Release",
        "Online Planning Portal",
        "Pre-Wedding Consultation",
        "Timeline Assistance",
        "Sneak Peek within 48 Hours",
      ],
      description: "Every glance, every embrace, every detail — preserved in images you'll treasure forever. Our documentary approach means genuine, unscripted moments captured with an editorial eye.",
      deliveryTimeline: "Full gallery delivered within 6-8 weeks. Sneak peek within 48 hours.",
    },
    cinematography: {
      name: "Cinematography",
      price: "$1,935",
      tagline: "Your day, cinematically told",
      image: engagementImg,
      imageAlt: "Couple laughing together",
      features: [
        "Lead Cinematographer • 8 Hours",
        "4K Cinematic Highlight Film (4-6 min)",
        "Full Ceremony Edit",
        "Licensed Premium Music",
        "Shareable Streaming Link",
        "Raw Footage Archive",
        "Pre-Wedding Consultation",
        "Audio Capture of Vows & Speeches",
      ],
      description: "A cinematic retelling of your wedding day, blending music, motion, and emotion into a film you'll watch again and again. We capture the sounds, the movement, and the in-between moments that photographs alone can't convey.",
      deliveryTimeline: "Highlight film delivered within 10-12 weeks. Streaming link provided upon delivery.",
    },
    elopement: {
      name: "The Elopement Collection",
      price: "$1,045",
      tagline: "Beautiful documentation of intimate celebrations",
      image: gardenImg,
      imageAlt: "Romantic garden wedding venue",
      features: [
        "Lead Photographer • 3 Hours",
        "Up to 2 Locations",
        "200+ Expertly Edited Images",
        "Full Print Release",
        "Curated Digital Gallery",
        "Pre-Session Planning Call",
        "Location Scouting Assistance",
        "Sneak Peek within 48 Hours",
      ],
      description: "Big love doesn't require a big guest list. Whether it's a mountainside ceremony or an intimate courthouse exchange, we'll document your day with the same artistry and attention as our largest celebrations.",
      deliveryTimeline: "Full gallery delivered within 4-6 weeks. Sneak peek within 48 hours.",
    },
  };

  const currentPackage = selectedPackage ? packageDetails[selectedPackage] : null;

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
                  alt="Romantic wedding couple under veil, documentary coverage package"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6 bg-primary text-white px-4 py-2 flex items-center gap-2">
                  <Sparkles size={14} aria-hidden="true" />
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
                  <span className="font-serif text-4xl text-white">$3,495</span>
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
                  onClick={() => setSelectedPackage("documentary")}
                  className="self-start rounded-none px-8 py-6 text-[11px] uppercase tracking-[0.2em] font-medium bg-white text-black hover:bg-white/90 hover:shadow-luxury hover:scale-[1.02] transition-all duration-300"
                >
                  View Details <ArrowRight size={14} className="ml-2" />
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
                    alt="Elegant bride holding bouquet, wedding photography package"
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 flex items-center gap-2">
                    <Camera size={14} className="text-primary" aria-hidden="true" />
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
                    <span className="font-serif text-3xl text-primary">$1,935</span>
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
                    onClick={() => setSelectedPackage("photography")}
                    variant="outline"
                    className="w-full rounded-none border-border text-foreground hover:bg-primary hover:text-white hover:border-primary text-[10px] uppercase tracking-[0.2em] font-medium py-5 hover:shadow-luxury hover:scale-[1.02] transition-all duration-300"
                  >
                    View Details
                  </Button>
                </div>
              </div>

              {/* Cinematography Card */}
              <div className="bg-white overflow-hidden border border-border shadow-sm hover-lift group">
                <div className="relative overflow-hidden">
                  <img
                    src={engagementImg}
                    alt="Couple laughing together, wedding cinematography package"
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 flex items-center gap-2">
                    <Film size={14} className="text-primary" aria-hidden="true" />
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
                    <span className="font-serif text-3xl text-primary">$1,935</span>
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
                    onClick={() => setSelectedPackage("cinematography")}
                    variant="outline"
                    className="w-full rounded-none border-border text-foreground hover:bg-primary hover:text-white hover:border-primary text-[10px] uppercase tracking-[0.2em] font-medium py-5 hover:shadow-luxury hover:scale-[1.02] transition-all duration-300"
                  >
                    View Details
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
                    alt="Romantic garden wedding venue, elopement collection"
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
                    <span className="font-serif text-3xl text-primary">$1,045</span>
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
                    onClick={() => setSelectedPackage("elopement")}
                    variant="outline"
                    className="self-start rounded-none px-8 py-6 text-[11px] uppercase tracking-[0.2em] font-medium border-foreground/30 text-foreground hover:bg-foreground hover:text-white hover:shadow-luxury hover:scale-[1.02] transition-all duration-300"
                  >
                    View Details <ArrowRight size={14} className="ml-2" />
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
        {/* Package Detail Modal */}
        <Dialog open={!!selectedPackage} onOpenChange={() => setSelectedPackage(null)}>
          <DialogContent className="max-w-[1200px] max-h-[90vh] p-0 overflow-hidden">
            {currentPackage && (
              <div className="flex flex-col md:grid md:grid-cols-[2fr_3fr]">
                {/* Image — full height on desktop, bottom on mobile */}
                <div className="relative order-2 h-56 md:order-none md:h-auto">
                  <img
                    src={currentPackage.image}
                    alt={currentPackage.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Right column — scrollable content */}
                <div className="order-1 max-h-[90vh] md:order-none md:max-h-[85vh] overflow-y-auto">
                  <div className="p-6 md:p-8">
                    <DialogTitle className="font-serif text-3xl font-light mb-1">
                      {currentPackage.name}
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground italic text-sm mb-6">
                      {currentPackage.tagline}
                    </DialogDescription>

                    <p className="mb-4">
                      <span className="text-[11px] uppercase tracking-[0.15em] mr-2 text-muted-foreground">Starting at</span>
                      <span className="font-serif text-4xl text-primary">{currentPackage.price}</span>
                    </p>

                    <p className="text-foreground/80 leading-relaxed mb-6 text-sm">
                      {currentPackage.description}
                    </p>

                    <Button
                      asChild
                      className="w-full rounded-none py-6 text-[11px] uppercase tracking-[0.2em] font-medium bg-primary text-white hover:bg-primary/90 hover:shadow-luxury transition-all duration-300 mb-8"
                    >
                      <Link href="/schedule">
                        Schedule Discovery Call <ArrowRight size={14} className="ml-2" />
                      </Link>
                    </Button>

                    <div className="border-t border-border pt-8 mb-8">
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4 font-medium">What's Included</h4>
                      <div className="grid grid-cols-1 min-[1200px]:grid-cols-2 gap-x-4 gap-y-3">
                        {currentPackage.features.map((feature) => (
                          <p key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
                            <Check size={13} className="text-primary mt-0.5 flex-shrink-0" />
                            {feature}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 border border-border">
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-primary mb-2 font-medium">Delivery Timeline</h4>
                      <p className="text-sm text-foreground/70">{currentPackage.deliveryTimeline}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  );
}
