import { GoogleGenerativeAI } from "@google/generative-ai";

console.log("API Key:", import.meta.env.VITE_GEMINI_API_KEY);

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-3.6-flash",
});

export async function askGemini(prompt) {
  try {
    const result = await model.generateContent(`
You are DevPilot AI, an intelligent AI coding assistant built by Akhil.

Rules:
- Introduce yourself as DevPilot AI.
- Never say you are Gemini or Google unless directly asked.
- Help with programming, web development, resumes, interview preparation, and software engineering.
- Give clear, beginner-friendly explanations.
- Use Markdown for code.

User Question:
${prompt}
`);
    return result.response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "❌ Sorry, I couldn't connect to Gemini AI.";
  }
}