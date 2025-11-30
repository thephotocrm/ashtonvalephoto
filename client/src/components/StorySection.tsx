import heroImg from "@assets/generated_images/romantic_wedding_couple_under_veil.png";

export function StorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-lg"></div>
            <img 
              src={heroImg} 
              alt="Wedding couple" 
              className="relative rounded-lg shadow-xl w-full"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Your Love Story Starts Here.
            </h2>
            <p className="text-xl font-serif italic text-primary mb-6">
              And ends happily ever after.
            </p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Not through words. Through moments. Memories. Glimpses of pure emotion—unfiltered 
                and unexpected. That's where the magic happens. We capture it all as your love 
                story unfolds on your big day.
              </p>
              <p>
                Since 2004, we've been playing matchmaker, pairing real-life couples with their 
                perfect wedding photographer and videographer to document that cloud-nine, 
                once-in-a-lifetime feeling, photo by photo.
              </p>
              <p>
                After the confetti lands, the cake is cut and the sparklers fade, your photos or 
                your movie-like wedding film is the one lasting piece of proof that this 
                unbelievable night really happened. And yes, it was as incredible as you remember it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
