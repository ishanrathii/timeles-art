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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroBg} 
              alt="Priya Art Gallery Interior" 
              className="w-full h-full object-cover object-center scale-110 animate-pulse-slow"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <div className="inline-block border-t border-b border-primary/50 py-2 px-6 mb-8 animate-in fade-in zoom-in duration-1000">
              <span className="text-primary font-medium tracking-[0.4em] uppercase text-sm">
                Est. 2004 • Hingoli
              </span>
            </div>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight animate-in slide-in-from-bottom-12 duration-1000">
              Timeless <br /> <span className="italic text-primary">Artistry</span>
            </h1>
            <p className="max-w-xl mx-auto text-lg md:text-xl text-white/80 mb-12 font-light tracking-wide animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              Curating the finest handcrafted treasures from the heart of Maharashtra. 
              Artifacts that transcend generations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm uppercase tracking-widest px-10 py-8 rounded-none border border-primary-border shadow-2xl transition-all hover:scale-105">
                <Link href="/products">View Collection</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/5 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm text-sm uppercase tracking-widest px-10 py-8 rounded-none transition-all hover:scale-105">
                <Link href="/contact">Our Story</Link>
              </Button>
            </div>
          </div>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
          </div>
        </section>

        {/* Categories Section with Texture */}
        <section className="py-32 relative overflow-hidden" style={{ backgroundImage: `url(${textureBg})`, backgroundSize: 'cover' }}>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-24">
              <div className="max-w-xl mb-8 md:mb-0">
                <span className="text-primary font-semibold tracking-widest uppercase text-xs mb-4 block">Categories</span>
                <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Exquisite <br />Handicrafts</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Every category represents a unique facet of Indian heritage, meticulously 
                  preserved and presented for the discerning collector.
                </p>
              </div>
              <div className="h-px w-24 bg-primary hidden md:block"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Sacred Artifacts", subtitle: "Brass & Bronze", image: catArtifacts, link: "/products?category=artifacts" },
                { title: "Royal Jewelry", subtitle: "Kundan & Gold", image: catJewelry, link: "/products?category=jewelry" },
                { title: "Heritage Decor", subtitle: "Wood & Silk", image: catDecor, link: "/products?category=decor" },
              ].map((category, index) => (
                <Link key={index} href={category.link}>
                  <a className="group block relative aspect-[4/5] overflow-hidden border border-border/50 bg-muted transition-all duration-500 hover:shadow-[0_20px_50px_rgba(38,40,45,0.15)]">
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-10 flex flex-col justify-end transition-all duration-500">
                      <span className="text-primary/80 uppercase tracking-[0.3em] text-[10px] font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                        {category.subtitle}
                      </span>
                      <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        {category.title}
                      </h3>
                      <div className="w-0 h-px bg-primary group-hover:w-full transition-all duration-700"></div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Parallax Quote Section */}
        <section className="py-40 bg-secondary relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <img src={textureBg} className="w-full h-full object-cover" alt="" />
           </div>
           <div className="container mx-auto px-4 text-center relative z-10">
              <div className="max-w-4xl mx-auto">
                <span className="text-primary text-5xl mb-8 block font-serif">"</span>
                <h2 className="font-serif text-3xl md:text-5xl text-white/90 leading-tight italic mb-8">
                  Art is not what you see, but what you make others see. At Priya Art Gallery, we make you see the soul of Hingoli.
                </h2>
                <div className="w-12 h-px bg-primary mx-auto mb-6"></div>
                <p className="text-primary tracking-widest uppercase text-sm font-semibold">Legacy since 2004</p>
              </div>
           </div>
        </section>

        {/* Featured Pieces */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <h2 className="font-serif text-4xl text-foreground mb-4">Featured Pieces</h2>
                <div className="w-16 h-1 bg-primary"></div>
              </div>
              <Link href="/products">
                <a className="text-primary hover:text-primary/80 font-medium inline-flex items-center mt-6 md:mt-0">
                  View All Products <span className="ml-2">→</span>
                </a>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Carved Ganesha Idol", price: "₹4,500", image: prodArtifact, category: "Artifacts" },
                { name: "Kundan Bridal Set", price: "₹25,000", image: prodJewelry, category: "Jewelry" },
                { name: "Wooden Wall Panel", price: "₹8,200", image: prodDecor, category: "Home Decor" },
              ].map((product, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-square overflow-hidden bg-muted mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-background/90 backdrop-blur px-3 py-1 text-xs uppercase tracking-wider">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-muted-foreground">{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About/Story Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-8">The Essence of Maharashtra</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Located in the heart of Hingoli, Priya Art Gallery has been a beacon of traditional 
                craftsmanship for over two decades. We source directly from master artisans across 
                India, ensuring every piece tells a story of heritage, devotion, and unparalleled skill.
              </p>
              <img src={catArtifacts} alt="Artisan Craftsmanship" className="w-full h-64 object-cover object-center grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}