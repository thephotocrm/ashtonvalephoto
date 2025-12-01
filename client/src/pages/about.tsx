import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import heroImg from "@assets/generated_images/romantic_wedding_couple_under_veil.png";
import brideImg from "@assets/generated_images/bride_holding_bouquet.png";
import firstLookImg from "@assets/generated_images/first_look_moment.png";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full container mx-auto px-8 flex items-center justify-center text-center text-white">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/60 mb-4">Our Story</p>
              <h1 className="font-serif text-4xl md:text-6xl font-light mb-6 text-white">The Ashton Vale Atelier</h1>
              <div className="w-16 h-px bg-white/40 mx-auto mb-6"></div>
              <p className="text-lg text-white/70 max-w-xl mx-auto font-light">
                Where passion meets artistry, and every frame tells a story.
              </p>
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="py-28 bg-white">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Our Collective</p>
                <h2 className="text-3xl md:text-4xl font-serif font-light mb-8">A Curated Network of Visionaries</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    For two decades, Ashton Vale has cultivated an exclusive collective of the world's most 
                    distinguished wedding photographers and cinematographers. Each artist is personally 
                    selected for their exceptional eye, refined technique, and ability to capture emotion 
                    in its purest form.
                  </p>
                  <p>
                    What distinguishes our work is an unwavering commitment to excellence. Our artists 
                    don't simply document—they interpret, elevate, and immortalize the subtle poetry 
                    of your celebration.
                  </p>
                  <p>
                    From our dedicated concierge team to our master editors, every member of the 
                    Ashton Vale family is devoted to crafting an experience that exceeds expectations 
                    at every turn.
                  </p>
                  <p className="font-serif text-foreground italic text-lg">
                    "Love is at the heart of everything we do—from our commitment to the craft, 
                    to the spark between every couple we serve."
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-4 border border-primary/20"></div>
                <img 
                  src={brideImg} 
                  alt="Elegant bride with bouquet" 
                  className="relative w-full shadow-luxury-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Accolades */}
        <section className="py-28 bg-ivory">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-8 text-center border border-border/30">
                    <p className="text-4xl font-serif text-primary mb-2">20+</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Years of Excellence</p>
                  </div>
                  <div className="bg-white p-8 text-center border border-border/30">
                    <p className="text-4xl font-serif text-primary mb-2">3,000+</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">5-Star Reviews</p>
                  </div>
                  <div className="bg-white p-8 text-center border border-border/30">
                    <p className="text-4xl font-serif text-primary mb-2">10×</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Couples' Choice</p>
                  </div>
                  <div className="bg-white p-8 text-center border border-border/30">
                    <p className="text-3xl font-serif text-primary mb-2">Hall of Fame</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Inductee</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Recognition</p>
                <h2 className="text-3xl md:text-4xl font-serif font-light mb-8">Celebrated Excellence</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    At Ashton Vale, we measure success not by accolades, but by the tears of joy when 
                    couples receive their galleries. Yet, we are deeply honored to be recognized among 
                    the industry's most distinguished studios.
                  </p>
                  <p>
                    Our induction into The Knot Hall of Fame—following consecutive Best of Weddings 
                    Awards and WeddingWire Couples' Choice recognition—reflects our team's unwavering 
                    dedication to exceptional artistry.
                  </p>
                  <p>
                    From the whispered vows to the exuberant celebration, our artists capture the 
                    full emotional arc of your day with an editorial sensibility that transforms 
                    moments into heirlooms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Experience */}
        <section className="py-28 bg-white">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">The Experience</p>
                <h2 className="text-3xl md:text-4xl font-serif font-light mb-8">
                  Effortless Elegance, From Start to Finish
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    We believe that crafting your visual legacy should be as beautiful as the 
                    celebration itself. From your first consultation to the delivery of your 
                    finished collection, every interaction is designed to delight.
                  </p>
                  <p>
                    Our proprietary style consultation helps us understand your aesthetic vision, 
                    ensuring we pair you with an artist whose work resonates with your sensibility. 
                    Your dedicated concierge guides you through every decision with warmth and expertise.
                  </p>
                  <p>
                    The result? A seamless, white-glove experience that allows you to focus on 
                    what matters most—celebrating your love.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-4 border border-primary/20"></div>
                <img 
                  src={firstLookImg} 
                  alt="Intimate first look moment" 
                  className="relative w-full shadow-luxury-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
