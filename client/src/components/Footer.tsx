import { MapPin, Phone, Mail, Instagram, MessageCircle } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-secondary to-secondary/95 text-secondary-foreground mt-20 border-t border-white/10">
      <div className="container mx-auto px-4 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          <div className="md:col-span-2 space-y-5">
            <h3 className="font-serif text-3xl font-bold tracking-wide">
              Priya Art Gallery
            </h3>

            <p className="text-secondary-foreground/90 max-w-md leading-7">
              Curators of fine Indian artifacts, traditional jewelry, and elegant home decor.
              Bringing the rich heritage of Maharashtra to your home.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/timeles_art_?igsh=MWtidjR3NjhqZWwyNw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Priya Art Gallery on Instagram"
                className="group p-3 rounded-full bg-[#E1306C]/10 hover:bg-[#E1306C] transition-all duration-300 hover:scale-105 border border-[#E1306C]/20"
              >
                <Instagram className="w-5 h-5 text-[#E1306C] group-hover:text-white group-hover:scale-110 transition-all" />
              </a>

<a
                href="https://wa.me/917558599155"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="group p-3 rounded-full bg-[#25D366]/10 hover:bg-[#25D366] transition-all duration-300 hover:scale-105 border border-[#25D366]/20"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:text-white group-hover:scale-110 transition-all" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-primary">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="text-secondary-foreground/90 hover:text-white transition-colors duration-300">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/products?category=artifacts">
                  <a className="text-secondary-foreground/90 hover:text-white transition-colors duration-300">
                    Brass Artifacts
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/products?category=jewelry">
                  <a className="text-secondary-foreground/90 hover:text-white transition-colors duration-300">
                    Traditional Jewelry
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/products?category=decor">
                  <a className="text-secondary-foreground/90 hover:text-white transition-colors duration-300">
                    Home Decor
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-primary">
              Visit Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/90 text-sm leading-6">
                  Main Market Road,<br />
                  Hingoli, Maharashtra 431513<br />
                  India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="https://wa.me/917558599155"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/90 text-sm hover:text-[#25D366] transition-colors"
                >
                  +91 75585 99155
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-secondary-foreground/90 text-sm">
                  priya03kabra@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-secondary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Priya Art Gallery, Hingoli. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}