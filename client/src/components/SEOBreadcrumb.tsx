import { Link } from "wouter";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export interface BreadcrumbEntry {
  label: string;
  href?: string;
}

interface SEOBreadcrumbProps {
  items: BreadcrumbEntry[];
}

export function SEOBreadcrumb({ items }: SEOBreadcrumbProps) {
  return (
    <div className="bg-white border-b border-border/30">
      <div className="container mx-auto px-8 py-3">
        <Breadcrumb>
          <BreadcrumbList className="text-[11px] uppercase tracking-[0.15em]">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <span key={item.label} className="contents">
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>{item.label}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link href={item.href ?? "/"}>{item.label}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {!isLast && <BreadcrumbSeparator />}
                </span>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}

export function buildBreadcrumbJsonLd(items: BreadcrumbEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href
        ? `https://ashtonvalephoto.com${item.href}`
        : undefined,
    })),
  };
}
