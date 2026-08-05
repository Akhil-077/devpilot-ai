import { Bot, MoreVertical } from "lucide-react";

function ChatHeader() {
  return (
    <header className="h-20 bg-[#111827] border-b border-gray-700 px-8 flex items-center justify-between">

      {/* Left */}
      <div className="flex items-center gap-4">

        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
          <Bot className="text-white" size={24} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">
            DevPilot AI
          </h2>

          <p className="text-sm text-green-400">
            ● Online
          </p>
        </div>

      </div>

      {/* Right */}
      <button className="w-11 h-11 rounded-xl bg-[#1F2937] hover:bg-[#374151] transition flex items-center justify-center">
        <MoreVertical size={20} className="text-gray-300" />
      </button>

    </header>
  );
}

export default ChatHeader;