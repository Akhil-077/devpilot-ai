function AnalysisResult({ analysis }) {
  return (
    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* Summary */}
      <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4">
          📝 AI Summary
        </h2>

        <p className="text-gray-300 leading-8">
          {analysis.summary}
        </p>
      </div>

      {/* Interview */}
      <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4">
          🎯 Interview Readiness
        </h2>

        <div className="text-5xl mb-4">
          ⭐⭐⭐⭐☆
        </div>

        <p className="text-green-400 text-xl font-semibold">
          {analysis.interviewReadiness}
        </p>
      </div>

      {/* Strengths */}
      <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6">

        <h2 className="text-2xl font-bold text-white mb-5">
          💪 Strengths
        </h2>

        <div className="space-y-3">

          {analysis.strengths.map((item, index) => (

            <div
              key={index}
              className="bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3 text-green-400"
            >
              ✅ {item}
            </div>

          ))}

        </div>

      </div>

      {/* Missing Skills */}
      <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6">

        <h2 className="text-2xl font-bold text-white mb-5">
          🚨 Missing Skills
        </h2>

        <div className="space-y-3">

          {analysis.missingSkills.map((item, index) => (

            <div
              key={index}
              className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400"
            >
              ❌ {item}
            </div>

          ))}

        </div>

      </div>

      {/* Improvements */}

      <div className="lg:col-span-2 bg-[#111827] border border-gray-800 rounded-3xl p-6">

        <h2 className="text-2xl font-bold text-white mb-5">
          💡 AI Suggestions
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          {analysis.improvements.map((item, index) => (

            <div
              key={index}
              className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 text-gray-300"
            >
              {item}
            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default AnalysisResult;