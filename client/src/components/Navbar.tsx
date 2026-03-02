import { Link } from "wouter";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
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