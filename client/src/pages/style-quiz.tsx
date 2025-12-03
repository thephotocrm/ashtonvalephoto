import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Check, Sparkles } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

import heroImg from "@assets/generated_images/romantic_wedding_couple_under_veil.png";
import brideImg from "@assets/generated_images/bride_holding_bouquet.png";
import groomImg from "@assets/generated_images/groom_adjusting_cufflinks.png";
import danceImg from "@assets/generated_images/couple_dancing_reception.png";
import firstLookImg from "@assets/generated_images/first_look_moment.png";
import ceremonyImg from "@assets/generated_images/bride_walking_aisle_ceremony.png";
import engagementImg from "@assets/generated_images/engagement_couple_laughing.png";
import receptionImg from "@assets/generated_images/reception_dance_party.png";
import ringsImg from "@assets/generated_images/wedding_rings_on_roses.png";
import cakeImg from "@assets/generated_images/elegant_wedding_cake.png";

type StyleProfile = "connoisseur" | "visionary" | "romantic" | "modernist" | "storyteller";

interface QuizChoice {
  id: string;
  image: string;
  label: string;
  style: StyleProfile;
}

interface QuizStep {
  title: string;
  subtitle: string;
  choices: QuizChoice[];
  multiSelect?: boolean;
}

const quizSteps: QuizStep[] = [
  {
    title: "Aesthetic Vision",
    subtitle: "Which atmosphere speaks to your sensibility?",
    choices: [
      { id: "a1", image: heroImg, label: "Romantic & Ethereal", style: "romantic" },
      { id: "a2", image: ceremonyImg, label: "Grand & Cinematic", style: "visionary" },
      { id: "a3", image: brideImg, label: "Timeless & Refined", style: "connoisseur" },
      { id: "a4", image: groomImg, label: "Modern & Minimal", style: "modernist" },
    ]
  },
  {
    title: "The Art of the Moment",
    subtitle: "How do you envision your story being told?",
    choices: [
      { id: "m1", image: firstLookImg, label: "Candid Emotions", style: "storyteller" },
      { id: "m2", image: brideImg, label: "Editorial Portraits", style: "visionary" },
      { id: "m3", image: engagementImg, label: "Joyful & Natural", style: "romantic" },
      { id: "m4", image: ringsImg, label: "Exquisite Details", style: "connoisseur" },
    ]
  },
  {
    title: "Tonal Palette",
    subtitle: "Which visual tone resonates with you?",
    choices: [
      { id: "t1", image: danceImg, label: "Warm & Golden", style: "romantic" },
      { id: "t2", image: heroImg, label: "Rich & Dramatic", style: "visionary" },
      { id: "t3", image: ceremonyImg, label: "Classic & Elegant", style: "connoisseur" },
      { id: "t4", image: groomImg, label: "Clean & Contemporary", style: "modernist" },
    ]
  },
  {
    title: "Your Canvas",
    subtitle: "Which setting captures your imagination?",
    choices: [
      { id: "v1", image: ceremonyImg, label: "Historic Grandeur", style: "connoisseur" },
      { id: "v2", image: receptionImg, label: "Vibrant Celebration", style: "storyteller" },
      { id: "v3", image: cakeImg, label: "Refined Elegance", style: "visionary" },
      { id: "v4", image: engagementImg, label: "Natural Beauty", style: "romantic" },
    ]
  },
];

const styleProfiles: Record<StyleProfile, {
  title: string;
  tagline: string;
  description: string;
  characteristics: string[];
  recommendedCollection: string;
  recommendedPrice: string;
}> = {
  connoisseur: {
    title: "The Connoisseur",
    tagline: "Refined elegance, timeless artistry",
    description: "You possess an appreciation for the finer things—classic composition, understated luxury, and imagery that transcends trends. Your wedding documentation will be a masterwork of refined taste, destined to become a cherished heirloom.",
    characteristics: ["Timeless compositions", "Exquisite attention to detail", "Classic elegance", "Museum-quality imagery"],
    recommendedCollection: "The Estate Collection",
    recommendedPrice: "$8,495"
  },
  visionary: {
    title: "The Visionary",
    tagline: "Bold, editorial, unforgettable",
    description: "You see your wedding as a cinematic production worthy of the pages of Vogue. Bold, fashion-forward, and utterly striking—your imagery will make a statement that commands attention and admiration.",
    characteristics: ["Editorial sophistication", "Dramatic lighting", "Fashion-forward aesthetic", "Cinematic grandeur"],
    recommendedCollection: "The Estate Collection",
    recommendedPrice: "$8,495"
  },
  romantic: {
    title: "The Romantic",
    tagline: "Ethereal, emotive, poetic",
    description: "You treasure the tender moments—the stolen glances, the gentle touches, the poetry of natural light. Your imagery will be soft, dreamy, and deeply emotive, capturing the essence of your love story.",
    characteristics: ["Soft, natural light", "Emotional storytelling", "Dreamy atmospheres", "Intimate moments"],
    recommendedCollection: "The Signature Collection",
    recommendedPrice: "$5,995"
  },
  modernist: {
    title: "The Modernist",
    tagline: "Contemporary, architectural, sophisticated",
    description: "Clean lines, bold geometry, and contemporary sophistication define your aesthetic. You appreciate modern design sensibilities and imagery that feels fresh, current, and distinctly you.",
    characteristics: ["Clean compositions", "Architectural elements", "Contemporary style", "Sophisticated minimalism"],
    recommendedCollection: "The Signature Collection",
    recommendedPrice: "$5,995"
  },
  storyteller: {
    title: "The Storyteller",
    tagline: "Authentic, genuine, documentary",
    description: "Above all, you value authenticity. You want your wedding captured as it truly unfolds—the laughter, the tears, the spontaneous joy. Your imagery will be a genuine chronicle of your celebration.",
    characteristics: ["Documentary approach", "Genuine emotions", "Candid moments", "Authentic storytelling"],
    recommendedCollection: "The Editorial Suite",
    recommendedPrice: "$4,295"
  }
};

export default function StyleQuiz() {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<"intro" | number | "contact" | "results">("intro");
  const [selections, setSelections] = useState<Record<number, string>>({});
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    weddingDate: "",
  });
  const [styleResult, setStyleResult] = useState<StyleProfile | null>(null);

  const submitLead = useMutation({
    mutationFn: async (data: typeof contactInfo & { styleProfile: string }) => {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          weddingDate: data.weddingDate,
          weddingLocation: "Style Quiz Lead",
          serviceType: "both",
          message: `Style Profile: ${data.styleProfile}`,
        }),
      });
      if (!response.ok) throw new Error("Failed to submit");
      return response.json();
    },
    onSuccess: () => {
      calculateResult();
      setCurrentStep("results");
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again.",
        variant: "destructive",
      });
    },
  });

  const calculateResult = () => {
    const scores: Record<StyleProfile, number> = {
      connoisseur: 0,
      visionary: 0,
      romantic: 0,
      modernist: 0,
      storyteller: 0,
    };

    Object.values(selections).forEach((choiceId) => {
      quizSteps.forEach((step) => {
        const choice = step.choices.find((c) => c.id === choiceId);
        if (choice) {
          scores[choice.style]++;
        }
      });
    });

    const topStyle = Object.entries(scores).sort(([, a], [, b]) => b - a)[0][0] as StyleProfile;
    setStyleResult(topStyle);
  };

  const handleSelect = (stepIndex: number, choiceId: string) => {
    setSelections({ ...selections, [stepIndex]: choiceId });
  };

  const handleNext = () => {
    if (currentStep === "intro") {
      setCurrentStep(0);
    } else if (typeof currentStep === "number" && currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else if (typeof currentStep === "number" && currentStep === quizSteps.length - 1) {
      setCurrentStep("contact");
    }
  };

  const handleBack = () => {
    if (typeof currentStep === "number" && currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else if (currentStep === "contact") {
      setCurrentStep(quizSteps.length - 1);
    } else if (typeof currentStep === "number" && currentStep === 0) {
      setCurrentStep("intro");
    }
  };

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    
    const scores: Record<StyleProfile, number> = {
      connoisseur: 0, visionary: 0, romantic: 0, modernist: 0, storyteller: 0,
    };
    Object.values(selections).forEach((choiceId) => {
      quizSteps.forEach((step) => {
        const choice = step.choices.find((c) => c.id === choiceId);
        if (choice) scores[choice.style]++;
      });
    });
    const topStyle = Object.entries(scores).sort(([, a], [, b]) => b - a)[0][0] as StyleProfile;
    
    submitLead.mutate({ ...contactInfo, styleProfile: styleProfiles[topStyle].title });
  };

  const progress = typeof currentStep === "number" 
    ? ((currentStep + 1) / quizSteps.length) * 100 
    : currentStep === "contact" ? 100 : 0;

  const result = styleResult ? styleProfiles[styleResult] : null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow pt-20">
        
        {/* Intro Screen */}
        {currentStep === "intro" && (
          <section className="min-h-[80vh] flex items-center justify-center py-20">
            <div className="container mx-auto px-8 text-center max-w-3xl">
              <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-6">The Ashton Vale</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-8">
                Style Atelier
              </h1>
              <div className="w-20 h-px bg-primary/40 mx-auto mb-10"></div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Your wedding imagery should be as distinctive as your love story.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-12">
                Our Style Atelier is a curated experience designed to reveal your aesthetic 
                sensibility and ensure an extraordinary artistic match. In just a few moments, 
                we'll uncover the visual language that speaks to your soul.
              </p>
              <Button 
                onClick={handleNext}
                size="lg"
                className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-7 text-[11px] uppercase tracking-[0.2em] font-medium"
              >
                Begin Your Discovery <ArrowRight size={16} className="ml-2" />
              </Button>
              <p className="text-[11px] text-muted-foreground mt-8">
                Takes approximately 2 minutes
              </p>
            </div>
          </section>
        )}

        {/* Quiz Steps */}
        {typeof currentStep === "number" && (
          <section className="min-h-[80vh] py-12">
            {/* Progress Bar */}
            <div className="container mx-auto px-8 mb-12">
              <div className="max-w-2xl mx-auto">
                <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  <span>Question {currentStep + 1} of {quizSteps.length}</span>
                  <span>{Math.round(progress)}% Complete</span>
                </div>
                <div className="h-0.5 bg-border/50">
                  <div 
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Question */}
            <div className="container mx-auto px-8">
              <div className="text-center mb-12">
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">
                  {quizSteps[currentStep].title}
                </p>
                <h2 className="font-serif text-2xl md:text-3xl font-light">
                  {quizSteps[currentStep].subtitle}
                </h2>
              </div>

              {/* Choices Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
                {quizSteps[currentStep].choices.map((choice) => (
                  <button
                    key={choice.id}
                    onClick={() => handleSelect(currentStep, choice.id)}
                    className={cn(
                      "group relative overflow-hidden aspect-[3/4] transition-all duration-300",
                      selections[currentStep] === choice.id 
                        ? "ring-2 ring-primary ring-offset-2" 
                        : "hover:opacity-90"
                    )}
                  >
                    <img 
                      src={choice.image} 
                      alt={choice.label}
                      className="w-full h-full object-cover"
                    />
                    <div className={cn(
                      "absolute inset-0 transition-all duration-300",
                      selections[currentStep] === choice.id 
                        ? "bg-primary/20" 
                        : "bg-black/20 group-hover:bg-black/30"
                    )}></div>
                    {selections[currentStep] === choice.id && (
                      <div className="absolute top-3 right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Check size={16} className="text-white" />
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <p className="text-white text-sm font-medium">{choice.label}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-center gap-4">
                <Button 
                  onClick={handleBack}
                  variant="outline"
                  className="rounded-none border-border/50 px-8 py-6 text-[11px] uppercase tracking-[0.2em]"
                >
                  <ArrowLeft size={14} className="mr-2" /> Back
                </Button>
                <Button 
                  onClick={handleNext}
                  disabled={!selections[currentStep]}
                  className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-[11px] uppercase tracking-[0.2em]"
                >
                  {currentStep === quizSteps.length - 1 ? "View My Results" : "Continue"} <ArrowRight size={14} className="ml-2" />
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Contact Capture */}
        {currentStep === "contact" && (
          <section className="min-h-[80vh] py-20 flex items-center">
            <div className="container mx-auto px-8">
              <div className="max-w-xl mx-auto text-center">
                <Sparkles size={32} className="text-primary mx-auto mb-6" />
                <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
                  Your Results Await
                </h2>
                <p className="text-muted-foreground mb-10">
                  We've curated your personalized style profile. Enter your details below 
                  to discover your signature aesthetic and receive tailored recommendations 
                  from our concierge team.
                </p>

                <form onSubmit={handleSubmitContact} className="space-y-6 text-left">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                        First Name *
                      </Label>
                      <Input
                        required
                        value={contactInfo.firstName}
                        onChange={(e) => setContactInfo({ ...contactInfo, firstName: e.target.value })}
                        className="rounded-none border-border/50 py-6"
                        placeholder="First name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                        Last Name *
                      </Label>
                      <Input
                        required
                        value={contactInfo.lastName}
                        onChange={(e) => setContactInfo({ ...contactInfo, lastName: e.target.value })}
                        className="rounded-none border-border/50 py-6"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                      Email Address *
                    </Label>
                    <Input
                      type="email"
                      required
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                      className="rounded-none border-border/50 py-6"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                        Phone Number
                      </Label>
                      <Input
                        type="tel"
                        value={contactInfo.phone}
                        onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                        className="rounded-none border-border/50 py-6"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                        Wedding Date
                      </Label>
                      <Input
                        type="date"
                        value={contactInfo.weddingDate}
                        onChange={(e) => setContactInfo({ ...contactInfo, weddingDate: e.target.value })}
                        className="rounded-none border-border/50 py-6"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col items-center gap-4">
                    <Button 
                      type="submit"
                      disabled={submitLead.isPending}
                      size="lg"
                      className="w-full rounded-none bg-primary hover:bg-primary/90 text-primary-foreground py-7 text-[11px] uppercase tracking-[0.2em] font-medium"
                    >
                      {submitLead.isPending ? "Revealing Your Style..." : "Reveal My Style Profile"}
                    </Button>
                    <button 
                      type="button"
                      onClick={handleBack}
                      className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground"
                    >
                      ← Go Back
                    </button>
                  </div>
                </form>

                <p className="text-[10px] text-muted-foreground mt-8">
                  Your information is kept confidential and will only be used to 
                  provide you with personalized recommendations.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Results */}
        {currentStep === "results" && result && (
          <section className="py-20">
            <div className="container mx-auto px-8">
              {/* Result Header */}
              <div className="text-center mb-16">
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Your Signature Style</p>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-4">
                  {result.title}
                </h1>
                <p className="text-xl text-muted-foreground italic">{result.tagline}</p>
              </div>

              {/* Result Content */}
              <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto mb-20">
                {/* Left - Description */}
                <div>
                  <p className="text-lg text-foreground/80 leading-relaxed mb-10">
                    {result.description}
                  </p>
                  
                  <div className="space-y-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-primary mb-4">
                      Your Aesthetic Hallmarks
                    </p>
                    {result.characteristics.map((char, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        <span className="text-foreground/70">{char}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right - Recommended Collection */}
                <div className="bg-neutral-900 text-white p-10">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
                    Recommended For You
                  </p>
                  <h3 className="font-serif text-2xl mb-2 text-white">{result.recommendedCollection}</h3>
                  <p className="text-3xl font-serif text-white mb-6">{result.recommendedPrice}</p>
                  <p className="text-white/60 text-sm mb-8">
                    Based on your aesthetic preferences, this collection offers the perfect 
                    blend of coverage and artistry to bring your vision to life.
                  </p>
                  <Link href="/packages">
                    <Button 
                      className="w-full rounded-none bg-white text-black hover:bg-white/90 py-6 text-[11px] uppercase tracking-[0.2em] font-medium"
                    >
                      View Collection Details
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Next Steps */}
              <div className="text-center bg-ivory py-16 px-8 max-w-3xl mx-auto">
                <h3 className="font-serif text-2xl mb-4">What Happens Next?</h3>
                <p className="text-muted-foreground mb-8">
                  A member of our concierge team will reach out within 24 hours to discuss 
                  your results and introduce you to artists whose portfolios align perfectly 
                  with your {result.title.toLowerCase()} aesthetic.
                </p>
                <Link href="/pricing">
                  <Button 
                    variant="outline"
                    className="rounded-none border-foreground/30 px-10 py-6 text-[11px] uppercase tracking-[0.2em] font-medium"
                  >
                    Request a Private Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </div>
  );
}
