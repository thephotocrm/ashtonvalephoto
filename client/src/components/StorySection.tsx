import storyImg from "@assets/2024-November-09-17-51-53.jpg";

export function StorySection() {
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-4 border border-primary/20"></div>
            <img 
              src={storyImg}
              alt="Romantic wedding moment" 
              className="relative w-full shadow-luxury-lg"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Our Philosophy</p>
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
              Your Story, Artfully Told
            </h2>
            <p className="text-xl font-serif italic text-primary/80 mb-8">
              Where moments become legacy.
            </p>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Not through words alone—through light, gesture, and the subtle interplay of emotion. 
                We capture the whispered promises, the stolen glances, the unguarded joy that defines 
                your celebration.
              </p>
              <p>
                For half a decade, we have curated an exclusive collective of the world's most distinguished
                wedding photographers and cinematographers. Each artist is selected for their mastery
                of editorial storytelling and their ability to document love in its most authentic form.
              </p>
              <p>
                Long after the evening fades, your gallery and film become cherished heirlooms—
                tangible proof of an extraordinary chapter in your love story.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
