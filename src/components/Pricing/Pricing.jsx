function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      features: [
        "AI Chat",
        "Resume Review",
        "Community Support"
      ],
      button: "Get Started"
    },
    {
      name: "Pro",
      price: "₹499/mo",
      features: [
        "Everything in Starter",
        "AI Code Review",
        "Learning Roadmaps",
        "Priority Support"
      ],
      button: "Start Pro"
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited Users",
        "API Access",
        "Dedicated Support",
        "Custom AI Solutions"
      ],
      button: "Contact Us"
    }
  ];

  return (
    <section className="bg-black text-white py-28">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Choose Your
          <span className="text-blue-500"> Plan</span>
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Simple pricing for everyone.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold">
                {plan.name}
              </h3>

              <p className="text-4xl text-blue-500 font-bold mt-4">
                {plan.price}
              </p>

              <ul className="mt-6 space-y-3 text-gray-300">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>

              <button className="w-full mt-8 bg-blue-600 py-3 rounded-xl hover:bg-blue-700">
                {plan.button}
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Pricing;