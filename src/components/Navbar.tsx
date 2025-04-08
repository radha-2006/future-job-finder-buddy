
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, MessageSquare, Bot, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-brand-500" />
          <Link to="/" className="text-xl font-bold text-brand-600">
            Career<span className="text-brand-400">GPT</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/chat" className="text-sm font-medium transition-colors hover:text-primary">
            AI Chat
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <Button variant="outline" className="hidden md:flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            <span>Support</span>
          </Button>
          <Button className="hidden md:inline-flex" asChild>
            <Link to="/chat">Start Chatting</Link>
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-b">
          <nav className="flex flex-col p-4 space-y-3 bg-background">
            <Link 
              to="/" 
              className="text-sm font-medium py-2 px-3 rounded-md hover:bg-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/chat" 
              className="text-sm font-medium py-2 px-3 rounded-md hover:bg-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Chat
            </Link>
            <Button className="w-full mt-2" asChild onClick={() => setIsMenuOpen(false)}>
              <Link to="/chat">Start Chatting</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
