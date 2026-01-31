import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const reviews = [
  {
    couple: "Delaney W.",
    location: "The Knot",
    quote: "Our photographer was THE BEST we could've asked for! He was calm, collected, and had a plan in place to ensure everything on our shot list got done. He was right there on the dance floor with us, capturing every moment."
  },
  {
    couple: "Hanna V.",
    location: "The Knot",
    quote: "Ashton Vale has been through every stage with us! They provided consistent communication, support & amazing forever photos. They truly make you feel like family. Our families couldn't stop raving about them."
  },
  {
    couple: "Lindsay M.",
    location: "The Knot",
    quote: "Ashton Vale managed to stop time for a second and capture the love and excitement for our big day. They were fun, patient, and understanding. We will never have enough words to express just how thankful we are."
  },
  {
    couple: "Austin P.",
    location: "Thumbtack",
    quote: "His photographs were simply stunning, mainly because he managed to capture the essence of the day. My favorite pictures are the ones where he captured the spirit and emotion of our wedding."
  },
];

export function ReviewsCarousel() {
  return (
    <section className="py-16 md:py-28 bg-ivory overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Testimonials</p>
            <h2 className="text-2xl md:text-4xl font-serif font-light mb-6">
              Words from Our Couples
            </h2>
            <div className="divider-gold w-24 mb-8 mx-auto md:mx-0"></div>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Each testimonial represents a story we were honored to capture. 
              Discover why discerning couples choose Ashton Vale for their most cherished moments.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-none text-[11px] uppercase tracking-[0.2em] font-medium border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-luxury hover:scale-[1.02] px-8 md:px-10 py-6 transition-all duration-300"
            >
              <Link href="/reviews">
                Read All Testimonials
              </Link>
            </Button>
          </div>

          {/* Carousel */}
          <div className="w-full overflow-hidden">
            <Carousel
              opts={{
                loop: true,
              }}
              className="w-full max-w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {reviews.map((review, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4">
                    <div className="bg-white p-6 md:p-10 shadow-luxury border border-transparent hover:border-primary/20 transition-all duration-300">
                      <Quote size={28} className="text-primary/20 mb-4 md:mb-6" strokeWidth={1} />
                      <p className="font-serif text-foreground/80 leading-relaxed italic text-base md:text-lg mb-6 md:mb-8">
                        <span className="text-primary/40 text-2xl font-serif leading-none">"</span>
                        {review.quote}
                        <span className="text-primary/40 text-2xl font-serif leading-none">"</span>
                      </p>
                      <div className="border-t border-border pt-4 md:pt-6">
                        <h3 className="font-serif text-base md:text-lg mb-1">{review.couple}</h3>
                        <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                          {review.location}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex gap-2 mt-6 md:mt-8 justify-center">
                <CarouselPrevious className="static translate-y-0 bg-white border-border/50 hover:bg-primary hover:text-white hover:border-primary w-10 h-10" />
                <CarouselNext className="static translate-y-0 bg-white border-border/50 hover:bg-primary hover:text-white hover:border-primary w-10 h-10" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
