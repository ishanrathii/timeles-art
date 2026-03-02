import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">Priya Art Gallery</h3>
            <p className="text-secondary-foreground/80 max-w-sm mb-6">
              Curators of fine Indian artifacts, traditional jewelry, and elegant home decor. 
              Bringing the rich heritage of Maharashtra to your home.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/"><a className="text-secondary-foreground/80 hover:text-white transition-colors">Home</a></Link>
              </li>
              <li>
                <Link href="/products?category=artifacts"><a className="text-secondary-foreground/80 hover:text-white transition-colors">Brass Artifacts</a></Link>
              </li>
              <li>
                <Link href="/products?category=jewelry"><a className="text-secondary-foreground/80 hover:text-white transition-colors">Traditional Jewelry</a></Link>
              </li>
              <li>
                <Link href="/products?category=decor"><a className="text-secondary-foreground/80 hover:text-white transition-colors">Home Decor</a></Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-primary">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/80 text-sm">
                  Main Market Road,<br />
                  Hingoli, Maharashtra 431513<br />
                  India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-secondary-foreground/80 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-secondary-foreground/80 text-sm">hello@priyaartgallery.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Priya Art Gallery, Hingoli. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}