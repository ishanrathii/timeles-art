import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Assets
import heroBg from "@/assets/images/hero-bg.png";
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
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroBg} 
              alt="Priya Art Gallery Interior" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <span className="block text-primary font-medium tracking-[0.2em] uppercase mb-4 animate-in slide-in-from-bottom-4 duration-700">
              Welcome to Hingoli's Finest
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-in slide-in-from-bottom-8 duration-700 delay-150">
              Priya Art Gallery
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-10 animate-in slide-in-from-bottom-8 duration-700 delay-300">
              Discover our curated collection of exquisite brass artifacts, 
              traditional Maharashtrian jewelry, and elegant home decor sets.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-8 duration-700 delay-500">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-none">
                <Link href="/products">Explore Collection</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-none">
                <Link href="/contact">Visit Store</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-4xl text-foreground mb-4">Our Collections</h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground">
                Handcrafted with precision and passion, our collections reflect the rich cultural heritage and artistry of India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Brass Artifacts", image: catArtifacts, link: "/products?category=artifacts" },
                { title: "Traditional Jewelry", image: catJewelry, link: "/products?category=jewelry" },
                { title: "Home Decor", image: catDecor, link: "/products?category=decor" },
              ].map((category, index) => (
                <Link key={index} href={category.link}>
                  <a className="group block relative overflow-hidden aspect-[3/4] hover-elevate-2 transition-all">
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                      <h3 className="font-serif text-3xl text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {category.title}
                      </h3>
                      <span className="text-primary uppercase tracking-wider text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        View Collection
                      </span>
                    </div>
                  </a>
                </Link>
              ))}
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