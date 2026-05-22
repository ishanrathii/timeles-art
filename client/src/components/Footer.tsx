import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { Link } from "wouter";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Main+Market+Road,+Hingoli,+Maharashtra+431513,+India";
const DIRS_URL = "https://www.google.com/maps/dir/?api=1&destination=Main+Market+Road,+Hingoli,+Maharashtra+431513,+India";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">

      {/* Main grid */}
      <div className="container mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">

          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <h3 className="font-serif text-xl font-semibold tracking-tight text-foreground">
              Priya Art Gallery
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Curators of fine Indian artifacts, traditional jewelry and elegant home décor.
              Bringing the rich heritage of Maharashtra to your home since 2004.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a href="https://www.instagram.com/timeles_art_?igsh=MWtidjR3NjhqZWwyNw=="
                target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-8 h-8 border border-border rounded-full flex items-center justify-center hover:bg-[#E1306C] hover:border-[#E1306C] hover:text-white transition-all group">
                <Instagram className="w-3.5 h-3.5 text-muted-foreground group-hover:text-white" />
              </a>
              <a href="https://wa.me/917558599155"
                target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="w-8 h-8 border border-border rounded-full flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition-all group">
                <WhatsAppIcon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground mb-5">Shop</h4>
            <ul className="space-y-3">
              {[
                { href: "/products",  label: "Featured Items"  },
                { href: "/portfolio", label: "Full Portfolio"  },
                { href: "/portfolio?tag=Wall Art",    label: "Wall Art"     },
                { href: "/portfolio?tag=Key Holders", label: "Key Holders"  },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>
                    <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">{label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground mb-5">Information</h4>
            <ul className="space-y-3">
              {[
                { href: "/",        label: "Home"         },
                { href: "/about",   label: "About Us"     },
                { href: "/contact", label: "Contact"      },
                { href: "/contact", label: "Visit Gallery"},
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link href={href}>
                    <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">{label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground mb-5">Visit Us</h4>
            <ul className="space-y-4">
              <li>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-2.5 group">
                  <MapPin className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5 group-hover:text-foreground transition-colors" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-snug">
                    Main Market Road, Near Gandhi Chowk<br />
                    Hingoli, Maharashtra 431513
                  </span>
                </a>
              </li>
              <li>
                <a href={DIRS_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-foreground border border-border px-4 py-2 hover:bg-foreground hover:text-background transition-all">
                  <MapPin className="w-3 h-3" /> Get Directions
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                <a href="https://wa.me/917558599155" target="_blank" rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-[#25D366] transition-colors">
                  +91 75585 99155
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
                <a href="mailto:priya03kabra@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors break-all">
                  priya03kabra@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Priya Art Gallery, Hingoli. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Handcrafted Heritage · Est. 2004</p>
        </div>
      </div>

    </footer>
  );
}
