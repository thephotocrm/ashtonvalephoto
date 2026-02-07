import { useState, useMemo } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Video, Phone, Clock, CheckCircle2, Loader2, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import heroImg from "@assets/generated_images/first_look_moment.png";
import { useSEO } from "@/hooks/use-seo";
import { pageSEO } from "@/lib/seo-data";
import { buildBreadcrumbJsonLd } from "@/components/SEOBreadcrumb";

const timeSlots = [
  { id: "10:00", label: "10:00 AM" },
  { id: "11:00", label: "11:00 AM" },
  { id: "12:00", label: "12:00 PM" },
  { id: "14:00", label: "2:00 PM" },
  { id: "15:00", label: "3:00 PM" },
  { id: "16:00", label: "4:00 PM" },
];

export default function Schedule() {
  const breadcrumbJsonLd = useMemo(
    () =>
      buildBreadcrumbJsonLd([
        { label: "Home", href: "/" },
        { label: "Schedule", href: "/schedule" },
      ]),
    [],
  );

  useSEO({
    title: pageSEO.schedule.title,
    description: pageSEO.schedule.description,
    canonical: "https://ashtonvalephoto.com/schedule",
    jsonLd: breadcrumbJsonLd,
  });

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [callType, setCallType] = useState<"video" | "phone">("video");
  const [weekOffset, setWeekOffset] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // Generate weekdays (Mon-Fri) for a given week offset
  const getWeekDays = (offset: number) => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    // Calculate Monday of the current week (Sunday = 0, so Monday = 1)
    const monday = new Date(today);
    const daysToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    monday.setDate(today.getDate() + daysToMonday + offset * 7);

    const days = [];
    for (let i = 0; i < 5; i++) {
      const day = new Date(monday);
      day.setDate(monday.getDate() + i);
      days.push(day);
    }
    return days;
  };

  // Check if a date is in the past
  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  // Check if two dates are the same day
  const isSameDay = (date1: Date, date2: Date | undefined) => {
    if (!date2) return false;
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const weekDays = getWeekDays(weekOffset);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime) {
      toast({
        title: "Please select a date and time",
        description: "Choose your preferred date and time slot to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Send to webhook (optional integration point)
    try {
      await fetch("https://hooks.zapier.com/hooks/catch/13593170/ull6lfo/", {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          callType,
          scheduledDate: selectedDate.toISOString(),
          scheduledTime: selectedTime,
          type: "discovery_call",
        }),
      });
    } catch {
      // Silently fail webhook - don't block user experience
    }

    setIsSubmitting(false);
    setIsBooked(true);
  };

  if (isBooked) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-grow flex items-center justify-center py-20">
          <div className="text-center px-4 md:px-8 max-w-lg">
            <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-light mb-4">
              You're All Set!
            </h1>
            <p className="text-muted-foreground mb-6">
              Your discovery call has been scheduled for{" "}
              <span className="text-foreground font-medium">
                {selectedDate?.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </span>{" "}
              at{" "}
              <span className="text-foreground font-medium">
                {timeSlots.find((t) => t.id === selectedTime)?.label}
              </span>
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              We've sent a confirmation email to <span className="text-foreground">{formData.email}</span> with
              all the details. We're looking forward to learning about your vision!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="rounded-none border-border/50 text-foreground px-8 py-6 text-[11px] uppercase tracking-[0.2em] font-medium"
                onClick={() => window.location.href = "/portfolio"}
              >
                View Our Work
              </Button>
              <Button
                className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-[11px] uppercase tracking-[0.2em] font-medium"
                onClick={() => window.location.href = "/"}
              >
                Return Home
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg})` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative container mx-auto px-4 md:px-8 text-center text-white">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/60 mb-4">Begin Your Journey</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-white">
              Schedule Your<br />Discovery Call
            </h1>
            <div className="w-16 h-px bg-white/40 mx-auto mb-6"></div>
            <p className="text-lg text-white/70 max-w-xl mx-auto font-light">
              A complimentary 20-minute conversation to explore your vision
              and discover how we can bring it to life.
            </p>
          </div>
        </section>

        {/* Scheduling Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Left Column - Calendar & Time */}
                <div>
                  {/* Step 1: Select Date */}
                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-8 h-8 bg-primary text-white text-sm flex items-center justify-center">1</span>
                      <h2 className="font-serif text-xl">Select a Date</h2>
                    </div>

                    {/* Weekly Calendar View */}
                    <div className="border border-border/30 p-3 md:p-6">
                      {/* Week Navigation */}
                      <div className="flex items-center justify-between mb-6">
                        <button
                          type="button"
                          onClick={() => setWeekOffset(weekOffset - 1)}
                          disabled={weekOffset === 0}
                          className={cn(
                            "w-10 h-10 flex items-center justify-center border border-border/50 transition-all duration-200",
                            weekOffset === 0
                              ? "opacity-30 cursor-not-allowed"
                              : "hover:border-primary hover:text-primary"
                          )}
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <div className="text-center">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                            Week of
                          </p>
                          <p className="font-serif text-lg">
                            {weekDays[0].toLocaleDateString("en-US", { month: "long", day: "numeric" })} -{" "}
                            {weekDays[4].toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setWeekOffset(weekOffset + 1)}
                          className="w-10 h-10 flex items-center justify-center border border-border/50 hover:border-primary hover:text-primary transition-all duration-200"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>

                      {/* Weekday Cards */}
                      <div className="grid grid-cols-5 gap-1 md:gap-3">
                        {weekDays.map((day) => {
                          const isPast = isPastDate(day);
                          const isSelected = isSameDay(day, selectedDate);

                          return (
                            <button
                              key={day.toISOString()}
                              type="button"
                              disabled={isPast}
                              onClick={() => setSelectedDate(day)}
                              className={cn(
                                "flex flex-col items-center py-3 px-1 md:py-5 md:px-3 border transition-all duration-200",
                                isPast
                                  ? "opacity-60 cursor-not-allowed border-border/40 bg-muted/40"
                                  : isSelected
                                  ? "border-primary bg-primary text-white shadow-lg"
                                  : "border-border/50 hover:border-primary hover:shadow-md bg-white"
                              )}
                            >
                              <span
                                className={cn(
                                  "text-[10px] uppercase tracking-[0.15em] mb-2",
                                  isSelected ? "text-white/80" : "text-muted-foreground"
                                )}
                              >
                                {day.toLocaleDateString("en-US", { weekday: "short" })}
                              </span>
                              <span
                                className={cn(
                                  "font-serif text-2xl md:text-3xl font-light mb-1",
                                  isSelected ? "text-white" : "text-foreground"
                                )}
                              >
                                {day.getDate()}
                              </span>
                              <span
                                className={cn(
                                  "text-[10px] uppercase tracking-[0.1em]",
                                  isSelected ? "text-white/80" : "text-muted-foreground"
                                )}
                              >
                                {day.toLocaleDateString("en-US", { month: "short" })}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground mt-3">
                      Available Monday - Friday, Eastern Time
                    </p>
                  </div>

                  {/* Step 2: Select Time */}
                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-8 h-8 bg-primary text-white text-sm flex items-center justify-center">2</span>
                      <h2 className="font-serif text-xl">Select a Time</h2>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot.id}
                          type="button"
                          onClick={() => setSelectedTime(slot.id)}
                          className={cn(
                            "py-3 px-4 text-sm border transition-all duration-200",
                            selectedTime === slot.id
                              ? "border-primary bg-primary text-white"
                              : "border-border/50 hover:border-primary/50 text-foreground"
                          )}
                        >
                          {slot.label}
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-3">
                      <Clock size={12} />
                      <span>20-minute call</span>
                    </div>
                  </div>

                  {/* Step 3: Call Type */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-8 h-8 bg-primary text-white text-sm flex items-center justify-center">3</span>
                      <h2 className="font-serif text-xl">How Would You Like to Connect?</h2>
                    </div>
                    <RadioGroup
                      value={callType}
                      onValueChange={(value) => setCallType(value as "video" | "phone")}
                      className="grid grid-cols-2 gap-4"
                    >
                      <label
                        className={cn(
                          "flex items-center gap-4 p-5 border cursor-pointer transition-all duration-200",
                          callType === "video"
                            ? "border-primary bg-primary/5"
                            : "border-border/50 hover:border-primary/30"
                        )}
                      >
                        <RadioGroupItem value="video" id="video" className="sr-only" />
                        <Video className={cn("w-5 h-5", callType === "video" ? "text-primary" : "text-muted-foreground")} />
                        <div>
                          <p className="font-medium text-sm">Video Call</p>
                          <p className="text-xs text-muted-foreground">Zoom meeting</p>
                        </div>
                      </label>
                      <label
                        className={cn(
                          "flex items-center gap-4 p-5 border cursor-pointer transition-all duration-200",
                          callType === "phone"
                            ? "border-primary bg-primary/5"
                            : "border-border/50 hover:border-primary/30"
                        )}
                      >
                        <RadioGroupItem value="phone" id="phone" className="sr-only" />
                        <Phone className={cn("w-5 h-5", callType === "phone" ? "text-primary" : "text-muted-foreground")} />
                        <div>
                          <p className="font-medium text-sm">Phone Call</p>
                          <p className="text-xs text-muted-foreground">We'll call you</p>
                        </div>
                      </label>
                    </RadioGroup>
                  </div>
                </div>

                {/* Right Column - Contact Info & Submit */}
                <div>
                  {/* Contact Information */}
                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-8 h-8 bg-primary text-white text-sm flex items-center justify-center">4</span>
                      <h2 className="font-serif text-xl">Your Information</h2>
                    </div>
                    <div className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                            First Name *
                          </Label>
                          <Input
                            id="firstName"
                            required
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            placeholder="First name"
                            className="rounded-none border-border/50 focus:border-primary py-6"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                            Last Name *
                          </Label>
                          <Input
                            id="lastName"
                            required
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            placeholder="Last name"
                            className="rounded-none border-border/50 focus:border-primary py-6"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="rounded-none border-border/50 focus:border-primary py-6"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 123-4567"
                          className="rounded-none border-border/50 focus:border-primary py-6"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Summary Card */}
                  <div className="bg-ivory p-8 mb-8">
                    <h3 className="font-serif text-lg mb-4">Your Appointment</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date</span>
                        <span className="font-medium">
                          {selectedDate
                            ? selectedDate.toLocaleDateString("en-US", {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                              })
                            : "Not selected"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Time</span>
                        <span className="font-medium">
                          {selectedTime
                            ? timeSlots.find((t) => t.id === selectedTime)?.label
                            : "Not selected"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Type</span>
                        <span className="font-medium capitalize">{callType} Call</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration</span>
                        <span className="font-medium">20 minutes</span>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting || !selectedDate || !selectedTime}
                    className="w-full rounded-none bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-7 text-[11px] uppercase tracking-[0.2em] font-medium hover:shadow-luxury transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Confirming...
                      </>
                    ) : (
                      <>
                        Confirm Appointment <ArrowRight size={14} className="ml-2" />
                      </>
                    )}
                  </Button>
                  <p className="text-[11px] text-muted-foreground mt-4 text-center">
                    You'll receive a confirmation email with meeting details
                  </p>
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-12 bg-ivory border-t border-border/30">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-wrap justify-center gap-12 text-center">
              <div>
                <p className="font-serif text-2xl text-primary mb-1">20+</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Years Experience</p>
              </div>
              <div className="hidden md:block w-px bg-border/50"></div>
              <div>
                <p className="font-serif text-2xl text-primary mb-1">500+</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Weddings Captured</p>
              </div>
              <div className="hidden md:block w-px bg-border/50"></div>
              <div>
                <p className="font-serif text-2xl text-primary mb-1">24hr</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Date Hold Policy</p>
              </div>
              <div className="hidden md:block w-px bg-border/50"></div>
              <div>
                <p className="font-serif text-2xl text-primary mb-1">5.0</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Client Rating</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
