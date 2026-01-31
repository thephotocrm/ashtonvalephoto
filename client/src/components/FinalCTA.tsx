import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImg from "@assets/generated_images/romantic_wedding_couple_under_veil.png";

export function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-8 text-center text-white">
        <p className="text-[10px] uppercase tracking-[0.4em] text-white/60 mb-6">Begin Your Journey</p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-white leading-tight">
          Your Story Deserves<br />
          <span className="italic">Extraordinary</span>
        </h2>
        <p className="text-lg text-white/70 max-w-xl mx-auto mb-12 font-light">
          Let us craft a timeless collection of moments 
          that will be treasured for generations.
        </p>
        <Button
          asChild
          size="lg"
          className="rounded-none bg-white text-black hover:bg-white/90 px-12 py-7 text-[11px] uppercase tracking-[0.2em] font-medium hover:shadow-luxury hover:scale-[1.02] transition-all duration-300"
        >
          <Link href="/pricing">
            Request a Private Consultation
          </Link>
        </Button>
      </div>
    </section>
  );
}
