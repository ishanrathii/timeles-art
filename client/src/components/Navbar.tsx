import { Link } from "wouter";
import { Search, ShoppingBag, Menu, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import jsPDF from "jspdf";

export default function Navbar() {
  const downloadCode = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Priya Art Gallery - Project Code", 10, 10);
    doc.setFontSize(10);
    doc.text("This PDF contains the core frontend components of the Priya Art Gallery project.", 10, 20);
    
    const sections = [
      { title: "App.tsx", content: `import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
}` },
      { title: "Home.tsx", content: `export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
          <h1>Timeless Artistry</h1>
        </section>
      </main>
      <Footer />
    </div>
  );
}` }
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
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
    });

    doc.save("priya-art-gallery-code.pdf");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <Link href="/">
            <a className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-primary">
              Priya <span className="text-foreground">Art Gallery</span>
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
            <a className="text-foreground/80 hover:text-primary transition-colors">Home Decor</a>
          </Link>
          <Link href="/contact">
            <a className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={downloadCode}
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 border border-primary/20"
          >
            <Download className="h-4 w-4" />
            Download Code PDF
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary" />
          </Button>
        </div>
      </div>
    </header>
  );
}