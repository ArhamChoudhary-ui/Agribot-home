"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function DemoSection() {
  return (
    <section id="demo" className="py-24 bg-earth-100 relative border-t border-earth-200">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          className="font-display font-bold text-3xl md:text-5xl text-primary-950 mb-6"
        >
          Watch Agribot In The Field
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-earth-800 mb-12 max-w-3xl mx-auto font-medium"
        >
          See exactly how it moves gently over crops without touching them. The battery lasts all day, and it's built tough enough for unpredictable Indian weather.
        </motion.p>

        {/* Realistic Video Placeholder Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative w-full mx-auto aspect-video rounded-xl overflow-hidden bg-primary-950 shadow-xl border-[6px] border-white group cursor-pointer"
        >
          <img 
            src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=2670&auto=format&fit=crop" 
            alt="Agribot running in a real agricultural field" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-primary-900/30 transition-colors duration-300" />
          
          {/* Simple Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-accent-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300 border-4 border-white/20">
              <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
