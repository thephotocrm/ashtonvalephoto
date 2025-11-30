import { Link } from "wouter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import photographer1 from "@assets/generated_images/female_photographer_portrait_1.png";
import photographer2 from "@assets/generated_images/male_photographer_portrait_1.png";
import photographer3 from "@assets/generated_images/female_videographer_portrait.png";

const photographers = [
  { name: "Tessa A.", location: "Nashville", image: photographer1, availability: "Limited" },
  { name: "Marcus T.", location: "Dallas", image: photographer2, availability: "Limited" },
  { name: "Elena C.", location: "Chicago", image: photographer3, availability: "Limited" },
  { name: "James W.", location: "New York", image: photographer2, availability: "Limited" },
  { name: "Sofia R.", location: "Los Angeles", image: photographer1, availability: "Limited" },
  { name: "David M.", location: "Miami", image: photographer2, availability: "Limited" },
  { name: "Rachel K.", location: "Boston", image: photographer3, availability: "Limited" },
  { name: "Michael P.", location: "Seattle", image: photographer2, availability: "Limited" },
];

export function FeaturedPhotographers() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Featured</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Photographers</h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {photographers.map((photographer, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <Link href="/how-it-works">
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-sm mb-4">
                      <Badge 
                        variant="secondary" 
                        className="absolute top-3 left-3 z-10 bg-white/90 text-xs uppercase tracking-wider"
                      >
                        {photographer.availability} Availability
                      </Badge>
                      <img 
                        src={photographer.image} 
                        alt={photographer.name}
                        className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-serif text-lg font-semibold">{photographer.name}</h3>
                    <p className="text-muted-foreground text-sm">{photographer.location}</p>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-0 -translate-x-1/2 bg-white border-border" />
            <CarouselNext className="right-0 translate-x-1/2 bg-white border-border" />
          </div>
        </Carousel>

        <div className="text-center mt-10">
          <Link href="/how-it-works" className="text-sm font-bold uppercase tracking-widest text-primary border-b-2 border-primary pb-1 hover:opacity-80 transition-opacity">
            See More Photographers
          </Link>
        </div>
      </div>
    </section>
  );
}
