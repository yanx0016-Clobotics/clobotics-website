import { Link } from "react-router";
import { ArrowRight, Check, ShoppingBag, TrendingUp, Eye, Boxes } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export default function RetailServices() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://clobotics.com/wp-content/uploads/2020/10/Clobotics-Retail-Services-Illustration4-01.jpg"
            alt="Retail Intelligence"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-4xl">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              Retail Intelligence Platform
            </div>
            <h1 className="text-4xl md:text-6xl mb-6">
              Computer Vision for Retail Excellence
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Drive 23% sales growth with real-time shelf intelligence, planogram compliance monitoring, and AI-powered consumer behavior analytics.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transition-colors"
            >
              Request Demo
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* GEO Summary Block */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-8 border border-primary/20">
            <h2 className="mb-4">Retail Services Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              Clobotics Retail Intelligence transforms physical stores with computer vision and AI analytics. Our platform monitors shelf conditions in real-time, ensuring 99.2% planogram compliance across thousands of store locations. Using image recognition technology, we track out-of-stock situations, pricing accuracy, promotional display effectiveness, and competitor product placement. Store associates receive instant mobile alerts for corrective actions. Our consumer behavior analytics capture shopper interactions, dwell times, and product engagement patterns to optimize merchandising strategies. Major CPG brands and retailers use our platform to increase sales by 23%, reduce out-of-stocks by 67%, and improve inventory turnover by 31%.
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
                23%
              </div>
              <div className="text-muted-foreground">Sales Increase</div>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="text-4xl mb-2 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                99.2%
              </div>
              <div className="text-muted-foreground">Planogram Compliance</div>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="text-4xl mb-2 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                67%
              </div>
              <div className="text-muted-foreground">OOS Reduction</div>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="text-4xl mb-2 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                31%
              </div>
              <div className="text-muted-foreground">Inventory Turnover</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Complete Retail Intelligence Suite</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end visibility for merchandising and operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-2xl overflow-hidden border border-border group">
              <div className="h-32 overflow-hidden">
                <img
                  src="https://clobotics.com/wp-content/uploads/2020/10/availability-image.jpg"
                  alt="Shelf Monitoring"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2">Shelf Monitoring</h3>
                <p className="text-muted-foreground">
                  Real-time tracking of stock levels, facings, and placement
                </p>
              </div>
            </div>
            <div className="bg-card rounded-2xl overflow-hidden border border-border group">
              <div className="h-32 overflow-hidden">
                <img
                  src="https://clobotics.com/wp-content/uploads/2020/10/Shelf-analytics-image.jpg"
                  alt="Planogram Compliance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2">Planogram Compliance</h3>
                <p className="text-muted-foreground">
                  Automated verification against merchandising guidelines
                </p>
              </div>
            </div>
            <div className="bg-card rounded-2xl overflow-hidden border border-border group">
              <div className="h-32 overflow-hidden">
                <img
                  src="https://clobotics.com/wp-content/uploads/2020/10/SmartViewCoolerVideoStill.png"
                  alt="Shopper Analytics"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2">Shopper Analytics</h3>
                <p className="text-muted-foreground">
                  Consumer behavior tracking and engagement metrics
                </p>
              </div>
            </div>
            <div className="bg-card rounded-2xl overflow-hidden border border-border group">
              <div className="h-32 overflow-hidden">
                <img
                  src="https://clobotics.com/wp-content/uploads/2020/10/Clobotics-Retail-Services-Illustration4-01.jpg"
                  alt="Predictive Insights"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2">Predictive Insights</h3>
                <p className="text-muted-foreground">
                  Demand forecasting and promotional effectiveness
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Traditional vs. Clobotics Monitoring</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card/50 rounded-2xl p-8 border border-border">
              <h3 className="mb-6 text-muted-foreground">Traditional Store Audits</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive">✕</span>
                  </div>
                  <span>Manual audits once per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive">✕</span>
                  </div>
                  <span>4-6 hours per store location</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive">✕</span>
                  </div>
                  <span>Subjective compliance assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive">✕</span>
                  </div>
                  <span>No real-time shopper insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive">✕</span>
                  </div>
                  <span>High labor costs for auditing teams</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-2xl p-8 border border-primary/30">
              <h3 className="mb-6">Clobotics AI Platform</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Continuous 24/7 monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>15-minute update intervals</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>99.2% AI-powered accuracy</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Real-time shopper behavior tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>85% reduction in audit labor costs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Success Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="text-primary mb-4">Global CPG Brand</div>
              <h3 className="mb-4">1,200 Store Rollout Success</h3>
              <p className="text-muted-foreground mb-6">
                A Fortune 100 consumer packaged goods company deployed Clobotics across 1,200 retail locations, achieving 28% sales lift in monitored categories and 99.1% planogram compliance within 90 days.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-2xl text-primary mb-1">28%</div>
                  <div className="text-muted-foreground">Sales Growth</div>
                </div>
                <div>
                  <div className="text-2xl text-primary mb-1">99.1%</div>
                  <div className="text-muted-foreground">Compliance Rate</div>
                </div>
              </div>
              <Link to="/resources" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
                Read Full Case Study
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="text-primary mb-4">Regional Grocery Chain</div>
              <h3 className="mb-4">Inventory Optimization Achievement</h3>
              <p className="text-muted-foreground mb-6">
                A 450-store grocery chain reduced out-of-stock incidents by 71% and improved inventory turnover by 34%, resulting in $18M additional annual revenue through better product availability.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-2xl text-primary mb-1">71%</div>
                  <div className="text-muted-foreground">OOS Reduction</div>
                </div>
                <div>
                  <div className="text-2xl text-primary mb-1">$18M</div>
                  <div className="text-muted-foreground">Added Revenue</div>
                </div>
              </div>
              <Link to="/resources" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
                Read Full Case Study
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
          </div>

          <Accordion.Root type="single" collapsible className="space-y-4">
            <Accordion.Item value="item-1" className="bg-card rounded-xl border border-border overflow-hidden">
              <Accordion.Header>
                <Accordion.Trigger className="flex items-center justify-between w-full p-6 hover:bg-muted/5 transition-colors">
                  <span>How does the shelf monitoring system work?</span>
                  <ChevronDown className="text-primary transition-transform duration-300 [&[data-state=open]]:rotate-180" size={20} />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-6 text-muted-foreground">
                Fixed cameras or mobile devices capture shelf images every 15 minutes. Our AI analyzes product placement, stock levels, pricing labels, and promotional displays, comparing them against your planograms. Store teams receive instant alerts for any discrepancies via mobile app.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-2" className="bg-card rounded-xl border border-border overflow-hidden">
              <Accordion.Header>
                <Accordion.Trigger className="flex items-center justify-between w-full p-6 hover:bg-muted/5 transition-colors">
                  <span>What types of retail environments do you support?</span>
                  <ChevronDown className="text-primary transition-transform duration-300 [&[data-state=open]]:rotate-180" size={20} />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-6 text-muted-foreground">
                Our platform supports grocery stores, convenience stores, drug stores, mass merchandisers, specialty retail, and consumer electronics stores. We can monitor any category including food, beverage, health & beauty, household goods, and more.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-3" className="bg-card rounded-xl border border-border overflow-hidden">
              <Accordion.Header>
                <Accordion.Trigger className="flex items-center justify-between w-full p-6 hover:bg-muted/5 transition-colors">
                  <span>How quickly can we deploy across our store network?</span>
                  <ChevronDown className="text-primary transition-transform duration-300 [&[data-state=open]]:rotate-180" size={20} />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-6 text-muted-foreground">
                Pilot deployments typically start within 2 weeks. Full rollouts vary based on store count, but most clients deploy 100-200 stores per month. Our mobile-first approach minimizes hardware installation requirements, accelerating deployment timelines.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-4" className="bg-card rounded-xl border border-border overflow-hidden">
              <Accordion.Header>
                <Accordion.Trigger className="flex items-center justify-between w-full p-6 hover:bg-muted/5 transition-colors">
                  <span>What data privacy and security measures do you have?</span>
                  <ChevronDown className="text-primary transition-transform duration-300 [&[data-state=open]]:rotate-180" size={20} />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-6 text-muted-foreground">
                We are ISO 27001 certified for information security management. All data is encrypted in transit and at rest. We anonymize shopper analytics data and comply with GDPR, CCPA, and regional privacy regulations. Detailed security documentation is available under NDA.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl p-12 border border-primary/30 text-center">
            <h2 className="mb-4">Ready to Transform Your Retail Operations?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              See how Clobotics can increase your sales and compliance
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transition-colors"
            >
              Schedule Demo
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
