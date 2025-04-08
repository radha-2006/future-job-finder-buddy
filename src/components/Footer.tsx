
import { Link } from "react-router-dom";
import { Briefcase, Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-brand-500" />
              <span className="text-xl font-bold text-brand-600">
                CareerCompass<span className="text-brand-400">AI</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Your AI-powered career assistant helping you navigate the job market with confidence.
            </p>
            <div className="flex space-x-3">
              <Link to="#" className="text-muted-foreground hover:text-brand-500">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-brand-500">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-brand-500">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-brand-500">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-16 lg:col-span-3">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/jobs" className="text-muted-foreground hover:text-foreground">
                    Find Jobs
                  </Link>
                </li>
                <li>
                  <Link to="/insights" className="text-muted-foreground hover:text-foreground">
                    AI Insights
                  </Link>
                </li>
                <li>
                  <Link to="/resources" className="text-muted-foreground hover:text-foreground">
                    Career Resources
                  </Link>
                </li>
                <li>
                  <Link to="/resume" className="text-muted-foreground hover:text-foreground">
                    Resume Builder
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-muted-foreground hover:text-foreground">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">contact@careercompass.ai</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CareerCompassAI. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Powered by AI insights and industry data
          </p>
        </div>
      </div>
    </footer>
  );
}
