import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AwardsBanner } from "@/components/AwardsBanner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

import heroImg from "@assets/generated_images/romantic_wedding_couple_under_veil.png";
import brideImg from "@assets/generated_images/bride_holding_bouquet.png";
import groomImg from "@assets/generated_images/groom_adjusting_cufflinks.png";
import danceImg from "@assets/generated_images/couple_dancing_reception.png";
import firstLookImg from "@assets/generated_images/first_look_moment.png";
import ceremonyImg from "@assets/generated_images/bride_walking_aisle_ceremony.png";
import engagementImg from "@assets/generated_images/engagement_couple_laughing.png";

const tabs = ["All", "Photo", "Video", "Photo & Video"];

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

const packages: Package[] = [
  {
    name: "Love Captured Package",
    category: "Photo & Video",
    listPrice: "$6,420",
    salePrice: "$4,895",
    savings: "$600",
    image: brideImg,
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
      { bullet: "60-Minute Photo Session" },
      { bullet: "Downloadable Digital Images" },
      { bullet: "Fully Edited Digital Copy of Video" },
      { bullet: "Fine Art Album (12x12)" },
      { bullet: "Replica Albums (6x6)" },
      { bullet: "Free Canvas Print" },
      { bullet: "$100 Print Credit" }
    ]
  },
  {
    name: "Photo & Video Suite",
    category: "Photo & Video",
    listPrice: "$4,850",
    salePrice: "$3,495",
    savings: "$300",
    image: engagementImg,
    featured: true,
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
      { bullet: "Team of Wedding Coordinators" },
      { bullet: "Downloadable Digital Images" },
      { bullet: "Fully Edited Digital Copy of Video" },
      { bullet: "Signature Album (10x10)" }
    ],
    bonus: "+ Add Second Videographer: November Only: Just $600!"
  },
  {
    name: "Photo Premier",
    category: "Photo",
    salePrice: "$2,695",
    savings: "$100",
    image: heroImg,
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
    savings: "$100",
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
    image: danceImg,
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

export default function Packages() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const filteredPackages = activeTab === "All" 
    ? packages 
    : packages.filter(pkg => pkg.category === activeTab);

  const featuredPackages = filteredPackages.filter(pkg => pkg.featured);
  const regularPackages = filteredPackages.filter(pkg => !pkg.featured);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow pt-24">
        {/* Header */}
        <section className="py-12 bg-white text-center">
          <div className="container mx-auto px-6">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3">
              Featured Photography & Video Packages
            </h1>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              We offer a variety of packages to suit your wedding needs.<br />
              We're Available on Your Wedding Day!
            </p>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-4 bg-white border-b">
          <div className="container mx-auto px-6">
            <div className="flex justify-center gap-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "text-sm font-medium transition-colors pb-2 border-b-2",
                    activeTab === tab 
                      ? "text-primary border-primary" 
                      : "text-muted-foreground border-transparent hover:text-foreground"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Sale Banner */}
        <section className="py-4 bg-rose-50 border-b">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Sparkles size={18} className="text-white" />
                </div>
                <p className="text-primary font-bold">Black Friday Sale! November Only!</p>
              </div>
              <p className="text-lg">
                We're Available on Your <span className="text-primary font-semibold">Wedding Day!</span>
              </p>
            </div>
          </div>
        </section>

        {/* Featured Packages - Full Width Rows */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-6">
            {featuredPackages.map((pkg, index) => (
              <div 
                key={index} 
                className={cn(
                  "grid md:grid-cols-2 gap-0 mb-8 bg-rose-50/50 rounded-lg overflow-hidden",
                  index % 2 === 0 ? "" : "md:direction-rtl"
                )}
              >
                {/* Content Side */}
                <div className={cn("p-8 md:p-10", index % 2 === 1 && "md:order-2")}>
                  {pkg.savings && index === 0 && (
                    <p className="text-primary text-sm font-medium mb-2">
                      $4,295 <span className="text-muted-foreground">Black Friday Sale until 11/30</span>
                    </p>
                  )}
                  <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">{pkg.name}</h2>
                  <p className="text-muted-foreground mb-1">
                    {pkg.listPrice && <span className="line-through mr-2">List Price {pkg.listPrice}</span>}
                    <span className="text-primary text-2xl font-bold">{pkg.salePrice}</span>
                  </p>

                  <div className="mt-6 space-y-3">
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
                    <p className="text-xs text-primary mt-4">
                      {pkg.bonus}
                    </p>
                  )}

                  <Button 
                    onClick={() => setSelectedPackage(pkg)}
                    className="mt-6 bg-primary hover:bg-primary/90 text-white rounded-full px-6"
                  >
                    View More Details <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>

                {/* Image Side */}
                <div className={cn("relative min-h-[350px] md:min-h-[450px]", index % 2 === 1 && "md:order-1")}>
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {pkg.savings && (
                    <div className="absolute top-6 right-6 bg-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg text-center p-2">
                      <span className="text-primary font-bold text-xl">${pkg.savings}</span>
                      <span className="text-primary text-xs font-medium">off</span>
                      <span className="text-muted-foreground text-[10px]">November only</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Regular Packages - 2 Column Grid */}
        {regularPackages.length > 0 && (
          <section className="py-8 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="grid md:grid-cols-2 gap-8">
                {regularPackages.map((pkg, index) => (
                  <div 
                    key={index} 
                    className="bg-rose-50/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  >
                    {/* Image with savings badge */}
                    <div className="relative">
                      <img 
                        src={pkg.image} 
                        alt={pkg.name}
                        className="w-full h-56 object-cover"
                      />
                      {pkg.savings && (
                        <div className="absolute top-4 left-4 bg-primary text-white rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-lg">
                          <span className="text-[10px]">Save</span>
                          <span className="font-bold text-sm">${pkg.savings}</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-bold mb-1">{pkg.name}</h3>
                      {pkg.subtitle && (
                        <p className="text-xs text-muted-foreground mb-2">{pkg.subtitle}</p>
                      )}
                      <p className="mb-4">
                        {pkg.listPrice && <span className="text-muted-foreground line-through text-sm mr-2">List Price {pkg.listPrice}</span>}
                        <span className="text-primary text-xl font-bold">{pkg.salePrice}</span>
                      </p>

                      {/* Card Features */}
                      <div className="space-y-2 mb-6">
                        {pkg.cardFeatures.map((feature, i) => (
                          <div key={i}>
                            {feature.label ? (
                              <p className="text-primary font-semibold text-sm">
                                {feature.label} - <span className="font-normal">{feature.value}</span>
                              </p>
                            ) : (
                              <p className="flex items-center gap-2 text-xs text-foreground/80">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                                {feature.bullet}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>

                      <Button 
                        onClick={() => setSelectedPackage(pkg)}
                        className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 text-sm"
                      >
                        View Details <ArrowRight size={14} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

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
