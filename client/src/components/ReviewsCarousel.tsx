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
    couple: "Margaret & Derek",
    location: "The Plaza, New York",
    quote: "Exceptional service, communication, and professionalism. Exceeded our expectations! We love our beautiful photos and video—be prepared for happy tears!"
  },
  {
    couple: "Mikayla & Luis",
    location: "Oheka Castle, Long Island",
    quote: "From customer service to the photographers & videographers, everyone is very helpful, kind and professional. They only made our day better!"
  },
  {
    couple: "Kelli & William",
    location: "Montage Laguna Beach",
    quote: "Our wedding was amazing and we owe so much of that to Ashton Vale. They were super helpful from the start & made sure our photos were captured how we wanted."
  },
  {
    couple: "Tysheena & Isaac",
    location: "The Ritz-Carlton, Philadelphia",
    quote: "Choosing a wedding photographer is no small feat. Ashton Vale helped us choose from a great list of photographers. Our experience was nothing short of extraordinary."
  },
];

export function ReviewsCarousel() {
  return (
    <section className="py-28 bg-ivory">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
              Words from Our Couples
            </h2>
            <div className="divider-gold w-24 mb-8"></div>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Each testimonial represents a story we were honored to capture. 
              Discover why discerning couples choose Ashton Vale for their most cherished moments.
            </p>
            <Link href="/reviews">
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-none text-[11px] uppercase tracking-[0.2em] font-medium border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary px-10 py-6"
              >
                Read All Testimonials
              </Button>
            </Link>
          </div>

          {/* Carousel */}
          <div>
            <Carousel
              opts={{
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {reviews.map((review, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-white p-10 shadow-luxury">
                      <Quote size={32} className="text-primary/20 mb-6" strokeWidth={1} />
                      <p className="text-foreground/80 leading-relaxed italic text-lg mb-8">
                        "{review.quote}"
                      </p>
                      <div className="border-t border-border pt-6">
                        <h3 className="font-serif text-lg mb-1">{review.couple}</h3>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                          {review.location}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex gap-2 mt-8 justify-center">
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
