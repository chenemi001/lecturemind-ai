import { Mic, Brain, Download } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Mic size={32} />,
    title: "Record Your Lecture",
    description:
      "Start recording during class or upload an existing lecture audio file.",
  },
  {
    number: "02",
    icon: <Brain size={32} />,
    title: "AI Creates Notes",
    description:
      "LectureMind AI automatically generates organized notes, summaries, and flashcards.",
  },
  {
    number: "03",
    icon: <Download size={32} />,
    title: "Download & Study",
    description:
      "Export your notes as PDFs or continue studying from any device.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-emerald-600">
            HOW IT WORKS
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Three Simple Steps
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            From lecture recording to AI-generated study materials in just a few clicks.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                {step.icon}
              </div>

              <span className="mt-6 inline-block rounded-full bg-emerald-600 px-3 py-1 text-sm font-semibold text-white">
                Step {step.number}
              </span>

              <h3 className="mt-5 text-2xl font-bold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}