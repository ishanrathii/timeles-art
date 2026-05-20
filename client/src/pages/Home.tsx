import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Assets
import heroBg from "@/assets/images/hero-bg.png";
import textureBg from "@/assets/images/texture-bg.png";
import catArtifacts from "@/assets/images/category-artifacts.png";
import catJewelry from "@/assets/images/category-jewelry.png";
import catDecor from "@/assets/images/category-decor.png";
import prodArtifact from "@/assets/images/product-artifact.png";
import prodJewelry from "@/assets/images/product-jewelry.png";
import prodDecor from "@/assets/images/product-decor.png";

// Decorative lotus SVG divider
function LotusDivider() {
  return (
    <div className="divider-royal">
      <span aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="4" fill="currentColor" className="text-primary" />
          {[0,45,90,135,180,225,270,315].map((deg, i) => (
            <ellipse
              key={i}
              cx={14 + 9 * Math.cos((deg * Math.PI) / 180)}
              cy={14 + 9 * Math.sin((deg * Math.PI) / 180)}
              rx="3.5" ry="1.5"
              transform={`rotate(${deg} ${14 + 9 * Math.cos((deg * Math.PI) / 180)} ${14 + 9 * Math.sin((deg * Math.PI) / 180)})`}
              fill="none" stroke="currentColor" strokeWidth="1"
              className="text-primary/60"
            />
          ))}
        </svg>
      </span>
    </div>
  );
}

// Trust/stats bar
const STATS = [
  { value: "20+", label: "Years of Legacy" },
  { value: "500+", label: "Curated Pieces" },
  { value: "50+", label: "Master Artisans" },
  { value: "3", label: "Collections" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ── Announcement marquee ─────────────────────────────────────────── */}
      <div className="bg-primary text-primary-foreground overflow-hidden py-2 text-xs sm:text-sm font-medium tracking-widest uppercase">
        <div className="flex animate-marquee whitespace-nowrap w-max">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-6 px-6">
              <span>Sacred Brass Artifacts</span>
              <span className="text-primary-foreground/50">◆</span>
              <span>Kundan & Gold Jewelry</span>
              <span className="text-primary-foreground/50">◆</span>
              <span>Heritage Home Décor</span>
              <span className="text-primary-foreground/50">◆</span>
              <span>Est. Hingoli 2004</span>
              <span className="text-primary-foreground/50">◆</span>
            </span>
          ))}
        </div>
      </div>

      <main className="flex-1">
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroBg}
              alt="Priya Art Gallery Interior"
              className="w-full h-full object-cover object-center scale-110 animate-pulse-slow"
            />
            {/* stronger gradient for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
            <div className="inline-block border-t border-b border-primary/60 py-2 px-5 mb-6 sm:mb-8 animate-in fade-in zoom-in duration-1000">
              <span className="text-primary font-semibold tracking-[0.35em] uppercase text-xs sm:text-sm">
                Est. 2004 &nbsp;·&nbsp; Hingoli, Maharashtra
              </span>
            </div>

            <h1 className="hero-title font-serif font-bold mb-6 sm:mb-8 leading-tight animate-in slide-in-from-bottom-12 duration-1000">
              Timeless <br />
              <span className="shimmer-gold italic">Artistry</span>
            </h1>

            {/* stronger contrast on subtitle */}
            <p className="max-w-lg mx-auto text-base sm:text-lg md:text-xl text-white mb-10 sm:mb-12 font-light tracking-wide leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300"
               style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}>
              Curating the finest handcrafted treasures from the heart of Maharashtra.
              Artifacts that transcend generations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
              <Button
                asChild size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-xs sm:text-sm uppercase tracking-widest px-8 py-6 rounded-none border border-primary/60 shadow-2xl transition-all hover:scale-105"
              >
                <Link href="/products">View Collection</Link>
              </Button>
              <Button
                asChild variant="outline" size="lg"
                className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm text-xs sm:text-sm uppercase tracking-widest px-8 py-6 rounded-none transition-all hover:scale-105"
              >
                <Link href="/contact">Our Story</Link>
              </Button>
            </div>
          </div>

          <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
            <div className="w-px h-12 sm:h-16 bg-gradient-to-b from-primary to-transparent" />
          </div>
        </section>

        {/* ── Trust bar ────────────────────────────────────────────────────── */}
        <section className="bg-secondary border-t border-b border-primary/20 py-6 sm:py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {STATS.map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center gap-1">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-primary">{value}</span>
                  <span className="text-xs sm:text-sm uppercase tracking-widest text-secondary-foreground/80 font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Categories ───────────────────────────────────────────────────── */}
        <section
          className="py-20 sm:py-32 relative overflow-hidden"
          style={{ backgroundImage: `url(${textureBg})`, backgroundSize: "cover" }}
        >
          {/* slight overlay so texture bg doesn't fight text */}
          <div className="absolute inset-0 bg-background/70" />

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-14 sm:mb-20">
              <span className="text-primary font-semibold tracking-widest uppercase text-xs mb-3 block">Collections</span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">Exquisite Handicrafts</h2>
              <LotusDivider />
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
                Every category represents a unique facet of Indian heritage, meticulously
                preserved for the discerning collector.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
              {[
                { title: "Sacred Artifacts", subtitle: "Brass & Bronze", image: catArtifacts, link: "/products?category=artifacts" },
                { title: "Royal Jewelry", subtitle: "Kundan & Gold", image: catJewelry, link: "/products?category=jewelry" },
                { title: "Heritage Decor", subtitle: "Wood & Silk", image: catDecor, link: "/products?category=decor" },
              ].map((cat, i) => (
                <Link key={i} href={cat.link}>
                  <a className="group block relative aspect-[4/5] overflow-hidden border border-border/50 bg-muted transition-all duration-500 hover:shadow-[0_24px_60px_rgba(0,0,0,0.18)] hover:-translate-y-1">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.15] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 sm:p-10 flex flex-col justify-end transition-all duration-500">
                      <span className="text-primary uppercase tracking-[0.3em] text-[10px] font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                        {cat.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        {cat.title}
                      </h3>
                      <div className="w-0 h-px bg-primary group-hover:w-full transition-all duration-700" />
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Quote / parallax ─────────────────────────────────────────────── */}
        <section className="py-24 sm:py-40 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img src={textureBg} className="w-full h-full object-cover" alt="" />
          </div>
          {/* decorative large quote mark */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 font-serif text-[12rem] sm:text-[20rem] text-primary/5 leading-none select-none pointer-events-none">
            "
          </div>
          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-5xl mb-6 block font-serif">"</span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-white leading-tight italic mb-8">
                Art is not what you see, but what you make others see.
                At Priya Art Gallery, we make you see the soul of Hingoli.
              </h2>
              <LotusDivider />
              <p className="text-primary tracking-widest uppercase text-xs sm:text-sm font-semibold mt-2">Legacy since 2004</p>
            </div>
          </div>
        </section>

        {/* ── Featured Pieces ───────────────────────────────────────────────── */}
        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-4">
              <div>
                <span className="text-primary font-semibold tracking-widest uppercase text-xs mb-3 block">Curated Selection</span>
                <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-3">Featured Pieces</h2>
                <div className="w-14 h-[2px] bg-primary" />
              </div>
              <Link href="/products">
                <a className="text-primary hover:text-primary/70 font-semibold text-sm inline-flex items-center gap-2 uppercase tracking-widest transition-colors">
                  View All <span>→</span>
                </a>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { name: "Carved Ganesha Idol", image: prodArtifact, category: "Artifacts", desc: "Hand-cast brass, 12-inch" },
                { name: "Kundan Bridal Set", image: prodJewelry, category: "Jewelry", desc: "22-kt gold, Rajasthani" },
                { name: "Wooden Wall Panel", image: prodDecor, category: "Home Decor", desc: "Teak, hand-carved" },
              ].map((product, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-square overflow-hidden bg-muted mb-4 border border-border/40">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-background/95 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-wider font-semibold text-foreground border border-border/30">
                        {product.category}
                      </span>
                    </div>
                    {/* hover overlay */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/8 transition-all duration-500" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl mb-1 group-hover:text-primary transition-colors font-semibold">{product.name}</h3>
                  <p className="text-muted-foreground text-sm">{product.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── About / Story ─────────────────────────────────────────────────── */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-primary font-semibold tracking-widest uppercase text-xs mb-3 block">Our Heritage</span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">The Essence of Maharashtra</h2>
                <LotusDivider />
              </div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 text-center">
                Located in the heart of Hingoli, Priya Art Gallery has been a beacon of traditional
                craftsmanship for over two decades. We source directly from master artisans across
                India, ensuring every piece tells a story of heritage, devotion, and unparalleled skill.
              </p>
              <div className="overflow-hidden border border-border/40">
                <img
                  src={catArtifacts}
                  alt="Artisan Craftsmanship"
                  className="w-full h-48 sm:h-72 object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="text-center mt-8">
                <Button asChild variant="outline" className="uppercase tracking-widest text-xs px-8 py-5 rounded-none border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                  <Link href="/contact">Visit The Gallery</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
