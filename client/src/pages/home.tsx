import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { PortfolioStrip } from "@/components/PortfolioStrip";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <Services />
        <PortfolioStrip />
        <Testimonials />
        
        {/* Final CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Ready to start your journey?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Check availability for your wedding date and get a custom quote today.
            </p>
            <button className="bg-white text-black uppercase tracking-widest font-bold py-4 px-10 text-sm hover:bg-neutral-100 transition-colors shadow-xl">
              Check Availability
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
