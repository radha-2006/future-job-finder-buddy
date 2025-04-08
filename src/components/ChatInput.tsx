
import { useState } from "react";
import { SendIcon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  handleSendMessage: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export function ChatInput({ input, setInput, handleSendMessage, isLoading }: ChatInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (input.trim()) {
        handleSendMessage(e);
      }
    }
  };

  return (
    <div className="border-t bg-background p-4">
      <form onSubmit={handleSendMessage} className="flex flex-col gap-4 max-w-4xl mx-auto">
        <div className="relative">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything..."
            disabled={isLoading}
            className="min-h-[60px] resize-none pr-14 py-3"
            rows={1}
          />
          <Button
            type="submit"
            size="icon"
            className="absolute right-2 bottom-2"
            disabled={isLoading || !input.trim()}
          >
            <SendIcon size={18} />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
        <div className="text-xs text-center text-muted-foreground flex items-center justify-center gap-2">
          <Sparkles size={14} />
          <span>AI-powered assistant trained to help with career guidance and general knowledge</span>
        </div>
      </form>
    </div>
  );
}
