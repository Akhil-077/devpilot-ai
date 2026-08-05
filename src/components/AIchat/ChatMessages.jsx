import MessageBubble from "./MessageBubble";

function ChatMessages({ messages = [], isTyping = false }) {
  return (
    <div className="flex-1 overflow-y-auto bg-[#0B1020] px-8 py-6 space-y-5">

      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          message={message}
        />
      ))}

      {isTyping && (
        <div className="flex justify-start">

          <div className="bg-[#1F2937] border border-gray-700 rounded-2xl rounded-bl-md px-5 py-4">

            <p className="text-blue-400 font-semibold mb-3">
              DevPilot AI
            </p>

            <div className="flex gap-2">

              <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>

              <span
                className="w-2 h-2 bg-white rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></span>

              <span
                className="w-2 h-2 bg-white rounded-full animate-bounce"
                style={{ animationDelay: "0.4s" }}
              ></span>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default ChatMessages;