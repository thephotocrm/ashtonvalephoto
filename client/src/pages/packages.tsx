import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AwardsBanner } from "@/components/AwardsBanner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sparkles, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

import heroImg from "@assets/generated_images/romantic_wedding_couple_under_veil.png";
import brideImg from "@assets/generated_images/bride_holding_bouquet.png";
import groomImg from "@assets/generated_images/groom_adjusting_cufflinks.png";
import danceImg from "@assets/generated_images/couple_dancing_reception.png";
import firstLookImg from "@assets/generated_images/first_look_moment.png";
import ceremonyImg from "@assets/generated_images/bride_walking_aisle_ceremony.png";
import engagementImg from "@assets/generated_images/engagement_couple_laughing.png";

const tabs = ["All", "Photo", "Video", "Photo & Video"];

const packages = [
  {
    name: "Love Captured Package",
    category: "Photo & Video",
    listPrice: "$6,420",
    salePrice: "$4,895",
    savings: "Save $600",
    image: heroImg,
    featured: true,
    description: "Our most comprehensive package includes everything you need to capture every moment of your special day with both photo and video coverage.",
    features: [
      { title: "Lead Photographer", hours: "8 Hours" },
      { items: ["One Ashton Vale Certified Lead Photographer", "Choose Your Photographer", "8 Hours of Coverage", "Unlimited Locations"] },
      { title: "Associate Photographer", hours: "8 Hours" },
      { items: ["Hand Color Corrected Images", "Non-Watermarked, High-Resolution Images"] },
      { title: "Lead Videographer", hours: "8 Hours" },
      { items: ["Cinematic Digital Highlight Reel", "Fully Edited Digital Copy of Video"] }
    ],
    extras: [
      "Downloadable Digital Images",
      "Online Proofing & Ordering",
      "Personal Online Planning Portal",
      "Team of Wedding Coordinators",
      "Custom Online Album Design",
      "Fine Art Album (12x12)",
      "Replica Albums (6x6)",
      "Free Canvas Print",
      "$100 Print Credit"
    ],
    cardFeatures: [
      { label: "Lead Photographer", value: "8 Hours" },
      { bullet: "Choose Your Lead Photographer" },
      { label: "Associate Photographer", value: "8 Hours" },
      { label: "Lead Videographer", value: "8 Hours" },
      { bullet: "Downloadable Digital Images" },
      { bullet: "Fine Art Album (12x12)" }
    ]
  },
  {
    name: "Photo & Video Suite",
    category: "Photo & Video",
    listPrice: "$4,850",
    salePrice: "$3,495",
    savings: "Save $300",
    image: danceImg,
    featured: false,
    description: "With Photo & Video Suite you get comprehensive coverage of your wedding day with both photography and videography services.",
    features: [
      { title: "Lead Photographer", hours: "8 Hours" },
      { items: ["One Ashton Vale Certified Lead Photographer", "Choose Your Photographer", "8 Hours of Coverage", "Unlimited Locations"] },
      { title: "Associate Photographer", hours: "6 Hours" },
      { items: ["Hand Color Corrected Images", "Non-Watermarked, High-Resolution Images"] },
      { title: "Lead Videographer", hours: "8 Hours" },
      { items: ["Fully Edited Digital Copy of Video"] }
    ],
    extras: [
      "Downloadable Digital Images",
      "Online Proofing & Ordering",
      "Personal Online Planning Portal",
      "Team of Wedding Coordinators",
      "Custom Online Album Design",
      "Signature Album (10x10)"
    ],
    cardFeatures: [
      { label: "Lead Photographer", value: "8 Hours" },
      { bullet: "Choose Your Lead Photographer" },
      { label: "Associate Photographer", value: "6 Hours" },
      { label: "Lead Videographer", value: "8 Hours" },
      { bullet: "Downloadable Digital Images" },
      { bullet: "Signature Album (10x10)" }
    ],
    bonus: "+ Add Second Videographer: November Only: Just $600!"
  },
  {
    name: "Photo Premier",
    category: "Photo",
    salePrice: "$2,695",
    savings: "Save $100",
    image: brideImg,
    featured: false,
    description: "With Photo Premier you choose your lead photographer, receive 8 hours of coverage and a second shooter with unlimited locations.",
    features: [
      { title: "Lead Photographer", hours: "8 Hours" },
      { items: ["One Ashton Vale Certified Lead Photographer", "Choose Your Photographer", "8 Hours of Coverage", "Unlimited Locations"] },
      { title: "Associate Photographer", hours: "6 Hours" },
      { items: ["Hand Color Corrected Images", "Non-Watermarked, High-Resolution Images"] }
    ],
    extras: [
      "Downloadable Digital Images",
      "Online Proofing & Ordering",
      "Personal Online Planning Portal",
      "Team of Wedding Coordinators",
      "Custom Online Album Design",
      "Signature Album (10x10)",
      "Add Replica Albums (6x6) for $350"
    ],
    cardFeatures: [
      { label: "Lead Photographer", value: "8 Hours" },
      { bullet: "Choose Lead Photographer" },
      { label: "Associate Photographer", value: "6 Hours" },
      { bullet: "Downloadable Digital Images" },
      { bullet: "Signature Album (10x10)" }
    ]
  },
  {
    name: "Photo Select",
    category: "Photo",
    salePrice: "$1,895",
    image: firstLookImg,
    featured: false,
    description: "Photo Select gives you a professional lead photographer for 8 hours to capture all the important moments of your wedding day.",
    features: [
      { title: "Lead Photographer", hours: "8 Hours" },
      { items: ["One Ashton Vale Certified Lead Photographer", "Choose Your Photographer", "8 Hours of Coverage", "Unlimited Locations"] }
    ],
    extras: [
      "Downloadable Digital Images",
      "Online Proofing & Ordering",
      "Personal Online Planning Portal",
      "Team of Wedding Coordinators"
    ],
    cardFeatures: [
      { label: "Lead Photographer", value: "8 Hours" },
      { bullet: "Choose Lead Photographer" },
      { bullet: "Downloadable Digital Images" }
    ]
  },
  {
    name: "Video Premier",
    category: "Video",
    salePrice: "$2,795",
    subtitle: "($2,995 Without Photo Package)",
    savings: "Save $100",
    image: ceremonyImg,
    featured: false,
    description: "Video Premier includes a lead videographer and associate for comprehensive coverage of your ceremony and reception.",
    features: [
      { title: "Lead Videographer", hours: "8 Hours" },
      { items: ["Cinematic Digital Highlight Reel", "Fully Edited Digital Copy of Video", "Cinematic Video (1-minute, perfect for social sharing)"] },
      { title: "Associate Videographer", hours: "6 Hours" },
      { items: ["Additional coverage angles", "Ceremony and reception coverage"] }
    ],
    extras: [
      "Personal Online Planning Portal",
      "Team of Wedding Coordinators"
    ],
    cardFeatures: [
      { label: "Lead Videographer", value: "8 Hours" },
      { label: "Associate Videographer", value: "6 Hours" },
      { bullet: "Cinematic Digital Highlight Reel" },
      { bullet: "Fully Edited Digital Copy of Video" }
    ]
  },
  {
    name: "Video Select",
    category: "Video",
    salePrice: "$2,195",
    subtitle: "($2,395 Without Photo Package)",
    image: engagementImg,
    featured: false,
    description: "Video Select provides professional videography coverage with a lead videographer for your entire wedding day.",
    features: [
      { title: "Lead Videographer", hours: "8 Hours" },
      { items: ["Fully Edited Digital Copy of Video", "Unlimited Locations"] }
    ],
    extras: [
      "Personal Online Planning Portal",
      "Team of Wedding Coordinators"
    ],
    cardFeatures: [
      { label: "Lead Videographer", value: "8 Hours" },
      { bullet: "Fully Edited Digital Copy of Video" },
      { bullet: "Unlimited Locations" }
    ]
  },
  {
    name: "Photo Session",
    category: "Photo",
    salePrice: "$600",
    image: groomImg,
    featured: false,
    description: "Perfect for engagement photos or bridal portraits, our photo session gives you 90 minutes with a professional photographer.",
    features: [
      { title: "Lead Photographer", hours: "1.5 Hours" },
      { items: ["90 Minutes with Photographer", "Unlimited Locations", "Hand Color Corrected Images"] }
    ],
    extras: [
      "Downloadable Digital Images"
    ],
    cardFeatures: [
      { label: "Lead Photographer", value: "1.5 Hours" },
      { bullet: "90 Minutes with Photographer" },
      { bullet: "Unlimited Locations" },
      { bullet: "Downloadable Digital Images" }
    ]
  }
];

interface Package {
  name: string;
  category: string;
  listPrice?: string;
  salePrice: string;
  savings?: string;
  image: string;
  featured: boolean;
  description: string;
  subtitle?: string;
  features: Array<{ title?: string; hours?: string; items?: string[] }>;
  extras: string[];
  cardFeatures: Array<{ label?: string; value?: string; bullet?: string }>;
  bonus?: string;
}

export default function Packages() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const filteredPackages = activeTab === "All" 
    ? packages 
    : packages.filter(pkg => pkg.category === activeTab);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow pt-24">
        {/* Success Banner */}
        <section className="py-16 bg-gradient-to-b from-green-50 to-white border-b border-green-100">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} />
              Great News!
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              We're Available on Your Wedding Day!
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Check out our featured packages below. A wedding consultant will reach out within 24 hours to discuss the perfect package for your special day.
            </p>
          </div>
        </section>

        {/* Sale Banner */}
        <section className="py-8 bg-primary text-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-widest opacity-80 mb-1">Black Friday Sale! November Only!</p>
                <p className="text-2xl font-bold">$600 Off the Love Captured Package</p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-4xl font-bold">$4,295</p>
                <p className="text-sm opacity-80">Black Friday Sale until 11/30</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-6 bg-muted/30 sticky top-16 z-40">
          <div className="container mx-auto px-6">
            <div className="flex justify-center gap-2 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-6 py-2 text-sm font-bold uppercase tracking-widest transition-colors rounded-none",
                    activeTab === tab 
                      ? "bg-primary text-white" 
                      : "bg-white text-foreground hover:bg-muted"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Grid - 2 columns on desktop */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPackages.map((pkg, index) => (
                <div 
                  key={index} 
                  className="bg-rose-50/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  {/* Image with savings badge */}
                  <div className="relative">
                    <img 
                      src={pkg.image} 
                      alt={pkg.name}
                      className="w-full h-64 object-cover"
                    />
                    {pkg.savings && (
                      <div className="absolute top-4 right-4 bg-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg">
                        <span className="text-xs text-primary font-medium">Save</span>
                        <span className="text-primary font-bold text-lg">${pkg.savings.replace('Save $', '')}</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-serif text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-primary text-2xl font-semibold mb-6">{pkg.salePrice}</p>
                    {pkg.subtitle && (
                      <p className="text-xs text-muted-foreground -mt-4 mb-6">{pkg.subtitle}</p>
                    )}

                    {/* Card Features */}
                    <div className="space-y-3 mb-6">
                      {pkg.cardFeatures.map((feature, i) => (
                        <div key={i}>
                          {feature.label ? (
                            <p className="text-primary font-semibold">
                              {feature.label} - <span className="font-normal">{feature.value}</span>
                            </p>
                          ) : (
                            <p className="flex items-center gap-2 text-sm text-foreground/80">
                              <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                              {feature.bullet}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>

                    {pkg.bonus && (
                      <p className="text-xs bg-amber-100 text-amber-800 p-3 rounded-lg mb-6">
                        {pkg.bonus}
                      </p>
                    )}

                    <Button 
                      onClick={() => setSelectedPackage(pkg)}
                      className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
                    >
                      View Details <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coupon Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-amber-100/50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="text-center md:text-left">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  Don't Miss Your $600 Coupon!
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Ends November 30th, 2025
                </p>
                <p className="text-sm text-muted-foreground">
                  Hurry, our biggest sale of the year ends November 30th!
                </p>
                <div className="mt-8 inline-block bg-white shadow-xl p-6 rounded-sm">
                  <p className="text-5xl font-bold text-primary">$600</p>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground">off</p>
                </div>
              </div>
              <div className="relative hidden md:block">
                <img 
                  src={danceImg} 
                  alt="Wedding couple" 
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <AwardsBanner />
      </main>
      <Footer />

      {/* Package Details Modal */}
      <Dialog open={!!selectedPackage} onOpenChange={() => setSelectedPackage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
          {selectedPackage && (
            <div className="grid md:grid-cols-2">
              {/* Left side - Image */}
              <div className="relative">
                <img 
                  src={selectedPackage.image} 
                  alt={selectedPackage.name}
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>

              {/* Right side - Details */}
              <div className="p-8">
                <DialogHeader className="mb-4">
                  <DialogTitle className="font-serif text-2xl font-bold">{selectedPackage.name}</DialogTitle>
                  <p className="text-primary text-2xl font-semibold">{selectedPackage.salePrice}</p>
                </DialogHeader>

                <p className="text-muted-foreground text-sm mb-6">{selectedPackage.description}</p>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full mb-6">
                  Schedule Appointment <ArrowRight size={16} className="ml-2" />
                </Button>

                <h4 className="font-bold text-lg mb-4 border-b pb-2">Photo Details</h4>

                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                  {/* Left column - main features */}
                  <div className="space-y-4">
                    {selectedPackage.features.map((feature, i) => (
                      <div key={i}>
                        {feature.title && (
                          <p className="text-primary font-semibold mb-2">
                            {feature.title} - <span className="font-normal">{feature.hours}</span>
                          </p>
                        )}
                        {feature.items && (
                          <ul className="space-y-1">
                            {feature.items.map((item, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm">
                                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1.5"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Right column - extras */}
                  <div className="space-y-1">
                    {selectedPackage.extras.map((extra, i) => (
                      <p key={i} className="flex items-start gap-2 text-sm">
                        <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1.5"></span>
                        {extra}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
