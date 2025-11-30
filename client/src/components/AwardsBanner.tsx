import { Award, Star, Shield } from "lucide-react";

const awards = [
  { name: "The Knot Best of Weddings 2025" },
  { name: "Couples' Choice Awards 2025" },
  { name: "Best of Zola 2025" },
  { name: "The Knot Hall of Fame" },
  { name: "WeddingWire Rated" },
  { name: "BBB A+ Rating" },
  { name: "The Knot Best of Weddings 2024" },
  { name: "Couples' Choice Awards 2024" },
];

export function AwardsBanner() {
  return (
    <section className="py-10 bg-neutral-900 text-white overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">Ashton Vale Photo & Video</h2>
        <p className="text-neutral-400 text-sm uppercase tracking-widest">Celebrating 20 Years of Capturing Life's Most Important Moments</p>
        <div className="flex justify-center gap-8 mt-4 text-xs uppercase tracking-widest text-neutral-300">
          <span className="flex items-center gap-2">
            <Star size={14} className="text-primary" /> Award-Winning Candid Photography
          </span>
          <span className="hidden md:flex items-center gap-2">
            <Star size={14} className="text-primary" /> Photojournalistic Style
          </span>
        </div>
      </div>
      
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...awards, ...awards, ...awards].map((award, i) => (
            <div key={i} className="flex items-center mx-8 text-sm font-medium text-neutral-300">
              <Award size={20} className="mr-2 text-primary" />
              <span>{award.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
