
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Bot, MessageSquare, Sparkles, ArrowRight, Zap } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="flex items-center justify-center space-x-2 px-4 py-1.5 rounded-full bg-muted">
                <Sparkles className="h-4 w-4 text-brand-500" />
                <span className="text-sm font-medium">AI-Powered Career Assistant</span>
              </div>
              
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Your AI Career Coach <br className="hidden sm:inline" />
                <span className="text-brand-500">Available 24/7</span>
              </h1>
              
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Get personalized career advice, resume tips, interview preparation, and more through natural conversations with our AI assistant.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <Link to="/chat">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Start Chatting
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:gap-16 md:grid-cols-2 lg:grid-cols-3 items-start">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted p-3">
                  <Bot className="h-6 w-6 text-brand-500" />
                </div>
                <h3 className="text-xl font-bold">Personalized Career Advice</h3>
                <p className="text-muted-foreground">
                  Get tailored recommendations based on your skills, experience, and career goals through natural conversations.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted p-3">
                  <Sparkles className="h-6 w-6 text-brand-500" />
                </div>
                <h3 className="text-xl font-bold">Resume & Interview Tips</h3>
                <p className="text-muted-foreground">
                  Improve your resume and prepare for interviews with expert guidance and practical exercises.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted p-3">
                  <Zap className="h-6 w-6 text-brand-500" />
                </div>
                <h3 className="text-xl font-bold">24/7 Instant Support</h3>
                <p className="text-muted-foreground">
                  Get immediate answers to your career questions whenever you need them, day or night.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to Advance Your Career?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Start chatting with our AI assistant today and get personalized guidance for your professional journey.
              </p>
              <Button size="lg" asChild>
                <Link to="/chat">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Start Your AI Conversation
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
