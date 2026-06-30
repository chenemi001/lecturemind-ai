type TestimonialCardProps = {
  name: string;
  role: string;
  review: string;
};

export default function TestimonialCard({
  name,
  role,
  review,
}: TestimonialCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-4 text-yellow-500 text-xl">
        ⭐⭐⭐⭐⭐
      </div>

      <p className="leading-7 text-gray-600">
        "{review}"
      </p>

      <div className="mt-6">
        <h3 className="font-bold text-gray-900">
          {name}
        </h3>

        <p className="text-sm text-gray-500">
          {role}
        </p>
      </div>
    </div>
  );
}