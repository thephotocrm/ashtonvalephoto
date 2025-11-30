import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
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

  const isHomePage = location === "/";
  const showTransparent = isHomePage && !isScrolled;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        showTransparent ? "bg-transparent py-6 text-white" : "bg-white/95 backdrop-blur-sm py-4 shadow-sm border-border"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className={cn(
            "font-serif text-xl md:text-2xl font-bold tracking-tight uppercase cursor-pointer", 
            showTransparent ? "text-white" : "text-foreground"
          )}
        >
          George Street
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors",
                showTransparent ? "text-white/90" : "text-foreground/80",
                location === link.href && "text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link href="/pricing">
            <Button 
              variant={showTransparent ? "outline" : "default"} 
              className={cn(
                "rounded-none uppercase tracking-widest font-semibold px-6 transition-all text-sm",
                showTransparent && "bg-white/10 border-white text-white hover:bg-white hover:text-black border-2"
              )}
            >
              Check Availability
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? (
            <X className={showTransparent ? "text-white" : "text-foreground"} />
          ) : (
            <Menu className={showTransparent ? "text-white" : "text-foreground"} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg lg:hidden p-6 flex flex-col space-y-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-foreground font-medium uppercase tracking-widest text-sm hover:text-primary py-2 border-b border-border/50",
                location === link.href && "text-primary"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="w-full rounded-none uppercase tracking-widest mt-4">
              Check Availability
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
