"use client";

import { motion } from "framer-motion";
import BackgroundGlow from "@/components/ui/BackgroundGlow";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50 to-white">
      <BackgroundGlow />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center"
      >
        {/* Badge */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-4 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700"
        >
          🚀 AI-powered note taking for students
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-4xl text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl"
        >
          Turn Every Lecture Into Smart Notes
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-6 max-w-2xl text-lg leading-8 text-gray-600"
        >
          LectureMind AI helps students transform lectures into organized
          notes, summaries, flashcards, and PDFs in seconds.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 15px 30px rgba(16,185,129,0.35)",
            }}
            whileTap={{ scale: 0.96 }}
            className="rounded-xl bg-emerald-600 px-8 py-4 font-semibold text-white transition"
          >
            Start Free
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#f3f4f6",
            }}
            whileTap={{ scale: 0.96 }}
            className="rounded-xl border border-gray-300 px-8 py-4 font-semibold transition"
          >
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{
            opacity: 1,
            y: [0, -12, 0],
            scale: 1,
          }}
          transition={{
            opacity: { delay: 0.7, duration: 0.8 },
            scale: { delay: 0.7, duration: 0.8 },
            y: {
              delay: 1.5,
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
          whileHover={{
          scale: 1.02,
          boxShadow: "0px 30px 60px rgba(0,0,0,0.15)",
          }}
          className="mt-16 w-full max-w-5xl rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl"
        >
          {/* Header */}
          <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
            <h2 className="text-xl font-bold text-gray-900">
              📚 LectureMind AI Dashboard
            </h2>

            <motion.span
              animate={{
                opacity: [1, 0.4, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700"
            >
              Live
            </motion.span>
          </div>

          {/* Dashboard Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Recording Card */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-2xl bg-emerald-50 p-6"
            >
              <h3 className="mb-3 font-semibold text-gray-900">
                🎙 Recording Lecture
              </h3>

              <div className="h-3 rounded-full bg-emerald-200">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="h-3 rounded-full bg-emerald-600"
                />
              </div>

              <p className="mt-4 text-sm text-gray-600">
                AI is listening and processing your lecture...
              </p>
            </motion.div>

            {/* AI Summary Card */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-2xl bg-gray-50 p-6"
            >
              <h3 className="mb-3 font-semibold text-gray-900">
                📝 AI Summary
              </h3>

              <ul className="space-y-3 text-gray-600">
                <li>• React Components</li>
                <li>• Next.js Routing</li>
                <li>• Tailwind CSS</li>
                <li>• State Management</li>
              </ul>
            </motion.div>

            {/* Export Card */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-2xl bg-gray-50 p-6"
            >
              <h3 className="mb-3 font-semibold text-gray-900">
                📄 Export Notes
              </h3>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-3 rounded-lg bg-emerald-600 px-4 py-2 text-white"
              >
                Export PDF
              </motion.button>
            </motion.div>

            {/* Progress Card */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-2xl bg-gray-50 p-6"
            >
              <h3 className="mb-3 font-semibold text-gray-900">
                📊 Study Progress
              </h3>

              <div className="flex items-center gap-4">
                <span className="text-5xl font-bold text-emerald-600">
                  92%
                </span>

                <p className="text-sm text-gray-600">
                  Notes completed this week
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}