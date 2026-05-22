import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useState } from "react";
import { X } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";


import p01 from "@/assets/images/portfolio-01.png";
import p02 from "@/assets/images/portfolio-02.png";
import p03 from "@/assets/images/portfolio-03.png";
import p04 from "@/assets/images/portfolio-04.png";
import p05 from "@/assets/images/portfolio-05.png";
import p06 from "@/assets/images/portfolio-06.png";
import p07 from "@/assets/images/portfolio-07.png";
import p08 from "@/assets/images/portfolio-08.png";
import p09 from "@/assets/images/portfolio-09.png";
import p10 from "@/assets/images/portfolio-10.png";
import p11 from "@/assets/images/portfolio-11.png";
import p12 from "@/assets/images/portfolio-12.png";
import p13 from "@/assets/images/portfolio-13.png";
import p14 from "@/assets/images/portfolio-14.png";
import p15 from "@/assets/images/portfolio-15.png";
import p16 from "@/assets/images/portfolio-16.png";
import p17 from "@/assets/images/portfolio-17.png";
import p18 from "@/assets/images/portfolio-18.png";
import p19 from "@/assets/images/portfolio-19.jpg";
import p20 from "@/assets/images/portfolio-20.jpg";
import p21 from "@/assets/images/portfolio-21.jpg";
import p22 from "@/assets/images/portfolio-22.jpg";
import p24 from "@/assets/images/portfolio-24.jpg";
import p25 from "@/assets/images/portfolio-25.jpg";
import p26 from "@/assets/images/portfolio-26.jpg";
import p27 from "@/assets/images/portfolio-27.jpg";
import p28 from "@/assets/images/portfolio-28.jpg";
import p29 from "@/assets/images/portfolio-29.jpg";
import p30 from "@/assets/images/portfolio-30.jpg";
import p31 from "@/assets/images/portfolio-31.jpg";
import p32 from "@/assets/images/portfolio-32.jpg";
import p33 from "@/assets/images/portfolio-33.jpg";
import p34 from "@/assets/images/portfolio-34.jpg";
import p35 from "@/assets/images/portfolio-35.png";
import p36 from "@/assets/images/portfolio-36.png";
import p37 from "@/assets/images/portfolio-37.png";
import p38 from "@/assets/images/portfolio-38.png";
import p39 from "@/assets/images/portfolio-39.png";
import p40 from "@/assets/images/portfolio-40.png";
import p41 from "@/assets/images/portfolio-41.png";
import p42 from "@/assets/images/portfolio-42.png";
import p43 from "@/assets/images/portfolio-43.png";
import p44 from "@/assets/images/portfolio-44.png";
import p45 from "@/assets/images/portfolio-45.png";
import p46 from "@/assets/images/portfolio-46.png";
import p47 from "@/assets/images/portfolio-47.png";
import p48 from "@/assets/images/portfolio-48.png";
import p49 from "@/assets/images/portfolio-49.png";
import p50 from "@/assets/images/portfolio-50.png";
import p51 from "@/assets/images/portfolio-51.png";
import p52 from "@/assets/images/portfolio-52.png";
import p53 from "@/assets/images/portfolio-53.png";
import p54 from "@/assets/images/portfolio-54.png";
import p55 from "@/assets/images/portfolio-55.png";
import p56 from "@/assets/images/portfolio-56.png";
import p57 from "@/assets/images/portfolio-57.png";
import p58 from "@/assets/images/portfolio-58.png";
import p59 from "@/assets/images/portfolio-59.png";
import p60 from "@/assets/images/portfolio-60.png";
import p61 from "@/assets/images/portfolio-61.png";
import p62 from "@/assets/images/portfolio-62.png";
import p63 from "@/assets/images/portfolio-63.png";
import p64 from "@/assets/images/portfolio-64.png";
import p65 from "@/assets/images/portfolio-65.png";
import p66 from "@/assets/images/portfolio-66.png";
import p67 from "@/assets/images/portfolio-67.png";
import p68 from "@/assets/images/portfolio-68.png";
import p69 from "@/assets/images/portfolio-69.png";
import p70 from "@/assets/images/portfolio-70.png";
import p71 from "@/assets/images/portfolio-71.png";
import p72 from "@/assets/images/portfolio-72.png";
import p73 from "@/assets/images/portfolio-73.png";
import p74 from "@/assets/images/portfolio-74.png";
import p75 from "@/assets/images/portfolio-75.png";
import p76 from "@/assets/images/portfolio-76.png";
import p77 from "@/assets/images/portfolio-77.png";
import p78 from "@/assets/images/portfolio-78.png";
import p79 from "@/assets/images/portfolio-79.png";

const ITEMS = [
  { img: p01, label: "Radha Figurine",                  tag: "Wallpapers"  },
  { img: p02, label: "Radha–Krishna–Balram Set",         tag: "Wallpapers"  },
  { img: p03, label: "Mandala Tealight Holders",         tag: "Diyas"       },
  { img: p04, label: "Vitthal–Rukmini Murti",            tag: "Wallpapers"  },
  { img: p05, label: "Radha–Krishna Key Holder",         tag: "Key Holders" },
  { img: p06, label: "Seashell Coastal Key Holder",      tag: "Key Holders" },
  { img: p07, label: "Enchanted Cottage Key Holder",     tag: "Key Holders" },
  { img: p08, label: "Little Krishna & Cow Key Holder",  tag: "Key Holders" },
  { img: p09, label: "Lotus Mandala Coaster Set",        tag: "Plates"      },
  { img: p10, label: "Teal Mandala Coaster Set",         tag: "Plates"      },
  { img: p11, label: "Pink Rose Hoop Wall Hangings",     tag: "Hangings"    },
  { img: p12, label: "Peacock Medallion Hangings",       tag: "Hangings"    },
  { img: p13, label: "Labh–Radha Krishna Frame",         tag: "Frames"      },
  { img: p14, label: "Personalised Ring Décor",          tag: "Décor"       },
  { img: p15, label: "Temple Door Toran",                tag: "Hangings"    },
  { img: p16, label: "Lotus Diya Set",                   tag: "Diyas"       },
  { img: p17, label: "Floral Gold Chain",                tag: "Hangings"    },
  { img: p18, label: "Star Wall Hangings",               tag: "Hangings"    },
  { img: p19, label: "Ganesh Elephant Toran",            tag: "Hangings"    },
  { img: p20, label: "Rose Tealight Rangoli Set",        tag: "Diyas"       },
  { img: p21, label: "Pearl Hoop Floral Hangings",       tag: "Hangings"    },
  { img: p22, label: "Colorful Petal Diya Set",          tag: "Diyas"       },
  { img: p24, label: "Labh Radha-Krishna Frame",         tag: "Frames"      },
  { img: p25, label: "Ring Ceremony Décor",              tag: "Décor"       },
  { img: p26, label: "Ganesha Om Wall Art",              tag: "Wall Art"    },
  { img: p27, label: "Tabla Music Key Holder",           tag: "Key Holders" },
  { img: p28, label: "Mom's Cafe Wall Décor",            tag: "Wall Art"    },
  { img: p29, label: "Tirupati Balaji Frame",            tag: "Frames"      },
  { img: p30, label: "Mosaic Circle Wall Hanging",       tag: "Wall Art"    },
  { img: p31, label: "Fish Wall Key Holder",             tag: "Key Holders" },
  { img: p32, label: "Cottage Window Wall Art",          tag: "Wall Art"    },
  { img: p33, label: "Cat Hammock Décor",                tag: "Wall Art"    },
  { img: p34, label: "Rajasthani Couple Wall Panel",     tag: "Wall Art"    },
  { img: p35, label: "Ganesha Mandala Wall Panel",       tag: "Wall Art"    },
  { img: p36, label: "Vakratunda Shloka Wall Art",       tag: "Wall Art"    },
  { img: p37, label: "Shubh Labh Door Hangings",         tag: "Hangings"    },
  { img: p38, label: "Ganesha Blessing Frame",           tag: "Frames"      },
  { img: p39, label: "Shri Ganeshay Namah Panel",        tag: "Frames"      },
  { img: p40, label: "Sun Moon & Ganesha Wall Panel",    tag: "Wall Art"    },
  { img: p41, label: "Radha Krishna Floral Mandala",     tag: "Wall Art"    },
  // Batch 3 — May 23
  { img: p42, label: "Love is Life Couple Wall Art",     tag: "Wall Art"    },
  { img: p43, label: "Ring Ceremony Floral Basket",      tag: "Décor"       },
  { img: p44, label: "Blue Rose Toran Chain",            tag: "Hangings"    },
  { img: p45, label: "Baby Krishna Photo Hangings",      tag: "Hangings"    },
  { img: p46, label: "Blue Gold Toran Chain",            tag: "Hangings"    },
  { img: p47, label: "Orange Sunflower Diya Pair",       tag: "Diyas"       },
  { img: p48, label: "Red Shubh Labh Hanging",           tag: "Hangings"    },
  { img: p49, label: "Red Krishna Lotus Hanging",        tag: "Hangings"    },
  { img: p50, label: "Orange Floral Toran",              tag: "Hangings"    },
  { img: p51, label: "Pink Shubh Labh Hanging",          tag: "Hangings"    },
  { img: p52, label: "Blue Krishna Lotus Hanging",       tag: "Hangings"    },
  { img: p53, label: "Green Shubh Labh Hanging",         tag: "Hangings"    },
  { img: p54, label: "Labh Shubh Lotus Hanging",         tag: "Hangings"    },
  { img: p55, label: "Rose Shubh Labh Hanging",          tag: "Hangings"    },
  { img: p56, label: "Mirror Shubh Labh Hanging",        tag: "Hangings"    },
  { img: p57, label: "Dark Green Shubh Labh Hanging",    tag: "Hangings"    },
  { img: p58, label: "Teal Gold Mandala Plate",          tag: "Plates"      },
  { img: p59, label: "Peacock Feather Mandala Plate",    tag: "Plates"      },
  { img: p60, label: "Teal Pearl Mandala Plate",         tag: "Plates"      },
  { img: p61, label: "Nandi Blue Decorative Plate",      tag: "Plates"      },
  { img: p62, label: "Pink Pearl Mandala Plate",         tag: "Plates"      },
  { img: p63, label: "Purple Lotus Mandala Plate",       tag: "Plates"      },
  { img: p64, label: "Red Lotus Pearl Plate",            tag: "Plates"      },
  { img: p65, label: "White Nandi Blue Plate",           tag: "Plates"      },
  { img: p66, label: "Pink Lotus Pearl Plate",           tag: "Plates"      },
  { img: p67, label: "Yellow Floral Tile Wall Art",      tag: "Wall Art"    },
  { img: p68, label: "Blue Lotus Diya",                  tag: "Diyas"       },
  { img: p69, label: "Charan Paduka Décor",              tag: "Décor"       },
  { img: p70, label: "Rangoli Diya Set",                 tag: "Diyas"       },
  { img: p71, label: "Om Mandala Wall Art",              tag: "Wall Art"    },
  { img: p72, label: "Swastik Wall Décor",               tag: "Wall Art"    },
  { img: p73, label: "Shubh Labh Tiles Set",             tag: "Décor"       },
  { img: p74, label: "Devi Face Wall Art",               tag: "Wall Art"    },
  { img: p75, label: "Gold Diya Lamp",                   tag: "Diyas"       },
  { img: p76, label: "Kalash Pair Décor",                tag: "Décor"       },
  { img: p77, label: "Trishul Wall Décor",               tag: "Wall Art"    },
  { img: p78, label: "Red Mandala Plate",                tag: "Plates"      },
  { img: p79, label: "Mandala Coaster Set",              tag: "Plates"      },
];

const TAGS = ["All", "Wallpapers", "Key Holders", "Diyas", "Plates", "Frames", "Wall Art", "Hangings", "Décor"];

const STARTING_PRICE: Record<string, string> = {
  "Wallpapers":   "₹699",
  "Key Holders":  "₹299",
  "Diyas":        "₹349",
  "Plates":       "₹449",
  "Frames":       "₹1,199",
  "Wall Art":     "₹799",
  "Hangings":     "₹499",
  "Décor":        "₹349",
};

export default function Portfolio() {
  const urlTag = new URLSearchParams(window.location.search).get("tag") || "All";
  const [active, setActive]   = useState(urlTag);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = ITEMS.filter(i => active === "All" || i.tag === active);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Portfolio – Handcrafted Collection"
        description="Browse Timeles Art's full portfolio — sacred artifacts, mandala décor, tealight holders, key holders and more from Hingoli, Maharashtra."
        canonical="https://timeles-art.in/portfolio"
      />
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <div className="bg-muted/30 py-16 border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">Shop Our Collection</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">Portfolio</h1>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Every piece handcrafted with devotion — and available to order. Browse, pick your favourite,
              and enquire directly on WhatsApp. We ship free across India.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-12">
          {/* Filter tabs — scrollable on mobile */}
          <div className="flex overflow-x-auto gap-2 sm:gap-3 mb-10 pb-1 justify-start sm:justify-center">
            {TAGS.map(tag => (
              <button
                key={tag}
                onClick={() => setActive(tag)}
                className={`shrink-0 text-xs font-semibold uppercase tracking-widest px-5 py-2.5 border transition-colors duration-200 ${
                  active === tag
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {filtered.map((item) => (
              <div
                key={item.label}
                className="group border border-border hover:border-foreground transition-colors duration-300 overflow-hidden flex flex-col"
              >
                {/* Image — click opens lightbox */}
                <div
                  className="relative overflow-hidden cursor-zoom-in aspect-square bg-muted/20"
                  onClick={() => setLightbox(ITEMS.indexOf(item))}
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Zoom hint */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-black/60 text-white text-[9px] font-semibold uppercase tracking-widest px-3 py-1.5">View Full</span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-4 flex flex-col gap-3 border-t border-border bg-background flex-1">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-1">{item.tag}</p>
                    <h3 className="font-serif text-sm font-semibold text-foreground leading-snug">{item.label}</h3>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif text-base font-semibold text-foreground">
                      {STARTING_PRICE[item.tag] ?? "₹299"}
                    </span>
                    <span className="text-[9px] text-muted-foreground uppercase tracking-widest">onwards</span>
                  </div>
                  <a
                    href={`https://wa.me/917558599155?text=Hi%2C%20I%20am%20interested%20in%20ordering%3A%20${encodeURIComponent(item.label)}%20%E2%80%94%20please%20share%20the%20price%20and%20availability.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white text-[10px] font-semibold uppercase tracking-widest px-4 py-2.5 hover:bg-[#1ebe5d] transition-colors"
                    onClick={e => e.stopPropagation()}
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    Enquire
                  </a>
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
          <div className="max-w-2xl w-full" onClick={e => e.stopPropagation()}>
            <img
              src={ITEMS[lightbox].img}
              alt={ITEMS[lightbox].label}
              className="w-full max-h-[70vh] object-contain"
            />
            <div className="mt-4 text-center">
              <p className="text-white/60 text-[11px] uppercase tracking-widest mb-1">{ITEMS[lightbox].tag}</p>
              <p className="text-white font-serif text-xl mb-1">{ITEMS[lightbox].label}</p>
              <p className="text-white/80 font-serif text-lg font-semibold mb-4">
                {STARTING_PRICE[ITEMS[lightbox].tag] ?? "₹299"} <span className="text-white/50 text-xs font-normal uppercase tracking-widest">onwards</span>
              </p>
              <a
                href={`https://wa.me/917558599155?text=Hi%2C%20I%20am%20interested%20in%20ordering%3A%20${encodeURIComponent(ITEMS[lightbox].label)}%20%E2%80%94%20please%20share%20the%20price%20and%20availability.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white text-[11px] font-semibold uppercase tracking-widest px-6 py-3 hover:bg-[#1ebe5d] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
