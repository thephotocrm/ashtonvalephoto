import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AwardsBanner } from "@/components/AwardsBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import heroImg from "@assets/generated_images/couple_dancing_reception.png";
import brideImg from "@assets/generated_images/bride_holding_bouquet.png";

const tabs = ["All", "Photo", "Video", "Photo & Video"];

const packages = [
  {
    name: "Love Captured Package",
    category: "Photo & Video",
    listPrice: "$6,420",
    salePrice: "$4,895",
    savings: "$600 off",
    featured: true,
    features: [
      "Lead Photographer - 8 Hours",
      "Choose Your Lead Photographer",
      "Associate Photographer - 8 Hours",
      "Lead Videographer - 8 Hours",
      "90-Minute Photo Session",
      "Downloadable Digital Images",
      "Fully Edited Digital Copy of Video",
      "Fine Art Album (12x12)",
      "Replica Albums (6x6)",
      "Free Canvas Print",
      "$100 Print Credit"
    ]
  },
  {
    name: "Photo & Video Suite",
    category: "Photo & Video",
    listPrice: "$4,850",
    salePrice: "$3,495",
    savings: "Save $300",
    featured: false,
    features: [
      "Lead Photographer - 8 Hours",
      "Choose Your Lead Photographer",
      "Associate Photographer - 6 Hours",
      "Lead Videographer - 8 Hours",
      "Team of Wedding Coordinators",
      "Downloadable Digital Images",
      "Fully Edited Digital Copy of Video",
      "Signature Album (10x10)"
    ],
    bonus: "+ Add Second Videographer: November Only: Just $600!"
  },
  {
    name: "Photo Premier",
    category: "Photo",
    salePrice: "$2,695",
    savings: "Save $100",
    featured: false,
    features: [
      "Lead Photographer - 8 Hours",
      "Choose Lead Photographer",
      "Associate Photographer - 6 Hours",
      "Downloadable Digital Images",
      "Signature Album (10x10)"
    ]
  },
  {
    name: "Photo Select",
    category: "Photo",
    salePrice: "$1,895",
    featured: false,
    features: [
      "Lead Photographer - 8 Hours",
      "Choose Lead Photographer",
      "Downloadable Digital Images"
    ]
  },
  {
    name: "Video Premier",
    category: "Video",
    salePrice: "$2,795",
    subtitle: "($2,995 Without Photo Package)",
    savings: "Save $100",
    featured: false,
    features: [
      "Lead Videographer - 8 Hours",
      "Associate Videographer - 6 Hours",
      "Cinematic Digital Highlight Reel",
      "Fully Edited Digital Copy of Video",
      "Cinematic Video (1-minute, perfect for social sharing)"
    ]
  },
  {
    name: "Video Select",
    category: "Video",
    salePrice: "$2,195",
    subtitle: "($2,395 Without Photo Package)",
    featured: false,
    features: [
      "Lead Videographer - 8 Hours",
      "Fully Edited Digital Copy of Video",
      "Unlimited Locations"
    ]
  },
  {
    name: "Photo Session",
    category: "Photo",
    salePrice: "$600",
    featured: false,
    features: [
      "Lead Photographer - 1.5 Hours",
      "90 Minutes with Photographer",
      "Unlimited Locations",
      "Downloadable Digital Images",
      "Hand Color Corrected Images"
    ]
  }
];

export default function Packages() {
  const [activeTab, setActiveTab] = useState("All");

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

        {/* Packages Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map((pkg, index) => (
                <Card 
                  key={index} 
                  className={cn(
                    "relative overflow-hidden transition-shadow hover:shadow-xl",
                    pkg.featured && "border-primary border-2 shadow-lg"
                  )}
                >
                  {pkg.featured && (
                    <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2 text-xs font-bold uppercase tracking-widest">
                      Most Popular
                    </div>
                  )}
                  {pkg.savings && (
                    <Badge className="absolute top-4 right-4 bg-green-600 hover:bg-green-700">
                      {pkg.savings}
                    </Badge>
                  )}
                  <CardHeader className={cn("pb-4", pkg.featured && "pt-12")}>
                    <h3 className="font-serif text-xl font-bold">{pkg.name}</h3>
                    {pkg.subtitle && (
                      <p className="text-xs text-muted-foreground">{pkg.subtitle}</p>
                    )}
                    <div className="mt-4">
                      {pkg.listPrice && (
                        <p className="text-sm text-muted-foreground line-through">List Price {pkg.listPrice}</p>
                      )}
                      <p className="text-3xl font-bold text-primary">{pkg.salePrice}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {pkg.bonus && (
                      <p className="text-xs bg-amber-50 text-amber-800 p-3 rounded mb-4">
                        {pkg.bonus}
                      </p>
                    )}
                    <Button 
                      className="w-full rounded-none uppercase tracking-widest text-xs"
                      variant={pkg.featured ? "default" : "outline"}
                    >
                      View More Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Coupon Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-amber-100/50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
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
                  src={heroImg} 
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
    </div>
  );
}
