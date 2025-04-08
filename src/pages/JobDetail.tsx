
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building, MapPin, Clock, CreditCard, ExternalLink, Bookmark } from "lucide-react";
import { toast } from "sonner";

// In a real app, this would come from an API
const mockJob = {
  id: "1",
  title: "Senior React Developer",
  company: "TechCorp Solutions",
  location: "San Francisco, CA (Remote Available)",
  salary: "$120,000 - $150,000",
  type: "Full-time",
  posted: "2 days ago",
  description: `
# About the Role

We're looking for a Senior React Developer to join our growing team. You'll work on building and maintaining our customer-facing web applications, collaborating with designers, product managers, and other developers.

## Responsibilities

- Build responsive and accessible user interfaces using React
- Write clean, maintainable, and testable code
- Collaborate with designers to implement UI/UX designs
- Work with product managers to understand requirements
- Mentor junior developers

## Requirements

- 5+ years of experience with React
- Strong understanding of JavaScript, HTML, and CSS
- Experience with state management libraries (Redux, Mobx, etc.)
- Experience with testing frameworks
- Good communication skills
  
## Benefits

- Competitive salary
- Remote work options
- Health, dental, and vision insurance
- 401(k) matching
- Unlimited PTO
- Professional development budget
  `,
  skills: ["React", "TypeScript", "Redux", "Jest", "HTML/CSS", "Git"],
  benefits: ["Health Insurance", "Remote Work", "401(k) Matching", "Professional Development"],
};

const JobDetail = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const [job, setJob] = useState(mockJob);
  const [isSaved, setIsSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [jobId]);

  const handleSaveJob = () => {
    setIsSaved(!isSaved);
    toast.success(isSaved ? "Job removed from saved jobs" : "Job saved successfully!");
  };

  const handleApply = () => {
    toast.success("Application submitted successfully!");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container py-8 flex items-center justify-center">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-48 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-72 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-60 mb-6"></div>
            <div className="h-32 bg-gray-200 rounded mb-6"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="mb-6">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/jobs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Jobs
            </Link>
          </Button>
          
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold">{job.title}</h1>
              <div className="flex items-center mt-2 text-muted-foreground">
                <Building className="h-4 w-4 mr-1" />
                <span className="mr-4">{job.company}</span>
                <MapPin className="h-4 w-4 mr-1" />
                <span>{job.location}</span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button 
                variant={isSaved ? "default" : "outline"}
                onClick={handleSaveJob}
              >
                <Bookmark className="mr-2 h-4 w-4" />
                {isSaved ? "Saved" : "Save Job"}
              </Button>
              <Button onClick={handleApply}>
                Apply Now
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-6 mt-6">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center">
              <CreditCard className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>{job.salary}</span>
            </div>
            <div className="text-muted-foreground">
              Posted {job.posted}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              {job.description.split('\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-3">Key Skills</h3>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <div key={skill} className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-3">Benefits</h3>
              <ul className="space-y-2">
                {job.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            
            <Button onClick={handleApply} className="w-full">
              Apply Now
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobDetail;
