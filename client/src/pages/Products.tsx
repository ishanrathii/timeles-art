import { useState } from "wouter"; // Actually we'll use React's useState
import React from "react";
import { useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// Assets
import prodArtifact from "@/assets/images/product-artifact.png";
import prodJewelry from "@/assets/images/product-jewelry.png";
import prodDecor from "@/assets/images/product-decor.png";

const allProducts = [
  { id: 1, name: "Carved Ganesha Idol", image: prodArtifact, category: "artifacts" },
  { id: 2, name: "Kundan Bridal Set", image: prodJewelry, category: "jewelry" },
  { id: 3, name: "Wooden Wall Panel", image: prodDecor, category: "decor" },
  { id: 4, name: "Brass Nataraja", image: prodArtifact, category: "artifacts" },
  { id: 5, name: "Temple Temple Necklace", image: prodJewelry, category: "jewelry" },
  { id: 6, name: "Brass Hanging Diya", image: prodDecor, category: "decor" },
];

export default function Products() {
  const [location] = useLocation();
  // Very simple parsing of query string for mockup purposes
  const searchParams = new URLSearchParams(window.location.search);
  const searchQuery = searchParams.get('search')?.toLowerCase() || "";
  
  const defaultCategory = location.includes("category=jewelry") ? "jewelry" 
                        : location.includes("category=decor") ? "decor" 
                        : location.includes("category=artifacts") ? "artifacts" 
                        : "all";

  const [activeCategory, setActiveCategory] = React.useState(defaultCategory);

  const filteredProducts = allProducts.filter(p => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    const matchesSearch = searchQuery ? p.name.toLowerCase().includes(searchQuery) : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
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
              { id: "all", label: "All Items" },
              { id: "artifacts", label: "Brass Artifacts" },
              { id: "jewelry", label: "Jewelry" },
              { id: "decor", label: "Home Decor" }
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
              <div key={product.id} className="group">
                <div className="relative aspect-square overflow-hidden bg-muted mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Add to Cart
                    </Button>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-lg mb-1">{product.name}</h3>
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
    </div>
  );
}