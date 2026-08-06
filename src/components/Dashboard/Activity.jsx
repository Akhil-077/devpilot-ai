import {
  Upload,
  MessageSquare,
  FolderPlus,
  Pencil,
  ArrowUpRight,
} from "lucide-react";

function Activity() {
  const activities = [
    {
      icon: <Upload size={20} />,
      title: "Resume uploaded",
      description: "Your resume was uploaded successfully.",
      time: "2 hours ago",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <MessageSquare size={20} />,
      title: "AI Chat completed",
      description: "You asked Gemini AI about React Hooks.",
      time: "4 hours ago",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FolderPlus size={20} />,
      title: "New project created",
      description: "DevPilot AI project was created.",
      time: "Yesterday",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Pencil size={20} />,
      title: "Portfolio updated",
      description: "Your portfolio information was edited.",
      time: "2 days ago",
      color: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <section className="mt-10 mb-10">
      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold text-white">
          Recent Activity
        </h2>

        <button className="text-blue-400 hover:text-blue-300 text-sm">
          View All
        </button>

      </div>

      <div className="space-y-5">

        {activities.map((item, index) => (
          <div
            key={index}
            className="group flex items-center justify-between rounded-2xl border border-gray-800 bg-[#111827] p-5 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >
            <div className="flex items-center gap-5">

              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}
              >
                {item.icon}
              </div>

              <div>

                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 mt-1">
                  {item.description}
                </p>

                <span className="text-xs text-gray-500 mt-2 block">
                  {item.time}
                </span>

              </div>

            </div>

            <button className="opacity-0 group-hover:opacity-100 transition flex items-center gap-2 text-blue-400 hover:text-blue-300">

              Details

              <ArrowUpRight size={18} />

            </button>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Activity;