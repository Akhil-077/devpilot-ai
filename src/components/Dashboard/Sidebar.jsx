import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  FolderKanban,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-[#111827] border-r border-gray-800 flex flex-col">

      {/* Logo */}
      <div className="px-8 py-8 border-b border-gray-800">

        <h1 className="text-2xl font-bold text-white">
          DevPilot <span className="text-blue-500">AI</span>
        </h1>

        <p className="text-gray-400 text-sm mt-1">
          AI Developer Platform
        </p>

      </div>

      {/* Navigation */}
      <nav className="flex-1 px-5 py-6 space-y-2">

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-600 text-white text-base font-medium">
          <LayoutDashboard size={20} />
          Dashboard
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 text-base hover:bg-[#1F2937] transition">
          <MessageSquare size={20} />
          AI Chat
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 text-base hover:bg-[#1F2937] transition">
          <FileText size={20} />
          Resume Analyzer
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 text-base hover:bg-[#1F2937] transition">
          <FolderKanban size={20} />
          Projects
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 text-base hover:bg-[#1F2937] transition">
          <BarChart3 size={20} />
          Analytics
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 text-base hover:bg-[#1F2937] transition">
          <Settings size={20} />
          Settings
        </button>

      </nav>

      {/* User */}
      <div className="border-t border-gray-800 px-5 py-5">

        <div className="flex items-center gap-3 mb-5">

          <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            A
          </div>

          <div>

            <h3 className="text-white text-base font-semibold">
              Akhil
            </h3>

            <p className="text-xs text-gray-400">
              Full Stack Developer
            </p>

          </div>

        </div>

        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition text-white text-base font-medium">
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;