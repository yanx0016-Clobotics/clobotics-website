import { Link } from "react-router";
import { Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img
                src="https://clobotics.com/wp-content/uploads/2020/08/clobotics-logo.svg"
                alt="Clobotics"
                className="h-8"
              />
            </div>
            <p className="text-muted-foreground mb-4">
              Physical AI for the World's Most Critical Operations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/wind-services" className="text-muted-foreground hover:text-primary transition-colors">
                  Wind Services
                </Link>
              </li>
              <li>
                <Link to="/retail-services" className="text-muted-foreground hover:text-primary transition-colors">
                  Retail Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Global Offices</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Singapore (HQ)</li>
              <li>Seattle, USA</li>
              <li>Shanghai, China</li>
              <li>Esbjerg, Denmark</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground">© 2026 Clobotics. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="text-muted-foreground">ISO 9001 Certified</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">ISO 27001 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
