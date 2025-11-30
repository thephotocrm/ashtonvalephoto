import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";
import brideImg from "@assets/generated_images/bride_holding_bouquet.png";

export function StyleTestCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Take the test</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Take the Style Test</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Ready to spice up your photographer research? Take a quick breather and dive into our Style Test – 
              it's like a mini adventure to help uncover your ultimate photographer match! Plus, it's so easy, 
              you'll be done before your latte gets cold.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Share a bit about your wedding vision</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Pick your favorite images</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Uncover your unique photography style</span>
              </li>
            </ul>

            <p className="text-sm text-muted-foreground mb-6">
              During your consultation, you'll see photographers that match your style preference.
            </p>

            <Link href="/pricing">
              <Button size="lg" className="rounded-none uppercase tracking-widest font-bold px-10">
                Let's Go
              </Button>
            </Link>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
            <img 
              src={brideImg} 
              alt="Bride with bouquet" 
              className="relative rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
