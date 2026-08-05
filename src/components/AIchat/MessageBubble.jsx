function MessageBubble({ message }) {
  const isUser = message.sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] px-5 py-4 rounded-2xl shadow-md ${
          isUser
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-md"
            : "bg-[#1F2937] border border-gray-700 text-white rounded-bl-md"
        }`}
      >
        <p className="leading-7 whitespace-pre-wrap">
          {message.text}
        </p>

        <p className="text-xs text-gray-300 mt-3 text-right">
          {message.time}
        </p>
      </div>
    </div>
  );
}

export default MessageBubble;