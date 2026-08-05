import {
  FolderKanban,
  MessageSquare,
  FileText,
  TrendingUp,
} from "lucide-react";

function StatsCards() {
  const cards = [
    {
      title: "Projects",
      value: "24",
      icon: <FolderKanban size={22} />,
      color: "bg-blue-600",
    },
    {
      title: "AI Chats",
      value: "156",
      icon: <MessageSquare size={22} />,
      color: "bg-purple-600",
    },
    {
      title: "Resume Reviews",
      value: "18",
      icon: <FileText size={22} />,
      color: "bg-green-600",
    },
    {
      title: "Profile",
      value: "98%",
      icon: <TrendingUp size={22} />,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-[#111827] border border-gray-700 rounded-xl p-5 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-400 text-sm">
                {card.title}
              </p>

              <h2 className="text-2xl font-bold text-white mt-2">
                {card.value}
              </h2>

            </div>

            <div
              className={`${card.color} w-12 h-12 rounded-lg flex items-center justify-center text-white`}
            >
              {card.icon}
            </div>

          </div>

        </div>
      ))}

    </div>
  );
}

export default StatsCards;