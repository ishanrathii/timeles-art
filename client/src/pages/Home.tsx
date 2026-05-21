import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, MapPin } from "lucide-react";

// Assets
import heroBg from "@/assets/images/hero-bg.png";
import textureBg from "@/assets/images/texture-bg.png";
import catArtifacts from "@/assets/images/category-artifacts.png";
import catJewelry from "@/assets/images/category-jewelry.png";
import catDecor from "@/assets/images/category-decor.png";
import prodArtifact from "@/assets/images/product-artifact.png";
import prodJewelry from "@/assets/images/product-jewelry.png";
import prodDecor from "@/assets/images/product-decor.png";

// Trust/stats
const STATS = [
  { value: "20+", label: "Years of Legacy" },
  { value: "500+", label: "Curated Pieces" },
  { value: "50+", label: "Master Artisans" },
  { value: "3", label: "Collections" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* ── Announcement ticker ───────────────────────────────────────────── */}
      <div className="bg-primary text-primary-foreground overflow-hidden py-2.5 border-b-2 border-foreground text-[10px] sm:text-xs font-black tracking-[0.25em] uppercase">
        <div className="flex animate-marquee whitespace-nowrap w-max">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-8 px-8">
              <span>Sacred Brass Artifacts</span>
              <span className="opacity-50">◆</span>
              <span>Kundan &amp; Gold Jewelry</span>
              <span className="opacity-50">◆</span>
              <span>Heritage Home Décor</span>
              <span className="opacity-50">◆</span>
              <span>Est. Hingoli 2004</span>
              <span className="opacity-50">◆</span>
            </span>
          ))}
        </div>
      </div>

      <main className="flex-1">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative min-h-[92vh] flex items-end overflow-hidden border-b-4 border-foreground">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <img src={heroBg} alt="Gallery Interior"
              className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
          </div>

          {/* Brutalist hero text — anchored bottom-left */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
            <div className="max-w-4xl">
              <div className="inline-block bg-primary px-4 py-1.5 mb-6 border-2 border-primary-foreground/20">
                <span className="text-primary-foreground text-[10px] font-black uppercase tracking-[0.35em]">
                  Est. 2004 · Hingoli, Maharashtra
                </span>
              </div>

              <h1 className="hero-title font-serif font-black text-white uppercase leading-[0.95] mb-8">
                Time<br />
                <span className="shimmer-gold italic">less.</span>
              </h1>

              <p className="text-white/80 text-base sm:text-xl max-w-xl mb-10 font-light leading-relaxed"
                style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}>
                Curating the finest handcrafted treasures from the heart of Maharashtra —
                artifacts that transcend generations.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link href="/products">
                  <a className="inline-flex items-center gap-3 bg-primary text-primary-foreground border-2 border-primary-foreground/20 px-8 py-4 text-xs font-black uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors shadow-[4px_4px_0px_rgba(255,255,255,0.15)]">
                    View Collection
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="inline-flex items-center gap-3 bg-transparent text-white border-2 border-white/50 px-8 py-4 text-xs font-black uppercase tracking-[0.25em] hover:bg-white hover:text-foreground transition-colors">
                    Our Story
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-6 right-6 sm:right-10 z-10 flex flex-col items-center gap-2 opacity-60">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-white to-primary animate-pulse" />
          </div>
        </section>

        {/* ── STATS BAR ────────────────────────────────────────────────────── */}
        <section className="border-b-4 border-foreground bg-foreground text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x-2 divide-secondary-foreground/20">
              {STATS.map(({ value, label }, i) => (
                <div key={label} className={`flex flex-col items-center justify-center py-8 sm:py-10 gap-1 ${i >= 2 ? 'border-t-2 md:border-t-0 border-secondary-foreground/20' : ''}`}>
                  <span className="font-serif text-4xl sm:text-5xl font-black text-primary leading-none">{value}</span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-secondary-foreground/60 font-bold mt-1">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COLLECTIONS GRID ─────────────────────────────────────────────── */}
        <section className="py-16 sm:py-24 border-b-4 border-foreground"
          style={{ backgroundImage: `url(${textureBg})`, backgroundSize: "cover" }}>
          <div className="absolute inset-0 bg-background/80 pointer-events-none" />
          <div className="container mx-auto px-4 sm:px-6 relative">
            {/* Section header */}
            <div className="mb-12 sm:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b-2 border-foreground pb-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-primary block mb-3">
                  Our Collections
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-none">
                  Exquisite<br />Handicrafts
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base max-w-xs leading-relaxed">
                Every category represents a unique facet of Indian heritage,
                preserved for the discerning collector.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-foreground">
              {[
                { title: "Sacred Artifacts", sub: "Brass & Bronze", image: catArtifacts, link: "/products?category=artifacts", label: "01" },
                { title: "Royal Jewelry", sub: "Kundan & Gold", image: catJewelry, link: "/products?category=jewelry", label: "02" },
                { title: "Heritage Decor", sub: "Wood & Silk", image: catDecor, link: "/products?category=decor", label: "03" },
              ].map((cat, i) => (
                <Link key={i} href={cat.link}>
                  <a className="group relative block aspect-[3/4] overflow-hidden border-r-2 last:border-r-0 border-foreground cursor-pointer">
                    <img src={cat.image} alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    {/* Number badge */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground text-[10px] font-black">{cat.label}</span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                      <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] block mb-2">
                        {cat.sub}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-black text-white uppercase leading-tight mb-4">
                        {cat.title}
                      </h3>
                      <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="h-px flex-1 bg-primary" />
                        <span className="text-primary text-[10px] font-black uppercase tracking-widest">Explore</span>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── MANIFESTO / QUOTE ─────────────────────────────────────────────── */}
        <section className="py-20 sm:py-32 bg-foreground text-secondary-foreground border-b-4 border-primary overflow-hidden relative">
          <div className="absolute top-0 right-0 font-serif text-[20rem] sm:text-[28rem] text-secondary-foreground/4 leading-none select-none pointer-events-none -mt-8 -mr-8 font-black">
            "
          </div>
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="w-14 h-1 bg-primary mb-8" />
              <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight text-white mb-10">
                Art is not what<br />
                <span className="text-primary italic">you see</span> — but what<br />
                you make others see.
              </blockquote>
              <p className="text-secondary-foreground/60 text-xs font-black uppercase tracking-[0.35em]">
                — Priya Art Gallery, Hingoli · Legacy since 2004
              </p>
            </div>
          </div>
        </section>

        {/* ── FEATURED PIECES ───────────────────────────────────────────────── */}
        <section className="py-16 sm:py-24 border-b-4 border-foreground bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-4 border-b-2 border-foreground pb-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-primary block mb-3">Curated Selection</span>
                <h2 className="font-serif text-4xl sm:text-5xl font-black uppercase leading-none">Featured<br />Pieces</h2>
              </div>
              <Link href="/products">
                <a className="inline-flex items-center gap-2 border-2 border-foreground px-5 py-2.5 text-xs font-black uppercase tracking-[0.25em] hover:bg-foreground hover:text-background transition-colors">
                  View All <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-2 border-foreground">
              {[
                { name: "Carved Ganesha Idol", image: prodArtifact, category: "Artifacts", desc: "Hand-cast brass, 12-inch", num: "01" },
                { name: "Kundan Bridal Set", image: prodJewelry, category: "Jewelry", desc: "22-kt gold, Rajasthani", num: "02" },
                { name: "Wooden Wall Panel", image: prodDecor, category: "Home Decor", desc: "Teak, hand-carved", num: "03" },
              ].map((product, i) => (
                <div key={i} className="group cursor-pointer border-r-2 last:border-r-0 border-foreground">
                  <div className="relative aspect-square overflow-hidden">
                    <img src={product.image} alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    {/* Category badge */}
                    <div className="absolute top-0 left-0 bg-foreground px-3 py-1.5">
                      <span className="text-background text-[9px] font-black uppercase tracking-[0.25em]">
                        {product.category}
                      </span>
                    </div>
                    {/* Number */}
                    <div className="absolute bottom-0 right-0 bg-primary w-8 h-8 flex items-center justify-center">
                      <span className="text-primary-foreground text-[10px] font-black">{product.num}</span>
                    </div>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500" />
                  </div>
                  <div className="p-5 border-t-2 border-foreground">
                    <h3 className="font-serif text-lg sm:text-xl font-black uppercase group-hover:text-primary transition-colors leading-tight mb-1">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-xs font-bold uppercase tracking-wide">{product.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HERITAGE / ABOUT ─────────────────────────────────────────────── */}
        <section className="py-16 sm:py-24 bg-muted/40 border-b-4 border-foreground">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-foreground">
              {/* Image */}
              <div className="overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-foreground">
                <img src={catArtifacts} alt="Artisan Craftsmanship"
                  className="w-full h-full min-h-[300px] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              {/* Text */}
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-primary block mb-4">Our Heritage</span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
                  The Essence of<br />Maharashtra
                </h2>
                <div className="w-10 h-1 bg-primary mb-6" />
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-8">
                  Located in the heart of Hingoli, Priya Art Gallery has been a beacon
                  of traditional craftsmanship for over two decades. We source directly
                  from master artisans across India, ensuring every piece tells a story
                  of heritage, devotion, and unparalleled skill.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <a className="inline-flex items-center gap-2 bg-foreground text-background border-2 border-foreground px-6 py-3 text-xs font-black uppercase tracking-[0.25em] hover:bg-primary hover:border-primary transition-colors shadow-[3px_3px_0px_#120b06]">
                      Visit The Gallery
                    </a>
                  </Link>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Main+Market+Road,+Hingoli,+Maharashtra+431513,+India"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-foreground px-6 py-3 text-xs font-black uppercase tracking-[0.25em] hover:bg-foreground hover:text-background transition-colors">
                    <MapPin className="w-3.5 h-3.5" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
