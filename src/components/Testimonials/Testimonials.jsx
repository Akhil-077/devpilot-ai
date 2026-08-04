function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Frontend Developer",
      review:
        "DevPilot AI helped me prepare for interviews and improve my coding skills.",
    },
    {
      name: "Priya Verma",
      role: "Full Stack Developer",
      review:
        "The AI Resume Analyzer gave me valuable feedback and improved my resume.",
    },
    {
      name: "Akhil",
      role: "Computer Science Student",
      review:
        "I built my first full-stack AI project using DevPilot AI. The learning roadmap is amazing!",
    },
  ];

  return (
    <section className="bg-black py-40 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          What Our
          <span className="text-blue-500"> Users Say</span>
        </h2>

        <p className="text-gray-400 text-center mt-4">
          Trusted by developers and students worldwide.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {testimonials.map((user, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-yellow-400 text-xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-300 mt-6 italic">
                "{user.review}"
              </p>

              <h3 className="text-xl font-bold mt-8">
                {user.name}
              </h3>

              <p className="text-gray-500">
                {user.role}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;