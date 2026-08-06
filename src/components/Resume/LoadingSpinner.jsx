import { Sparkles } from "lucide-react";

function LoadingSpinner() {
  return (
    <div className="mt-10 bg-[#111827] border border-gray-800 rounded-3xl p-12 shadow-xl">

      <div className="flex flex-col items-center text-center">

        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center animate-pulse">

          <Sparkles
            size={36}
            className="text-white"
          />

        </div>

        <h2 className="text-3xl font-bold text-white mt-8">
          DevPilot AI is analyzing your resume...
        </h2>

        <p className="text-gray-400 mt-4 max-w-lg">
          Reading your resume, calculating ATS score,
          identifying missing skills and generating
          interview suggestions.
        </p>

        {/* Progress Bar */}

        <div className="w-full max-w-xl h-3 bg-gray-800 rounded-full mt-10 overflow-hidden">

          <div className="h-3 w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>

        </div>

        <div className="flex gap-3 mt-8">

          <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></span>

          <span
            className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></span>

          <span
            className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></span>

        </div>

      </div>

    </div>
  );
}

export default LoadingSpinner;