
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Building, MapPin, Clock, ArrowRight, BookmarkPlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Mock job data
const mockJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    location: "Bangalore, India",
    type: "Full-time",
    postedAt: "2 days ago",
    salary: "₹18-25 LPA",
    tags: ["React", "TypeScript", "Redux"],
    source: "LinkedIn"
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "Analytics Innovate",
    location: "Remote",
    type: "Full-time",
    postedAt: "1 day ago",
    salary: "₹15-22 LPA",
    tags: ["Python", "Machine Learning", "SQL"],
    source: "Naukri"
  },
  {
    id: 3,
    title: "Product Manager",
    company: "Global Products Inc.",
    location: "Mumbai, India",
    type: "Full-time",
    postedAt: "Just now",
    salary: "₹20-30 LPA",
    tags: ["Product Strategy", "Agile", "B2B"],
    source: "LinkedIn"
  },
  {
    id: 4,
    title: "UX/UI Design Intern",
    company: "Creative Solutions",
    location: "Delhi, India",
    type: "Internship",
    postedAt: "3 days ago",
    salary: "₹25-30K per month",
    tags: ["Figma", "User Research", "Prototyping"],
    source: "Internshala"
  }
];

export function JobListSection() {
  const [jobs, setJobs] = useState(mockJobs);

  return (
    <section className="py-16 md:py-24 bg-brand-50/50">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
              Featured Job Opportunities
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover top positions matched to your profile from multiple sources
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/jobs">
              View all jobs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <Card key={job.id} className="job-card border-border/40">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge variant="outline" className="mb-2 font-normal">
                      {job.source}
                    </Badge>
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <div className="flex items-center gap-1 mt-1">
                      <Building className="h-4 w-4 text-muted-foreground" />
                      <CardDescription className="text-base">
                        {job.company}
                      </CardDescription>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <BookmarkPlus className="h-5 w-5" />
                    <span className="sr-only">Save job</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Briefcase className="h-4 w-4 mr-1" />
                    {job.type}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {job.postedAt}
                  </div>
                  <div className="flex items-center text-sm font-medium text-foreground">
                    {job.salary}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to={`/job/${job.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
