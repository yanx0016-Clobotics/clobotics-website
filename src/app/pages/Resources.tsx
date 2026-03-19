import { Link } from "react-router";
import { ArrowRight, FileText, Video, BookOpen, Download } from "lucide-react";

export default function Resources() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://clobotics.com/wp-content/uploads/2020/10/Drone-Shot.jpg"
            alt="Resources and Insights"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-4xl">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              Resources & Insights
            </div>
            <h1 className="text-4xl md:text-6xl mb-6">
              Learn How AI Transforms Operations
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Explore case studies, whitepapers, webinars, and industry reports showcasing real-world results from AI implementation.
            </p>
          </div>
        </div>
      </section>

      {/* GEO Summary Block */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-8 border border-primary/20">
            <h2 className="mb-4">Clobotics Resources Library</h2>
            <p className="text-muted-foreground leading-relaxed">
              Access comprehensive resources to understand how Clobotics AI solutions drive measurable business outcomes. Our library includes detailed case studies from Fortune 500 deployments, technical whitepapers on computer vision algorithms, recorded webinars featuring industry experts, and annual reports on wind energy and retail technology trends. Learn implementation best practices, ROI calculation methodologies, integration guides, and change management strategies. All resources are available for download after registration. Subscribe to our newsletter for monthly updates on new content, product releases, and industry insights.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Featured Content</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-2xl border border-border overflow-hidden group hover:border-primary transition-colors">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://clobotics.com/wp-content/uploads/2020/10/Drone-Shot.jpg"
                  alt="Wind External Inspection Case Study"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <FileText size={20} className="text-primary" />
                  <span className="text-primary">Wind Case Study</span>
                </div>
                <h3 className="mb-4">External Inspection: Earlier Defect Detection, Lower Downtime Risk</h3>
                <p className="text-muted-foreground mb-6">
                  See how a utility-scale operator improved defect visibility and maintenance planning by adopting autonomous external blade inspections and centralized defect triage.
                </p>
                <a
                  href="/resources/wind-case-study-south-america.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary group-hover:gap-3 transition-all"
                >
                  Download PDF
                  <Download size={20} />
                </a>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border overflow-hidden group hover:border-primary transition-colors">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://clobotics.com/wp-content/uploads/2020/10/RIAAS-Video-Screenshot.png"
                  alt="Retail Case Study"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <FileText size={20} className="text-primary" />
                  <span className="text-primary">Case Study</span>
                </div>
                <h3 className="mb-4">Global CPG Brand: 28% Sales Lift</h3>
                <p className="text-muted-foreground mb-6">
                  1,200-store retail intelligence deployment achieving 99.1% planogram compliance and significant category growth.
                </p>
                <button className="inline-flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                  Download PDF
                  <Download size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wind Case Study Detail */}
      <section id="wind-case-study" className="px-4 sm:px-6 lg:px-8 py-20 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              Wind Case Study
            </div>
            <h2 className="mb-4">External Inspection to Detect Issues Earlier and Reduce Downtime Risk</h2>
            <p className="text-muted-foreground max-w-4xl">
              A utility-scale wind operator moved from slower, manual-heavy inspection workflows to autonomous external blade inspections with centralized defect triage. The result was faster issue visibility, sharper repair prioritization, and better control of maintenance windows before defects escalated.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h4 className="mb-3">Challenge</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Late visibility into blade condition progression</li>
                <li>• Slow inspection-to-action handoff</li>
                <li>• Limited weather and crew windows for repair execution</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h4 className="mb-3">What Changed</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Campaign-based autonomous drone capture</li>
                <li>• Standardized defect severity triage</li>
                <li>• Closed-loop tracking for next-cycle planning</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h4 className="mb-3">Operational Impact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Earlier lifecycle defect detection</li>
                <li>• Better maintenance prioritization</li>
                <li>• Lower risk of avoidable downtime events</li>
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-muted-foreground">
              Download the full South America wind case study PDF, or request a technical review for your site.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/resources/wind-case-study-south-america.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg transition-colors hover:bg-primary/10 whitespace-nowrap"
              >
                Download Case Study PDF
                <Download size={18} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
              >
                Request Wind Case Review
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Whitepapers */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="mb-4">Technical Whitepapers</h2>
            <p className="text-muted-foreground">Deep-dive technical documentation and research</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-primary" size={24} />
              </div>
              <h4 className="mb-2">Computer Vision for Wind Blade Inspection</h4>
              <p className="text-muted-foreground mb-4">
                Technical overview of AI defect detection algorithms and accuracy benchmarks
              </p>
              <button className="text-primary inline-flex items-center gap-2 hover:gap-3 transition-all">
                Download
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-primary" size={24} />
              </div>
              <h4 className="mb-2">Real-Time Shelf Monitoring Architecture</h4>
              <p className="text-muted-foreground mb-4">
                System design for scalable image processing and edge computing deployment
              </p>
              <button className="text-primary inline-flex items-center gap-2 hover:gap-3 transition-all">
                Download
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-primary" size={24} />
              </div>
              <h4 className="mb-2">Predictive Maintenance for Renewable Energy</h4>
              <p className="text-muted-foreground mb-4">
                Machine learning models for forecasting component failures and optimizing maintenance schedules
              </p>
              <button className="text-primary inline-flex items-center gap-2 hover:gap-3 transition-all">
                Download
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="mb-4">On-Demand Webinars</h2>
            <p className="text-muted-foreground">Expert insights and product demonstrations</p>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-64 h-48 md:h-auto bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center">
                  <Video className="text-primary" size={48} />
                </div>
                <div className="flex-1 p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Video size={16} className="text-primary" />
                    <span className="text-primary">Webinar - 45 minutes</span>
                  </div>
                  <h3 className="mb-3">The Future of Wind Energy O&M</h3>
                  <p className="text-muted-foreground mb-4">
                    Industry leaders discuss how AI and automation are transforming wind farm operations, featuring a live demo of Clobotics blade inspection platform.
                  </p>
                  <button className="text-primary inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Watch Now
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-64 h-48 md:h-auto bg-gradient-to-br from-blue-500/20 to-primary/20 flex items-center justify-center">
                  <Video className="text-primary" size={48} />
                </div>
                <div className="flex-1 p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Video size={16} className="text-primary" />
                    <span className="text-primary">Webinar - 35 minutes</span>
                  </div>
                  <h3 className="mb-3">Retail Excellence Through Computer Vision</h3>
                  <p className="text-muted-foreground mb-4">
                    Learn how leading CPG brands and retailers are using AI shelf intelligence to drive 20%+ sales growth and improve customer experience.
                  </p>
                  <button className="text-primary inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Watch Now
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-64 h-48 md:h-auto bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center">
                  <Video className="text-primary" size={48} />
                </div>
                <div className="flex-1 p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Video size={16} className="text-primary" />
                    <span className="text-primary">Webinar - 40 minutes</span>
                  </div>
                  <h3 className="mb-3">ROI Deep Dive: Calculating AI Business Value</h3>
                  <p className="text-muted-foreground mb-4">
                    Financial framework for evaluating AI investments with real customer examples showing payback periods and total cost of ownership analysis.
                  </p>
                  <button className="text-primary inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Watch Now
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Reports */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="mb-4">Industry Reports</h2>
            <p className="text-muted-foreground">Annual market analysis and trend forecasts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-8 border border-border hover:border-primary transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <FileText size={20} className="text-primary" />
                <span className="text-primary">Annual Report 2026</span>
              </div>
              <h3 className="mb-4">State of Wind Energy Technology</h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive analysis of digital transformation trends in wind energy operations, featuring survey data from 300+ wind farm operators globally.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">52 pages</span>
                <button className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
                  Download
                  <Download size={20} />
                </button>
              </div>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border hover:border-primary transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <FileText size={20} className="text-primary" />
                <span className="text-primary">Annual Report 2026</span>
              </div>
              <h3 className="mb-4">Retail AI Adoption Benchmark Study</h3>
              <p className="text-muted-foreground mb-6">
                Market research on computer vision deployment in retail, analyzing adoption rates, use cases, and ROI metrics across 500+ retail chains.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">48 pages</span>
                <button className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
                  Download
                  <Download size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl p-12 border border-primary/30 text-center">
            <h2 className="mb-4">Stay Informed with Our Newsletter</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get monthly insights, case studies, and product updates delivered to your inbox
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="mb-4">Ready to See Clobotics in Action?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo to explore how our solutions can transform your operations
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transition-colors"
          >
            Schedule Demo
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
