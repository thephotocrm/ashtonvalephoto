import { Link } from "wouter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import photographer1 from "@assets/generated_images/female_photographer_portrait_1.png";
import photographer2 from "@assets/generated_images/male_photographer_portrait_1.png";
import photographer3 from "@assets/generated_images/female_videographer_portrait.png";

const photographers = [
  { name: "Tessa Ashworth", location: "Nashville", image: photographer1, specialty: "Editorial" },
  { name: "Marcus Thorne", location: "Dallas", image: photographer2, specialty: "Documentary" },
  { name: "Elena Chen", location: "Chicago", image: photographer3, specialty: "Cinematic" },
  { name: "James Whitmore", location: "New York", image: photographer2, specialty: "Editorial" },
  { name: "Sofia Reyes", location: "Los Angeles", image: photographer1, specialty: "Fine Art" },
  { name: "David Mitchell", location: "Miami", image: photographer2, specialty: "Documentary" },
  { name: "Rachel Kim", location: "Boston", image: photographer3, specialty: "Cinematic" },
  { name: "Michael Pierce", location: "Seattle", image: photographer2, specialty: "Editorial" },
];

export function FeaturedPhotographers() {
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Our Artists</p>
            <h2 className="text-3xl md:text-4xl font-serif font-light">Featured Photographers</h2>
          </div>
          <Link 
            href="/how-it-works" 
            className="text-[11px] uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition-colors mt-6 md:mt-0"
          >
            View All Artists →
          </Link>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {photographers.map((photographer, index) => (
              <CarouselItem key={index} className="pl-6 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <Link href="/how-it-works">
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden mb-5">
                      {/* Specialty Badge */}
                      <div className="absolute top-4 left-4 z-10 bg-white/95 px-3 py-1">
                        <span className="text-[9px] uppercase tracking-[0.15em] text-foreground/70">
                          {photographer.specialty}
                        </span>
                      </div>
                      {/* Image */}
                      <div className="overflow-hidden">
                        <img 
                          src={photographer.image} 
                          alt={photographer.name}
                          className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                    </div>
                    <h3 className="font-serif text-lg mb-1">{photographer.name}</h3>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">{photographer.location}</p>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-0 -translate-x-1/2 bg-white border-border/50 hover:bg-primary hover:text-white hover:border-primary" />
            <CarouselNext className="right-0 translate-x-1/2 bg-white border-border/50 hover:bg-primary hover:text-white hover:border-primary" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
