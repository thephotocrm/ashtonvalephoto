import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-white/95 backdrop-blur-sm py-4 shadow-sm border-border" : "bg-transparent py-6 text-white"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className={cn("font-serif text-2xl md:text-3xl font-bold tracking-tight uppercase cursor-pointer", isScrolled ? "text-foreground" : "text-white")}>
          George Street
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["Photography", "Videography", "Portfolio", "Pricing", "Locations"].map((item) => (
            <a
              key={item}
              href="#"
              className={cn(
                "text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors",
                isScrolled ? "text-foreground/80" : "text-white/90"
              )}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button 
            variant={isScrolled ? "default" : "outline"} 
            className={cn(
              "rounded-none uppercase tracking-widest font-semibold px-8 transition-all",
              !isScrolled && "bg-white/10 border-white text-white hover:bg-white hover:text-black border-2"
            )}
          >
            Check Availability
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-foreground" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg md:hidden p-6 flex flex-col space-y-4 animate-in slide-in-from-top-5">
          {["Photography", "Videography", "Portfolio", "Pricing", "Locations"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-foreground font-medium uppercase tracking-widest text-sm hover:text-primary py-2 border-b border-border/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button className="w-full rounded-none uppercase tracking-widest mt-4">
            Check Availability
          </Button>
        </div>
      )}
    </nav>
  );
}
