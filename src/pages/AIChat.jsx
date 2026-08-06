import { useState } from "react";

import Sidebar from "../components/Dashboard/Sidebar";
import ChatHeader from "../components/AIChat/ChatHeader";
import ChatMessages from "../components/AIChat/ChatMessages";
import ChatInput from "../components/AIChat/ChatInput";
import { askGemini } from "../services/gemini";

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

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    // User Message
    const userMessage = {
      id: Date.now(),
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    try {
      // Get response from Gemini
      const aiReply = await askGemini(text);

      const aiMessage = {
        id: Date.now() + 1,
        sender: "ai",
        text: aiReply,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);

      const errorMessage = {
        id: Date.now() + 1,
        sender: "ai",
        text: "❌ Sorry, I couldn't connect to Gemini AI.",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
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