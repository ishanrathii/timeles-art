import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { ArrowRight, Heart, Award, Truck, Users, Mail } from "lucide-react";

const VALUES = [
  { icon: Heart,  title: "Made with Devotion",   desc: "Every piece is crafted with love, prayer and attention to detail — not mass-produced." },
  { icon: Award,  title: "Authentic Craft",       desc: "We source directly from skilled artisans who carry forward generations of traditional knowledge." },
  { icon: Truck,  title: "Delivered Carefully",   desc: "Each item is packed with museum-grade care and shipped free across India." },
  { icon: Users,  title: "Personal Service",      desc: "We are a family business. When you contact us, you speak to the owner directly." },
];

export default function About() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://timeles-art.in/about#webpage",
    "name": "About Timeles Art – Our Story",
    "url": "https://timeles-art.in/about",
    "description": "Learn the story behind Timeles Art — a family-run handcraft studio in Hingoli, Maharashtra, crafting sacred art, wall décor, key holders and more since 2004.",
    "isPartOf": { "@id": "https://timeles-art.in/#website" },
    "about": { "@id": "https://timeles-art.in/#business" }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="About Us – Timeles Art, Hingoli"
        description="The story behind Timeles Art — a family-run handcraft studio in Hingoli, Maharashtra. Sacred artifacts, wall art, key holders and more. Est. 2004."
        canonical="https://timeles-art.in/about"
        structuredData={aboutSchema}
      />
      <Navbar />

      <main className="flex-1">

        {/* Header */}
        <div className="bg-muted/30 py-16 border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">Est. 2004 · Hingoli</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">Our Story</h1>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              A family studio rooted in the heart of Maharashtra — where every piece of art is made with devotion.
            </p>
          </div>
        </div>

        {/* Story section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <p className="text-foreground font-serif text-xl sm:text-2xl font-light leading-relaxed">
                "Art is not a product — it is a feeling, a blessing, a piece of someone's soul."
              </p>
              <p>
                Timeles Art began in 2004 in Hingoli, Maharashtra — a small family studio with a simple belief:
                that handcrafted art should be accessible to every Indian home. What started as a passion for
                traditional craft has grown into a beloved gallery trusted by hundreds of families across India.
              </p>
              <p>
                We create everything in-house — from sacred Ganesha frames and Radha Krishna wall panels to
                intricate key holders, floral door torans and mandala diyas. Each piece is hand-shaped, painted
                and finished by our team of artisans who have learned their craft over decades.
              </p>
              <p>
                We don't believe in mass production. When you order from us, your piece is made with care,
                packed with love, and shipped directly from our studio to your door — free across India.
              </p>
              <p>
                Our customers are our family. Most of them find us through a friend's recommendation or an
                Instagram post, and then keep coming back — for festivals, weddings, housewarming gifts, and
                simply to bring a little more beauty into their homes.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-14 sm:py-20 bg-secondary border-y border-border">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">What We Stand For</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">Our Values</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {VALUES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-background border border-border p-8 text-center">
                  <div className="w-12 h-12 border border-border rounded-full flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-foreground mb-3">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we make */}
        <section className="py-14 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <div className="text-center mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">Our Craft</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">What We Make</h2>
              <p className="text-sm text-muted-foreground mt-3">Click any category to browse those items in the portfolio.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: "Sacred Wall Art",          href: "/portfolio?tag=Wall+Art"    },
                { label: "Ganesha & Deity Frames",   href: "/portfolio?tag=Frames"      },
                { label: "Door Torans & Hangings",   href: "/portfolio?tag=Hangings"    },
                { label: "Mandala Diyas",            href: "/portfolio?tag=Diyas"       },
                { label: "Personalised Key Holders", href: "/portfolio?tag=Key+Holders" },
                { label: "Custom Orders",            href: "/contact"                   },
              ].map(item => (
                <Link key={item.label} href={item.href}>
                  <a className="group border border-border hover:border-foreground hover:bg-foreground transition-all duration-200 p-5 text-center block">
                    <p className="text-sm font-medium text-foreground group-hover:text-background transition-colors">{item.label}</p>
                    <p className="text-[10px] text-muted-foreground group-hover:text-background/70 mt-1 transition-colors">Browse →</p>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 sm:py-20 bg-foreground text-background text-center">
          <div className="container mx-auto px-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-background/60 mb-4">We'd Love to Hear from You</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-6">
              Let's Create Something Beautiful
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:timelesart5@gmail.com?subject=Hello from your About page&body=Hi, I visited your About page and would love to know more about your work!"
                className="inline-flex items-center gap-2.5 bg-background text-foreground text-xs font-semibold uppercase tracking-widest px-8 py-3.5 hover:bg-background/90 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
              <Link href="/portfolio">
                <a className="inline-flex items-center gap-2 border border-background/40 text-background text-xs font-semibold uppercase tracking-widest px-8 py-3.5 hover:bg-background/10 transition-colors">
                  Browse Portfolio <ArrowRight className="w-3 h-3" />
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
