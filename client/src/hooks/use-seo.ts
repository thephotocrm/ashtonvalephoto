import { useEffect } from "react";

interface UseSEOOptions {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noIndex?: boolean;
}

const DEFAULTS = {
  title: "Ashton Vale Photo & Video | Luxury Wedding Photography",
  description:
    "Luxury wedding photography and cinematography in the United States and worldwide destinations. Ashton Vale captures timeless, editorial imagery for discerning couples.",
  ogImage: "https://ashtonvalephoto.com/opengraph.jpg",
  canonical: "https://ashtonvalephoto.com/",
};

function setMetaTag(
  attribute: string,
  attrValue: string,
  content: string,
) {
  let el = document.querySelector(
    `meta[${attribute}="${attrValue}"]`,
  ) as HTMLMetaElement | null;
  if (el) {
    el.setAttribute("content", content);
  } else {
    el = document.createElement("meta");
    el.setAttribute(attribute, attrValue);
    el.setAttribute("content", content);
    document.head.appendChild(el);
  }
}

function setCanonical(href: string) {
  let el = document.querySelector(
    'link[rel="canonical"]',
  ) as HTMLLinkElement | null;
  if (el) {
    el.href = href;
  } else {
    el = document.createElement("link");
    el.rel = "canonical";
    el.href = href;
    document.head.appendChild(el);
  }
}

export function useSEO({
  title,
  description,
  canonical,
  ogImage,
  jsonLd,
  noIndex,
}: UseSEOOptions) {
  useEffect(() => {
    // --- title ---
    const prevTitle = document.title;
    document.title = title;

    // --- description ---
    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);

    // --- og:image ---
    if (ogImage) {
      setMetaTag("property", "og:image", ogImage);
      setMetaTag("name", "twitter:image", ogImage);
    }

    // --- canonical ---
    if (canonical) {
      setCanonical(canonical);
    }

    // --- noindex ---
    if (noIndex) {
      setMetaTag("name", "robots", "noindex, nofollow");
    }

    // --- JSON-LD ---
    const scripts: HTMLScriptElement[] = [];
    if (jsonLd) {
      const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      items.forEach((data) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo-hook", "true");
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
        scripts.push(script);
      });
    }

    // --- cleanup ---
    return () => {
      document.title = prevTitle;
      setMetaTag("name", "description", DEFAULTS.description);
      setMetaTag("property", "og:title", DEFAULTS.title);
      setMetaTag("property", "og:description", DEFAULTS.description);
      setMetaTag("name", "twitter:title", DEFAULTS.title);
      setMetaTag("name", "twitter:description", DEFAULTS.description);
      setMetaTag("property", "og:image", DEFAULTS.ogImage);
      setMetaTag("name", "twitter:image", DEFAULTS.ogImage);
      setCanonical(DEFAULTS.canonical);

      if (noIndex) {
        const robots = document.querySelector('meta[name="robots"]');
        robots?.remove();
      }

      scripts.forEach((s) => s.remove());
    };
  }, [title, description, canonical, ogImage, noIndex, jsonLd]);
}
