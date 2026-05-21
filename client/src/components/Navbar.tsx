import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { label: "Artifacts", href: "/products?category=artifacts" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {

  return (
    <header className="sticky top-0 z-50 w-full bg-background" role="banner" itemScope itemType="https://schema.org/WPHeader">
      {/* ── Announcement bar ── */}
      <div className="bg-foreground text-background text-center py-2 text-[11px] font-medium tracking-[0.15em] uppercase">
        Free Shipping in India &nbsp;·&nbsp; COD Available &nbsp;·&nbsp; Museum-Quality Prints
      </div>

      {/* ── Main header ── */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

          {/* Left: hamburger (mobile) */}
          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <button className="md:hidden p-1 -ml-1 text-foreground">
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] bg-background p-0 flex flex-col rounded-none border-r border-border">
                <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                  <SheetTitle className="font-serif text-xl font-semibold tracking-tight">
                    Priya Art Gallery
                  </SheetTitle>
                </div>
                <nav className="flex-1 overflow-y-auto py-4 px-6">
                  <div className="space-y-1">
                    <Link href="/"><a className="block py-3 text-sm font-medium border-b border-border/60 hover:text-muted-foreground transition-colors">Home</a></Link>
                    {NAV_LINKS.map(l => (
                      <Link key={l.href} href={l.href}>
                        <a className="block py-3 text-sm font-medium border-b border-border/60 hover:text-muted-foreground transition-colors">{l.label}</a>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-8 space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Collections</p>
                    <div className="space-y-2 text-sm">
                      <Link href="/products?category=artifacts"><a className="block py-1 hover:text-muted-foreground">Sacred Brass Artifacts</a></Link>
                    </div>
                  </div>
                </nav>
                <div className="p-6 border-t border-border space-y-3">
                  <a href="https://wa.me/917558599155" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-medium hover:text-[#25D366] transition-colors">
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                    Chat on WhatsApp
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Centre: Logo */}
          <div className="flex-1 flex justify-center md:justify-start">
            <Link href="/">
              <a className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-foreground hover:opacity-80 transition-opacity">
                Priya Art Gallery
              </a>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-foreground" aria-label="Main navigation" role="navigation">
            <Link href="/"><a className="hover:text-muted-foreground transition-colors">Home</a></Link>
            {NAV_LINKS.map(l => (
              <Link key={l.href} href={l.href}>
                <a className="hover:text-muted-foreground transition-colors">{l.label}</a>
              </Link>
            ))}
          </nav>

        </div>
      </div>

      {/* ── Category nav strip (desktop) ── */}
      <div className="hidden md:block border-b border-border bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-8 h-10 text-[12px] font-medium uppercase tracking-widest text-muted-foreground">
            <Link href="/products?category=artifacts"><a className="hover:text-foreground transition-colors">Brass Artifacts</a></Link>
            <span className="ml-auto text-[11px]">Est. 2004 · Hingoli, Maharashtra</span>
          </div>
        </div>
      </div>
    </header>
  );
}
