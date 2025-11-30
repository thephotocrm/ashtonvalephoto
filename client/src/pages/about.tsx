import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AwardsBanner } from "@/components/AwardsBanner";
import { FinalCTA } from "@/components/FinalCTA";
import heroImg from "@assets/generated_images/romantic_wedding_couple_under_veil.png";
import brideImg from "@assets/generated_images/bride_holding_bouquet.png";
import firstLookImg from "@assets/generated_images/first_look_moment.png";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg})` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative h-full container mx-auto px-6 flex items-center justify-center text-center text-white">
            <div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">About Ashton Vale</h1>
              <p className="text-xl text-white/80">The Ashton Vale Motto: Love What You Do</p>
            </div>
          </div>
        </section>

        {/* Our Network */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Network of Talent</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    For 20 years, Ashton Vale Photo & Video has been dedicated to capturing life's most 
                    important moments. As an award-winning photo and video company, we take immense pride 
                    in our products and services.
                  </p>
                  <p>
                    What sets us apart? Our team is all in, doing what they love every day. Our network of 
                    photographers and videographers finds joy in capturing the natural beauty of emotional moments.
                  </p>
                  <p>
                    Our sales team delights in helping couples find the perfect package and talent for their 
                    special day. Our wedding coordinators are committed to going above and beyond to ensure 
                    our couples' experience exceeds their expectations.
                  </p>
                  <p>
                    Our editors thrive on utilizing their creativity to produce high-quality images and videos 
                    that tell the story of each wedding day. This genuine enthusiasm of our small but mighty 
                    team makes us one of a kind.
                  </p>
                  <p className="font-medium text-foreground">
                    Love is at the heart of everything we do—from the commitment to our craft, to the spark 
                    between all of our couples. This has been the secret to our success from day one.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={brideImg} 
                  alt="Bride with bouquet" 
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Award Winning */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-sm shadow-lg text-center">
                    <p className="text-4xl font-bold text-primary mb-2">20+</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">Years of Experience</p>
                  </div>
                  <div className="bg-white p-6 rounded-sm shadow-lg text-center">
                    <p className="text-4xl font-bold text-primary mb-2">3,000+</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">5-Star Reviews</p>
                  </div>
                  <div className="bg-white p-6 rounded-sm shadow-lg text-center">
                    <p className="text-4xl font-bold text-primary mb-2">10x</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">Couples' Choice Award</p>
                  </div>
                  <div className="bg-white p-6 rounded-sm shadow-lg text-center">
                    <p className="text-4xl font-bold text-primary mb-2">Hall</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">of Fame Member</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Award-Winning Wedding Photo & Video</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    At Ashton Vale Photo & Video, we are celebrating 20 years of expertise and joy in 
                    capturing the moments that matter most to our couples.
                  </p>
                  <p>
                    We're thrilled to have been inducted into the prestigious Knot Hall of Fame, following 
                    multiple wins of the Knot's Best of Weddings Award, and WeddingWire's Couples' Choice award.
                  </p>
                  <p>
                    From sweet stolen glances to your energetic first dance, our team is committed to creating 
                    candid and photojournalistic photos and videos that keep the memories of your day alive 
                    for years to come.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Budget Friendly */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  Effortless & Budget-Friendly Wedding Planning
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Ashton Vale has been specializing in candid, photojournalistic photography for 20 years. 
                    With the passion of our team as our backbone, we are dedicated to providing beautiful 
                    photos and videos at prices that suit any budget.
                  </p>
                  <p>
                    Explore our flexible payment plans that are tailored to your individual needs.
                  </p>
                  <p>
                    We also believe that planning your wedding should be as fun as the day itself. Our team 
                    of wedding coordinators, intuitive Planning Portal, and easy Style Test are here to make 
                    your experience as one-of-a-kind as your love story.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={firstLookImg} 
                  alt="First look moment" 
                  className="rounded-lg shadow-2xl w-full"
                />
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
