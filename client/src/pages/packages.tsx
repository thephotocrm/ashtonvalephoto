import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

import heroImg from "@assets/generated_images/romantic_wedding_couple_under_veil.png";
import brideImg from "@assets/generated_images/bride_holding_bouquet.png";
import groomImg from "@assets/generated_images/groom_adjusting_cufflinks.png";
import danceImg from "@assets/generated_images/couple_dancing_reception.png";
import firstLookImg from "@assets/generated_images/first_look_moment.png";
import ceremonyImg from "@assets/generated_images/bride_walking_aisle_ceremony.png";
import engagementImg from "@assets/generated_images/engagement_couple_laughing.png";

const tabs = ["All Collections", "Photography", "Cinematography", "Complete Experience"];

interface Package {
  name: string;
  category: string;
  price: string;
  startingAt?: boolean;
  image: string;
  featured: boolean;
  tagline: string;
  description: string;
  features: string[];
  includes: string[];
}

const packages: Package[] = [
  {
    name: "The Signature Collection",
    category: "Complete Experience",
    price: "$4,895",
    startingAt: true,
    image: brideImg,
    featured: true,
    tagline: "Our most comprehensive experience",
    description: "The ultimate celebration documentation featuring our lead photographer, associate, and lead cinematographer working in harmony to capture every precious moment.",
    features: [
      "Lead Photographer • 8 Hours",
      "Associate Photographer • 8 Hours",
      "Lead Cinematographer • 8 Hours",
      "Choose Your Lead Artist",
      "Unlimited Locations"
    ],
    includes: [
      "Curated Digital Gallery",
      "Cinematic Highlight Film",
      "Full Ceremony & Reception Film",
      "Fine Art Album (12×12)",
      "Replica Albums for Parents",
      "Complimentary Canvas Print",
      "Private Online Planning Portal",
      "Dedicated Concierge Team"
    ]
  },
  {
    name: "The Editorial Suite",
    category: "Complete Experience",
    price: "$3,495",
    startingAt: true,
    image: engagementImg,
    featured: true,
    tagline: "Photography & cinematography, beautifully balanced",
    description: "Comprehensive coverage of your celebration with our signature photography and cinematic storytelling, perfect for couples who desire both mediums.",
    features: [
      "Lead Photographer • 8 Hours",
      "Associate Photographer • 6 Hours",
      "Lead Cinematographer • 8 Hours",
      "Choose Your Lead Artist"
    ],
    includes: [
      "Curated Digital Gallery",
      "Full Ceremony & Reception Film",
      "Signature Album (10×10)",
      "Private Online Planning Portal",
      "Dedicated Concierge Team"
    ]
  },
  {
    name: "Photography Premier",
    category: "Photography",
    price: "$2,695",
    image: heroImg,
    featured: false,
    tagline: "Comprehensive photography coverage",
    description: "Select your lead photographer and enjoy comprehensive coverage with a second artist to capture every angle of your celebration.",
    features: [
      "Lead Photographer • 8 Hours",
      "Associate Photographer • 6 Hours",
      "Choose Your Lead Artist",
      "Unlimited Locations"
    ],
    includes: [
      "Curated Digital Gallery",
      "Signature Album (10×10)",
      "Private Online Planning Portal",
      "Dedicated Concierge Team"
    ]
  },
  {
    name: "Photography Essentials",
    category: "Photography",
    price: "$1,895",
    image: firstLookImg,
    featured: false,
    tagline: "Timeless imagery, beautifully captured",
    description: "Perfect for intimate celebrations, our lead photographer will artfully document your day with refined elegance.",
    features: [
      "Lead Photographer • 8 Hours",
      "Choose Your Lead Artist",
      "Unlimited Locations"
    ],
    includes: [
      "Curated Digital Gallery",
      "Private Online Planning Portal",
      "Dedicated Concierge Team"
    ]
  },
  {
    name: "Cinematic Premier",
    category: "Cinematography",
    price: "$2,795",
    image: ceremonyImg,
    featured: false,
    tagline: "Editorial filmmaking at its finest",
    description: "Comprehensive cinematic coverage with both lead and associate cinematographers for a truly immersive wedding film.",
    features: [
      "Lead Cinematographer • 8 Hours",
      "Associate Cinematographer • 6 Hours",
      "Cinematic Highlight Reel",
      "Full Ceremony & Reception Film"
    ],
    includes: [
      "Social Media Teaser",
      "Private Online Planning Portal",
      "Dedicated Concierge Team"
    ]
  },
  {
    name: "Cinematic Essentials",
    category: "Cinematography",
    price: "$2,195",
    image: danceImg,
    featured: false,
    tagline: "Your story, cinematically told",
    description: "Professional cinematic documentation with our lead cinematographer capturing your celebration from beginning to end.",
    features: [
      "Lead Cinematographer • 8 Hours",
      "Unlimited Locations"
    ],
    includes: [
      "Full Ceremony & Reception Film",
      "Private Online Planning Portal",
      "Dedicated Concierge Team"
    ]
  },
  {
    name: "Engagement Session",
    category: "Photography",
    price: "$600",
    image: groomImg,
    featured: false,
    tagline: "Celebrate your love story",
    description: "An intimate portrait session to capture the joy and anticipation of your upcoming celebration.",
    features: [
      "Lead Photographer • 90 Minutes",
      "Location of Your Choice"
    ],
    includes: [
      "Curated Digital Gallery",
      "Styling Consultation"
    ]
  }
];

export default function Packages() {
  const [activeTab, setActiveTab] = useState("All Collections");
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const categoryMap: Record<string, string> = {
    "All Collections": "All",
    "Photography": "Photography",
    "Cinematography": "Cinematography",
    "Complete Experience": "Complete Experience"
  };

  const filteredPackages = activeTab === "All Collections" 
    ? packages 
    : packages.filter(pkg => pkg.category === categoryMap[activeTab]);

  const featuredPackages = filteredPackages.filter(pkg => pkg.featured);
  const regularPackages = filteredPackages.filter(pkg => !pkg.featured);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        {/* Header */}
        <section className="pt-32 pb-16 bg-white text-center">
          <div className="container mx-auto px-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Our Collections</p>
            <h1 className="font-serif text-4xl md:text-5xl font-light mb-6">
              Signature Collections
            </h1>
            <div className="w-16 h-px bg-primary/40 mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Each collection is thoughtfully curated to provide an exceptional experience. 
              All packages may be customized to suit your unique celebration.
            </p>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-6 bg-white border-b border-border/50">
          <div className="container mx-auto px-8">
            <div className="flex justify-center gap-10">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "text-[11px] uppercase tracking-[0.2em] font-medium transition-all pb-2 border-b-2",
                    activeTab === tab 
                      ? "text-foreground border-primary" 
                      : "text-muted-foreground border-transparent hover:text-foreground"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Packages - Full Width Rows */}
        {featuredPackages.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-8">
              {featuredPackages.map((pkg, index) => (
                <div 
                  key={index} 
                  className="grid md:grid-cols-2 gap-0 mb-12 overflow-hidden border border-border/30"
                >
                  {/* Image Side */}
                  <div className={cn("relative min-h-[450px] md:min-h-[550px]", index % 2 === 1 && "md:order-2")}>
                    <img 
                      src={pkg.image} 
                      alt={pkg.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* Content Side */}
                  <div className={cn("p-10 md:p-14 flex flex-col justify-center bg-ivory", index % 2 === 1 && "md:order-1")}>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">{pkg.category}</p>
                    <h2 className="font-serif text-3xl md:text-4xl font-light mb-3">{pkg.name}</h2>
                    <p className="text-muted-foreground text-sm italic mb-6">{pkg.tagline}</p>
                    
                    <p className="mb-8">
                      {pkg.startingAt && <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mr-2">Starting at</span>}
                      <span className="font-serif text-3xl text-primary">{pkg.price}</span>
                    </p>

                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <p key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                          {feature}
                        </p>
                      ))}
                    </div>

                    <Button 
                      onClick={() => setSelectedPackage(pkg)}
                      variant="outline"
                      className="self-start rounded-none border-foreground/30 text-foreground hover:bg-foreground hover:text-white px-8 py-6 text-[11px] uppercase tracking-[0.2em] font-medium"
                    >
                      View Full Details <ArrowRight size={14} className="ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Regular Packages - 2 Column Grid */}
        {regularPackages.length > 0 && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-8">
              <div className="text-center mb-12">
                <h2 className="font-serif text-2xl font-light">Additional Collections</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {regularPackages.map((pkg, index) => (
                  <div 
                    key={index} 
                    className="bg-white overflow-hidden border border-border/30 hover-lift group"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={pkg.image} 
                        alt={pkg.name}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <p className="text-[9px] uppercase tracking-[0.3em] text-primary mb-3">{pkg.category}</p>
                      <h3 className="font-serif text-xl mb-2">{pkg.name}</h3>
                      <p className="text-sm text-muted-foreground italic mb-4">{pkg.tagline}</p>
                      <p className="font-serif text-2xl text-primary mb-6">{pkg.price}</p>

                      {/* Key Features */}
                      <div className="space-y-2 mb-6">
                        {pkg.features.slice(0, 3).map((feature, i) => (
                          <p key={i} className="flex items-center gap-2 text-xs text-foreground/70">
                            <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></span>
                            {feature}
                          </p>
                        ))}
                      </div>

                      <Button 
                        onClick={() => setSelectedPackage(pkg)}
                        variant="outline"
                        className="w-full rounded-none border-border/50 text-foreground hover:bg-primary hover:text-white hover:border-primary text-[10px] uppercase tracking-[0.2em] font-medium py-5"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-neutral-900 text-white text-center">
          <div className="container mx-auto px-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/50 mb-4">Ready to Begin?</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-6 text-white">
              Let's Discuss Your Vision
            </h2>
            <p className="text-white/60 max-w-lg mx-auto mb-10">
              Each celebration is unique. Contact us to discuss how we can tailor 
              a collection specifically for your day.
            </p>
            <Link href="/pricing">
              <Button 
                size="lg"
                className="rounded-none bg-white text-black hover:bg-white/90 px-12 py-7 text-[11px] uppercase tracking-[0.2em] font-medium"
              >
                Request a Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />

      {/* Package Details Modal */}
      <Dialog open={!!selectedPackage} onOpenChange={() => setSelectedPackage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 rounded-none">
          {selectedPackage && (
            <div className="grid md:grid-cols-2">
              {/* Left side - Image */}
              <div className="relative">
                <img 
                  src={selectedPackage.image} 
                  alt={selectedPackage.name}
                  className="w-full h-full object-cover min-h-[400px]"
                />
              </div>

              {/* Right side - Details */}
              <div className="p-10">
                <DialogHeader className="mb-6 text-left">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-2">{selectedPackage.category}</p>
                  <DialogTitle className="font-serif text-2xl font-light">{selectedPackage.name}</DialogTitle>
                  <p className="font-serif text-2xl text-primary mt-2">{selectedPackage.price}</p>
                </DialogHeader>

                <p className="text-muted-foreground text-sm mb-8">{selectedPackage.description}</p>

                <div className="mb-8">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-foreground mb-4">Coverage Includes</h4>
                  <div className="space-y-2">
                    {selectedPackage.features.map((feature, i) => (
                      <p key={i} className="flex items-center gap-3 text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                        {feature}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-foreground mb-4">Also Included</h4>
                  <div className="space-y-2">
                    {selectedPackage.includes.map((item, i) => (
                      <p key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-border rounded-full flex-shrink-0"></span>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <Link href="/pricing">
                  <Button className="w-full rounded-none bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-[11px] uppercase tracking-[0.2em] font-medium">
                    Inquire About This Collection
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
