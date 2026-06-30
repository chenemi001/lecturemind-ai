import PricingCard from "@/components/ui/PricingCard";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started.",
    features: [
      "AI Notes",
      "PDF Export",
      "5 Recordings",
    ],
  },
  {
    name: "Pro",
    price: "$9",
    description: "Everything you need for serious studying.",
    features: [
      "Unlimited Notes",
      "Unlimited Recordings",
      "AI Flashcards",
      "Cloud Sync",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Team",
    price: "$29",
    description: "Ideal for universities and organizations.",
    features: [
      "Everything in Pro",
      "Admin Dashboard",
      "Analytics",
      "Team Collaboration",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-gray-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-emerald-600">
            PRICING
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Choose Your Plan
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Flexible pricing for every student.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
            />
          ))}
        </div>
      </div>
    </section>
  );
}