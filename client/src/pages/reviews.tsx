import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AwardsBanner } from "@/components/AwardsBanner";
import { FinalCTA } from "@/components/FinalCTA";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Star } from "lucide-react";
import reviewsHeroImg from "@assets/generated_images/first_look_moment.png";

const reviews = [
  {
    couple: "Tysheena & Isaac",
    award: "The Knot Best of Weddings 2025",
    quote: "Choosing a wedding photographer is no small feat. George Street helped us choose from a great list of photographers. From the first click of the camera to the final delivery of the gallery, our experience was nothing short of extraordinary."
  },
  {
    couple: "Lydia & Reid",
    award: "Best of Zola 2025",
    quote: "One of the biggest parts of a wedding day is having the memories captured in a way that allows you to be transported back. The photos we have are incredible and I can feel the exact way I did when we did our private vows, said I do, and had our first dance."
  },
  {
    couple: "Jonah & Catherine",
    award: "Couples' Choice Award 2025",
    quote: "When it comes to your wedding day, finding the right photographer can make all the difference in capturing those once-in-a-lifetime moments. After careful research, my partner and I chose George Street, and we couldn't be more thrilled with the results."
  },
  {
    couple: "Francesca & Paxton",
    award: "The Knot Hall of Fame",
    quote: "Choosing George Street was one of the best decisions I made for my wedding. Not only was the customer service best of the best, it all felt personalized. Everything truly felt like it was about what we wanted for our plan and budget."
  },
  {
    couple: "Maricris & Dylan",
    award: "Best of Zola 2025",
    quote: "George Street Photo & Video were a dream to work with. They were so fast to answer all of my emails and calls which really put me at ease during the planning process. The quality of their work was professional, and they had such great energy on the day of the wedding."
  },
  {
    couple: "Janine & Trace",
    award: "The Knot Best of Weddings 2025",
    quote: "Incredible! So professional, but fun! They made our day so magical."
  },
  {
    couple: "Jacqueline & Luca",
    award: "Couples' Choice Award 2025",
    quote: "George Street was a pleasure to work with. Our photographers were very professional, and had a wonderful eye for the details that make photos great. They were also very willing to adjust to our schedule and to take photos that we specially requested."
  },
  {
    couple: "Corrina & Matthew",
    award: "The Knot Best of Weddings 2025",
    quote: "We LOVED working with both our photographers. Investing in a second photographer was well worth it, so many more amazing memories were captured. They were attentive, friendly, everything we could have wanted and more."
  },
  {
    couple: "Sese & George",
    award: "The Knot Hall of Fame",
    quote: "We had an amazing experience with George Street. Everything was great from the quality, affordability, and communication. There was a variety of options for packages, and they checked in very often. Our wedding day was perfect."
  },
  {
    couple: "Holly & Robert",
    award: "Couples' Choice Award 2025",
    quote: "We selected George Street because we were able to choose which photographer we felt would capture our special day in the way we wanted! They offered a variety of photographers who were all super qualified."
  },
  {
    couple: "Danielle & Tyler",
    award: "Best of Zola 2025",
    quote: "Both photographers we worked with were personable and made us feel comfortable, capturing our wedding day beautifully. The addition of a videographer added an extra special touch, making it so much fun to look back on our special day."
  },
  {
    couple: "Margaret & Derek",
    award: "The Knot Hall of Fame",
    quote: "Exceptional service, communication, and professionalism. Exceeded our expectations! We love our beautiful photos and video--be prepared for happy tears!"
  },
];

export default function Reviews() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-white">
          <div className="container mx-auto px-6 text-center">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Reviews</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Hear what our couples say
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our greatest achievements are the smiles and kind words of the couples whose stories 
              we've had the privilege to tell.
            </p>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold mb-2">{review.couple}</h3>
                    <div className="flex items-center gap-2 text-xs text-primary uppercase tracking-wider mb-4">
                      <Award size={14} />
                      <span>{review.award}</span>
                    </div>
                    <div className="flex gap-0.5 text-primary mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed italic">
                      "{review.quote}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src={reviewsHeroImg} 
                  alt="Happy couple" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  Choose award-winning wedding photographers to capture your day
                </h2>
                <p className="text-muted-foreground mb-6">
                  Join thousands of happy couples who trusted George Street with their special day. 
                  We're proud to be the most reviewed photo and video company on WeddingWire.
                </p>
                <div className="flex gap-8 mb-8">
                  <div>
                    <p className="text-3xl font-bold text-primary">3,000+</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">Reviews</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">4.9</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">Average Rating</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">20+</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AwardsBanner />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
