import { Link } from "wouter";
import firstLookImg from "@assets/generated_images/first_look_moment.png";
import brideImg from "@assets/generated_images/bride_holding_bouquet.png";
import receptionImg from "@assets/generated_images/reception_dance_party.png";

const quickLinks = [
  {
    title: "Pricing & Availability",
    description: "Affordable options that fit your unique day.",
    image: firstLookImg,
    href: "/pricing"
  },
  {
    title: "Take the Style Test",
    description: "Discover your individual photography style!",
    image: brideImg,
    href: "/pricing"
  },
  {
    title: "View Portfolio",
    description: "Browse our wedding, engagement & video work.",
    image: receptionImg,
    href: "/portfolio"
  }
];

export function QuickLinks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <div className="group relative overflow-hidden rounded-sm cursor-pointer h-64">
                <img 
                  src={link.image} 
                  alt={link.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-serif text-xl font-bold mb-1">{link.title}</h3>
                  <p className="text-sm text-white/80">{link.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
