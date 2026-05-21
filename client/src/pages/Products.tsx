import { useState } from "wouter"; // Actually we'll use React's useState
import React from "react";
import { useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

// Assets
import prodArtifact from "@/assets/images/product-artifact.png";

const allProducts = [
  { id: 1, name: "Carved Ganesha Idol", image: prodArtifact, category: "artifacts" },
  { id: 2, name: "Kundan Bridal Set",   image: null,          category: "jewelry" },
  { id: 4, name: "Brass Nataraja",      image: prodArtifact,  category: "artifacts" },
  { id: 5, name: "Kundan Necklace",     image: null,          category: "jewelry" },
];

export default function Products() {
  const [location] = useLocation();
  // Very simple parsing of query string for mockup purposes
  const searchParams = new URLSearchParams(window.location.search);
  const searchQuery = searchParams.get('search')?.toLowerCase() || "";
  
  const defaultCategory = location.includes("category=jewelry") ? "jewelry"
                        : location.includes("category=artifacts") ? "artifacts"
                        : "all";

  const [activeCategory, setActiveCategory] = React.useState(defaultCategory);

  const filteredProducts = allProducts.filter(p => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    const matchesSearch = searchQuery ? p.name.toLowerCase().includes(searchQuery) : true;
    return matchesCategory && matchesSearch;
  });

  const catLabel = activeCategory === "artifacts" ? "Brass Artifacts"
    : activeCategory === "jewelry" ? "Traditional Jewelry"
    : "All Collections";

  const catDesc = activeCategory === "artifacts"
    ? "Handcrafted brass and bronze sacred artifacts sourced from master artisans across India. Ganesha idols, diyas, temple items and more."
    : activeCategory === "jewelry"
    ? "Traditional Kundan, gold-plated and bridal jewelry sets crafted by master jewellers. Premium quality, authentic Indian craftsmanship."
    : "Discover Priya Art Gallery's complete collection of handcrafted brass artifacts and traditional jewelry from Hingoli, Maharashtra.";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title={`${catLabel} – Priya Art Gallery`}
        description={catDesc}
        canonical={`https://priyaartgallery.in/products${activeCategory !== "all" ? `?category=${activeCategory}` : ""}`}
      />
      <Navbar />

      <main className="flex-1">
        <div className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl mb-4">Our Collection</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our carefully curated selection of handcrafted items, from stunning jewelry to timeless home decor.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: "all",       label: "All Items" },
              { id: "artifacts", label: "Brass Artifacts" },
              { id: "jewelry",   label: "Jewelry" },
            ].map(cat => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                onClick={() => setActiveCategory(cat.id)}
                className="rounded-full px-6"
              >
                {cat.label}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group border border-border hover:border-foreground transition-colors duration-300 p-6">
                {product.image && (
                  <div className="relative aspect-square overflow-hidden bg-muted mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="text-center">
                  <h3 className="font-serif text-lg mb-3">{product.name}</h3>
                  <a
                    href={`https://wa.me/917558599155?text=Hi, I'm interested in: ${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white text-[11px] font-semibold uppercase tracking-widest px-4 py-2 hover:bg-[#1ebe5d] transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    Order on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No products found in this category.
            </div>
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}