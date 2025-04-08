
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, Award, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function InsightsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            AI-Powered Career Insights
          </h2>
          <p className="text-lg text-muted-foreground">
            Get personalized recommendations and market trends analysis to make informed career decisions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-border/40">
            <CardHeader>
              <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center mb-4">
                <TrendingUp className="h-5 w-5 text-brand-500" />
              </div>
              <CardTitle>Skill Demand Analysis</CardTitle>
              <CardDescription className="text-base">
                See which skills are trending in your field and where to focus your learning
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Data Science</span>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-brand-500 rounded-full" style={{width: "92%"}} />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Cloud Computing</span>
                    <span className="text-sm font-medium">87%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-brand-500 rounded-full" style={{width: "87%"}} />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">UI/UX Design</span>
                    <span className="text-sm font-medium">78%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-brand-500 rounded-full" style={{width: "78%"}} />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link to="/insights/skills">
                  View Full Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="border-border/40">
            <CardHeader>
              <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center mb-4">
                <BarChart3 className="h-5 w-5 text-brand-500" />
              </div>
              <CardTitle>Salary Benchmarks</CardTitle>
              <CardDescription className="text-base">
                Compare compensation across roles, companies and experience levels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Junior (0-2 yrs)</span>
                    <span className="text-sm font-medium">₹5-8 LPA</span>
                  </div>
                  <div className="h-8 rounded-lg bg-brand-100 flex items-center px-3">
                    <div className="w-full bg-transparent text-xs font-medium">Your market value: ₹7.2 LPA</div>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Mid-level (3-5 yrs)</span>
                    <span className="text-sm font-medium">₹12-18 LPA</span>
                  </div>
                  <div className="h-8 rounded-lg bg-muted flex items-center px-3">
                    <div className="w-full bg-transparent text-xs">Projected in 2 years</div>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Senior (6+ yrs)</span>
                    <span className="text-sm font-medium">₹24-35 LPA</span>
                  </div>
                  <div className="h-8 rounded-lg bg-muted flex items-center px-3">
                    <div className="w-full bg-transparent text-xs">Projected in 5 years</div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link to="/insights/salary">
                  View Full Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="border-border/40">
            <CardHeader>
              <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center mb-4">
                <Award className="h-5 w-5 text-brand-500" />
              </div>
              <CardTitle>Career Path Roadmap</CardTitle>
              <CardDescription className="text-base">
                Discover potential career paths and advancement opportunities in your field
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-brand-500 flex items-center justify-center">
                  <span className="text-xs text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Junior Developer</h4>
                  <p className="text-xs text-muted-foreground">Focus on core skills and team collaboration</p>
                </div>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-brand-300 flex items-center justify-center">
                  <span className="text-xs text-brand-700 font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Mid-level Developer</h4>
                  <p className="text-xs text-muted-foreground">Lead features and mentor juniors</p>
                </div>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-xs text-muted-foreground font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Senior Developer</h4>
                  <p className="text-xs text-muted-foreground">System architecture and technical leadership</p>
                </div>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-xs text-muted-foreground font-bold">4</span>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Tech Lead / Architect</h4>
                  <p className="text-xs text-muted-foreground">Strategic technical direction and team leadership</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link to="/insights/career-path">
                  View Full Roadmap
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="font-medium">
            <Link to="/insights">
              <Zap className="mr-2 h-5 w-5" />
              Get Personalized Insights
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
