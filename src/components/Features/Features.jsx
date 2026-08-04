function Features() {
  const features = [
    {
      icon: "🤖",
      title: "AI Chat",
      description: "Ask AI anything while building your projects."
    },
    {
      icon: "💻",
      title: "Code Review",
      description: "Review and improve your code instantly."
    },
    {
      icon: "📄",
      title: "Resume Analyzer",
      description: "Get AI feedback on your resume."
    },
    {
      icon: "📊",
      title: "Analytics",
      description: "Track your coding progress."
    },
    {
      icon: "🚀",
      title: "Deploy",
      description: "Deploy your applications with one click."
    },
    {
      icon: "🧠",
      title: "Learning Roadmap",
      description: "Generate a personalized learning plan."
    }
  ];

  return (
    <section className="bg-black text-white py-32">
      <div className="container mx-auto px-6 lg:px-12">

        <h2 className="text-5xl font-bold text-center">
          Why Choose
          <span className="text-blue-500"> DevPilot AI</span>
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Everything you need to become a professional developer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-2xl p-8 border border-zinc-700 hover:border-blue-500 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-6xl">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;