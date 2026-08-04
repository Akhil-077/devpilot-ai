function Hero() {
  return (
    <section className="pt-24 bg-black text-white">
      <div className="max-w-7xl mx-auto min-h-[90vh] flex items-center justify-between px-8">

        {/* Left */}
        <div className="max-w-xl">

          <p className="text-blue-500 font-semibold text-lg">
            🚀 AI Powered Platform
          </p>

          <h1 className="text-5xl lg:text-6xl lg:text-6xl font-bold leading-tight mt-6">
            Build AI
            <br />
            Applications
            <br />
            <span className="text-blue-500">
              Like Professionals
            </span>
          </h1>

          <p className="text-gray-400 text-xl mt-8">
            Build, Deploy and Scale AI applications using
            modern full stack technologies.
          </p>

          <div className="flex gap-6 mt-10">

            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold rounded-xl">
              Get Started
            </button>

            <button className="border border-gray-600 hover:border-blue-500 px-8 py-4 rounded-xl">
              GitHub
            </button>

          </div>

        </div>

        {/* Right */}

        <div className="w-[500px] h-[500px] rounded-3xl bg-zinc-900 border border-zinc-700 flex items-center justify-center">

          <h2 className="text-3xl font-bold text-gray-400">
            Dashboard
          </h2>

        </div>

      </div>
    </section>
  );
}

export default Hero;