type PricingCardProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
};

export default function PricingCard({
  name,
  price,
  description,
  features,
  popular = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-3xl border p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
        popular
          ? "border-emerald-600 bg-emerald-50 shadow-xl"
          : "border-gray-200 bg-white"
      }`}
    >
      {popular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white">
          Most Popular
        </span>
      )}

      <h3 className="text-2xl font-bold">{name}</h3>

      <p className="mt-2 text-gray-600">
        {description}
      </p>

      <h2 className="mt-6 text-5xl font-extrabold">
        {price}
      </h2>

      <ul className="mt-8 space-y-4">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3"
          >
            ✅ {feature}
          </li>
        ))}
      </ul>

      <button
        className={`mt-10 w-full rounded-xl py-3 font-semibold transition ${
          popular
            ? "bg-emerald-600 text-white hover:bg-emerald-700"
            : "bg-gray-900 text-white hover:bg-black"
        }`}
      >
        Get Started
      </button>
    </div>
  );
}