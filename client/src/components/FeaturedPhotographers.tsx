import austinImg from "@assets/Austin P.jpeg";
import georgeImg from "@assets/George T.jpg";
import dillonImg from "@assets/Dillon P.jpg";

const photographers = [
  {
    name: "Austin P.",
    image: austinImg,
    specialty: "Editorial",
    bio: "With an eye for timeless elegance, Austin captures the refined details and emotional moments that define your celebration."
  },
  {
    name: "George T.",
    image: georgeImg,
    specialty: "Documentary",
    bio: "George's documentary approach tells your story authentically, preserving the candid moments and genuine emotions of your day."
  },
  {
    name: "Dillon P.",
    image: dillonImg,
    specialty: "Cinematic",
    bio: "Dillon brings a cinematic vision to every frame, creating dramatic, movie-like imagery that transforms moments into art."
  },
];

export function FeaturedPhotographers() {
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Our Artists</p>
          <h2 className="text-3xl md:text-4xl font-serif font-light">Featured Photographers</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {photographers.map((photographer, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden shadow-luxury border border-transparent group-hover:border-primary/20 transition-all duration-500">
                {/* Specialty Badge */}
                <div className="absolute top-4 left-4 z-10 bg-white/95 px-3 py-1 shadow-sm">
                  <span className="text-[9px] uppercase tracking-[0.15em] text-foreground/70">
                    {photographer.specialty}
                  </span>
                </div>

                {/* Image */}
                <img
                  src={photographer.image}
                  alt={photographer.name}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Name at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-black py-4 px-4 transition-all duration-500 group-hover:opacity-0">
                  <h3 className="font-serif text-lg text-white text-center">{photographer.name}</h3>
                </div>

                {/* Bio overlay on hover */}
                <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex items-center justify-center p-6">
                  <div className="text-center">
                    <h3 className="font-serif text-xl text-white mb-4">{photographer.name}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{photographer.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
