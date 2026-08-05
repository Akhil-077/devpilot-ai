function RecentProjects() {
  const projects = [
    {
      name: "DevPilot AI",
      status: "Completed",
      tech: "React + Node.js",
    },
    {
      name: "Portfolio Website",
      status: "In Progress",
      tech: "React + Tailwind",
    },
    {
      name: "Resume Analyzer",
      status: "Pending",
      tech: "AI + Python",
    },
    {
      name: "Chat Application",
      status: "Completed",
      tech: "Socket.io",
    },
  ];

  const badgeColor = (status) => {
    if (status === "Completed")
      return "bg-green-500/20 text-green-400";

    if (status === "In Progress")
      return "bg-yellow-500/20 text-yellow-400";

    return "bg-red-500/20 text-red-400";
  };

  return (
    <div className="mt-10 bg-[#111827] border border-gray-700 rounded-2xl p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        Recent Projects
      </h2>

      <div className="space-y-4">

        {projects.map((project, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-[#1F2937] rounded-xl p-4 hover:bg-[#2A3444] transition"
          >

            <div>

              <h3 className="text-white font-semibold">
                {project.name}
              </h3>

              <p className="text-gray-400 text-sm">
                {project.tech}
              </p>

            </div>

            <span
              className={`px-4 py-2 rounded-full text-sm font-medium ${badgeColor(project.status)}`}
            >
              {project.status}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default RecentProjects;