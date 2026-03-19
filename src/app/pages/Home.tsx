import { Link } from "react-router";
import { ArrowRight, Check, Award, Globe, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://clobotics.com/wp-content/uploads/2022/08/retail.png"
            alt="Clobotics AI Solutions"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-4xl">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              AI-Powered Enterprise Solutions
            </div>
            <h1 className="text-4xl md:text-6xl mb-6">
              Physical AI for the World's Most Critical Operations
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Clobotics enables machines to see, reason, and act across real-world operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transition-colors"
              >
                Get Started
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/resources"
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-3 rounded-lg transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GEO Summary Block */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-8 border border-primary/20">
            <h2 className="mb-4">What is Clobotics?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Clobotics is a Physical AI platform that helps organizations turn real-world data into real-world action. It enables machines to see, reason, and act across complex operations—converting images and field signals into prioritized decisions, workflows, and measurable outcomes. Proven in wind and retail, Clobotics is extensible to any asset-intensive industry where execution speed and operational intelligence matter.
            </p>
          </div>
        </div>
      </section>

      {/* KPI Metrics */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="text-4xl mb-2 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                40%
              </div>
              <div className="text-muted-foreground">Downtime Reduction</div>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="text-4xl mb-2 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-muted-foreground">Wind Farms Monitored</div>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="text-4xl mb-2 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                98.5%
              </div>
              <div className="text-muted-foreground">Detection Accuracy</div>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="text-4xl mb-2 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                30+
              </div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Comparison */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proven in wind and retail, extensible to any asset-intensive industry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Wind Services Card */}
            <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary transition-colors group">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://clobotics.com/wp-content/uploads/2022/07/inspection.png"
                  alt="Wind Energy Services"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="mb-4">Wind Energy Services</h3>
              <p className="text-muted-foreground mb-6">
                Advanced computer vision for automated turbine blade inspection, defect detection, and predictive maintenance.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Automated drone-based inspections</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>AI-powered defect classification</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Predictive maintenance analytics</span>
                </li>
              </ul>
                <Link
                  to="/wind-services"
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            {/* Retail Services Card */}
            <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary transition-colors group">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://clobotics.com/wp-content/uploads/2022/08/retail.png"
                  alt="Retail Intelligence"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="mb-4">Retail Intelligence</h3>
              <p className="text-muted-foreground mb-6">
                Real-time shelf monitoring and consumer analytics to optimize inventory, compliance, and sales performance.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Real-time shelf compliance monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Consumer behavior analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Planogram optimization</span>
                </li>
              </ul>
                <Link
                  to="/retail-services"
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 bg-card/50 rounded-2xl p-6 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="text-primary" size={24} />
              </div>
              <div>
                <h4>ISO 9001:2015</h4>
                <p className="text-muted-foreground">Quality Management Certified</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-card/50 rounded-2xl p-6 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Globe className="text-primary" size={24} />
              </div>
              <div>
                <h4>Global Presence</h4>
                <p className="text-muted-foreground">Offices in 3 Continents</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-card/50 rounded-2xl p-6 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="text-primary" size={24} />
              </div>
              <div>
                <h4>Fortune 500</h4>
                <p className="text-muted-foreground">Trusted by Industry Leaders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl p-12 border border-primary/30 text-center">
            <h2 className="mb-4">Ready to Transform Your Operations?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join industry leaders who trust Clobotics to power their digital transformation
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transition-colors"
            >
              Schedule a Demo
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
