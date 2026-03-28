"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    desktop: "FARMING\nREIMAGINED",
    mobile: "FARMING\nREIMAGINED",
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2600&auto=format&fit=crop",
    alt: "Farm at sunrise",
  },
  {
    desktop: "BUILT FOR\nINDIAN FARMERS",
    mobile: "BUILT FOR\nINDIAN\nFARMERS",
    src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2600&auto=format&fit=crop",
    alt: "Crop field with morning light",
  },
  {
    desktop: "SMART\nAGRICULTURE",
    mobile: "SMART\nAGRICULTURE",
    src: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?q=80&w=2600&auto=format&fit=crop",
    alt: "Irrigation system in fields",
  },
  {
    desktop: "POWERING\nYOUR FIELDS",
    mobile: "POWERING\nYOUR FIELDS",
    src: "https://images.unsplash.com/photo-1592982537447-6f2a6a0f8a44?q=80&w=2600&auto=format&fit=crop",
    alt: "Tractor in agricultural land",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const nextIndex = (index + 1) % slides.length;
    const preloadedImage = new window.Image();
    preloadedImage.src = slides[nextIndex].src;
  }, [index]);

  return (
    <section
      id="home"
      className="relative isolate h-[100svh] w-screen overflow-hidden bg-black"
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={slides[index].src}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 5, ease: "linear" },
          }}
          className="absolute inset-0 z-0 transform-gpu will-change-transform"
        >
          <Image
            src={slides[index].src}
            alt={slides[index].alt}
            fill
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            className="object-cover object-center"
            sizes="100vw"
            quality={85}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        {slides.map((slide, slideIndex) => {
          const isActive = slideIndex === index;

          return (
            <motion.div
              key={slide.src}
              initial={false}
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -20 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full flex items-center justify-center px-4 md:px-8 transform-gpu will-change-transform"
              aria-hidden={!isActive}
            >
              <h1 className="mx-auto max-w-[90vw] text-center font-display font-extrabold uppercase text-white/90 leading-[0.9] tracking-tight text-[clamp(2.5rem,8vw,9rem)] drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
                <span className="hidden sm:inline whitespace-pre-line text-balance">
                  {slide.desktop}
                </span>
                <span className="sm:hidden inline-block whitespace-pre-line text-balance">
                  {slide.mobile}
                </span>
              </h1>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-white/90 font-sans text-[10px] md:text-xs font-semibold tracking-[0.3em] uppercase drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
          SCROLL ↓
        </span>
      </motion.div>
    </section>
  );
}
