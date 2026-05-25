import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { ArrowRight, Mail } from "lucide-react";

// Real portfolio images
import imgGanesha   from "@/assets/images/portfolio-38.png";
import imgWallArt   from "@/assets/images/portfolio-35.png";
import imgKeyHolder from "@/assets/images/portfolio-05.png";
import imgDiya      from "@/assets/images/portfolio-03.png";
import imgHanging   from "@/assets/images/portfolio-37.png";
import imgFrame     from "@/assets/images/portfolio-39.png";
import imgWallArt2  from "@/assets/images/portfolio-40.png";
import imgMandala   from "@/assets/images/portfolio-41.png";

const ALL_PRODUCTS = [
  { id: 1, name: "Ganesha Blessing Frame",        image: imgGanesha,    category: "frames"      },
  { id: 2, name: "Ganesha Mandala Wall Panel",    image: imgWallArt,    category: "wall-art"    },
  { id: 3, name: "Radha Krishna Floral Mandala",  image: imgMandala,    category: "wall-art"    },
  { id: 4, name: "Sun Moon & Ganesha Wall Panel", image: imgWallArt2,   category: "wall-art"    },
  { id: 5, name: "Shri Ganeshay Namah Panel",     image: imgFrame,      category: "frames"      },
  { id: 6, name: "Radha Krishna Key Holder",      image: imgKeyHolder,  category: "key-holders" },
  { id: 7, name: "Mandala Tealight Holders",      image: imgDiya,       category: "diyas"       },
  { id: 8, name: "Shubh Labh Door Hangings",      image: imgHanging,    category: "hangings"    },
];

const CATEGORIES = [
  { id: "all",         label: "All"         },
  { id: "wall-art",    label: "Wall Art"    },
  { id: "frames",      label: "Frames"      },
  { id: "key-holders", label: "Key Holders" },
  { id: "diyas",       label: "Diyas"       },
  { id: "hangings",    label: "Hangings"    },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = React.useState("all");

  const filtered = ALL_PRODUCTS.filter(
    p => activeCategory === "all" || p.category === activeCategory
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Handcrafted Artifacts & Décor – Timeles Art"
        description="Shop handcrafted wall art, Ganesha frames, key holders, diyas and door hangings from Timeles Art, Hingoli. Price on request. Free shipping across India."
        canonical="https://timeles-art.in/products"
      />
      <Navbar />

      <main className="flex-1">
        <div className="bg-muted/30 py-16 border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">Handcrafted</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">Our Collection</h1>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Every piece is made in our studio in Hingoli. Browse, pick what you love, and email us to enquire — we ship free across India.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-12">
          {/* Filter tabs */}
          <div className="flex overflow-x-auto gap-2 sm:gap-3 mb-10 pb-1 justify-start sm:justify-center">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 text-xs font-semibold uppercase tracking-widest px-5 py-2.5 border transition-colors duration-200 ${
                  activeCategory === cat.id
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {filtered.map(product => (
              <div key={product.id} className="group border border-border hover:border-foreground transition-colors duration-300 overflow-hidden flex flex-col">
                <div className="relative aspect-square overflow-hidden bg-muted/20">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex flex-col gap-3 border-t border-border bg-background flex-1">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-1">
                      {CATEGORIES.find(c => c.id === product.category)?.label}
                    </p>
                    <h3 className="font-serif text-sm font-semibold text-foreground leading-snug">{product.name}</h3>
                  </div>
                  <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Price on Request</p>
                  <a
                    href={`mailto:timelesart5@gmail.com?subject=Inquiry: ${encodeURIComponent(product.name)}&body=Hi, I am interested in ordering: ${encodeURIComponent(product.name)} — please share the price and availability.`}
                    className="mt-auto inline-flex items-center justify-center gap-2 bg-foreground text-background text-[10px] font-semibold uppercase tracking-widest px-4 py-2.5 hover:bg-foreground/85 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Enquire
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Link to full portfolio */}
          <div className="mt-14 text-center border-t border-border pt-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">See Everything</p>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-4">Browse All 40+ Items</h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
              This page shows our featured pieces. Visit the full Portfolio to see every item available to order.
            </p>
            <Link href="/portfolio">
              <a className="inline-flex items-center gap-2 bg-foreground text-background text-xs font-semibold uppercase tracking-widest px-8 py-3.5 hover:bg-foreground/85 transition-colors">
                View Full Portfolio <ArrowRight className="w-3 h-3" />
              </a>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
