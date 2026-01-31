import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FeaturedPhotographers } from "@/components/FeaturedPhotographers";
import { FinalCTA } from "@/components/FinalCTA";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Sparkles, MessageCircle, Camera, Heart, Shield, Gem } from "lucide-react";
import heroImg from "@assets/generated_images/first_look_moment.png";
import photographerImg from "@assets/Austin P.jpeg";

const steps = [
  {
    number: "01",
    title: "Discover Your Style",
    description: "Our curated style consultation reveals your aesthetic preferences, ensuring we match you with an artist whose vision aligns with yours."
  },
  {
    number: "02",
    title: "Private Consultation",
    description: "Connect with your dedicated concierge to explore our signature collections and discuss how we can tailor coverage to your celebration."
  },
  {
    number: "03",
    title: "Meet Your Artist",
    description: "Review hand-selected portfolios and choose the photographer or cinematographer who speaks to your heart."
  }
];

const differentiators = [
  {
    icon: Camera,
    title: "Artistic Excellence",
    description: "Our curated collective of artists brings editorial sensibility and refined technique to every celebration."
  },
  {
    icon: Heart,
    title: "Bespoke Matching",
    description: "We believe the right artist transforms images into art. Our matching process ensures perfect alignment."
  },
  {
    icon: Shield,
    title: "Rigorous Curation",
    description: "Every artist in our collective has met our exacting standards through a comprehensive vetting process."
  }
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden bg-neutral-900">
          <div className="container mx-auto px-8 text-center text-white">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/50 mb-4">The Experience</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-white">
              Your Journey to<br />Extraordinary
            </h1>
            <div className="w-16 h-px bg-white/30 mx-auto mb-6"></div>
            <p className="text-lg text-white/60 max-w-xl mx-auto font-light">
              A thoughtfully designed process that ensures every couple 
              is paired with their ideal artist.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-28 bg-white">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-3 gap-16">
              {steps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative inline-block mb-8">
                    <span className="font-serif text-6xl text-primary/20 group-hover:text-primary/40 transition-colors">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <Button
                asChild
                size="lg"
                className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-7 text-[11px] uppercase tracking-[0.2em] font-medium hover:shadow-luxury hover:scale-[1.02] transition-all duration-300"
              >
                <Link href="/pricing">
                  Begin Your Journey
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Photographers */}
        <FeaturedPhotographers />

        {/* Why Ashton Vale */}
        <section className="py-28 bg-ivory">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute inset-4 border border-primary/20"></div>
                <img 
                  src={heroImg} 
                  alt="Intimate wedding moment" 
                  className="relative w-full shadow-luxury-lg"
                />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Our Promise</p>
                <h2 className="text-3xl md:text-4xl font-serif font-light mb-8">The Ashton Vale Difference</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed mb-10">
                  <p>
                    For half a decade, we have refined the art of pairing discerning couples with 
                    exceptional artists. Our approach transcends traditional photography services—we 
                    offer a curated experience designed for those who appreciate the extraordinary.
                  </p>
                  <p>
                    From your initial consultation through the delivery of your finished collection, 
                    our dedicated concierge team ensures every detail exceeds expectations. We don't 
                    simply capture moments—we craft visual legacies.
                  </p>
                  <p>
                    Wedding planning should be joyful, not overwhelming. With Ashton Vale, you gain 
                    a partner who understands that trust, taste, and attention to detail matter.
                  </p>
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-none border-foreground/30 text-foreground hover:bg-foreground hover:text-white px-10 py-6 text-[11px] uppercase tracking-[0.2em] font-medium hover:shadow-luxury hover:scale-[1.02] transition-all duration-300"
                >
                  <Link href="/pricing">
                    Request a Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Our Photographers */}
        <section className="py-28 bg-white">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Our Artists</p>
                <h2 className="text-3xl md:text-4xl font-serif font-light mb-10">Why Our Collective?</h2>
                <div className="space-y-8">
                  {differentiators.map((item, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="w-14 h-14 border border-primary/30 flex items-center justify-center flex-shrink-0">
                        <item.icon size={22} className="text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-4 border border-primary/20"></div>
                <img 
                  src={photographerImg} 
                  alt="Ashton Vale artist" 
                  className="relative w-full max-w-md mx-auto shadow-luxury-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
