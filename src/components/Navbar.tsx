
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, Search, TrendingUp, User } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-brand-500" />
          <Link to="/" className="text-xl font-bold text-brand-600">
            CareerCompass<span className="text-brand-400">AI</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/jobs" className="text-sm font-medium transition-colors hover:text-primary">
            Find Jobs
          </Link>
          <Link to="/insights" className="text-sm font-medium transition-colors hover:text-primary">
            AI Insights
          </Link>
          <Link to="/resources" className="text-sm font-medium transition-colors hover:text-primary">
            Resources
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden" asChild>
            <Link to="/search">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Link>
          </Button>
          <Button variant="outline" className="hidden md:flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Sign In</span>
          </Button>
          <Button className="hidden md:inline-flex">Get Started</Button>
        </div>
      </div>
    </header>
  );
}
