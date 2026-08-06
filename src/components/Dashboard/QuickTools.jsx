import {
  MessageSquare,
  FileText,
  Lightbulb,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function QuickTools() {
  const navigate = useNavigate();

  const tools = [
    {
      title: "AI Chat",
      description: "Talk with DevPilot AI powered by Gemini.",
      icon: <MessageSquare size={28} />,
      gradient: "from-blue-500 to-cyan-500",
      route: "/chat",
      available: true,
    },
    {
      title: "Resume Analyzer",
      description: "Get ATS score and AI resume suggestions.",
      icon: <FileText size={28} />,
      gradient: "from-green-500 to-emerald-500",
      route: "/resume",
      available: true,
    },
    {
      title: "Roadmap Generator",
      description: "Generate a personalized learning roadmap.",
      icon: <Lightbulb size={28} />,
      gradient: "from-yellow-500 to-orange-500",
      route: "#",
      available: false,
    },
    {
      title: "Project Generator",
      description: "Create complete AI-powered project ideas.",
      icon: <Rocket size={28} />,
      gradient: "from-purple-500 to-pink-500",
      route: "#",
      available: false,
    },
  ];

  return (
    <section className="mt-10">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold text-white">
          ⚡ Quick AI Tools
        </h2>

        <p className="text-gray-400 text-sm">
          Launch your favorite AI tools
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {tools.map((tool, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl border border-gray-800 bg-[#111827] p-6 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-lg"
          >

            {!tool.available && (
              <span className="absolute top-4 right-4 bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded-full">
                Coming Soon
              </span>
            )}

            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center text-white shadow-lg mb-5`}
            >
              {tool.icon}
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              {tool.title}
            </h3>

            <p className="text-gray-400 text-sm leading-6 mb-6">
              {tool.description}
            </p>

            <button
              disabled={!tool.available}
              onClick={() => tool.available && navigate(tool.route)}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition ${
                tool.available
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-gray-800 text-gray-500 cursor-not-allowed"
              }`}
            >
              {tool.available ? "Open Tool" : "Coming Soon"}

              {tool.available && <ArrowRight size={18} />}
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default QuickTools;