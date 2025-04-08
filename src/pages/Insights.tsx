
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, BarChart3, Award, Clock, Zap, LineChart, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Basic chart component for demonstration
const SimpleChart = ({ color = "brand" }: { color?: string }) => (
  <div className="w-full h-32 flex items-end justify-between gap-1">
    {[40, 25, 60, 45, 80, 65, 75, 50, 90, 70, 85].map((value, i) => (
      <div 
        key={i} 
        className={`bg-${color}-500/80 rounded-t-sm w-full`} 
        style={{ height: `${value}%` }} 
      />
    ))}
  </div>
);

export default function Insights() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-brand-50 to-background py-8 md:py-12">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Career Insights</h1>
              <p className="text-lg text-muted-foreground">
                Make informed career decisions with personalized analytics and market trends
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-8 md:py-12">
          <div className="container">
            <Tabs defaultValue="skills" className="w-full">
              <div className="flex justify-between items-center mb-6">
                <TabsList className="bg-muted/60">
                  <TabsTrigger value="skills" className="flex items-center gap-2 px-5">
                    <Award className="h-4 w-4" />
                    <span>Skills</span>
                  </TabsTrigger>
                  <TabsTrigger value="salary" className="flex items-center gap-2 px-5">
                    <BarChart3 className="h-4 w-4" />
                    <span>Salary</span>
                  </TabsTrigger>
                  <TabsTrigger value="trends" className="flex items-center gap-2 px-5">
                    <TrendingUp className="h-4 w-4" />
                    <span>Trends</span>
                  </TabsTrigger>
                  <TabsTrigger value="learning" className="flex items-center gap-2 px-5">
                    <BookOpen className="h-4 w-4" />
                    <span>Learning</span>
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="skills" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-brand-500" />
                      In-Demand Skills for Your Career
                    </CardTitle>
                    <CardDescription>
                      Based on 10,000+ job postings in your field over the last 3 months
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Technical Skills</h3>
                        <div className="space-y-4">
                          <div className="space-y-1">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                <Badge variant="outline">Most in-demand</Badge>
                                <span className="font-medium">Data Science</span>
                              </div>
                              <span className="font-semibold">92%</span>
                            </div>
                            <div className="h-2 rounded-full bg-muted overflow-hidden">
                              <div className="h-full bg-brand-500 rounded-full" style={{width: "92%"}} />
                            </div>
                          </div>
                          
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="font-medium">Cloud Computing (AWS/Azure)</span>
                              <span className="font-semibold">87%</span>
                            </div>
                            <div className="h-2 rounded-full bg-muted overflow-hidden">
                              <div className="h-full bg-brand-500 rounded-full" style={{width: "87%"}} />
                            </div>
                          </div>
                          
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="font-medium">React.js</span>
                              <span className="font-semibold">84%</span>
                            </div>
                            <div className="h-2 rounded-full bg-muted overflow-hidden">
                              <div className="h-full bg-brand-500 rounded-full" style={{width: "84%"}} />
                            </div>
                          </div>
                          
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="font-medium">DevOps</span>
                              <span className="font-semibold">82%</span>
                            </div>
                            <div className="h-2 rounded-full bg-muted overflow-hidden">
                              <div className="h-full bg-brand-500 rounded-full" style={{width: "82%"}} />
                            </div>
                          </div>
                          
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="font-medium">Cybersecurity</span>
                              <span className="font-semibold">79%</span>
                            </div>
                            <div className="h-2 rounded-full bg-muted overflow-hidden">
                              <div className="h-full bg-brand-500 rounded-full" style={{width: "79%"}} />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Soft Skills</h3>
                        <div className="space-y-4">
                          <div className="space-y-1">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                <Badge variant="outline">Most in-demand</Badge>
                                <span className="font-medium">Leadership</span>
                              </div>
                              <span className="font-semibold">94%</span>
                            </div>
                            <div className="h-2 rounded-full bg-muted overflow-hidden">
                              <div className="h-full bg-brand-400 rounded-full" style={{width: "94%"}} />
                            </div>
                          </div>
                          
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="font-medium">Communication</span>
                              <span className="font-semibold">91%</span>
                            </div>
                            <div className="h-2 rounded-full bg-muted overflow-hidden">
                              <div className="h-full bg-brand-400 rounded-full" style={{width: "91%"}} />
                            </div>
                          </div>
                          
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="font-medium">Problem Solving</span>
                              <span className="font-semibold">89%</span>
                            </div>
                            <div className="h-2 rounded-full bg-muted overflow-hidden">
                              <div className="h-full bg-brand-400 rounded-full" style={{width: "89%"}} />
                            </div>
                          </div>
                          
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="font-medium">Adaptability</span>
                              <span className="font-semibold">86%</span>
                            </div>
                            <div className="h-2 rounded-full bg-muted overflow-hidden">
                              <div className="h-full bg-brand-400 rounded-full" style={{width: "86%"}} />
                            </div>
                          </div>
                          
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="font-medium">Teamwork</span>
                              <span className="font-semibold">85%</span>
                            </div>
                            <div className="h-2 rounded-full bg-muted overflow-hidden">
                              <div className="h-full bg-brand-400 rounded-full" style={{width: "85%"}} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 border-t pt-6">
                      <h3 className="text-lg font-medium mb-4">Your Skill Match Analysis</h3>
                      <div className="p-4 bg-brand-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-medium">Overall Skills Match Score</p>
                            <p className="text-sm text-muted-foreground">Based on your profile and market demand</p>
                          </div>
                          <div className="text-3xl font-bold text-brand-600">76%</div>
                        </div>
                        <div className="h-3 rounded-full bg-muted overflow-hidden">
                          <div className="h-full bg-brand-500 rounded-full" style={{width: "76%"}} />
                        </div>
                      </div>
                      
                      <div className="mt-6 grid md:grid-cols-2 gap-4">
                        <Card className="bg-muted/40">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">Skill Gaps to Address</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-1 text-sm">
                              <li className="flex items-center gap-2">
                                <Clock className="h-3 w-3 text-muted-foreground" />
                                <span>Cloud infrastructure (AWS/Azure)</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Clock className="h-3 w-3 text-muted-foreground" />
                                <span>Leadership and team management</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Clock className="h-3 w-3 text-muted-foreground" />
                                <span>CI/CD pipeline experience</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-muted/40">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">Your Competitive Advantages</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-1 text-sm">
                              <li className="flex items-center gap-2">
                                <Zap className="h-3 w-3 text-brand-500" />
                                <span>Strong React.js development skills</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Zap className="h-3 w-3 text-brand-500" />
                                <span>Data analysis and problem solving</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Zap className="h-3 w-3 text-brand-500" />
                                <span>Effective communication</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="text-center">
                  <Button asChild className="gap-2">
                    <Link to="/skills-assessment">
                      <Award className="h-4 w-4" />
                      Take Full Skills Assessment
                    </Link>
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="salary" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-brand-500" />
                      Salary Benchmarks and Compensation Insights
                    </CardTitle>
                    <CardDescription>
                      Industry salary data from over 50,000 professionals in your field
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-8">
                      <h3 className="text-lg font-medium mb-4">Salary Range by Experience Level</h3>
                      <SimpleChart />
                      <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                        <span>Entry (0-2 yrs)</span>
                        <span>Mid (3-5 yrs)</span>
                        <span>Senior (6+ yrs)</span>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardDescription>Entry Level (0-2 years)</CardDescription>
                          <CardTitle className="text-2xl">₹5-8 LPA</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-sm text-muted-foreground">Average: ₹6.5 LPA</p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <CardDescription>Mid Level (3-5 years)</CardDescription>
                          <CardTitle className="text-2xl">₹12-18 LPA</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-sm text-muted-foreground">Average: ₹15 LPA</p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <CardDescription>Senior Level (6+ years)</CardDescription>
                          <CardTitle className="text-2xl">₹24-35 LPA</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-sm text-muted-foreground">Average: ₹28 LPA</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="mt-8 border-t pt-6">
                      <h3 className="text-lg font-medium mb-4">Your Personalized Salary Analysis</h3>
                      <div className="p-4 bg-brand-50 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Your Market Value Range</p>
                            <p className="text-sm text-muted-foreground">Based on your skills, location, and experience</p>
                          </div>
                          <div className="text-3xl font-bold text-brand-600">₹16-20 LPA</div>
                        </div>
                      </div>
                      
                      <div className="mt-6 grid md:grid-cols-2 gap-4">
                        <Card className="bg-muted/40">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">Factors That Could Increase Your Value</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-1 text-sm">
                              <li className="flex items-center gap-2">
                                <TrendingUp className="h-3 w-3 text-brand-500" />
                                <span>Leadership or team management experience</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <TrendingUp className="h-3 w-3 text-brand-500" />
                                <span>Cloud certification (AWS/Azure)</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <TrendingUp className="h-3 w-3 text-brand-500" />
                                <span>Experience with enterprise clients</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-muted/40">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">Top Paying Industries</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-1 text-sm">
                              <li className="flex items-center gap-2">
                                <LineChart className="h-3 w-3 text-brand-500" />
                                <span>Finance & Banking: +15% premium</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <LineChart className="h-3 w-3 text-brand-500" />
                                <span>Healthcare Technology: +12% premium</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <LineChart className="h-3 w-3 text-brand-500" />
                                <span>E-commerce: +8% premium</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="text-center">
                  <Button asChild className="gap-2">
                    <Link to="/salary-calculator">
                      <BarChart3 className="h-4 w-4" />
                      Use Detailed Salary Calculator
                    </Link>
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="trends">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-brand-500" />
                      Industry and Job Market Trends
                    </CardTitle>
                    <CardDescription>
                      Latest insights into where your industry is heading
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Fastest Growing Job Categories</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div className="space-y-1">
                              <div className="flex justify-between">
                                <span className="font-medium">AI & Machine Learning Engineers</span>
                                <span className="font-semibold text-green-600">+45%</span>
                              </div>
                              <div className="h-2 rounded-full bg-muted overflow-hidden">
                                <div className="h-full bg-green-500 rounded-full" style={{width: "95%"}} />
                              </div>
                            </div>
                            
                            <div className="space-y-1">
                              <div className="flex justify-between">
                                <span className="font-medium">Cybersecurity Specialists</span>
                                <span className="font-semibold text-green-600">+38%</span>
                              </div>
                              <div className="h-2 rounded-full bg-muted overflow-hidden">
                                <div className="h-full bg-green-500 rounded-full" style={{width: "85%"}} />
                              </div>
                            </div>
                            
                            <div className="space-y-1">
                              <div className="flex justify-between">
                                <span className="font-medium">Data Scientists</span>
                                <span className="font-semibold text-green-600">+32%</span>
                              </div>
                              <div className="h-2 rounded-full bg-muted overflow-hidden">
                                <div className="h-full bg-green-500 rounded-full" style={{width: "80%"}} />
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="space-y-1">
                              <div className="flex justify-between">
                                <span className="font-medium">Cloud Architects</span>
                                <span className="font-semibold text-green-600">+28%</span>
                              </div>
                              <div className="h-2 rounded-full bg-muted overflow-hidden">
                                <div className="h-full bg-green-500 rounded-full" style={{width: "75%"}} />
                              </div>
                            </div>
                            
                            <div className="space-y-1">
                              <div className="flex justify-between">
                                <span className="font-medium">DevOps Engineers</span>
                                <span className="font-semibold text-green-600">+25%</span>
                              </div>
                              <div className="h-2 rounded-full bg-muted overflow-hidden">
                                <div className="h-full bg-green-500 rounded-full" style={{width: "70%"}} />
                              </div>
                            </div>
                            
                            <div className="space-y-1">
                              <div className="flex justify-between">
                                <span className="font-medium">Product Managers</span>
                                <span className="font-semibold text-green-600">+22%</span>
                              </div>
                              <div className="h-2 rounded-full bg-muted overflow-hidden">
                                <div className="h-full bg-green-500 rounded-full" style={{width: "65%"}} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t pt-6">
                        <h3 className="text-lg font-medium mb-4">Emerging Industry Trends</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base">Remote Work</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground mb-2">
                                65% of tech companies now offer permanent remote options, with hybrid models becoming the standard.
                              </p>
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Growing Trend</Badge>
                            </CardContent>
                          </Card>
                          
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base">AI Integration</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground mb-2">
                                78% of enterprises are investing in AI capabilities, creating new roles focused on implementation.
                              </p>
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">High Impact</Badge>
                            </CardContent>
                          </Card>
                          
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base">Sustainability Focus</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground mb-2">
                                Green tech initiatives expanding with 42% of companies setting sustainability roles and goals.
                              </p>
                              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Emerging</Badge>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                      
                      <div className="border-t pt-6">
                        <h3 className="text-lg font-medium mb-4">Your Industry Outlook</h3>
                        <div className="p-4 bg-brand-50 rounded-lg">
                          <div className="flex items-center gap-3 mb-4">
                            <TrendingUp className="h-5 w-5 text-green-600" />
                            <div>
                              <p className="font-medium">Technology Sector Growth</p>
                              <p className="text-sm text-muted-foreground">Projected to grow 15% over next 3 years</p>
                            </div>
                          </div>
                          <p className="text-sm">
                            The technology sector continues to show strong growth despite economic fluctuations. 
                            Your skills align well with emerging trends in cloud computing and data analytics, 
                            suggesting good job security and advancement opportunities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="learning">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-brand-500" />
                      Personalized Learning Recommendations
                    </CardTitle>
                    <CardDescription>
                      Upskill strategically with courses aligned to market demand
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="p-4 bg-brand-50 rounded-lg mb-6">
                        <div className="flex items-center gap-3 mb-2">
                          <Zap className="h-5 w-5 text-brand-600" />
                          <p className="font-medium">Recommended Learning Path</p>
                        </div>
                        <p className="text-sm">
                          Based on your current skills and career goals, we recommend focusing on 
                          cloud architecture and leadership skills to maximize your market value and promotion opportunities.
                        </p>
                      </div>
                      
                      <h3 className="text-lg font-medium mb-4">Priority Skills to Develop</h3>
                      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <Card>
                          <CardHeader className="pb-2">
                            <Badge variant="outline" className="mb-1 font-normal">High Impact</Badge>
                            <CardTitle className="text-base">AWS Cloud Architecture</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <p className="text-sm text-muted-foreground">
                              Master cloud infrastructure design and implementation
                            </p>
                            <div>
                              <div className="text-sm font-medium">Recommended Resources:</div>
                              <ul className="text-sm text-muted-foreground list-disc pl-4 mt-1 space-y-1">
                                <li>AWS Solutions Architect Certification</li>
                                <li>Cloud Architecture Patterns Course</li>
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardHeader className="pb-2">
                            <Badge variant="outline" className="mb-1 font-normal">Career Advancement</Badge>
                            <CardTitle className="text-base">Leadership & Team Management</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <p className="text-sm text-muted-foreground">
                              Develop skills to lead technical teams effectively
                            </p>
                            <div>
                              <div className="text-sm font-medium">Recommended Resources:</div>
                              <ul className="text-sm text-muted-foreground list-disc pl-4 mt-1 space-y-1">
                                <li>Technical Leadership Masterclass</li>
                                <li>Effective Team Communication Workshop</li>
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardHeader className="pb-2">
                            <Badge variant="outline" className="mb-1 font-normal">Trending</Badge>
                            <CardTitle className="text-base">Machine Learning Fundamentals</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <p className="text-sm text-muted-foreground">
                              Build a foundation in AI and machine learning concepts
                            </p>
                            <div>
                              <div className="text-sm font-medium">Recommended Resources:</div>
                              <ul className="text-sm text-muted-foreground list-disc pl-4 mt-1 space-y-1">
                                <li>Applied Machine Learning Course</li>
                                <li>Python for Data Science Specialization</li>
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <div className="border-t pt-6">
                        <h3 className="text-lg font-medium mb-4">Learning Trends in Your Field</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-base font-medium mb-2">Most Popular Certifications</h4>
                            <ol className="list-decimal pl-4 space-y-2">
                              <li className="text-sm">
                                <span className="font-medium">AWS Solutions Architect</span>
                                <p className="text-muted-foreground">Salary impact: +15% on average</p>
                              </li>
                              <li className="text-sm">
                                <span className="font-medium">Google Cloud Professional</span>
                                <p className="text-muted-foreground">Salary impact: +12% on average</p>
                              </li>
                              <li className="text-sm">
                                <span className="font-medium">Azure Administrator</span>
                                <p className="text-muted-foreground">Salary impact: +10% on average</p>
                              </li>
                              <li className="text-sm">
                                <span className="font-medium">Certified Scrum Master</span>
                                <p className="text-muted-foreground">Salary impact: +8% on average</p>
                              </li>
                            </ol>
                          </div>
                          
                          <div>
                            <h4 className="text-base font-medium mb-2">Emerging Learning Formats</h4>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <div className="mt-1 h-2 w-2 rounded-full bg-brand-500"></div>
                                <div>
                                  <p className="text-sm font-medium">Micro-credentials</p>
                                  <p className="text-xs text-muted-foreground">Short, focused courses on specific skills gaining popularity among busy professionals</p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="mt-1 h-2 w-2 rounded-full bg-brand-500"></div>
                                <div>
                                  <p className="text-sm font-medium">Project-based learning</p>
                                  <p className="text-xs text-muted-foreground">Hands-on experience through real-world projects preferred by employers</p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="mt-1 h-2 w-2 rounded-full bg-brand-500"></div>
                                <div>
                                  <p className="text-sm font-medium">AI-powered personalized learning</p>
                                  <p className="text-xs text-muted-foreground">Adaptive learning platforms that adjust to individual progress</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
