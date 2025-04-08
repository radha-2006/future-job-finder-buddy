
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, TrendingUp, Award, Target } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-background py-16 md:py-24">
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Navigate Your Career Journey with 
              <span className="text-brand-500 block">AI-Powered Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Find the perfect job and understand market trends with personalized AI analysis that helps you make smarter career decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="font-medium">
                <Link to="/jobs">
                  <Search className="mr-2 h-5 w-5" />
                  Find Jobs
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="font-medium">
                <Link to="/insights">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Get Career Insights
                </Link>
              </Button>
            </div>
            
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-brand-200 border-2 border-background" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">10,000+</span> professionals found their dream jobs with our help
              </p>
            </div>
          </div>
          
          <div className="relative h-[400px] lg:h-[500px] rounded-lg bg-gradient-to-br from-brand-100 to-brand-50 shadow-xl overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4 p-6">
              <div className="bg-white rounded-lg p-4 shadow-lg animate-pulse-subtle">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-brand-500" />
                  <h3 className="font-medium">Salary Insights</h3>
                </div>
                <div className="w-full h-24 bg-brand-50 rounded-md" />
                <div className="mt-4 space-y-2">
                  <div className="h-2 w-full bg-muted rounded-full" />
                  <div className="h-2 w-3/4 bg-muted rounded-full" />
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-lg animate-pulse-subtle [animation-delay:0.25s]">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-4 w-4 text-brand-500" />
                  <h3 className="font-medium">Top Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Python", "React", "Data Analysis", "Communication"].map((skill) => (
                    <span key={skill} className="text-xs bg-brand-100 text-brand-700 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-2 w-full bg-muted rounded-full" />
                  <div className="h-2 w-1/2 bg-muted rounded-full" />
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-lg animate-pulse-subtle [animation-delay:0.5s]">
                <div className="flex items-center gap-2 mb-2">
                  <Search className="h-4 w-4 text-brand-500" />
                  <h3 className="font-medium">Job Matches</h3>
                </div>
                <div className="mt-2 space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand-500" />
                      <div className="h-2 w-full bg-muted rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-lg animate-pulse-subtle [animation-delay:0.75s]">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-4 w-4 text-brand-500" />
                  <h3 className="font-medium">Career Path</h3>
                </div>
                <div className="w-full h-24 bg-brand-50 rounded-md" />
                <div className="mt-4 space-y-2">
                  <div className="h-2 w-full bg-muted rounded-full" />
                  <div className="h-2 w-2/3 bg-muted rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand-100/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
