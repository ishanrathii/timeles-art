import { Link } from "wouter";
import { Search, ShoppingBag, Menu, MapPin, Phone, Instagram } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b-2 border-foreground">
      {/* Top utility bar */}
      <div className="hidden md:block border-b-2 border-foreground bg-foreground text-secondary-foreground">
        <div className="container mx-auto px-4 h-8 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.25em]">
          <span>Est. 2004 · Hingoli, Maharashtra</span>
          <div className="flex items-center gap-6">
            <a href="https://wa.me/917558599155" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="w-3 h-3" />
              +91 75585 99155
            </a>
            <a href="mailto:priya03kabra@gmail.com"
              className="hover:text-primary transition-colors">
              priya03kabra@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav row */}
      <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Mobile hamburger + logo */}
        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden w-10 h-10 border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[380px] bg-background border-r-2 border-foreground p-0 flex flex-col rounded-none">
              <div className="p-6 border-b-2 border-foreground">
                <SheetTitle className="font-serif text-2xl font-bold">
                  PRIYA <span className="text-primary">GALLERY</span>
                </SheetTitle>
              </div>

              <div className="flex-1 overflow-y-auto py-4">
                <nav className="flex flex-col px-4">
                  <div className="px-2 py-2 text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">Collections</div>
                  {[
                    { href: "/products?category=artifacts", label: "Brass Artifacts" },
                    { href: "/products?category=jewelry", label: "Traditional Jewelry" },
                    { href: "/products?category=decor", label: "Home Decor" },
                  ].map(({ href, label }) => (
                    <Link key={href} href={href}>
                      <a className="px-2 py-3 border-b border-foreground/15 font-bold uppercase tracking-wide text-sm hover:text-primary hover:pl-4 transition-all">
                        {label}
                      </a>
                    </Link>
                  ))}

                  <div className="mt-6 px-2 py-2 text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">Navigate</div>
                  {[
                    { href: "/", label: "Home" },
                    { href: "/contact", label: "Contact" },
                  ].map(({ href, label }) => (
                    <Link key={href} href={href}>
                      <a className="px-2 py-3 border-b border-foreground/15 font-bold uppercase tracking-wide text-sm hover:text-primary hover:pl-4 transition-all">
                        {label}
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="p-4 border-t-2 border-foreground bg-muted/30 space-y-2">
                <div className="px-2 py-2 text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] mb-1">Contact</div>
                <div className="px-2 flex items-start gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="font-medium">Main Market Road, Hingoli MH 431513</span>
                </div>
                <div className="px-2 flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="font-medium">+91 75585 99155</span>
                </div>
                <div className="flex gap-3 px-2 pt-2">
                  <a href="https://www.instagram.com/timeles_art_?igsh=MWtidjR3NjhqZWwyNw==" target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 border-2 border-[#E1306C] flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-colors">
                    <Instagram className="w-4 h-4 text-[#E1306C] group-hover:text-white" />
                  </a>
                  <a href="https://wa.me/917558599155" target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 border-2 border-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors">
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/">
            <a className="font-serif font-black text-xl sm:text-2xl md:text-3xl tracking-tight leading-none">
              PRIYA <span className="text-primary">ART</span>
            </a>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0">
          {[
            { href: "/", label: "Home" },
            { href: "/products?category=artifacts", label: "Artifacts" },
            { href: "/products?category=jewelry", label: "Jewelry" },
            { href: "/products?category=decor", label: "Decor" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link key={href} href={href}>
              <a className="px-4 py-2 border-r border-foreground/20 text-xs font-black uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors">
                {label}
              </a>
            </Link>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-0 relative">
          {/* Search */}
          <div className="relative flex items-center">
            <div className={`absolute right-full flex items-center transition-all duration-300 ease-in-out overflow-hidden ${isSearchOpen ? 'w-56 sm:w-72 opacity-100 mr-2' : 'w-0 opacity-0'}`}>
              <Input
                ref={searchInputRef}
                type="search"
                placeholder="Search artifacts, jewelry..."
                className="w-full border-2 border-foreground rounded-none bg-background focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary text-sm font-medium"
                onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const val = e.currentTarget.value.toLowerCase();
                    if (val) window.location.href = `/products?search=${encodeURIComponent(val)}`;
                  }
                }}
              />
            </div>
            <button
              className="w-10 h-10 border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
                if (!isSearchOpen) setTimeout(() => searchInputRef.current?.focus(), 100);
              }}
            >
              <Search className="h-4 w-4" />
            </button>
          </div>

          <button className="w-10 h-10 border-2 border-l-0 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors relative">
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-primary" />
          </button>
        </div>
      </div>
    </header>
  );
}
