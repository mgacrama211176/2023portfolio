import React, { useState, useRef, useEffect } from "react";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/20/solid";

interface Message {
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

const AIChatWidget: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Hello, want to know more about me?",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      content: input,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // TODO: Replace with your actual API call
      // const response = await fetch('/api/chat', {
      //   method: 'POST',
      //   body: JSON.stringify({ message: input }),
      // });
      // const data = await response.json();

      // Mock AI response for now
      setTimeout(() => {
        const aiMessage: Message = {
          content: "This is a mock AI response.",
          role: "assistant",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiMessage]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error sending message:", error);
      setIsLoading(false);
    }
  };

  console.log(messages);

  return (
    <>
      <div
        className={`fixed bottom-4 right-4 transition-all duration-300 ease-in-out z-50 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[120%] pointer-events-none"
        }`}
      >
        <div className="w-[95vw] h-[80vh] md:w-96 md:h-[500px] bg-white rounded-lg shadow-lg flex flex-col">
          <div className="p-3 md:p-4 border-b flex justify-between items-center">
            <h2 className="text-base md:text-lg font-semibold">AI Chat</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-800 p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <span className="text-xl">×</span>
            </button>
          </div>

          {/* Message box */}
          <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-3 md:p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 text-sm md:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-3 md:px-4 py-2 bg-blue-500 text-white text-sm md:text-base rounded-lg hover:bg-blue-600 disabled:opacity-50 whitespace-nowrap"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 h-12 w-12 bg-[#00255e] text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-[#00255e] transition-all duration-300 ease-in-out z-50 ${
          isOpen
            ? "opacity-0 scale-90 pointer-events-none"
            : "opacity-100 scale-100"
        }`}
      >
        <ChatBubbleLeftEllipsisIcon className="size-6" />
      </button>
    </>
  );
};

export default AIChatWidget;
