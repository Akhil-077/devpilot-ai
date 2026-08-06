import { useState } from "react";

import Sidebar from "../components/Dashboard/Sidebar";
import Header from "../components/Dashboard/Header";

import AnalysisHeader from "../components/Resume/AnalysisHeader";
import UploadBox from "../components/Resume/UploadBox";
import LoadingSpinner from "../components/Resume/LoadingSpinner";
import ATSCard from "../components/Resume/ATSCard";
import AnalysisResult from "../components/Resume/AnalysisResult";

import { extractTextFromPDF } from "../services/pdfReader";
import { analyzeResume } from "../services/resumeAnalyzer";

function ResumeAnalyzer() {
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = async (file) => {
    try {
      setSelectedFile(file);
      setLoading(true);

      // Read PDF
      const resumeText = await extractTextFromPDF(file);

      // Analyze with Gemini
      const result = await analyzeResume(resumeText);

      setAnalysis(result);
    } catch (error) {
      console.error(error);
      alert("Failed to analyze resume.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1020] flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-8 py-8">

            <AnalysisHeader />

            {!selectedFile && (
              <UploadBox onFileSelect={handleFileSelect} />
            )}

            {loading && <LoadingSpinner />}

            {!loading && analysis && (
              <>
                <ATSCard score={analysis.atsScore} />
                <AnalysisResult analysis={analysis} />
              </>
            )}

          </div>
        </main>
      </div>
    </div>
  );
}

export default ResumeAnalyzer;