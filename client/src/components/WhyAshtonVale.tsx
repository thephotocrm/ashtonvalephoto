import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Gem, Shield, Palette, Heart, Award } from "lucide-react";

const benefits = [
  {
    icon: Gem,
    title: "Bespoke Service",
    description: "Every detail tailored to your unique vision and celebration."
  },
  {
    icon: Shield,
    title: "Two Decades of Mastery",
    description: "Refined expertise in capturing authentic, emotive moments."
  },
  {
    icon: Palette,
    title: "Curated Matching",
    description: "We pair you with the perfect artist for your aesthetic."
  },
  {
    icon: Heart,
    title: "Concierge Experience",
    description: "White-glove service from first consultation to final delivery."
  },
  {
    icon: Award,
    title: "Acclaimed Excellence",
    description: "Recognized among the industry's most distinguished studios."
  }
];

export function WhyAshtonVale() {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">The Ashton Vale Difference</p>
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
            Why Discerning Couples Choose Us
          </h2>
          <div className="divider-gold w-24 mx-auto"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 border border-primary/30 flex items-center justify-center mx-auto mb-6 group-hover:border-primary/60 transition-colors">
                <benefit.icon size={24} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg mb-3">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            asChild
            size="lg"
            className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-7 text-[11px] uppercase tracking-[0.2em] font-medium"
          >
            <Link href="/pricing">
              Request a Consultation
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
