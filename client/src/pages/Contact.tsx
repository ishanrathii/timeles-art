import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit our gallery in Hingoli or reach out to us for inquiries about our collections, custom orders, or collaborations.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div>
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
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Main Market Road, Near Gandhi Chowk<br />
                      Hingoli, Maharashtra 431513<br />
                      India
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
                    title="Priya Art Gallery location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.5!2d77.1497!3d19.7167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d3b7a1a1a1a1%3A0x1!2sMain+Market+Road%2C+Hingoli%2C+Maharashtra+431513!5e0!3m2!1sen!2sin!4v1"
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
                    <p className="text-muted-foreground">
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
                    <p className="text-muted-foreground">
                      +91 75585 99155
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      priya03kabra@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 md:p-10 border border-border/50 shadow-xl rounded-sm">
              <h2 className="font-serif text-3xl mb-6">Send a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" className="bg-background" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="bg-background" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="Inquiry about..." className="bg-background" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="How can we help you?" className="min-h-[150px] bg-background" />
                </div>

                <Button className="w-full text-lg py-6" size="lg">Send Message</Button>
              </form>
            </div>
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}