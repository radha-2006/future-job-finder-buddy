
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-brand-600 to-brand-800 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ready to accelerate your career with AI-powered insights?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Join thousands of professionals who are making smarter career moves with CareerCompass AI.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="font-medium">
              <Link to="/jobs">
                Browse Jobs
              </Link>
            </Button>
            <Button asChild size="lg" className="font-medium bg-white text-brand-700 hover:bg-white/90 hover:text-brand-800">
              <Link to="/register">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
