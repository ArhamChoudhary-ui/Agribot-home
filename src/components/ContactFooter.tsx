"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function ContactFooter() {
  return (
    <>
      <section id="contact" className="py-24 bg-primary-900 text-white relative flex flex-col items-center justify-center border-t-8 border-accent-500">

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-extrabold text-4xl md:text-6xl text-white pt-8"
          >
            Start Using Agribot Today
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-100/90 max-w-2xl mx-auto font-medium"
          >
            Join hundreds of local farmers who are saving time, reducing costs, and growing better crops with our machines.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
          >
            <a
              href="#signup"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border-b-4 border-accent-600 active:border-b-0 active:translate-y-1 bg-accent-500 text-primary-950 transition-all font-bold text-lg shadow-lg"
            >
              Request Demo
            </a>
            <a
              href="#sales"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-primary-100 hover:bg-primary-800 transition-all font-bold text-lg text-primary-50"
            >
              Contact Us
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-12 flex flex-col md:flex-row items-center justify-center gap-8 border-t border-primary-800"
          >
            <div className="flex items-center gap-3 bg-primary-950 px-6 py-3 rounded-xl shadow-inner border border-primary-800/50">
              <div className="w-12 h-12 rounded-full bg-primary-800 flex items-center justify-center">
                <Phone className="w-6 h-6 text-accent-400" />
              </div>
              <div className="text-left">
                <p className="text-sm text-primary-100/60 font-medium">Call Support</p>
                <p className="font-bold text-xl">+91 1800-123-4567</p>
              </div>
            </div>

            <a href="https://wa.me/919876543210" className="flex items-center gap-3 bg-white px-8 py-4 rounded-xl shadow-lg border-2 border-[#128C7E] group hover:scale-105 transition-transform text-[#075E54]">
              <MessageCircle className="w-8 h-8 text-[#25D366] group-hover:rotate-12 transition-transform" />
              <div className="text-left">
                <p className="font-bold text-xl">Chat on WhatsApp</p>
                <p className="text-sm font-medium opacity-80">Instant reply guarantee</p>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="bg-primary-950 py-10 border-t border-primary-900 text-primary-100/60 text-center font-medium">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="font-sans mb-4 md:mb-0">&copy; {new Date().getFullYear()} Agribot Robotics India Pvt Ltd.</p>
          <div className="flex gap-6 font-sans text-sm">
            <a href="#" className="hover:text-accent-400 border-b border-transparent hover:border-accent-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent-400 border-b border-transparent hover:border-accent-400 transition-colors">Farmer Terms</a>
            <a href="#" className="hover:text-accent-400 border-b border-transparent hover:border-accent-400 transition-colors">Distributor Login</a>
          </div>
        </div>
      </footer>
    </>
  );
}
