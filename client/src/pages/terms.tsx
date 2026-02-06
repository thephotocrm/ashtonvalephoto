import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        {/* Header */}
        <section className="pt-32 pb-16 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4 text-center">Legal</p>
            <h1 className="font-serif text-4xl md:text-5xl font-light mb-6 text-center">
              Terms of Service
            </h1>
            <div className="w-16 h-px bg-primary/40 mx-auto mb-6"></div>
            <p className="text-sm text-muted-foreground text-center">
              Last updated: February 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <div className="prose prose-neutral max-w-none space-y-8">

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">1. Services Overview</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Ashton Vale Photo & Video ("we," "us," or "our") provides professional wedding photography
                  and cinematography services. By booking our services, you agree to these Terms of Service.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">2. Booking & Retainer</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  A signed contract and non-refundable retainer are required to secure your wedding date.
                  The retainer reserves your date exclusively and compensates us for turning away other
                  potential clients. We accept a limited number of weddings per year to ensure each couple
                  receives our full creative attention.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">3. Payment Terms</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  The remaining balance is due 30 days prior to your wedding date. We accept payment via
                  bank transfer, credit card, or check. Late payments may result in a delay of deliverables.
                  Custom payment plans are available upon request.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">4. Cancellation & Rescheduling</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  The retainer is non-refundable. If you need to reschedule, we will work with you to find
                  a new date based on our availability. Rescheduling requests must be made in writing at
                  least 60 days before the original date. Cancellations within 60 days of the wedding date
                  may forfeit the full contract amount.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">5. Image Delivery & Timeline</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Edited photographs are delivered within 8-12 weeks following your wedding. Highlight films
                  are delivered within 12-16 weeks. Full ceremony and reception films may take up to 20 weeks.
                  Rush delivery is available for an additional fee.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">6. Copyright & Usage Rights</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We retain copyright of all images and films. You receive a personal use license allowing
                  you to print, share, and display your images for non-commercial purposes. We reserve the
                  right to use images for portfolio, social media, marketing, and award submissions unless
                  otherwise agreed in writing.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">7. Creative License</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  You trust us to capture your day in our signature editorial style. While we welcome shot
                  lists and inspiration, we maintain creative control over posing, composition, and final
                  editing. Our style is consistent across all work and cannot be altered per client request.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">8. Liability Limitations</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  In the unlikely event of equipment failure, illness, or circumstances beyond our control,
                  we will make every effort to provide a qualified replacement photographer. Our total
                  liability is limited to the amount paid for services. We are not responsible for key
                  moments missed due to venue restrictions, timeline changes, or guest interference.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">9. Guest Photographers</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We request that guests refrain from using flash photography or stepping into our shooting
                  positions during the ceremony and formal portraits. We cannot guarantee results if guests
                  obstruct our work.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">10. Contact</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  For questions about these terms, please contact us at{" "}
                  <a href="mailto:inquire@ashtonvalephoto.com" className="text-primary hover:underline">
                    inquire@ashtonvalephoto.com
                  </a>{" "}
                  or call{" "}
                  <a href="tel:+19722497048" className="text-primary hover:underline">
                    (972) 249-7048
                  </a>.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
