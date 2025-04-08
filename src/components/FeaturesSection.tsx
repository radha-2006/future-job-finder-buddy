
import { Brain, Search, BookOpen, TrendingUp, RefreshCw, UserCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <Search className="h-6 w-6 text-brand-500" />,
    title: "Smart Job Search",
    description: "Find relevant jobs from multiple platforms including LinkedIn, Naukri, and Internshala with advanced filters."
  },
  {
    icon: <Brain className="h-6 w-6 text-brand-500" />,
    title: "AI-Powered Insights",
    description: "Get personalized career advice and market analysis based on your skills, experience, and goals."
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-brand-500" />,
    title: "Salary Trends",
    description: "Understand compensation trends in your field and negotiate better with data-backed salary insights."
  },
  {
    icon: <BookOpen className="h-6 w-6 text-brand-500" />,
    title: "Learning Resources",
    description: "Discover the skills you need to advance and access targeted learning materials to upskill quickly."
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-brand-500" />,
    title: "Career Path Planning",
    description: "Visualize potential career paths and learn what steps you need to take to reach your goals."
  },
  {
    icon: <UserCheck className="h-6 w-6 text-brand-500" />,
    title: "Resume Analysis",
    description: "Get AI feedback on your resume and learn how to improve it for specific job applications."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Supercharge Your Job Search With AI
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform combines the best job listings with powerful AI tools to give you the edge in your career journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/40 shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
