import { Bell } from "lucide-react";

function Header() {
  return (
    <header className="h-20 bg-[#111827] border-b border-gray-800 flex items-center justify-between px-8">

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search projects, chats..."
        className="w-96 h-11 px-4 rounded-xl bg-[#1F2937] border border-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
      />

      {/* Right Side */}
      <div className="flex items-center gap-6">

        {/* Notification */}
        <button className="relative w-11 h-11 rounded-xl bg-[#1F2937] hover:bg-[#374151] transition flex items-center justify-center">
          <Bell size={20} className="text-white" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            A
          </div>

          <div>
            <h3 className="text-white font-semibold">Akhil</h3>
            <p className="text-sm text-gray-400">Full Stack Developer</p>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Header;