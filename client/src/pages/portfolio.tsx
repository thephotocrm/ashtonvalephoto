import { useState, useEffect, useCallback } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Portfolio images
import img1 from "@assets/portfolio/2024-July-27-13-46-49.jpg";
import img2 from "@assets/portfolio/2024-July-27-13-49-05.jpg";
import img3 from "@assets/portfolio/2024-November-15-13-27-40-4.jpg";
import img4 from "@assets/portfolio/2024-November-15-15-16-07-3.jpg";
import img5 from "@assets/portfolio/2024-November-15-17-51-46-6.jpg";
import img6 from "@assets/portfolio/2024-November-15-18-11-17.jpg";
import img7 from "@assets/portfolio/2024-November-15-18-18-58.jpg";
import img8 from "@assets/portfolio/2024-November-15-18-27-47.jpg";
import img9 from "@assets/portfolio/2024-November-15-18-27-57.jpg";
import img10 from "@assets/portfolio/2024-November-15-18-51-23.jpg";
import img11 from "@assets/portfolio/2024-November-21-17-50-28-4.jpg";
import img12 from "@assets/portfolio/2024-November-21-18-02-16-2.jpg";
import img13 from "@assets/portfolio/2024-September-14-13-51-40-2.jpg";
import img14 from "@assets/portfolio/2024-September-14-15-15-09.jpg";
import img15 from "@assets/portfolio/2024-September-14-19-16-29.jpg";
import img16 from "@assets/portfolio/2024-September-14-19-19-49.jpg";
import img17 from "@assets/portfolio/2024-September-28-17-46-50-3.jpg";
import img18 from "@assets/portfolio/2024-September-28-19-02-20.jpg";
import img19 from "@assets/portfolio/2024-September-28-19-22-51-3.jpg";
import img20 from "@assets/portfolio/2024-September-28-20-18-59-4.jpg";
import img21 from "@assets/portfolio/2025-April-10-14-34-37-2.jpg";
import img22 from "@assets/portfolio/2025-April-10-16-52-57.jpg";
import img23 from "@assets/portfolio/2025-April-10-18-59-39.jpg";
import img24 from "@assets/portfolio/2025-April-10-19-14-08.jpg";
import img25 from "@assets/portfolio/2025-April-10-19-14-30-2.jpg";
import img26 from "@assets/portfolio/2025-April-10-19-21-24-2.jpg";
import img27 from "@assets/portfolio/2025-February-17-16-34-56-2.jpg";
import img28 from "@assets/portfolio/2025-February-17-16-39-07-2.jpg";
import img29 from "@assets/portfolio/2025-February-17-16-41-35-2.jpg";
import img30 from "@assets/portfolio/2025-February-17-17-20-08-3.jpg";
import img31 from "@assets/portfolio/2025-February-17-17-40-24.jpg";
import img32 from "@assets/portfolio/DSC00153.jpg";
import img33 from "@assets/portfolio/DSC00386.jpg";
import img34 from "@assets/portfolio/DSC00390.jpg";
import img35 from "@assets/portfolio/DSC00528-2.jpg";
// @ts-ignore - uppercase extension
import img36 from "@assets/portfolio/DSC00528-Copy1.JPG";
import img37 from "@assets/portfolio/DSC00561.jpg";
import img38 from "@assets/portfolio/DSC00569.jpg";
import img39 from "@assets/portfolio/DSC00652.jpg";
import img40 from "@assets/portfolio/DSC00785.jpg";
import img41 from "@assets/portfolio/DSC00794.jpg";
import img42 from "@assets/portfolio/DSC00920.jpg";
import img43 from "@assets/portfolio/DSC00925.jpg";
import img44 from "@assets/portfolio/DSC01037.jpg";
import img45 from "@assets/portfolio/DSC01148.jpg";
import img46 from "@assets/portfolio/DSC01206.jpg";
import img47 from "@assets/portfolio/DSC01339.jpg";
import img48 from "@assets/portfolio/DSC02099.jpg";
import img49 from "@assets/portfolio/DSC02174.jpg";
import img50 from "@assets/portfolio/DSC03851.jpg";
import img51 from "@assets/portfolio/DSC04937.jpg";
import img52 from "@assets/portfolio/DSC05718.jpg";
import img53 from "@assets/portfolio/DSC05839.jpg";
import img54 from "@assets/portfolio/DSC07114.jpg";
import img55 from "@assets/portfolio/DSC07181.jpg";
import img56 from "@assets/portfolio/DSC07220.jpg";
import img57 from "@assets/portfolio/DSC07344.jpg";
import img58 from "@assets/portfolio/DSC07449.jpg";
import img59 from "@assets/portfolio/DSC07495.jpg";
import img60 from "@assets/portfolio/DSC08391.jpg";
import img61 from "@assets/portfolio/DSC09053-Edit.jpg";
import img62 from "@assets/portfolio/DSC09199.jpg";
import img63 from "@assets/portfolio/DSC09773.jpg";
import img64 from "@assets/portfolio/DSC09935.jpg";
import img65 from "@assets/portfolio/DSC09969.jpg";
import img66 from "@assets/portfolio/DSC09973.jpg";
import img67 from "@assets/portfolio/2024-April-19-13-57-41.jpg";
import img68 from "@assets/portfolio/2024-April-19-15-13-59.jpg";
import img69 from "@assets/portfolio/2024-November-21-17-32-20.jpg";
import img70 from "@assets/portfolio/2024-November-21-17-58-32.jpg";
import img71 from "@assets/portfolio/2025-April-10-14-34-15.jpg";
import img72 from "@assets/portfolio/2025-April-10-14-37-54.jpg";
import img73 from "@assets/portfolio/2025-April-10-18-42-46-3.jpg";
import img74 from "@assets/portfolio/2025-April-10-19-06-55.jpg";
import img75 from "@assets/portfolio/2025-April-10-19-24-29.jpg";
import img76 from "@assets/portfolio/DSC00402.jpg";
import img77 from "@assets/portfolio/DSC00418.jpg";
import img78 from "@assets/portfolio/DSC00507.jpg";
import img79 from "@assets/portfolio/DSC02043.jpg";
import img80 from "@assets/portfolio/DSC07434.jpg";
import img81 from "@assets/portfolio/DSC08922.jpg";
import img82 from "@assets/portfolio/DSC09555.jpg";
import img83 from "@assets/portfolio/DSC09587.jpg";

const tabs = ["Weddings", "Engagements", "Films"];

const weddingImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
  img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
  img41, img42, img43, img44, img45, img46, img47, img48, img49, img50,
  img51, img52, img53, img54, img55, img56, img57, img58, img59, img60,
  img61, img62, img63, img64, img65, img66
];

const engagementImages = [
  img67, img68, img69, img70, img71, img72, img73, img74, img75, img76,
  img77, img78, img79, img80, img81, img82, img83
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Weddings");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const currentImages = activeTab === "Weddings" ? weddingImages :
                        activeTab === "Engagements" ? engagementImages :
                        weddingImages.slice(0, 4);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = useCallback(() => {
    setLightboxIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  }, [currentImages.length]);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
  }, [currentImages.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, goToPrevious, goToNext]);

  // Prevent right-click on images
  const preventRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[450px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img1})` }}
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
              <div className="py-12">
                <div className="text-center mb-12">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Cinematography</p>
                  <h3 className="font-serif text-3xl font-light mb-6">Wedding Films</h3>
                  <p className="text-muted-foreground max-w-xl mx-auto">
                    Our cinematic wedding films capture the emotion and artistry of your celebration.
                  </p>
                </div>

                {/* Vimeo Videos */}
                <div className="max-w-4xl mx-auto mb-12 space-y-12">
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      src="https://player.vimeo.com/video/929565990?h=&title=0&byline=0&portrait=0"
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="Wedding Film 1"
                    />
                  </div>
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      src="https://player.vimeo.com/video/1049815722?h=&title=0&byline=0&portrait=0"
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="Wedding Film 2"
                    />
                  </div>
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      src="https://player.vimeo.com/video/894578161?h=&title=0&byline=0&portrait=0"
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="Wedding Film 3"
                    />
                  </div>
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      src="https://player.vimeo.com/video/1048777913?h=&title=0&byline=0&portrait=0"
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="Wedding Film 4"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-[11px] uppercase tracking-[0.2em] font-medium hover:shadow-luxury hover:scale-[1.02] transition-all duration-300"
                  >
                    <Link href="/pricing">
                      Request a Consultation
                    </Link>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {currentImages.map((image, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden cursor-pointer aspect-[3/4] hover-lift shadow-luxury"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image}
                      alt={`Portfolio image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none"
                      onContextMenu={preventRightClick}
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
              className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-7 text-[11px] uppercase tracking-[0.2em] font-medium hover:shadow-luxury hover:scale-[1.02] transition-all duration-300"
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

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
            onClick={closeLightbox}
          >
            <X size={32} strokeWidth={1} />
          </button>

          {/* Previous button */}
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 p-2"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>

          {/* Image */}
          <div
            className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImages[lightboxIndex]}
              alt={`Portfolio image ${lightboxIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain select-none"
              onContextMenu={preventRightClick}
              draggable={false}
            />
          </div>

          {/* Next button */}
          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 p-2"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>

          {/* Image counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-wider">
            {lightboxIndex + 1} / {currentImages.length}
          </div>
        </div>
      )}
    </div>
  );
}
