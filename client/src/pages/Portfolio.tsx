import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

import p01 from "@/assets/images/portfolio-01.jpg";
import p02 from "@/assets/images/portfolio-02.jpg";
import p03 from "@/assets/images/portfolio-03.jpg";
import p04 from "@/assets/images/portfolio-04.jpg";
import p05 from "@/assets/images/portfolio-05.jpg";
import p06 from "@/assets/images/portfolio-06.jpg";
import p07 from "@/assets/images/portfolio-07.jpg";
import p08 from "@/assets/images/portfolio-08.jpg";
import p09 from "@/assets/images/portfolio-09.jpg";
import p10 from "@/assets/images/portfolio-10.jpg";
import p11 from "@/assets/images/portfolio-11.jpg";
import p12 from "@/assets/images/portfolio-12.jpg";
import p13 from "@/assets/images/portfolio-13.jpg";
import p14 from "@/assets/images/portfolio-14.jpg";
import p15 from "@/assets/images/portfolio-15.jpg";
import { useState } from "react";
import { X } from "lucide-react";

const ITEMS = [
  { img: p01,  label: "Baby Krishna",                   tag: "Artifacts" },
  { img: p02,  label: "Radha Figurine",                  tag: "Artifacts" },
  { img: p03,  label: "Radha–Krishna Cutouts",           tag: "Artifacts" },
  { img: p04,  label: "Vitthal–Rukmini Murti",           tag: "Artifacts" },
  { img: p05,  label: "Orange & Blue Tealight Set",      tag: "Décor" },
  { img: p06,  label: "Mandala Tealight Holders",        tag: "Décor" },
  { img: p07,  label: "Radha–Krishna Key Holder",        tag: "Décor" },
  { img: p08,  label: "Seashell Key Holder",             tag: "Décor" },
  { img: p09,  label: "Baby Krishna & Cow Key Holder",   tag: "Artifacts" },
  { img: p10,  label: "Fairy Cottage Key Holder",        tag: "Décor" },
  { img: p11,  label: "Pink Rose Tealight Set",          tag: "Décor" },
  { img: p12,  label: "Teal & Pink Coaster Set",         tag: "Décor" },
  { img: p13,  label: "Lotus Mandala Coaster Set",       tag: "Décor" },
  { img: p14,  label: "Pink Mandala Tealight Set",       tag: "Décor" },
  { img: p15,  label: "Vitthal–Rukmini Wall Art",        tag: "Artifacts" },
];

const TAGS = ["All", "Artifacts", "Décor"];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = ITEMS.filter(i => active === "All" || i.tag === active);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Portfolio – Handcrafted Collection"
        description="Browse Priya Art Gallery's full portfolio of handcrafted products — sacred artifacts, mandala décor, tealight holders, key holders and more from Hingoli, Maharashtra."
        canonical="https://priyaartgallery.in/portfolio"
      />
      <Navbar />

      <main className="flex-1">
        {/* Page header */}
        <div className="bg-muted/30 py-16 border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">Our Work</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">Portfolio</h1>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Every piece handcrafted with devotion. Explore our full collection of sacred artifacts,
              decorative tealights, coaster sets and artisan key holders.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-12">
          {/* Filter tabs */}
          <div className="flex justify-center gap-3 mb-10">
            {TAGS.map(tag => (
              <button
                key={tag}
                onClick={() => setActive(tag)}
                className={`text-xs font-semibold uppercase tracking-widest px-6 py-2.5 border transition-colors duration-200 ${
                  active === tag
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <div
                key={item.label}
                className="break-inside-avoid group cursor-pointer relative overflow-hidden"
                onClick={() => setLightbox(ITEMS.indexOf(item))}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105 block"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-white/70 mb-1">{item.tag}</span>
                  <p className="text-white font-serif text-base font-semibold leading-tight">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-7 h-7" />
          </button>
          <div className="max-w-3xl w-full" onClick={e => e.stopPropagation()}>
            <img
              src={ITEMS[lightbox].img}
              alt={ITEMS[lightbox].label}
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="mt-4 text-center">
              <p className="text-white/60 text-[11px] uppercase tracking-widest mb-1">{ITEMS[lightbox].tag}</p>
              <p className="text-white font-serif text-xl">{ITEMS[lightbox].label}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
