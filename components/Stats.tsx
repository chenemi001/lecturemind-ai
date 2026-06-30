"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "20K+",
    label: "Students",
  },
  {
    number: "500K+",
    label: "Notes Generated",
  },
  {
    number: "98%",
    label: "AI Accuracy",
  },
  {
    number: "120+",
    label: "Universities",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 text-center md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              duration: 0.6,
            }}
            whileHover={{
              y: -8,
              scale: 1.05,
            }}
            className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition"
          >
            <h2 className="text-5xl font-extrabold text-emerald-600">
              {stat.number}
            </h2>

            <p className="mt-3 text-gray-600">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}