import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  FolderKanban,
  BarChart3,
  Settings,
  LogOut,
  Sparkles,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      name: "AI Chat",
      icon: <MessageSquare size={20} />,
      path: "/chat",
    },
    {
      name: "Resume Analyzer",
      icon: <FileText size={20} />,
      path: "/resume",
    },
    {
      name: "Projects",
      icon: <FolderKanban size={20} />,
      path: "#",
      comingSoon: true,
    },
    {
      name: "Analytics",
      icon: <BarChart3 size={20} />,
      path: "#",
      comingSoon: true,
    },
    {
      name: "Settings",
      icon: <Settings size={20} />,
      path: "#",
      comingSoon: true,
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-[#0F172A] border-r border-gray-800 flex flex-col justify-between">

      {/* Logo */}
      <div>

        <div className="px-6 py-7 border-b border-gray-800">

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">

              <Sparkles className="text-white" size={22} />

            </div>

            <div>

              <h1 className="text-xl font-bold text-white">
                DevPilot AI
              </h1>

              <p className="text-xs text-green-400">
                ● Gemini Connected
              </p>

            </div>

          </div>

        </div>

        {/* Navigation */}

        <nav className="px-4 py-6 space-y-2">

          {menuItems.map((item, index) => (

            item.comingSoon ? (

              <button
                key={index}
                disabled
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-500 cursor-not-allowed"
              >

                <div className="flex items-center gap-3">

                  {item.icon}

                  <span>{item.name}</span>

                </div>

                <span className="text-[10px] bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
                  Soon
                </span>

              </button>

            ) : (

              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                      : "text-gray-300 hover:bg-[#1E293B] hover:text-white"
                  }`
                }
              >

                {item.icon}

                <span className="font-medium">
                  {item.name}
                </span>

              </NavLink>

            )

          ))}

        </nav>

      </div>

      {/* Profile */}

      <div className="p-4 border-t border-gray-800">

        <div className="bg-[#111827] rounded-2xl p-4">

          <div className="flex items-center gap-3 mb-4">

            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">

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

          <button className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 py-3 rounded-xl text-white transition">

            <LogOut size={18} />

            Logout

          </button>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;