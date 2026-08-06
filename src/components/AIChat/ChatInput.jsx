import { useState } from "react";
import { Send, Paperclip } from "lucide-react";

function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    onSend(text);
    setText("");
  };

  return (
    <div className="bg-[#111827] border-t border-gray-800 px-6 py-5">

      <div className="max-w-5xl mx-auto">

        <div className="flex items-center gap-3 bg-[#1F2937] border border-gray-700 rounded-2xl px-4 py-3 shadow-lg">

          <button
            className="w-10 h-10 rounded-xl hover:bg-gray-700 flex items-center justify-center transition"
          >
            <Paperclip
              size={20}
              className="text-gray-400"
            />
          </button>

          <input
            type="text"
            placeholder="Ask DevPilot AI anything..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
            className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500 text-[15px]"
          />

          <button
            onClick={handleSend}
            className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition flex items-center justify-center shadow-lg"
          >
            <Send
              size={20}
              className="text-white"
            />
          </button>

        </div>

      </div>

    </div>
  );
}

export default ChatInput;