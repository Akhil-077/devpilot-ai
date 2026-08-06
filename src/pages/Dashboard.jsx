import Sidebar from "../components/Dashboard/Sidebar";
import Header from "../components/Dashboard/Header";
import StatsCards from "../components/Dashboard/StatsCards";
import RecentProjects from "../components/Dashboard/RecentProjects";
import QuickTools from "../components/Dashboard/QuickTools";
import Activity from "../components/Dashboard/Activity";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0B1020] flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto">

          <div className="max-w-7xl mx-auto px-8 py-8">

            {/* Welcome */}
            <div className="mb-10">

              <p className="text-blue-400 font-medium mb-2">
                👋 Welcome Back
              </p>

              <h1 className="text-5xl font-bold text-white">
                Akhil
              </h1>

              <p className="text-gray-400 text-lg mt-3 max-w-2xl">
                Manage your AI chats, analyze resumes, generate projects,
                and track your progress—all from one intelligent dashboard.
              </p>

            </div>

            {/* Stats */}
            <StatsCards />

            {/* Projects */}
            <RecentProjects />

            {/* Quick Tools */}
            <QuickTools />

            {/* Activity */}
            <Activity />

          </div>

        </main>

      </div>

    </div>
  );
}

export default Dashboard;