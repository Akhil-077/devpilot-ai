import { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "What is DevPilot AI?",
      answer: "DevPilot AI is an AI-powered platform to help developers build, learn, and deploy applications."
    },
    {
      question: "Is DevPilot AI free?",
      answer: "Yes. We offer a free plan with essential AI tools and premium plans with advanced features."
    },
    {
      question: "Can I analyze my resume?",
      answer: "Yes. Our AI Resume Analyzer provides suggestions to improve your resume."
    },
    {
      question: "Which technologies are used?",
      answer: "React, Tailwind CSS, Node.js, Express, MongoDB, and AI APIs."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-28">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Frequently Asked
          <span className="text-blue-500"> Questions</span>
        </h2>

        <div className="mt-12 space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-700 rounded-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex justify-between items-center"
              >
                <span className="font-semibold">{faq.question}</span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;