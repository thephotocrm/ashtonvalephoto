import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AwardsBanner } from "@/components/AwardsBanner";
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

const tabs = ["Wedding", "Engagement", "Video"];

const weddingImages = [
  { src: heroImg, title: "Romantic Moment" },
  { src: brideImg, title: "Bridal Details" },
  { src: groomImg, title: "Groom Prep" },
  { src: cakeImg, title: "Wedding Cake" },
  { src: danceImg, title: "First Dance" },
  { src: ceremonyImg, title: "Ceremony" },
  { src: receptionImg, title: "Reception" },
  { src: ringsImg, title: "Wedding Rings" },
  { src: firstLookImg, title: "First Look" },
];

const engagementImages = [
  { src: engagementImg, title: "Engagement Session" },
  { src: firstLookImg, title: "Couple Portrait" },
  { src: heroImg, title: "Romantic Sunset" },
  { src: brideImg, title: "Bride-to-be" },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Wedding");

  const currentImages = activeTab === "Wedding" ? weddingImages : 
                        activeTab === "Engagement" ? engagementImages : 
                        weddingImages.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[350px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg})` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative h-full container mx-auto px-6 flex items-center justify-center text-center text-white">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Wedding Portfolio</h1>
              <p className="text-xl text-white/80">Your love story starts here.</p>
            </div>
          </div>
        </section>

        {/* Portfolio Description */}
        <section className="py-10 bg-white border-b">
          <div className="container mx-auto px-6 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              View our engagement, wedding, and video portfolio. Ready to book a session?{" "}
              <Link href="/pricing" className="text-primary font-medium hover:underline">
                Contact us
              </Link>.
            </p>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-6 bg-muted/30 sticky top-16 z-40">
          <div className="container mx-auto px-6">
            <div className="flex justify-center gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-6 py-2 text-sm font-bold uppercase tracking-widest transition-colors rounded-none",
                    activeTab === tab 
                      ? "bg-primary text-white" 
                      : "bg-white text-foreground hover:bg-muted"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            {activeTab === "Video" ? (
              <div className="text-center py-20">
                <h3 className="font-serif text-2xl font-bold mb-4">Wedding Films</h3>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Our cinematic wedding films capture every magical moment of your special day. 
                  Contact us to view our full video portfolio.
                </p>
                <Link href="/pricing">
                  <Button className="rounded-none uppercase tracking-widest font-bold">
                    Request Video Samples
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="group relative overflow-hidden cursor-pointer aspect-[3/4]"
                  >
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-serif text-lg">{image.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Let us capture every magical moment of your special day
            </h3>
            <Link href="/pricing">
              <Button size="lg" className="rounded-none uppercase tracking-widest font-bold px-10 mt-4">
                Check Pricing & Availability
              </Button>
            </Link>
          </div>
        </section>

        <AwardsBanner />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
