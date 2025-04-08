
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Building, MapPin, Clock, Search, Filter, BookmarkPlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock job data (more extensive)
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
  },
  {
    id: 5,
    title: "Backend Developer",
    company: "CloudTech Services",
    location: "Hyderabad, India",
    type: "Full-time",
    postedAt: "1 week ago",
    salary: "₹16-22 LPA",
    tags: ["Node.js", "MongoDB", "AWS"],
    source: "Naukri"
  },
  {
    id: 6,
    title: "Marketing Specialist",
    company: "Digital Branding Co.",
    location: "Pune, India",
    type: "Full-time",
    postedAt: "3 days ago",
    salary: "₹8-12 LPA",
    tags: ["Digital Marketing", "SEO", "Content Strategy"],
    source: "LinkedIn"
  },
  {
    id: 7,
    title: "DevOps Engineer",
    company: "InfraCloud Technologies",
    location: "Remote",
    type: "Full-time",
    postedAt: "5 days ago",
    salary: "₹18-28 LPA",
    tags: ["Kubernetes", "Docker", "CI/CD"],
    source: "LinkedIn"
  },
  {
    id: 8,
    title: "HR Manager",
    company: "People First Inc.",
    location: "Gurgaon, India",
    type: "Full-time",
    postedAt: "1 week ago",
    salary: "₹14-18 LPA",
    tags: ["Recruitment", "Employee Relations", "HR Policy"],
    source: "Naukri"
  }
];

export default function Jobs() {
  const [jobs, setJobs] = useState(mockJobs);
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-brand-50 to-background py-8 md:py-12">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Your Perfect Job</h1>
              <p className="text-lg text-muted-foreground">
                Search positions from top companies across India and beyond
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-4 mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      type="text" 
                      placeholder="Job title, skills or keywords" 
                      className="pl-9"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                  </div>
                  <Select defaultValue="location">
                    <SelectTrigger className="w-full md:w-[180px]">
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="hyderabad">Hyderabad</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="gap-2">
                    <Search className="h-4 w-4" />
                    Search Jobs
                  </Button>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-secondary">Full-time</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-secondary">Part-time</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-secondary">Remote</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-secondary">Internship</Badge>
                  <div className="ml-auto flex items-center gap-1 text-sm text-muted-foreground">
                    <Filter className="h-3 w-3" />
                    <span>More filters</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-8 md:py-12">
          <div className="container">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">
                {jobs.length} Jobs Available
              </h2>
              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest first</SelectItem>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="salary-high">Salary (high to low)</SelectItem>
                  <SelectItem value="salary-low">Salary (low to high)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {jobs.map((job) => (
                <Card key={job.id} className="job-card border-border/40">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge variant="outline" className="mb-2 font-normal">
                          {job.source}
                        </Badge>
                        <CardTitle className="text-xl">
                          <Link to={`/job/${job.id}`} className="hover:text-brand-600">
                            {job.title}
                          </Link>
                        </CardTitle>
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
            
            <div className="mt-10 flex justify-center">
              <Button variant="outline" className="gap-2">
                Load More Jobs
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
