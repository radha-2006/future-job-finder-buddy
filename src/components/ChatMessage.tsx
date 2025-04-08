
import { UserIcon, BotIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className="flex items-start gap-4">
      <div 
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
          message.type === "user" ? "bg-secondary" : "bg-primary/10"
        )}
      >
        {message.type === "user" ? (
          <UserIcon size={18} className="text-secondary-foreground" />
        ) : (
          <BotIcon size={18} className="text-primary" />
        )}
      </div>
      <div className="flex-1 space-y-2 overflow-hidden">
        <div className="flex items-center gap-2">
          <span className="font-medium">
            {message.type === "user" ? "You" : "CareerCompass AI"}
          </span>
          <span className="text-xs text-muted-foreground">
            {message.timestamp.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
        <div className="prose prose-sm max-w-none">
          <p className="whitespace-pre-wrap">{message.content}</p>
        </div>
      </div>
    </div>
  );
}
