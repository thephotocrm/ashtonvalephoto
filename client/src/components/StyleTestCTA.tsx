import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import brideImg from "@assets/generated_images/bride_holding_bouquet.png";

const steps = [
  "Share your vision and aesthetic preferences",
  "Review curated photographer portfolios",
  "Discover your signature style match"
];

export function StyleTestCTA() {
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Curated Matching</p>
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
              Find Your Signature Style
            </h2>
            <div className="divider-gold w-24 mb-8"></div>
            <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
              Every couple has a unique aesthetic vision. Our thoughtfully designed style consultation 
              helps us understand your preferences, ensuring we pair you with an artist whose work 
              resonates with your sensibility.
            </p>
            
            <ol className="space-y-6 mb-12">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-8 h-8 border border-primary/40 flex items-center justify-center text-xs text-primary flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-foreground/80 pt-1">{step}</span>
                </li>
              ))}
            </ol>

            <Link href="/pricing">
              <Button 
                size="lg" 
                className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-[11px] uppercase tracking-[0.2em] font-medium"
              >
                Begin Your Consultation
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="relative hidden md:block">
            <div className="absolute inset-4 border border-primary/20"></div>
            <img 
              src={brideImg} 
              alt="Elegant bride with bouquet" 
              className="relative w-full shadow-luxury-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
