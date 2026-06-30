export default function TrustedBy() {
  const universities = [
    "Harvard",
    "MIT",
    "Stanford",
    "Oxford",
    "Cambridge",
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-500">
          Trusted by students from leading universities
        </p>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-5">
          {universities.map((university) => (
            <div
              key={university}
              className="rounded-xl border border-gray-200 bg-gray-50 py-6 text-center font-semibold text-gray-700 transition hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600"
          >
            {university}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}