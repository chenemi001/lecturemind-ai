import FeatureCard from "@/components/ui/FeatureCard";
import {
  Mic,
  Brain,
  FileText,
  Cloud,
} from "lucide-react";

const features = [
  {
    icon: <Mic size={30} />,
    title: "Lecture Recording",
    description:
      "Record your lectures with one click and let AI process everything automatically.",
  },
  {
    icon: <Brain size={30} />,
    title: "AI Summaries",
    description:
      "Generate concise summaries from long lectures in just a few seconds.",
  },
  {
    icon: <FileText size={30} />,
    title: "PDF Export",
    description:
      "Download beautifully formatted notes as PDF documents for offline study.",
  },
  {
    icon: <Cloud size={30} />,
    title: "Cloud Sync",
    description:
      "Access your notes from any device with secure cloud synchronization.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-gray-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold text-emerald-600">
            FEATURES
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Everything You Need To Study Smarter
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            LectureMind AI combines note-taking, AI summaries,
            flashcards, and cloud storage into one powerful
            platform.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}