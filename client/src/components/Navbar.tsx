import { Link } from "wouter";
import { Search, ShoppingBag, Menu, Download, MapPin, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import jsPDF from "jspdf";
import { useState, useRef, useEffect } from "react";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const downloadCode = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Priya Art Gallery - Project Code", 10, 10);
    doc.setFontSize(10);
    doc.text("This PDF contains the core frontend components of the Priya Art Gallery project.", 10, 20);
    
    const sections = [
      { title: "App.tsx", content: `import { Switch, Route } from "wouter";\nimport Home from "@/pages/Home";\nimport Products from "@/pages/Products";\nimport Contact from "@/pages/Contact";\n\nfunction Router() {\n  return (\n    <Switch>\n      <Route path="/" component={Home} />\n      <Route path="/products" component={Products} />\n      <Route path="/contact" component={Contact} />\n    </Switch>\n  );\n}` }
    ];

    let y = 30;
    sections.forEach((section) => {
      doc.setFontSize(12);
      doc.text(section.title, 10, y);
      y += 7;
      doc.setFontSize(8);
      const splitText = doc.splitTextToSize(section.content, 180);
      doc.text(splitText, 10, y);
      y += (splitText.length * 4) + 10;
    });

    doc.save("priya-art-gallery-code.pdf");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-background border-r border-border/40 p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-border/40">
                  <SheetTitle className="font-serif text-2xl font-bold text-primary">
                    Priya <span className="text-foreground">Gallery</span>
                  </SheetTitle>
                </div>
                
                <div className="flex-1 overflow-y-auto py-6">
                  <nav className="flex flex-col gap-2 px-4">
                    <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Collections</div>
                    <Link href="/products?category=artifacts"><a className="px-4 py-3 rounded-md hover:bg-muted/50 transition-colors font-medium">Brass Artifacts</a></Link>
                    <Link href="/products?category=jewelry"><a className="px-4 py-3 rounded-md hover:bg-muted/50 transition-colors font-medium">Traditional Jewelry</a></Link>
                    <Link href="/products?category=decor"><a className="px-4 py-3 rounded-md hover:bg-muted/50 transition-colors font-medium">Home Decor</a></Link>
                    
                    <div className="w-full h-px bg-border/40 my-4"></div>
                    
                    <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">About Us</div>
                    <Link href="/contact"><a className="px-4 py-3 rounded-md hover:bg-muted/50 transition-colors font-medium">Our Story</a></Link>
                    <Link href="/products"><a className="px-4 py-3 rounded-md hover:bg-muted/50 transition-colors font-medium">Artisan Portfolio</a></Link>
                    
                    <div className="w-full h-px bg-border/40 my-4"></div>
                    
                    <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Contact</div>
                    <div className="px-4 py-2 flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span className="text-sm text-foreground/80">Main Market Road,<br/>Hingoli, MH 431513</span>
                    </div>
                    <div className="px-4 py-2 flex items-center gap-3">
                      <Phone className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-foreground/80">+91 75585 99155</span>
                    </div>
                  </nav>
                </div>
                
                <div className="p-6 border-t border-border/40 bg-muted/20">
                  <a href="https://www.instagram.com/priyaaartgalery?igsh=MWtidjR3NjhqZWwyNw==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Instagram className="w-4 h-4 text-primary" />
                    </div>
                    Follow on Instagram
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/">
            <a className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-primary">
              Priya <span className="text-foreground hidden sm:inline-block">Art Gallery</span>
            </a>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/">
            <a className="text-foreground/80 hover:text-primary transition-colors">Home</a>
          </Link>
          <Link href="/products?category=artifacts">
            <a className="text-foreground/80 hover:text-primary transition-colors">Artifacts</a>
          </Link>
          <Link href="/products?category=jewelry">
            <a className="text-foreground/80 hover:text-primary transition-colors">Jewelry</a>
          </Link>
          <Link href="/products?category=decor">
            <a className="text-foreground/80 hover:text-primary transition-colors">Decor</a>
          </Link>
          <Link href="/contact">
            <a className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
          </Link>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2 md:gap-4 relative">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={downloadCode}
            className="hidden lg:flex items-center gap-2 text-primary hover:text-primary/80 border border-primary/20"
          >
            <Download className="h-4 w-4" />
            Code PDF
          </Button>
          
          {/* Enhanced Search */}
          <div className="relative flex items-center">
            <div 
              className={`absolute right-0 flex items-center transition-all duration-300 ease-in-out overflow-hidden ${isSearchOpen ? 'w-64 sm:w-80 opacity-100' : 'w-0 opacity-0'}`}
            >
              <Input 
                ref={searchInputRef}
                type="search" 
                placeholder="Search Ganesha, Kundan, Diya..." 
                className="w-full pr-10 border-primary/50 focus-visible:ring-primary/50 bg-background/95 backdrop-blur shadow-sm"
                onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const val = e.currentTarget.value.toLowerCase();
                    if(val) {
                      window.location.href = `/products?search=${encodeURIComponent(val)}`;
                    }
                  }
                }}
              />
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className={`text-foreground/80 hover:text-primary z-10 transition-transform ${isSearchOpen ? 'bg-transparent hover:bg-transparent text-primary' : ''}`}
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
                if (!isSearchOpen && searchInputRef.current) {
                  setTimeout(() => searchInputRef.current?.focus(), 100);
                }
              }}
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary" />
          </Button>
        </div>
      </div>
    </header>
  );
}