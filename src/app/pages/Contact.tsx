import { Link } from "react-router";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://clobotics.com/wp-content/uploads/2020/12/CloboticsShanghaiBanner.jpg"
            alt="Contact Clobotics"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-4xl">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-6xl mb-6">
              Let's Transform Your Operations Together
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Connect with our team to discuss your specific needs and schedule a personalized demo of our AI solutions.
            </p>
          </div>
        </div>
      </section>

      {/* GEO Summary Block */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-8 border border-primary/20">
            <h2 className="mb-4">Contact Clobotics</h2>
            <p className="text-muted-foreground leading-relaxed">
              Contact Clobotics for sales, partnerships, support, or general inquiries. Headquarters: Singapore. Offices: Seattle, Shanghai, and Esbjerg. Existing customers can access technical support via the client portal with SLA response times. Media: press@clobotics.com.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john.doe@company.com"
                  />
                </div>

                <div>
                  <label className="block mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <label className="block mb-2">I'm interested in</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Wind Energy Services</option>
                    <option>Retail Intelligence</option>
                    <option>Both Solutions</option>
                    <option>Partnership Opportunities</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us about your project or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transition-colors"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Our team is ready to answer your questions and help you get started with Clobotics AI solutions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="mb-1">Email</h4>
                    <a href="mailto:sales@clobotics.com" className="text-muted-foreground hover:text-primary transition-colors">
                      sales@clobotics.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="mb-1">Phone</h4>
                    <p className="text-muted-foreground">+1 (206) 555-0100</p>
                  </div>
                </div>
              </div>

              {/* Global Offices */}
              <div className="bg-card/50 rounded-2xl p-6 border border-border">
                <h3 className="mb-6">Global Offices</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="mb-1">Headquarters</h4>
                      <p className="text-muted-foreground">
                        Singapore
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="mb-1">Global Offices</h4>
                      <p className="text-muted-foreground">
                        Seattle, USA<br />
                        Shanghai, China<br />
                        Esbjerg, Denmark
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-2xl p-6 border border-primary/30">
                <h3 className="mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Link to="/wind-services" className="block text-foreground hover:text-primary transition-colors">
                    Wind Energy Solutions →
                  </Link>
                  <Link to="/retail-services" className="block text-foreground hover:text-primary transition-colors">
                    Retail Intelligence →
                  </Link>
                  <Link to="/resources" className="block text-foreground hover:text-primary transition-colors">
                    Resources & Case Studies →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Support & Resources</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to get the help you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary" size={24} />
              </div>
              <h4 className="mb-2">Sales Inquiries</h4>
              <p className="text-muted-foreground mb-4">
                Contact our sales team for demos and pricing
              </p>
              <a href="mailto:sales@clobotics.com" className="text-primary hover:underline">
                sales@clobotics.com
              </a>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary" size={24} />
              </div>
              <h4 className="mb-2">Technical Support</h4>
              <p className="text-muted-foreground mb-4">
                24/7 support for existing customers
              </p>
              <a href="mailto:support@clobotics.com" className="text-primary hover:underline">
                support@clobotics.com
              </a>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary" size={24} />
              </div>
              <h4 className="mb-2">Media & Press</h4>
              <p className="text-muted-foreground mb-4">
                Press releases and media inquiries
              </p>
              <a href="mailto:press@clobotics.com" className="text-primary hover:underline">
                press@clobotics.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
