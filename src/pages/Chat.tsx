
import { useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SendIcon, BotIcon, UserIcon, Bot, Sparkles, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { ChatSidebar } from "@/components/ChatSidebar";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-message",
      type: "bot",
      content: "Hello! I'm CareerCompass AI. I can help with career advice, resume tips, job market insights, and answer questions about almost anything. What would you like to talk about today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [conversationTitle, setConversationTitle] = useState("New Conversation");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    // Generate a title for new conversations based on first message
    if (messages.length === 1) {
      setConversationTitle(input.slice(0, 30) + (input.length > 30 ? "..." : ""));
    }
    
    // Simulate AI response delay
    setTimeout(() => {
      // Map of potential questions and responses for demonstration purposes
      const responses: Record<string, string> = {
        "hello": "Hello! How can I help you today with your career or any other questions?",
        "hi": "Hi there! What would you like to discuss today?",
        "help": "I can help with career advice, resume writing, job search strategies, interview preparation, skill development, and answer general questions. What do you need assistance with?",
        "career": "Career development is a lifelong journey. Would you like advice on career paths, switching careers, advancing in your current role, or something else?",
        "resume": "Creating an effective resume is crucial. I can provide tips on structure, content, highlighting achievements, and tailoring it for specific roles. What aspect of resume building do you need help with?",
        "interview": "Interviews can be challenging. I can help with common questions, STAR method responses, behavioral questions, technical preparation, and tips to stand out. What kind of interview are you preparing for?",
        "skills": "Continuous skill development is essential in today's job market. Based on current trends, skills in data analysis, AI/ML, digital marketing, project management, and soft skills like communication are highly valued. Which area interests you?",
        "salary": "Salary negotiations should be approached strategically. Research industry standards, know your worth, highlight your value, and practice the conversation beforehand. Would you like specific negotiation tactics?"
      };
      
      // Look for keyword matches
      let botResponse = "I don't have a specific answer for that. Could you provide more details about what you're looking for?";
      const userMessageLower = userMessage.content.toLowerCase();
      
      Object.keys(responses).forEach(keyword => {
        if (userMessageLower.includes(keyword)) {
          botResponse = responses[keyword];
        }
      });
      
      // For longer, more detailed responses
      if (userMessageLower.includes("tell me about") || userMessageLower.includes("explain")) {
        botResponse = "That's an interesting topic. I'd be happy to provide detailed information about this subject. In the full version, I would access my knowledge base to give you a comprehensive explanation with relevant facts, examples, and possibly some statistics to help you better understand the topic. Is there a specific aspect you'd like me to focus on?";
      }
      
      // If asking about job market or trends
      if (userMessageLower.includes("job market") || userMessageLower.includes("trend")) {
        botResponse = "The job market is constantly evolving. Currently, there's high demand in tech fields like AI, data science, and cybersecurity. Remote work opportunities have increased significantly. Healthcare and renewable energy sectors are also growing rapidly. Would you like more specific information about a particular industry or region?";
      }
      
      const botMessage: Message = {
        id: Date.now().toString(),
        type: "bot",
        content: botResponse,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
      toast.success("Response received!");
    }, 1500);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <ChatSidebar conversationTitle={conversationTitle} />
      
      <div className="flex flex-col flex-1 h-full">
        <Navbar />
        
        <main className="flex-1 overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <div className="max-w-4xl mx-auto space-y-6">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              
              {isLoading && (
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BotIcon size={18} className="text-primary" />
                  </div>
                  <div className="flex-1 bg-muted rounded-lg p-4 max-w-[calc(100%-64px)]">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-150"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-300"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          <ChatInput 
            input={input} 
            setInput={setInput} 
            handleSendMessage={handleSendMessage} 
            isLoading={isLoading} 
          />
        </main>
      </div>
    </div>
  );
};

export default Chat;
