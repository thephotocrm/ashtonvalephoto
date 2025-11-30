import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FeaturedPhotographers } from "@/components/FeaturedPhotographers";
import { AwardsBanner } from "@/components/AwardsBanner";
import { FinalCTA } from "@/components/FinalCTA";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Search, Palette, MessageCircle, Camera, Heart, Shield } from "lucide-react";
import heroImg from "@assets/generated_images/first_look_moment.png";
import photographerImg from "@assets/generated_images/female_photographer_portrait_1.png";

const steps = [
  {
    icon: Search,
    title: "Find What Fits",
    description: "We make choosing the right package for your budget a breeze!"
  },
  {
    icon: Palette,
    title: "Take the Style Test",
    description: "Discover your style with our quick & easy style test! This helps us select portfolios specifically for your unique vision."
  },
  {
    icon: MessageCircle,
    title: "Let's Chat",
    description: "Choose a time to connect with one of our wedding consultants. They'll help you find the perfect coverage & photographer for your day."
  }
];

const whyUs = [
  {
    icon: Camera,
    title: "Professional Quality",
    description: "Our community of professional photographers and videographers are as talented and creative as they are passionate."
  },
  {
    icon: Heart,
    title: "Personalized Matching",
    description: "We're obsessively observant and believe that it's the combination of personal details that make your day truly yours."
  },
  {
    icon: Shield,
    title: "Rigorous Standards",
    description: "As the shining stars of Ashton Vale, our photographers have met our rigorous standards and extensive vetting process."
  }
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-white">
          <div className="container mx-auto px-6 text-center">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">How It Works</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Book your dream photographer in 3 easy steps!
            </h1>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <step.icon size={36} className="text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Photographers */}
        <FeaturedPhotographers />

        {/* Why Ashton Vale */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src={heroImg} 
                  alt="Wedding moment" 
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why Ashton Vale</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                  <p>
                    For over 20 years, Ashton Vale Photo & Video has perfected making the process of 
                    booking wedding day photography easy!
                  </p>
                  <p>
                    We're thrilled to offer an unbeatable value for wedding photography and videography, 
                    promising beautiful, quality images for years of reminiscing.
                  </p>
                  <p>
                    We know wedding planning can feel overwhelming, but with Ashton Vale, we will hold 
                    your hand every step of the way to make booking a photographer a breeze.
                  </p>
                </div>
                <Link href="/pricing">
                  <Button size="lg" className="rounded-none uppercase tracking-widest font-bold px-10">
                    Check Pricing & Availability
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Our Photographers */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why Our Photographers?</h2>
                <div className="space-y-6">
                  {whyUs.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-bold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src={photographerImg} 
                  alt="Our photographer" 
                  className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <AwardsBanner />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
