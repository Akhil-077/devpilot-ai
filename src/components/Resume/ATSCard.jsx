function ATSCard({ score }) {
  let status = "Needs Improvement";
  let color = "from-red-500 to-red-600";

  if (score >= 85) {
    status = "Excellent";
    color = "from-green-500 to-emerald-500";
  } else if (score >= 70) {
    status = "Good";
    color = "from-yellow-500 to-orange-500";
  }

  return (
    <div className="mt-8 bg-[#111827] border border-gray-800 rounded-3xl p-8 shadow-lg">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-3xl font-bold text-white">
            ATS Score
          </h2>

          <p className="text-gray-400 mt-2">
            AI-powered resume evaluation
          </p>

        </div>

        <div
          className={`w-28 h-28 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-4xl font-bold text-white shadow-xl`}
        >
          {score}
        </div>

      </div>

      <div className="w-full h-4 rounded-full bg-gray-800 overflow-hidden">

        <div
          className={`h-4 rounded-full bg-gradient-to-r ${color}`}
          style={{ width: `${score}%` }}
        />

      </div>

      <div className="mt-5 flex justify-between items-center">

        <span className="text-gray-400">
          Resume Quality
        </span>

        <span className="text-green-400 font-semibold">
          {status}
        </span>

      </div>

    </div>
  );
}

export default ATSCard;