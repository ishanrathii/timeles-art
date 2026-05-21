import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Truck, Award, RotateCcw, Star, ChevronDown } from "lucide-react";
import { useState } from "react";

// Assets
import heroBg from "@/assets/images/hero-bg.jpg";
import textureBg from "@/assets/images/texture-bg.jpg";
import catArtifacts from "@/assets/images/category-artifacts.jpg";
import catJewelry from "@/assets/images/category-jewelry.jpg";
import catDecor from "@/assets/images/category-decor.jpg";
import prodArtifact from "@/assets/images/product-artifact.jpg";
import prodJewelry from "@/assets/images/product-jewelry.jpg";
import prodDecor from "@/assets/images/product-decor.jpg";
import prodShellKey from "@/assets/images/product-shell-key.jpg";
import prodFairyHouseKey from "@/assets/images/product-fairy-house-key.jpg";
import prodKrishnaCowKey from "@/assets/images/product-krishna-cow-key.jpg";
import prodRadhaKrishnaKey from "@/assets/images/product-radha-krishna-key.png";

// Trust badge icons
const TRUST = [
  { icon: Truck,      label: "Free Shipping",    sub: "Across India" },
  { icon: Award,      label: "Museum Quality",    sub: "Premium finish" },
  { icon: Star,       label: "500+ Pieces",       sub: "Curated collection" },
  { icon: RotateCcw,  label: "Easy Returns",      sub: "Hassle-free" },
];

// Featured products
const PRODUCTS = [
  { name: "Vitthal–Rukmini Murti Set",          img: prodArtifact,       cat: "Sacred Artifacts", price: "₹3,499", compare: "₹4,299", sale: true },
  { name: "Radha–Krishna Key Holder",           img: prodRadhaKrishnaKey, cat: "Home Décor",       price: "₹999",  compare: "₹1,199", sale: true },
  { name: "Seashell Coastal Scene Key Holder",  img: prodShellKey,       cat: "Home Décor",        price: "₹1,299", compare: null,      sale: false, newIn: true },
  { name: "Little Krishna & Cow Key Holder",    img: prodKrishnaCowKey,  cat: "Sacred Artifacts",  price: "₹1,099", compare: "₹1,299", sale: true },
  { name: "Enchanted Cottage Key Holder",       img: prodFairyHouseKey,  cat: "Home Décor",        price: "₹1,199", compare: null,      sale: false, newIn: true },
  { name: "Mandala Tealight Holders",           img: prodJewelry,        cat: "Home Décor",        price: "₹1,299", compare: "₹1,599", sale: true },
];

// Collections
const COLLECTIONS = [
  { title: "Sacred Artifacts",  sub: "Deity Figurines & Wall Art",  img: catArtifacts, href: "/products?category=artifacts" },
  { title: "Decorative Décor",  sub: "Tealights & Key Holders",     img: catJewelry,   href: "/products?category=jewelry" },
  { title: "Heritage Décor",    sub: "Coasters & Home Accents",     img: catDecor,     href: "/products?category=decor" },
];

const FAQ_ITEMS = [
  {
    q: "Where is Priya Art Gallery located?",
    a: "Priya Art Gallery is located at Main Market Road, Near Gandhi Chowk, Hingoli, Maharashtra 431513. You can call us at +91 75585 99155 or chat on WhatsApp."
  },
  {
    q: "Does Priya Art Gallery offer free shipping?",
    a: "Yes! We offer free shipping across India on all orders. Cash on Delivery (COD) is also available. We ensure museum-quality packaging for every item."
  },
  {
    q: "What products does Priya Art Gallery sell?",
    a: "We specialise in three collections: Brass & Bronze Artifacts (idols, diyas, temple items), Traditional Jewelry (Kundan, gold-plated, bridal sets), and Heritage Home Décor (wooden panels, Rajasthani wall art, textiles)."
  },
  {
    q: "How long has Priya Art Gallery been in business?",
    a: "Priya Art Gallery was established in 2004 — we have over 20 years of experience curating handcrafted Indian art from master artisans across Maharashtra and India."
  },
  {
    q: "Are the items authentic and handcrafted?",
    a: "Absolutely. Every piece is sourced directly from verified master artisans. We guarantee authenticity, traditional craftsmanship, and museum-quality finish on all our products."
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-b-0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button
        className="w-full flex items-center justify-between py-4 text-left text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span itemProp="name">{q}</span>
        <ChevronDown className={`w-4 h-4 shrink-0 ml-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pb-4 text-sm text-muted-foreground leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
          <span itemProp="text">{a}</span>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://priyaartgallery.in/#webpage",
    "name": "Priya Art Gallery – Brass Artifacts, Kundan Jewelry & Heritage Décor",
    "url": "https://priyaartgallery.in",
    "description": "Shop handcrafted brass artifacts, traditional Kundan jewelry and premium heritage home décor at Priya Art Gallery, Hingoli, Maharashtra. Est. 2004. Free shipping across India.",
    "isPartOf": { "@id": "https://priyaartgallery.in/#website" },
    "about": { "@id": "https://priyaartgallery.in/#business" },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".speakable"]
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Brass Artifacts, Kundan Jewelry & Heritage Décor | Hingoli, Maharashtra"
        description="Priya Art Gallery, Hingoli – 20+ years of handcrafted Indian art. Shop brass artifacts, Kundan jewelry & heritage home décor. Free shipping across India. COD available."
        canonical="https://priyaartgallery.in/"
        structuredData={homeSchema}
      />
      <Navbar />

      <main className="flex-1">

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden" aria-label="Hero banner">
          <img src={heroBg} alt="Gallery"
            className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02]" />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 text-center text-white px-4">
            <p className="text-xs sm:text-[11px] font-semibold uppercase tracking-[0.35em] mb-5 opacity-90 speakable">
              Est. 2004 · Hingoli, Maharashtra
            </p>
            <h1 className="hero-title font-serif font-semibold mb-6 leading-tight speakable" itemProp="headline">
              The New Season Edit<br />
              <span className="shimmer-warm italic font-light">The Art of Heritage</span>
            </h1>
            <p className="text-sm sm:text-base max-w-md mx-auto mb-10 opacity-85 font-light leading-relaxed speakable" itemProp="description">
              Embrace tradition and timeless craftsmanship. Curated pieces from master artisans across India.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/products">
                <a className="inline-block bg-white text-foreground text-xs font-semibold uppercase tracking-widest px-8 py-3.5 hover:bg-white/90 transition-colors">
                  Shop Art
                </a>
              </Link>
              <Link href="/contact">
                <a className="inline-block border border-white text-white text-xs font-semibold uppercase tracking-widest px-8 py-3.5 hover:bg-white/10 transition-colors">
                  Our Story
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* ── TRUST MARQUEE ─────────────────────────────────────────────────── */}
        <div className="border-y border-border bg-secondary overflow-hidden py-3">
          <div className="flex animate-marquee whitespace-nowrap w-max">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="inline-flex items-center gap-3 px-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                <span>Free Shipping in India</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/40 inline-block" />
                <span>Museum-Quality Prints</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/40 inline-block" />
                <span>COD Available</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/40 inline-block" />
                <span>Curated Collection</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/40 inline-block" />
              </span>
            ))}
          </div>
        </div>

        {/* ── COLLECTIONS GRID ──────────────────────────────────────────────── */}
        <section className="py-14 sm:py-20 container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">Collections</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">Shop by Category</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {COLLECTIONS.map((c, i) => (
              <Link key={i} href={c.href}>
                <a className="group block relative overflow-hidden aspect-[3/4]">
                  <img src={c.img} alt={c.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white/70 text-[10px] font-semibold uppercase tracking-[0.25em] mb-1.5">{c.sub}</p>
                    <h3 className="text-white font-serif text-2xl sm:text-3xl font-semibold leading-tight mb-3">{c.title}</h3>
                    <span className="inline-flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Shop Now <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CURATOR'S PICK ────────────────────────────────────────────────── */}
        <section className="py-10 sm:py-16 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-8 sm:mb-10">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-2">Handpicked</p>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">Our Curator's Pick</h2>
              </div>
              <Link href="/products">
                <a className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-foreground hover:text-muted-foreground transition-colors">
                  View All <ArrowRight className="w-3 h-3" />
                </a>
              </Link>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
              {PRODUCTS.map((p, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="product-img-wrap aspect-square mb-3 relative">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                    {/* Badges */}
                    {p.sale && (
                      <span className="absolute top-2 left-2 badge-sale">10% off</span>
                    )}
                    {p.newIn && !p.sale && (
                      <span className="absolute top-2 left-2 badge-new">New in</span>
                    )}
                    {/* Quick buy overlay */}
                    <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-foreground/90 py-2.5 text-center">
                      <span className="text-background text-[11px] font-semibold uppercase tracking-widest">Quick View</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1">{p.cat}</p>
                    <h4 className="font-sans text-sm font-medium text-foreground leading-snug mb-1.5 line-clamp-2 group-hover:text-muted-foreground transition-colors">
                      {p.name}
                    </h4>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-semibold text-foreground">{p.price}</span>
                      {p.compare && (
                        <span className="text-xs text-muted-foreground line-through">{p.compare}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile view-all */}
            <div className="mt-8 text-center sm:hidden">
              <Link href="/products">
                <a className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-foreground hover:text-muted-foreground transition-colors">
                  View All <ArrowRight className="w-3 h-3" />
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* ── BANNER / QUOTE BREAK ──────────────────────────────────────────── */}
        <section className="relative h-[45vh] sm:h-[55vh] overflow-hidden flex items-center justify-center">
          <img src={textureBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] mb-5 opacity-70">Our Philosophy</p>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-light italic leading-tight mb-8">
              "Art is not what you see, but what<br className="hidden sm:block" /> you make others see."
            </h2>
            <p className="text-[11px] font-semibold uppercase tracking-widest opacity-60">— Priya Art Gallery, Hingoli · Since 2004</p>
          </div>
        </section>

        {/* ── TRUST ICONS ───────────────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {TRUST.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                    <Icon className="w-4 h-4 text-foreground" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-foreground">{label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT / STORY BANNER ──────────────────────────────────────────── */}
        <section className="py-14 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">
              <div className="overflow-hidden">
                <img src={catArtifacts} alt="Artisan Craftsmanship"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-4">Our Heritage</p>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-6 leading-tight">
                  The Essence of<br />Maharashtra
                </h2>
                <div className="w-8 h-px bg-foreground mb-6" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Located in the heart of Hingoli, Priya Art Gallery has been a beacon of traditional craftsmanship
                  for over two decades. We source directly from master artisans across India, ensuring every piece
                  tells a story of heritage, devotion, and unparalleled skill.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  Our collection spans sacred brass artifacts, royal Kundan jewelry, and hand-carved home décor —
                  each piece a testament to India's living artistic tradition.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Link href="/contact">
                    <a className="inline-block bg-foreground text-background text-xs font-semibold uppercase tracking-widest px-7 py-3.5 hover:bg-foreground/85 transition-colors">
                      Visit The Gallery
                    </a>
                  </Link>
                  <Link href="/products">
                    <a className="inline-block border border-foreground text-foreground text-xs font-semibold uppercase tracking-widest px-7 py-3.5 hover:bg-foreground hover:text-background transition-colors">
                      Shop Collection
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ SECTION (AEO / LLM) ──────────────────────────────────────── */}
        <section className="py-14 sm:py-20 bg-background border-y border-border" aria-label="Frequently Asked Questions"
          itemScope itemType="https://schema.org/FAQPage">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <div className="text-center mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">Help Centre</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">Frequently Asked Questions</h2>
            </div>
            <div className="divide-y divide-border">
              {FAQ_ITEMS.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Still have questions?{" "}
              <a href="https://wa.me/917558599155" target="_blank" rel="noopener noreferrer"
                className="text-foreground font-semibold underline underline-offset-2 hover:text-muted-foreground transition-colors">
                Chat with us on WhatsApp
              </a>{" "}
              or{" "}
              <Link href="/contact">
                <a className="text-foreground font-semibold underline underline-offset-2 hover:text-muted-foreground transition-colors">
                  visit our gallery
                </a>
              </Link>.
            </p>
          </div>
        </section>

        {/* ── GET DISCOUNT CTA ──────────────────────────────────────────────── */}
        <section className="py-14 sm:py-20 bg-foreground text-background text-center" aria-label="Exclusive discount offer">
          <div className="container mx-auto px-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-background/60 mb-4">Exclusive Offer</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-3">
              Get 10% Off Your First Order
            </h2>
            <p className="text-sm text-background/70 mb-2">Valid on orders above ₹1,999</p>
            <div className="inline-block border border-background/30 px-8 py-3 mt-4 mb-8">
              <span className="font-mono text-lg font-bold tracking-widest">PRIYA10</span>
            </div>
            <div className="block">
              <Link href="/products">
                <a className="inline-block bg-white text-foreground text-xs font-semibold uppercase tracking-widest px-8 py-3.5 hover:bg-white/90 transition-colors">
                  Shop Now
                </a>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
