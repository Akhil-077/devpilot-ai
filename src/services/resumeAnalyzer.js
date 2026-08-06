import { askGemini } from "./gemini";

/**
 * Analyze resume text using Gemini AI
 */

export async function analyzeResume(resumeText) {
  const prompt = `
You are an expert ATS Resume Analyzer.

Analyze the following resume.

Return ONLY valid JSON.

{
  "atsScore": 90,
  "summary": "",
  "strengths": [],
  "missingSkills": [],
  "improvements": [],
  "interviewReadiness": ""
}

Resume:

${resumeText}
`;

  try {
    const response = await askGemini(prompt);

    // Remove markdown if Gemini returns ```json
    const cleaned = response
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleaned);

  } catch (error) {
    console.error("Resume Analysis Error:", error);

    return {
      atsScore: 0,
      summary: "Unable to analyze resume.",
      strengths: [],
      missingSkills: [],
      improvements: [],
      interviewReadiness: "Unknown",
    };
  }
}