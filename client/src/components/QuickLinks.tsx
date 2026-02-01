import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import firstLookImg from "@assets/generated_images/first_look_moment.png";
import brideImg from "@assets/generated_images/bride_holding_bouquet.png";
import receptionImg from "@assets/generated_images/reception_dance_party.png";

const quickLinks = [
  {
    title: "Inquire",
    subtitle: "View Pricing & Availability",
    description: "Tailored packages for your unique celebration",
    image: firstLookImg,
    href: "/pricing"
  },
  {
    title: "Discover",
    subtitle: "Your Signature Style",
    description: "Find the aesthetic that speaks to you",
    image: brideImg,
    href: "/style-quiz"
  },
  {
    title: "Explore",
    subtitle: "Our Curated Portfolio",
    description: "Intimate moments, artfully captured",
    image: receptionImg,
    href: "/portfolio"
  }
];

export function QuickLinks() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {quickLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <div className="group relative overflow-hidden cursor-pointer h-[420px] hover-lift">
                {/* Image */}
                <img 
                  src={link.image} 
                  alt={link.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                {/* Border Frame */}
                <div className="absolute inset-4 border border-white/20 transition-all duration-500 group-hover:inset-6"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 mb-2">{link.title}</p>
                  <h3 className="font-serif text-2xl font-light mb-2 text-white">{link.subtitle}</h3>
                  <p className="text-sm text-white/70 mb-4">{link.description}</p>
                  <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/80 group-hover:text-white transition-colors">
                    Learn More <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
