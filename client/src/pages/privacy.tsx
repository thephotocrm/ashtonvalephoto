import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        {/* Header */}
        <section className="pt-32 pb-16 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4 text-center">Legal</p>
            <h1 className="font-serif text-4xl md:text-5xl font-light mb-6 text-center">
              Privacy Policy
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
                <h2 className="font-serif text-2xl font-light mb-4">Your Privacy Matters</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  At Ashton Vale Photo & Video, we respect your privacy and are committed to protecting
                  your personal information. This policy explains how we collect, use, and safeguard
                  the information you provide to us.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">Information We Collect</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
                  <li>Name, email address, and phone number when you inquire about our services</li>
                  <li>Wedding date, venue, and event details for planning purposes</li>
                  <li>Mailing address for contract and delivery purposes</li>
                  <li>Payment information processed securely through third-party providers</li>
                  <li>Photos and videos captured during your event</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">How We Use Your Information</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
                  <li>Respond to inquiries and schedule consultations</li>
                  <li>Plan and execute your wedding photography and videography</li>
                  <li>Deliver your images and films</li>
                  <li>Process payments and send invoices</li>
                  <li>Send important updates about your booking</li>
                  <li>Improve our services based on feedback</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">Portfolio & Marketing Use</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Unless otherwise specified in your contract, we may use images and films from your
                  wedding for our portfolio, website, social media, print materials, and industry
                  publications. We will never sell your images to third parties. If you prefer your
                  images remain private, please discuss this during your consultation.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">Data Security</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We implement industry-standard security measures to protect your personal information.
                  Your images are stored on secure, encrypted servers and backed up to prevent loss.
                  Payment information is processed through PCI-compliant third-party processors and
                  is never stored on our systems.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">Image Storage & Retention</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We retain your edited images for a minimum of one year following delivery. RAW files
                  are stored for 90 days after final delivery. We strongly recommend downloading and
                  backing up your gallery promptly. Extended storage is available upon request for
                  an additional fee.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">Third-Party Services</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We use trusted third-party services to operate our business, including:
                </p>
                <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
                  <li>Online gallery platforms for image delivery</li>
                  <li>Payment processors for secure transactions</li>
                  <li>Email services for communication</li>
                  <li>Cloud storage for secure file backup</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  These providers have their own privacy policies and are selected for their commitment
                  to data protection.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">Cookies & Analytics</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Our website uses cookies and analytics tools to understand how visitors interact
                  with our site. This helps us improve user experience. You can disable cookies in
                  your browser settings, though some features may not function properly.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">Your Rights</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
                  <li>Request access to the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information (subject to contractual obligations)</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request restrictions on portfolio use of your images</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">Contact Us</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  If you have questions about this privacy policy or wish to exercise your rights,
                  please contact us at{" "}
                  <a href="mailto:inquire@ashtonvalephoto.com" className="text-primary hover:underline">
                    inquire@ashtonvalephoto.com
                  </a>{" "}
                  or call{" "}
                  <a href="tel:+19722497048" className="text-primary hover:underline">
                    (972) 249-7048
                  </a>.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light mb-4">Policy Updates</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We may update this privacy policy from time to time. Changes will be posted on this
                  page with an updated revision date. Continued use of our services after changes
                  constitutes acceptance of the revised policy.
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
