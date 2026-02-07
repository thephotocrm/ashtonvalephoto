import { Award } from "lucide-react";

const awards = [
  { name: "The Knot Best of Weddings", year: "2025" },
  { name: "Couples' Choice Awards", year: "2025" },
  { name: "Best of Zola", year: "2025" },
  { name: "The Knot Hall of Fame", year: "" },
  { name: "WeddingWire Rated", year: "" },
  { name: "BBB A+ Rating", year: "" },
];

export function AwardsBanner() {
  return (
    <section className="py-20 bg-foreground text-white">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/50 mb-4">Recognition</p>
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-4 text-white">
            Ashton Vale Photo & Video
          </h2>
          <div className="divider-gold w-24 mx-auto mb-6"></div>
          <p className="text-white/60 text-sm uppercase tracking-[0.2em]">
            Two Decades of Capturing Life's Most Precious Moments
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {awards.map((award, i) => (
            <div 
              key={i} 
              className="text-center p-6 border border-white/10 hover:border-white/20 transition-colors group"
            >
              <Award size={28} className="mx-auto mb-4 text-primary opacity-80 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              <p className="text-xs text-white/80 font-medium mb-1">{award.name}</p>
              {award.year && (
                <p className="text-[10px] text-white/40">{award.year}</p>
              )}
            </div>
          ))}
        </div>

        {/* Taglines */}
        <div className="flex justify-center gap-12 mt-16 text-[10px] uppercase tracking-[0.2em] text-white/40">
          <span>Award-Winning Artistry</span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline">Editorial Excellence</span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline">Timeless Storytelling</span>
        </div>
      </div>
    </section>
  );
}
