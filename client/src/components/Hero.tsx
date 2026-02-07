import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/romantic_wedding_couple_under_veil.png";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Romantic wedding couple sharing an intimate moment under a lace veil at golden hour"
          className="w-full h-full object-cover object-center"
        />
        {/* Elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-8 flex flex-col items-center justify-center text-center text-white">
        {/* Concierge Badge */}
        <div className="mb-8 animate-fade-up opacity-0 stagger-1">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/70 border border-white/30 px-6 py-2">
            Bespoke Wedding Photography
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-white leading-[1.1] animate-fade-up opacity-0 stagger-2">
          Timeless Moments,
          <br />
          <span className="italic font-normal">Artfully Preserved</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 font-light tracking-wide leading-relaxed animate-fade-up opacity-0 stagger-3">
          We craft intimate, editorial imagery for discerning couples 
          who seek nothing less than extraordinary.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 stagger-4">
          <Button
            asChild
            size="lg"
            className="rounded-none bg-white text-black hover:bg-white/90 px-10 py-7 text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:shadow-luxury hover:scale-[1.02]"
          >
            <Link href="/pricing">
              Reserve Your Date
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-none bg-transparent border-white/40 text-white hover:bg-white/10 px-10 py-7 text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:scale-[1.02]"
          >
            <Link href="/portfolio">
              View Portfolio
            </Link>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in opacity-0" style={{ animationDelay: '1s' }}>
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
