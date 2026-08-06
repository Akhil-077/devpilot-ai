import {
  FolderKanban,
  MessageSquare,
  FileText,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

function StatsCards() {
  const cards = [
    {
      title: "Projects",
      value: "24",
      growth: "+12%",
      subtitle: "This Month",
      icon: <FolderKanban size={24} />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "AI Chats",
      value: "156",
      growth: "+28%",
      subtitle: "This Week",
      icon: <MessageSquare size={24} />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Resume Reviews",
      value: "18",
      growth: "+9%",
      subtitle: "Today",
      icon: <FileText size={24} />,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Profile Score",
      value: "98%",
      growth: "+2%",
      subtitle: "Optimized",
      icon: <TrendingUp size={24} />,
      gradient: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-[#111827] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10"
        >
          {/* Background Glow */}
          <div
            className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${card.gradient} opacity-10 blur-3xl group-hover:opacity-20 transition`}
          />

          <div className="relative flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-400">
                {card.title}
              </p>

              <h2 className="mt-3 text-4xl font-bold text-white">
                {card.value}
              </h2>

              <div className="mt-4 flex items-center gap-2">
                <span className="flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-1 text-xs font-semibold text-green-400">
                  <ArrowUpRight size={14} />
                  {card.growth}
                </span>

                <span className="text-xs text-gray-500">
                  {card.subtitle}
                </span>
              </div>
            </div>

            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${card.gradient} text-white shadow-lg`}
            >
              {card.icon}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="h-2 w-full rounded-full bg-gray-800">
              <div
                className={`h-2 rounded-full bg-gradient-to-r ${card.gradient}`}
                style={{
                  width:
                    index === 0
                      ? "78%"
                      : index === 1
                      ? "92%"
                      : index === 2
                      ? "65%"
                      : "98%",
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;