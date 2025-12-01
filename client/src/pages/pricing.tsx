import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Loader2 } from "lucide-react";
import heroImg from "@assets/generated_images/romantic_wedding_couple_under_veil.png";

export default function Pricing() {
  const { toast } = useToast();
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    weddingDate: "",
    weddingLocation: "",
    ceremonyVenue: "",
    receptionVenue: "",
    serviceType: "both",
    hearAboutUs: "",
    message: "",
  });

  const submitInquiry = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to submit inquiry");
      }
      
      return response.json();
    },
    onSuccess: () => {
      navigate("/packages");
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitInquiry.mutate(formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg})` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative container mx-auto px-8 text-center text-white">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/60 mb-4">Begin Your Journey</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-white">
              Request a Private<br />Consultation
            </h1>
            <div className="w-16 h-px bg-white/40 mx-auto mb-6"></div>
            <p className="text-lg text-white/70 max-w-xl mx-auto font-light">
              Share your vision with us, and we'll curate a bespoke package 
              tailored to your celebration.
            </p>
          </div>
        </section>

        {/* Inquiry Form */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-8 max-w-3xl">
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Your Information */}
              <div>
                <div className="text-center mb-10">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-3">Step One</p>
                  <h2 className="font-serif text-2xl font-light">Your Information</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">First Name *</Label>
                    <Input
                      id="firstName"
                      data-testid="input-first-name"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="First name"
                      className="rounded-none border-border/50 focus:border-primary py-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Last Name *</Label>
                    <Input
                      id="lastName"
                      data-testid="input-last-name"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Last name"
                      className="rounded-none border-border/50 focus:border-primary py-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Email *</Label>
                    <Input
                      id="email"
                      data-testid="input-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="rounded-none border-border/50 focus:border-primary py-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Phone Number</Label>
                    <Input
                      id="phone"
                      data-testid="input-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                      className="rounded-none border-border/50 focus:border-primary py-6"
                    />
                  </div>
                </div>
              </div>

              {/* Wedding Details */}
              <div>
                <div className="text-center mb-10">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-3">Step Two</p>
                  <h2 className="font-serif text-2xl font-light">Your Celebration</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="weddingDate" className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Wedding Date *</Label>
                    <Input
                      id="weddingDate"
                      data-testid="input-wedding-date"
                      type="date"
                      required
                      value={formData.weddingDate}
                      onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                      className="rounded-none border-border/50 focus:border-primary py-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weddingLocation" className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Location (City/State) *</Label>
                    <Input
                      id="weddingLocation"
                      data-testid="input-wedding-location"
                      required
                      value={formData.weddingLocation}
                      onChange={(e) => setFormData({ ...formData, weddingLocation: e.target.value })}
                      placeholder="New York, NY"
                      className="rounded-none border-border/50 focus:border-primary py-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ceremonyVenue" className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Ceremony Venue</Label>
                    <Input
                      id="ceremonyVenue"
                      data-testid="input-ceremony-venue"
                      value={formData.ceremonyVenue}
                      onChange={(e) => setFormData({ ...formData, ceremonyVenue: e.target.value })}
                      placeholder="Venue name"
                      className="rounded-none border-border/50 focus:border-primary py-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="receptionVenue" className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Reception Venue</Label>
                    <Input
                      id="receptionVenue"
                      data-testid="input-reception-venue"
                      value={formData.receptionVenue}
                      onChange={(e) => setFormData({ ...formData, receptionVenue: e.target.value })}
                      placeholder="Venue name"
                      className="rounded-none border-border/50 focus:border-primary py-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="serviceType" className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Service Interest *</Label>
                    <Select 
                      value={formData.serviceType} 
                      onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                    >
                      <SelectTrigger id="serviceType" data-testid="select-service-type" className="rounded-none border-border/50 py-6">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="photography">Photography</SelectItem>
                        <SelectItem value="videography">Cinematography</SelectItem>
                        <SelectItem value="both">Photography & Cinematography</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hearAboutUs" className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">How Did You Find Us?</Label>
                    <Select 
                      value={formData.hearAboutUs} 
                      onValueChange={(value) => setFormData({ ...formData, hearAboutUs: value })}
                    >
                      <SelectTrigger id="hearAboutUs" data-testid="select-hear-about-us" className="rounded-none border-border/50 py-6">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="google">Google Search</SelectItem>
                        <SelectItem value="theknot">The Knot</SelectItem>
                        <SelectItem value="weddingwire">WeddingWire</SelectItem>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="friend">Friend Referral</SelectItem>
                        <SelectItem value="vendor">Venue/Vendor Referral</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <Label htmlFor="message" className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Your Vision</Label>
                  <Textarea
                    id="message"
                    data-testid="textarea-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share your wedding vision, aesthetic preferences, or any details that would help us understand your celebration..."
                    rows={5}
                    className="rounded-none border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div className="text-center pt-4">
                <Button 
                  type="submit" 
                  size="lg"
                  data-testid="button-submit-inquiry"
                  disabled={submitInquiry.isPending}
                  className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground px-16 py-7 text-[11px] uppercase tracking-[0.2em] font-medium"
                >
                  {submitInquiry.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Request Consultation"
                  )}
                </Button>
                <p className="text-[11px] text-muted-foreground mt-6 max-w-md mx-auto">
                  Upon submission, you'll be directed to view our signature collections. 
                  A member of our team will reach out within 24 hours.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
