import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroImage from "@assets/generated_images/romantic_wedding_couple_under_veil.png";

export function Hero() {
  return (
    <div className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 flex flex-col justify-center items-center text-center text-white pt-20">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Timeless Wedding <br className="hidden md:block" />
          <span className="italic font-normal text-primary-foreground/90">Photography & Videography</span>
        </h1>
        
        <p className="text-lg md:text-xl max-w-2xl mb-10 text-white/90 font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Capturing the authentic beauty of your love story with an editorial touch. Available nationwide.
        </p>

        {/* Availability Form */}
        <div className="bg-white p-4 md:p-6 rounded-sm shadow-2xl w-full max-w-4xl flex flex-col md:flex-row gap-4 items-end animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <div className="w-full md:flex-1 space-y-2 text-left">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Select Your City</label>
            <Select>
              <SelectTrigger className="w-full rounded-none border-0 border-b border-input bg-transparent px-0 shadow-none focus:ring-0 focus:border-primary text-foreground font-serif text-lg">
                <SelectValue placeholder="Where are you getting married?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ny">New York</SelectItem>
                <SelectItem value="la">Los Angeles</SelectItem>
                <SelectItem value="chi">Chicago</SelectItem>
                <SelectItem value="hou">Houston</SelectItem>
                <SelectItem value="mia">Miami</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full md:flex-1 space-y-2 text-left">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Wedding Date</label>
            <Input 
              type="date" 
              className="w-full rounded-none border-0 border-b border-input bg-transparent px-0 shadow-none focus-visible:ring-0 focus-visible:border-primary text-foreground font-serif text-lg"
            />
          </div>

          <div className="w-full md:w-auto">
            <Button size="lg" className="w-full rounded-none uppercase tracking-widest font-bold py-6 px-8 bg-primary hover:bg-primary/90 text-primary-foreground">
              Check Availability
            </Button>
          </div>
        </div>
        
        <div className="mt-8 flex gap-4 text-sm font-medium uppercase tracking-widest text-white/80 animate-in fade-in duration-1000 delay-700">
            <span>✓ Trusted by 1000+ Couples</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">✓ Best of Weddings 2024</span>
        </div>
      </div>
    </div>
  );
}
