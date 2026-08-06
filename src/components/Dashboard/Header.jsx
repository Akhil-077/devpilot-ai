import {
  Bell,
  Search,
  Moon,
  Sparkles,
} from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 z-20 bg-[#111827]/90 backdrop-blur-md border-b border-gray-800">

      <div className="h-20 flex items-center justify-between px-8">

        {/* Left */}
        <div className="flex items-center gap-5">

          {/* Search */}
          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search AI chats, resumes, projects..."
              className="w-[420px] h-12 pl-11 pr-4 rounded-2xl bg-[#1F2937] border border-gray-700 text-white placeholder:text-gray-500 outline-none focus:border-blue-500 transition"
            />

          </div>

          {/* Gemini Status */}
          <div className="hidden lg:flex items-center gap-2 bg-[#1F2937] border border-gray-700 px-4 py-2 rounded-xl">

            <Sparkles
              size={16}
              className="text-yellow-400"
            />

            <span className="text-sm text-green-400 font-medium">
              Gemini Connected
            </span>

          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-4">

          {/* Theme */}
          <button className="w-11 h-11 rounded-xl bg-[#1F2937] hover:bg-[#374151] transition flex items-center justify-center">

            <Moon
              size={20}
              className="text-gray-300"
            />

          </button>

          {/* Notifications */}
          <button className="relative w-11 h-11 rounded-xl bg-[#1F2937] hover:bg-[#374151] transition flex items-center justify-center">

            <Bell
              size={20}
              className="text-gray-300"
            />

            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>

          </button>

          {/* Profile */}
          <div className="flex items-center gap-3 bg-[#1F2937] px-3 py-2 rounded-2xl border border-gray-700">

            <div className="w-11 h-11 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
              A
            </div>

            <div>

              <h3 className="text-white font-semibold">
                Akhil
              </h3>

              <p className="text-xs text-gray-400">
                Full Stack Developer
              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Header;