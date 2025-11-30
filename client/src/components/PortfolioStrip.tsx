import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import img1 from "@assets/generated_images/bride_holding_bouquet.png";
import img2 from "@assets/generated_images/groom_adjusting_cufflinks.png";
import img3 from "@assets/generated_images/elegant_wedding_cake.png";
import img4 from "@assets/generated_images/couple_dancing_reception.png";

const portfolioItems = [
  { src: img1, alt: "Bride with Bouquet", category: "Details" },
  { src: img2, alt: "Groom Prep", category: "Getting Ready" },
  { src: img4, alt: "First Dance", category: "Reception" },
  { src: img3, alt: "Wedding Cake", category: "Decor" },
  { src: img1, alt: "Bride Portrait", category: "Portraits" }, 
];

export function PortfolioStrip() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-2">Real Weddings</h2>
          <p className="text-muted-foreground">Explore our latest love stories.</p>
        </div>
        <a href="#" className="hidden md:block text-sm font-bold uppercase tracking-widest border-b border-primary pb-1 hover:text-primary transition-colors">
          View Full Portfolio
        </a>
      </div>

      <div className="pl-6 md:pl-0 md:container md:mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {portfolioItems.map((item, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="group relative aspect-[3/4] overflow-hidden bg-muted cursor-pointer">
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-xs font-bold uppercase tracking-widest mb-2 text-primary-foreground">{item.category}</p>
                    <h3 className="font-serif text-2xl">{item.alt}</h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-4 bg-white/80 hover:bg-white border-none rounded-none h-12 w-12" />
            <CarouselNext className="right-4 bg-white/80 hover:bg-white border-none rounded-none h-12 w-12" />
          </div>
        </Carousel>
      </div>
      
      <div className="text-center mt-10 md:hidden">
        <a href="#" className="text-sm font-bold uppercase tracking-widest border-b border-primary pb-1">
          View Full Portfolio
        </a>
      </div>
    </section>
  );
}
