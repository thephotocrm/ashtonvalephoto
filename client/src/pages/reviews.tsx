import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Quote } from "lucide-react";
import reviewsHeroImg from "@assets/generated_images/first_look_moment.png";

const reviews = [
  {
    couple: "Tysheena & Isaac",
    location: "The Ritz-Carlton, Philadelphia",
    quote: "Choosing a wedding photographer is no small feat. Ashton Vale helped us choose from a great list of photographers. From the first click of the camera to the final delivery of the gallery, our experience was nothing short of extraordinary."
  },
  {
    couple: "Lydia & Reid",
    location: "Montage Laguna Beach",
    quote: "One of the biggest parts of a wedding day is having the memories captured in a way that allows you to be transported back. The photos we have are incredible and I can feel the exact way I did when we said our vows."
  },
  {
    couple: "Jonah & Catherine",
    location: "The Plaza, New York",
    quote: "When it comes to your wedding day, finding the right photographer can make all the difference. After careful research, we chose Ashton Vale, and we couldn't be more thrilled with the results."
  },
  {
    couple: "Francesca & Paxton",
    location: "Oheka Castle, Long Island",
    quote: "Choosing Ashton Vale was one of the best decisions I made for my wedding. The customer service was exceptional—it all felt personalized. Everything truly felt tailored to our vision and style."
  },
  {
    couple: "Maricris & Dylan",
    location: "Four Seasons, Miami",
    quote: "Ashton Vale were a dream to work with. They were incredibly responsive, which really put me at ease during planning. The quality of their work was outstanding, and they brought such wonderful energy on the day."
  },
  {
    couple: "Janine & Trace",
    location: "Private Estate, Napa Valley",
    quote: "Incredible! So professional, yet personable. They made our day absolutely magical."
  },
  {
    couple: "Jacqueline & Luca",
    location: "The Breakers, Palm Beach",
    quote: "Ashton Vale was a pleasure to work with. Our photographers had a wonderful eye for the details that make photos extraordinary. They were attentive and captured everything we requested."
  },
  {
    couple: "Corrina & Matthew",
    location: "Bel-Air Bay Club",
    quote: "We LOVED working with both our photographers. Investing in a second photographer was absolutely worth it—so many more amazing memories were captured. They exceeded every expectation."
  },
  {
    couple: "Sese & George",
    location: "Waldorf Astoria, Chicago",
    quote: "We had an exceptional experience with Ashton Vale. The quality, professionalism, and communication were all outstanding. Our wedding day was captured perfectly."
  },
  {
    couple: "Holly & Robert",
    location: "Rainbow Room, New York",
    quote: "We selected Ashton Vale because we were able to choose our photographer. They offered a curated selection of incredibly talented artists, each with their own distinctive style."
  },
  {
    couple: "Danielle & Tyler",
    location: "Hotel del Coronado, San Diego",
    quote: "Both photographers made us feel completely comfortable, capturing our wedding day beautifully. The addition of cinematography added an extra special dimension to reliving our day."
  },
  {
    couple: "Margaret & Derek",
    location: "The Pierre, New York",
    quote: "Exceptional service, communication, and professionalism. They exceeded our expectations in every way. We adore our photos and film—prepare for happy tears!"
  },
];

export default function Reviews() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden bg-neutral-900">
          <div className="container mx-auto px-8 text-center text-white">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/50 mb-4">Testimonials</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-white">
              In Their Words
            </h1>
            <div className="w-16 h-px bg-white/30 mx-auto mb-6"></div>
            <p className="text-lg text-white/60 max-w-xl mx-auto font-light">
              The greatest honor is earning the trust of discerning couples 
              on their most important day.
            </p>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div 
                  key={index} 
                  className="bg-ivory p-8 border border-border/30 hover:shadow-luxury transition-shadow duration-500"
                >
                  <Quote size={28} className="text-primary/20 mb-6" strokeWidth={1} />
                  <p className="text-foreground/80 leading-relaxed italic mb-8">
                    "{review.quote}"
                  </p>
                  <div className="border-t border-border/50 pt-6">
                    <p className="font-serif text-lg mb-1">{review.couple}</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {review.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-ivory">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute inset-4 border border-primary/20"></div>
                <img 
                  src={reviewsHeroImg} 
                  alt="Intimate wedding moment" 
                  className="relative w-full shadow-luxury-lg"
                />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Our Legacy</p>
                <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">
                  Trusted by Thousands
                </h2>
                <p className="text-muted-foreground mb-10 leading-relaxed">
                  For over two decades, we've had the privilege of documenting love stories 
                  across the country's most distinguished venues. Our couples' words are our 
                  greatest testament.
                </p>
                <div className="grid grid-cols-3 gap-8 mb-10">
                  <div className="text-center">
                    <p className="text-4xl font-serif text-primary mb-2">3,000+</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Reviews</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-serif text-primary mb-2">4.9</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Rating</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-serif text-primary mb-2">20+</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Years</p>
                  </div>
                </div>
                <Button 
                  asChild
                  size="lg"
                  className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-[11px] uppercase tracking-[0.2em] font-medium"
                >
                  <Link href="/pricing">
                    Begin Your Story
                  </Link>
                </Button>
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
