import { useState } from "react";

import Sidebar from "../components/Dashboard/Sidebar";
import ChatHeader from "../components/AIChat/ChatHeader";
import ChatMessages from "../components/AIChat/ChatMessages";
import ChatInput from "../components/AIChat/ChatInput";

function AIChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "👋 Hello Akhil! Welcome to DevPilot AI. How can I help you today?",
      time: "Now",
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (text) => {
    if (!text.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: "user",
      text: text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMessage]);

    setIsTyping(true);

    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        sender: "ai",
        text: "🚀 Great! Gemini AI integration will be added soon. For now, this is a demo response.",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0B1020] flex">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <ChatHeader />

        <ChatMessages
          messages={messages}
          isTyping={isTyping}
        />

        <ChatInput
          onSend={sendMessage}
        />

      </div>

    </div>
  );
}

export default AIChat;