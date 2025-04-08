
import { PlusIcon, MessageSquare, Settings, BookOpen, ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";

interface ChatSidebarProps {
  conversationTitle: string;
}

export function ChatSidebar({ conversationTitle }: ChatSidebarProps) {
  // Mock conversation history
  const conversations = [
    { id: "1", title: conversationTitle, active: true, date: new Date() },
    { id: "2", title: "Resume Review Tips", active: false, date: new Date(Date.now() - 86400000) },
    { id: "3", title: "Interview Preparation", active: false, date: new Date(Date.now() - 172800000) },
    { id: "4", title: "Career Change Advice", active: false, date: new Date(Date.now() - 259200000) },
  ];

  return (
    <div className="hidden md:flex w-80 flex-col h-full border-r">
      <div className="p-4">
        <Button className="w-full justify-start gap-2" asChild variant="outline">
          <Link to="/chat">
            <PlusIcon size={16} />
            New Chat
          </Link>
        </Button>
      </div>
      
      <Separator />
      
      <ScrollArea className="flex-1 px-2">
        <div className="p-2 space-y-2">
          <h3 className="px-2 text-sm font-medium">Recent Conversations</h3>
          {conversations.map((conversation) => (
            <Button
              key={conversation.id}
              variant={conversation.active ? "secondary" : "ghost"}
              className="w-full justify-start text-sm font-normal"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              <div className="truncate">{conversation.title}</div>
            </Button>
          ))}
        </div>
      </ScrollArea>
      
      <Separator />
      
      <div className="p-4">
        <div className="space-y-2">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <ArrowLeftRight size={16} />
            Clear Conversations
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Settings size={16} />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2" asChild>
            <Link to="/">
              <BookOpen size={16} />
              Home Page
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
