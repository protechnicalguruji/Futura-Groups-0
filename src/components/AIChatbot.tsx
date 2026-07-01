import React, { useState, useRef, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Sparkles, Building2, ShieldCheck, MapPin, PhoneCall } from "lucide-react";

interface Message {
  role: "user" | "model";
  text: string;
}

const QUICK_QUESTIONS = [
  { text: "What plots are available?", icon: Building2 },
  { text: "Are the layouts RERA approved?", icon: ShieldCheck },
  { text: "What premium amenities do you offer?", icon: MapPin },
  { text: "Can I book a virtual site tour?", icon: PhoneCall },
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text: "Welcome to **Futura Groups**! I am your AI Property Advisor. \n\nHow can I help you explore our premium gated community plots, custom villas, or investment options in Bangalore today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMessage: Message = { role: "user", text: textToSend };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Map history for the endpoint (excluding the very first welcome message if desired, or send all)
      const chatHistory = messages.map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: chatHistory,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "model", text: data.reply }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "I sincerely apologize, but I am experiencing difficulty connecting right now. Please call our relationship team at **+91 88845 44588** or try again shortly.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
  };

  // Helper to simple-format basic markdown bold and bullet lines
  const formatText = (text: string) => {
    return text.split("\n").map((line, lineIdx) => {
      // Parse bold text **bold**
      let formattedLine = line;
      const boldRegex = /\*\*(.*?)\*\*/g;
      const parts = [];
      let lastIndex = 0;
      let match;

      while ((match = boldRegex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(line.substring(lastIndex, match.index));
        }
        parts.push(<strong key={match.index} className="font-semibold text-brand-accent">{match[1]}</strong>);
        lastIndex = boldRegex.lastIndex;
      }
      if (lastIndex < line.length) {
        parts.push(line.substring(lastIndex));
      }

      const isBullet = line.trim().startsWith("-") || line.trim().startsWith("*");
      const cleanLine = isBullet ? line.trim().substring(1).trim() : line;

      if (isBullet) {
        return (
          <li key={lineIdx} className="ml-4 list-disc mb-1.5 text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
            {parts.length > 0 ? parts : cleanLine}
          </li>
        );
      }

      return (
        <p key={lineIdx} className="mb-2 text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
          {parts.length > 0 ? parts : cleanLine}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-24 right-6 z-40 md:bottom-32">
        <motion.button
          id="btn-ai-chat-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="relative group w-14 h-14 bg-gradient-to-r from-brand-accent via-[#c39b50] to-[#b2843c] text-white rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(197,160,89,0.3)] hover:shadow-[0_12px_32px_rgba(197,160,89,0.5)] transition-all duration-300 cursor-pointer overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Pulsing light effect */}
          <span className="absolute inset-0 w-full h-full rounded-full bg-white/20 animate-ping opacity-25 pointer-events-none" />
          
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center justify-center"
              >
                <Sparkles className="w-6 h-6" />
                <span className="text-[8px] font-sans font-bold uppercase tracking-widest mt-0.5">AI</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="ai-chat-window"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="fixed bottom-6 right-4 sm:right-6 md:bottom-24 md:right-24 z-50 w-[calc(100vw-32px)] sm:w-[400px] h-[550px] bg-[#0D1321] border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden royal-shadow"
          >
            {/* Header Section */}
            <div className="p-5 bg-[#05080E] border-b border-white/5 flex items-center justify-between relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent" />
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-2xl bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center relative">
                  <Sparkles className="w-5 h-5 text-brand-accent" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#05080E]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm text-white tracking-wide flex items-center gap-1.5">
                    Futura AI Advisor
                  </h3>
                  <span className="font-sans text-[10px] text-gray-400 font-medium tracking-wider uppercase block">
                    Online • Real Estate Expert
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl hover:bg-white/5 text-gray-400 hover:text-white transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Message Thread container */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-[#0D1321] to-[#05080E] scrollbar-thin">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-md ${
                      msg.role === "user"
                        ? "bg-brand-accent text-white font-sans font-medium text-sm rounded-tr-none"
                        : "bg-[#141C2E] border border-white/5 text-gray-100 rounded-tl-none"
                    }`}
                  >
                    {msg.role === "model" ? (
                      <div className="space-y-1">{formatText(msg.text)}</div>
                    ) : (
                      <p className="text-xs sm:text-sm font-light leading-relaxed">{msg.text}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Loader */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#141C2E] border border-white/5 rounded-2xl rounded-tl-none px-4 py-3 flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions list */}
            {messages.length === 1 && (
              <div className="px-5 py-3 bg-[#05080E]/40 border-t border-white/5">
                <span className="font-sans text-[10px] text-gray-500 uppercase tracking-widest font-bold block mb-2">
                  SUGGESTED QUESTIONS:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {QUICK_QUESTIONS.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(item.text)}
                      className="flex items-center space-x-2 text-left bg-[#141C2E]/60 hover:bg-[#141C2E] hover:border-brand-accent/30 border border-white/5 rounded-xl p-2.5 text-[11px] text-gray-300 font-sans tracking-wide transition-all cursor-pointer group"
                    >
                      <item.icon className="w-3.5 h-3.5 text-brand-accent shrink-0 group-hover:scale-105 transition-transform" />
                      <span className="line-clamp-1">{item.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Input Form */}
            <form
              onSubmit={handleFormSubmit}
              className="p-4 bg-[#05080E] border-t border-white/5 flex items-center space-x-2.5"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about premium plots or villas..."
                disabled={isLoading}
                className="flex-1 bg-[#141C2E] text-white font-sans text-xs sm:text-sm placeholder-gray-500 border border-white/5 rounded-xl px-4 py-3 outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/40 transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 bg-brand-accent hover:bg-brand-accent/90 disabled:bg-gray-800 disabled:text-gray-600 text-white rounded-xl flex items-center justify-center shadow-md transition-all cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
