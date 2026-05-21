import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { Link } from "wouter";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Main+Market+Road,+Hingoli,+Maharashtra+431513,+India";
const DIRS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Main+Market+Road,+Hingoli,+Maharashtra+431513,+India";

export default function Footer() {
  return (
    <footer className="bg-foreground text-secondary-foreground mt-20 border-t-4 border-primary">
      {/* Top accent bar */}
      <div className="border-b-2 border-secondary-foreground/10 bg-primary/10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <span className="font-serif text-primary text-lg font-bold tracking-widest uppercase">
            Priya Art Gallery
          </span>
          <span className="text-secondary-foreground/50 text-[10px] font-bold uppercase tracking-[0.3em]">
            Est. 2004 · Hingoli
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-2 border-secondary-foreground/20">

          {/* Brand column */}
          <div className="md:col-span-5 p-6 sm:p-8 border-b-2 md:border-b-0 md:border-r-2 border-secondary-foreground/20">
            <h3 className="font-serif text-3xl sm:text-4xl font-black uppercase mb-1 leading-none">
              PRIYA
            </h3>
            <h3 className="font-serif text-3xl sm:text-4xl font-black uppercase mb-6 leading-none text-primary">
              ART GALLERY
            </h3>
            <div className="w-12 h-1 bg-primary mb-6" />
            <p className="text-secondary-foreground/80 leading-7 text-sm max-w-xs mb-8">
              Curators of fine Indian artifacts, traditional jewelry, and elegant
              home décor. Bringing the rich heritage of Maharashtra to your home
              since 2004.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/timeles_art_?igsh=MWtidjR3NjhqZWwyNw=="
                target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 border-2 border-[#E1306C] flex items-center justify-center hover:bg-[#E1306C] transition-colors group"
              >
                <Instagram className="w-4 h-4 text-[#E1306C] group-hover:text-white" />
              </a>
              <a
                href="https://wa.me/917558599155"
                target="_blank" rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 border-2 border-[#25D366] flex items-center justify-center hover:bg-[#25D366] transition-colors group"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Links column */}
          <div className="md:col-span-3 p-6 sm:p-8 border-b-2 md:border-b-0 md:border-r-2 border-secondary-foreground/20">
            <h4 className="text-[10px] font-black uppercase tracking-[0.35em] text-primary mb-6">
              Collections
            </h4>
            <ul className="space-y-0">
              {[
                { href: "/", label: "Home" },
                { href: "/products?category=artifacts", label: "Brass Artifacts" },
                { href: "/products?category=jewelry", label: "Traditional Jewelry" },
                { href: "/products?category=decor", label: "Home Décor" },
                { href: "/contact", label: "Visit Gallery" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>
                    <a className="block py-2.5 border-b border-secondary-foreground/10 text-sm font-bold text-secondary-foreground/80 hover:text-primary hover:pl-2 transition-all uppercase tracking-wide">
                      {label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="md:col-span-4 p-6 sm:p-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.35em] text-primary mb-6">
              Visit Us
            </h4>
            <ul className="space-y-5">
              <li>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-3 group">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-secondary-foreground/80 text-sm leading-6 group-hover:text-primary transition-colors">
                    Main Market Road, Near Gandhi Chowk<br />
                    Hingoli, Maharashtra 431513<br />
                    India
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={DIRS_URL}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] px-4 py-2.5 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <MapPin className="w-3 h-3" />
                  Get Directions
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="https://wa.me/917558599155" target="_blank" rel="noopener noreferrer"
                  className="text-secondary-foreground/80 text-sm font-bold hover:text-[#25D366] transition-colors">
                  +91 75585 99155
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:priya03kabra@gmail.com"
                  className="text-secondary-foreground/80 text-sm font-bold hover:text-primary transition-colors break-all">
                  priya03kabra@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t-2 border-secondary-foreground/20 mt-0 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Priya Art Gallery, Hingoli. All rights reserved.</p>
          <p>Handcrafted Heritage · Est. 2004</p>
        </div>
      </div>
    </footer>
  );
}
