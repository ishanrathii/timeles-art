/**
 * SEOHead — injects per-page <title>, <meta>, and JSON-LD via document.head.
 * Keeps all SEO logic in one place for easy maintenance.
 *
 * Usage:
 *   <SEOHead
 *     title="Brass Artifacts – Priya Art Gallery"
 *     description="Shop handcrafted brass idols, diyas..."
 *     canonical="https://priyaartgallery.in/products?category=artifacts"
 *     type="CollectionPage"
 *   />
 */

import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  type?: string;   // Schema @type override
  noIndex?: boolean;
  structuredData?: object;
}

const SITE_NAME = "Priya Art Gallery";
const BASE_URL  = "https://priyaartgallery.in";
const OG_IMAGE  = `${BASE_URL}/opengraph.jpg`;

function setMeta(name: string, content: string, prop = false) {
  const attr = prop ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setJsonLd(id: string, data: object) {
  let el = document.querySelector(`script[data-seo-id="${id}"]`) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.setAttribute("data-seo-id", id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage = OG_IMAGE,
  type = "WebPage",
  noIndex = false,
  structuredData,
}: SEOProps) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${SITE_NAME}`
      : `${SITE_NAME} – Brass Artifacts, Kundan Jewelry & Heritage Décor | Hingoli`;

    document.title = fullTitle;

    if (description) {
      setMeta("description", description);
      setMeta("og:description", description, true);
      setMeta("twitter:description", description);
    }

    setMeta("og:title", fullTitle, true);
    setMeta("twitter:title", fullTitle);
    setMeta("og:image", ogImage, true);
    setMeta("twitter:image", ogImage);

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    if (noIndex) {
      setMeta("robots", "noindex, nofollow");
    }

    // Per-page structured data
    if (structuredData) {
      setJsonLd("page-schema", structuredData);
    }
  }, [title, description, canonical, ogImage, noIndex, structuredData]);

  return null;
}
