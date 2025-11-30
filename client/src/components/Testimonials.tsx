import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah & James",
    location: "New York, NY",
    quote: "The team at George Street was incredible. They made us feel so comfortable and the photos turned out absolutely stunning. We couldn't be happier!",
    rating: 5
  },
  {
    name: "Emily & Michael",
    location: "Chicago, IL",
    quote: "Our video makes me cry every time I watch it. They captured the emotion of the day perfectly. Highly recommend to any couple looking for quality.",
    rating: 5
  },
  {
    name: "Jessica & David",
    location: "Los Angeles, CA",
    quote: "Professional, punctual, and talented. The booking process was easy and the results speak for themselves. Thank you for everything!",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kind Words</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-none bg-transparent shadow-none">
              <CardContent className="flex flex-col items-center text-center p-0">
                <div className="flex gap-1 text-primary mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="font-serif text-xl italic mb-8 leading-relaxed text-foreground/80">
                  "{t.quote}"
                </blockquote>
                <div>
                  <p className="font-bold uppercase tracking-widest text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider mt-1">{t.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
