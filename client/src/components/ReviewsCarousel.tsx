import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Award, Quote } from "lucide-react";

const reviews = [
  {
    couple: "Margaret & Derek",
    award: "The Knot Best of Weddings Hall of Fame",
    quote: "Exceptional service, communication, and professionalism. Exceeded our expectations! We love our beautiful photos and video--be prepared for happy tears!"
  },
  {
    couple: "Mikayla & Luis",
    award: "The Knot Best of Weddings 2024",
    quote: "From customer service to the photographers & videographers, everyone is very helpful, kind and professional. They only made our day better!"
  },
  {
    couple: "Kelli & William",
    award: "The Knot Best of Weddings 2024",
    quote: "Our wedding was amazing and we owe so much of that to Ashton Vale. They were super helpful from the start & made sure our photos were captured how we wanted."
  },
  {
    couple: "Tysheena & Isaac",
    award: "The Knot Best of Weddings 2025",
    quote: "Choosing a wedding photographer is no small feat. Ashton Vale helped us choose from a great list of photographers. From the first click of the camera to the final delivery of the gallery, our experience was nothing short of extraordinary."
  },
];

export function ReviewsCarousel() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Reviews</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What our customers are saying</h2>
            <p className="text-muted-foreground mb-6">
              We are proud to be the most reviewed photo and video company on WeddingWire!
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Read more than 3,000 of our reviews straight from the source!
            </p>
            <Link href="/reviews">
              <Button variant="outline" size="lg" className="rounded-none uppercase tracking-widest font-bold border-primary text-primary hover:bg-primary hover:text-white px-10">
                View All Reviews
              </Button>
            </Link>
          </div>

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
                    <div className="bg-white p-8 rounded-sm shadow-lg">
                      <Quote size={32} className="text-primary/20 mb-4" />
                      <h3 className="font-serif text-xl font-bold mb-2">{review.couple}</h3>
                      <div className="flex items-center gap-2 text-xs text-primary uppercase tracking-wider mb-6">
                        <Award size={14} />
                        <span>{review.award}</span>
                      </div>
                      <p className="text-foreground/80 leading-relaxed italic">
                        "{review.quote}"
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex gap-2 mt-6 justify-center">
                <CarouselPrevious className="static translate-y-0 bg-white border-border" />
                <CarouselNext className="static translate-y-0 bg-white border-border" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
