import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl font-bold mb-6">George Street</h3>
            <p className="text-neutral-400 mb-6 text-sm leading-relaxed">
              Capturing love stories with timeless elegance and modern style. Available for weddings worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-primary">Services</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">Photography</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Videography</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Engagement Sessions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Destination Weddings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Photo Booths</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-primary">Company</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-primary">Contact</h4>
            <address className="not-italic text-sm text-neutral-400 space-y-3">
              <p>123 Wedding Avenue</p>
              <p>New York, NY 10001</p>
              <p className="mt-4"><a href="tel:+18005551234" className="hover:text-white">+1 (800) 555-1234</a></p>
              <p><a href="mailto:hello@georgestreet.com" className="hover:text-white">hello@georgestreet.com</a></p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} George Street Photo & Video. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
