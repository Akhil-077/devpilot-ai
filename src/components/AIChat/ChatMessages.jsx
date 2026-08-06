import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

function ChatMessages({ messages = [], isTyping = false }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto bg-[#0B1020] px-6 py-8">

      <div className="max-w-5xl mx-auto">

        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
          />
        ))}

        {isTyping && (
          <div className="flex gap-4 mb-8">

            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              🤖
            </div>

            <div className="bg-[#1F2937] border border-gray-700 rounded-2xl px-6 py-5">

              <div className="flex gap-2">

                <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></span>

                <span
                  className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></span>

                <span
                  className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></span>

              </div>

            </div>

          </div>
        )}

        <div ref={bottomRef}></div>

      </div>

    </div>
  );
}

export default ChatMessages;