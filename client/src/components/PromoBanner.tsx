import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import coupleImg from "@assets/generated_images/couple_dancing_reception.png";

export function PromoBanner() {
  return (
    <section className="relative py-16 bg-gradient-to-r from-amber-50 to-amber-100/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative z-10">
            <div className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-2 mb-6">
              Black Friday Sale
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-black">
              $600 Off the<br />Love Captured Package
            </h2>
            <p className="text-lg text-foreground/80 mb-6">
              Our biggest sale of the year! Book now to save the most! Hurry, sale ends soon!
            </p>
            <ul className="space-y-2 mb-8 text-sm text-foreground/70">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                $300 off Photo & Video Suite
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                $100 off Premier Packages
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Free canvas print & $100 credit
              </li>
            </ul>
            <Link href="/pricing">
              <Button size="lg" className="rounded-none uppercase tracking-widest font-bold px-8">
                Learn More
              </Button>
            </Link>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <img 
              src={coupleImg} 
              alt="Wedding couple dancing" 
              className="relative rounded-lg shadow-2xl w-full max-w-md mx-auto"
            />
            <div className="absolute -bottom-4 -left-4 bg-white shadow-xl p-6 rounded-sm">
              <p className="text-5xl font-bold text-primary">$600</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">off</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
