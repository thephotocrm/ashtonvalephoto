import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Video, Heart, Calendar } from "lucide-react";

const services = [
  {
    title: "Wedding Photography",
    description: "Our photographers are artists who capture the candid, emotional, and beautiful moments of your day. We focus on storytelling through imagery.",
    icon: Camera,
    price: "Packages from $1,200"
  },
  {
    title: "Wedding Videography",
    description: "Relive your vows, speeches, and first dance with a cinematic wedding film. We create heirlooms that you will cherish forever.",
    icon: Video,
    price: "Packages from $1,000"
  },
  {
    title: "Engagement Sessions",
    description: "Get comfortable in front of the camera before the big day. Engagement sessions are the perfect way to celebrate your proposal.",
    icon: Heart,
    price: "Sessions from $400"
  }
];

export function Services() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            We offer comprehensive packages designed to capture every angle of your special day. 
            Customize your experience to fit your unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg bg-white rounded-sm overflow-hidden hover:translate-y-[-5px] transition-transform duration-300">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-serif">{service.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-auto w-full">
                  <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">{service.price}</p>
                  <Button variant="outline" className="w-full rounded-none uppercase tracking-wider border-primary text-primary hover:bg-primary hover:text-white">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
