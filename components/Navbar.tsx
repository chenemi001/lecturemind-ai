"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="cursor-pointer text-2xl font-bold text-emerald-600"
        >
          LectureMind AI
        </motion.h1>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <a
              href="#features"
              className="font-medium text-gray-600 transition hover:text-emerald-600"
            >
              Features
            </a>
          </li>

          <li>
            <a
              href="#pricing"
              className="font-medium text-gray-600 transition hover:text-emerald-600"
            >
              Pricing
            </a>
          </li>

          <li>
            <a
              href="#faq"
              className="font-medium text-gray-600 transition hover:text-emerald-600"
            >
              FAQ
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="font-medium text-gray-600 transition hover:text-emerald-600"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Desktop Login */}
          <button className="hidden font-medium text-gray-600 transition hover:text-emerald-600 md:block">
            Login
          </button>

          {/* Desktop CTA */}
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="hidden rounded-xl bg-emerald-600 px-5 py-2.5 font-semibold text-white shadow-lg transition hover:bg-emerald-700 md:block"
          >
            Get Started
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 transition hover:bg-gray-100 md:hidden"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="overflow-hidden border-t border-gray-200 bg-white md:hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-6">
              <a
                href="#features"
                onClick={() => setIsOpen(false)}
                className="font-medium text-gray-700 transition hover:text-emerald-600"
              >
                Features
              </a>

              <a
                href="#pricing"
                onClick={() => setIsOpen(false)}
                className="font-medium text-gray-700 transition hover:text-emerald-600"
              >
                Pricing
              </a>

              <a
                href="#faq"
                onClick={() => setIsOpen(false)}
                className="font-medium text-gray-700 transition hover:text-emerald-600"
              >
                FAQ
              </a>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="font-medium text-gray-700 transition hover:text-emerald-600"
              >
                Contact
              </a>

              <button className="rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700">
                Login
              </button>

              <button className="rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}