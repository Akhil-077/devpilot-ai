import {
  Upload,
  MessageSquare,
  FolderPlus,
  Pencil,
} from "lucide-react";

function Activity() {
  const activities = [
    {
      icon: <Upload size={20} />,
      title: "Resume uploaded",
      time: "2 hours ago",
      color: "bg-green-600",
    },
    {
      icon: <MessageSquare size={20} />,
      title: "AI Chat completed",
      time: "4 hours ago",
      color: "bg-blue-600",
    },
    {
      icon: <FolderPlus size={20} />,
      title: "New project created",
      time: "Yesterday",
      color: "bg-purple-600",
    },
    {
      icon: <Pencil size={20} />,
      title: "Portfolio updated",
      time: "2 days ago",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="mt-10 bg-[#111827] border border-gray-700 rounded-2xl p-8">

      <h2 className="text-2xl font-bold text-white mb-6">
        Recent Activity
      </h2>

      <div className="space-y-5">

        {activities.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-[#1F2937] rounded-xl p-4 hover:bg-[#273549] transition"
          >
            <div className="flex items-center gap-4">

              <div
                className={`${item.color} w-11 h-11 rounded-xl flex items-center justify-center text-white`}
              >
                {item.icon}
              </div>

              <div>
                <h3 className="text-white font-medium">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400">
                  {item.time}
                </p>
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Activity;