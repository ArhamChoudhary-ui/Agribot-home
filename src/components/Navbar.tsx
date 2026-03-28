"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-transparent backdrop-blur-md">
        <div className="w-full h-14 md:h-[3.75rem] px-6 sm:px-12 flex items-center justify-between">
          <Link
            href="/"
            className="font-display font-black text-[1.35rem] md:text-[1.45rem] tracking-tight text-[#f8f8f8]"
          >
            Agribot.
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="font-sans text-xs md:text-sm font-bold tracking-[0.16em] uppercase text-[#f8f8f8] hover:opacity-100 opacity-85 transition-opacity"
          >
            {isOpen ? "CLOSE" : "+ MENU"}
          </button>
        </div>
      </header>

      {/* Fullscreen Premium Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            }}
            animate={{
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
            exit={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-earth-100 flex flex-col justify-center px-6 lg:px-24"
          >
            <nav className="flex flex-col space-y-4">
              {["Home", "About", "Features", "Benefits", "Contact"].map(
                (name, i) => (
                  <motion.a
                    key={name}
                    href={`#${name.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.2 + i * 0.1,
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="font-display font-black text-6xl md:text-8xl tracking-tighter text-primary-950 hover:text-accent-500 transition-colors uppercase leading-[0.85]"
                  >
                    {name}
                  </motion.a>
                ),
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
