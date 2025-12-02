import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, Crown, Sparkles } from "lucide-react";
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
  flagship?: boolean;
  tagline: string;
  description: string;
  features: string[];
  includes: string[];
  limitedAvailability?: string;
}

const packages: Package[] = [
  {
    name: "The Estate Collection",
    category: "Complete Experience",
    price: "$8,495",
    startingAt: true,
    image: heroImg,
    featured: true,
    flagship: true,
    tagline: "For couples who desire nothing less than extraordinary",
    description: "Our most exclusive offering, The Estate Collection delivers an unparalleled documentation experience with extended coverage, a dedicated team of four artists, and our signature same-day edit premiered at your reception.",
    limitedAvailability: "Limited to 15 weddings per year",
    features: [
      "Lead Photographer • 10 Hours",
      "Associate Photographer • 10 Hours",
      "Lead Cinematographer • 10 Hours",
      "Second Cinematographer • 8 Hours",
      "Choose Your Lead Artists",
      "Unlimited Locations"
    ],
    includes: [
      "Complimentary Engagement Session",
      "Same-Day Highlight Edit",
      "Cinematic Trailer + Full Film",
      "Heirloom Fine Art Album (14×14) in Linen Box",
      "Two Parent Replica Albums",
      "Canvas Print Collection (3 Pieces)",
      "Priority 4-Week Editing",
      "Private Planning Portal",
      "Dedicated Concierge Team"
    ]
  },
  {
    name: "The Signature Collection",
    category: "Complete Experience",
    price: "$5,995",
    startingAt: true,
    image: brideImg,
    featured: true,
    tagline: "Our most beloved comprehensive experience",
    description: "The ultimate celebration documentation featuring our lead photographer, associate, and lead cinematographer working in harmony to capture every precious moment of your day.",
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
      "Fine Art Album (14×14)",
      "Replica Albums for Parents",
      "Complimentary Canvas Print",
      "Private Online Planning Portal",
      "Dedicated Concierge Team"
    ]
  },
  {
    name: "The Editorial Suite",
    category: "Complete Experience",
    price: "$4,295",
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
      "Social Media Teaser",
      "Full Ceremony & Reception Film",
      "Signature Album (10×10)",
      "Private Online Planning Portal",
      "Dedicated Concierge Team"
    ]
  },
  {
    name: "Photography Premier",
    category: "Photography",
    price: "$3,195",
    image: firstLookImg,
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
      "Engagement Mini-Session (60 min)",
      "Signature Album (10×10)",
      "Private Online Planning Portal",
      "Dedicated Concierge Team"
    ]
  },
  {
    name: "Photography Essentials",
    category: "Photography",
    price: "$2,395",
    image: groomImg,
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
    price: "$3,495",
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
      "60-Second Social Edit",
      "Social Media Teaser",
      "Private Online Planning Portal",
      "Dedicated Concierge Team"
    ]
  },
  {
    name: "Cinematic Essentials",
    category: "Cinematography",
    price: "$2,695",
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
  }
];

const addOns = [
  { name: "Engagement Session", price: "$795", description: "90-minute portrait session at your chosen location" },
  { name: "Second Photographer", price: "$495", description: "Additional coverage (+2 hours)" },
  { name: "Second Cinematographer", price: "$895", description: "Enhanced film coverage" },
  { name: "Same-Day Edit", price: "$1,200", description: "Highlight reel premiered at your reception" },
  { name: "Heirloom Album Box", price: "$395", description: "Luxe linen presentation box" },
  { name: "Parent Album Set", price: "$595", description: "Two replica albums for parents" },
  { name: "Rush Delivery", price: "$500", description: "Priority 2-week editing" },
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
                  className={cn(
                    "grid md:grid-cols-2 gap-0 mb-12 overflow-hidden border",
                    pkg.flagship ? "border-primary/50 shadow-luxury-lg" : "border-border/30"
                  )}
                >
                  {/* Image Side */}
                  <div className={cn("relative min-h-[450px] md:min-h-[550px]", index % 2 === 1 && "md:order-2")}>
                    <img 
                      src={pkg.image} 
                      alt={pkg.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {pkg.flagship && (
                      <div className="absolute top-6 left-6 bg-primary text-white px-4 py-2 flex items-center gap-2">
                        <Crown size={14} />
                        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Flagship Collection</span>
                      </div>
                    )}
                  </div>

                  {/* Content Side */}
                  <div className={cn(
                    "p-10 md:p-14 flex flex-col justify-center",
                    pkg.flagship ? "bg-neutral-900 text-white" : "bg-ivory",
                    index % 2 === 1 && "md:order-1"
                  )}>
                    <p className={cn(
                      "text-[10px] uppercase tracking-[0.4em] mb-4",
                      pkg.flagship ? "text-primary" : "text-primary"
                    )}>{pkg.category}</p>
                    <h2 className={cn(
                      "font-serif text-3xl md:text-4xl font-light mb-3",
                      pkg.flagship && "text-white"
                    )}>{pkg.name}</h2>
                    <p className={cn(
                      "text-sm italic mb-6",
                      pkg.flagship ? "text-white/70" : "text-muted-foreground"
                    )}>{pkg.tagline}</p>
                    
                    {pkg.limitedAvailability && (
                      <div className="flex items-center gap-2 mb-4">
                        <Sparkles size={14} className="text-primary" />
                        <span className={cn(
                          "text-[11px] uppercase tracking-[0.15em]",
                          pkg.flagship ? "text-primary" : "text-primary"
                        )}>{pkg.limitedAvailability}</span>
                      </div>
                    )}
                    
                    <p className="mb-8">
                      {pkg.startingAt && (
                        <span className={cn(
                          "text-[11px] uppercase tracking-[0.15em] mr-2",
                          pkg.flagship ? "text-white/60" : "text-muted-foreground"
                        )}>Starting at</span>
                      )}
                      <span className={cn(
                        "font-serif text-3xl",
                        pkg.flagship ? "text-white" : "text-primary"
                      )}>{pkg.price}</span>
                    </p>

                    <div className="space-y-3 mb-8">
                      {pkg.features.slice(0, 5).map((feature, i) => (
                        <p key={i} className={cn(
                          "flex items-center gap-3 text-sm",
                          pkg.flagship ? "text-white/80" : "text-foreground/80"
                        )}>
                          <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                          {feature}
                        </p>
                      ))}
                    </div>

                    <Button 
                      onClick={() => setSelectedPackage(pkg)}
                      variant={pkg.flagship ? "default" : "outline"}
                      className={cn(
                        "self-start rounded-none px-8 py-6 text-[11px] uppercase tracking-[0.2em] font-medium",
                        pkg.flagship 
                          ? "bg-white text-black hover:bg-white/90" 
                          : "border-foreground/30 text-foreground hover:bg-foreground hover:text-white"
                      )}
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
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
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

        {/* Add-Ons Section */}
        <section className="py-20 bg-ivory">
          <div className="container mx-auto px-8">
            <div className="text-center mb-12">
              <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Enhance Your Experience</p>
              <h2 className="font-serif text-3xl font-light">À La Carte</h2>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-white p-6 border border-border/30 text-center">
                  <h3 className="font-serif text-lg mb-2">{addon.name}</h3>
                  <p className="text-primary font-serif text-xl mb-2">{addon.price}</p>
                  <p className="text-[11px] text-muted-foreground">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
        <DialogContent className={cn(
          "max-w-4xl max-h-[90vh] overflow-y-auto p-0 rounded-none",
          selectedPackage?.flagship && "border-primary/50"
        )}>
          {selectedPackage && (
            <div className="grid md:grid-cols-2">
              {/* Left side - Image */}
              <div className="relative">
                <img 
                  src={selectedPackage.image} 
                  alt={selectedPackage.name}
                  className="w-full h-full object-cover min-h-[400px]"
                />
                {selectedPackage.flagship && (
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1.5 flex items-center gap-2">
                    <Crown size={12} />
                    <span className="text-[9px] uppercase tracking-[0.15em]">Flagship</span>
                  </div>
                )}
              </div>

              {/* Right side - Details */}
              <div className={cn(
                "p-10",
                selectedPackage.flagship && "bg-neutral-900 text-white"
              )}>
                <DialogHeader className="mb-6 text-left">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-2">{selectedPackage.category}</p>
                  <DialogTitle className={cn(
                    "font-serif text-2xl font-light",
                    selectedPackage.flagship && "text-white"
                  )}>{selectedPackage.name}</DialogTitle>
                  <p className={cn(
                    "font-serif text-2xl mt-2",
                    selectedPackage.flagship ? "text-white" : "text-primary"
                  )}>{selectedPackage.price}</p>
                  {selectedPackage.limitedAvailability && (
                    <p className="text-[10px] uppercase tracking-[0.15em] text-primary mt-2 flex items-center gap-2">
                      <Sparkles size={12} />
                      {selectedPackage.limitedAvailability}
                    </p>
                  )}
                </DialogHeader>

                <p className={cn(
                  "text-sm mb-8",
                  selectedPackage.flagship ? "text-white/70" : "text-muted-foreground"
                )}>{selectedPackage.description}</p>

                <div className="mb-8">
                  <h4 className={cn(
                    "text-[10px] uppercase tracking-[0.2em] mb-4",
                    selectedPackage.flagship ? "text-white" : "text-foreground"
                  )}>Coverage Includes</h4>
                  <div className="space-y-2">
                    {selectedPackage.features.map((feature, i) => (
                      <p key={i} className={cn(
                        "flex items-center gap-3 text-sm",
                        selectedPackage.flagship ? "text-white/80" : ""
                      )}>
                        <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                        {feature}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className={cn(
                    "text-[10px] uppercase tracking-[0.2em] mb-4",
                    selectedPackage.flagship ? "text-white" : "text-foreground"
                  )}>Also Included</h4>
                  <div className="space-y-2">
                    {selectedPackage.includes.map((item, i) => (
                      <p key={i} className={cn(
                        "flex items-center gap-3 text-sm",
                        selectedPackage.flagship ? "text-white/60" : "text-muted-foreground"
                      )}>
                        <span className={cn(
                          "w-1.5 h-1.5 rounded-full flex-shrink-0",
                          selectedPackage.flagship ? "bg-white/30" : "bg-border"
                        )}></span>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <Link href="/pricing">
                  <Button className={cn(
                    "w-full rounded-none py-6 text-[11px] uppercase tracking-[0.2em] font-medium",
                    selectedPackage.flagship 
                      ? "bg-white text-black hover:bg-white/90" 
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  )}>
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
