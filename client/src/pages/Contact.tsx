import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName,  setLastName]  = useState("");
  const [email,     setEmail]     = useState("");
  const [subject,   setSubject]   = useState("");
  const [message,   setMessage]   = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hi, I'm ${firstName} ${lastName} (${email}).\n\nSubject: ${subject}\n\n${message}`;
    const url = `https://wa.me/917558599155?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://timeles-art.in/contact#webpage",
    "name": "Contact Timeles Art – Visit Us in Hingoli",
    "url": "https://timeles-art.in/contact",
    "description": "Contact Timeles Art in Hingoli, Maharashtra. Find our address, phone number, opening hours, and send us a message. We are open Mon-Sat 10am-8:30pm.",
    "isPartOf": { "@id": "https://timeles-art.in/#website" },
    "about": { "@id": "https://timeles-art.in/#business" }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Contact Us – Visit Timeles Art in Hingoli"
        description="Visit Timeles Art at Main Market Road, Near Gandhi Chowk, Hingoli, Maharashtra 431513. Call +91 75585 99155 or WhatsApp us. Open Mon-Sat 10am-8:30pm."
        canonical="https://timeles-art.in/contact"
        structuredData={contactSchema}
      />
      <Navbar />

      <main className="flex-1">
        <div className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl mb-4">Contact Us</h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Visit our gallery in Hingoli or reach out to us for inquiries about our collections, custom orders, or collaborations.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Information – microdata reinforces LocalBusiness for Google */}
            <div itemScope itemType="https://schema.org/LocalBusiness">
              <meta itemProp="name" content="Timeles Art" />
              <meta itemProp="telephone" content="+917558599155" />
              <meta itemProp="email" content="timelesart5@gmail.com" />
              <meta itemProp="url" content="https://timeles-art.in" />
              <h2 className="font-serif text-3xl mb-8">Visit The Gallery</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Address</h3>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Main+Market+Road,+Hingoli,+Maharashtra+431513,+India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors"
                      itemProp="address" itemScope itemType="https://schema.org/PostalAddress"
                    >
                      <span itemProp="streetAddress">Main Market Road, Near Gandhi Chowk</span><br />
                      <span itemProp="addressLocality">Hingoli</span>,{" "}
                      <span itemProp="addressRegion">Maharashtra</span>{" "}
                      <span itemProp="postalCode">431513</span><br />
                      <span itemProp="addressCountry">India</span>
                    </a>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Main+Market+Road,+Hingoli,+Maharashtra+431513,+India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      Get Directions
                    </a>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="rounded overflow-hidden border border-border/50 shadow-md w-full h-52">
                  <iframe
                    title="Timeles Art location"
                    src="https://maps.google.com/maps?q=Hingoli+Market,+Hingoli,+Maharashtra+431513&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Opening Hours</h3>
                    <p className="text-foreground/70">
                      Monday - Saturday: 10:00 AM - 8:30 PM<br />
                      Sunday: 11:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Contact Numbers</h3>
                    <a href="tel:+917558599155"
                      className="text-foreground/70 hover:text-foreground transition-colors underline underline-offset-2">
                      +91 75585 99155
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a href="mailto:timelesart5@gmail.com"
                      className="text-foreground/70 hover:text-foreground transition-colors underline underline-offset-2">
                      timelesart5@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 md:p-10 border border-border/50 shadow-xl rounded-sm">
              <h2 className="font-serif text-3xl mb-6">Send a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" className="bg-background" value={firstName} onChange={e => setFirstName(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" className="bg-background" value={lastName} onChange={e => setLastName(e.target.value)} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="bg-background" value={email} onChange={e => setEmail(e.target.value)} />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="Inquiry about..." className="bg-background" value={subject} onChange={e => setSubject(e.target.value)} required />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="How can we help you?" className="min-h-[150px] bg-background" value={message} onChange={e => setMessage(e.target.value)} required />
                </div>

                <Button className="w-full text-lg py-6" size="lg" type="submit">
                  Send via WhatsApp
                </Button>
                <p className="text-xs text-center text-muted-foreground">Clicking the button will open WhatsApp with your message pre-filled.</p>
              </form>
            </div>
            
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}