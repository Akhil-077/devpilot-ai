function Stats() {
  const stats = [
    { number: "10K+", title: "Developers" },
    { number: "500+", title: "AI Reviews" },
    { number: "120+", title: "Projects" },
    { number: "98%", title: "Success Rate" },
  ];

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          Trusted by
          <span className="text-blue-500"> Developers</span>
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16">
          Numbers that show our growing community.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-2xl border border-zinc-700 p-8 text-center hover:border-blue-500 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-5xl font-bold text-blue-500">
                {item.number}
              </h3>

              <p className="text-gray-400 mt-4 text-lg">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;