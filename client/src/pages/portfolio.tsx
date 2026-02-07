import { useState, useEffect, useCallback, useMemo } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { Button } from "@/components/ui/button";
import { Link, useSearch } from "wouter";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useSEO } from "@/hooks/use-seo";
import { pageSEO } from "@/lib/seo-data";
import { buildBreadcrumbJsonLd } from "@/components/SEOBreadcrumb";

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
  { src: img1, alt: "Bride and groom portrait on their wedding day" },
  { src: img2, alt: "Candid moment between bride and groom" },
  { src: img3, alt: "Wedding ceremony vows exchange" },
  { src: img4, alt: "Bridal party celebration moment" },
  { src: img5, alt: "Elegant reception table details" },
  { src: img6, alt: "First dance as newlyweds" },
  { src: img7, alt: "Bride walking down the aisle" },
  { src: img8, alt: "Groom awaiting his bride at the altar" },
  { src: img9, alt: "Emotional wedding ceremony moment" },
  { src: img10, alt: "Couple sharing a tender kiss" },
  { src: img11, alt: "Outdoor wedding portrait in golden light" },
  { src: img12, alt: "Bridal bouquet and wedding details" },
  { src: img13, alt: "Wedding couple at sunset" },
  { src: img14, alt: "Joyful wedding reception moment" },
  { src: img15, alt: "Romantic newlywed portrait" },
  { src: img16, alt: "Wedding guests celebrating the couple" },
  { src: img17, alt: "Bride and groom's first look" },
  { src: img18, alt: "Wedding ceremony under an arch" },
  { src: img19, alt: "Couple embracing after the ceremony" },
  { src: img20, alt: "Evening reception dance floor moment" },
  { src: img21, alt: "Elegant bridal portrait" },
  { src: img22, alt: "Wedding couple in a garden setting" },
  { src: img23, alt: "Intimate moment during the reception" },
  { src: img24, alt: "Bride and groom exiting the ceremony" },
  { src: img25, alt: "Romantic couple portrait at the venue" },
  { src: img26, alt: "Wedding day detail shot" },
  { src: img27, alt: "Couple sharing a quiet moment together" },
  { src: img28, alt: "Wedding party group portrait" },
  { src: img29, alt: "Bride's getting ready moment" },
  { src: img30, alt: "Groom and groomsmen preparation" },
  { src: img31, alt: "Ceremony ring exchange close-up" },
  { src: img32, alt: "Documentary wedding moment" },
  { src: img33, alt: "Candid reception celebration" },
  { src: img34, alt: "Artistic wedding portrait" },
  { src: img35, alt: "Bride and groom walking together" },
  { src: img36, alt: "Editorial bridal portrait" },
  { src: img37, alt: "Wedding venue architecture detail" },
  { src: img38, alt: "Couple laughing during the reception" },
  { src: img39, alt: "Emotional father-daughter dance" },
  { src: img40, alt: "Sunset wedding ceremony portrait" },
  { src: img41, alt: "Bride's veil flowing in the wind" },
  { src: img42, alt: "Wedding cake cutting moment" },
  { src: img43, alt: "Couple under twinkling lights" },
  { src: img44, alt: "Bridal party walking together" },
  { src: img45, alt: "Intimate wedding vow reading" },
  { src: img46, alt: "Dramatic wedding portrait" },
  { src: img47, alt: "Wedding reception toast" },
  { src: img48, alt: "Couple dancing at their reception" },
  { src: img49, alt: "Romantic golden hour wedding portrait" },
  { src: img50, alt: "Wedding florals and decor details" },
  { src: img51, alt: "Bride descending the staircase" },
  { src: img52, alt: "Candid joy during the ceremony" },
  { src: img53, alt: "Couple's grand exit moment" },
  { src: img54, alt: "Wedding day emotion captured candidly" },
  { src: img55, alt: "Elegant black-tie wedding portrait" },
  { src: img56, alt: "Newlyweds sharing their first kiss" },
  { src: img57, alt: "Wedding processional moment" },
  { src: img58, alt: "Couple framed by venue architecture" },
  { src: img59, alt: "Joyful bride tossing bouquet" },
  { src: img60, alt: "Wedding sparkler exit" },
  { src: img61, alt: "Artistic black and white wedding portrait" },
  { src: img62, alt: "Couple embracing at their reception" },
  { src: img63, alt: "Ceremony flower detail" },
  { src: img64, alt: "Bride and groom silhouette at sunset" },
  { src: img65, alt: "Wedding celebration dance moment" },
  { src: img66, alt: "Timeless couple portrait" },
];

const engagementImages = [
  { src: img67, alt: "Couple laughing during engagement session" },
  { src: img68, alt: "Romantic engagement portrait at sunset" },
  { src: img69, alt: "Candid moment during engagement shoot" },
  { src: img70, alt: "Couple walking hand in hand" },
  { src: img71, alt: "Playful engagement session portrait" },
  { src: img72, alt: "Intimate couple portrait in natural light" },
  { src: img73, alt: "Engagement session in a scenic location" },
  { src: img74, alt: "Couple embracing during their engagement shoot" },
  { src: img75, alt: "Joyful engagement session moment" },
  { src: img76, alt: "Couple sharing a kiss during engagement photos" },
  { src: img77, alt: "Romantic engagement portrait with city backdrop" },
  { src: img78, alt: "Engagement session detail shot with ring" },
  { src: img79, alt: "Couple laughing together outdoors" },
  { src: img80, alt: "Golden hour engagement portrait" },
  { src: img81, alt: "Couple posing in elegant engagement attire" },
  { src: img82, alt: "Artistic engagement session composition" },
  { src: img83, alt: "Candid engagement session moment at dusk" },
];

export default function Portfolio() {
  const breadcrumbJsonLd = useMemo(
    () =>
      buildBreadcrumbJsonLd([
        { label: "Home", href: "/" },
        { label: "Portfolio", href: "/portfolio" },
      ]),
    [],
  );

  useSEO({
    title: pageSEO.portfolio.title,
    description: pageSEO.portfolio.description,
    canonical: "https://ashtonvalephoto.com/portfolio",
    jsonLd: breadcrumbJsonLd,
  });

  const searchString = useSearch();
  const urlParams = new URLSearchParams(searchString);
  const tabParam = urlParams.get("tab");
  const initialTab = tabParam && tabs.includes(tabParam) ? tabParam : "Weddings";

  const [activeTab, setActiveTab] = useState(initialTab);
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
          <div className="relative h-full container mx-auto px-4 md:px-8 flex items-center justify-center text-center text-white">
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
          <div className="container mx-auto px-4 md:px-8">
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
          <div className="container mx-auto px-2 md:px-8">
            {activeTab === "Films" ? (
              <div className="py-12">
                <div className="text-center mb-12">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Cinematography</p>
                  <h2 className="font-serif text-3xl font-light mb-6">Wedding Films</h2>
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
                      View Pricing & Availability
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
                      src={image.src}
                      alt={image.alt}
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
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
              Let Us Capture Your Celebration
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-10">
              Every love story deserves to be told with artistry and intention.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-7 text-[11px] uppercase tracking-[0.2em] font-medium hover:shadow-luxury hover:scale-[1.02] transition-all duration-300"
            >
              <Link href="/pricing">
                View Pricing & Availability
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
            <X size={32} strokeWidth={1} aria-hidden="true" /><span className="sr-only">Close lightbox</span>
          </button>

          {/* Previous button */}
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 p-2"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            <ChevronLeft size={48} strokeWidth={1} aria-hidden="true" /><span className="sr-only">Previous image</span>
          </button>

          {/* Image */}
          <div
            className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImages[lightboxIndex].src}
              alt={currentImages[lightboxIndex].alt}
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
            <ChevronRight size={48} strokeWidth={1} aria-hidden="true" /><span className="sr-only">Next image</span>
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
