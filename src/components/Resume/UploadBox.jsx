import { UploadCloud, FileText } from "lucide-react";

function UploadBox({ onFileSelect }) {
  const handleChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-3xl p-12 shadow-xl">

      <div className="flex flex-col items-center text-center">

        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-6">

          <UploadCloud className="text-white" size={42} />

        </div>

        <h2 className="text-3xl font-bold text-white">
          Upload Your Resume
        </h2>

        <p className="text-gray-400 mt-3 max-w-xl leading-7">
          Upload your resume in PDF format and let DevPilot AI analyze
          your resume, calculate an ATS score, identify missing skills,
          and provide interview-ready suggestions.
        </p>

        <label className="mt-10 cursor-pointer">

          <input
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleChange}
          />

          <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-4 rounded-2xl text-white font-semibold transition-all duration-300 shadow-lg">

            <FileText size={22} />

            Choose Resume (PDF)

          </div>

        </label>

        <p className="text-gray-500 text-sm mt-5">
          Supported format: PDF • Maximum size: 5 MB
        </p>

      </div>

    </div>
  );
}

export default UploadBox;