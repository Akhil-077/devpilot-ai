import { Bot, Sparkles, MoreVertical } from "lucide-react";

function ChatHeader() {
  return (
    <header className="sticky top-0 z-10 bg-[#111827]/90 backdrop-blur-lg border-b border-gray-800">

      <div className="max-w-6xl mx-auto h-20 flex items-center justify-between px-6">

        {/* Left */}

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">

            <Bot className="text-white" size={24} />

          </div>

          <div>

            <h2 className="text-xl font-bold text-white flex items-center gap-2">

              DevPilot AI

              <Sparkles
                size={18}
                className="text-yellow-400"
              />

            </h2>

            <p className="text-sm text-green-400">
              ● Gemini AI Connected
            </p>

          </div>

        </div>

        {/* Right */}

        <button className="w-11 h-11 rounded-xl bg-[#1F2937] hover:bg-[#374151] transition flex items-center justify-center">

          <MoreVertical
            size={20}
            className="text-gray-300"
          />

        </button>

      </div>

    </header>
  );
}

export default ChatHeader;