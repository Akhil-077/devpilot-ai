import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  AlertCircle,
} from "lucide-react";

function RecentProjects() {
  const projects = [
    {
      name: "DevPilot AI",
      tech: ["React", "Node.js", "Gemini"],
      status: "Completed",
      progress: 100,
      updated: "2 Hours Ago",
    },
    {
      name: "Portfolio Website",
      tech: ["React", "Tailwind"],
      status: "In Progress",
      progress: 78,
      updated: "Today",
    },
    {
      name: "Resume Analyzer",
      tech: ["Gemini", "PDF", "AI"],
      status: "Pending",
      progress: 35,
      updated: "Tomorrow",
    },
    {
      name: "Chat Application",
      tech: ["React", "Socket.io"],
      status: "Completed",
      progress: 100,
      updated: "Yesterday",
    },
  ];

  const statusStyle = (status) => {
    switch (status) {
      case "Completed":
        return {
          color: "bg-green-500/20 text-green-400",
          icon: <CheckCircle2 size={16} />,
        };

      case "In Progress":
        return {
          color: "bg-yellow-500/20 text-yellow-400",
          icon: <Clock3 size={16} />,
        };

      default:
        return {
          color: "bg-red-500/20 text-red-400",
          icon: <AlertCircle size={16} />,
        };
    }
  };

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold text-white">
          Recent Projects
        </h2>

        <button className="text-blue-400 hover:text-blue-300 text-sm">
          View All
        </button>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {projects.map((project, index) => {
          const badge = statusStyle(project.status);

          return (
            <div
              key={index}
              className="bg-[#111827] border border-gray-800 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              <div className="flex justify-between items-start">

                <div>

                  <h3 className="text-xl font-semibold text-white">
                    {project.name}
                  </h3>

                  <div className="flex gap-2 mt-3 flex-wrap">

                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full bg-[#1F2937] text-gray-300 text-xs"
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                </div>

                <span
                  className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold ${badge.color}`}
                >
                  {badge.icon}
                  {project.status}
                </span>

              </div>

              <div className="mt-6">

                <div className="flex justify-between text-sm mb-2">

                  <span className="text-gray-400">
                    Progress
                  </span>

                  <span className="text-white font-semibold">
                    {project.progress}%
                  </span>

                </div>

                <div className="w-full h-2 rounded-full bg-gray-800">

                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    style={{
                      width: `${project.progress}%`,
                    }}
                  />

                </div>

              </div>

              <div className="flex justify-between items-center mt-6">

                <div>

                  <p className="text-xs text-gray-500">
                    Last Updated
                  </p>

                  <p className="text-sm text-white">
                    {project.updated}
                  </p>

                </div>

                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl text-white transition">

                  Open

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}

export default RecentProjects;