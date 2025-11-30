import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AwardsBanner } from "@/components/AwardsBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { Loader2, Check } from "lucide-react";
import saleImg from "@assets/generated_images/couple_dancing_reception.png";

export default function Pricing() {
  const { toast } = useToast();
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
      toast({
        title: "Inquiry Submitted!",
        description: "Thank you for your interest. A wedding consultant will reach out within 24 hours.",
      });
      setFormData({
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
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-muted/50 to-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Pricing & Availability</h1>
          </div>
        </section>

        {/* Sale Banner */}
        <section className="py-12 bg-gradient-to-r from-primary/10 to-amber-100/50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-2 mb-4">
                  Black Friday Sale
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  $600 Off the Love Captured Package
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our biggest sale of the year! Book now to save the most! Hurry, sale ends soon!
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    $300 off the Photo & Video Suite
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    $100 off Premier Packages
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    $200 off Engagement Sessions
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    25% off Albums
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    Free canvas print & $100 print credit
                  </li>
                </ul>
              </div>
              <div className="relative hidden md:block">
                <img 
                  src={saleImg} 
                  alt="Wedding couple" 
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                />
                <div className="absolute -bottom-4 -left-4 bg-white shadow-xl p-4 rounded-sm">
                  <p className="text-4xl font-bold text-primary">$600</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">off</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold mb-4">Get Your Custom Quote</h2>
              <p className="text-muted-foreground">
                Please provide a few details for prices and availability on your wedding day.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Your Information */}
              <div>
                <h3 className="font-serif text-xl font-bold mb-6 pb-2 border-b">Your Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      data-testid="input-first-name"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="First name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      data-testid="input-last-name"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Last name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      data-testid="input-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      data-testid="input-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Wedding Details */}
              <div>
                <h3 className="font-serif text-xl font-bold mb-6 pb-2 border-b">Wedding Details</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="weddingDate">Wedding Date *</Label>
                    <Input
                      id="weddingDate"
                      data-testid="input-wedding-date"
                      type="date"
                      required
                      value={formData.weddingDate}
                      onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weddingLocation">Wedding Location (City/State) *</Label>
                    <Input
                      id="weddingLocation"
                      data-testid="input-wedding-location"
                      required
                      value={formData.weddingLocation}
                      onChange={(e) => setFormData({ ...formData, weddingLocation: e.target.value })}
                      placeholder="New York, NY"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ceremonyVenue">Ceremony Venue</Label>
                    <Input
                      id="ceremonyVenue"
                      data-testid="input-ceremony-venue"
                      value={formData.ceremonyVenue}
                      onChange={(e) => setFormData({ ...formData, ceremonyVenue: e.target.value })}
                      placeholder="Venue name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="receptionVenue">Reception Venue</Label>
                    <Input
                      id="receptionVenue"
                      data-testid="input-reception-venue"
                      value={formData.receptionVenue}
                      onChange={(e) => setFormData({ ...formData, receptionVenue: e.target.value })}
                      placeholder="Venue name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select 
                      value={formData.serviceType} 
                      onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                    >
                      <SelectTrigger id="serviceType" data-testid="select-service-type">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="photography">Photography Only</SelectItem>
                        <SelectItem value="videography">Videography Only</SelectItem>
                        <SelectItem value="both">Photography & Videography</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hearAboutUs">How did you hear about us?</Label>
                    <Select 
                      value={formData.hearAboutUs} 
                      onValueChange={(value) => setFormData({ ...formData, hearAboutUs: value })}
                    >
                      <SelectTrigger id="hearAboutUs" data-testid="select-hear-about-us">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="google">Google Search</SelectItem>
                        <SelectItem value="theknot">The Knot</SelectItem>
                        <SelectItem value="weddingwire">WeddingWire</SelectItem>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="facebook">Facebook</SelectItem>
                        <SelectItem value="friend">Friend Referral</SelectItem>
                        <SelectItem value="vendor">Vendor Referral</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    data-testid="textarea-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your wedding vision, guest count, or any questions..."
                    rows={4}
                  />
                </div>
              </div>

              <div className="text-center">
                <Button 
                  type="submit" 
                  size="lg"
                  data-testid="button-submit-inquiry"
                  disabled={submitInquiry.isPending}
                  className="rounded-none uppercase tracking-widest font-bold px-16"
                >
                  {submitInquiry.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </section>

        <AwardsBanner />
      </main>
      <Footer />
    </div>
  );
}
