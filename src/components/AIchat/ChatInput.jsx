import { useState } from "react";
import { Send } from "lucide-react";

function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    onSend(text);
    setText("");
  };

  return (
    <div className="bg-[#111827] border-t border-gray-700 p-6">
      <div className="flex gap-4">

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          placeholder="Ask DevPilot AI anything..."
          className="flex-1 bg-[#1F2937] border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500"
        />

        <button
          onClick={handleSend}
          className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center"
        >
          <Send size={20} className="text-white" />
        </button>

      </div>
    </div>
  );
}

export default ChatInput;