import { Link } from "wouter";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <h3 className="font-serif text-3xl font-light mb-6 text-white">
              <span className="font-extralight">Ashton</span> Vale
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-xs">
              Crafting timeless wedding imagery for discerning couples who appreciate 
              the art of storytelling.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors" 
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Wedding Photography</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Cinematic Films</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Engagement Sessions</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Destination Weddings</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">Studio</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">The Experience</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Inquire</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">Private Consultations</h4>
            <address className="not-italic text-sm text-white/60 space-y-4">
              <p className="text-white/80">New York  •  Los Angeles  •  Destination</p>
              <p className="pt-4">
                <a href="mailto:hello@ashtonvale.com" className="text-white hover:text-primary transition-colors">
                  hello@ashtonvale.com
                </a>
              </p>
              <p>
                <a href="tel:+18005551234" className="hover:text-white transition-colors">
                  +1 (800) 555-1234
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-gold mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 uppercase tracking-[0.2em]">
          <p>&copy; {new Date().getFullYear()} Ashton Vale Photo & Video</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
