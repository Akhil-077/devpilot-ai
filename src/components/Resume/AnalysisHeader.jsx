import { Sparkles } from "lucide-react";

function AnalysisHeader() {
  return (
    <div className="mb-10">

      <div className="flex items-center gap-3 mb-3">

        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">

          <Sparkles className="text-white" />

        </div>

        <div>

          <h1 className="text-4xl font-bold text-white">
            Resume Analyzer AI
          </h1>

          <p className="text-green-400 text-sm">
            Powered by Gemini AI
          </p>

        </div>

      </div>

      <p className="text-gray-400 text-lg max-w-3xl">
        Upload your resume and receive an AI-powered ATS score,
        strengths, missing skills, interview readiness and
        improvement suggestions.
      </p>

    </div>
  );
}

export default AnalysisHeader;