"use client";

import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Glow 1 */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-10 top-20 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl"
      />

      {/* Glow 2 */}
      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-10 top-32 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl"
      />

      {/* Glow 3 */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-200/20 blur-3xl"
      />
    </div>
  );
}