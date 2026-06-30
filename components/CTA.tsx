export default function CTA() {
  return (
    <section className="bg-emerald-600 py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Ready to Study Smarter?
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-emerald-100">
          Join thousands of students using LectureMind AI to create notes,
          summaries, and flashcards in seconds.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-xl bg-white px-8 py-4 font-semibold text-emerald-600 transition hover:bg-gray-100">
            Start Free
          </button>

          <button className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-emerald-600">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}