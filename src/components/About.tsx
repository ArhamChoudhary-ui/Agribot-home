"use client";

import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-primary-50 relative border-b border-primary-100">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center lg:text-left">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-10"
        >
          <motion.p variants={itemVariants} className="font-display font-semibold tracking-wide uppercase text-primary-600 bg-primary-100 px-4 py-1.5 inline-block rounded-md border border-primary-200">
            Why Agribot?
          </motion.p>
          
          <motion.h2 variants={itemVariants} className="font-display text-3xl md:text-5xl lg:text-5xl font-extrabold text-primary-950 leading-tight">
            Designed to reduce hard manual work and help you take better care of your crops with less effort.
          </motion.h2>

          <motion.div variants={itemVariants} className="w-16 h-1.5 bg-accent-500 rounded-full mx-auto lg:mx-0" />

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-earth-800 leading-relaxed font-sans font-medium">
            Farming today comes with heavy challenges: finding reliable labor, saving water during harsh seasons, and managing rising costs. Big tractors often damage the soil and use expensive fuel.
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-primary-800 leading-relaxed font-sans">
            Agribot hovers just above the ground. It works automatically, saving your time and energy so you can focus on making your farm grow instead of just managing tasks. Simple, effective, and built for exact Indian farming conditions.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
