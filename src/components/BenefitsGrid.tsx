"use client";

import { motion } from "framer-motion";
import { User, Droplet, TrendingUp, Wallet } from "lucide-react";

const benefits = [
  {
    icon: User,
    title: "Less Physical Work",
    desc: "Machines do the walking and heavy lifting. You manage the farm from the shade.",
    color: "bg-earth-100",
    iconColor: "text-earth-800"
  },
  {
    icon: Droplet,
    title: "Saves Water",
    desc: "Only puts water exactly where the roots need it, extending borewell life.",
    color: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    icon: TrendingUp,
    title: "Better Crop Yield",
    desc: "Healthier soil and timed medicine means more grain in every single harvest.",
    color: "bg-primary-50",
    iconColor: "text-primary-700"
  },
  {
    icon: Wallet,
    title: "Reduces Cost",
    desc: "Stop wasting money on extra chemicals and expensive tractor diesel.",
    color: "bg-yellow-50",
    iconColor: "text-yellow-700"
  },
];

export default function BenefitsGrid() {
  return (
    <section id="benefits" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6 }}
            className="font-display font-extrabold text-4xl text-primary-950 mb-4"
          >
            How Agribot Helps You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-earth-800 font-medium max-w-2xl mx-auto"
          >
            Clear, honest results that make a daily difference on your farm.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-primary-50 px-6 py-10 rounded-2xl border border-primary-100 shadow-sm flex flex-col items-center text-center hover:bg-white hover:shadow-md hover:border-primary-200 transition-all cursor-default"
            >
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-sm border border-white ${item.color}`}>
                <item.icon className={`w-10 h-10 ${item.iconColor}`} />
              </div>
              <h3 className="font-display font-bold text-2xl text-primary-900 mb-3">
                {item.title}
              </h3>
              <p className="text-earth-800 font-medium leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
