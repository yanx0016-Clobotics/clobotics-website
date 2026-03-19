import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Radar,
  Bot,
  Zap,
  Wrench,
  Database,
  Globe,
  ShieldCheck,
} from "lucide-react";

const productCards = [
  {
    name: "IBIS",
    icon: Radar,
    subtitle: "External Blade Drone Inspection",
    image: "https://clobotics.com/wp-content/uploads/2022/07/inspection.png",
    blurb:
      "Autonomous drone inspection with LiDAR navigation, stabilized imaging, and high-throughput field operations.",
    metrics: ["500,000+ turbines inspected", "~15 min per turbine", "Up to 31/day onshore, 18/day offshore"],
  },
  {
    name: "KIWI",
    icon: Bot,
    subtitle: "Internal Blade Robot Inspection",
    image: "https://clobotics.com/wp-content/uploads/2024/05/Clobotics-Crawler-Image.jpg",
    blurb:
      "Autonomous internal blade inspection with edge AI and high-resolution imaging for deeper condition visibility.",
    metrics: ["10–20 min per blade", "26MP imaging", "Up to 0.25 mm/pixel resolution"],
  },
  {
    name: "Hummingbird",
    icon: Zap,
    subtitle: "Lighting Protection (LPS) Drone Inspection",
    image: "/images/lps.jpg",
    imageClass: "object-[center_90%]", 
    blurb:
      "Semi-automated LPS inspection with high-precision resistance measurements and integrated predictive alerts.",
    metrics: ["<0.001 Ohm precision", "~30 min per turbine", "Single-operator workflow"],
  },
  {
    name: "SPARROW",
    icon: Wrench,
    subtitle: "Robotic Blade Repair",
    image: "/images/sparrow.png",
    blurb:
      "Drone-deployed LEP repair robot with standardized grinding and multi-layer coating for repeatable quality.",
    metrics: ["5–8 blades/day", "~4 hours per turbine", "Automated process, no human climbing"],
  },
];

const workflow = [
  "Inspect externally (IBIS)",
  "Inspect internally (KIWI)",
  "Verify LPS integrity (Hummingbird)",
  "Prioritize work in IRIS",
  "Repair with SPARROW",
  "Track lifecycle outcomes in IRIS",
];

const customerLogos = [
  { name: "China Huaneng", src: "https://clobotics.com/wp-content/uploads/2020/10/China-Huaneng.jpg" },
  { name: "Enercon", src: "https://clobotics.com/wp-content/uploads/2020/10/enercon_en.png" },
  { name: "European Energy", src: "https://clobotics.com/wp-content/uploads/2020/10/European-Energy-.png" },
  { name: "Eurus Energy", src: "https://clobotics.com/wp-content/uploads/2020/10/Eurus-Energy.png" },
  { name: "Pacific Hydro", src: "https://clobotics.com/wp-content/uploads/2020/10/Pacific-Hydro.jpg" },
  { name: "Statkraft", src: "https://clobotics.com/wp-content/uploads/2020/10/Statkraft.png" },
  { name: "Vattenfall", src: "https://clobotics.com/wp-content/uploads/2020/10/Vattenfall.png" },
  { name: "Nordex", src: "https://clobotics.com/wp-content/uploads/2020/10/Nordex.png" },
  { name: "Siemens Gamesa", src: "https://clobotics.com/wp-content/uploads/2020/10/SiemensGamesa.png" },
  { name: "GE Renewables", src: "https://clobotics.com/wp-content/uploads/2020/10/GE-Renewables.png" },
  { name: "LM Wind Power", src: "https://clobotics.com/wp-content/uploads/2020/10/LM-Wind-Power.jpg" },
  { name: "Goldwind", src: "https://clobotics.com/wp-content/uploads/2020/10/Goldwind.png" },
  { name: "RWE", src: "https://clobotics.com/wp-content/uploads/2020/10/RWE.png" },
  { name: "China Energy", src: "https://clobotics.com/wp-content/uploads/2020/10/China-Energy.jpg" },
  { name: "Acciona", src: "https://clobotics.com/wp-content/uploads/2020/10/Acciona.png" },
  { name: "Ocean Breeze", src: "https://clobotics.com/wp-content/uploads/2020/10/Ocean-Breeze.png" },
  { name: "Scottish Power Renewables", src: "https://clobotics.com/wp-content/uploads/2020/10/Scottish-Power-Renewables.jpeg" },
];

function CountUp({ target = 500000, durationMs = 2200 }: { target?: number; durationMs?: number }) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const wrapRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!wrapRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(wrapRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, durationMs]);

  return <span ref={wrapRef}>{Math.max(0, value).toLocaleString()}+</span>;
}


export default function WindServices() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://clobotics.com/wp-content/uploads/2022/08/Turbine_Close-Up.jpg"
            alt="Clobotics Wind Intelligence"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>

        <div className="max-w-7xl mx-auto max-w-4xl">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            Clobotics Wind Services
          </div>
          <h1 className="text-4xl md:text-6xl mb-6">
            Physical AI for Wind O&amp;M Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Inspection, predictive analytics, and robotic repair — all feeding into IRIS, our centralized wind asset intelligence platform.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 border border-border hover:bg-card px-8 py-3 rounded-lg transition-colors"
            >
              Explore Wind Products
            </a>
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

      {/* Overview */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 bg-card/30">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-8 border border-primary/20">
          <h2 className="mb-3">Full-Stack Wind O&amp;M, Unified in IRIS</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Clobotics is the only provider combining external blade inspection, internal blade inspection, lightning protection inspection, and robotic blade repair into one closed-loop data workflow. Operators use IRIS to monitor blade health continuously, correlate internal/external defects, predict failures, and optimize maintenance across regions, turbine types, and portfolios.
          </p>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="mb-3">Products &amp; Capabilities</h2>
            <p className="text-muted-foreground text-lg">Four field robots. One intelligence platform.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productCards.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.name} className="bg-card rounded-2xl border border-border p-6 overflow-hidden">
                  <div className="-mx-6 -mt-6 mb-5 h-40 overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.name} product image`}
                      className={`w-full h-full object-cover ${p.imageClass ?? "object-center"} transition-transform duration-500 hover:scale-105`}
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3>{p.name}</h3>
                      <p className="text-sm text-primary">{p.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{p.blurb}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {p.metrics.map((m) => (
                      <li key={m}>• {m}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IRIS */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden bg-card rounded-2xl border border-border p-8">
            <div className="pointer-events-none absolute -top-24 -right-20 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-10 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <Database size={20} />
              </div>
              <div>
                <h2>IRIS — Centralized Wind Asset Intelligence</h2>
                <p className="text-sm text-muted-foreground">From field signals to portfolio-level maintenance decisions.</p>
              </div>
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-5 bg-background/50 border border-border rounded-xl p-5">
                <p className="text-sm text-primary mb-4">IRIS Intelligence Flow</p>
                <div className="space-y-3">
                  <div className="rounded-lg border border-border bg-card/80 p-3">
                    <p className="text-xs text-muted-foreground mb-1">Input Layer</p>
                    <p className="text-sm">Inspection images, LPS measurements, repair records</p>
                  </div>
                  <div className="flex justify-center text-primary/70 text-xs">↓</div>
                  <div className="rounded-lg border border-border bg-card/80 p-3">
                    <p className="text-xs text-muted-foreground mb-1">AI Analysis Layer</p>
                    <p className="text-sm">Defect detection, severity scoring, progression modeling</p>
                  </div>
                  <div className="flex justify-center text-primary/70 text-xs">↓</div>
                  <div className="rounded-lg border border-border bg-card/80 p-3">
                    <p className="text-xs text-muted-foreground mb-1">Decision Layer</p>
                    <p className="text-sm">Prioritized maintenance actions and portfolio reporting</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl border border-border bg-background/40 p-4">
                  <p className="text-primary mb-1">Digital Twin</p>
                  <p className="text-muted-foreground">Turbine-by-turbine health baseline and historical context.</p>
                </div>
                <div className="rounded-xl border border-border bg-background/40 p-4">
                  <p className="text-primary mb-1">Defect Timelines</p>
                  <p className="text-muted-foreground">Track cracks, erosion, and progression over inspection cycles.</p>
                </div>
                <div className="rounded-xl border border-border bg-background/40 p-4">
                  <p className="text-primary mb-1">Cross-Source Correlation</p>
                  <p className="text-muted-foreground">Connect internal and external findings for stronger diagnosis.</p>
                </div>
                <div className="rounded-xl border border-border bg-background/40 p-4">
                  <p className="text-primary mb-1">Predictive Scheduling</p>
                  <p className="text-muted-foreground">Prioritize work orders by risk, severity, and production impact.</p>
                </div>
                <div className="rounded-xl border border-border bg-background/40 p-4 md:col-span-2">
                  <p className="text-primary mb-1">Portfolio Reporting</p>
                  <p className="text-muted-foreground">Automated reporting for regional teams, executives, and O&M planning.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="mb-3">Inspection → Repair → Intelligence Closed Loop</h2>
            <p className="text-muted-foreground text-lg">Standardized execution with lifecycle traceability.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {workflow.map((step, i) => (
              <div key={step} className="bg-card border border-border rounded-xl p-5">
                <div className="text-xs text-primary mb-2">STEP {i + 1}</div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scale & impact */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="mb-3">Global Scale &amp; Impact</h2>
            <p className="text-muted-foreground text-lg">Built for multi-site, multi-region wind portfolios.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-card rounded-2xl p-7 border border-border">
              <div className="text-4xl mb-2 text-primary">31+</div>
              <div className="text-muted-foreground">Countries deployed</div>
            </div>
            <div className="bg-card rounded-2xl p-7 border border-border">
              <div className="text-4xl mb-2 text-primary">Since 2018</div>
              <div className="text-muted-foreground">Offshore operational experience</div>
            </div>
            <div className="bg-card rounded-2xl p-7 border border-border">
              <div className="text-4xl mb-2 text-primary"><CountUp target={500000} /></div>
              <div className="text-muted-foreground">Turbines inspected</div>
            </div>
            <div className="bg-card rounded-2xl p-7 border border-border">
              <div className="text-4xl mb-2 text-primary">Closed loop</div>
              <div className="text-muted-foreground">Inspection, repair, and data intelligence</div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-muted-foreground">
            <div className="bg-card border border-border rounded-xl p-5 flex items-start gap-3">
              <Globe className="text-primary mt-0.5" size={18} />
              <span>Coverage across Europe, North America, APAC, Latin America, and Africa (if there are turbines in Antarctica, we’ll be there too)</span>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 flex items-start gap-3">
              <ShieldCheck className="text-primary mt-0.5" size={18} />
              <span>Improved safety through automation and reduced human climbing exposure</span>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 flex items-start gap-3">
              <Database className="text-primary mt-0.5" size={18} />
              <span>Unified real-time inspection and repair data across wind farms</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clobotics */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="mb-3">Why Clobotics</h2>
            <p className="text-muted-foreground text-lg">Three advantages that matter to wind operators.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl p-7 border border-border">
              <h3 className="mb-3">Full Lifecycle Coverage</h3>
              <p className="text-muted-foreground">
                One partner across external inspection, internal inspection, LPS inspection, and robotic repair.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-7 border border-border">
              <h3 className="mb-3">Closed-Loop Intelligence</h3>
              <p className="text-muted-foreground">
                IRIS unifies inspection and repair data into digital-twin intelligence, trend tracking, and predictive planning.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-7 border border-border">
              <h3 className="mb-3">Scaled Global Execution</h3>
              <p className="text-muted-foreground">
                Proven multi-region operations with standardized workflows designed for safety, consistency, and uptime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer logos */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-card/30 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="mb-3">Trusted by Global Wind Leaders</h2>
            <p className="text-muted-foreground">Selected customers and ecosystem leaders</p>
          </div>

          <div className="space-y-4">
            <div className="relative overflow-hidden">
              <div
                className="flex w-max gap-5"
                style={{ animation: "logoMarqueeLeft 42s linear infinite" }}
              >
                {[...customerLogos, ...customerLogos].map((logo, idx) => (
                  <div
                    key={`l-${logo.name}-${idx}`}
                    className="bg-card border border-border rounded-2xl p-6 flex items-center justify-center h-24 min-w-[220px]"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-10 w-auto object-contain grayscale contrast-125 opacity-85"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div
                className="flex w-max gap-5"
                style={{ animation: "logoMarqueeRight 38s linear infinite" }}
              >
                {[...customerLogos.slice().reverse(), ...customerLogos.slice().reverse()].map((logo, idx) => (
                  <div
                    key={`r-${logo.name}-${idx}`}
                    className="bg-card border border-border rounded-2xl p-6 flex items-center justify-center h-24 min-w-[220px]"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-10 w-auto object-contain grayscale contrast-125 opacity-85"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes logoMarqueeLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes logoMarqueeRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl p-12 border border-primary/30 text-center">
            <h2 className="mb-4">Bring Full-Stack Wind Blade Intelligence to Your Portfolio</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              From drone inspection to robotic repair, Clobotics helps operators improve uptime, reduce risk, and standardize maintenance decisions at scale.
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
    </div>
  );
}
