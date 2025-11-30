import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function FinalCTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
          Ready to start your journey?
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Check availability for your wedding date and get a custom quote today.
        </p>
        <Link href="/pricing">
          <Button 
            size="lg"
            className="bg-white text-black uppercase tracking-widest font-bold py-6 px-10 text-sm hover:bg-neutral-100 transition-colors shadow-xl rounded-none"
          >
            Check Availability
          </Button>
        </Link>
      </div>
    </section>
  );
}
