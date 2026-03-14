import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/reviews", label: "Testimonials" },
  { href: "/about", label: "Our Story" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const showTransparent = !isScrolled;

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 nav-glass-transition",
          showTransparent
            ? "bg-transparent py-8"
            : "glass-dark py-4 border-b border-white/10"
        )}
      >
        <div className="w-full max-w-[1400px] mx-auto px-8 flex items-center justify-between">
          {/* Logo - Left */}
          <Link
            href="/"
            className="cursor-pointer transition-all duration-300"
          >
            <img
              src="/abbie-street-logo-white.png"
              alt="Abbie Street Photo & Video"
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Nav Links - Right */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-300 nav-link-animated",
                  showTransparent ? "text-white" : "text-white/90",
                  location === link.href ? "opacity-60" : "hover:opacity-80"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              variant="outline"
              className={cn(
                "rounded-none text-[10px] uppercase tracking-[0.2em] font-medium px-6 py-5 transition-all duration-300 border",
                showTransparent
                  ? "bg-transparent border-white/40 text-white hover:bg-white hover:text-black"
                  : "bg-transparent border-white/30 text-white hover:bg-white hover:text-black"
              )}
            >
              <Link href="/pricing">
                View Pricing & Availability
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden z-[60]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="text-white" size={24} />
            ) : (
              <Menu className="text-white" size={24} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Outside nav for proper fixed positioning */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[55] bg-black/95 lg:hidden flex flex-col items-center justify-center animate-fade-in">
          <button
            className="absolute top-8 right-8 z-[60]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="text-white" size={28} />
          </button>

          <div className="flex flex-col items-center space-y-8">
            <Link
              href="/"
              className={cn(
                "text-white font-serif text-2xl tracking-wide hover:opacity-60 transition-opacity",
                location === "/" && "opacity-60"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-white font-serif text-2xl tracking-wide hover:opacity-60 transition-opacity",
                  location === link.href && "opacity-60"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-8 border-t border-white/20 mt-8">
              <Button
                asChild
                variant="outline"
                className="rounded-none text-[11px] uppercase tracking-[0.2em] font-medium px-10 py-6 bg-transparent border-white/40 text-white hover:bg-white hover:text-black"
              >
                <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
                  View Pricing & Availability
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
