import {
  MessageSquare,
  FileText,
  Lightbulb,
  Rocket,
} from "lucide-react";

function QuickTools() {
  const tools = [
    {
      title: "AI Chat",
      icon: <MessageSquare size={24} />,
      color: "bg-blue-600",
    },
    {
      title: "Resume Analyzer",
      icon: <FileText size={24} />,
      color: "bg-green-600",
    },
    {
      title: "Roadmap Generator",
      icon: <Lightbulb size={24} />,
      color: "bg-yellow-500",
    },
    {
      title: "Create Project",
      icon: <Rocket size={24} />,
      color: "bg-purple-600",
    },
  ];

  return (
    <div className="mt-10 bg-[#111827] border border-gray-700 rounded-2xl p-8">

      <h2 className="text-2xl font-bold text-white mb-8">
        ⚡ Quick AI Tools
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

        {tools.map((tool, index) => (
          <button
            key={index}
            className="bg-[#1F2937] rounded-xl p-6 hover:bg-[#273549] transition hover:-translate-y-1"
          >
            <div
              className={`${tool.color} w-14 h-14 rounded-xl flex items-center justify-center text-white mx-auto mb-4`}
            >
              {tool.icon}
            </div>

            <h3 className="text-white font-semibold text-center">
              {tool.title}
            </h3>
          </button>
        ))}

      </div>

    </div>
  );
}

export default QuickTools;