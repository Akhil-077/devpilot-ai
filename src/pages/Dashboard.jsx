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
        <main className="p-8">

          {/* Welcome Section */}
          <div className="mb-8">

            <h1 className="text-4xl font-bold text-white">
              Welcome Back 👋
            </h1>

            <p className="text-gray-400 text-lg mt-2">
              Welcome to your DevPilot AI Dashboard
            </p>

          </div>

          {/* Stats Cards */}
          <StatsCards />

          {/* Recent Projects */}
          <RecentProjects />

          {/* Quick AI Tools */}
          <QuickTools />

          {/* Activity Feed */}
          <Activity />

        </main>

      </div>

    </div>
  );
}

export default Dashboard;