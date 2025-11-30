import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { DollarSign, Award, Sparkles, CreditCard, Trophy } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Affordable",
    description: "Beautiful photography and videography at budget-friendly prices."
  },
  {
    icon: Award,
    title: "Experts for 20+ Years",
    description: "Specializing in candid photography for 20 years."
  },
  {
    icon: Sparkles,
    title: "Easy Customization",
    description: "Let our style test help you find the perfect photographer."
  },
  {
    icon: CreditCard,
    title: "Payment Plans",
    description: "Explore our flexible payment plans tailored to your needs."
  },
  {
    icon: Trophy,
    title: "Award Winning",
    description: "The Knot Hall of Fame member. Multi-year winners of Best of Weddings award."
  }
];

export function WhyGeorgeStreet() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Why George Street</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Celebrating 20 Years of Capturing Life's Most Important Moments.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/pricing">
            <Button size="lg" className="rounded-none uppercase tracking-widest font-bold px-10">
              Check Pricing & Availability
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
