import FAQItem from "@/components/ui/FAQItem";

const faqs = [
  {
    question: "Is LectureMind AI free?",
    answer:
      "Yes. We offer a free plan with essential features for students.",
  },
  {
    question: "Can I export my notes?",
    answer:
      "Absolutely. You can export your notes as PDF files.",
  },
  {
    question: "Does it work on mobile devices?",
    answer:
      "Yes. LectureMind AI is fully responsive and works on phones, tablets, and desktops.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-emerald-600">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}