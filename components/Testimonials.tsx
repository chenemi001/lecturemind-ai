import TestimonialCard from "@/components/ui/TestimonialCard";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Computer Science Student",
    review:
      "LectureMind AI completely changed the way I study. I save hours every week.",
  },
  {
    name: "David Kim",
    role: "Medical Student",
    review:
      "The AI summaries are incredibly accurate. I no longer spend hours writing notes.",
  },
  {
    name: "Emily Brown",
    role: "Engineering Student",
    review:
      "The flashcards helped me prepare for exams much faster than traditional studying.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-emerald-600">
            TESTIMONIALS
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Loved by Students
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Thousands of students use LectureMind AI to study smarter and save time.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              role={testimonial.role}
              review={testimonial.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}