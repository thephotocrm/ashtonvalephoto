import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Quote } from "lucide-react";
import reviewsHeroImg from "@assets/generated_images/first_look_moment.png";

const reviews = [
  {
    couple: "Delaney W.",
    location: "The Knot",
    quote: "Our photographer was THE BEST we could've asked for! He was so prepared, and it was clear that he loves what he does. He took time to have a planning session with us and asked what kinds of photos we're going to look back on and smile at. He was right there on the dance floor with us, capturing every moment. He was calm, collected, and had a plan in place to ensure everything on our shot list got done."
  },
  {
    couple: "Hanna V.",
    location: "The Knot",
    quote: "Ashton Vale has been through every stage with us! They were the photographer for our secret proposal, engagement shoot & our wedding day. I cannot explain how much we have loved them! They provided consistent communication, support & of course amazing forever photos. They truly make you feel like family. Our families couldn't stop raving about them."
  },
  {
    couple: "Haleigh A.",
    location: "The Knot",
    quote: "Choosing Ashton Vale as our photographer was by far one of the best choices we made. Even with the weather working against us they easily figured out any hurdles we faced and made the experience so easy and fun! A month later and our guests are still raving about how much they loved our photographer!"
  },
  {
    couple: "Kelsey M.",
    location: "The Knot",
    quote: "Ashton Vale is the ultimate photographer! My husband and I love working with them. They did our engagement and wedding photos which turned out so stunning! They were very responsive and during our sessions were friendly, professional, and helped us to be our natural selves."
  },
  {
    couple: "Ashley F.",
    location: "The Knot",
    quote: "Our photographer was prompt, friendly, and helpful. He captured many details from our day and skillfully transitioned between capturing candid moments to posed family photos. His unique way of looking at the environment was apparent. The angles, lighting, etc. were incredible and we looked amazing!"
  },
  {
    couple: "Lindsay M.",
    location: "The Knot",
    quote: "Although a million things were running through our heads, anxious to ensure our day was perfect, Ashton Vale managed to stop time for a second and capture the love and excitement for our big day. They were fun, patient, and understanding. We will never have enough words to express just how thankful we are."
  },
  {
    couple: "Gabriela N.",
    location: "The Knot",
    quote: "I am blown away with the outcome of the photos Ashton Vale captured for our wedding. Seriously the perfect duo, and very talented. They are both professional, punctual, and have the greatest personalities! They went above and beyond to capture the most beautiful moments and photographs."
  },
  {
    couple: "Rebecca S.",
    location: "The Knot",
    quote: "We are so happy after working with Ashton Vale. One thing we love is their amazing eye for phenomenal shots. In addition to shots after the ceremony, they brought us outside for pictures during sunset, as well as moonlit pictures towards the end of the night. They go above and beyond in their work."
  },
  {
    couple: "Maegan P.",
    location: "Thumbtack",
    quote: "OBSESSED with our wedding photographer. They made us feel so comfortable, when we're genuinely not too crazy about being in front of a camera. We have gotten TONS of people from our wedding that reached out just to tell us how much they loved our photographer. Truly the nicest!"
  },
  {
    couple: "Natasha H.",
    location: "Thumbtack",
    quote: "Ashton Vale made our wedding day such an amazing experience. Their communication and setup were amazing, inviting and simple. They were on time and made everyone in our party very comfortable while taking photos. Our videography was everything we could have ever wanted."
  },
  {
    couple: "Edgar & Princess A.",
    location: "Thumbtack",
    quote: "Had such a great experience! They definitely make you feel comfortable and bring you out of your shell as a shy couple. Pictures came out beautiful! They really listened to what we wanted and cared for what we requested. BOOK WITH THEM NOW!"
  },
  {
    couple: "Everly M.",
    location: "Thumbtack",
    quote: "What makes them amazing photographers is their sensitivity to their couples. They take the time to get to know you, understand what makes you tick, and figure out how to bring the very best of you out in photographs—even if you're camera shy and nervous. Whatever it takes, they're gonna do it."
  },
  {
    couple: "Austin P.",
    location: "Thumbtack",
    quote: "His photographs were simply stunning, mainly because he managed to somehow capture the essence of the day. My favorite pictures are the ones where he captured the spirit and emotion—the giddiness on our faces, the pride my dad felt giving his speech. He did all this while being completely unobtrusive during our day."
  },
  {
    couple: "Jennifer R.",
    location: "Thumbtack",
    quote: "When we first met with Ashton Vale, both my husband and I knew they were the right choice. My husband hates getting his photo taken but even he said he had a great time! Our engagement session was so much fun. For our wedding, they captured everything perfectly! I'm so glad I trusted their creative ideas."
  },
  {
    couple: "Madeleine W.",
    location: "Thumbtack",
    quote: "My experience from the start was amazing! Ashton Vale was extremely responsive, very professional, and executed perfectly. We had the perfect blend of staged and candid photos. Also very punctual and polite, a big win in our book!"
  },
];

export default function Reviews() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden bg-neutral-900">
          <div className="container mx-auto px-8 text-center text-white">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/50 mb-4">Testimonials</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-white">
              In Their Words
            </h1>
            <div className="w-16 h-px bg-white/30 mx-auto mb-6"></div>
            <p className="text-lg text-white/60 max-w-xl mx-auto font-light">
              The greatest honor is earning the trust of discerning couples 
              on their most important day.
            </p>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-ivory p-8 border border-border/30 shadow-luxury hover:border-primary/20 transition-all duration-500"
                >
                  <Quote size={28} className="text-primary/30 mb-6" strokeWidth={1} />
                  <p className="font-serif text-foreground/80 leading-relaxed italic mb-8">
                    <span className="text-primary/40 text-xl font-serif">"</span>
                    {review.quote}
                    <span className="text-primary/40 text-xl font-serif">"</span>
                  </p>
                  <div className="border-t border-border/50 pt-6">
                    <p className="font-serif text-lg mb-1">{review.couple}</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {review.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-ivory">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute inset-4 border border-primary/20"></div>
                <img 
                  src={reviewsHeroImg} 
                  alt="Intimate wedding moment" 
                  className="relative w-full shadow-luxury-lg"
                />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Our Legacy</p>
                <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">
                  Trusted by Thousands
                </h2>
                <p className="text-muted-foreground mb-10 leading-relaxed">
                  For half a decade, we've had the privilege of documenting love stories
                  across the country's most distinguished venues. Our couples' words are our
                  greatest testament.
                </p>
                <div className="grid grid-cols-3 gap-8 mb-10">
                  <div className="text-center">
                    <p className="text-4xl font-serif text-primary mb-2">100+</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Reviews</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-serif text-primary mb-2">4.9</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Rating</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-serif text-primary mb-2">5+</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Years</p>
                  </div>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-[11px] uppercase tracking-[0.2em] font-medium hover:shadow-luxury hover:scale-[1.02] transition-all duration-300"
                >
                  <Link href="/pricing">
                    Begin Your Story
                  </Link>
                </Button>
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
