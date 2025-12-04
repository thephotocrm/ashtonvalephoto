import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

import heroImg from "@assets/generated_images/romantic_wedding_couple_under_veil.png";
import brideImg from "@assets/generated_images/bride_holding_bouquet.png";
import groomImg from "@assets/generated_images/groom_adjusting_cufflinks.png";
import cakeImg from "@assets/generated_images/elegant_wedding_cake.png";
import danceImg from "@assets/generated_images/couple_dancing_reception.png";
import engagementImg from "@assets/generated_images/engagement_couple_laughing.png";
import ceremonyImg from "@assets/generated_images/bride_walking_aisle_ceremony.png";
import receptionImg from "@assets/generated_images/reception_dance_party.png";
import ringsImg from "@assets/generated_images/wedding_rings_on_roses.png";
import firstLookImg from "@assets/generated_images/first_look_moment.png";

const tabs = ["Weddings", "Engagements", "Films"];

const weddingImages = [
  { src: heroImg, title: "Veiled Romance", location: "The Plaza, New York" },
  { src: brideImg, title: "Bridal Elegance", location: "Oheka Castle" },
  { src: groomImg, title: "Refined Details", location: "The Pierre" },
  { src: cakeImg, title: "Sweet Artistry", location: "Private Estate" },
  { src: danceImg, title: "First Dance", location: "The Breakers" },
  { src: ceremonyImg, title: "The Processional", location: "St. Patrick's Cathedral" },
  { src: receptionImg, title: "Celebration", location: "Rainbow Room" },
  { src: ringsImg, title: "Symbolic Beauty", location: "Intimate Detail" },
  { src: firstLookImg, title: "First Look", location: "Central Park" },
];

const engagementImages = [
  { src: engagementImg, title: "Joyful Connection", location: "Brooklyn Bridge" },
  { src: firstLookImg, title: "Quiet Moments", location: "Prospect Park" },
  { src: heroImg, title: "Golden Hour", location: "Malibu Cliffs" },
  { src: brideImg, title: "Timeless Beauty", location: "Venice Beach" },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Weddings");

  const currentImages = activeTab === "Weddings" ? weddingImages : 
                        activeTab === "Engagements" ? engagementImages : 
                        weddingImages.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[450px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full container mx-auto px-8 flex items-center justify-center text-center text-white">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/60 mb-4">Our Work</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-white">Curated Portfolio</h1>
              <div className="w-16 h-px bg-white/40 mx-auto mb-6"></div>
              <p className="text-lg text-white/70 max-w-xl mx-auto font-light">
                A collection of love stories, artfully told.
              </p>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-8 bg-white border-b border-border/30 sticky top-0 z-40">
          <div className="container mx-auto px-8">
            <div className="flex justify-center gap-12">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "text-[11px] uppercase tracking-[0.2em] font-medium transition-all pb-2 border-b-2",
                    activeTab === tab 
                      ? "text-foreground border-primary" 
                      : "text-muted-foreground border-transparent hover:text-foreground"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-8">
            {activeTab === "Films" ? (
              <div className="text-center py-24">
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Cinematography</p>
                <h3 className="font-serif text-3xl font-light mb-6">Wedding Films</h3>
                <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
                  Our cinematic wedding films capture the emotion and artistry of your celebration. 
                  Request access to view our complete film portfolio.
                </p>
                <Button 
                  asChild
                  size="lg"
                  className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-[11px] uppercase tracking-[0.2em] font-medium"
                >
                  <Link href="/pricing">
                    Request Film Portfolio
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {currentImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="group relative overflow-hidden cursor-pointer aspect-[3/4] hover-lift"
                  >
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="font-serif text-lg mb-1">{image.title}</p>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">{image.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-ivory">
          <div className="container mx-auto px-8 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Your Story Awaits</p>
            <h3 className="font-serif text-3xl md:text-4xl font-light mb-6">
              Let Us Capture Your Celebration
            </h3>
            <p className="text-muted-foreground max-w-lg mx-auto mb-10">
              Every love story deserves to be told with artistry and intention.
            </p>
            <Button 
              asChild
              size="lg"
              className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-7 text-[11px] uppercase tracking-[0.2em] font-medium"
            >
              <Link href="/pricing">
                Request a Consultation
              </Link>
            </Button>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
