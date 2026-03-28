"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type FeatureKey = "spray" | "soil" | "nav" | "energy";

const featureData: Record<
  FeatureKey,
  { title: string; desc: string; benefits: string[]; image: string }
> = {
  spray: {
    title: "Smart Crop Spraying",
    desc: "Sprays precise amounts of water and medicine only on the plants that need it. Protects your crop while saving supplies.",
    benefits: [
      "Sprays only where needed to avoid waste.",
      "Saves up to 50% on pesticides and water.",
      "Reduces overall farm running cost significantly."
    ],
    image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=2673&auto=format&fit=crop",
  },
  soil: {
    title: "Soil Health Monitoring",
    desc: "Checks moisture and nutrients under the soil, telling you exactly when and where to water your fields so the soil stays healthy.",
    benefits: [
      "Know exactly which part of the farm is dry.",
      "Prevents over-watering and root damage.",
      "Keeps soil fertile for the next harvest season."
    ],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2664&auto=format&fit=crop",
  },
  nav: {
    title: "Automatic Field Movement",
    desc: "Moves around the field safely on its own without crushing crops, even if GPS signals are weak during cloudy weather.",
    benefits: [
      "Never damages your grown plants.",
      "Learns the exact shape of your land.",
      "Can work through the night with zero accidents."
    ],
    image: "https://images.unsplash.com/photo-1586771107445-d3af9e701c09?q=80&w=2670&auto=format&fit=crop",
  },
  energy: {
    title: "Energy Efficient Operation",
    desc: "Runs on simple, removable batteries instead of expensive diesel fuel. Quiet, clean, and cheap to recharge.",
    benefits: [
      "Batteries swap out in under 2 minutes.",
      "Zero diesel smoke on your fresh crops.",
      "Saves thousands of rupees in fuel costs."
    ],
    image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=2670&auto=format&fit=crop",
  },
};

export default function FeaturesInteractive() {
  const [active, setActive] = useState<FeatureKey>("spray");

  return (
    <section id="features" className="py-24 bg-primary-800 text-white min-h-[800px] flex items-center shadow-inner">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Interactive List (Left) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-accent-400 mb-6 drop-shadow-sm">
            What Agribot<br className="hidden md:block" /> Does For You
          </h2>

          {(Object.keys(featureData) as FeatureKey[]).map((key) => {
            const isActive = active === key;
            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                className="text-left py-4 px-6 border-l-4 group transition-all relative rounded-r-lg"
                style={{
                  borderColor: isActive ? "var(--color-accent-500)" : "transparent",
                  backgroundColor: isActive ? "rgba(22, 36, 16, 0.4)" : "transparent"
                }}
              >
                <span
                  className={`font-display font-bold text-2xl md:text-3xl transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-primary-100/60 hover:text-primary-100/80"
                  }`}
                >
                  {featureData[key].title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Feature Details Panel (Right) */}
        <div className="lg:col-span-7 h-full min-h-[500px] flex items-center relative overflow-hidden rounded-2xl bg-white text-primary-950 shadow-2xl border border-primary-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col"
            >
              {/* Image Header */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden border-b-4 border-accent-500">
                <img
                  src={featureData[active].image}
                  alt={featureData[active].title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description Body */}
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <h3 className="font-display font-bold text-3xl text-primary-900 mb-4">
                  {featureData[active].title}
                </h3>
                
                <p className="text-lg text-earth-800 mb-6 leading-relaxed bg-earth-100 p-4 rounded-lg font-medium">
                  {featureData[active].desc}
                </p>

                <ul className="space-y-3 mt-auto">
                  {featureData[active].benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary-600 shrink-0 mt-0.5" />
                      <span className="text-primary-950 font-medium">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
