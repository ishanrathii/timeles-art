import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Truck, Award, RotateCcw, Star, ChevronDown, Instagram, Search, MessageCircle, Package, StarHalf, Mail } from "lucide-react";
import { useState } from "react";

// Assets
import heroBg from "@/assets/images/hero-bg.png";
import textureBg from "@/assets/images/texture-bg.png";

// Trust badge icons
const TRUST = [
  { icon: Truck,      label: "Free Shipping",    sub: "Across India" },
  { icon: Award,      label: "Museum Quality",    sub: "Premium finish" },
  { icon: Star,       label: "500+ Pieces",       sub: "Curated collection" },
  { icon: RotateCcw,  label: "Easy Returns",      sub: "Hassle-free" },
];

// Featured products
const PRODUCTS = [
  { name: "Carved Ganesha Idol",   cat: "Brass Artifacts"     },
  { name: "Kundan Bridal Set",     cat: "Traditional Jewelry" },
  { name: "Brass Diya Set",        cat: "Brass Artifacts"     },
  { name: "Kundan Necklace",       cat: "Traditional Jewelry" },
];

// Collections
const COLLECTIONS = [
  { title: "Sacred Artifacts",  sub: "Brass & Bronze",  desc: "Handcrafted idols, diyas & temple pieces",       href: "/products?category=artifacts" },
  { title: "Royal Jewelry",     sub: "Kundan & Gold",   desc: "Bridal sets, necklaces & gold-plated jewels",    href: "/products?category=jewelry" },
  { title: "Our Portfolio",     sub: "All Creations",   desc: "Browse our complete gallery of handcrafted work", href: "/portfolio" },
];

const HOW_TO_ORDER = [
  { icon: Search,        step: "01", title: "Browse & Pick",     desc: "Explore our portfolio and collections. Find the piece that speaks to you." },
  { icon: Mail,          step: "02", title: "Email Us",           desc: "Tap 'Enquire via Email' — we'll confirm availability, price & customisation options within hours." },
  { icon: Package,       step: "03", title: "Delivered to You",   desc: "We pack each piece with care and ship free across India. COD available." },
];

const TESTIMONIALS = [
  { name: "Riya Sharma",    location: "Mumbai",     rating: 4.5, text: "The Radha Krishna frame is absolutely stunning. The craftsmanship is unmatched and it arrived beautifully packaged. Will definitely order again!" },
  { name: "Ankit Joshi",    location: "Pune",       rating: 4,   text: "Ordered a custom key holder for my parents' anniversary. Timeles Art created exactly what I envisioned. Highly recommend for personalised gifts!" },
  { name: "Sunita Patil",   location: "Nagpur",     rating: 4.5, text: "The toran I purchased for my temple room is gorgeous. Excellent quality, fast delivery, and the owner was very helpful and responsive throughout." },
  { name: "Meera Desai",    location: "Ahmedabad",  rating: 4,   text: "Bought the Ganesha mandala wall panel for our new home. It is the centrepiece of our living room. Everyone who visits asks where we got it from!" },
  { name: "Rohit Kulkarni", location: "Nashik",     rating: 4.5, text: "Very happy with the Shubh Labh door hanging. The flowers look so real and the quality is premium. Packaging was also very secure." },
  { name: "Priya Nair",     location: "Hyderabad",  rating: 4,   text: "The mandala tealight holders are absolutely beautiful. Lit them up on Diwali and the whole room glowed. Perfect gift item too!" },
  { name: "Kavita More",    location: "Aurangabad", rating: 4,   text: "Good quality products and friendly service. Delivery took a little longer than expected but the product was worth the wait." },
  { name: "Suresh Rane",    location: "Kolhapur",   rating: 4.5, text: "Ordered 3 key holders as housewarming gifts. All three were beautifully made and the recipients absolutely loved them. Will order again!" },
  { name: "Deepa Iyer",     location: "Bangalore",  rating: 4,   text: "The Vakratunda wall art I ordered is breathtaking. The detailing and colours are exactly as shown. Fast shipping and great packing!" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => {
        if (i <= Math.floor(rating)) {
          return <Star key={i} className="w-3.5 h-3.5 fill-foreground text-foreground" />;
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
          return <StarHalf key={i} className="w-3.5 h-3.5 fill-foreground text-foreground" />;
        } else {
          return <Star key={i} className="w-3.5 h-3.5 text-border" />;
        }
      })}
    </div>
  );
}

const FAQ_ITEMS = [
  {
    q: "Where is Timeles Art located?",
    a: "Timeles Art is located at Main Market Road, Near Gandhi Chowk, Hingoli, Maharashtra 431513. You can email us at timelesart5@gmail.com."
  },
  {
    q: "Does Timeles Art offer free shipping?",
    a: "Yes! We offer free shipping across India on all orders. Cash on Delivery (COD) is also available. We ensure museum-quality packaging for every item."
  },
  {
    q: "What products does Timeles Art sell?",
    a: "We specialise in three collections: Brass & Bronze Artifacts (idols, diyas, temple items), Traditional Jewelry (Kundan, gold-plated, bridal sets), and Heritage Home Décor (wooden panels, Rajasthani wall art, textiles)."
  },
  {
    q: "How long has Timeles Art been in business?",
    a: "Timeles Art was established in 2004 — we have over 20 years of experience curating handcrafted Indian art from master artisans across Maharashtra and India."
  },
  {
    q: "Are the items authentic and handcrafted?",
    a: "Absolutely. Every piece is sourced directly from verified master artisans. We guarantee authenticity, traditional craftsmanship, and museum-quality finish on all our products."
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-b-0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button
        className="w-full flex items-center justify-between py-4 text-left text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span itemProp="name">{q}</span>
        <ChevronDown className={`w-4 h-4 shrink-0 ml-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pb-4 text-sm text-muted-foreground leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
          <span itemProp="text">{a}</span>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://timeles-art.in/#webpage",
    "name": "Timeles Art – Brass Artifacts, Kundan Jewelry & Heritage Décor",
    "url": "https://timeles-art.in",
    "description": "Shop handcrafted brass artifacts, traditional Kundan jewelry and premium heritage home décor at Timeles Art, Hingoli, Maharashtra. Est. 2004. Free shipping across India.",
    "isPartOf": { "@id": "https://timeles-art.in/#website" },
    "about": { "@id": "https://timeles-art.in/#business" },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".speakable"]
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Brass Artifacts, Kundan Jewelry & Heritage Décor | Hingoli, Maharashtra"
        description="Timeles Art, Hingoli – 20+ years of handcrafted Indian art. Shop brass artifacts, Kundan jewelry & heritage home décor. Free shipping across India. COD available."
        canonical="https://timeles-art.in/"
        structuredData={homeSchema}
      />
      <Navbar />

      <main className="flex-1">

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden" aria-label="Hero banner">
          <img src={heroBg} alt="Gallery"
            className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02]" />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 text-center text-white px-4">
            <p className="text-xs sm:text-[11px] font-semibold uppercase tracking-[0.35em] mb-5 opacity-90 speakable">
              Est. 2004 · Hingoli, Maharashtra
            </p>
            <h1 className="hero-title font-serif font-semibold mb-6 leading-tight speakable" itemProp="headline">
              The New Season Edit<br />
              <span className="shimmer-warm italic font-light">The Art of Heritage</span>
            </h1>
            <p className="text-sm sm:text-base max-w-md mx-auto mb-10 opacity-85 font-light leading-relaxed speakable" itemProp="description">
              Embrace tradition and timeless craftsmanship. Curated pieces from master artisans across India.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/products">
                <a className="inline-block bg-white text-foreground text-xs font-semibold uppercase tracking-widest px-8 py-3.5 hover:bg-white/90 transition-colors">
                  Shop Art
                </a>
              </Link>
              <Link href="/contact">
                <a className="inline-block border border-white text-white text-xs font-semibold uppercase tracking-widest px-8 py-3.5 hover:bg-white/10 transition-colors">
                  Our Story
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* ── TRUST MARQUEE ─────────────────────────────────────────────────── */}
        <div className="border-y border-border bg-secondary overflow-hidden py-3">
          <div className="flex animate-marquee whitespace-nowrap w-max">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="inline-flex items-center gap-3 px-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                <span>Free Shipping in India</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/40 inline-block" />
                <span>Museum-Quality Prints</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/40 inline-block" />
                <span>COD Available</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/40 inline-block" />
                <span>Curated Collection</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/40 inline-block" />
              </span>
            ))}
          </div>
        </div>

        {/* ── COLLECTIONS GRID ──────────────────────────────────────────────── */}
        <section className="py-14 sm:py-20 container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">Collections</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">Shop by Category</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 items-stretch">
            {COLLECTIONS.map((c, i) => (
              <Link key={i} href={c.href}>
                <a className="group flex flex-col h-full border border-border hover:border-foreground transition-colors duration-300 p-8 sm:p-10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-4">{c.sub}</p>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground leading-tight mb-3 group-hover:text-muted-foreground transition-colors">{c.title}</h3>
                  <div className="w-6 h-px bg-border group-hover:w-12 group-hover:bg-foreground transition-all duration-300 mb-4" />
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{c.desc}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-foreground group-hover:gap-3 transition-all duration-300">
                    Shop Now <ArrowRight className="w-3 h-3" />
                  </span>
                </a>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CURATOR'S PICK ────────────────────────────────────────────────── */}
        <section className="py-10 sm:py-16 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-8 sm:mb-10">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-2">Handpicked</p>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">Our Curator's Pick</h2>
              </div>
              <Link href="/products">
                <a className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-foreground hover:text-muted-foreground transition-colors">
                  View All <ArrowRight className="w-3 h-3" />
                </a>
              </Link>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
              {PRODUCTS.map((p, i) => (
                <div key={i} className="group cursor-pointer border border-border hover:border-foreground transition-colors duration-300 p-4">
                  <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1">{p.cat}</p>
                  <h4 className="font-serif text-sm font-semibold text-foreground leading-snug mb-3 line-clamp-2 group-hover:text-muted-foreground transition-colors">
                    {p.name}
                  </h4>
                  <div className="w-4 h-px bg-border group-hover:w-8 group-hover:bg-foreground transition-all duration-300" />
                </div>
              ))}
            </div>

            {/* Mobile view-all */}
            <div className="mt-8 text-center sm:hidden">
              <Link href="/products">
                <a className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-foreground hover:text-muted-foreground transition-colors">
                  View All <ArrowRight className="w-3 h-3" />
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* ── HOW TO ORDER ──────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-20 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">Simple Process</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">How to Order</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-4xl mx-auto">
              {HOW_TO_ORDER.map(({ icon: Icon, step, title, desc }) => (
                <div key={step} className="text-center">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 border border-border mb-5">
                    <Icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                    <span className="absolute -top-2.5 -right-2.5 bg-foreground text-background text-[9px] font-bold w-5 h-5 flex items-center justify-center">{step}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href="mailto:timelesart5@gmail.com?subject=New Order Inquiry&body=Hi, I would like to place an order. Can you please help me?"
                className="inline-flex items-center gap-2.5 bg-foreground text-background text-xs font-semibold uppercase tracking-widest px-8 py-3.5 hover:bg-foreground/85 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Start Your Order via Email
              </a>
            </div>
          </div>
        </section>

        {/* ── BANNER / QUOTE BREAK ──────────────────────────────────────────── */}
        <section className="relative h-[45vh] sm:h-[55vh] overflow-hidden flex items-center justify-center">
          <img src={textureBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] mb-5 opacity-70">Our Philosophy</p>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-light italic leading-tight mb-8">
              "Art is not what you see, but what<br className="hidden sm:block" /> you make others see."
            </h2>
            <p className="text-[11px] font-semibold uppercase tracking-widest opacity-60">— Timeles Art, Hingoli · Since 2004</p>
          </div>
        </section>

        {/* ── TRUST ICONS ───────────────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {TRUST.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                    <Icon className="w-4 h-4 text-foreground" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-foreground">{label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INSTAGRAM ─────────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-20 border-y border-border bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">Follow Our Journey</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-3">We're on Instagram</h2>
            <p className="text-sm text-muted-foreground max-w-md mx-auto mb-8">
              See our latest creations, behind-the-scenes craftsmanship and new arrivals — follow us for daily inspiration.
            </p>
            <a
              href="https://www.instagram.com/timeles_art_?igsh=MWtidjR3NjhqZWwyNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-xs font-semibold uppercase tracking-widest px-8 py-3.5 hover:opacity-90 transition-opacity"
            >
              <Instagram className="w-4 h-4" />
              @timeles_art_
            </a>
          </div>
        </section>

        {/* ── ABOUT / STORY BANNER ──────────────────────────────────────────── */}
        <section className="py-14 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-4">Our Heritage</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-6 leading-tight">
              The Essence of Maharashtra
            </h2>
            <div className="w-8 h-px bg-foreground mx-auto mb-6" />
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Located in the heart of Hingoli, Timeles Art has been a beacon of traditional craftsmanship
              for over two decades. We source directly from master artisans across India, ensuring every piece
              tells a story of heritage, devotion, and unparalleled skill.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Our collection spans sacred brass artifacts, royal Kundan jewelry, and hand-carved home décor —
              each piece a testament to India's living artistic tradition.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <Link href="/contact">
                <a className="inline-block bg-foreground text-background text-xs font-semibold uppercase tracking-widest px-7 py-3.5 hover:bg-foreground/85 transition-colors">
                  Visit The Gallery
                </a>
              </Link>
              <Link href="/products">
                <a className="inline-block border border-foreground text-foreground text-xs font-semibold uppercase tracking-widest px-7 py-3.5 hover:bg-foreground hover:text-background transition-colors">
                  Shop Collection
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS (auto-scroll) ─────────────────────────────────── */}
        <section className="py-14 sm:py-20 bg-secondary border-y border-border overflow-hidden">
          <div className="text-center mb-12 px-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">Happy Customers</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">What People Say</h2>
          </div>
          {/* pause-on-hover via CSS class on the scrolling row */}
          <div className="flex animate-marquee-slow hover:[animation-play-state:paused] w-max">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div
                key={i}
                className="w-80 shrink-0 mx-3 bg-background border border-border p-7 flex flex-col
                           transition-all duration-300 hover:scale-[1.04] hover:shadow-xl hover:border-foreground hover:z-10"
              >
                <StarRating rating={t.rating} />
                <p className="text-sm text-muted-foreground leading-relaxed my-5 italic flex-1">"{t.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-foreground">{t.name}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CUSTOM ORDERS ─────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-20 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">Made Just for You</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">Custom Orders Welcome</h2>
            <div className="w-8 h-px bg-foreground mx-auto mb-6" />
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              Want a personalised key holder with a name, a custom frame for a special occasion, or a specific murti for your home temple?
              Share your idea with us — we'll craft it exactly the way you imagine.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left max-w-2xl mx-auto">
              {["Name & message engraving", "Custom size & colour", "Wedding & gifting orders"].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="mailto:timelesart5@gmail.com?subject=Custom Order Request&body=Hi, I have a custom order request. Can you help me?"
              className="inline-flex items-center gap-2.5 bg-foreground text-background text-xs font-semibold uppercase tracking-widest px-8 py-3.5 hover:bg-foreground/85 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Enquire About Custom Orders
            </a>
          </div>
        </section>

        {/* ── FAQ SECTION (AEO / LLM) ──────────────────────────────────────── */}
        <section className="py-14 sm:py-20 bg-background border-y border-border" aria-label="Frequently Asked Questions"
          itemScope itemType="https://schema.org/FAQPage">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <div className="text-center mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">Help Centre</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">Frequently Asked Questions</h2>
            </div>
            <div className="divide-y divide-border">
              {FAQ_ITEMS.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Still have questions?{" "}
              <a href="mailto:timelesart5@gmail.com"
                className="text-foreground font-semibold underline underline-offset-2 hover:text-muted-foreground transition-colors">
                Email us
              </a>{" "}
              or{" "}
              <Link href="/contact">
                <a className="text-foreground font-semibold underline underline-offset-2 hover:text-muted-foreground transition-colors">
                  visit our gallery
                </a>
              </Link>.
            </p>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-20 bg-foreground text-background text-center">
          <div className="container mx-auto px-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-background/60 mb-4">Ready to Order?</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-4">
              Find Something You Love
            </h2>
            <p className="text-sm text-background/70 mb-8 max-w-md mx-auto">
              Browse our full collection of 40+ handcrafted pieces. Free shipping across India on every order.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/portfolio">
                <a className="inline-block bg-white text-foreground text-xs font-semibold uppercase tracking-widest px-8 py-3.5 hover:bg-white/90 transition-colors">
                  Browse Portfolio
                </a>
              </Link>
              <Link href="/about">
                <a className="inline-block border border-background/40 text-background text-xs font-semibold uppercase tracking-widest px-8 py-3.5 hover:bg-background/10 transition-colors">
                  Our Story
                </a>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
